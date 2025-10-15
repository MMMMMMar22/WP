import footerData from "../mockData/footerData";

const LinksColumn = ({ title, items }) => {
  return (
    <div className="footer__column">
      <h4 className="footer__title">{title}</h4>
      <ul className="footer__list">
        {items.map((t, i) => (
          <li key={`${title}-${i}`}>
            <a href="#" className="footer__link">
              {t}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

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
        <LinksColumn title="Ссылки" items={links1} />
        <LinksColumn title="Компания" items={links2} />
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