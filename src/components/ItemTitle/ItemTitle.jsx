import React from 'react'

export const ItemTitle = ({ content = '', styles = '' }) => {
  return (
    <h3 className={`text-xl font-semibold text-black ${styles}`}>
      {content}
    </h3>
  )
}
