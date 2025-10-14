document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookie-banner');
  const settingsModal = document.getElementById('cookie-settings');
  const acceptAllBtn = document.getElementById('accept-all');
  const manageBtn = document.getElementById('cookie-settings-btn');
  const saveBtn = document.getElementById('save-preferences');
  const close = document.getElementById('close-banner');
  const closeBtn = document.getElementById('close-settings');

  const analyticsToggle = document.getElementById('analytics-cookies');
  const marketingToggle = document.getElementById('marketing-cookies');

  // Load stored preferences
  const preferences = JSON.parse(localStorage.getItem('cookiePreferences'));

  if (!preferences) {
    banner.style.display = 'block';
  } else {
    applyCookiePreferences(preferences);
  }

  // Accept all
  acceptAllBtn.addEventListener('click', () => {
    const allPrefs = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem('cookiePreferences', JSON.stringify(allPrefs));
    applyCookiePreferences(allPrefs);
    banner.style.display = 'none';
  });

  // Open settings
  manageBtn.addEventListener('click', () => {
    settingsModal.style.display = 'flex';
    banner.style.display = 'none';
  });

  // Save preferences
  saveBtn.addEventListener('click', () => {
    const prefs = {
      necessary: true,
      analytics: analyticsToggle.checked,
      marketing: marketingToggle.checked
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
    applyCookiePreferences(prefs);
    settingsModal.style.display = 'none';
  });

  // Close settings
  closeBtn.addEventListener('click', () => {
    settingsModal.style.display = 'none';
    if (!localStorage.getItem('cookiePreferences')) {
      banner.style.display = 'block';
    }
  });

  //Close Cookie Banner
  close.addEventListener('click', () => {
    banner.style.display = 'none';
  });

  // Apply preferences (you can extend this for analytics scripts)
  function applyCookiePreferences(prefs) {
    if (prefs.analytics) {
      console.log("Analytics cookies enabled.");
      // initializeAnalytics();
    } else {
      console.log("Analytics cookies disabled.");
      // disableAnalytics();
    }

    if (prefs.marketing) {
      console.log("Marketing cookies enabled.");
      // enableAds();
    }
  }
});

