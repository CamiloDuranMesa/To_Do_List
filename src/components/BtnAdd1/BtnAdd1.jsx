import React from 'react'

export const BtnAdd = ({ styles, content}) => {
  return (
    <button className={styles}>
      {content}
    </button>
  )
}
