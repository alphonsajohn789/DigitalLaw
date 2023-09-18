import React, { Component} from 'react';
import './Search.css';

import Sentiment from 'sentiment';

const sentiment = new Sentiment();


class Search extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      sentimentScore: null,
      generalSentiment: null
    };
    this.findSentiment = this.findSentiment.bind(this);
  }

findSentiment(event){
  const result = sentiment.analyze(event.target.value)
  console.log(result)
  this.setState({
    sentimentScore: result.score
  })
  if (result.score < 0) {
    this.setState({
      generalSentiment: 'Negative'
    })
  }
  else if (result.score > 0){
    this.setState({
      generalSentiment: 'Positive'
    })
  }
  else {
    this.setState({
      generalSentiment: 'Neutral'
    })
  }
}

  render() {
    
    return (
      <div className='App'>
        <h2 className='head1'>Enter your query here</h2>
        <textarea className='txt' onChange={this.findSentiment} />
        <p>Analysis Score: {this.state.sentimentScore}</p>
        <p>General State: {this.state.generalSentiment}</p>
        <label></label>
        
<a href='/' >Go Back &nbsp; </a>
      </div>
    )
  }

}



export default Search;
