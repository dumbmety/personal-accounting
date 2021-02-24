import React, { useState } from 'react';

import SimpleBar from 'simplebar-react';

const AddItem = ({ hide, add }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('');
  const [categories, setCategories] = useState([]);

  return (
    <form
      onSubmit={event => add(event, title, amount, type, categories)}
      className="z-30"
    >
      <div className="sidebar">
        <SimpleBar className="h-screen">
          <div className="h-full flex flex-col justify-between">
            <header className="flex items-center justify-between p-6 bg-gray-50 border-b border-gray-100">
              <h2 className="text-lg font-semibold">Add new item</h2>
              <button
                onClick={hide}
                type="button"
                className="text-gray-400 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
              >
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
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="block border border-gray-200 rounded shadow-sm py-1 px-3 w-full transition duration-200 ease-in-out focus:outline-none focus:border-gray-400"
                />
                <div className="flex items-center justify-between mt-1 text-gray-500">
                  <small>Maximum is 50 char</small>
                </div>
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
                  type="number"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
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
                <div className="flex items-center justify-between overflow-hidden rounded">
                  <div className="flex-1 text-center text-sm">
                    <input
                      id="income"
                      className="type-input hidden"
                      type="radio"
                      value={type}
                      onChange={() => setType('income')}
                      name="type"
                    />
                    <label
                      htmlFor="income"
                      className="type-label inline-block py-2 w-full cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out border border-gray-200"
                    >
                      Income
                    </label>
                  </div>
                  <div className="flex-1 text-center text-sm">
                    <input
                      id="cost"
                      className="type-input hidden"
                      type="radio"
                      value={type}
                      onChange={() => setType('cost')}
                      name="type"
                    />
                    <label
                      htmlFor="cost"
                      className="type-label inline-block py-2 w-full cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out border border-l-0 border-gray-200"
                    >
                      Cost
                    </label>
                  </div>
                </div>
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
                  value={categories}
                  onChange={e => setCategories(e.target.value)}
                  className="block border border-gray-200 rounded shadow-sm py-1 px-3 w-full transition duration-200 ease-in-out focus:outline-none focus:border-gray-400"
                />
                <small className="text-gray-500">
                  Separate categories with commas ","
                </small>
              </div>
            </div>
            <footer className="p-6 border-t border-gray-100 bg-gray-50 flex items-center justify-end">
              <button
                onClick={hide}
                type="button"
                className="text-gray-700 border border-gray-300 hover:bg-gray-100 focus:bg-gray-100 mr-2 py-2 px-4 rounded-md focus:outline-none"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-white bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none py-2 px-4 rounded-md"
              >
                Add
              </button>
            </footer>
          </div>
        </SimpleBar>
      </div>
    </form>
  );
};

export default AddItem;
