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
<script src="https://itmooti-codex.github.io/cdn-proj/cdn.js" data-uid="YOUR_UID"></script>
```

The script will fetch `user-data/YOUR_UID.json` from the GitHub pages site and display the contents.

### Adding Your Data

For the snippet to work you need to create a JSON file under the `user-data` directory
named after your UID. For example, if your UID is `abc123` create `user-data/abc123.json`
with the following structure:

```json
{
  "title": "Hello from CDN",
  "message": "This is your custom widget content."
}
```

Commit this file to the repository (or host it on your own GitHub Pages site) so
that `cdn.js` can fetch it when your snippet loads.

## Development

The frontend logic is organized into small ES modules under `src/`:

- `firebaseConfig.js` – shared Firebase configuration
- `signup.js` – handles the sign‑up form
- `dashboard.js` – manages the dashboard view and copy/logout actions

`cdn.js` is a standalone script served via GitHub pages.
