import React from 'react'
import { ItemText } from '../../components/ItemText/ItemText'
import { ItemTitle } from '../../components/ItemTitle/ItemTitle'
import { ItemCheck } from '../../components/ItemCheck/ItemCheck'

export const ItemCardTask = ({contentTitle, contentText}) => {
  return (
    <div className='bg-white p-4 rounded-lg shadow-md  '> 
        <ItemCheck/>
        <ItemTitle content={contentTitle}/>
        <ItemText content={contentText}/>
        
    </div>
  )
}
