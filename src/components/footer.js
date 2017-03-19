import React from 'react'

const Footer = ({state, dispatch}) => {
  const copyrightClass = state.showPopup ? 'hidden' : 'footerCopyright'
  return (
    <footer>
      <button className={copyrightClass} onClick={() => dispatch({type: 'SHOW_HIDE_COPYRIGHT'})}>Copyright</button>
    </footer>
  )
}

export default Footer
