import React from 'react'
// style
import './Widget.css'
import InfoIcon from '@mui/icons-material/Info'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

function Widget() {

  const newsArticle = (heading, subtitle) => {
    return (
    <div className="widget__article">
      <div className="widget__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widget__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
    );
  }

  return (
    <div className="widget">
      <div className="widget__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Latest news in AI", "Top news - 239 readers")}
      {newsArticle("Javascript", "Developers - 569 readers")}
      {newsArticle("Job seekers", "jobs - 433 readers")}
    </div>
  )
}

export default Widget