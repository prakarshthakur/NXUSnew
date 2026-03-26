(() => {
  const metaId = document
    .querySelector('meta[name="nxus-ga-measurement-id"]')
    ?.getAttribute('content')
    ?.trim();

  const measurementId =
    (typeof window !== 'undefined' && window.NXUS_GA_MEASUREMENT_ID) || metaId;

  if (
    !measurementId ||
    measurementId === 'G-XXXXXXXXXX' ||
    measurementId === 'G-XXXXXXX'
  ) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = window.gtag || gtag;

  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
    measurementId,
  )}`;
  gtagScript.onload = () => {
    gtag('js', new Date());
    gtag('config', measurementId, {
      send_page_view: true,
    });
  };
  document.head.appendChild(gtagScript);
})();

