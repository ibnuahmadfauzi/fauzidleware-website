import { useParams } from "react-router-dom";
import Aside from "../partials/Aside";
import article_data from "../utils/article_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import author_data from "../utils/author_data";

const ArtikelDetail = () => {
  const { slug } = useParams();
  const foundArtikel = article_data.find((item) => item.slug === slug);
  const foundAuthor = author_data.find(
    (item) => item.id === foundArtikel.author_id
  );

  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="card border-0">
          <div className="card-body">
            <div className="mb-3">
              <a href="/" className="text-decoration-none">
                Home
              </a>{" "}
              &gt;{" "}
              <a href="/artikel" className="text-decoration-none">
                Artikel
              </a>
            </div>
            <div>
              <h3>{foundArtikel.title}</h3>
            </div>
            <div className="text-secondary mb-3">
              <small className="me-3">
                <FontAwesomeIcon icon={faUser} /> {foundAuthor.name}
              </small>
              <small className="me-3">
                <FontAwesomeIcon icon={faCalendarDays} /> {foundArtikel.date}
              </small>
              <small className="me-3">
                <FontAwesomeIcon icon={faClock} /> {foundArtikel.time}
              </small>
            </div>
            <div className="mb-3">
              <img
                src={"/images/articles/" + foundArtikel.thumbnail}
                className="w-100"
              />
            </div>
            <div
              className="article-body mb-5"
              dangerouslySetInnerHTML={{ __html: foundArtikel.body }}
            />
            <div>
              <span className="fw-semibold">Tag : </span>
              {foundArtikel.categories.map((item, index) => (
                <span
                  className="bg-secondary text-light px-2 rounded-1 me-2"
                  key={index}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <Aside />
      </div>
    </div>
  );
};

export default ArtikelDetail;
