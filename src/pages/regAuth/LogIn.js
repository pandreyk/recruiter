import React from 'react'
import './auth.css'
import { usersAPI } from '../../api/api'
import { connect } from 'react-redux'
import { actionUser } from '../../store/auth/actions'

class LogIn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      login: '',
      password: '',
      rememberMe: false
    }
  }

  componentDidMount(){
    if (localStorage.getItem('rememberMe') == 'false')
      this.props.actionUser('null')     
  }
  
  handleChange = (event) => {
    const input = event.target
    const value = input.type === 'checkbox' ? input.checked : input.value
    this.setState({ [input.name]: value })
  }
  
  handleFormSubmit = () => {
    const { login, rememberMe, password } = this.state

    usersAPI.logIn(login, password)
    .then(data => {
      console.log('TRATATATAAA', data)
      if (data.status == 'SUCCESS'){
        localStorage.setItem('id_user', data.id_user)
        localStorage.setItem('rememberMe', rememberMe ? true : false)
        this.props.actionUser(data.id_user)
        this.props.history.replace('/candidates')
      } else {
        localStorage.setItem('id_user', 'null')
        localStorage.setItem('rememberMe', false)
        this.props.actionUser('null')
        alert('Неверные логин или пароль')
      }
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      //<form onSubmit={this.handleFormSubmit}>
        <div className='auth shadow nav' id='q'>
          <label>
            <input 
              name="login" 
              placeholder='Логин'
              type='text'
              value={this.state.login} 
              onChange={this.handleChange}
            /> <br/>
          </label>
          <label>
            <input 
              name="password"
              placeholder='Пароль' 
              type="password" 
              value={this.state.password} 
              onChange={this.handleChange}
            /> <br/>
          </label>
          <label>
            <input 
              name="rememberMe" 
              type="checkbox" 
              checked={this.state.rememberMe} 
              onChange={this.handleChange}
            /> Запомнить меня <br/>
          </label>
          <button 
            type="submit" 
            onClick={this.handleFormSubmit}
          > Войти 
          </button>

          <label>
            <div 
              onClick={()=> this.props.history.replace('/signup')} 
              className='authLink'
            > Регистрация
            </div>
          </label>
        </div>
      //</form>
    )
  }
}

const mapDispatchToProps = {
  actionUser
}

export default connect(null, mapDispatchToProps)(LogIn)