import {
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Aside = () => {
  const popular_article = Array(5).fill(0);

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
            {popular_article.map((_, index) => (
              <li class="list-group-item" key={index}>
                <a href="#" className="text-decoration-none">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://i.fbcd.co/products/resized/resized-750-500/563d0201e4359c2e890569e254ea14790eb370b71d08b6de5052511cc0352313.jpg"
                      className="square-image"
                      style={{ width: "20%", marginRight: "10px" }}
                    />
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </span>
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
