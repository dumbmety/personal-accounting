import React from 'react'

const SortButton = () => {
  return (
    <button className="mr-1 py-1 px-2 rounded hover:bg-gray-200 flex items-center focus:outline-none">
      <svg
        className="w-4 h-4 mr-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
        />
      </svg>
      Sort
    </button>
  )
}

export default SortButton
