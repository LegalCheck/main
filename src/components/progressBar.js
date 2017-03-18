import React from 'react'

const ProgressBar = ({state, dispatch}) => {
    let allCategories = state.questions.map(question => question.category)
    let categories = [...new Set(allCategories)]
    return (
        <div className="progress-bar">
            {categories.map(category => <div className="category">{category}</div>)}
        </div>
    )

}

export default ProgressBar
