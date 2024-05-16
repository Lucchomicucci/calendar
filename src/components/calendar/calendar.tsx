import React, { useState } from 'react';
import './calendar.css'
import { addMonths, subMonths } from 'date-fns';
import Header from '../header/header';
import DayCell from '../day-cell/day-cell';


const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const nextMonth = () => {
      setCurrentDate(addMonths(currentDate, 1));
    };

    const prevMonth = () => {
      setCurrentDate(subMonths(currentDate, 1));
    };


    return (
        <div className='calendar'>
          <Header currentDate={currentDate} prevMonth={prevMonth} nextMonth={nextMonth} />
          <DayCell currentDate={currentDate}/>
        </div>
    );
};

export default Calendar;
