export const callToActionTemplate = ({ topCta, header, buttonText }) => {
  return `
    <div class="call_to_action__left">
      <div class="call_to_action__left_top">
        <a href="#" class="call_to_action__cta">${topCta}</a>
      </div>
      <div class="call_to_action__content">
        <p class="call_to_action__header">${header}</p>
      </div>
    </div>
    <div class="call_to_action__right">
      <button class="call_to_action__btn btn primary-btn">${buttonText}</button>
    </div>
  `;
};

export default callToActionTemplate;


