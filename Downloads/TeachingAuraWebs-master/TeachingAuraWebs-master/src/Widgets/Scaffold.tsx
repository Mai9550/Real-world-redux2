import React from 'react';
import HeadSub from '../components/HeadSub';
import SideMenu from '../components/Side_Menu';

const Scaffold = ({children}) => {
  return (
    <div className="content_full_container box_ladto">
      <SideMenu/>
      <div className="content_box content_box22">
        <header className="heder_nav">
          <div className="box_vc_nav_right" />
          <div className="box_vc_nav_left">
            <HeadSub />
          </div>
        </header>
        {children}
      </div>
    </div>
  );
};

export default Scaffold;