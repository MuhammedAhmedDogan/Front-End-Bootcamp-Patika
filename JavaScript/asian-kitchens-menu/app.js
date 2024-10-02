const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "./assets/tteokbokki.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "./assets/chicken-ramen.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "./assets/bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "./assets/dan-dan-mian.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "./assets/yangzhou-fried-rice.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "./assets/onigiri.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "./assets/jajangmyeon.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "./assets/ma-yi-shang-shu.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "./assets/doroyaki.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let filteredMenu = [...menu];
const btnContainer = document.getElementById('btn-container');
const menuContainer = document.getElementById('menu-container');

const addButtons = () => {
  const allBtn = document.createElement('button');
  allBtn.textContent = 'All';
  allBtn.classList.add('btn', 'btn-outline-dark', 'btn-item');
  allBtn.addEventListener('click', () => {
    filteredMenu = [...menu];
    setMenuItems();
  });

  const chinaBtn = document.createElement('button');
  chinaBtn.textContent = 'China';
  chinaBtn.classList.add('btn', 'btn-outline-dark', 'btn-item');
  chinaBtn.addEventListener('click', () => {
    filteredMenu = menu.filter(item => item.category === 'China');
    setMenuItems();
  });

  const koreaBtn = document.createElement('button');
  koreaBtn.textContent = 'Korea';
  koreaBtn.classList.add('btn', 'btn-outline-dark', 'btn-item');
  koreaBtn.addEventListener('click', () => {
    filteredMenu = menu.filter(item => item.category === 'Korea');
    setMenuItems();
  });

  const japanBtn = document.createElement('button');
  japanBtn.textContent = 'Japan';
  japanBtn.classList.add('btn', 'btn-outline-dark', 'btn-item');
  japanBtn.addEventListener('click', () => {
    filteredMenu = menu.filter(item => item.category === 'Japan');
    setMenuItems();
  });

  btnContainer.append(allBtn, chinaBtn, koreaBtn, japanBtn);
}
addButtons();

const setMenuItems = () => {
  menuContainer.innerHTML = ''
  filteredMenu.forEach(item => {
    const title = document.createElement('h4');
    title.textContent = item.title;
    const price = document.createElement('h4');
    price.textContent = item.price;
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('menu-title');
    titleContainer.append(title, price);
    const menuText = document.createElement('div');
    menuText.textContent = item.desc;
    menuText.classList.add('menu-text');
    const menuInfo = document.createElement('div');
    menuInfo.classList.add('menu-info');
    menuInfo.append(titleContainer, menuText);
    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.title;
    img.classList.add('photo');
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-items', 'col-lg-6', 'col-sm-12');
    menuItem.append(img, menuInfo);

    menuContainer.appendChild(menuItem);
  });
}
setMenuItems();