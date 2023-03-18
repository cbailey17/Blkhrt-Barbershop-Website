export const openBooksy = () => {
  const button = document.querySelector(
    '#booksy > .booksy-widget-container > .booksy-widget-button'
  );
  button.click();
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};
