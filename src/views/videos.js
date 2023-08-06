import React from 'react'

import { Helmet } from 'react-helmet'

import './videos.css'

const Videos = (props) => {
  return (
    <div className="videos-container">
      <Helmet>
        <title>Videos - Togthr template</title>
        <meta property="og:title" content="Videos - Togthr template" />
      </Helmet>
    </div>
  )
}

export default Videos
