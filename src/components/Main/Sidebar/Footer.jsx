import React from 'react'

const Footer = () => {
  return (
    <footer className="p-6 border-t border-gray-100 bg-gray-50 flex items-center justify-end">
      <button className="text-gray-700 border border-gray-300 hover:bg-gray-100 focus:bg-gray-100 mr-2 py-2 px-4 rounded-md focus:outline-none">
        Cancel
      </button>
      <button className="text-white bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none py-2 px-4 rounded-md">
        Add
      </button>
    </footer>
  )
}

export default Footer
