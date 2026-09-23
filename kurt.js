const clickMeBtn = document.getElementById('clickMeBtn');
let clickCount = 0;

clickMeBtn.addEventListener('click', () => {
  clickCount++;
  // Fixed: Added backticks around template literal
  alert(`You clicked me ${clickCount} time${clickCount > 1 ? 's' : ''}!`);
});

const purplePanel = document.getElementById('purplePanel');
const changeColorBtn = document.getElementById('changeColorBtn');

const colors = [
  'bg-purple-500',
  'bg-pink-500',
  'bg-indigo-500',
  'bg-teal-500',
  'bg-rose-500',
  'bg-blue-500'
];
let colorIndex = 0;

changeColorBtn.addEventListener('click', () => {
  purplePanel.classList.remove(colors[colorIndex]);
  colorIndex = (colorIndex + 1) % colors.length;
  purplePanel.classList.add(colors[colorIndex]);
});

document.getElementById('loginBtn').addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username || !password) {
    alert('Please enter both username and password.');
    return;
  }

  // Fixed: Added backticks around template literal
  alert(`Login attempted with username: ${username}`);
});