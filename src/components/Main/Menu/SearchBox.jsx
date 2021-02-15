import React from 'react'

const SearchBox = () => {
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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      Search
    </button>
  )
}

export default SearchBox
