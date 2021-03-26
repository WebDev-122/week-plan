import React, { useMemo, useRef } from 'react';
import { DropdownList, DateTimePicker } from 'react-widgets';
import moment from 'moment';
import momentLocalizer from "react-widgets-moment";

import {staffs} from '../db/plans';
import './PlanFilter.scss';

moment.locale("en");
momentLocalizer();

const PlanFilter = ({
  handleCalendarView,
  handleCalendarDate,
  handleStaff,
  slideSideNav
}) => {
  const calViews = useRef(['day', 'work week', 'week']);
  const staffNames = useMemo(() => {
    let results = [];
    staffs.forEach(staff => results.push(staff.name));
    return results; 
  }, []);

  return (
    <div className="plan-filter">
      <div className="toggle-nav">
        <span 
          className="toggle-nav-slide"
          onClick={slideSideNav}
        >&#9776;</span>
      </div>
      <div className="flex-center">
        <button className="btn-appoint">Create Appointment</button>
      </div>
      <div className="flex-center plan-filter-option">
        <div className="plan-filter-option-item">
          <DropdownList
            data={staffNames}
            defaultValue={staffNames[0]}
            onChange={value => {handleStaff(staffs[staffNames.indexOf(value)].id)}}
          />
        </div>
        <div className="plan-filter-option-item">
          <DateTimePicker
            format='MMM DD, YYYY'
            defaultValue={new Date()}
            time={false}
            onChange={value => handleCalendarDate(value)}
          />
        </div>
        <div className="plan-filter-option-item">
          <DropdownList
            data={calViews.current}
            defaultValue={calViews.current[1]}  //init 'work week'
            onChange={value => handleCalendarView(value)}
          />
        </div>
      </div>
    </div>
  );
}

export default PlanFilter;