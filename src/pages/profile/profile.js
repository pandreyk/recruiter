import React from 'react';
import './profile.css'
import StarRounded from '@material-ui/icons/StarRounded';
import { Saving, Trash, Status, Tags, TabsProfile } from '../../components'

const Profile = ({ data, onClick }) => {
  return(
    <div onClick={onClick} className='profileContainer'>
      <div className='profileHeader'>
        <div className='profileVacancy'>
          {data.vacancy}
        </div>
        <Trash 
          id_candidate={data.id_candidate}
          deleted={data.deleted}
        />
      </div>
      <div className='profileFIO'>
        <Saving 
            id_candidate={data.id_candidate}
            saved={data.saved}
          />
        {data.fio}
      </div>
      <div className='profileContent'>
        <div className='profileAbout'>
          <p>Возраcт: {data.age} лет | Опыт: {data.experience} лет</p>   
          <Status id_candidate={data.id_candidate} />
          <Tags id_candidate={data.id_candidate} />
        </div>
        <div className='profileInfo'>  
          <p>{data.email}</p>
          <p>{data.phone}</p>
          <div className='profileRating'>
            Рейтинг: {parseFloat(data.rating).toFixed(1)}
            <div className='starRounded'>
              <StarRounded fontSize='inherit'/>
            </div>
          </div>
          <p><a href={data.resume} target='_blank'>Резюме</a></p>
        </div>
      </div>
      <TabsProfile/>
    </div>
  );
}

export default Profile;