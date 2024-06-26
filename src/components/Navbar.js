import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">{props.about}</Link>
        </li>
      </ul>
    <div className="d-flex">
      <div className="bg-primary round mx-2" onClick = {() => props.togglemode('primary')} style={{height : '30px',width: '30px'}}></div>
      <div className="bg-danger round mx-2" onClick = {() => props.togglemode('danger')} style={{height : '30px',width: '30px'}}></div>
      <div className="bg-success round mx-2" onClick = {() => props.togglemode('success')} style={{height : '30px',width: '30px'}}></div>
      <div className="bg-warning round mx-2" onClick = {() => props.togglemode('warning')} style={{height : '30px',width: '30px'}}></div>
    </div>
       
        <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
      <input className="form-check-input"  onClick = {() => props.togglemode(null)} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable darkmode</label>
        </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propType = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: 'set text here',
    about: ' mention about'
}