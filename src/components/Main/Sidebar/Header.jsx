import React from 'react'

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 bg-gray-50 border-b border-gray-100">
      <h2 className="text-lg font-semibold">Add new item</h2>
      <button className="text-gray-400 hover:text-gray-600 focus:text-gray-600 focus:outline-none">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </header>
  )
}

export default Header
