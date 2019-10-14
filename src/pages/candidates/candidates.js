import React from 'react';
import './candidates.css';
import { Card, ModalRoute } from '../../components';
import { Link } from 'react-router-dom';
import ProfileContainer from '../profile/profileContainer';

class Candidates extends React.Component {
  ProfileWrapper = ({ match }) => {
    return(
        <ProfileContainer
          id_candidate={match.params.id}
        />
    )
  }

  onClickCard = (item) => {
    this.props.actionItem(item)
  }

  render() {
    const { data, match } = this.props;
    return (  
      <div>
        {
          data.map(item => (
            <Link 
              className='link' 
              key={item.id_candidate} 
              to={`${match.url}/${item.id_candidate}`}
            >
              <Card 
                item={item}
                onClick={() => this.onClickCard(item)} 
              />
            </Link> 
          ))
        }
        <ModalRoute 
          component={this.ProfileWrapper}           
          path={`${match.url}/:id`}
          parentPath={match.url}
        />
      </div>
    )
  }
}

export default Candidates;