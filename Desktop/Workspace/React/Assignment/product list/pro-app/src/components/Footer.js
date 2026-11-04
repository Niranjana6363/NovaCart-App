function Footer() {
  return (
    <footer className="footer" id="about">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>Nivora</h2>

          <p>
            Thoughtfully selected pieces for
            a simpler and more beautiful everyday life.
          </p>
        </div>

        <div className="footer-links">

          <div>
            <h4>Shop</h4>
            <a href="#products">New arrivals</a>
            <a href="#products">Featured</a>
            <a href="#products">Best sellers</a>
          </div>

          <div>
            <h4>Information</h4>
            <a href="#about">Our story</a>
            <a href="#about">Contact</a>
            <a href="#about">Shipping</a>
          </div>

          <div>
            <h4>Follow</h4>
            <a href="#about">Instagram</a>
            <a href="#about">Facebook</a>
            <a href="#about">Pinterest</a>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Nivora. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;