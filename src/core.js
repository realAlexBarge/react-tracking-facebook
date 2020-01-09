/**
 * React Facebook Tracking Module
 *
 * @package react-tracking-facebook
 * @author Alexander Barge <alexander.barge@gmail.com>
 */

const { fbq } = window;

export function getTracker() {
  return window.fbq;
}

export function trackPageview() {
  try {
    if (typeof fbq === 'function') {
      fbq('track', 'PageView');
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn(e);
  }
}

export function trackEvent(eventAction = '', eventArgs = {}) {
  try {
    if (typeof fbq === 'function') {
      fbq('track', eventAction, eventArgs);
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn(e);
  }
}

export function trackCustomEvent(eventAction = '', eventArgs = {}) {
  try {
    if (typeof fbq === 'function') {
      fbq('trackCustom', eventAction, eventArgs);
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn(e);
  }
}

export function initialize(newTrackerId) {
  try {
    /* eslint-disable */
    !(function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js',
    );
    if (typeof fbq === 'function') {
      fbq('init', newTrackerId);
    }
    /* eslint-enable */
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn(e);
  }
}

export default {
  initialize,
  getTracker,
  trackPageview,
  trackEvent,
  trackCustomEvent,
};
