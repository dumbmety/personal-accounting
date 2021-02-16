import React from 'react'

const AddItem = () => {
  return (
    <button className="py-1 px-2 rounded hover:bg-gray-200 flex items-center focus:outline-none">
      <svg
        className="w-5 h-5 mr-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
      Add item
    </button>
  )
}

export default AddItem
