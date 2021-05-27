import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default ({ icon, style }: { icon: string; style?: {} }) => (
  <span className="icon" style={style ? style : {}}>
    <i className={'fas fa-' + icon}></i>
  </span>
);
