import React from 'react';

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
              value="income"
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
              value="cost"
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
          className="block border border-gray-200 rounded shadow-sm py-1 px-3 w-full transition duration-200 ease-in-out focus:outline-none focus:border-gray-400"
        />
        <small className="text-gray-500">
          Separate categories with commas ","
        </small>
      </div>
    </div>
  );
};

export default Content;
