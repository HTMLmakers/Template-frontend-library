import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as ImgLogo} from "../assets/img/logo.svg";

const HomePage = () => {
  return (
    <div className="components-library components-library--main">
      <header className="components-library__header">
        <div className="components-library__logo">
          <ImgLogo />
        </div>
        <h1 className="components-library__heading h1">
          Components Library
        </h1>
        <a className="components-library__link-site"
           href="https://htmlmakers.com/"
           target="_blank"
        >
          htmlmakers.com
        </a>
      </header>
      <div className="components-library__main">
        <nav className="components-library__nav">
          <ul className="components-library__nav-list">
            <li className="components-library__nav-item">
              <Link to={`/layout`}
                    className="components-library__nav-link"
                    target="_blank"
              >
                Layout
              </Link>
            </li>
            <li className="components-library__nav-item">
              <Link to={`/layout-page`}
                    className="components-library__nav-link"
                    target="_blank"
              >
                PageLayout
              </Link>
            </li>
            <li className="components-library__nav-item">
              <Link to={`/ui-kit`}
                    className="components-library__nav-link"
                    target="_blank"
              >
                Ui-kit elements
              </Link>
            </li>
            <li className="components-library__nav-item">
              <Link to={`/layout-components`}
                    className="components-library__nav-link"
                    target="_blank"
              >
                Layout Сomponents
              </Link>
            </li>
            <li className="components-library__nav-item">
              <Link to={`/simple-components`}
                    className="components-library__nav-link"
                    target="_blank"
              >
                Simple Components
              </Link>
            </li>
            <li className="components-library__nav-item">
              <Link to={`/complex-components`}
                    className="components-library__nav-link"
                    target="_blank"
              >
                Complex components
              </Link>
            </li>
            <li className="components-library__nav-item">
              <Link to={`/other`}
                    className="components-library__nav-link"
                    target="_blank"
              >
                Other
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
};

export default HomePage;
