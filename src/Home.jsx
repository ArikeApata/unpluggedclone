import { Link } from "react-router-dom";


const Home = () => {
  return (
    <section id="intro">
      <div className="container-fluid-lg ">
        <div className="row orpcy">
          <div className="col-sm-6 text-center">
            <img className="img-fluid home-image" src="/images/home-Image.jpg" alt="" />
          </div>
          {/* <div className="container-fluid justify-content text-center"> */}
          <div className="col-sm-6 text-light text-center text-md-start d-flex flex-column align-items-center">
            <div className="login-forms mx-auto ">
              <div className="text-center my-3 py-3">
                
                <Link to="/">
                 
                  <img
                    src="/images/logo.png"
                    alt=""
                    className="img-fluid img"
                  />
                </Link>
                <h5 className=" ">Login</h5>
              </div>

              <div className="text-center mb-3">
                <a href="#story" className="btn btn-primary btn-lg">
                  <span>
                    <i className="bi bi-facebook px-3"></i>
                  </span>
                  login with facebook
                </a>
              </div>
              <div className="text-center">
                <a href="#story" className="btn insta btn-lg">
                  <span>
                    <i className="bi bi-instagram px-3"></i>
                  </span>
                  login with instagram
                </a>
              </div>

              <div className="text-center">
                <p className="border-top-4">or</p>
                <form action="">
                  <input
                    type="email"
                    className="form-control mb-3 bg-dark"
                    placeholder="scarlet.robinson@"
                  />
                  <input
                    type="password"
                    className="form-control mb-3 bg-dark"
                    placeholder="*****"
                  />
                  <button className="btn login px-5 py-1">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
