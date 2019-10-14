import React from 'react';
import Creatable from 'react-select/creatable';
import { usersAPI } from '../../api/api';
import './tags.css'
import { connect } from 'react-redux';
import { actionCandidates } from '../../store/candidates/actions'
import { actionTags, actionSelectedTags } from '../../store/options/actions'

class Tags extends React.Component {
    handleChange = selectedTags => {
        const { actionSelectedTags, id_candidate, dataCandidates, actionCandidates } = this.props

        var index = dataCandidates.findIndex(x => x.id_candidate == id_candidate)
        var buf = dataCandidates.slice()

        if (selectedTags == null || selectedTags.length == 0){
            usersAPI.setTags(id_candidate, 1)
            .then(() => {
                actionSelectedTags([{value: '1', label: 'не_выбрано'}])
                buf[index].id_tags =  '1'
                buf[index].tags = 'не_выбрано'
                actionCandidates(buf) 
            })
            .catch(err => console.log(err))
        } else{
            if (selectedTags[0].value == 1)
                selectedTags.shift()
            actionSelectedTags(selectedTags)
    
            var arrValue = []
            var arrLabel = []
            selectedTags.map(item => { 
                arrValue.push(item.value)
                arrLabel.push(item.label) 
            })
    
            usersAPI.setTags(id_candidate, arrValue)
            .then(() => {
                buf[index].id_tags =  arrValue.join(', ')
                buf[index].tags =  arrLabel.join(' ')
                actionCandidates(buf) 
            })
            .catch(err => console.log(err))
        } 
    }

    handleCreateOption = createOption => {
        const { actionSelectedTags, actionCandidates, actionTags, id_candidate, dataCandidates, selectedTags, tags } = this.props
        var createOption = '#' + createOption

        usersAPI.addTags(createOption, id_candidate)
        .then(data => { 
            actionTags(data.tags)
            
            usersAPI.setTags(id_candidate, data.selectedTags.map(x => x.value))
            .then(() => {
                actionSelectedTags(data.selectedTags)

                var index = dataCandidates.findIndex(x => x.id_candidate == id_candidate)
                var buf = dataCandidates.slice()
                buf[index].id_tags = data.selectedTags.map(x => x.value).join(', ')
                buf[index].tags = data.selectedTags.map(x => x.label).join(' ')
                actionCandidates(buf)

                index = null
                buf = null

            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Creatable 
                    value={this.props.selectedTags}
                    options={this.props.tags}
                    onChange={this.handleChange} 
                    onCreateOption={this.handleCreateOption}
                    isMulti
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      item: state.candidates.item, 
      tags: state.options.tags,
      selectedTags: state.options.selectedTags,
      dataCandidates: state.candidates.dataCandidates
    }
}
  
const mapDispatchToProps = {
    actionCandidates,
    actionTags,
    actionSelectedTags
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Tags)







// var optionsWithNew = []
// selectedTags.map(item => { optionsWithNew.push(item) })
// if(optionsWithNew[0].value == 1)
//     optionsWithNew.shift()
// optionsWithNew.push({ value: dataID, label: createOption })