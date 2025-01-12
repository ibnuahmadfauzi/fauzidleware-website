import { useState } from "react";
import article_data from "../utils/article_data";
import Aside from "../partials/Aside";
import { useParams } from "react-router-dom";

const Artikel = () => {
  const { keyword } = useParams();
  console.log(keyword);
  const articlesPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  let sortedArticles;

  if (keyword === undefined) {
    sortedArticles = [...article_data].sort((a, b) => b.id - a.id);
  } else {
    const searchArticle = (keyword) => {
      return article_data.filter(
        (item) =>
          item.title.toLowerCase().includes(keyword.toLowerCase()) ||
          item.body.toLowerCase().includes(keyword.toLowerCase())
      );
    };
    const result = [...searchArticle(keyword)].sort((a, b) => b.id - a.id);
    sortedArticles = result;
  }

  const getCurrentArticles = () => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    return sortedArticles.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(sortedArticles.length / articlesPerPage);

  function getExcerpt(htmlContent, wordLimit) {
    const plainText = htmlContent.replace(/<[^>]+>/g, "");
    const words = plainText.split(/\s+/);
    const excerpt = words.slice(0, wordLimit).join(" ");
    return words.length > wordLimit ? `${excerpt}...` : excerpt;
  }

  return (
    <div className="row">
      <div className="col-lg-8">
        {getCurrentArticles().length > 0 ? (
          getCurrentArticles().map((value, index) => (
            <div key={index} className="card border-0 bg-light mb-3">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <img
                      src={"/images/articles/" + value.thumbnail}
                      className="img-fluid square-image rounded-2"
                      alt={value.title}
                    />
                  </div>
                  <div className="col-lg-8">
                    <div className="mb-2">
                      {value.categories.map((category, idx) => (
                        <small
                          className="bg-secondary text-light me-2 rounded-1 px-2"
                          key={idx}
                        >
                          {category}
                        </small>
                      ))}
                    </div>
                    <h5 style={{ textAlign: "left" }}>{value.title}</h5>
                    <small className="d-block" style={{ textAlign: "justify" }}>
                      {getExcerpt(value.body, 20)}
                    </small>
                    <div className="mt-2">
                      <a
                        href={"/artikel/" + value.slug}
                        className="text-decoration-none"
                      >
                        Selengkapnya ...
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <h5 className="mt-5">Tidak ada artikel yang ditemukan</h5>
            <p>Cobalah mencari artikel lain dengan kata kunci yang berbeda.</p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="d-flex justify-content-center mt-4">
            <nav>
              <ul className="pagination">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                  >
                    Previous
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => (
                  <li
                    key={i}
                    className={`page-item ${
                      currentPage === i + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
      <div className="col-lg-4">
        <Aside />
      </div>
    </div>
  );
};

export default Artikel;
