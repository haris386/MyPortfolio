const gallery = document.getElementById("gallery");
const galleryCount = document.getElementById("galleryCount");
const categoryButtons = document.querySelectorAll(".category-button");

const images = [
  // ALL PROJECTS STARTS HERE
  {
    src: "./img/tha.png",
    categories: ["all"],
    title: "Hire App",
    description:
      "Built Hire App for employers to onboard seamlessly, create jobs, launch skill based assessments, and invite thousands of global candidates for job matching and interviews, all with detailed dashboards.",
  },
  {
    src: "./img/tcp.png",
    categories: ["all"],
    title: "Candidate Portal",
    description:
      "Developed Candidate Portal, enabling seamless AI-powered on-boarding for technologists, skill assessments with certifications, and job matching, serving thousands of global users.",
  },
  {
    src: "./img/accuraCore.png",
    categories: ["all"],
    title: "AccuraCore",
    description:
      "AccuraCore made using NextJs is an all-in-one business management platform that unifies workflows, financial automation, and team collaboration under a single dashboard. It offers customizable processes, smart reporting, and complete operational control for growing enterprises.",
  },
  {
    src: "./img/sparxsolar.png",
    categories: ["all"],
    title: "Sparx Solar",
    description:
      "Sparx Solar made using NextJs helps homeowners switch to clean, reliable energy with high-quality solar installations, transparent pricing, and a seamless end-to-end process. It focuses on maximizing energy savings, enhancing home value, and delivering future-ready solar solutions with trust and simplicity.",
  },
  {
    src: "./img/eagleonerestoration.png",
    categories: ["all"],
    title: "Eagle One Restoration",
    description:
      "Developed a professional restoration and home improvement website using Next.js for Eagle One Restoration, featuring water and flood damage restoration, fire and smoke cleanup, mold remediation, air duct cleaning, and HVAC services. The website provides a responsive user experience, clear service navigation, and convenient consultation requests for customers across Illinois.",
  },
  {
    src: "./img/fastlinkleads.png",
    categories: ["all"],
    title: "FastLink Leads",
    description:
      "Built a modern lead generation and appointment booking website using Next.js for FastLink Leads, offering exclusive leads and verified appointments for construction and insurance businesses. The platform features service offerings, industry-focused content, appointment packages, responsive design, and a secure checkout experience with Stripe payments.",
  },
  {
    src: "./img/sparxsolarexteriors.png",
    categories: ["all"],
    title: "Sparx Exteriors",
    description:
      "Developed a responsive home improvement website using Next.js for Sparx Exteriors, showcasing professional roofing, windows, siding, and solar solutions. The website features service-focused landing pages, energy efficiency content, project showcases, financing options, and an easy-to-use estimate request experience.",
  },
  {
    src: "./img/guardianride.png",
    categories: ["all"],
    title: "GuardianRide",
    description:
      "GuardianRide made using NextJs is a smart student transportation platform that ensures safety through real-time tracking, route control, and live communication. It connects parents, drivers, and schools with powerful tools for full visibility, control, and secure ride management.",
  },
  {
    src: "./img/nexgpayment.png",
    categories: ["all"],
    title: "NextGPayment",
    description:
      "NextGenPayments made using NextJs offers reliable, cost-effective payment processing solutions with customized plans, multiple pricing options, and advanced payment technologies. It helps businesses reduce fees, optimize transactions, and choose the best setup tailored to their needs.",
  },
  {
    src: "./img/claimcore.png",
    categories: ["all"],
    title: "ClaimCore",
    description:
      "ClaimCore made using NextJs is an all-in-one CRM for insurance adjusters to manage claims, inspections, and reports efficiently. It uses smart automation and guided workflows to save time, improve accuracy, and keep everything organized.",
  },
  {
    src: "./img/sparxtech.png",
    categories: ["all"],
    title: "SparX Technologies",
    description:
      "SparX Technologies made using NextJs delivers AI-powered digital solutions, from claims automation to real-time video analytics, enabling businesses to operate smarter and faster. Their scalable cloud-native platforms drive efficiency, security, and innovation across industries.",
  },
  {
    src: "./img/accuraCam.png",
    categories: ["all"],
    title: "AccuraCam",
    description:
      "AccuraCam made using NextJs simplifies photo documentation for claims and field operations with AI-driven tagging, metadata embedding, and seamless system integration. It ensures instant syncing, secure sharing, and effortless organization across platforms.",
  },
  {
    src: "./img/xlpro.png",
    categories: ["wix"],
    title: "Xl Pro Staffing & Consulting",
    description:
      "Developed a professional staffing and consulting website on Wix for XL Pro, a leading workforce solutions provider serving multiple industries across the U.S. The platform highlights their recruiting expertise, service offerings, and commitment to connecting skilled professionals with top employers.",
  },
  {
    src: "./img/d.png",
    categories: ["all"],
    title: "DFW MACC",
    description:
      "Developed a dynamic website for DFWMACC, a non-profit Chamber of Commerce in Dallas Fort Worth, empowering over 150,000 Muslim entrepreneurs to thrive in North Texas.",
  },
  {
    src: "./img/mm.png",
    categories: ["all"],
    title: "Makkah Masjid",
    description:
      "Developed a impactful website for Makkah Masjid, a non-profit Islamic organization in Garland, TX,",
  },
  {
    src: "./img/meg.png",
    categories: ["all"],
    title: "My Ecommerce Gallery",
    description:
      "Developed a optimization and promotion services providers website who provides services in many domains including Amazon, Etsy and many more.",
  },
  {
    src: "./img/dhhp.png",
    categories: ["all"],
    title: "Double HH Productions",
    description:
      "Developed a business solutions providers website who provides solution services in variety of domains.",
  },
  {
    src: "./img/fs.png",
    categories: ["all"],
    title: "Furniture Source",
    description:
      "Crafted a Shopify website and implemented SEO for Furniture Source, a trusted Dallas-based furniture store since 1980.",
  },
  {
    src: "./img/iwd.png",
    categories: ["all"],
    title: "Inkwelldesignltd",
    description:
      "Developed a service providing & digital marketing website for a brand who provides services in web development.",
  },
  {
    src: "./img/nch.png",
    categories: ["all"],
    title: "Niazcoholdings",
    description:
      "Developed a digital marketing website for services provider in the domain of Amazon, Shopify, Facebook, Etsy and etc.",
  },
  {
    src: "./img/f.png",
    categories: ["all"],
    title: "Food Funday",
    description:
      "A food delivery Web Application that allows customers to place a food order from any of the restaurants in an area using their smartphone or computers.",
  },
  {
    src: "./img/g.png",
    categories: ["all"],
    title: "React Github Profile Fetching App",
    description:
      "A Github profile fetching app made in ReactJs using Axios and api.github",
  },
  {
    src: "./img/q.png",
    categories: ["all"],
    title: "React Quiz App",
    description:
      "A Quiz App made with ReactJs using Firebase Firestore and Auth",
  },
  {
    src: "./img/w.png",
    categories: ["all"],
    title: "React Weather App",
    description:
      "A ReactJs Weather App made with the help of Axios and AccuWeather API.",
  },
  {
    src: "./img/rcm.png",
    categories: ["all"],
    title: "Redux Cart Manager",
    description:
      "Redux Cart Manager for React, a powerful and intuitive solution for managing shopping cart functionality in your React applications. This project leverages the robustness of Redux to efficiently handle state management, ensuring a seamless experience for adding and removing items from the cart.",
  },
  {
    src: "./img/t.png",
    categories: ["all"],
    title: "Todo List App",
    description: "A todo list app using Local Storage",
  },
  {
    src: "./img/p.png",
    categories: ["all"],
    title: "Portfolio",
    description: "A personal portfolio portfolio made using HTML, CSS & JS",
  },
  {
    src: "./img/c.png",
    categories: ["all"],
    title: "Cyber Odyssey",
    description: "A Virtual Start-Up.",
  },
  {
    src: "./img/pj.png",
    categories: ["all"],
    title: "Commercial Industrial Roofing and Asphalt Services",
    description:
      "Developed a dynamic roofing website for one of the best roofer in Philadelphia and New Jersey",
  },
  {
    src: "./img/awd.png",
    categories: ["all"],
    title: "Aether Web Services",
    description: "Developed a website for Web Development Agency",
  },
  {
    src: "./img/a.png",
    categories: ["all"],
    title: "Almari.com",
    description: "An ecommerce website made with Wordpress using WooCommerce",
  },
  {
    src: "./img/cw.png",
    categories: ["all"],
    title: "Cart World",
    description:
      "Another ecommerce website made with Wordpress using WooCommerce.",
  },
  // HTML CSS JS PROJECTS STARTS HERE
  {
    src: "./img/f.png",
    categories: ["htmlcssjs"],
    title: "Food Funday",
    description:
      "A food delivery Web Application that allows customers to place a food order from any of the restaurants in an area using their smartphone or computers.",
  },
  {
    src: "./img/t.png",
    categories: ["htmlcssjs"],
    title: "Todo List App",
    description: "A todo list app using Local Storage",
  },
  {
    src: "./img/p.png",
    categories: ["htmlcssjs"],
    title: "Portfolio",
    description: "A personal portfolio portfolio made using HTML, CSS & JS",
  },

  // REACT PROJECTS STARTS HERE
  {
    src: "./img/tha.png",
    categories: ["react"],
    title: "Hire App",
    description:
      "Built Hire App for employers to onboard seamlessly, create jobs, launch skill based assessments, and invite thousands of global candidates for job matching and interviews, all with detailed dashboards.",
  },
  {
    src: "./img/tcp.png",
    categories: ["react"],
    title: "Candidate Portal",
    description:
      "Developed Candidate Portal, enabling seamless AI-powered on-boarding for technologists, skill assessments with certifications, and job matching, serving thousands of global users.",
  },
  {
    src: "./img/accuraCore.png",
    categories: ["react"],
    title: "AccuraCore",
    description:
      "AccuraCore made using NextJs is an all-in-one business management platform that unifies workflows, financial automation, and team collaboration under a single dashboard. It offers customizable processes, smart reporting, and complete operational control for growing enterprises.",
  },
    {
    src: "./img/eagleonerestoration.png",
    categories: ["react"],
    title: "Eagle One Restoration",
    description:
      "Developed a professional restoration and home improvement website using Next.js for Eagle One Restoration, featuring water and flood damage restoration, fire and smoke cleanup, mold remediation, air duct cleaning, and HVAC services. The website provides a responsive user experience, clear service navigation, and convenient consultation requests for customers across Illinois.",
  },
  {
    src: "./img/fastlinkleads.png",
    categories: ["react"],
    title: "FastLink Leads",
    description:
      "Built a modern lead generation and appointment booking website using Next.js for FastLink Leads, offering exclusive leads and verified appointments for construction and insurance businesses. The platform features service offerings, industry-focused content, appointment packages, responsive design, and a secure checkout experience with Stripe payments.",
  },
  {
    src: "./img/sparxsolarexteriors.png",
    categories: ["react"],
    title: "Sparx Exteriors",
    description:
      "Developed a responsive home improvement website using Next.js for Sparx Exteriors, showcasing professional roofing, windows, siding, and solar solutions. The website features service-focused landing pages, energy efficiency content, project showcases, financing options, and an easy-to-use estimate request experience.",
  },
  {
    src: "./img/sparxsolar.png",
    categories: ["react"],
    title: "Sparx Solar",
    description:
      "Sparx Solar made using NextJs helps homeowners switch to clean, reliable energy with high-quality solar installations, transparent pricing, and a seamless end-to-end process. It focuses on maximizing energy savings, enhancing home value, and delivering future-ready solar solutions with trust and simplicity.",
  },
  {
    src: "./img/guardianride.png",
    categories: ["react"],
    title: "GuardianRide",
    description:
      "GuardianRide made using NextJs is a smart student transportation platform that ensures safety through real-time tracking, route control, and live communication. It connects parents, drivers, and schools with powerful tools for full visibility, control, and secure ride management.",
  },
  {
    src: "./img/nexgpayment.png",
    categories: ["react"],
    title: "NextGPayment",
    description:
      "NextGenPayments made using NextJs offers reliable, cost-effective payment processing solutions with customized plans, multiple pricing options, and advanced payment technologies. It helps businesses reduce fees, optimize transactions, and choose the best setup tailored to their needs.",
  },
  {
    src: "./img/claimcore.png",
    categories: ["react"],
    title: "ClaimCore",
    description:
      "ClaimCore made using NextJs is an all-in-one CRM for insurance adjusters to manage claims, inspections, and reports efficiently. It uses smart automation and guided workflows to save time, improve accuracy, and keep everything organized.",
  },
  {
    src: "./img/sparxtech.png",
    categories: ["react"],
    title: "SparX Technologies",
    description:
      "SparX Technologies made using NextJs delivers AI-powered digital solutions, from claims automation to real-time video analytics, enabling businesses to operate smarter and faster. Their scalable cloud-native platforms drive efficiency, security, and innovation across industries.",
  },
  {
    src: "./img/accuraCam.png",
    categories: ["react"],
    title: "AccuraCam",
    description:
      "AccuraCam made using NextJs simplifies photo documentation for claims and field operations with AI-driven tagging, metadata embedding, and seamless system integration. It ensures instant syncing, secure sharing, and effortless organization across platforms.",
  },
  {
    src: "./img/accuraCore.png",
    categories: ["react"],
    title: "AccuraCore",
    description:
      "AccuraCore made using NextJs is an all-in-one business management platform that unifies workflows, financial automation, and team collaboration under a single dashboard. It offers customizable processes, smart reporting, and complete operational control for growing enterprises.",
  },
  {
    src: "./img/g.png",
    categories: ["react"],
    title: "React Github Profile Fetching App",
    description:
      "A Github profile fetching app made in ReactJs using Axios and api.github",
  },
  {
    src: "./img/q.png",
    categories: ["react"],
    title: "React Quiz App",
    description:
      "A Quiz App made with ReactJs using Firebase Firestore and Auth",
  },
  {
    src: "./img/rctc.png",
    categories: ["react"],
    title: "React Change Text Case",
    description:
      "A simple text case conversion app built with Vite and React. Easily convert text to lowercase and other format with this lightweight and intuitive web application. Perfect for developers and writers who need a quick tool for transforming text to lowercase and other format",
  },
  {
    src: "./img/w.png",
    categories: ["react"],
    title: "React Weather App",
    description:
      "A ReactJs Weather App made with the help of Axios and AccuWeather API.",
  },
  {
    src: "./img/rcm.png",
    categories: ["react"],
    title: "Redux Cart Manager",
    description:
      "Redux Cart Manager for React, a powerful and intuitive solution for managing shopping cart functionality in your React applications. This project leverages the robustness of Redux to efficiently handle state management, ensuring a seamless experience for adding and removing items from the cart.",
  },

  // WORDPRESS PROJECTS STARTS HERE
  {
    src: "./img/d.png",
    categories: ["wordpress"],
    title: "DFW MACC",
    description:
      "Developed a dynamic website for DFWMACC, a non-profit Chamber of Commerce in Dallas Fort Worth, empowering over 150,000 Muslim entrepreneurs to thrive in North Texas.",
  },
  {
    src: "./img/c.png",
    categories: ["wordpress"],
    title: "Cyber Odyssey",
    description: "A Virtual Start-Up.",
  },
  {
    src: "./img/mm.png",
    categories: ["wordpress"],
    title: "Makkah Masjid",
    description:
      "Developed a impactful website for Makkah Masjid, a non-profit Islamic organization in Garland, TX,",
  },
  {
    src: "./img/pj.png",
    categories: ["wordpress"],
    title: "Commercial Industrial Roofing and Asphalt Services",
    description:
      "Developed a dynamic roofing website for one of the best roofer in Philadelphia and New Jersey",
  },
  {
    src: "./img/awd.png",
    categories: ["wordpress"],
    title: "Aether Web Services",
    description: "Developed a website for Web Development Agency",
  },
  {
    src: "./img/nch.png",
    categories: ["wordpress"],
    title: "Niazcoholdings",
    description:
      "Developed a digital marketing website for services provider in the domain of Amazon, Shopify, Facebook, Etsy and etc.",
  },
  {
    src: "./img/iwd.png",
    categories: ["wordpress"],
    title: "Inkwelldesignltd",
    description:
      "Developed a service providing & digital marketing website for a brand who provides services in web development.",
  },
  {
    src: "./img/dhhp.png",
    categories: ["wordpress"],
    title: "Double HH Productions",
    description:
      "Developed a business solutions providers website who provides solution services in variety of domains.",
  },
  {
    src: "./img/meg.png",
    categories: ["wordpress"],
    title: "My Ecommerce Gallery",
    description:
      "Developed a optimization and promotion services providers website who provides services in many domains including Amazon, Etsy and many more.",
  },
  {
    src: "./img/a.png",
    categories: ["wordpress"],
    title: "Almari.com",
    description: "An ecommerce website made with Wordpress using WooCommerce",
  },
  {
    src: "./img/cw.png",
    categories: ["wordpress"],
    title: "Cart World",
    description:
      "Another ecommerce website made with Wordpress using WooCommerce.",
  },

  // WIX AND SHOPIFY PROJECTS STARTS HERE
  {
    src: "./img/xlpro.png",
    categories: ["wix"],
    title: "Xl Pro Staffing & Consulting",
    description:
      "Developed a professional staffing and consulting website on Wix for XL Pro, a leading workforce solutions provider serving multiple industries across the U.S. The platform highlights their recruiting expertise, service offerings, and commitment to connecting skilled professionals with top employers.",
  },
  {
    src: "./img/fs.png",
    categories: ["shopify"],
    title: "Furniture Source",
    description:
      "Crafted a Shopify website and implemented SEO for Furniture Source, a trusted Dallas-based furniture store since 1980.",
  },
];

