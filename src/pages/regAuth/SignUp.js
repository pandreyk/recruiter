import React from 'react'
import './auth.css'
import { usersAPI } from '../../api/api'

class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      login: '',
      password: '',
      email: '',
    }
  }
  
  handleChange = (event) => {
    const input = event.target
    const value = input.type === 'checkbox' ? input.checked : input.value
    this.setState({ [input.name]: value })
  }
  
  handleFormSubmit = () => {
    const { login, password, email } = this.state

    usersAPI.signUp(login, password, email)
    .then(data => {
      console.log(data.status)
      if (data == 'Вы успешно зарегестрировались!'){
        alert(data)
        this.props.history.replace('/login')
      } else {
        this.setState({ login: '', password: '', email: '' })
        alert(data)
      }
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
        <div className='auth shadow nav'>
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
              name="email" 
              placeholder='email (необязательно)' 
              type="mail" 
              value={this.state.email} 
              onChange={this.handleChange}
            /> <br/>
          </label>
          <button 
            type="submit" 
            onClick={this.handleFormSubmit}
            className='authButton'
          > Зарегистрироваться 
          </button>

          <label>
            <div 
              onClick={()=> this.props.history.replace('/login')} 
              className='authLink'
            > Войти
            </div>
          </label>
        </div>
    )
  }
}

export default SignUp