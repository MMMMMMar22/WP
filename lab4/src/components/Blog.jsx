import blogData from "../mockData/blogData";

const BlogCard = ({ card, isLarge = false }) => {
  const { image, date, title, linkText } = card;
  const largeClass = isLarge ? " blog_card--large" : "";
  return (
    <div className={`blog_card${largeClass}`}>
      <div className="blog_card__image">
        <img src={image.src} alt={image.alt} />
      </div>
      <div className="blog_card__content">
        <div className="blog_card__date">{date}</div>
        <h3 className="blog_card__title">{title}</h3>
        <a href="#" className="blog_card__link">
          {linkText}
        </a>
      </div>
    </div>
  );
};

const Blog = () => {
  const { header, leftCard, rightCards } = blogData;
  
  return (
    <>
      <div className="blog_section__header">
        <h2 className="blog_header">
          {header}
        </h2>
      </div>
      <div className="blog_section__content">
        <div className="blog_section__left">
          <BlogCard card={leftCard} isLarge={true} />
        </div>
        <div className="blog_section__right">
          <div className="blog_grid">
            {rightCards.map((c, idx) => (
              <BlogCard key={idx} card={c} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;