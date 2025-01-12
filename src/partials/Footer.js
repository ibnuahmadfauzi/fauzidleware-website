const Footer = () => {
  return (
    <div className="container-fluid mt-5 bg-light py-3">
      <div className="mb-1">
        <p className="p-0 m-0 text-center">
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              margin: "0",
              padding: "0",
              justifyContent: "center",
            }}
          >
            <li className="mx-2">
              <a href="#" className="text-decoration-none">
                Home
              </a>
            </li>
            <li className="mx-2">
              <a href="#" className="text-decoration-none">
                Tentang
              </a>
            </li>
            <li className="mx-2">
              <a href="#" className="text-decoration-none">
                Kontak
              </a>
            </li>
          </ul>
        </p>
      </div>
      <p className="p-0 m-0 text-center">Copyright &copy; 2025</p>
    </div>
  );
};

export default Footer;
