import React from 'react';
import './index.css';
import news from '../Newest/news.jpg'
function Card(props) {
    return (
        <div className='card-container'>
                      
                        <img src={news} alt="" srcset=""className="img" />
                      
                      <div className="banner">Banner</div>
        </div>
    );
}

export default Card;