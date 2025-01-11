import {
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import article_data from "../utils/article_data";

const Aside = () => {
  return (
    <>
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
          <ul class="list-group">
            {[...article_data]
              .sort((a, b) => b.id - a.id) // Urutkan artikel berdasarkan ID dari terbesar ke terkecil
              .slice(0, 5) // Ambil 5 artikel pertama
              .map((value, index) => (
                <li className="list-group-item" key={index}>
                  <a href="#" className="text-decoration-none">
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
