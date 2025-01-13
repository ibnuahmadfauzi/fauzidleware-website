import {
  faArrowUpRightFromSquare,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import article_data from "../utils/article_data";

const Beranda = () => {
  const products = Array.from({ length: 0 }, (_, index) => index + 1);
  function getExcerpt(htmlContent, wordLimit) {
    const plainText = htmlContent.replace(/<[^>]+>/g, "");
    const words = plainText.split(/\s+/);
    const excerpt = words.slice(0, wordLimit).join(" ");
    return words.length > wordLimit ? `${excerpt}...` : excerpt;
  }
  return (
    <>
      <div className="container hero-section mb-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-description">
              <h1 className="fw-bold">
                Solusi <span>Digital</span> Tanpa Batas untuk Bisnis Anda
              </h1>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image">
              <img
                src="/images/hero.png"
                className="w-100"
                alt="FauziDleware.com"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <h2 className="text-center fw-semibold mb-3">~ Layanan Kami ~</h2>
        <div className="row">
          <div className="col-lg-6">
            <div className="card border-0">
              <div className="card-body">
                <div className="mb-5">
                  <img
                    src="/images/services/landing-page.png"
                    className="w-100"
                  />
                </div>
                <div className="mb-3">
                  <h3 className="text-center fw-semibold">
                    Jasa Pembuatan Landing Page
                  </h3>
                </div>
                <div className="text-center">
                  <a href="#" className="btn btn-sm btn-primary">
                    <FontAwesomeIcon icon={faCircleInfo} /> Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card border-0">
              <div className="card-body">
                <div className="mb-5">
                  <img
                    src="/images/services/aplikasi-web.png"
                    className="w-100"
                  />
                </div>
                <div className="mb-3">
                  <h3 className="text-center fw-semibold">
                    Jasa Pembuatan Aplikasi Web
                  </h3>
                </div>
                <div className="text-center">
                  <a href="#" className="btn btn-sm btn-primary">
                    <FontAwesomeIcon icon={faCircleInfo} /> Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="contaner mb-5">
        <h2 className="text-center fw-semibold mb-3">~ Produk ~</h2>
        <div className="row">
          <div className="col-lg-6">
            <div className="card border-0 ">
              <div className="card-body">
                <h5 className="bg-primary text-light text-center rounded-2 py-2 mb-4">
                  Buku
                </h5>
                <div>
                  {products.length > 0 ? (
                    products.map((item) => (
                      <div className="row align-items-center mb-4">
                        <div className="col-lg-4">
                          <img
                            src="https://www.creativefabrica.com/wp-content/uploads/2021/04/05/Photo-Image-Icon-Graphics-10388619-1.jpg"
                            className="img-fluid square-image rounded-2"
                            alt="Buku"
                          />
                        </div>
                        <div className="col-lg-8">
                          <div>
                            <sup>
                              <span className="bg-secondary text-light px-2 rounded-2 me-2">
                                Filsafat
                              </span>
                              <span className="bg-secondary text-light px-2 rounded-2 me-2">
                                Agama
                              </span>
                              <span className="bg-secondary text-light px-2 rounded-2 me-2">
                                Kebudayaan
                              </span>
                            </sup>
                          </div>
                          <h6>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text.
                          </h6>
                          <div>
                            <p>Rp. XX.XXX,-</p>
                          </div>
                          <div>
                            <a href="#" className="btn btn-sm btn-primary">
                              <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}
                              />{" "}
                              Detail Produk
                            </a>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center">
                      ~ belum ada produk yang ditampilkan ~
                    </p>
                  )}
                </div>
                <hr />
                <div className="text-center">
                  <a href="#" className="btn btn-sm btn-primary">
                    Produk Lainnya
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card border-0">
              <div className="card-body">
                <h5 className="bg-primary text-light text-center rounded-2 py-2 mb-4">
                  Fashion
                </h5>
                <div>
                  {products.length > 0 ? (
                    products.map((item) => (
                      <div className="row align-items-center mb-4">
                        <div className="col-lg-4">
                          <img
                            src="https://www.creativefabrica.com/wp-content/uploads/2021/04/05/Photo-Image-Icon-Graphics-10388619-1.jpg"
                            className="img-fluid square-image rounded-2"
                            alt="Buku"
                          />
                        </div>
                        <div className="col-lg-8">
                          <div>
                            <sup>
                              <span className="bg-secondary text-light px-2 rounded-2 me-2">
                                Tas
                              </span>
                              <span className="bg-secondary text-light px-2 rounded-2 me-2">
                                Perlengkapan Sekolah
                              </span>
                            </sup>
                          </div>
                          <h6>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text.
                          </h6>
                          <div>
                            <p>Rp. XX.XXX,-</p>
                          </div>
                          <div>
                            <a href="#" className="btn btn-sm btn-primary">
                              <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}
                              />{" "}
                              Detail Produk
                            </a>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center">
                      ~ belum ada produk yang ditampilkan ~
                    </p>
                  )}
                </div>
                <hr />
                <div className="text-center">
                  <a href="#" className="btn btn-sm btn-primary">
                    Produk Lainnya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end Product Section */}

      {/* Latest Article Section */}
      <div className="container mb-5">
        <h2 className="text-center fw-semibold mb-3">~ Artikel ~</h2>
        <div className="card border-0">
          <div className="card-body">
            <div className="row">
              {[...article_data]
                .sort((a, b) => b.id - a.id) // Urutkan artikel berdasarkan ID dari terbesar ke terkecil
                .slice(0, 4) // Ambil 5 artikel pertama
                .map((value, index) => (
                  <div key={index} className="col-lg-3">
                    <div className="mb-3">
                      <img
                        src={"/images/articles/" + value.thumbnail}
                        className="w-100"
                        style={{ height: "150px", objectFit: "cover" }}
                      />
                    </div>
                    <div className="mb-b">
                      {value.categories.map((category, idx) => (
                        <small
                          className="bg-secondary text-light me-2 rounded-1 px-2"
                          key={idx}
                        >
                          {category}
                        </small>
                      ))}
                    </div>
                    <div>
                      <h6>{value.title}</h6>
                    </div>
                    <div className="mb-3">
                      <small>{getExcerpt(value.body, 15)}</small>
                    </div>
                    <div>
                      <a
                        href={"/artikel/" + value.slug}
                        className="text-decoration-none"
                      >
                        Selengkapnya ...
                      </a>
                    </div>
                  </div>
                ))}
            </div>
            <div className="text-center mt-5">
              <a href="/artikel" className="btn btn-sm btn-primary">
                Artikel Lainnya
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* end Latest Article Section */}
    </>
  );
};

export default Beranda;
