import React from 'react';

function Copyright() {
  return (
    <div className="footer-copyright">
      <div className="container py-2">
        <div className="row py-4">
          <div className="col-lg-1 d-flex align-items-center justify-content-center justify-content-lg-start mb-2 mb-lg-0">
            <a href="/" className="logo pr-0 pr-lg-3">
              <img src="/assets/img/logo-footer.png" className="opacity-5" height="32" />
            </a>
          </div>

          <div className="col-lg-7 d-flex align-items-center justify-content-center justify-content-lg-start mb-4 mb-lg-0">
            <p>Copyright(c) 2021. All Right Reserved.</p>
          </div>

          <div className="col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-end">
            <nav id="sub-menu">
              <ul>
                <li>
                  <i className="fas fa-angle-right" />
                  <a href="/qna" className="ml-1 text-decoration-none">
                    {' '}
                    FAQ's
                  </a>
                </li>
                <li>
                  <i className="fas fa-angle-right" />
                  <a href="/sitemap" className="ml-1 text-decoration-none">
                    {' '}
                    Sitemap
                  </a>
                </li>
                <li>
                  <i className="fas fa-angle-right" />
                  <a href="/about" className="ml-1 text-decoration-none">
                    {' '}
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Copyright;
