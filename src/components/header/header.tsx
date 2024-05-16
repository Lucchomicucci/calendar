import { format } from "date-fns"
import './header.css'
import { Button } from "antd";
interface IProps {
  currentDate: Date,
  prevMonth: () => void;
  nextMonth: () => void;
}
const Header = ({ currentDate, prevMonth, nextMonth }: IProps) => {
  return (
    <div className="header-container">
      <Button type="primary" onClick={prevMonth}>{'<'}</Button>
      <h2>{format(currentDate, 'MMMM yyyy')}</h2>
      <Button type="primary" onClick={nextMonth}>{'>'}</Button>
    </div>
  )
}

export default Header