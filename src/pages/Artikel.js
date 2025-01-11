const Artikel = () => {
  const articles = Array(5).fill(0);

  return (
    <div>
      {articles.map((_, index) => (
        <div className="box-article mb-3" key={index}>
          <div className="card border-0">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <img
                  src="https://i.fbcd.co/products/resized/resized-750-500/563d0201e4359c2e890569e254ea14790eb370b71d08b6de5052511cc0352313.jpg"
                  className="square-image"
                  style={{ width: "30%", marginRight: "10px" }}
                />
                <div>
                  <h5 style={{ textAlign: "justify" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </h5>
                  <small className="d-block" style={{ textAlign: "justify" }}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters...
                  </small>
                  <div className="mt-2">
                    <a href="#" className="text-decoration-none">
                      Selengkapnya ...
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Artikel;
