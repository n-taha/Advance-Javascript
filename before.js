const div = document.querySelector('#div1')
let h1 = document.createElement('h1')
h1.innerText = 'this is come from after method and using Js Dom'

div.after(h1);
