import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css'

import Header from './components/Header'

import Signup from './Pages/signinSignup/Signup'
import Signin from './Pages/signinSignup/Signin'
import ProfilePage from './Pages/userProfile/Profile'
import EditProfile from './Pages/userProfile/EditProfile'

import Home from './Pages/home/Home'

import ProfList from './Pages/prof/ProfList'
import AddProf from './Pages/prof/AddProf'
import EditProfDetail from './Pages/prof/EditProfDetail'

import AddAlumini from './Pages/prof/AddAlumini'
import AluminiList from './Pages/alumini/AluminiList'
import AluminiProfile from './Pages/alumini/AluminiProfile'
import EditAluminiDetail from './Pages/alumini/EditAluminiDetail'

import Material from './Pages/material/Material'
import AddMaterial from './Pages/material/AddMaterial'

import UserList from './components/UserList'
import SingleUserProfile from './components/SingleUserProfile'
import Following from './Pages/following/Following'

const App = () => {
  return (
    <Router>
      <Header />
      <Route path='/profDetail/edit/:id' component={EditProfDetail} />

      <Route path='/alumini/edit/:id' component={EditAluminiDetail} />
      <Route exact path='/profDetail/:department' component={ProfList} />
      <Route path='/admin/addProf' component={AddProf} />
      <Route path='/admin/addAlumini' component={AddAlumini} />
      <Route path='/material/upload' component={AddMaterial} />
      <Route exact path='/material' component={Material} />
      <Route exact path='/profile' component={ProfilePage} />
      <Route path='/signin' component={Signin} />
      <Route path='/signUp' component={Signup} />
      <Route exact path='/alumini/:department' component={AluminiList} />
      <Route exact path='/alumini/profile/:id' component={AluminiProfile} />

      <Route exact path='/profile/edit' component={EditProfile} />

      <Route exact path='/' component={Home}></Route>
      <Route exact path='/users' component={UserList} />
      <Route exact path='/user/:id' component={SingleUserProfile} />

      <Route path='/following' component={Following} />
    </Router>
  )
}

export default App
