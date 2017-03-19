import React from 'react'

const Summary = ({state, dispatch}) => {
    let relevants = state.results.filter(elem => elem.answer === "Yes" || elem.answer === "Unsure")
    let theLinks = addLinks(state.resourcesLinks, relevants)

    if (relevants.length === 0) {
        return (
            <div className="summary">
              <p>
               Based on your answers, it seems like you dont need to talk to a lawyer about some of the common issues facing New Zealanders. :)
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
            <ul className="resultsStatements">
                {relevants.map(elem => <li>{elem.statement}</li>)}
            </ul>
            <p>
              Here are some resources that might help:
            </p>
            <ul className="resultsLinkList">
                {theLinks.map(elem => <li className="resultsLink"><a href={elem.url} target="_blank">Read about {elem.topic}</a></li>)}
            </ul>
          </div>
        )
    }
}

function addLinks(resourcesLinks, relevantResults){
    var relevantLinks = []
    relevantResults.forEach((result, index) => {
        var linkElement = resourcesLinks.filter((link) => link.linkId === result.linkId)
        if (linkElement.length !== 0 && !relevantLinks.includes(linkElement[0])){
            relevantLinks.push(linkElement[0])
        }
    })
    return relevantLinks
}

export default Summary
