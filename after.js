const h2 = document.querySelector('#head2');

const h1 = document.createElement('h1')
h1.innerText = 'this is come from before method'

h2.before(h1)
