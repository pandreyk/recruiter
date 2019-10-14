import React from 'react';
import Profile from './profile';
import { usersAPI } from '../../api/api'
import { connect } from 'react-redux';
import { actionItem, actionRatings, actionComments } from '../../store/candidates/actions'
import { actionSelectedStatus, actionSelectedTags } from '../../store/options/actions'

class ProfileContainer extends React.Component {
  selectStatus = () => {
    const { item, actionSelectedStatus } = this.props
    actionSelectedStatus({ value: item.id_status, label: item.status })
  }

  selectTags = () => {
    const { item, actionSelectedTags } = this.props
    if(item.id_tags != undefined){
        var selectedTags = []
        for (let i = 0;  i < item.id_tags.split(', ').length; i++){
            selectedTags[i] = {
                value: item.id_tags.split(', ')[i], 
                label: item.tags.split(' ')[i]
            }
        }
        actionSelectedTags(selectedTags)
    }
  }

  getCommetsRatings = () => {
    const { id_candidate, actionRatings, actionComments } = this.props
    usersAPI.getCommetsRatings(id_candidate)
    .then(data => {
      actionRatings(data.ratings)
      actionComments(data.comments)
    })
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.selectStatus()
    this.selectTags()
    this.getCommetsRatings()
  }

  componentDidUpdate = (prevProps) => {
      const { dataCandidates, id_candidate, item, actionItem } = this.props

      if(prevProps.dataCandidates != dataCandidates)
        actionItem(dataCandidates.find(x => x.id_candidate == id_candidate))
      
      if(prevProps.item != item){ 
        this.selectStatus()
        this.selectTags()
      }
  }

  componentWillUnmount() {
    this.props.actionRatings([])
    this.props.actionComments([])
  }

  render() {
    return (  
        <Profile
          onClick={(e) => e.stopPropagation()}
          data={this.props.item}
        />
    );
  }
}

const mapStateToProps = state => {
  return {
    dataCandidates: state.candidates.dataCandidates,
    item: state.candidates.item,
  }
}

const mapDispatchToProps = {
  actionItem,
  actionSelectedStatus,
  actionSelectedTags,
  actionRatings,
  actionComments
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)