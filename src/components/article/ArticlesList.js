import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom';
import AddArticle from '../add_article/add_article';
import "../../style/article.css"
import api_url from '../../config'

class ArticlesList extends React.Component {
  state = {
    articles: []
  };
  componentDidMount() {
    axios.get(api_url + `/articles`)
      .then(res => {
        const articles = res.data;
        console.log('fetch')
        this.setState({
          articles
        });
      });
  }
  render() {
    return (
      <div>
    <div className="articles-container">
      {this.state.articles.map(article =>       
      <div className="aricle-box">
      <img src={article.file}/>
        <div className="article-data">
          <div className="aheader">
          <div className="article-data__title"> Article Title: {article.title} </div>
            <button> hide article</button>
          </div>
          <div className="ai article-data__subtitle"> Article Subitle: {article.subtitle} </div>
          <div className="ai article-data__subtitle"> Article body: {article.body} </div>
          <div className="comment">
            <button type="submit"><i className=""/></button>
            <button type="submit"><i className=""/></button>
            <button type="submit"><i className=""/></button>
            <input type="text" />
            <button type="submit"><i className="fas fa-paper-plane"/></button>
            </div>
          {/* <div className="article-data__date-of-post"> Article Posted:  {article.date} </div> */}
          {/* <div className="article-data__last-update"> Atricle Updated {article.last_update} </div> */}
          {/* <div className="article-data__likes"> Likes: {article.likes} </div> */}
          {/* <div className="article-data__user-id"> Article Author: {article.userId} </div> */}
          {/* <div className="article-data__displays"> Displays: {article.displays_q} </div> */}
        </div>
      </div>
      )}
    </div>
    </div>
    );
  }
}

export default ArticlesList