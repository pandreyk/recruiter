import React from 'react';
import './saving.css'
import { usersAPI } from '../../api/api';
import BookmarkBorder from '@material-ui/icons/BookmarkBorder';
import Bookmark from '@material-ui/icons/Bookmark';
import { connect } from 'react-redux';
import { actionCandidates } from '../../store/candidates/actions'

class Saving extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            saved: this.props.saved,
        }
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps.saved != this.props.saved)
            this.setState({saved: this.props.saved})
    }

    setSave = () =>  {
        const { dataCandidates, id_candidate, actionCandidates } = this.props
        const { saved } = this.state

        var index = dataCandidates.findIndex(x => x.id_candidate == this.props.id_candidate)
        var buf = dataCandidates.slice()

        usersAPI.setSave(id_candidate, saved)
        .then((data) => {
            this.setState({ saved: data })
            buf[index].saved = data
            actionCandidates(buf)

            index = null
            buf = null
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div onClick={this.setSave} className='bookmark'>
                {this.state.saved == '1' ? <Bookmark fontSize='inherit'/> : <BookmarkBorder fontSize='inherit'/>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dataCandidates: state.candidates.dataCandidates
    }
}

const mapDispatchToProps = {
    actionCandidates
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Saving)