{
  //   setItem - add value
  //   getItem - get value
  //   removeItem - delete item
  //   clear - delete all
  localStorage.setItem('TEST_KEY', 'Hello world');
  localStorage.setItem('Array', JSON.stringify([1, 2, 3, 4, 5])); // тільки таким чином можна додати масив в локальне сховище щоб його потім можна було витягнути  JSON.stringify()
  localStorage.setItem('Object', JSON.stringify({ name: 'mango' }));
  // localStorage.removeItem('TEST_KEY');

  console.log(localStorage.getItem('TEST_KEY'));
  console.log(JSON.parse(localStorage.getItem('Array')));
  console.log(JSON.parse(localStorage.getItem('Object')));

  const localBtn = document.querySelector('.js-local');
  const sessionBtn = document.querySelector('.js-session');
  localBtn.addEventListener('click', () => {
    localStorage.setItem('local', 'Storage');
  });

  sessionBtn.addEventListener('click', () => {
    sessionStorage.setItem('session', 'Storage');
  });
}
