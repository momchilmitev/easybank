const Article = ({ article }) => {
  return (
    <article className="app__article">
      <img
        className="app__article-title"
        src={article.img}
        alt="article picture"
      />
      <p className="app__article-author">By {article.author}</p>
      <h4 className="app__article-title">{article.title}</h4>
      <p className="app__article-content">{article.content}</p>
    </article>
  );
};

export default Article;
