const products = [
  { id: 1, name: "Smartphone X Pro 5G - 256GB", category: "Tech", price: 64999, originalPrice: 79999, rating: 4.5, reviews: 12450, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Ultra HD 4K Smart TV", category: "Tech", price: 35999, originalPrice: 54999, rating: 4.8, reviews: 8400, img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Classic Cotton Crew Neck", category: "Fashion", price: 1499, originalPrice: 2499, rating: 4.3, reviews: 3200, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "AirWeave Running Shoes", category: "Fashion", price: 4999, originalPrice: 7999, rating: 4.9, reviews: 4500, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Ceramic Cookware Collection", category: "Home", price: 12999, originalPrice: 18500, rating: 4.7, reviews: 1800, img: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=800&auto=format&fit=crop" },
  { id: 6, name: "ErgoPro Office Chair", category: "Home", price: 14500, originalPrice: 22000, rating: 4.6, reviews: 1100, img: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=800&auto=format&fit=crop" },
  { id: 7, name: "Aura Noise Cancelling Headphones", category: "Tech", price: 24999, originalPrice: 29999, rating: 4.9, reviews: 22000, img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop" },
  { id: 8, name: "Minimalist Ceramic Vase", category: "Home", price: 2450, originalPrice: null, rating: 4.8, reviews: 560, img: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=800&auto=format&fit=crop" },
];

let cartCount = 0;

// Theme Initialization
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
};

window.toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
};

const updateThemeIcon = (theme) => {
  const icon = document.getElementById('themeIcon');
  if (!icon) return;
  if (theme === 'light') {
    // Sun icon for light mode (clicking changes to dark)
    icon.innerHTML = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
  } else {
    // Moon icon for dark mode
    icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
  }
};

const renderStars = (rating) => {
  return Array(5).fill(0).map((_, i) => i < Math.floor(rating) ? '★' : '☆').join('');
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  
  const grid = document.getElementById('productsGrid');
  if (grid) {
    grid.innerHTML = products.map((p, i) => `
      <div class="product-card fade-up" style="transition-delay: ${(i % 4) * 0.1}s">
        <div class="product-img-wrapper">
          <img src="${p.img}" alt="${p.name}" class="product-img" loading="lazy">
          <div class="add-to-cart-overlay">
            <button class="btn btn-accent" onclick="addToCart(event)">Add to Bag</button>
          </div>
        </div>
        <div class="product-meta">
          <span class="product-category">${p.category}</span>
          <h3 class="product-title">${p.name}</h3>
          <div class="product-rating">
            ${renderStars(p.rating)} <span class="count">(${p.reviews.toLocaleString()})</span>
          </div>
          <div class="product-price-row">
            <span class="product-price">₹${p.price.toLocaleString('en-IN')}</span>
            ${p.originalPrice ? `<span class="product-original">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : ''}
          </div>
        </div>
      </div>
    `).join('');
  }

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});

window.addToCart = (e) => {
  e.stopPropagation();
  cartCount++;
  const badge = document.getElementById('cartBadge');
  badge.textContent = cartCount;
  badge.style.display = 'flex';
  
  // Toast
  const toast = document.createElement('div');
  toast.style.cssText = "position:fixed;bottom:2rem;right:2rem;background:var(--color-primary);color:var(--color-light);padding:1rem 2rem;border-radius:100px;z-index:9999;box-shadow:0 10px 30px rgba(0,0,0,0.15);font-family:'Inter',sans-serif;font-weight:500;transform:translateY(100px);opacity:0;transition:all 0.4s cubic-bezier(0.16, 1, 0.3, 1);";
  toast.innerHTML = 'Item added to your bag';
  document.body.appendChild(toast);
  
  // Trigger animation
  requestAnimationFrame(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  });
  
  setTimeout(() => {
    toast.style.transform = 'translateY(20px)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 400);
  }, 2500);
};
