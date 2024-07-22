import React from 'react';

function Footer({changeTheme}){


    return (
      <div className="footer">
        <div className='theme' onClick={()=>{changeTheme(1)}}></div>
        <div className='theme' onClick={()=>{changeTheme(2)}}></div>
        <div className='theme' onClick={()=>{changeTheme(3)}}></div>
      </div>
    );
  };

export default Footer;
