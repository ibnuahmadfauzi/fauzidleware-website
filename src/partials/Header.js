import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light py-3 mb-5">
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
            <li className="nav-item me-4">
              <a className="nav-link active" href="/">
                Beranda
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="/artikel">
                Artikel
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="/kontak">
                Kontak
              </a>
            </li>
          </ul>
          <div>
            <form>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="apa yang kamu cari ?"
                />
                <button type="submit" className="btn btn-sm btn-primary ms-2">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
