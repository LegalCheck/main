import React from 'react'

const Summary = ({state, dispatch}) => {
    let relevants = state.results.filter(elem => elem.answer === "Yes" || elem.answer === "Unsure")
    console.log(relevants)

    if (relevants.length === 0) {
        return (
            <div className="summary">
              <p>
               Based on your answers, it seems like you don't need to talk to a lawyer about some of the common issues facing New Zealanders. :)
              </p>
              <p>
               Find out more about the services of <a href="http://communitylaw.org.nz/our-law-centres/" target="_blank">Community Law</a>.
              </p>
            </div>
        )
    } else {
        return (
          <div className="summary">
            <p>
             Based on your answers, you might benefit from talking to a lawyer about:
            </p>
            <ul className="results">
                {relevants.map(elem => <li>{elem.statement}</li>)}
            </ul>
          </div>
        )
    }
}


export default Summary
