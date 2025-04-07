import React from 'react'

export const ItemText = ({ content = '', styles = '' }) => {
  return (
    <p className={`mt-2 text-gray-700 ${styles}`}>
      {content}
    </p>
  )
}
