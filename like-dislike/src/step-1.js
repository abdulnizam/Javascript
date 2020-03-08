import cx from 'classnames';
import React, { Component } from 'react';

export default class LikeDislike extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likeFlag: false,
      totalLike: 100,
    }

    this.onLikeClick = this.onLikeClick.bind(this);

  }

  onLikeClick() {
    this.setState({
        likeFlag: !this.state.likeFlag
      });
  }


  render() {
    const classLikeButton = cx({
      "like-button": true,
      "liked": this.state.likeFlag
    });


    return (
      <div>
        <h2>Like/Dislike</h2>
        <style>
          {`
            .like-button {
              font-size: 1rem;
              padding: 5px 10px;
              color: #585858
            }

            .dislike-button {
              font-size: 1rem;
              padding: 5px 10px;
              color: #585858;
              margin-left: 20px;
            }

            .liked, .disliked {
              font-weight: bold;
              color: #1565c0;
            }

            `}
        </style>
        <span className={classLikeButton}
        onClick={this.onLikeClick}>
          Like |
          <span>
            {this.state.likeFlag ? this.state.totalLike+1 : this.state.totalLike}
          </span>
        </span>
      
      </div>  
    );
  }

}
