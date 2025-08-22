const products = [
    {
      id: 1,
      name: "T-Shirt",
      price: 19.99,
      image: "https://via.placeholder.com/200x150?text=T-Shirt",
    },
    {
      id: 2,
      name: "Sneakers",
      price: 49.99,
      image: "https://via.placeholder.com/200x150?text=Sneakers",
    },
    {
      id: 3,
      name: "Backpack",
      price: 34.99,
      image: "https://via.placeholder.com/200x150?text=Backpack",
    },
  ];
  
  let cart = [];
  
  function renderProducts() {
    const productList = document.getElementById("product-list");
    products.forEach((product) => {
      const div = document.createElement("div");
      div.className = "product-card";
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(div);
    });
  }
  
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    cart.push(product);
    updateCartCount();
  }
  
  function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;
  }
  
  // Initialize
  renderProducts();
  