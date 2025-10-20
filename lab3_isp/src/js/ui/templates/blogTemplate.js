export const blogTemplate = ({ header, leftCard, rightCards }) => {
  const left = `
    <div class="blog_card blog_card--large">
      <div class="blog_card__image">
        <img src="${leftCard.image.src}" alt="${leftCard.image.alt}" />
      </div>
      <div class="blog_card__content">
        <div class="blog_card__date">${leftCard.date}</div>
        <h3 class="blog_card__title">${leftCard.title}</h3>
        <a href="${leftCard.linkText.href}" class="blog_card__link">${leftCard.linkText.text}</a>
      </div>
    </div>
  `;

  const right = `
    <div class="blog_card">
      <div class="blog_card__image">
        <img src="${rightCards[0].image.src}" alt="${rightCards[0].image.alt}" />
      </div>
      <div class="blog_card__content">
        <div class="blog_card__date">${rightCards[0].date}</div>
        <h3 class="blog_card__title">${rightCards[0].title}</h3>
        <a href="${rightCards[0].linkText.href}" class="blog_card__link">${rightCards[0].linkText.text}</a>
      </div>
    </div>
    <div class="blog_card">
      <div class="blog_card__image">
        <img src="${rightCards[1].image.src}" alt="${rightCards[1].image.alt}" />
      </div>
      <div class="blog_card__content">
        <div class="blog_card__date">${rightCards[1].date}</div>
        <h3 class="blog_card__title">${rightCards[1].title}</h3>
        <a href="${rightCards[1].linkText.href}" class="blog_card__link">${rightCards[1].linkText.text}</a>
      </div>
    </div>
    <div class="blog_card">
      <div class="blog_card__image">
        <img src="${rightCards[2].image.src}" alt="${rightCards[2].image.alt}" />
      </div>
      <div class="blog_card__content">
        <div class="blog_card__date">${rightCards[2].date}</div>
        <h3 class="blog_card__title">${rightCards[2].title}</h3>
        <a href="${rightCards[2].linkText.href}" class="blog_card__link">${rightCards[2].linkText.text}</a>
      </div>
    </div>
    <div class="blog_card">
      <div class="blog_card__image">
        <img src="${rightCards[3].image.src}" alt="${rightCards[3].image.alt}" />
      </div>
      <div class="blog_card__content">
        <div class="blog_card__date">${rightCards[3].date}</div>
        <h3 class="blog_card__title">${rightCards[3].title}</h3>
        <a href="${rightCards[3].linkText.href}" class="blog_card__link">${rightCards[3].linkText.text}</a>
      </div>
    </div>
  `;

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