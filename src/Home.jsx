import { Link } from "react-router-dom";


const Home = () => {
  return (
    <section id="intro">
      <div class="container-fluid-lg ">
        <div class="row orpcy">
          <div class="col-sm-4 text-center ">
            <img class="img-fluid " src="/images/home-Image.jpg" alt="" />
          </div>
          {/* <div className="container-fluid justify-content text-center"> */}
          <div class="col-sm-8 text-light text-center text-md-start d-flex flex-column align-items-center">
            <div className="login-forms mx-auto ">
              <div className="text-center my-3 py-3">
                
                <Link to="/">
                 
                  <img
                    src="/images/logo.png"
                    alt=""
                    className="img-fluid img"
                  />
                </Link>
                <h5 class=" ">Login</h5>
              </div>

              <div className="text-center mb-3">
                <a href="#story" class="btn btn-primary btn-lg">
                  <span>
                    <i className="bi bi-facebook px-3"></i>
                  </span>
                  login with facebook
                </a>
              </div>
              <div className="text-center">
                <a href="#story" class="btn insta btn-lg">
                  <span>
                    <i className="bi bi-instagram px-3"></i>
                  </span>
                  login with insatgram
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
