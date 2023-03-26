const Home = () => {
  return (
    <section id="intro">
      <div class="container-fluid-lg bg-dark ">
        <div class="row align-items-center">
          <div class="col-md-4 text-center d-none d-md-block">
            <img class="img-fluid" src="/images/home-Image.jpg" alt="" />
          </div>
          {/* <div className="container-fluid justify-content text-center"> */}
          <div class="col-md-8 text-light text-center text-md-start">
            <div className="login-forms mx-auto ">
              <div className="text-center my-3 py-3">
                <img src="/images/logo.png" alt="" className="img-fluid" />
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
                <a href="#story" class="btn btn-danger btn-lg">
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
                  <button className="btn btn-success px-5 py-0">Login</button>
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
