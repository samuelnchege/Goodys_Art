window.addEventListener('load', function(){
  const preload = document.querySelector('.preload');
  if (!preload) return;

  preload.classList.add('preload-hidden');
  setTimeout(() => {
    preload.remove();
  }, 650);
});