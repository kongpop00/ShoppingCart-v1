function Footer() {
    return (
      <div>
        <footer className=" text-[15px] flex flex-wrap justify-around footer p-[40px]  bg-[#8e6646] text-white">
          <nav>
            <header className="footer-title ">OPENING HOURS:</header>
            <a className="link link-hover">Mon - Fri: 7am - 5pm </a>
            <a className="link link-hover">Saturday: 8am - 6pm</a>
            <a className="link link-hover">Sunday: 8am - 6pm</a>
          </nav>
          <nav>
            <header className="footer-title ">ADDRESS:</header>
            <a className="link link-hover">500 Terry Francine Street</a>
            <a className="link link-hover">San Francisco, CA 94158</a>
            <a className="link link-hover">Tel: 123-456-7890</a>
          </nav>
          <form>
            <header className="footer-title">Newsletter</header>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text text-white">
                  Enter your email address
                </span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16"
                />
                <button className="btn bg-[#e6bb5c] text-white absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>
    );
  }
  
  export default Footer;
  