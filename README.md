# React Tracking Facebook

[![Build Status](https://travis-ci.org/realalexbarge/react-tracking-facebook.svg?branch=master)](https://travis-ci.org/realalexbarge/react-tracking-facebook) [![dependencies Status](https://david-dm.org/realalexbarge/react-tracking-facebook/status.svg)](https://david-dm.org/realalexbarge/react-tracking-facebook) [![devDependencies Status](https://david-dm.org/realalexbarge/react-tracking-facebook/dev-status.svg)](https://david-dm.org/realalexbarge/react-tracking-facebook?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Un-official module to easily add Facebook pageview tracking to react apps. It functions as a tiny wrapper for the native script tag and window api. After initialization the Facebook script is injected into the document.

# Installation

With [npm](https://www.npmjs.com/):

```bash
npm install react-tracking-facebook --save
```

# Usage

Before tracking any page views or events the tracker needs to be imported and initialized with the custom tracking id:

```js
import FacebookTracking from 'react-tracking-facebook';
FacebookTracking.initialize('TRACKING_ID');
```

After initializing page views can be tracked like this:

```js
FacebookTracking.trackPageview();
```

There is also the option to track custom events with event action:

```js
FacebookTracking.trackEvent(eventAction, eventArgs);
```

There is also a method to expose the raw fbq tracking object from the window:

```js
FacebookTracking.getTracker();
```