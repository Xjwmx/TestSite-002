import React from "react";
import '../../assets/styles/styles.scss'

const Navlinks = ({ className, link1, linkTitle1, link2, linkTitle2, link3, linkTitle3 }) => {
  return (
    <div className={className}>
        <a className="button" href={link1}>{linkTitle1}</a>
        <a className="button" href={link2}>{linkTitle2}</a>
        <a className="button" href={link3}>{linkTitle3}</a>
      
    </div>
  )
}

export default Navlinks;