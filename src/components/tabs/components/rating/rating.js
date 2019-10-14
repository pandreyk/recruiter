import React from 'react';
import { StarRatings } from '../../../';
import Delete from '@material-ui/icons/Close';
import './rating.css'

const Rating = ({ ratings, userSelectedRatings, handleChange, deleteRating }) => {
    return(
        <div className='ratingContainer'>
        <div className='ratingRow'>
          <div className='ratingTxt'>Ваша оценка:</div>
          <StarRatings
            rating={userSelectedRatings}
            changeRating={handleChange}
            starRatedColor='gold'
            starHoverColor='goldenrod'
          />
        </div>
        <div>
          {
            ratings.map(item => (
              <div className='ratingItem' key={item.login}>
                  <span>
                    Пользователь<label> {item.login} </label>  
                    поставил оценку<label> {item.rating}</label>
                  </span>
                  {
                    localStorage.getItem('id_user') == item.id_user ? 
                    <Delete 
                      onClick={() => deleteRating(item.id_rating)}
                      className='commentDelete'
                    /> : 
                    <label />
                  }
              </div>
            ))
          }
        </div>
      </div>
    );
  }

export default Rating