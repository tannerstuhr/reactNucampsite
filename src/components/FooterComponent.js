import React from 'react';
import { Link } from 'react-router-dom'
import '../css/FooterComponent.css'

function Footer(props) {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-4 col-sm-2 offset-1">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link className="link" to="/home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/directory">
                    Directory
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/aboutus">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/contactus">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-3 text-center">
              <h5>Social</h5>
              <a className="btn btn-social-icon btn-instagram link" href="http://instagram.com/">
                <i className="fa fa-instagram text-light" />
              </a>{' '}
              <a className="btn btn-social-icon btn-facebook link" href="http://www.facebook.com/">
                <i className="fa fa-facebook text-light" />
              </a>{' '}
              <a className="btn btn-social-icon btn-twitter link" href="http://twitter.com/">
                <i className="fa fa-twitter text-light" />
              </a>{' '}
              <a className="btn btn-social-icon btn-google link" href="http://youtube.com/">
                <i className="fa fa-youtube text-light" />
              </a>
            </div>
            <div className="col-sm-4 text-center text-light">
              <a role="button" className="btn btn-link text-light" href="tel:+12065551234">
                <i className="fa fa-phone text-light" /> 1-206-555-1234
              </a>
              <br />
              <a role="button" className="btn btn-link text-light" href="mailto:notreal@notreal.co">
                <i className="fa fa-envelope-o text-light" /> campsites@nucamp.co
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;