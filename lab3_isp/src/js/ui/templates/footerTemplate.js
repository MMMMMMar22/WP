export const footerTemplate = ({ title, ctaText, brand, address1, rights, links1, links2, contact }) => {
  return `
    <div class="footer__header">
      <h2 class="footer__title_main">${title}</h2>
      <button class="footer__cta_btn">${ctaText}</button>
    </div>
    <div class="footer__content">
      <div class="footer__column footer__column--brand">
        <h3 class="footer__brand">${brand}</h3>
        <p class="footer__address">${address1}</p>
        <p class="footer__rights">${rights}</p>
      </div>
      <div class="footer__column">
        <h4 class="footer__title">Ссылки</h4>
        <ul class="footer__list">
          <li><a href="${links1[0].href}" class="footer__link">${links1[0].text}</a></li>
          <li><a href="${links1[1].href}" class="footer__link">${links1[1].text}</a></li>
          <li><a href="${links1[2].href}" class="footer__link">${links1[2].text}</a></li>
          <li><a href="${links1[3].href}" class="footer__link">${links1[3].text}</a></li>
        </ul>
      </div>
      <div class="footer__column">
        <h4 class="footer__title">Компания</h4>
        <ul class="footer__list">
          <li><a href="${links2[0].href}" class="footer__link">${links2[0].text}</a></li>
          <li><a href="${links2[1].href}" class="footer__link">${links2[1].text}</a></li>
          <li><a href="${links2[2].href}" class="footer__link">${links2[2].text}</a></li>
        </ul>
      </div>
      <div class="footer__column">
        <h4 class="footer__title">Контакты</h4>
        <p class="footer__address">${contact.address}</p>
        <p class="footer__phone">${contact.phone}</p>
        <p class="footer__email">${contact.email}</p>
      </div>
    </div>
    <div class="footer__copyright">
      <p>© 2023 GPT-3. Все права защищены.</p>
    </div>
  `;
};

export default footerTemplate;


