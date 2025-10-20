import footerData from "../mockData/footerData";

const Footer = () => {
  const { title, ctaText, brand, address1, rights, links1, links2, contact } = footerData;

  return (
    <>
      <div className="footer__header">
        <h2 className="footer__title_main">{title}</h2>
        <button className="footer__cta_btn">{ctaText}</button>
      </div>
      <div className="footer__content">
        <div className="footer__column footer__column--brand">
          <h3 className="footer__brand">{brand}</h3>
          <p className="footer__address">{address1}</p>
          <p className="footer__rights">{rights}</p>
        </div>
        <div className="footer__column">
          <h4 className="footer__title">Ссылки</h4>
          <ul className="footer__list">
            <li>
              <a href={links1[0].href} className="footer__link">
                {links1[0].text}
              </a>
            </li>
            <li>
              <a href={links1[1].href} className="footer__link">
                {links1[1].text}
              </a>
            </li>
            <li>
              <a href={links1[2].href} className="footer__link">
                {links1[2].text}
              </a>
            </li>
            <li>
              <a href={links1[3].href} className="footer__link">
                {links1[3].text}
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h4 className="footer__title">Компания</h4>
          <ul className="footer__list">
            <li>
              <a href={links2[0].href} className="footer__link">
                {links2[0].text}
              </a>
            </li>
            <li>
              <a href={links2[1].href} className="footer__link">
                {links2[1].text}
              </a>
            </li>
            <li>
              <a href={links2[2].href} className="footer__link">
                {links2[2].text}
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h4 className="footer__title">Контакты</h4>
          <p className="footer__address">{contact.address}</p>
          <p className="footer__phone">{contact.phone}</p>
          <p className="footer__email">{contact.email}</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p>© 2023 GPT-3. Все права защищены.</p>
      </div>
    </>
  );
};

export default Footer;