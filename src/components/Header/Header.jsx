import React from 'react'

const Header = () => {
  return (
    <header className="mb-5">
      <h1 className="text-5xl font-semibold tracking-tigh py-2">
        Personal Accounting
      </h1>
      <p className="text-lg leading-10 text-gray-600">
        Created by{' '}
        <a
          className="border-b border-gray-300 text-blue-600 font-semibold hover:border-blue-400"
          href="https://github.com/neysidev"
          target="_blank"
          rel="noreferrer"
        >
          Mehdi Neysi
        </a>
      </p>
    </header>
  )
}

export default Header
