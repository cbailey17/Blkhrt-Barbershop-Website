import { useEffect } from 'react';

const openBooksy = () => {
  const button = document.querySelector(
    '#booksy > .booksy-widget-container > .booksy-widget-button'
  );
  button.click();
};

const Booksy = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://booksy.com/widget-2021/code.js?id=936569&country=us&lang=en-US';
    script.async = true;
    document.body.appendChild(script);
    openBooksy();
    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export default Booksy;
