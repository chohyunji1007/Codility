import cx from 'classnames';
import { Component, useState } from 'react';

export default class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likesCount: 100,
            isLiked: false
        };
        this.toggleCount = this.toggleCount.bind(this);
    }

    toggleCount() {
        const newLikesCount = this.state.likesCount === 100 ? 101 : 100;
        const newIsLiked = !this.state.isLiked;
        this.setState({ likesCount: newLikesCount, isLiked: newIsLiked });
    }

    render() {
        const { likesCount, isLiked } = this.state;
        const buttonClass = isLiked ? 'like-button liked' : 'like-button';
        
        return (
            <>
                <div>
                    <h2>Like Button</h2>
                    <button className={buttonClass} onClick={this.toggleCount}>
                        Like | <div className="likes-counter">{likesCount}</div>
                    </button>
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color: #585858;
                    }
                    .liked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
            </>
        );
    }
}