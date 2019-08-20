import React, {Component} from 'react'

class TimeContainer extends Component {
  constructor() {
    super()
    let d = new Date()
      this.state = {
        day: d.getDay(),
        month: d.getMonth(),
        date: d.getDate(),
        time: d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false}),
        ampm: d.getHours() >= 12 ? 'PM' : 'AM'
      }
    this.countingSecond = this.countingSecond.bind(this)
  }
  countingSecond() {
    let d = new Date()
    this.setState({
      day: d.getDay(),
      month: d.getMonth(),
      date: d.getDate(),
      time: d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false}),
      ampm: d.getHours() >= 12 ? 'pm' : 'am'
    })
  }
  UNSAFE_componentWillMount() {
    setInterval(this.countingSecond, 1000)
  }
  render() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return (
      <div className='time-date section'>
        <h1 className='time'>{this.state.time}<span className='ampm'>{this.state.ampm}</span></h1>
        <h2 className='date'>{days[this.state.day]}, {months[this.state.month]} {this.state.date}</h2>
      </div>
    )
  }
}
export default TimeContainer