import React from 'react';
import './trash.css'
import { usersAPI } from '../../api/api';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Delete from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { actionCandidates } from '../../store/candidates/actions'
import { history } from '../../App'

class Trash extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            deleted: this.props.deleted,
        }
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps.deleted != this.props.deleted)
            this.setState({deleted: this.props.deleted})
    }

    setDeleted = () =>  {
        if (window.confirm('Вы уверены?')){
            const { dataCandidates, id_candidate, actionCandidates } = this.props
            const { deleted } = this.state

            var index = dataCandidates.findIndex(x => x.id_candidate == id_candidate)
            var buf = dataCandidates.slice()

            usersAPI.setDeleted(id_candidate, deleted)
            .then((data) => {
                this.setState({ deleted: data })
                buf[index].deleted = data
                actionCandidates(buf)
        
                if (data == 1 && window.location.pathname != `/deleted/${id_candidate}`){
                    history.goBack()
                    buf.splice(index, 1)
                }
                else if (data == 0 && window.location.pathname == `/deleted/${id_candidate}`){
                    history.goBack()
                    buf.splice(index, 1)
                }

                index = null
                buf = null
            })
            .catch(err => console.log(err))
        }
    }

    render() {
        return (
            <div onClick={this.setDeleted} className='trash'>
                {this.state.deleted == '1' ? <Delete fontSize='inherit'/> : <DeleteOutline fontSize='inherit'/>}
            </div>       
        )
    }
}

const mapStateToProps = state => {
    return {
        dataCandidates: state.candidates.dataCandidates,
        item: state.candidates.item,
    }
}

const mapDispatchToProps = {
    actionCandidates
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Trash)