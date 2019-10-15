import React from 'react'
import { usersAPI } from '../../api/api'
import Candidates from './candidates'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCandidates, actionItem, actionBufDataForSearch } from '../../store/candidates/actions'
import { actionStatuses,  actionTags } from '../../store/options/actions'

class CandidatesContainer extends React.Component {
  getStatuses = () => {
    usersAPI.getStatuses()
    .then(data => { this.props.actionStatuses(data) })
    .catch(err => console.log(err))
  }

  getTags = () => {
    usersAPI.getTags()
    .then(data => { this.props.actionTags(data) })
    .catch(err => console.log(err))
  }

  getData = () => {
    usersAPI.getData()
    .then(data => { 
      this.props.actionCandidates(data) 
      this.props.actionBufDataForSearch(data)
    })
    .catch(err => console.log(err))
  }

  getSaved = () => {
    usersAPI.getSaved()
    .then(data => { 
      this.props.actionCandidates(data) 
      this.props.actionBufDataForSearch(data)
    })
    .catch(err => console.log(err))
  }

  getDeleted = () => {
    usersAPI.getDeleted()
    .then(data => { 
      this.props.actionCandidates(data) 
      this.props.actionBufDataForSearch(data)
    })
    .catch(err => console.log(err))
  }

  selectData = () => {
    switch(this.props.match.path){
      case '/candidates': {
        this.getData()
        break
      }
      case '/saved': {
        this.getSaved()
        break
      }
      case '/deleted': {
        this.getDeleted()
        break
      }
    }    
  }

  componentDidMount() {
    this.selectData()
    this.getStatuses()
    this.getTags()
  }

  componentDidUpdate = (prevProps) => {
    if(prevProps.match.path != this.props.match.path)
      this.selectData()
  }

  render() {
    const id_user = localStorage.getItem('id_user')
    console.log(id_user)
    return (
      <div>
        {
          id_user == 'null' || id_user == null ? 
          <Redirect to='/login' />
          :
          <Candidates 
            match={this.props.match} 
            data={this.props.dataCandidates}
            actionItem={this.props.actionItem}
          />          
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dataCandidates: state.candidates.dataCandidates,
  }
}

const mapDispatchToProps = {
  actionCandidates,
  actionBufDataForSearch,
  actionItem,
  actionStatuses,
  actionTags,
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidatesContainer)