const gallery = document.getElementById('gallery');
const categoryButtons = document.querySelectorAll('.category-button');

const images = [
  { src: '../portfolio/img/f.png', categories: ['all'], title: 'Food Funday', description: 'A food delivery Web Application that allows customers to place a food order from any of the restaurants in an area using their smartphone or computers.' },
  { src: '../portfolio/img/g.png', categories: ['all'], title: 'React Github Profile Fetching App', description: 'A Github profile fetching app made in ReactJs using Axios and api.github' },
  { src: '../portfolio/img/q.png', categories: ['all'], title: 'React Quiz App', description: 'A Quiz App made with ReactJs using Firebase Firestore and Auth' },
  { src: '../portfolio/img/w.png', categories: ['all'], title: 'React Weather App', description: 'A ReactJs Weather App made with the help of Axios and AccuWeather API.' },
  { src: '../portfolio/img/rcm.png', categories: ['all'], title: 'Redux Cart Manager', description: 'Redux Cart Manager for React, a powerful and intuitive solution for managing shopping cart functionality in your React applications. This project leverages the robustness of Redux to efficiently handle state management, ensuring a seamless experience for adding and removing items from the cart.' },
  { src: '../portfolio/img/t.png', categories: ['all'], title: 'Todo List App', description: 'A todo list app using Local Storage' },
  { src: '../portfolio/img/p.png', categories: ['all'], title: 'Portfolio', description: 'A personal portfolio portfolio made using HTML, CSS & JS' },
  { src: '../portfolio/img/c.png', categories: ['all'], title: 'Cyber Odyssey', description: 'A Virtual Start-Up.' },
  { src: '../portfolio/img/mm.png', categories: ['all'], title: 'Makkah Masjid', description: 'Developed a impactful website for Makkah Masjid, a non-profit Islamic organization in Garland, TX,' },
  { src: '../portfolio/img/d.png', categories: ['all'], title: 'DFW MACC', description: 'Developed a dynamic website for DFWMACC, a non-profit Chamber of Commerce in Dallas Fort Worth, empowering over 150,000 Muslim entrepreneurs to thrive in North Texas.' },
  { src: '../portfolio/img/pj.png', categories: ['all'], title: 'Commercial Industrial Roofing and Asphalt Services', description: 'Developed a dynamic roofing website for one of the best roofer in Philadelphia and New Jersey' },
  { src: '../portfolio/img/awd.png', categories: ['all'], title: 'Aether Web Services', description: 'Developed a website for Web Development Agency' },
  { src: '../portfolio/img/nch.png', categories: ['all'], title: 'Niazcoholdings', description: 'Developed a digital marketing website for services provider in the domain of Amazon, Shopify, Facebook, Etsy and etc.' },
  { src: '../portfolio/img/iwd.png', categories: ['all'], title: 'Inkwelldesignltd', description: 'Developed a service providing & digital marketing website for a brand who provides services in web development.' },
  { src: '../portfolio/img/dhhp.png', categories: ['all'], title: 'Double HH Productions', description: 'Developed a business solutions providers website who provides solution services in variety of domains.' },
  { src: '../portfolio/img/meg.png', categories: ['all'], title: 'My Ecommerce Gallery', description: 'Developed a optimization and promotion services providers website who provides services in many domains including Amazon, Etsy and many more.' },
  { src: '../portfolio/img/a.png', categories: ['all'], title: 'Almari.com', description: 'An ecommerce website made with Wordpress using WooCommerce' },
  { src: '../portfolio/img/cw.png', categories: ['all'], title: 'Cart World', description: 'Another ecommerce website made with Wordpress using WooCommerce.' },
  { src: '../portfolio/img/fs.png', categories: ['all'], title: 'Furniture Source', description: 'Crafted a Shopify website and implemented SEO for Furniture Source, a trusted Dallas-based furniture store since 1980.' },
  { src: '../portfolio/img/swha.png', categories: ['all'], title: 'Khana Sab K Liye', description: 'A food delivery and mangement app made for poor and needy peoples using Firebase Firestore and React Native. This was a submission for the Final Hackathon for Saylani Welfare SMIT (InComplete)' },
  { src: '../portfolio/img/wa.png', categories: ['all'], title: 'Whatsapp Clone (UI)', description: 'A Whatsapp Clone App UI made using React Native and React Navigation' },
  { src: '../portfolio/img/rnt.png', categories: ['all'], title: 'Login & Sign Up App', description: 'A Simple Login and SignUp app made with the help of React navigation' },
  
  
  
  { src: '../portfolio/img/f.png', categories: ['htmlcssjs'], title: 'Food Funday', description: 'A food delivery Web Application that allows customers to place a food order from any of the restaurants in an area using their smartphone or computers.' },
  { src: '../portfolio/img/t.png', categories: ['htmlcssjs'], title: 'Todo List App', description: 'A todo list app using Local Storage' },
  { src: '../portfolio/img/p.png', categories: ['htmlcssjs'], title: 'Portfolio', description: 'A personal portfolio portfolio made using HTML, CSS & JS' },
  
  { src: '../portfolio/img/tha.png', categories: ['react'], title: 'Hire App', description: 'Built Hire App for employers to onboard seamlessly, create jobs, launch skill based assessments, and invite thousands of global candidates for job matching and interviews, all with detailed dashboards.' },
  { src: '../portfolio/img/tcp.png', categories: ['react'], title: 'Candidate Portal', description: 'Developed Candidate Portal, enabling seamless AI-powered on-boarding for technologists, skill assessments with certifications, and job matching, serving thousands of global users.' },
  { src: '../portfolio/img/g.png', categories: ['react'], title: 'React Github Profile Fetching App', description: 'A Github profile fetching app made in ReactJs using Axios and api.github' },
  { src: '../portfolio/img/q.png', categories: ['react'], title: 'React Quiz App', description: 'A Quiz App made with ReactJs using Firebase Firestore and Auth' },
  { src: '../portfolio/img/rctc.png', categories: ['react'], title: 'React Change Text Case', description: 'A simple text case conversion app built with Vite and React. Easily convert text to lowercase and other format with this lightweight and intuitive web application. Perfect for developers and writers who need a quick tool for transforming text to lowercase and other format' },
  { src: '../portfolio/img/w.png', categories: ['react'], title: 'React Weather App', description: 'A ReactJs Weather App made with the help of Axios and AccuWeather API.' },
  { src: '../portfolio/img/rcm.png', categories: ['react'], title: 'Redux Cart Manager', description: 'Redux Cart Manager for React, a powerful and intuitive solution for managing shopping cart functionality in your React applications. This project leverages the robustness of Redux to efficiently handle state management, ensuring a seamless experience for adding and removing items from the cart.' },
  
  { src: '../portfolio/img/wa.png', categories: ['react-native'], title: 'Whatsapp Clone (UI)', description: 'A Whatsapp Clone App UI made using React Native and React Navigation' },
  { src: '../portfolio/img/swha.png', categories: ['react-native'], title: 'Khana Sab K Liye', description: 'A food delivery and mangement app made for poor and needy peoples using Firebase Firestore and React Native. This was a submission for the Final Hackathon for Saylani Welfare SMIT (InComplete)' },
  { src: '../portfolio/img/rnt.png', categories: ['react-native'], title: 'Login & Sign Up App', description: 'A Simple Login and SignUp app made with the help of React navigation' },
  
  { src: '../portfolio/img/d.png', categories: ['wordpress'], title: 'DFW MACC', description: 'Developed a dynamic website for DFWMACC, a non-profit Chamber of Commerce in Dallas Fort Worth, empowering over 150,000 Muslim entrepreneurs to thrive in North Texas.' },
  { src: '../portfolio/img/c.png', categories: ['wordpress'], title: 'Cyber Odyssey', description: 'A Virtual Start-Up.' },
  { src: '../portfolio/img/mm.png', categories: ['wordpress'], title: 'Makkah Masjid', description: 'Developed a impactful website for Makkah Masjid, a non-profit Islamic organization in Garland, TX,' },
  { src: '../portfolio/img/pj.png', categories: ['wordpress'], title: 'Commercial Industrial Roofing and Asphalt Services', description: 'Developed a dynamic roofing website for one of the best roofer in Philadelphia and New Jersey' },
  { src: '../portfolio/img/awd.png', categories: ['wordpress'], title: 'Aether Web Services', description: 'Developed a website for Web Development Agency' },
  { src: '../portfolio/img/nch.png', categories: ['wordpress'], title: 'Niazcoholdings', description: 'Developed a digital marketing website for services provider in the domain of Amazon, Shopify, Facebook, Etsy and etc.' },
  { src: '../portfolio/img/iwd.png', categories: ['wordpress'], title: 'Inkwelldesignltd', description: 'Developed a service providing & digital marketing website for a brand who provides services in web development.' },
  { src: '../portfolio/img/dhhp.png', categories: ['wordpress'], title: 'Double HH Productions', description: 'Developed a business solutions providers website who provides solution services in variety of domains.' },
  { src: '../portfolio/img/meg.png', categories: ['wordpress'], title: 'My Ecommerce Gallery', description: 'Developed a optimization and promotion services providers website who provides services in many domains including Amazon, Etsy and many more.' },
  { src: '../portfolio/img/a.png', categories: ['wordpress'], title: 'Almari.com', description: 'An ecommerce website made with Wordpress using WooCommerce' },
  { src: '../portfolio/img/cw.png', categories: ['wordpress'], title: 'Cart World', description: 'Another ecommerce website made with Wordpress using WooCommerce.' },
  
  { src: '../portfolio/img/xlpro.png', categories: ['wix'], title: 'Xl Pro Staffing & Consulting', description: 'Developed a professional staffing and consulting website on Wix for XL Pro, a leading workforce solutions provider serving multiple industries across the U.S. The platform highlights their recruiting expertise, service offerings, and commitment to connecting skilled professionals with top employers.' },
  
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