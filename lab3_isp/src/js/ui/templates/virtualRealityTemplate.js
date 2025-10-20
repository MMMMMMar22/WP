export const virtualRealityTemplate = ({ image, topCta, header, content, bottomCta }) => {
  const left = `
    <div class="virtual_reality__left">
      <img src="${image.src}" alt="${image.alt}" />
    </div>
  `;

  const right = `
    <div class="virtual_reality__right">
      <div class="virtual_reality__right_top">
        <a href="#" class="virtual_reality__cta_top">${topCta}</a>
      </div>
      <div class="virtual_reality__right_center">
        <h2 class="virtual_reality__header">${header}</h2>
        <p class="virtual_reality__content">${content}</p>
      </div>
      <div class="virtual_reality__right_bottom">
        <a href="#" class="virtual_reality__cta_bottom">${bottomCta}</a>
      </div>
    </div>
  `;

  return `${left}${right}`;
};

export default virtualRealityTemplate;


