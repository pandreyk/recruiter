import React from 'react'
import './App.css'
import { HashRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Header, ModalContainer, PrivateRoute, Search } from './components'
import CandidatesContainer from './pages/candidates/candidatesContainer'
import LogIn from './pages/regAuth/LogIn'
import SignUp from './pages/regAuth/SignUp'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers'

export const history = createBrowserHistory()
const store = createStore(rootReducer)

class App extends React.Component {
  componentDidMount(){
    if (localStorage.getItem('rememberMe') == 'false'){
      localStorage.setItem('id_user', 'null')
    }   
  }

  render() {
    const url = ``
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header/>
          <div className='container'>
            <div className='nav-content-filter'>
              <nav className='nav shadow'>
                <Link to={`${url}/candidates`}>Кандидаты</Link> <br/>
                <Link to={`${url}/saved`}>Сохранненые</Link> <br/>
                <Link to={`${url}/deleted`}>Удаленные</Link> <br/>
              </nav>
              <div className='content'>
                <Switch>
                  <PrivateRoute path={`${url}/candidates`} component={CandidatesContainer} />
                  <PrivateRoute path={`${url}/saved`} component={CandidatesContainer} />
                  <PrivateRoute path={`${url}/deleted`} component={CandidatesContainer} />
                  <Route path={`${url}/login`} component={LogIn} />
                  <Route path={`${url}/signup`} component={SignUp} />

                  <Redirect exact from='*' to='/candidates' />                  
                </Switch>
              </div>
              <div className='nav shadow'>
                <Search />
              </div>
            </div>
          </div>          
          <ModalContainer />
        </Router>
      </Provider>
    )
  }
}

export default App
