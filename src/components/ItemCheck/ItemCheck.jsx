import React from 'react'

export const ItemCheck = ({ styles = '' }) => {
  return (
    <input type="checkbox" className={`mr-4 ${styles}`} />
  )
}
