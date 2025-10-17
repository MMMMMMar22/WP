const createBlogCard = ({ image, date, title, linkText }, isLarge = false) => {
  const largeClass = isLarge ? " blog_card--large" : "";
  return `
    <div class="blog_card${largeClass}">
      <div class="blog_card__image">
        <img src="${image.src}" alt="${image.alt}" />
      </div>
      <div class="blog_card__content">
        <div class="blog_card__date">${date}</div>
        <h3 class="blog_card__title">${title}</h3>
        <a href="#" class="blog_card__link">${linkText}</a>
      </div>
    </div>
  `;
};

export const blogTemplate = ({ header, leftCard, rightCards }) => {
  const left = createBlogCard(leftCard, true);
  const right = rightCards.map((c) => createBlogCard(c)).join("");
  return `
    <div class="blog_section__header">
      <h2 class="blog_header">${header}</h2>
    </div>
    <div class="blog_section__content">
      <div class="blog_section__left">${left}</div>
      <div class="blog_section__right"><div class="blog_grid">${right}</div></div>
    </div>
  `;
};

export default blogTemplate;


