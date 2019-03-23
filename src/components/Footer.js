import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer className="page-footer black">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">All about Softnet</h5>
              <p className="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>
    
    
            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Settings</h5>
              <ul>
                <li><a className="white-text" href="#!">Link 1</a></li>
                <li><a className="white-text" href="#!">Link 2</a></li>
                <li><a className="white-text" href="#!">Link 3</a></li>
                <li><a className="white-text" href="#!">Link 4</a></li>
              </ul>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Connect</h5>
              <ul>
                <li><a className="white-text" href="#!"><i class="material-icons">email</i></a></li>
                <li><a className="white-text" href="#!"><i class="material-icons">email</i></a></li>
                <li><a className="white-text" href="#!"><i class="material-icons">email</i></a></li>
                <li><a className="white-text" href="#!"><i class="material-icons">email</i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="left container">
          <h6>Made by <a className="blue-text text-darken-3" href="/"> Abass Makinde</a></h6>
          </div>
        </div>
      </footer>
    
    )
  }
}