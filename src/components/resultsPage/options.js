import React from 'react'

const Options = ({state, dispatch}) => {
    return (
        <div>
        <a href="http://communitylaw.org.nz/our-law-centres/" target="_blank"><input type="button" name="contact" value="Find My Local Community Law"/></a>
        <input type="button" name="save" value="Save results as PDF" onClick={() => alert("PDF save function will happen here!")}/>
        <input type="button" name="start-again" value="Back to start" onClick={() => dispatch({type: 'START_OVER'})}/>
        </div>
    )
}


export default Options
