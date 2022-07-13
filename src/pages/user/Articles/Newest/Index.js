import React from 'react';
import './Index.css';
import news from './news.jpg'
function Newest(props) {
    return (
        <div className='newest-container card'>
                <img className="card-img-top" src={news} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>        
        </div>
    );
}

export default Newest;