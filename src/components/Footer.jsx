import "./Footer.css";
import fb from "../assets/FB.png";
import ig from "../assets/IG.png";
import twt from "../assets/twt.png";
import linked from "../assets/174857.png";

function Footer() {
  return (
    <div className="footer">
      <div className="vV_footer section_padding">
        <hr />

        <div className="vV_footer-links">
          <div className="vV_footer-links_div">
            <h4>Page Arbo</h4>
            <a href="page-arbo">
              <p>Page Arbo</p>
            </a>
          </div>

          <div className="vV_footer-links_div">
            <h4>Resources</h4>
            <a href="resources">
              <p>Resources</p>
            </a>
          </div>

          <div className="vV_footer-links_div">
            <h4>Partners</h4>
            <a href="partners">
              <p>Partners</p>
            </a>
          </div>

          <div className="vV_footer-links_div">
            <h4>Contact</h4>
            <a href="email">
              <p>Email</p>
            </a>
            <a href="phone">
              <p>Phone</p>
            </a>
            <a href="career">
              <p>Career</p>
            </a>
          </div>

          <div className="vV_footer-links_div">
            <h4>Socialmedia Partners</h4>
            <div className="socialmedia">
              <p>
                <img src={fb} alt="" />
              </p>
              <p>
                <img src={ig} alt="" />
              </p>
              <p>
                <img src={twt} alt="" />
              </p>
              <p>
                <img src={linked} alt="" />
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className="vV_footer-below">
          <div className="vV_footer-copyright">
            <p>@{new Date().getFullYear()} VerdeVogue. All rights reserved.</p>
          </div>
          <div className="vV_footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/Cookies">
              <div>
                <p>Cookies</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
