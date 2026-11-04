function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <a href="#home" className="logo">
          Nivora
        </a>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#products">Shop</a>
          <a href="#about">About</a>
        </nav>

      </div>
    </header>
  );
}

export default Header;