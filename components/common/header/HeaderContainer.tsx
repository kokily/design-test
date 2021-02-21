import React from 'react';

function HeaderContainer() {
  const LeftContainer = (
    <div className="header-column justify-content-start w-50 order-md-1 d-none d-md-flex">
      <div className="header-row">
        <ul className="header-extra-info">
          <li className="m-0">
            <div className="feature-box feature-box-style-2 align-items-center">
              <div className="feature-box-icon">
                <i className="far fa-clock text-7 p-relative" />
              </div>
              <div className="feature-box-info">
                <p className="pb-0 font-weight-semibold line-height-5 text-2">
                  MON - FRI: 10:00 - 18:00
                  <br />
                  SAT - SUN: 10:00 - 14:00
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );

  const CenterContainer = (
    <div className="header-column justify-content-start justify-content-md-center order-1 order-md-2">
      <div className="header-row">
        <div className="header-logo">
          <a href="/">
            <img
              alt="Porto"
              width="100"
              height="48"
              data-sticky-width="82"
              data-sticky-height="40"
              src="/assets/img/logo-default-slim.png"
            />
          </a>
        </div>
      </div>
    </div>
  );

  const RightContainer = (
    <div className="header-column justify-content-end w-50 order-2 order-md-3">
      <div className="header-row">
        <ul className="header-extra-info">
          <li className="m-0">
            <div className="feature-box reverse-allres feature-box-style-2 align-items-center">
              <div className="feature-box-icon">
                <i
                  className="fab fa-whatsapp text-7 p-relative"
                  style={{ top: '-2px' }}
                />
              </div>
              <div className="feature-box-info">
                <p className="pb-0 font-weight-semibold line-height-5 text-2">
                  (123) 456-7890
                  <br />
                  (123) 456-7891
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="header-container container">
      <div className="header-row">
        {LeftContainer}
        {CenterContainer}
        {RightContainer}
      </div>
    </div>
  );
}

export default HeaderContainer;
