import React from 'react';
import './styles.css';

const Header = () => (
    <header
        className="header"
    >
       <div
           style={{
               fontSize: '40px',
               fontWeight: 'bold',
               color: '#150C9D',
           }}
       >
           Quiz
       </div>
       <div
           style={{
               fontSize: '40px',
               fontWeight: 'lighter',
               color: '#606060',
           }}
       >
           Mald
       </div>
    </header>
);

export default Header;
