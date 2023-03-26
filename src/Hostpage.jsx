const Host = () => {
    return (
      <div className="container">
        <h2>UNPLUGGO</h2>
        <div class="row justify-content-between align-items-center">
          <div class="col-md-4 text-center d-none d-md-block">
            <img class="img-fluid" src="/images/home-Image.jpg" alt="" />
          </div>
          <div class="col-md-6 text-center text-md-start">
            <h1>
              <div class="display-2"></div>
              <div class="display-5 text-muted">Tell your Story</div>
            </h1>
            <p class="lead my-4 text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <a href="#story" class="btn btn-secondary btn-lg">
              Read Here
            </a>
            <a
              href="#sidebar"
              class="d-block mt-3"
              role="button"
              aria-controls="sidebars"
              data-bs-toggle="offcanvas"
            >
              Victims tell their stories...
            </a>
          </div>
        </div>
      </div>
    );
}
 
export default Host;