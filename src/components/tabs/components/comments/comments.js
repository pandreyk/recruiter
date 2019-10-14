import React from 'react';
import Delete from '@material-ui/icons/Close';
import './comments.css'

const Comments = ({ comments, inputComment, handleChange, addComment, deleteComment }) => {
  return(
    <div className='commentsContainer'>
      <div className='commetsSubmit'>
          <textarea 
            className='comments'
            value={inputComment} 
            onChange={handleChange}
            placeholder='Введите коментарий...'
            rows="4" 
          />
          <div className='commentButton' onClick={addComment}>Отправить</div>
        </div>
      <div>
        {
          comments.map(item => (
            <div key={item.id_comment}>
              <div className='commentsLoginDelete'>
                <label>{item.login}:</label>
                {
                  localStorage.getItem('id_user') == item.id_user ? 
                  <Delete 
                    onClick={() => deleteComment(item.id_comment)}
                    className='commentDelete'
                  /> : 
                  <label />
                }
              </div>
              <div className='commentsValue'>
                <p>{item.comment}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Comments