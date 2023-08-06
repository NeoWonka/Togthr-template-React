import React from 'react'

import { Helmet } from 'react-helmet'

import './members.css'

const Members = (props) => {
  return (
    <div className="members-container">
      <Helmet>
        <title>Members - Togthr template</title>
        <meta property="og:title" content="Members - Togthr template" />
      </Helmet>
    </div>
  )
}

export default Members
