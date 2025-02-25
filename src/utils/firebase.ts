import { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const ALLOWED_DOMAINS = [
  'beringinhub.github.io',
  'oasis.beringinhub.com',
  'localhost',
  '127.0.0.1'
];

const isDomainAllowed = () => {
  if (typeof window === 'undefined') return false;
  const hostname = window.location.hostname;
  return ALLOWED_DOMAINS.includes(hostname);
};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const useAnalytics = () => {
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        // Only initialize if domain is allowed
        if (!isDomainAllowed()) {
          console.warn('Analytics disabled: Domain not allowed');
          return;
        }

        const measurementId = siteConfig.customFields?.firebaseConfig?.measurementId;

        if (!measurementId) {
          console.warn('Analytics measurement ID not found');
          return;
        }

        // Load Google Analytics
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
        script.async = true;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        window.gtag = function() {
          window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', measurementId);

        console.log('Analytics initialized successfully');
      } catch (error) {
        console.error('Error initializing analytics:', error);
      }
    }
  }, [siteConfig]);
};

export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (!isDomainAllowed()) {
    console.warn('Event tracking disabled: Domain not allowed');
    return;
  }
  
  if (window.gtag) {
    try {
      window.gtag('event', eventName, eventParams);
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  }
}; 