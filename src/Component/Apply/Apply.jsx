import React from 'react'

const Apply = () => {
  return (
    <>
    <h1>Reusing Styles</h1>
     {/* Before extracting a custom class  */}
    <button class="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
        Save changes
    </button>
    {/* //  After extracting a custom class */}
    <button class="btn-primary">
      Save changes
    </button>

    {/* Add to index.css */}
    {/* @layer components {
  .btn-primary {
    @apply py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75;
  }
} */}

</>
  )
}

export default Apply