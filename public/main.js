const shareBtn = document.querySelector('#btn-share');
const shareIcon = document.querySelector('#icon-share');
const shareDiv = document.querySelector('#share-link');

shareBtn.addEventListener('click', e => {
  shareBtn.classList.remove('bg-grayish-blue-lighter');
  shareBtn.classList.add('bg-desaturated-dark-blue');

  shareIcon.classList.remove('text-grayish-blue-very-dark');
  shareIcon.classList.add('text-white');

  shareDiv.classList.remove('hidden');
});
