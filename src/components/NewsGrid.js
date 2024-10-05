// NewsGrid.js
import NewsItem from './NewsItem';

function NewsGrid({ items }) {
  return (
    <div className="news-grid">
      {items && items.map((item, i) => (
        <NewsItem key={i} item={item} />
      ))}
    </div>
  );
}

export default NewsGrid;
