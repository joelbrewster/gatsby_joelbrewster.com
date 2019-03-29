/*jshint esversion: 6 */

import React from 'react';

class Header extends React.Component {
    componentDidMount () {
        setTimeout(function () {
            var profilelines = document.querySelector('.profile-image-lines');
            profilelines.classList.add('fadeout');

            var profilesolid = document.querySelector('.profile-image-solid');
            profilesolid.classList.add('fadein');
        }, 1000);
    }
    render () {
      return (
        <div className="profile-container" >
        <img className="profile-image profile-image-lines" src="../img/profile-lines.svg" alt="" />
        <img className="profile-image profile-image-solid" src="../img/profile-solid.svg" alt="" />
    </div>
      )
    }
  }
  
  export default Header
