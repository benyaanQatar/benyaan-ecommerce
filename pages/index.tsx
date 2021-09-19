/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import CarouselHome from '../components/Carousel';

const Home: NextPage = () => {
  return (
    <div className="container">
      {/* ========================= SECTION MAIN  ========================= */}
      <section className="section-main padding-y">
        <main className="card">
          <div className="card-body">
            <div className="row">
              <aside className="col-lg col-md-3 flex-lg-grow-0">
                <h6>MY MARKETS</h6>
                <nav className="nav-home-aside">
                  <ul className="menu-category">
                    <li>
                      <a href="#">General Construction</a>
                    </li>
                    <li>
                      <a href="#">Interior Design</a>
                    </li>
                    <li>
                      <a href="#">Engineering Consultant&apos;s</a>
                    </li>
                    <li>
                      <a href="#">Decorations work </a>
                    </li>
                    <li>
                      <a href="#">Home Furnitures </a>
                    </li>
                    <li>
                      <a href="#">Surveillance and Cameras</a>
                    </li>
                    <li>
                      <a href="#">Furniture and Curtains</a>
                    </li>
                    <li>
                      <a href="#">Kitchen and cookware</a>
                    </li>
                    <li className="has-submenu">
                      <a href="#">More items</a>
                      <ul className="submenu">
                        <li>
                          <a href="#">Submenu name</a>
                        </li>
                        <li>
                          <a href="#">Great submenu</a>
                        </li>
                        <li>
                          <a href="#">Another menu</a>
                        </li>
                        <li>
                          <a href="#">Some others</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </aside>
              {/* col.// */}
              <div className="col-md-9 col-xl-7 col-lg-7">
                {/* ================== COMPONENT SLIDER  BOOTSTRAP  ==================  */}
                <CarouselHome />

                {/* ==================  COMPONENT SLIDER BOOTSTRAP end.// ==================  .// */}
              </div>
              {/* col.// */}
              <div className="col-md d-none d-lg-block flex-grow-1">
                <aside className="special-home-right">
                  <h6 className="bg-blue text-center text-white mb-0 p-2">
                    Popular category
                  </h6>
                  <div className="card-banner border-bottom">
                    <div className="py-3" style={{ width: '80%' }}>
                      <h6 className="card-title">Cleaning Services </h6>
                      <a href="#" className="btn btn-secondary btn-sm">
                        Source now
                      </a>
                    </div>
                    <img
                      alt="..."
                      src="images/demo/CleaningServices.png"
                      height={80}
                      className="img-bg"
                    />
                  </div>
                  <div className="card-banner border-bottom">
                    <div className="py-3" style={{ width: '80%' }}>
                      <h6 className="card-title">Decoration</h6>
                      <a href="#" className="btn btn-secondary btn-sm">
                        Source now
                      </a>
                    </div>
                    <img
                      alt="..."
                      src="images/demo/decoration.png"
                      height={80}
                      className="img-bg"
                    />
                  </div>
                  <div className="card-banner border-bottom">
                    <div className="py-3" style={{ width: '80%' }}>
                      <h6 className="card-title">Building Tools</h6>
                      <a href="#" className="btn btn-secondary btn-sm">
                        Source now
                      </a>
                    </div>
                    <img
                      alt="..."
                      src="images/demo/Buildingtools.png"
                      height={80}
                      className="img-bg"
                    />
                  </div>
                </aside>
              </div>
              {/* col.// */}
            </div>
            {/* row.// */}
          </div>
          {/* card-body.// */}
        </main>
        {/* card.// */}
      </section>
      {/* ========================= SECTION MAIN END// ========================= */}
      {/* =============== SECTION DEAL =============== */}
      <section className="padding-bottom">
        <div className="card card-deal">
          <div className="col-heading content-body d-flex justify-content-center align-items-center">
            <header className="section-heading">
              <h3 className="section-title text-center">
                Most Viewed Categories
              </h3>
              {/* <p>Hygiene equipments</p> */}
            </header>
            {/*
            <div className="timer">
              <div>
                <span className="num">04</span> <small>Days</small>
              </div>
              <div>
                <span className="num">12</span> <small>Hours</small>
              </div>
              <div>
                <span className="num">58</span> <small>Min</small>
              </div>
              <div>
                <span className="num">02</span> <small>Sec</small>
              </div>
            </div> */}
          </div>
          {/* col.// */}
          <div className="row no-gutters items-wrap">
            <div className="col-md col-6">
              <figure className="card-product-grid card-sm">
                <a href="#" className="img-wrap">
                  <img alt="..." src="images/demo/Welding.png" />
                </a>
                <div className="text-wrap p-3">
                  <a href="#" className="title">
                    Welding
                  </a>
                  {/* <span className="badge badge-danger"> -20% </span> */}
                </div>
              </figure>
            </div>
            {/* col.// */}
            <div className="col-md col-6">
              <figure className="card-product-grid card-sm">
                <a href="#" className="img-wrap">
                  <img alt="..." src="images/demo/Kitchen.png" />
                </a>
                <div className="text-wrap p-3">
                  <a href="#" className="title">
                    Cooker
                  </a>
                  {/* <span className="badge badge-danger"> -5% </span> */}
                </div>
              </figure>
            </div>
            {/* col.// */}
            <div className="col-md col-6">
              <figure className="card-product-grid card-sm">
                <a href="#" className="img-wrap">
                  <img alt="..." src="images/demo/SafetySecurity.png" />
                </a>
                <div className="text-wrap p-3">
                  <a href="#" className="title">
                    CCTV
                  </a>
                  {/* <span className="badge badge-danger"> -20% </span> */}
                </div>
              </figure>
            </div>
            {/* col.// */}
            <div className="col-md col-6">
              <figure className="card-product-grid card-sm">
                <a href="#" className="img-wrap">
                  <img alt="..." src="images/demo/OfficesFurntures.png" />
                </a>
                <div className="text-wrap p-3">
                  <a href="#" className="title">
                    Office Chair
                  </a>
                  {/* <span className="badge badge-danger"> -15% </span> */}
                </div>
              </figure>
            </div>
            {/* col.// */}
            <div className="col-md col-6">
              <figure className="card-product-grid card-sm">
                <a href="#" className="img-wrap">
                  <img alt="..." src="images/demo/Seedlings.png" />
                </a>
                <div className="text-wrap p-3">
                  <a href="#" className="title text-truncate">
                    Seedlings
                  </a>
                  {/* <span className="badge badge-danger"> -10% </span> */}
                </div>
              </figure>
            </div>
            {/* col.// */}
          </div>
        </div>
      </section>
      {/* =============== SECTION DEAL // END =============== */}
      {/* =============== SECTION 1 =============== */}
      <section className="padding-bottom">
        <header className="section-heading heading-line">
          <h4 className="title-section text-uppercase">Lightings</h4>
        </header>
        <div className="card card-home-category">
          <div className="row no-gutters">
            <div className="col-md-3">
              <div className="home-category-banner bg-light-orange">
                <h5 className="title">Best Trending Lighting for Homes </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="#" className="btn btn-outline-primary rounded-pill">
                  Source now
                </a>
                <img src="images/demo/Main.png" className="img-bg" alt="..." />
              </div>
            </div>
            {/* col.// */}
            <div className="col-md-9">
              <ul className="row no-gutters bordered-cols">
                <li className="col-6 col-lg-3 col-md-4">
                  <a href="#" className="item">
                    <div className="card-body">
                      <h6 className="title">
                        Arabic And Western Combined Crysta Lamp
                      </h6>
                      <img
                        alt="..."
                        className="img-sm float-right"
                        src="images/demo/ArabicAndWesternCombinedCrystalLamp.png"
                      />
                      {/* <p className="text-muted">
                        <i className="fa fa-map-marker-alt" /> Guanjou, China
                      </p> */}
                    </div>
                  </a>
                </li>
                <li className="col-6 col-lg-3 col-md-4">
                  <a href="#" className="item">
                    <div className="card-body">
                      <h6 className="title">
                        Retro Crystal Lamp In Kind Promotion - Light Fixture
                        Chandelier Lamp
                      </h6>
                      <img
                        alt="..."
                        className="img-sm float-right"
                        src="images/demo/Retro Crystal Lamp In Kind Promotion - Light Fixture Chandelier Lamp .png"
                      />
                    </div>
                  </a>
                </li>
                <li className="col-6 col-lg-3 col-md-4">
                  <a href="#" className="item">
                    <div className="card-body">
                      <h6 className="title">
                        Lamp - Chandelier Lamp Incandescent Light Bulb Aplic
                      </h6>
                      <img
                        alt="..."
                        className="img-sm float-right"
                        src="images/demo/Lamp - Chandelier Lamp Incandescent Light Bulb Aplic.png"
                      />
                      {/* <p className="text-muted">
                        <i className="fa fa-map-marker-alt" /> Tokyo, Japan
                      </p> */}
                    </div>
                  </a>
                </li>
                <li className="col-6 col-lg-3 col-md-4">
                  <a href="#" className="item">
                    <div className="card-body">
                      <h6 className="title">
                        Lamp - Chandelier Lamp Lighting Living Room
                      </h6>
                      <img
                        alt="..."
                        className="img-sm float-right"
                        src="images/demo/Lamp - Chandelier Lamp Lighting Living Room.png"
                      />
                      {/* <p className="text-muted">
                        <i className="fa fa-map-marker-alt" /> Tashkent, Uzb
                      </p> */}
                    </div>
                  </a>
                </li>
                <li className="col-6 col-lg-3 col-md-4">
                  <a href="#" className="item">
                    <div className="card-body">
                      <h6 className="title">
                        Crystal Light - Chandelier Light Crystal Lamp
                      </h6>
                      <img
                        alt="..."
                        className="img-sm float-right"
                        src="images/demo/Crystal Light - Chandelier Light Crystal Lamp.png"
                      />
                      {/* <p className="text-muted">
                        <i className="fa fa-map-marker-alt" /> London, Britain
                      </p> */}
                    </div>
                  </a>
                </li>
                <li className="col-6 col-lg-3 col-md-4">
                  <a href="#" className="item">
                    <div className="card-body">
                      <h6 className="title">
                        Chandelier Light Vintage Clothing Toleware Antique
                      </h6>
                      <img
                        alt="..."
                        className="img-sm float-right"
                        src="images/demo/Chandelier Light Vintage Clothing Toleware Antique.png"
                      />
                      {/* <p className="text-muted">
                        <i className="fa fa-map-marker-alt" /> Guanjou, China
                      </p> */}
                    </div>
                  </a>
                </li>
                <li className="col-6 col-lg-3 col-md-4">
                  <a href="#" className="item">
                    <div className="card-body">
                      <h6 className="title">
                        Chandelier Light Fixture Lighting Lamp Shades
                      </h6>
                      <img
                        alt="..."
                        className="img-sm float-right"
                        src="images/demo/Chandelier Light Fixture Lighting Lamp Shades.png"
                      />
                      {/* <p className="text-muted">
                        <i className="fa fa-map-marker-alt" /> Hong Kong, China
                      </p> */}
                    </div>
                  </a>
                </li>
                <li className="col-6 col-lg-3 col-md-4">
                  <a href="#" className="item">
                    <div className="card-body">
                      <h6 className="title">
                        Chandelier Light Fixture Lighting Brass
                      </h6>
                      <img
                        alt="..."
                        className="img-sm float-right"
                        src="images/demo/Chandelier Light Fixture Lighting Brass.png"
                      />
                      {/* <p className="text-muted">
                        <i className="fa fa-map-marker-alt" /> Guanjou, China
                      </p> */}
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            {/* col.// */}
          </div>
          {/* row.// */}
        </div>
        {/* card.// */}
      </section>
      {/* =============== SECTION 1 END =============== */}
      {/* =============== SECTION 2 =============== */}
      <section className="padding-bottom">
        <header className="section-heading heading-line">
          <h4 className="title-section text-uppercase">Security And Safety</h4>
        </header>
        <div className="card card-home-category">
          <div className="row no-gutters">
            <div className="col-md-3">
              <div className="home-category-banner bg-light-orange">
                <h5 className="title">
                  Security Items for homes and companies{' '}
                </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="#" className="btn btn-outline-primary rounded-pill">
                  Source now
                </a>
                <img
                  alt="..."
                  src="images/demo/MainSecurity.png"
                  className="img-bg"
                />
              </div>
            </div>
            {/* col.// */}
            <div className="col-md-9">
              <ul className="row no-gutters bordered-cols">
                <li className="col-6 col-lg-3 col-md-4">
                  <a href="#" className="item">
                    <div className="card-body">
                      <h6 className="title">
                        Dome - Video Cameras Closed-circuit Television IP Camera
                        Security
                      </h6>
                      <img
                        alt="..."
                        className="img-sm float-right"
                        src="images/demo/Dome - Video Cameras Closed-circuit Television IP Camera Security.png"
                      />
                      {/* <p className="text-muted">
                        <i className="fa fa-map-marker-alt" /> Tokyo, Japan
                      </p> */}
                    </div>
                  </a>
                </li>
                <li className="col-6 col-lg-3 col-md-4">
                  <a href="#" className="item">
                    <div className="card-body">
                      <h6 className="title">
                        Wave Electronics System Video Cameras Closedcircuit
                        Television IP Camera
                      </h6>
                      <img
                        alt="..."
                        className="img-sm float-right"
                        src="images/demo/Wave Electronics System Video Cameras Closed-circuit Television IP Camera.png"
                      />
                    </div>
                  </a>
                </li>
                <li className="col-6 col-lg-3 col-md-4">
                  <a href="#" className="item">
                    <div className="card-body">
                      <h6 className="title">
                        Network Video Recorder Closed-circuit Television IP
                        Camera Digital Video Recorders
                      </h6>
                      <img
                        className="img-sm float-right"
                        src="images/demo/Network Video Recorder Closed-circuit Television IP Camera Digital Video Recorders.png"
                      />
                    </div>
                  </a>
                </li>
                <li className="col-6 col-lg-3 col-md-4">
                  <a href="#" className="item">
                    <div className="card-body">
                      <h6 className="title">
                        Credit Card Clearance Channel - Turnstile Machine Door
                        Boom Barrier
                      </h6>
                      <img
                        alt="..."
                        className="img-sm float-right"
                        src="images/demo/Credit Card Clearance Channel - Turnstile Machine Door Boom Barrier.png"
                      />
                    </div>
                  </a>
                </li>
                <li className="col-6 col-lg-3 col-md-4">
                  <a href="#" className="item">
                    <div className="card-body">
                      <h6 className="title">
                        Wireless Security Camera Network Video Recorder
                        Closed-circuit Television IP Camera
                      </h6>
                      <img
                        alt="..."
                        className="img-sm float-right"
                        src="images/demo/Wireless Security Camera Network Video Recorder Closed-circuit Television IP Camera.png"
                      />
                    </div>
                  </a>
                </li>
                <li className="col-6 col-lg-3 col-md-4">
                  <a href="#" className="item">
                    <div className="card-body">
                      <h6 className="title">
                        Access Control List - Zkteco Biometrics Access Control
                        Fingerprint Computer
                      </h6>
                      <img
                        alt="..."
                        className="img-sm float-right"
                        src="images/demo/Access Control List - Zkteco Biometrics Access Control Fingerprint Computer.png"
                      />
                    </div>
                  </a>
                </li>
                <li className="col-6 col-lg-3 col-md-4">
                  <a href="#" className="item">
                    <div className="card-body">
                      <h6 className="title">
                        Boom Barrier Car Park Gate Access Control System
                      </h6>
                      <img
                        alt="..."
                        className="img-sm float-right"
                        src="images/demo/Boom Barrier Car Park Gate Access Control System.png"
                      />
                    </div>
                  </a>
                </li>
                <li className="col-6 col-lg-3 col-md-4">
                  <a href="#" className="item">
                    <div className="card-body">
                      <h6 className="title">
                        Security Safes - Safety Home Security
                      </h6>
                      <img
                        alt="..."
                        className="img-sm float-right"
                        src="images/demo/Security Safes - Safety Home Security .png"
                      />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            {/* col.// */}
          </div>
          {/* row.// */}
        </div>
        {/* card.// */}
      </section>
      {/* =============== SECTION 2 END =============== */}
      {/* =============== SECTION REQUEST =============== */}
      <section className="padding-bottom">
        <header className="section-heading heading-line">
          <h4 className="title-section text-uppercase">
            Request for Quotation
          </h4>
        </header>
        <div className="row">
          <div className="col-md-8">
            <div
              className="card-banner banner-quote overlay-gradient"
              style={{ backgroundImage: 'url("images/banners/banner9.jpg")' }}
            >
              <div className="card-img-overlay white">
                <h3 className="card-title">
                  An easy way to send request to suppliers
                </h3>
                <p className="card-text" style={{ maxWidth: '400px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <a href="#" className="btn btn-primary rounded-pill">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          {/* col // */}
          <div className="col-md-4">
            <div className="card card-body">
              <h4 className="title py-3">One Request, Multiple Quotes</h4>
              <form>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="What are you looking for?"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <input
                      className="form-control"
                      placeholder="Quantity"
                      type="text"
                    />
                    <select className="custom-select form-control">
                      <option>Pieces</option>
                      <option>Litres</option>
                      <option>Tons</option>
                      <option>Gramms</option>
                    </select>
                  </div>
                </div>
                <div className="form-group text-muted">
                  <p>Select template type:</p>
                  <label className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue="option1"
                    />
                    <div className="form-check-label">Request price</div>
                  </label>
                  <label className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue="option2"
                    />
                    <div className="form-check-label">Request a sample</div>
                  </label>
                </div>
                <div className="form-group">
                  <button className="btn btn-warning">Request for quote</button>
                </div>
              </form>
            </div>
          </div>
          {/* col // */}
        </div>
        {/* row // */}
      </section>
      {/* =============== SECTION REQUEST .//END =============== */}
      {/* =============== SECTION ITEMS =============== */}
      <section className="padding-bottom-sm">
        <header className="section-heading heading-line">
          <h4 className="title-section text-uppercase">Recommended items</h4>
        </header>
        <div className="row row-sm">
          <div className="col-xl-2 col-lg-3 col-md-4 col-6">
            <div className="card card-sm card-product-grid">
              <a href="#" className="img-wrap">
                <img src="images/demo/Marble Stone Rock Jade Ceramic.png" />
              </a>
              <figcaption className="info-wrap">
                <a href="#" className="title">
                  Marble Stone Rock Jade Ceramic
                </a>
                <div className="price mt-1">$179.00</div>
                {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>
          {/* col.// */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-6">
            <div className="card card-sm card-product-grid">
              <a href="#" className="img-wrap">
                <img src="images/demo/Bathtub - Hot Tub Bathtub Swimming Pool Bathroom Massage.png" />
              </a>
              <figcaption className="info-wrap">
                <a href="#" className="title">
                  Bathtub - Hot Tub Bathtub Swimming Pool Bathroom Massage
                </a>
                <div className="price mt-1">$280.00</div>
                {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>
          {/* col.// */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-6">
            <div className="card card-sm card-product-grid">
              <a href="#" className="img-wrap">
                <img src="images/demo/Shower Bathroom Bathtub American Standard Brands Tap.png" />
              </a>
              <figcaption className="info-wrap">
                <a href="#" className="title">
                  Shower Bathroom Bathtub American Standard Brands Tap
                </a>
                <div className="price mt-1">$56.00</div>
                {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>
          {/* col.// */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-6">
            <div className="card card-sm card-product-grid">
              <a href="#" className="img-wrap">
                <img src="images/demo/3D Interior Design - Interior Design Services.png" />
              </a>
              <figcaption className="info-wrap">
                <a href="#" className="title">
                  3D Interior Design - Interior Design Services
                </a>
                <div className="price mt-1">$179.00</div>
                {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>
          {/* col.// */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-6">
            <div className="card card-sm card-product-grid">
              <a href="#" className="img-wrap">
                <img src="images/demo/Table Garden Furniture Chaise Longue Chair Couch.png" />
              </a>
              <figcaption className="info-wrap">
                <a href="#" className="title">
                  Table Garden Furniture Chaise Longue Chair Couch
                </a>
                <div className="price mt-1">$179.00</div>
                {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>
          {/* col.// */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-6">
            <div className="card card-sm card-product-grid">
              <a href="#" className="img-wrap">
                <img src="images/demo/Solar Panel - Solar Panels Solar Power Solar Energy Photovoltaic System Solar Lamp.png" />
              </a>
              <figcaption className="info-wrap">
                <a href="#" className="title">
                  Solar Panel - Solar Panels Solar Power Solar Energy
                  Photovoltaic System Solar Lamp
                </a>
                <div className="price mt-1">$280.00</div>
                {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>
          {/* col.// */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-6">
            <div className="card card-sm card-product-grid">
              <a href="#" className="img-wrap">
                <img src="images/demo/Woodshop Tool Cabinets - Stanley Hand Tools Tool Boxes Plastic.png" />
              </a>
              <figcaption className="info-wrap">
                <a href="#" className="title">
                  Woodshop Tool Cabinets - Stanley Hand Tools Tool Boxes Plastic
                </a>
                <div className="price mt-1">$56.00</div>
                {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>
          {/* col.// */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-6">
            <div className="card card-sm card-product-grid">
              <a href="#" className="img-wrap">
                <img src="images/demo/Generator - Electric Generator Sine Wave Power Inverters Emergency Power System Diesel Generator .png" />
              </a>
              <figcaption className="info-wrap">
                <a href="#" className="title">
                  Generator - Electric Generator Sine Wave Power Inverters
                  Emergency Power System Diesel Generator
                </a>
                <div className="price mt-1">$179.00</div>
                {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>
          {/* col.// */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-6">
            <div className="card card-sm card-product-grid">
              <a href="#" className="img-wrap">
                <img src="images/demo/Swimming Pool - Swimming Pool Hot Tub Landscaping Shotcrete.png" />
              </a>
              <figcaption className="info-wrap">
                <a href="#" className="title">
                  Swimming Pool - Swimming Pool Hot Tub Landscaping Shotcrete
                </a>
                <div className="price mt-1">$179.00</div>
                {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>
          {/* col.// */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-6">
            <div className="card card-sm card-product-grid">
              <a href="#" className="img-wrap">
                <img src="images/demo/White Sofa - Loveseat Sofa Bed Chair Futon Couch.png" />
              </a>
              <figcaption className="info-wrap">
                <a href="#" className="title">
                  White Sofa - Loveseat Sofa Bed Chair Futon Couch
                </a>
                <div className="price mt-1">$179.00</div>
                {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>
          {/* col.// */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-6">
            <div className="card card-sm card-product-grid">
              <a href="#" className="img-wrap">
                <img src="images/demo/Hand Saw Image - Stanley Hand Tools Hand Saw.png" />
              </a>
              <figcaption className="info-wrap">
                <a href="#" className="title">
                  Hand Saw Image - Stanley Hand Tools Hand Saw
                </a>
                <div className="price mt-1">$280.00</div>
                {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>
          {/* col.// */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-6">
            <div className="card card-sm card-product-grid">
              <a href="#" className="img-wrap">
                <img src="images/demo/Tv Stand - Table Television Set Furniture Burbank.png" />
              </a>
              <figcaption className="info-wrap">
                <a href="#" className="title">
                  Tv Stand - Table Television Set Furniture Burbank
                </a>
                <div className="price mt-1">$56.00</div>
                {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>
          {/* col.// */}
        </div>
        {/* row.// */}
      </section>
      {/* =============== SECTION ITEMS .//END =============== */}
      {/* =============== SECTION SERVICES =============== */}
      <section className="padding-bottom">
        <header className="section-heading heading-line">
          <h4 className="title-section text-uppercase">Trade services</h4>
        </header>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <article className="card card-post">
              <img
                src="images/demo/business-office-contract-agreement.jpg"
                className="card-img-top"
              />
              <div className="card-body">
                <h6 className="title">Trade Assurance</h6>
                <p className="small text-uppercase text-muted">
                  Order protection
                </p>
              </div>
            </article>
            {/* card.// */}
          </div>
          {/* col.// */}
          <div className="col-md-3 col-sm-6">
            <article className="card card-post">
              <img
                src="images/demo/istockphoto-1304677649-170667a.jpg"
                className="card-img-top"
              />
              <div className="card-body">
                <h6 className="title">Approved</h6>
                <p className="small text-uppercase text-muted">
                  Finance solution
                </p>
              </div>
            </article>
            {/* card.// */}
          </div>
          {/* col.// */}
          <div className="col-md-3 col-sm-6">
            <article className="card card-post">
              <img src="images/posts/3.jpg" className="card-img-top" />
              <div className="card-body">
                <h6 className="title">Inspection solution</h6>
                <p className="small text-uppercase text-muted">
                  Easy Inspection
                </p>
              </div>
            </article>
            {/* card.// */}
          </div>
          {/* col.// */}
          <div className="col-md-3 col-sm-6">
            <article className="card card-post">
              <img src="images/posts/4.jpg" className="card-img-top" />
              <div className="card-body">
                <h6 className="title">Ocean and Air Shipping</h6>
                <p className="small text-uppercase text-muted">
                  Logistic services
                </p>
              </div>
            </article>
            {/* card.// */}
          </div>
          {/* col.// */}
        </div>
        {/* row.// */}
      </section>
      {/* =============== SECTION SERVICES .//END =============== */}
      {/* =============== SECTION REGION =============== */}
      <section className="padding-bottom">
        <header className="section-heading heading-line">
          <h4 className="title-section text-uppercase">Choose region</h4>
        </header>
        <ul className="row mt-4">
          <li className="col-md col-6">
            <a href="#" className="icontext">
              <img className="icon-flag-sm" src="images/demo/tn_sa-flag.gif" />
              <span>KSA</span>
            </a>
          </li>
          <li className="col-md col-6">
            <a href="#" className="icontext">
              <img className="icon-flag-sm" src="images/demo/tn_ku-flag.gif" />
              <span>Kuwait</span>
            </a>
          </li>
          <li className="col-md col-6">
            <a href="#" className="icontext">
              <img className="icon-flag-sm" src="images/demo/tn_ba-flag.gif" />
              <span>Bahrain</span>
            </a>
          </li>
          <li className="col-md col-6">
            <a href="#" className="icontext">
              <img className="icon-flag-sm" src="images/demo/tn_mu-flag.gif" />
              <span>Oman</span>
            </a>
          </li>
          <li className="col-md col-6">
            <a href="#" className="icontext">
              <img
                className="icon-flag-sm"
                src="images/demo/255px-Flag_of_the_United_Arab_Emirates.svg.png"
              />
              <span>UAE</span>
            </a>
          </li>
          <li className="col-md col-6">
            <a href="#" className="icontext">
              <img className="icon-flag-sm" src="images/demo/tn_jo-flag.gif" />
              <span>Jordan</span>
            </a>
          </li>
          <li className="col-md col-6">
            <a href="#" className="icontext">
              <img className="icon-flag-sm" src="images/demo/tn_le-flag.gif" />
              <span>Lebanon</span>
            </a>
          </li>
          <li className="col-md col-6">
            <a href="#" className="icontext">
              <img className="icon-flag-sm" src="images/demo/tn_tu-flag.gif" />
              <span>Turkey</span>
            </a>
          </li>
          <li className="col-md col-6">
            <a href="#" className="icontext">
              <img className="icon-flag-sm" src="images/demo/tn_ch-flag.gif" />
              <span>China</span>
            </a>
          </li>
          <li className="col-md col-6">
            <a href="#" className="icontext">
              <i className="mr-3 fa fa-ellipsis-h" /> <span>More regions</span>
            </a>
          </li>
        </ul>
      </section>
      {/* =============== SECTION REGION .//END =============== */}
      <article className="my-4">
        <img src="images/banners/ad-sm.png" className="w-100" />
      </article>
    </div>
  );
};

export default Home;
