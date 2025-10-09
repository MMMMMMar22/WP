export const footerTemplate = ({ title, ctaText, brand, address1, rights, links1, links2, contact }) => {
  const linksCol = (title, items) => `
    <div class="footer__column">
      <h4 class="footer__title">${title}</h4>
      <ul class="footer__list">
        ${items.map((t) => `<li><a href="#" class="footer__link">${t}</a></li>`).join("")}
      </ul>
    </div>`;

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
      ${linksCol("Ссылки", links1)}
      ${linksCol("Компания", links2)}
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


