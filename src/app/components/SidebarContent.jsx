import React from 'react';

const SidebarContent = () => {
  return (
    <div className="content">
      <div className="container">
        <label className="title">Participant</label>
        <div className="box-wrapper">
          <input className="search-input" type="text" placeholder="Search"></input>
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="container">
        <label className="title">Staff</label>
        <div className="box-wrapper">
          <input type="checkbox" className="box"></input>
          <label className="box-label">Bairam Frootan</label>
        </div>
        <div className="box-wrapper">
          <input type="checkbox" className="box"></input>
          <label className="box-label">Meng Ru</label>
        </div>
        <div className="box-wrapper">
          <input type="checkbox" className="box"></input>
          <label className="box-label">Pan He</label>
        </div>
        <div className="box-wrapper">
          <input type="checkbox" className="box"></input>
          <label className="box-label">Roelof Bekkenenks</label>
        </div>
        <div className="box-wrapper">
          <input type="checkbox" className="box"></input>
          <label className="box-label">Slavcho Karbashewski</label>
        </div>
        <div className="box-wrapper">
          <input type="checkbox" className="box"></input>
          <label className="box-label">Yvanne Thompson</label>
        </div>
      </div>
      <div className="container">
        <label className="title">Activity</label>
        <div className="box-wrapper">
          <input type="checkbox" className="box"></input>
          <label className="box-label">Duo Training</label>
        </div>
        <div className="box-wrapper">
          <input type="checkbox" className="box"></input>
          <label className="box-label">Personal Training</label>
        </div>
        <div className="box-wrapper">
          <input type="checkbox" className="box"></input>
          <label className="box-label">Solo Training</label>
        </div>
        <div className="box-wrapper">
          <input type="checkbox" className="box"></input>
          <label className="box-label">Trial Lesson</label>
        </div>
      </div>
    </div>
  );
}

export default SidebarContent;