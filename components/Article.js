const Article = ({ article }) => {
  return (
    <article className="app__article">
      <img
        className="app__article-img"
        src={article.img}
        alt="article picture"
      />
      <div className="app__article-container">
        <p className="app__article-author">By {article.author}</p>
        <h4 className="app__article-title">{article.title}</h4>
        <p className="app__article-content">{article.content}</p>
      </div>
    </article>
  );
};

export default Article;
