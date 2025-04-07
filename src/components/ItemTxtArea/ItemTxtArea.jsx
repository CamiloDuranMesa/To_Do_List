import React from 'react'

export const ItemTxtArea = ({ styles = '', value, onChange }) => {
  return (
    <textarea
      className={`w-full p-2 mb-4 border rounded-lg bg-gray-200 ${styles}`}
      placeholder="Descripción"
      value={value}
      onChange={onChange}
    />
  )
}
