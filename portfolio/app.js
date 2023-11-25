const gallery = document.getElementById('gallery');
const categoryButtons = document.querySelectorAll('.category-button');

const images = [
  { src: '../portfolio/img/f.png', categories: ['all'], title: 'Food Funday', description: 'A food delivery Web Application that allows customers to place a food order from any of the restaurants in an area using their smartphone or computers.' },
  { src: '../portfolio/img/g.png', categories: ['all'], title: 'React Github Profile Fetching App', description: 'A Github profile fetching app made in ReactJs using Axios and api.github' },
  { src: '../portfolio/img/q.png', categories: ['all'], title: 'React Quiz App', description: 'A Quiz App made with ReactJs using Firebase Firestore and Auth' },
  { src: '../portfolio/img/w.png', categories: ['all'], title: 'React Weather App', description: 'A ReactJs Weather App made with the help of Axios and AccuWeather API.' },
  { src: '../portfolio/img/t.png', categories: ['all'], title: 'Todo List App', description: 'A todo list app using Local Storage' },
  { src: '../portfolio/img/p.png', categories: ['all'], title: 'Portfolio', description: 'A personal portfolio portfolio made using HTML, CSS & JS' },
  { src: '../portfolio/img/c.png', categories: ['all'], title: 'Cyber Odyssey', description: 'A Virtual Start-Up.' },
  { src: '../portfolio/img/mm.png', categories: ['all'], title: 'Makkah Masjid', description: 'Developed a impactful website for Makkah Masjid, a non-profit Islamic organization in Garland, TX,' },
  { src: '../portfolio/img/d.png', categories: ['all'], title: 'DFW MACC', description: 'Developed a dynamic website for DFWMACC, a non-profit Chamber of Commerce in Dallas Fort Worth, empowering over 150,000 Muslim entrepreneurs to thrive in North Texas.' },
  { src: '../portfolio/img/a.png', categories: ['all'], title: 'Almari.com', description: 'An ecommerce website made with Wordpress using WooCommerce' },
  { src: '../portfolio/img/cw.png', categories: ['all'], title: 'Cart World', description: 'Another ecommerce website made with Wordpress using WooCommerce.' },
  { src: '../portfolio/img/fs.png', categories: ['shopify'], title: 'Furniture Source', description: 'Crafted a Shopify website and implemented SEO for Furniture Source, a trusted Dallas-based furniture store since 1980.' },
  { src: '../portfolio/img/swha.png', categories: ['all'], title: 'Khana Sab K Liye', description: 'A food delivery and mangement app made for poor and needy peoples using Firebase Firestore and React Native. This was a submission for the Final Hackathon for Saylani Welfare SMIT (InComplete)' },
  { src: '../portfolio/img/wa.png', categories: ['all'], title: 'Whatsapp Clone (UI)', description: 'A Whatsapp Clone App UI made using React Native and React Navigation' },
  { src: '../portfolio/img/rnt.png', categories: ['all'], title: 'Login & Sign Up App', description: 'A Simple Login and SignUp app made with the help of React navigation' },


  
  { src: '../portfolio/img/f.png', categories: ['htmlcssjs'], title: 'Food Funday', description: 'A food delivery Web Application that allows customers to place a food order from any of the restaurants in an area using their smartphone or computers.' },
  { src: '../portfolio/img/t.png', categories: ['htmlcssjs'], title: 'Todo List App', description: 'A todo list app using Local Storage' },
  { src: '../portfolio/img/p.png', categories: ['htmlcssjs'], title: 'Portfolio', description: 'A personal portfolio portfolio made using HTML, CSS & JS' },

  { src: '../portfolio/img/g.png', categories: ['react'], title: 'React Github Profile Fetching App', description: 'A Github profile fetching app made in ReactJs using Axios and api.github' },
  { src: '../portfolio/img/q.png', categories: ['react'], title: 'React Quiz App', description: 'A Quiz App made with ReactJs using Firebase Firestore and Auth' },
  { src: '../portfolio/img/w.png', categories: ['react'], title: 'React Weather App', description: 'A ReactJs Weather App made with the help of Axios and AccuWeather API.' },

  { src: '../portfolio/img/wa.png', categories: ['react-native'], title: 'Whatsapp Clone (UI)', description: 'A Whatsapp Clone App UI made using React Native and React Navigation' },
  { src: '../portfolio/img/swha.png', categories: ['react-native'], title: 'Khana Sab K Liye', description: 'A food delivery and mangement app made for poor and needy peoples using Firebase Firestore and React Native. This was a submission for the Final Hackathon for Saylani Welfare SMIT (InComplete)' },
  { src: '../portfolio/img/rnt.png', categories: ['react-native'], title: 'Login & Sign Up App', description: 'A Simple Login and SignUp app made with the help of React navigation' },

  { src: '../portfolio/img/c.png', categories: ['wordpress'], title: 'Cyber Odyssey', description: 'A Virtual Start-Up.' },
  { src: '../portfolio/img/mm.png', categories: ['wordpress'], title: 'Makkah Masjid', description: 'Developed a impactful website for Makkah Masjid, a non-profit Islamic organization in Garland, TX,' },
  { src: '../portfolio/img/d.png', categories: ['wordpress'], title: 'DFW MACC', description: 'Developed a dynamic website for DFWMACC, a non-profit Chamber of Commerce in Dallas Fort Worth, empowering over 150,000 Muslim entrepreneurs to thrive in North Texas.' },
  { src: '../portfolio/img/a.png', categories: ['wordpress'], title: 'Almari.com', description: 'An ecommerce website made with Wordpress using WooCommerce' },
  { src: '../portfolio/img/cw.png', categories: ['wordpress'], title: 'Cart World', description: 'Another ecommerce website made with Wordpress using WooCommerce.' },

  { src: '../portfolio/img/fs.png', categories: ['shopify'], title: 'Furniture Source', description: 'Crafted a Shopify website and implemented SEO for Furniture Source, a trusted Dallas-based furniture store since 1980.' },
];

function displayImages(category) {
  gallery.innerHTML = '';
  const displayedImages = [];

  images.forEach((image) => {
    if (category === 'all' || image.categories.includes(category)) {
      // Check if the image is not already displayed
      if (!displayedImages.includes(image.src)) {
        const item = document.createElement('div');
        item.classList.add('gallery-item', 'fade-in');
        item.innerHTML = `
          <img src="${image.src}" alt="${image.title}">
          <p>${image.title}</p>
          <p>${image.description}</p>
        `;
        gallery.appendChild(item);
        displayedImages.push(image.src);
      }
    }
  });
}

function handleCategoryClick(event) {
  const category = event.target.dataset.category;
  displayImages(category);
}

categoryButtons.forEach((button) => {
  button.addEventListener('click', handleCategoryClick);
});

displayImages('all'); // Initial display