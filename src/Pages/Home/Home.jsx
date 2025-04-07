import React from 'react'
import { Main } from '../../layouts/Main/Main'
import { ItemInput } from '../../components/ItemInput/ItemInput'
import { ItemTxtArea } from '../../components/ItemTxtArea/ItemTxtArea'
import { BtnAdd } from '../../components/BtnAdd1/BtnAdd1'
import { ItemCardTask } from '../../layouts/ItemCardTask/ItemCardTask'

export const Home = () => {
  return (
    <Main>
      <div className="bg-gray-100 min-h-screen p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">To do List</h1>

        
        <div className="mb-6 p-6 bg-white rounded-xl shadow-lg">
          <ItemInput styles='text-black'/>
          <ItemTxtArea styles='text-black'/>
          <BtnAdd
            styles="w-full bg-blue-500 text-white p-2 rounded-lg bg-style"
            content="Add Task"
          />
        </div>

        
        <div className="flex justify-around mb-6">
          <BtnAdd
            styles="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-black"
            content="All"
          />
          <BtnAdd
            styles="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-black"
            content="Pending"
          />
          <BtnAdd
            styles="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-black"
            content="Completed"
          />
        </div>

        
        <div className="space-y-4">
          <ItemCardTask contentTitle="Task 1" contentText="Description of task 1" />
          <ItemCardTask contentTitle="Task 2" contentText="Description of task 2" />
          <ItemCardTask contentTitle="Task 3" contentText="Description of task 3" />
        </div>
      </div>
    </Main>
  )
}
