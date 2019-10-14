import React from 'react';
import { connect } from 'react-redux'
import Comments from './comments'
import { usersAPI } from '../../../../api/api';
import { actionCandidates, actionComments } from '../../../../store/candidates/actions'

class CommentsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputComment: ''
    }
}

  handleChange = ( event ) => {
    this.setState({ inputComment: event.target.value })
  }

  addComment = () => {
    const { item, id_user, actionComments } = this.props
    const { inputComment } = this.state

    if (inputComment != ''){
      usersAPI.addComment(id_user, item.id_candidate, inputComment)
      .then(data => {
        actionComments(data)
        this.setState({ inputComment: '' })
      })
      .catch(err => console.log(err))
    } else {
      alert('Вы не ввели коментарий!')
    }
  }

  deleteComment = (id_comment) => {
    const { item, actionComments } = this.props
    
    usersAPI.deleteComment(id_comment, item.id_candidate)
    .then(data => { actionComments(data) })
    .catch(err => console.log(err))
  }

  render() {
    const { comments } = this.props
    const { inputComment } = this.state
    return (
      <Comments
        inputComment={inputComment}
        comments={comments}
        handleChange={this.handleChange}
        addComment={this.addComment}
        deleteComment={this.deleteComment}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    item: state.candidates.item,
    dataCandidates: state.candidates.dataCandidates,
    id_user: state.auth.id_user,
    comments: state.candidates.comments,
  }
}

const mapDispatchToProps = {
    actionCandidates,
    actionComments,
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)