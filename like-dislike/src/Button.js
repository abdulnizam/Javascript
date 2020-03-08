import cx from 'classnames';
import React, { Component } from 'react';

export default class LikeDislike extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likeFlag: false,
      dislikeFlag: false,
      totalLike: 100,
      totalDislike: 25
    }

    this.onLikeClick = this.onLikeClick.bind(this);
    this.onDisLikeClick = this.onDisLikeClick.bind(this);

  }

  onLikeClick() {
    if(!this.state.dislikeFlag) {
      this.setState({
        likeFlag: !this.state.likeFlag
      });
    }else {
      this.setState({
        likeFlag: true,
        dislikeFlag: false
      });
    }
  }

   onDisLikeClick() {
    if(!this.state.likeFlag) {
      this.setState({
        dislikeFlag: !this.state.dislikeFlag
      });
    }else {
      this.setState({
        likeFlag: false,
        dislikeFlag: true
      });
    }
  }

  render() {
    const classLikeButton = cx({
      "like-button": true,
      "liked": this.state.likeFlag
    });

    const classDisLikeButton = cx({
      "dislike-button": true,
      "disliked": this.state.dislikeFlag
    })

    const random = () => {
      return 123;
    }

    let like = this.state.likeFlag ? this.state.totalLike+1 : this.state.totalLike;
    let dislike = this.state.dislikeFlag ? this.state.totalDislike+1 : this.state.totalDislike;

    return (
      <div>
        {random}
        <h2>Like/Dislike</h2>
        <style>
          {`
            .like-button {
              background-color: #DCDCDC;
              font-size: 1rem;
              padding: 5px 10px;
              color: #585858
            }

            .dislike-button {
              background-color: #DCDCDC;
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
          <span className="dislikes-counter">
            {' '+like}
          </span>
        </span>
        <span className={classDisLikeButton}
        onClick={this.onDisLikeClick}>
          Dislike |
           <span className="dislikes-counter">
            {' '+dislike}
          </span>
        </span>
      </div>
    );
  }

}
