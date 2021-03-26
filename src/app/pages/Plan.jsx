import React, { useCallback, useState } from 'react';

import Sidebar from '../components/Sidebar';
import SidebarContent from '../components/SidebarContent';
import PlanView from '../components/PlanView';

const Plan = () => {
  const [open, setOpen] = useState(false);
  const slideSideNav = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <div className="plan-container">
      <Sidebar 
        open={open} 
        width="17vw" 
        height="100vh"
      >
        <SidebarContent />
      </Sidebar>
      <PlanView 
        open={open}
        width="17vw"
        slideSideNav={slideSideNav}
      />
    </div>
  );
}

export default Plan;