# NXUS (web)

## Google Analytics (GA4)

### 1) Create a GA4 property + web data stream
- In Google Analytics, create a **GA4 property**.
- Add a **Web** data stream for your `nxus` domain.
- Copy the **Measurement ID** (looks like `G-30KZZMNYKN`).

### 2) Add your Measurement ID
Update this meta tag in each HTML page (already added as a placeholder):

- `index.html`
- `feed.html`
- `likes.html`
- `settings.html`
- `host.html`
- `login.html`

Find:

```html
<meta name="nxus-ga-measurement-id" content="G-30KZZMNYKN">
```

If you change GA properties later, replace it with the new Measurement ID.

### 3) Where to view analytics
- **Realtime users**: GA → **Reports** → **Realtime**
- **Traffic + pages**: GA → **Reports** → **Engagement** → **Pages and screens**

