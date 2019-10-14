import React from 'react';
import { connect } from 'react-redux'
import Rating from './rating'
import { usersAPI } from '../../../../api/api';
import { actionCandidates, actionRatings } from '../../../../store/candidates/actions'

class RatingContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userSelectedRating: 0
    }
}

  componentDidMount(){
    this.props.ratings.map(item => {
      if (item.id_user == localStorage.getItem('id_user'))
        this.setState({ userSelectedRating: Number(item.rating) })
    })    
  }

  handleChange = ( rating ) => {
    const {  dataCandidates, id_user, item, actionRatings, actionCandidates } = this.props

    usersAPI.setRating(id_user, item.id_candidate, rating)
    .then(data => {
      if (data.status == true){
        this.setState({ userSelectedRating: rating })

        var index = dataCandidates.findIndex(x => x.id_candidate == item.id_candidate)
        var buf = dataCandidates.slice()
        buf[index].rating = data.wholeRating
        actionCandidates(buf)

        actionRatings(data.ratings)
      } else {
        alert('Произошла ошибка')
      }
    })
    .catch(err => console.log(err))
  }

  deleteRating = (id_rating) => {
    const { item, actionRatings, dataCandidates, actionCandidates } = this.props

    usersAPI.deleteRating(id_rating, item.id_candidate)
    .then(data => {
      this.setState({ userSelectedRating: 0 })

      var index = dataCandidates.findIndex(x => x.id_candidate == item.id_candidate)
      var buf = dataCandidates.slice()
      buf[index].rating = data.wholeRating
      actionCandidates(buf)
      
      actionRatings(data.ratings) 
    })
    .catch(err => console.log(err))
  }

  render() {
    const { ratings } = this.props
    return (
      <Rating 
        ratings={ratings}
        userSelectedRatings={this.state.userSelectedRating}
        handleChange={this.handleChange}
        deleteRating={this.deleteRating}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    item: state.candidates.item,
    dataCandidates: state.candidates.dataCandidates,
    id_user: state.auth.id_user,

    ratings: state.candidates.ratings
  }
}

const mapDispatchToProps = {
    actionCandidates,
    actionRatings,
}

export default connect(mapStateToProps, mapDispatchToProps)(RatingContainer)















// handleChange = ( rating ) => {
//   const {  dataCandidates, id_user, item,
//     actionWholeRating,  
//     actionUserSelectedRatings, 
//     actionUserRatings, 
//     userRatings } = this.props

//   usersAPI.setRating(id_user, item.id_candidate, rating)
//   .then(data => {
//     console.log(data)
//     if (data.status == true){
//       var index = dataCandidates.findIndex(x => x.id_candidate == item.id_candidate)
//       var buf = dataCandidates.slice()

//       buf[index].rating = data.rating
//       actionCandidates(buf)
//       actionWholeRating(data.rating)

//       var index = userRatings.findIndex(x => x.id_candidate == item.id_candidate)
//       var buf = userRatings.slice()

//       if (index == -1){
//         buf.push({
//           'id_candidate': item.id_candidate,
//           'rating': rating
//         })
//       } else {
//         buf[index].rating = rating
//       }

//       console.log('pepek', buf)
//       console.log('kekek', data.userRatings)

//       actionUserRatings(buf)
//       actionUserSelectedRatings(rating)

//       index = null
//       buf = null
//     } else {
//       alert('Произошла ошибка')
//     }
//   })
//   .catch(err => console.log(err))
// }