import React, {Component} from 'react'


class ToDoListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: []
        }
    }

    render(){
        return(
            <div className='to-do-list section'>
                <h2 className='header'>To-Do</h2>
                <div className='to-do section'>
                </div>
            </div>
        )
    }
}
export default ToDoListContainer