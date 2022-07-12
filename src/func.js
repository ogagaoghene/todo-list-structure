const todoItems = [
  {
    desc: 'Grab a coffee',
    completed: true,
    index: 1,
  },
  {
    desc: 'Complete tutorial',
    completed: false,
    index: 3,
  },
  {
    desc: 'Have fun',
    completed: true,
    index: 2,
  },
];

function renderItems() {
  todoItems.sort((a, b) => a.index - b.index);

  const div = document.querySelector('.container');
  const ul = document.createElement('ul');
  const h1 = document.createElement('h1');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  h1.innerHTML = 'Today\'s To Do <i class="fa fa-refresh" aria-hidden="true"></i>';
  h2.innerHTML = '<input type="text" id="additem" placeholder="Add to your list ..."/>';
  p.innerHTML = 'Clear all completed';

  div.appendChild(h1);
  div.appendChild(h2);

  for (let idx = 0; idx < todoItems.length; idx += 1) {
    const item = todoItems[idx];
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox"> ${item.desc}`;
    ul.appendChild(li);
  }

  div.appendChild(ul);
  div.appendChild(p);
}

renderItems();