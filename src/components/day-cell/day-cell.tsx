import { addDays, endOfMonth, endOfWeek, format, isSameDay, startOfMonth, startOfWeek } from 'date-fns';
import './day-cell.css'

interface IProps {
  currentDate: Date;
}

const AVAILABLE_TOUR_DAYS = [
  [new Date('2024-05-07'), 'https://example.com/#1'],
  [new Date('2024-05-08'), 'https://example.com/#2'],
];

const DayCell = ({ currentDate }: IProps) => {
  const dayHasTour = (day: Date): string | null => {
    for (let i = 0; i < AVAILABLE_TOUR_DAYS.length; i++) {
      if (isSameDay(day, AVAILABLE_TOUR_DAYS[i][0])) {
        return AVAILABLE_TOUR_DAYS[i][1] as string;
      }
    }
    return null;
};
  const renderCells = () => {
    const handleRedirect = (url: string) => {
      window.location.href = url;
    };
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            const tourUrl = dayHasTour(day);

            days.push(
                <div
                    key={day.toString()}
                    className={isSameDay(day, new Date()) ? 'calendar-day-current' : (tourUrl ? 'calendar-day-available' : 'calendar-day')}
                    onClick={() => tourUrl && handleRedirect(tourUrl)}
                >
                    {format(day, 'd')}
                </div>
            );
            day = addDays(day, 1);
        }
        rows.push(<div key={day.toString()} className='daycell'>{days}</div>);
        days = [];
    }

    return rows;
};

const renderDays = () => {
  const days = [];

  const startDate = startOfWeek(startOfMonth(currentDate));

  for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className='day'>{format(addDays(startDate, i), 'iii')}</div>
      );
  }

  return days;
};

  return (
    <div>
      <div className='day-container'>
        {renderDays()}
      </div>
      {renderCells()}
    </div>
  )
}

export default DayCell