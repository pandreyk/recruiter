import React from 'react';
import Creatable from 'react-select/creatable';
import { usersAPI } from '../../api/api';
import './status.css'
import { connect } from 'react-redux';
import { actionCandidates } from '../../store/candidates/actions'
import { actionSelectedStatus, actionStatuses } from '../../store/options/actions'

class Status extends React.Component {
    handleChange = selectedStatus => {
        const { actionSelectedStatus, id_candidate, dataCandidates, actionCandidates } = this.props            

        usersAPI.setStatus(id_candidate, selectedStatus.value)
        .then(chek => {
            if (chek == true){
                actionSelectedStatus(selectedStatus)

                var index = dataCandidates.findIndex(x => x.id_candidate == id_candidate)
                var buf = dataCandidates.slice()
                buf[index].id_status =  selectedStatus.value
                buf[index].status =  selectedStatus.label
                actionCandidates(buf)

                index = null
                buf = null
            } else{
                alert('Произошла ошибка')
            }
        })
        .catch(err => console.log(err))
    }

    handleCreateOption = createOption => {
        const { dataCandidates, id_candidate, actionCandidates, actionSelectedStatus, actionStatuses, statuses } = this.props

        usersAPI.addStatus(createOption)
        .then(data => {
            actionStatuses(data)
            var idNewStatus = statuses[statuses.length - 1].value

            usersAPI.setStatus(id_candidate, idNewStatus)
            .then(chek => {
                if (chek == true){
                    actionSelectedStatus({ value: idNewStatus, label: createOption })

                    var index = dataCandidates.findIndex(x => x.id_candidate == id_candidate)
                    var buf = dataCandidates.slice()
                    buf[index].id_status =  idNewStatus
                    buf[index].status =  createOption
                    actionCandidates(buf)

                    index = null
                    buf = null
                } else{
                    alert('Произошла ошибка')
                }
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Creatable 
                    value={this.props.selectedStatus}
                    options={this.props.statuses}
                    onChange={this.handleChange} 
                    onCreateOption={this.handleCreateOption}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      item: state.candidates.item,    
      statuses: state.options.statuses,
      selectedStatus: state.options.selectedStatus,
      dataCandidates: state.candidates.dataCandidates,
    }
}
  
const mapDispatchToProps = {
    actionCandidates,
    actionSelectedStatus,
    actionStatuses
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Status)