function displayImages(category) {
  gallery.innerHTML = "";
  const displayedImages = [];
  const cards = [];

  images.forEach((image) => {
    if (category === "all" || image.categories.includes(category)) {
      if (!displayedImages.includes(image.src)) {
        const card = document.createElement("div");
        card.className = "proj-card";
        card.innerHTML = `
          <div class="proj-card-media">
            <img src="${image.src}" alt="${image.title}" loading="lazy">
          </div>
          <div class="proj-card-body">
            <h3>${image.title}</h3>
            <p>${image.description}</p>
          </div>
        `;
        gallery.appendChild(card);
        cards.push(card);
        displayedImages.push(image.src);
      }
    }
  });

  if (galleryCount) {
    galleryCount.textContent = `${cards.length} project${cards.length === 1 ? "" : "s"}`;
  }

  if (cards.length === 0) {
    gallery.innerHTML = `<p class="no-results">No projects in this category yet.</p>`;
  }

  // staggered reveal
  cards.forEach((card, i) => {
    setTimeout(() => card.classList.add("in"), 30 + i * 35);
  });

  if (window.bindHoverTargets) window.bindHoverTargets();
}

function handleCategoryClick(event) {
  const button = event.currentTarget;
  const category = button.dataset.category;

  categoryButtons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");

  displayImages(category);
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", handleCategoryClick);
});

displayImages("all"); // Initial display
