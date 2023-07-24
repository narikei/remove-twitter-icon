(() => {
  const removeIcon = () => document.querySelector('h1[role="heading"] svg')?.remove();

  removeIcon();

  setInterval(() => {
    removeIcon();
  }, 100);
})();
