import React from 'react'
import { ItemText } from '../../components/ItemText/ItemText'
import { ItemTitle } from '../../components/ItemTitle/ItemTitle'
import { ItemCheck } from '../../components/ItemCheck/ItemCheck'

export const ItemCardTask = ({ contentTitle, contentText }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <div className="flex items-center">
        <ItemCheck />
        <ItemTitle content={contentTitle} />
      </div>
      <ItemText content={contentText} />
    </div>
  )
}
