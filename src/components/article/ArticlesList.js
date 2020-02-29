import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom';
import AddArticle from '../add_article/add_article';
import "../../style/article.css"
class ArticlesList extends React.Component {
  state = {
    articles: []
  };
  componentDidMount() {
    axios.get(`http://192.168.0.193:3000/articles`)
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
      <div class="article">

      <Router> <div className="overflow">
      
              <div class="article-container">
              <div className="article-box article__options_container">
                <NavLink to='/add-article' className="article__options_flex" ><div className="article__options"><i class="fas fa-newspaper"></i><label>add article</label></div></NavLink>
              <select className="article__options_select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              </div>
              </div>
              </div>
              <Switch>
                    <Route  path='/add-article' component={AddArticle} />
      </Switch>
      </Router>
    <div className="articles-container">
      {this.state.articles.map(article =>       
      <div className="aricle-box">
        <div className="article-data">
          <div className="article-data__title"> Article Title: {article.title} </div>
          <div className="article-data__subtitle"> Article Subitle: {article.subtitle} </div>
          <div className="article-data__subtitle"> Article body: {article.body} </div>
          <img src={article.file}/>
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