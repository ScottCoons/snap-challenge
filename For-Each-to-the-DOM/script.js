<!--Using the foreach loop display this array of text to the DOM.-->

<!--['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah']-->

<!--Hint: Each array element must appear in it's own html tag in the browser. Extra Credit: use map or reduce.-->

const names = ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah']

let target = document.getElementById('target')

names.map(name=>target.innerHTML = target.innerHTML + `<li>${name}</li>`)