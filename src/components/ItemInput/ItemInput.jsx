import React from 'react'

export const ItemInput = ({ styles = '', value, onChange }) => {
  return (
    <input
      type="text"
      className={`w-full p-2 mb-4 border rounded-lg bg-gray-200 ${styles}`}
      placeholder="Ingrese el nombre de la tarea"
      value={value}
      onChange={onChange}
    />
  )
}
