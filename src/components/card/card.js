import React from 'react';
import './card.css';
import BookmarkBorder from '@material-ui/icons/BookmarkBorder';
import Bookmark from '@material-ui/icons/Bookmark';
import StarRounded from '@material-ui/icons/StarRounded';

const Card = ({ item, wholeRating, onClick }) => {
    return(
      <div onClick={onClick} className='containerCard'>
        <div className='icon'>
          {item.saved == '1' ? <Bookmark /> : <BookmarkBorder />}
        </div>
        <div className='name'>      
          <p>{item.fio}</p>
          <p className='vacancy'>{item.vacancy}</p>
        </div>
        <div className='info'>
          <div>
            <p>Статус</p>
            <p>Тэги</p>
          </div>
          <div className='line'></div>
          <div>
            <p>{item.status}</p>
            <p className='tags'>{item.tags}</p>
          </div>
        </div>
        <div className='star'>
          <p>{parseFloat(item.rating).toFixed(1)}</p>
          <StarRounded />
        </div>
      </div>
    );
}

export default Card