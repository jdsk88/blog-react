import React from 'react';
import axios from 'axios';
import "../../style/article.css"
class ArticlesList extends React.Component {
  state = {
    articles: []
  };
  componentDidMount() {
    axios.get(`http://localhost:3000/articles`)
      .then(res => {
        const articles = res.data;
        this.setState({
          articles
        });
      });
  }
  render() {
    return (
    <div className="articles-container">
      {this.state.articles.map(article =>       
      <div className="aricle-box">
        <div className="article-data">
          <div className="article-data__title"> Article Title: {article.title} </div>
          <div className="article-data__subtitle"> Article Subitle: {article.subtitle} </div>
          <div className="article-data__user-id"> Article Author: {article.userId} </div>
          <div className="article-data__date-of-post"> Article Posted:  {article.date} </div>
          <div className="article-data__last-update"> Atricle Updated {article.last_update} </div>
          <div className="article-data__likes"> Likes: {article.likes} </div>
          <div className="article-data__displays"> Displays: {article.displays_q} </div>
        </div>
      </div>
      )}
    </div>);
  }
}

export default ArticlesList