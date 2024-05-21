import { Link } from 'react-router-dom';

const NavBar = () => {
  return(
    <nav className="bg-yellow-900 shadow-md sticky-top">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">Law Project</Link>
        <ul className="flex space-x-4 items-center flex-grow justify-center">
          <li><Link to="/" className="text-white hover:text-gray-200">Home</Link></li>
          <li><Link to="/lawyerlistings" className="text-white hover:text-gray-200">Lawyer Listings</Link></li>
          <li><Link to="/support" className="text-white hover:text-gray-200">Support/FAQ</Link></li>
        </ul>
        <a href="login.html" className="bg-white text-yellow-800 px-4 py-2 rounded hover:bg-gray-100">Log In</a>
      </div>
    </nav>
  )
}

export default NavBar;