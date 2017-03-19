import React from 'react'

const Options = ({state, dispatch}) => {
    return (
        <div>
        	<div className="resultFindButton resultsButton">
        		<a href="http://communitylaw.org.nz/our-law-centres/" target="_blank"><input type="button" name="contact" value="Find My Local Community Law"/></a>
    		</div>

        	<div className="resultPdfButton resultsButton">
		        <input type="button" name="save" value="Print Results" onClick={() => window.print()}/>
	        </div>

        	<div className="resultStartButton resultsButton">
		        <input type="button" name="start-again" value="Back to start" onClick={() => dispatch({type: 'START_OVER'})}/>
	        </div>
        </div>
    )
}


export default Options
