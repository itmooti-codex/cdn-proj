(() => {
  const script = document.currentScript;
  const uid = script.getAttribute('data-uid');
  const root = document.getElementById('cdn-root');

  if (!root) {
    console.error('CDN Error: No element with id="cdn-root" found.');
    return;
  }

  if (!uid) {
    root.innerHTML = '<p style="color: red;">CDN Error: Missing user ID (data-uid) in script tag.</p>';
    return;
  }

  fetch(`https://itmooti-codex.github.io/cdn-proj/user-data/${uid}.json`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`User data not found for UID: ${uid}`);
      }
      return res.json();
    })
    .then((data) => {
      const container = document.createElement('div');
      container.style.backgroundColor = '#e0f7fa';
      container.style.padding = '20px';
      container.style.borderRadius = '8px';
      container.style.textAlign = 'center';
      container.innerHTML = `
        <h3>${data.title || 'Welcome!'}</h3>
        <p>${data.message || 'This is your personalized CDN widget.'}</p>`;
      root.appendChild(container);
    })
    .catch((error) => {
      root.innerHTML = `<p style="color: red;">CDN Error: ${error.message}</p>`;
    });
})();
