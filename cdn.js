(function () {
  const scripts = document.getElementsByTagName('script');
  const thisScript = scripts[scripts.length - 1];
  const uid = thisScript.getAttribute('data-uid');
  const root = document.getElementById('cdn-root');

  if (!root) {
    console.error('CDN Error: No element with id="cdn-root" found.');
    return;
  }

  if (!uid) {
    root.innerHTML = '<p style="color: red;">CDN Error: Missing user ID (data-uid) in script tag.</p>';
    return;
  }

  fetch(`https://dpes44.github.io/cdn-project/user-data/${uid}.json`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`User data not found for UID: ${uid}`);
      }
      return response.json();
    })
    .then(data => {
      const container = document.createElement('div');
      container.style.backgroundColor = '#e0f7fa';
      container.style.padding = '20px';
      container.style.borderRadius = '8px';
      container.style.textAlign = 'center';
      container.innerHTML = `
        <h3>${data.title || 'Welcome!'}</h3>
        <p>${data.message || 'This is your personalized CDN widget.'}</p>
      `;
      root.appendChild(container);
    })
    .catch(error => {
      root.innerHTML = `<p style="color: red;">CDN Error: ${error.message}</p>`;
    });
})();
