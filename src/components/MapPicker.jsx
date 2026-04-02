import React, { useEffect, useRef, useState } from 'react';
import { useGoogleMaps } from '../hooks/useGoogleMaps';

const DARK_MAP_STYLE = [
  { elementType: 'geometry', stylers: [{ color: '#212121' }] },
  { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#212121' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#2c2c2c' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#000000' }] },
];

export default function MapPicker({ onLocationSelect, inputRef }) {
  const mapsLoaded = useGoogleMaps();
  const mapDivRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const autocompleteRef = useRef(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!mapsLoaded || !mapDivRef.current || initialized) return;

    const initMap = (lat, lng) => {
      const map = new window.google.maps.Map(mapDivRef.current, {
        center: { lat, lng },
        zoom: 14,
        styles: DARK_MAP_STYLE,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_CENTER,
        },
      });
      mapRef.current = map;

      const marker = new window.google.maps.Marker({
        position: { lat, lng },
        map,
        draggable: true,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: '#FF2D2D',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 2,
        },
      });
      markerRef.current = marker;

      map.addListener('click', (e) => {
        const clickedLat = e.latLng.lat();
        const clickedLng = e.latLng.lng();
        marker.setPosition({ lat: clickedLat, lng: clickedLng });
        if (onLocationSelect) onLocationSelect(clickedLat, clickedLng, '');
      });

      marker.addListener('dragend', () => {
        const pos = marker.getPosition();
        if (onLocationSelect) onLocationSelect(pos.lat(), pos.lng(), '');
      });

      if (inputRef?.current) {
        const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);
        autocompleteRef.current = autocomplete;
        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace();
          if (!place.geometry) return;
          const plLat = place.geometry.location.lat();
          const plLng = place.geometry.location.lng();
          map.setCenter({ lat: plLat, lng: plLng });
          marker.setPosition({ lat: plLat, lng: plLng });
          if (onLocationSelect) onLocationSelect(plLat, plLng, place.formatted_address || place.name || '');
        });
      }

      setInitialized(true);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => initMap(pos.coords.latitude, pos.coords.longitude),
        () => initMap(25.2048, 55.2708)
      );
    } else {
      initMap(25.2048, 55.2708);
    }
  }, [mapsLoaded, initialized, onLocationSelect, inputRef]);

  if (!mapsLoaded) {
    return (
      <div style={{
        height: '300px',
        background: '#0d0d0d',
        border: '1px solid #1a1a1a',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#444',
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '0.8rem',
      }}>
        loading map...
      </div>
    );
  }

  return (
    <div
      ref={mapDivRef}
      style={{
        height: '300px',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid #1a1a1a',
      }}
    />
  );
}
