import React from 'react'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 text-gray-600 body-font bg-blue-400">
      <div className="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">
        <span className="ml-3 text-xl text-white">Task-List</span>
      </div>
    </header>
  )
}

export default Navbar