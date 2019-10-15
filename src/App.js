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

























// import React from 'react';
// import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
// import { ModalContainer } from 'react-router-modal';
// import './App.css';
// import 'react-router-modal/css/react-router-modal.css';
// import CandidatesContainer from './pages/candidates/candidatesContainer'
// import LogIn from './pages/regAuth/LogIn'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import rootReducer from './store/reducers'
// import PrivateRoute from './components/PrivateRoute'

// export const history = createBrowserHistory();
// const store = createStore(rootReducer)


// const App = () => {
//   const url = ``;
//   return (
//     <Provider store={store}>
//       <BrowserRouter history={history}>
//         <header className='header '>
//           HEADER
//         </header>
//         <div className="container">
//           <div className='nav-content-filter'>
//             <nav className='nav shadow'>
//               <Link to={`${url}/candidates`}>Кандидаты</Link> <br/>
//               <Link to={`${url}/saved`}>Сохранненые</Link> <br/>
//               <Link to={`${url}/deleted`}>Удаленные</Link> <br/>
//               <Link to={`${url}/login`}>LogIn</Link> <br/>
//             </nav>
//             <div className='content'>
//               <Switch>
//                 <Route path={`${url}/candidates`} component={CandidatesContainer} />
//                 <Route path={`${url}/saved`} component={CandidatesContainer} />

//                 <PrivateRoute auth={false} path={`${url}/deleted`} component={CandidatesContainer} />
//                 {/* <Route path={`${url}/deleted`} component={CandidatesContainer} /> */}

//                 <Route path={`${url}/login`} component={LogIn} />

//                 <Redirect exact from='/' to='/login' />
//               </Switch>
//             </div>
//             <div className='filter shadow'>
//               filter
//             </div>
//           </div>
//         </div>
//         <ModalContainer />
//       </BrowserRouter>
//     </Provider>
//   )
// }

// export default App;