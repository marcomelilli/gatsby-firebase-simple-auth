import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <nav class="w-full flex items-center justify-between bg-blue-700 p-6">
    <div class="items-center w-1/2 text-white mr-6 text-center">
      <span class="font-semibold text-xl">Gatsby Firebase Auth</span>
    </div>
    <div class="w-1/2 mt-1 text-md flex flex-row-reverse">
      <Link to="/app/profile">
        <a class="block text-white hover:text-grey-500 mr-4">
          Profile
        </a>        
      </Link>
      <Link to="/">
        <a class="block text-white hover:text-grey-500 mr-4">
          Home
        </a>
      </Link>
    </div>
  </nav>
)

export default Header
