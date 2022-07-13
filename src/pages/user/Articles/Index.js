import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Newest from './Newest/Index';
import './Index.css';
import Card from './Card/index';
function articlesPanel(props) {
    return (
        <div className='articles-container'>
            <div className="top-news">
                <div className="newest-news">
                    <Newest/>
                </div>
                <div className="trending-news">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
            <div className="news">

            </div>
        </div>
    );
}

export default articlesPanel;