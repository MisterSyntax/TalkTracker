import React from 'react'
import './talk.css'

const Talk = (props) => {

    return (
        <div className='talk'>
            <div >
                <div><span className="bolder">Company:</span> {props.info.company} </div>
                <div><span className="bolder">Name:</span> {props.info.name}</div>
                <div><span className="bolder" >Notes:</span> {props.info.notes}</div>
            </div>
            <div onClick={()=>props.removeTalk(props.info.id)}>
                Delete Me
            </div>

        </div>
    )
}

export default Talk