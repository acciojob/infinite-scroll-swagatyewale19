//your code here!
const list = document.querySelector('ol');

// Add 10 list items by default
for (let i = 1; i <= 10; i++) {
  const li = document.createElement('li');
  li.textContent = `List item ${i}`;
  list.appendChild(li);
}

// Function to add more list items
function addMoreItems() {
  for (let i = 1; i <= 2; i++) {
    const li = document.createElement('li');
    li.textContent = `List item ${list.children.length + i}`;
    list.appendChild(li);
  }
}

list.addEventListener('scroll', () => {
  const scrollPosition = list.scrollTop + list.clientHeight;
  if (scrollPosition === list.scrollHeight) {
    addMoreItems();
  }
});

