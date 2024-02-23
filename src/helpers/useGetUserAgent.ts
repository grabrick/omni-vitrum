import { useMemo } from 'react';

const useGetUserAgent = () => {
  const userAgent = useMemo(() => navigator.userAgent, []);

  const browser = useMemo(() => {
    if (userAgent.match(/chrome|chromium|crios/i)) {
      return "chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
      return "firefox";
    } else if (userAgent.match(/safari/i) && !userAgent.match(/chrome|chromium|crios/i)) {
      return "safari"; 
    } else {
      return "unknown";
    }
  }, [userAgent]);

  return browser;
};

export { useGetUserAgent };
