import { useState, useEffect } from 'react'
import './style.css'
const heroImg = 'https://via.placeholder.com/1200x600?text=Hero+Banner';
const bagImg = 'https://via.placeholder.com/300?text=Bag';
const watchImg = 'https://via.placeholder.com/300?text=Watch';
const perfumeImg = 'https://via.placeholder.com/300?text=Perfume';
const sunglassesImg = 'https://via.placeholder.com/300?text=Sunglasses';

const mockProducts = [
  { id: 1, name: 'Elegant Leather Bag', category: 'bags', price: 5999, img: bagImg, description: 'Premium full‑grain leather bag with spacious interior.' },
  { id: 2, name: 'Luxury Chronograph', category: 'watches', price: 14999, img: watchImg, description: 'Swiss‑crafted chronograph with sapphire crystal.' },
  { id: 3, name: 'Midnight Perfume', category: 'fragrance', price: 3299, img: perfumeImg, description: 'A deep, woody fragrance for night‑wear.' },
  { id: 4, name: 'Aviator Sunglasses', category: 'eyewear', price: 3999, img: sunglassesImg, description: 'Polarized lenses with classic aviator frame.' },
]

function App() {
  const [showAnnouncement, setShowAnnouncement] = useState(true)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [modalProduct, setModalProduct] = useState(null)

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1 }]
    })
  }
  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id))
  const filteredProducts = filter === 'all' ? mockProducts : mockProducts.filter(p => p.category === filter)
  const searchResults = searchTerm
    ? mockProducts.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : []

  useEffect(() => {
    const onScroll = () => {
      const btn = document.getElementById('backToTop')
      if (!btn) return
      if (window.scrollY > 300) btn.classList.add('show') else btn.classList.remove('show')
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div>
      <div id="toastContainer" className="toast-container" />
      {showAnnouncement && (
        <div className="announcement-bar" id="announcementBar">
          <span>Free Shipping on orders over ₹5,000 ✨</span>
          <button className="close-announcement" id="closeAnnouncement" onClick={() => setShowAnnouncement(false)}>×</button>
        </div>
      )}
      <header className="navbar" id="navbar">
        <div className="container nav-inner">
          <div className="logo"><span className="logo-icon">👜</span> LUXE</div>
          <nav className="nav-links" id="navLinks">
            <a href="#" className="nav-link">Home</a>
            <a href="#categories" className="nav-link">Categories</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <div className="nav-actions" id="navActions">
            <button className="btn btn-outline btn-sm" onClick={() => setSearchOpen(true)}>🔍</button>
            <button className="btn btn-gold btn-sm" onClick={() => setCartOpen(true)}>🛒 ({cart.reduce((s,i)=>s+i.qty,0)})</button>
            <button className="hamburger" onClick={() => setMobileNavOpen(true)}><span/><span/><span/></button>
          </div>
        </div>
      </header>
      <div className={`mobile-nav ${mobileNavOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <span className="logo"><span className="logo-icon">👜</span> LUXE</span>
          <button className="close-announcement" onClick={() => setMobileNavOpen(false)}>×</button>
        </div>
        <a href="#" className="mobile-nav-link" onClick={() => setMobileNavOpen(false)}>Home</a>
        <a href="#categories" className="mobile-nav-link" onClick={() => setMobileNavOpen(false)}>Categories</a>
        <a href="#products" className="mobile-nav-link" onClick={() => setMobileNavOpen(false)}>Products</a>
        <a href="#contact" className="mobile-nav-link" onClick={() => setMobileNavOpen(false)}>Contact</a>
      </div>
      <div className={`mobile-overlay ${mobileNavOpen ? 'open' : ''}`} onClick={() => setMobileNavOpen(false)} />
      <div className={`search-bar ${searchOpen ? 'open' : ''}`}>
        <div className="search-inner">
          <input type="text" placeholder="Search products..." value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} />
          <button className="close-announcement" onClick={()=>{setSearchOpen(false);setSearchTerm('');}}>×</button>
        </div>
        {searchTerm && (
          <div className="search-results">
            {searchResults.map(p=> <div key={p.id} className="search-result-item" onClick={()=>{setModalProduct(p);setSearchOpen(false);}}>{p.name}</div> )}
          </div>
        )}
      </div>
      <section className="hero" id="hero">
        <div className="hero-bg"><img src={heroImg} alt="Hero" className="hero-img"/><div className="hero-overlay"/></div>
        <div className="hero-content container">
          <div className="hero-eyebrow">Explore Excellence</div>
          <h1 className="hero-title">Luxury Redefined</h1>
          <p className="hero-subtitle">Curated premium accessories for modern connoisseurs.</p>
          <div className="hero-cta"><button className="btn btn-gold btn-sm" onClick={()=>setFilter('all')}>Shop Now</button><button className="btn btn-outline btn-sm" onClick={()=>setSearchOpen(true)}>#Explore</button></div>
          <div className="hero-stats">
            <div className="stat"><strong>15+</strong><span>Years Expertise</span></div>
            <div className="stat"><strong>6M+</strong><span>Products Sold</span></div>
            <div className="stat"><strong>99%</strong><span>Satisfaction</span></div>
          </div>
        </div>
      </section>
      <section className="marquee-wrapper"><div className="marquee-track container"><span>👜</span><span className="dot">·</span><span>⌚</span><span className="dot">·</span><span>👓</span><span className="dot">·</span><span>💍</span><span className="dot">·</span><span>🕶️</span><span className="dot">·</span><span>👛</span></div></section>
      <section className="categories" id="categories"><div className="container"><h2 className="section-title">Shop by Category</h2><div className="categories-grid">
        <div className="category-card" onClick={()=>setFilter('bags')}><img src={bagImg} alt="Bags"/><div className="category-overlay"><h3>Bags</h3></div></div>
        <div className="category-card" onClick={()=>setFilter('watches')}><img src={watchImg} alt="Watches"/><div className="category-overlay"><h3>Watches</h3></div></div>
        <div className="category-card" onClick={()=>setFilter('fragrance')}><img src={perfumeImg} alt="Fragrance"/><div className="category-overlay"><h3>Fragrance</h3></div></div>
        <div className="category-card" onClick={()=>setFilter('eyewear')}><img src={sunglassesImg} alt="Eyewear"/><div className="category-overlay"><h3>Eyewear</h3></div></div>
      </div></div></section>
      <section className="products" id="products"><div className="container"><h2 className="section-title">Featured Products</h2><div className="products-grid">
        {filteredProducts.map(p=> (
          <div key={p.id} className="product-card">
            <img src={p.img} alt={p.name}/>
            <div className="product-info"><h3>{p.name}</h3><p className="price">₹{p.price}</p></div>
            <div className="product-actions"><button className="btn btn-gold btn-sm" onClick={()=>setModalProduct(p)}>View</button><button className="btn btn-outline btn-sm" onClick={()=>addToCart(p)}>Add to Cart</button></div>
          </div>
        ))}
      </div></div></section>
      <div className={`cart-overlay ${cartOpen ? 'open' : ''}`} onClick={()=>setCartOpen(false)} />
      <div className={`cart-drawer ${cartOpen ? 'open' : ''}`}>
        <div className="cart-header"><h3>Your Cart</h3><button className="close-announcement" onClick={()=>setCartOpen(false)}>×</button></div>
        <div className="cart-body">
          {cart.length===0 ? <div className="cart-empty"><p>Cart is empty</p></div> : cart.map(item=> (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info"><strong>{item.name}</strong><br/><small>₹{item.price} × {item.qty}</small></div>
              <button className="btn btn-sm" onClick={()=>removeFromCart(item.id)}>✕</button>
            </div>
          ))}
        </div>
        {cart.length>0 && (
          <div className="cart-footer">
            <div className="cart-row total"><span>Subtotal</span><span>₹{cart.reduce((s,i)=>s+i.price*i.qty,0)}</span></div>
            <button className="btn btn-gold btn-sm" onClick={()=>alert('Proceed to checkout')}>Checkout</button>
          </div>
        )}
      </div>
      {modalProduct && (
        <div className="modal-overlay open" onClick={()=>setModalProduct(null)}>
          <div className="product-modal open" onClick={e=>e.stopPropagation()}>
            <div className="modal-inner">
              <button className="modal-close" onClick={()=>setModalProduct(null)}>×</button>
              <img src={modalProduct.img} alt={modalProduct.name} style={{width:'100%',borderRadius:'var(--radius)',marginBottom:'var(--gap)'}}/>
              <h3>{modalProduct.name}</h3>
              <p>{modalProduct.description}</p>
              <p className="price">₹{modalProduct.price}</p>
              <button className="btn btn-gold btn-sm" onClick={()=>{addToCart(modalProduct);setModalProduct(null);}}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
      <button id="backToTop" className="back-to-top" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>↑</button>
      <footer className="footer" id="footer"><div className="container footer-inner">
        <div className="footer-brand"><div className="logo"><span className="logo-icon">👜</span> LUXE</div><p>Curated luxury accessories for the modern connoisseur.</p><div className="social-links"><a href="#" aria-label="Facebook">📘</a><a href="#" aria-label="Twitter">🐦</a><a href="#" aria-label="Instagram">📸</a></div></div>
        <div className="footer-col"><h4>Company</h4><a href="#">About</a><a href="#">Careers</a><a href="#">Press</a></div>
        <div className="footer-col"><h4>Support</h4><a href="#">Help Center</a><a href="#">Returns</a><a href="#">Shipping</a></div>
        <div className="footer-col"><h4>Legal</h4><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></div>
      </div><div className="footer-bottom">© {new Date().getFullYear()} LUXE. All rights reserved.</div></footer>
    </div>
  )
}

export default App
