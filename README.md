# CDN Project

This is a small demo showing how to generate a personalized CDN snippet for each user. Users sign up with Firebase Authentication and are shown a script tag that can be embedded in any website. When loaded, the script fetches data for that user and renders it inside a `div` with the id `cdn-root`.

## Usage

1. Open `index.html` and sign up with your email and password.
2. After signing in you will be redirected to the dashboard.
3. Copy the script tag shown on the dashboard and paste it into any HTML page.
4. On that page include a container with `id="cdn-root"` where the content should appear.

Example embed code:

```html
<div id="cdn-root"></div>
<script src="https://dpes44.github.io/cdn-project/cdn.js" data-uid="YOUR_UID"></script>
```

The script will fetch `user-data/YOUR_UID.json` from the GitHub pages site and display the contents.

## Development

The frontend logic is organized into small ES modules under `src/`:

- `firebaseConfig.js` – shared Firebase configuration
- `signup.js` – handles the sign‑up form
- `dashboard.js` – manages the dashboard view and copy/logout actions

`cdn.js` is a standalone script served via GitHub pages.
