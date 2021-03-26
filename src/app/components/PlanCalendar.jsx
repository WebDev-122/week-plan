import React, { useState, useCallback, useMemo, useEffect, useRef } from "react";
import FullCalendar, { formatDate } from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";

import './PlanView.scss';
import PlanModal from "./PlanModal";

const PlanCalendar = ({calView, calDate, planData}) => {
  const [open, setOpen] = useState(false);
  const [showEvents, setShowEvents] = useState([]);
  const calendarRef = useRef(null);

  const selectEvent = useCallback((event) => {
    let arrEvent = [];
    planData.forEach((plan) => {
      const planStart = plan.start;
      const eventStart = event.el.fcSeg.eventRange.range.start;

      if( planStart.getFullYear() === eventStart.getFullYear() &&
          planStart.getMonth() === eventStart.getMonth() &&
          planStart.getDate() === eventStart.getDate() &&
          (!event.el.fcSeg.start ||
          (planStart.getHours() > 12 ? planStart.getHours() - 12 : planStart.getHours()) === parseInt(event.el.innerText.split(':')[0])))
        arrEvent.push(plan);
    })
    setShowEvents(arrEvent);
    setOpen(true);
  }, [planData]);

  const renderEventContent = useCallback((eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }, []);

  useEffect(() => {
    const view = calView === 'timeGridWorkWeek' ? 'timeGridWeek' : calView;
    calendarRef.current.getApi().changeView(view, calDate);
  }, [calView, calDate]);

  const  visibleWeekEnds = useMemo(() => {
    return calView === 'timeGridWeek' ? true : false;
  }, [calView]);

  return (
    <React.Fragment>
      <FullCalendar
        locale='en'
        plugins={[ timeGridPlugin, interactionPlugin ]}
        initialView='timeGridWeek'
        events={planData}
        headerToolbar={false}
        weekends={visibleWeekEnds}
        slotEventOverlap={false}
        eventClick={selectEvent}
        eventContent={renderEventContent}
        expandRows={true}
        contentHeight={2600}
        ref={calendarRef}
      />
      <PlanModal 
        open={open}
        setOpen={setOpen}
        events={showEvents}
      />
    </React.Fragment>
  );
}

export default PlanCalendar;