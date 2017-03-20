import React from 'react'

const Footer = ({state, dispatch}) => {
  return (
    <footer>
      <div className="box">
        <a className='footerCopyright' href="#popup1">Copyright</a>
      </div>

      <div id="popup1" className="overlay">
      	<div className="popup">
          <a className="close" href="#">&times;</a>
      		<h4>Copyright Notice</h4>
      		<div className="content">
          All of your answers will be confidential. Answering these questions does not make you a client of Community Law Wellington and Hutt Valley. We are open everyday for free legal drop in sessions, see www.wclc.org.nz or call us on 499 2928 to find out times.
          This resource is adapted from the Australian “Legal Health Check” developed by QPILCH and NACLC.
      		</div>
      	</div>
      </div>
    </footer>
  )
}

export default Footer
