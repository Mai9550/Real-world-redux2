import React,{Component} from "react";
import { connect } from "react-redux";
import {formatTweet} from '../utils/helpers';

class Tweet extends Component {
  render(){
    const {tweet} = this.props;
    const {
      name, avatar, timestamp, text, hasLiked, likes, replies, parent
    } = tweet

    return(
    <div className="tweet">
      <img 
       src={avatar}
       
       className='avatar'/>
    </div>
    
    
  
    )
  }
}

function mapStateToProps ({authedUser, users, tweets}, { id }) {
  const tweet = tweets[id];
  const parentTweet= tweet?tweets[tweet.replyingTo]:null;
  return {
    authedUser,
    tweet: tweet?formatTweet(tweet,users[tweet.author], authedUser,parentTweet):null
  };
}


export default connect(mapStateToProps)(Tweet);