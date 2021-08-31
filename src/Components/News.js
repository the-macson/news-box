import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=07753b7c7e804df2a72f34d457ac438d";
    let data =await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles});
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.articles.map((element) => {
             return (
               <div className="col-sm-4" key={element.url}>
                 <NewsItem
                   title={element.title}
                   description={element.description}
                   imageUrl={element.urlToImage}
                   newsUrl ={element.url}
                 />
               </div>
             );})}
          
        </div>
      </div>
    );
  }
}

export default News;
