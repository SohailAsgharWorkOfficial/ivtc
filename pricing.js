  // Data for each category
  const pricingData = {
    logo: [
      {
        price: "$29.99",
        discount: "75% OFF $100",
        title: "Basic Logo Package",
        subtitle: "Suitable for Small Startups",
        features: [
          "2 Custom Logo Design Concepts",
          "3 Revision Rounds",
          "24 Hours TAT",
          "100% Satisfaction Guarantee",
          "100% Unique Design Guarantee",
          "100% Money Back Guarantee"
        ]
      },
      {
        price: "$89.99",
        discount: "75% OFF $200",
        title: "Beginners Logo Package",
        subtitle: "Suitable for Small Startups",
        features: [
          "6 Custom Logo Design Concepts",
          "FREE Icon",
          "FREE Grayscale Formats",
          "FREE Color Options",
          "6 Revision Rounds",
          "24 Hours TAT",
          "File Formats (JPG, PNG, PDF, TIFF)",
          "100% Ownership Rights"
        ]
      },
      {
        price: "$149.99",
        discount: "75% OFF $380",
        title: "Silver Logo Package",
        subtitle: "Suitable for Small Startups",
        features: [
          "10 Custom Logo Design Concepts",
          "4 Dedicated Designers",
          "Unlimited Revisions",
          "FREE Icon",
          "FREE Stationary Design",
          "FREE MS Word Letterhead",
          "FREE Grayscale Formats",
          "FREE Color Options"
        ]
      }
    ],
    web: [
      {
        price: "$199.99",
        discount: "70% OFF $660",
        title: "Basic Web Package",
        subtitle: "Perfect for Small Businesses",
        features: [
          "3 Pages Website",
          "Responsive Design",
          "Basic SEO Setup",
          "2 Rounds of Revisions",
          "Domain & Hosting Assistance"
        ]
      },
      {
        price: "$399.99",
        discount: "75% OFF $1200",
        title: "Business Web Package",
        subtitle: "Best for Growing Brands",
        features: [
          "5–7 Pages Website",
          "Mobile Responsive",
          "Content Management System",
          "SEO Friendly",
          "Social Media Integration",
          "Contact Form & Newsletter"
        ]
      },
      {
        price: "$799.99",
        discount: "75% OFF $3200",
        title: "Ecommerce Web Package",
        subtitle: "Sell Products Online",
        features: [
          "Unlimited Products",
          "Shopping Cart Integration",
          "Payment Gateway Setup",
          "Product Management Training",
          "1 Month Support"
        ]
      }
    ],
    // You can add more categories here...
  };

  const cardsContainer = document.getElementById("pricing-cards");
  const tabs = document.querySelectorAll(".pricing-tabs button");

  function renderCards(category) {
    cardsContainer.innerHTML = "";
    pricingData[category].forEach(pkg => {
      const card = document.createElement("div");
      card.className = "pricing-card";
      card.innerHTML = `
        <div class="price">${pkg.price}</div>
        <div class="discount">${pkg.discount}</div>
        <h3>${pkg.title}</h3>
        <small>${pkg.subtitle}</small>
        <ul>${pkg.features.map(f => `<li>${f}</li>`).join("")}</ul>
        <div class="card-actions">
          <button class="btn">ORDER NOW</button>
          <a href="#" class="chat">Live Chat</a>
        </div>
      `;
      cardsContainer.appendChild(card);
    });
  }

  // Initialize default (logo)
  renderCards("logo");

  // Tab click handler
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderCards(tab.dataset.category);
    });
  });