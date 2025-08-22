const products = [
    {
      id: 1,
      name: 'Fresh Apples (1kg)',
      description: 'Crisp, juicy apples perfect for snacking.',
      price: 3.49,
      image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Bananas (1kg)',
      description: 'Sweet and ripe bananas rich in potassium.',
      price: 2.99,
      image: 'https://images.unsplash.com/photo-1574226516831-e1dff420e43e?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Organic Carrots (500g)',
      description: 'Crunchy carrots grown without pesticides.',
      price: 1.99,
      image: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      name: 'Broccoli (1 head)',
      description: 'Fresh green broccoli packed with vitamins.',
      price: 2.49,
      image: 'https://images.unsplash.com/photo-1582515073490-d61ba2f6e937?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 5,
      name: 'Whole Milk (1L)',
      description: 'Creamy whole milk from local farms.',
      price: 1.79,
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 6,
      name: 'Brown Bread (1 loaf)',
      description: 'Freshly baked whole grain brown bread.',
      price: 2.50,
      image: 'https://images.unsplash.com/photo-1604908177523-4f20d62b6f0e?auto=format&fit=crop&w=400&q=80'
    }
  ];
  
  const productsContainer = document.getElementById('products-container');
  const cartCount = document.getElementById('cart-count');
  const message = document.getElementById('message');
  
  let cartItemCount = 0;
  
  function displayProducts() {
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
  
      card.innerHTML = `
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="product-details">
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <div class="price">$${product.price.toFixed(2)}</div>
          <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
      `;
  
      productsContainer.appendChild(card);
    });
  }
  
  function showMessage(text) {
    message.textContent = text;
    message.style.display = 'block';
    setTimeout(() => {
      message.style.display = 'none';
    }, 2000);
  }
  
  productsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
      cartItemCount++;
      cartCount.textContent = cartItemCount;
      showMessage('Added to cart!');
    }
  });
  
  displayProducts();
  