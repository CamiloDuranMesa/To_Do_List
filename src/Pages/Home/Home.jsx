import React from 'react'
import { Main } from '../../layouts/Main/Main'
import '../../index.css'

export const Home = () => {

  return (
    <Main>
    <body class="bg-gray-100">

<div class="p-8">
  
  <h1 class="text-4xl font-bold text-center mb-8 text-black">To do List</h1>

  
  <div class="mb-6 p-6 bg-white rounded-xl shadow-lg">
    <input
      type="text"
      class="w-full p-2 mb-4 border rounded-lg bg-gray-200"
    />
    <textarea
      class="w-full p-2 mb-4 border rounded-lg bg-gray-200"
    ></textarea>
    <button
      class="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
    >
      Add Task
    </button>
  </div>

  
  <div class="flex justify-around mb-6">
    <button
      class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-black"
    >
      All
    </button>
    <button
      class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-black"
    >
      Pending
    </button>
    <button
      class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-black"
    >
      Completed
    </button>
  </div>

  
  <div class="space-y-4">
    <div class="p-6 bg-white rounded-xl shadow-lg">
      <div class="flex items-center">
        <input type="checkbox" class="mr-4" />
        <h3 class="text-xl font-semibold text-black" >Task 1</h3>
      </div>
      <p class="mt-2 text-gray-700">Description of task 1</p>
    </div>

    <div class="p-6 bg-white rounded-xl shadow-lg">
      <div class="flex items-center">
        <input type="checkbox" class="mr-4" />
        <h3 class="text-xl font-semibold text-black">Task 2</h3>
      </div>
      <p class="mt-2 text-gray-700">Description of task 2</p>
    </div>

    <div class="p-6 bg-white rounded-xl shadow-lg">
      <div class="flex items-center">
        <input type="checkbox" class="mr-4" />
        <h3 class="text-xl font-semibold text-black">Task 3</h3>
      </div>
      <p class="mt-2 text-gray-700">Description of task 3</p>
    </div>
  </div>
</div>

</body>
    </Main>
  )
}
