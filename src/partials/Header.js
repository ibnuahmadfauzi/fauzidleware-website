const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light py-3 mb-4">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          <img src="/images/logo_fauzidleware.png" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-4" key={1}>
              <a className="nav-link" href="/">
                Beranda
              </a>
            </li>
            <li className="nav-item me-4" key={2}>
              <a className="nav-link" href="/artikel">
                Artikel
              </a>
            </li>
            <li className="nav-item me-4" key={3}>
              <a className="nav-link" href="#">
                Produk
              </a>
            </li>
            <li className="nav-item me-4" key={5}>
              <a className="nav-link" href="#">
                Mading
              </a>
            </li>
            <li className="nav-item me-4" key={5}>
              <a className="nav-link" href="/kontak">
                Kontak
              </a>
            </li>
          </ul>
          <div>
            <a href="/tentang" className="btn btn-sm btn-primary">
              Tentang Kami
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
