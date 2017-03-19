import React from 'react'

const Summary = ({state, dispatch}) => {
    let relevants = state.results.filter(elem => elem.answer === "Yes" || elem.answer === "Unsure")
    let relevantsComplete = addLinks(state.resourcesLinks, relevants)

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
            <p>
              Here are some resources that might help:
            </p>
            <ul className="links">
                {relevantsComplete.map(elem => <li>Read about <a href={elem.url} target="_blank">{elem.topic}</a></li>)}
            </ul>
          </div>
        )
    }
}

function addLinks(resourcesLinks, relevantResults){
    var relevantLinks = []
    relevantResults.forEach((result, index) => {
        var linkElement = resourcesLinks.filter((link) => link.linkId === result.linkId)
        if (!relevantLinks.includes(linkElement[0])){
            relevantLinks.push(linkElement[0])
        }
    })
    return relevantLinks
}

export default Summary
