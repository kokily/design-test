import React from 'react';
import { MenuProps } from '../../libs/types';
import NavMenu from '../../libs/NavMenu';

function Sitemap() {
  const NavItem = ({ title, url, items }: MenuProps) => (
    <div className="col-sm-3">
      <h3 className="font-weight-bold text-4 mb-2">{title}</h3>
      <ul className="list list-icons list-icons-sm mb-4">
        {items ? (
          <>
            {items.map((item) => (
              <li key={item.id}>
                <a href={item.subUrl}>
                  <i className="far fa-file" />
                  {item.subTitle}
                </a>
              </li>
            ))}
          </>
        ) : (
          <li>
            <a href={url}>
              <i className="far fa-file" />
              {title}
            </a>
          </li>
        )}
      </ul>
    </div>
  );

  return (
    <>
      <section className="page-header page-header-modern bg-color-light-scale-1 page-header-lg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align-self-center p-static order-2 text-center">
              <h1 className="font-weight-bold text-dark">Sitemap</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-4">
        <div className="row">
          {NavMenu.map((menu) => (
            <NavItem
              key={menu.id}
              title={menu.title}
              url={menu.url}
              items={menu.items && menu.items}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Sitemap;
