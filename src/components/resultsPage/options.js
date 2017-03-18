import React from 'react'

const Options = ({state, dispatch}) => {
    return (
        <div>
        <input type="button" name="contact" value="Find My Local Community Law"/>
        <input type="button" name="save" value="Save results as PDF" onClick={() => console.log("Done")}/>
        <input type="button" name="start-again" value="Done" onClick={() => console.log("Done")}/>
        </div>
    )
}


export default Options
