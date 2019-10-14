import React from 'react'
import './search.css'
import { connect } from 'react-redux'
import { actionCandidates } from '../../store/candidates/actions'

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            search: ''
        }
    }

    searchFilter = search => {
        const { actionCandidates, bufDataForSearch } = this.props

        this.setState({ search: search.target.value })
        const newData = bufDataForSearch.filter(item => {      
            const itemData = `${item.fio.toUpperCase()}   
                              ${item.tags.toUpperCase()} 
                              ${item.status.toUpperCase()}
                              ${item.rating.toUpperCase()}`;
            const textData = search.target.value.toUpperCase()
            return itemData.indexOf(textData) > -1;   
        });
        actionCandidates(newData)
    }

    render() {
        const { search } = this.state
        return(
            <div>
                <input 
                    type='text' 
                    value={search}
                    onChange={this.searchFilter}
                    placeholder='Поиск...'
                    className='searchBar'
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        bufDataForSearch: state.candidates.bufDataForSearch,
    }
}

const mapDispatchToProps = {
    actionCandidates
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)