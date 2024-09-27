import ENV from 'rarwe/config/environment';

export function initialize() {
  setupMSW().catch((error) => {
    console.error('Failed to set up MSW', error);
  });
}

async function setupMSW() {
  if (
    window.location.hostname === 'localhost' &&
    ENV.environment === 'development'
  ) {
    let { worker } = await import('/mocks/browser.js');
    await worker.start({
      quiet: false,
      serviceWorker: {
        url: `${window.location.origin}/mockServiceWorker.js`,
      },
    });
  }
}

export default {
  initialize,
};
