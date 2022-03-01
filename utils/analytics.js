import splitbee from '@splitbee/web';

const trackEvent = (event, details) => splitbee.track(event, details);

const setUser = (name, email) =>
  splitbee.user.set({
    name,
    email
  });

export { trackEvent, setUser };
