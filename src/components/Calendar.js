import React, {Component} from 'react'
import { GOOGLE_API_KEY, CALENDAR_ID } from "../config.js";
// All API keys are stored in src/config.js and hidden from the repo with .gitignore


class CalendarContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: []
        }
    }

    render(){
        return(
            <div className='calendar section'>
                <div className="today">
                    <h2 className='header'>Today</h2>
                    <div className='matthew section'>
                    </div>
                    <div className='emoke section'>
                    </div>
                </div>
                <div className="tomorrow">
                    <h2 className='header'>Tomorrow</h2>
                    <div className='emoke section'>
                    </div>
                    <div className='events section'>
                    </div>
                </div>
            </div>
        )
    }
}
export default CalendarContainer