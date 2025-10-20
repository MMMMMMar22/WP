import blogData from "../mockData/blogData";

const Blog = () => {
  const { header, leftCard, rightCards } = blogData;
  
  const left = (
    <div className="blog_card blog_card--large">
      <div className="blog_card__image">
        <img src={leftCard.image.src} alt={leftCard.image.alt} />
      </div>
      <div className="blog_card__content">
        <div className="blog_card__date">{leftCard.date}</div>
        <h3 className="blog_card__title">{leftCard.title}</h3>
        <a href={leftCard.linkText.href} className="blog_card__link">
          {leftCard.linkText.text}
        </a>
      </div>
    </div>
  );

  const right = (
    <>
      <div className="blog_card">
        <div className="blog_card__image">
          <img src={rightCards[0].image.src} alt={rightCards[0].image.alt} />
        </div>
        <div className="blog_card__content">
          <div className="blog_card__date">{rightCards[0].date}</div>
          <h3 className="blog_card__title">{rightCards[0].title}</h3>
          <a href={rightCards[0].linkText.href} className="blog_card__link">
            {rightCards[0].linkText.text}
          </a>
        </div>
      </div>
      <div className="blog_card">
        <div className="blog_card__image">
          <img src={rightCards[1].image.src} alt={rightCards[1].image.alt} />
        </div>
        <div className="blog_card__content">
          <div className="blog_card__date">{rightCards[1].date}</div>
          <h3 className="blog_card__title">{rightCards[1].title}</h3>
          <a href={rightCards[1].linkText.href} className="blog_card__link">
            {rightCards[1].linkText.text}
          </a>
        </div>
      </div>
      <div className="blog_card">
        <div className="blog_card__image">
          <img src={rightCards[2].image.src} alt={rightCards[2].image.alt} />
        </div>
        <div className="blog_card__content">
          <div className="blog_card__date">{rightCards[2].date}</div>
          <h3 className="blog_card__title">{rightCards[2].title}</h3>
          <a href={rightCards[2].linkText.href} className="blog_card__link">
            {rightCards[2].linkText.text}
          </a>
        </div>
      </div>
      <div className="blog_card">
        <div className="blog_card__image">
          <img src={rightCards[3].image.src} alt={rightCards[3].image.alt} />
        </div>
        <div className="blog_card__content">
          <div className="blog_card__date">{rightCards[3].date}</div>
          <h3 className="blog_card__title">{rightCards[3].title}</h3>
          <a href={rightCards[3].linkText.href} className="blog_card__link">
            {rightCards[3].linkText.text}
          </a>
        </div>
      </div>
    </>
  );
  
  return (
    <>
      <div className="blog_section__header">
        <h2 className="blog_header">
          {header}
        </h2>
      </div>
      <div className="blog_section__content">
        <div className="blog_section__left">{left}</div>
        <div className="blog_section__right">
          <div className="blog_grid">{right}</div>
        </div>
      </div>
    </>
  );
};

export default Blog;