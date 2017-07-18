import React from 'react'
import './addTalkForm.css'

export default class AddTalkForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            company:"",
            name:"",
            notes:""            
        }

        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event, target){
        let newState = {}
        newState[target] = event.target.value
        this.setState(newState)
    }
    render(){
        return(
            <div id="add-talk-form">

                <div className="entry">
                    <span className="bolder">Company:&nbsp;</span>
                    <input 
                        value={this.state.company} 
                        onChange={(evt)=>this.handleChange(evt,"company")}
                    />
                </div>

                <div className="entry">
                    <span className="bolder">Name:&nbsp;</span>
                    <input 
                        value={this.state.name} 
                        onChange={(evt)=>this.handleChange(evt,"name")}
                    />
                </div>

                <div className="entry">
                    <span className="bolder">Notes:&nbsp;</span>
                    <textarea 
                        value={this.state.notes}
                        onChange={(evt)=>this.handleChange(evt,"notes")}
                    />
                </div>

                <div className="button" onClick={()=>this.props.onAddTalk(this.state)}>
                    Add Contact
                </div>
            </div>
        )
    }
}