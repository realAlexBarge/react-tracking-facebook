/**
 * React Facebook Tracking Module
 *
 * @package react-tracking-facebook
 * @author Alexander Barge <alexander.barge@gmail.com>
 */

export function initialize(newTrackerId) {
  /* eslint-disable */
  !(function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
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
  window.fbq('init', newTrackerId);
  /* eslint-enable */
}

export function getTracker() {
  return window.fbq;
}

export function trackPageview() {
  window.fbq('track', 'PageView');
}

export function trackEvent(eventAction = '', eventArgs = {}) {
  window.fbq('trackCustom', eventAction, eventArgs);
}

export default {
  initialize,
  getTracker,
  trackPageview,
  trackEvent,
};
