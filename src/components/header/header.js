import React from 'react'
import './header.css'
import logo from './a.png'
import { connect } from 'react-redux'
import { actionUser } from '../../store/auth/actions'
import { Route } from 'react-router-dom'

class Header extends React.Component {
    logout = (history) => {
        localStorage.setItem('id_user', 'null');
        this.props.actionUser('null')
        history.replace('/login')
    }

    render() {
        const { id_user } = this.props
        return(
            <header className='header'>
                <div className='logo'>
                    <img src={logo}></img>
                    <a href='https://mantybylak.000webhostapp.com/' target='_blank'>Добавить кандидата</a>
                </div>
                <div className='logInOut'>
                    <Route render={ ({ history }) => (
                        id_user != 'null' ? 
                        <div onClick={() => this.logout(history) }>
                            Выход
                        </div> : 
                        <label />
                    )} />
                </div>
            </header>
        )
    }
}

const mapStateToProps = state => {
    return {
        id_user: state.auth.id_user,
    }
}

const mapDispatchToProps = {
    actionUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)