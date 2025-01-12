import {
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBasketball,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import article_data from "../utils/article_data";
import { useState } from "react";

const Aside = () => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      window.location.href = `/artikel/cari/${encodeURIComponent(query)}`;
    } else {
      window.location.href = `/artikel`;
    }
  };
  return (
    <>
      <div className="card border-0 mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="d-flex">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="cari artikel ..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit" className="btn btn-sm btn-primary ms-2">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="card border-0 mb-3">
        <div className="card-body">
          <div id="sidebar-media-sosial">
            <h6>Media Sosial</h6>
            <div className="row">
              <div className="col-lg-6 p-1">
                <a
                  href="#"
                  className="btn fs-5 d-block bg-primary text-light text-center rounded-1"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
              <div className="col-lg-6 p-1">
                <a
                  href="#"
                  className="btn fs-5 d-block bg-primary text-light text-center rounded-1"
                >
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
              </div>
              <div className="col-lg-6 p-1">
                <a
                  href="#"
                  className="btn fs-5 d-block bg-primary text-light text-center rounded-1"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
              <div className="col-lg-6 p-1">
                <a
                  href="#"
                  className="btn fs-5 d-block bg-primary text-light text-center rounded-1"
                >
                  <FontAwesomeIcon icon={faBasketball} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card border-0">
        <div className="card-body">
          <h6>Artikel Terbaru</h6>
          <ul className="list-group">
            {[...article_data]
              .sort((a, b) => b.id - a.id) // Urutkan artikel berdasarkan ID dari terbesar ke terkecil
              .slice(0, 5) // Ambil 5 artikel pertama
              .map((value, index) => (
                <li className="list-group-item" key={index}>
                  <a
                    href={"/artikel/" + value.slug}
                    className="text-decoration-none"
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src={"/images/articles/" + value.thumbnail}
                        className="square-image"
                        style={{ width: "20%", marginRight: "10px" }}
                        alt={value.title}
                      />
                      <span>{value.title}</span>
                    </div>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Aside;
