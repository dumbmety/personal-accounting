import React from 'react'

const Content = () => {
  return (
    <div className="flex-1 p-6">
      <div className="mb-5">
        <label
          className="block mb-2 font-semibold text-gray-700"
          htmlFor="title"
        >
          Title
        </label>
        <input
          id="title"
          type="text"
          className="block border border-gray-200 rounded shadow-sm py-1 px-3 w-full transition duration-200 ease-in-out focus:outline-none focus:border-gray-400"
        />
        <small className="text-gray-500">Maximum is 150 char</small>
      </div>
      <div className="mb-5">
        <label
          className="block mb-2 font-semibold text-gray-700"
          htmlFor="amount"
        >
          Amount
        </label>
        <input
          id="amount"
          type="text"
          className="block border border-gray-200 rounded shadow-sm py-1 px-3 w-full transition duration-200 ease-in-out focus:outline-none focus:border-gray-400"
        />
        <small className="text-gray-500">Enter a number</small>
      </div>
      <div className="mb-5">
        <label
          className="block mb-2 font-semibold text-gray-700"
          htmlFor="type"
        >
          Type
        </label>
        <input
          id="type"
          type="text"
          className="block border border-gray-200 rounded shadow-sm py-1 px-3 w-full transition duration-200 ease-in-out focus:outline-none focus:border-gray-400"
        />
        <small className="text-gray-500">Choose a type</small>
      </div>
      <div className="mb-5">
        <label
          className="block mb-2 font-semibold text-gray-700"
          htmlFor="category"
        >
          Category
        </label>
        <input
          id="category"
          type="text"
          className="block border border-gray-200 rounded shadow-sm py-1 px-3 w-full transition duration-200 ease-in-out focus:outline-none focus:border-gray-400"
        />
        <small className="text-gray-500">Enter your categories</small>
      </div>
    </div>
  )
}

export default Content
