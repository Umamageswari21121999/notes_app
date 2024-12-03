// components/Navbar.js

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname from next/navigation

const Navbar = () => {
  const pathname = usePathname(); // Access the current pathname

  // Function to determine if the current link is active
  const isActive = (path) => pathname === path;

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">My Notes</Link>
      </div>
      <ul className="nav-links">
        <li className={isActive('/') ? 'active' : ''}>
          <Link href="/">Home</Link>
        </li>
        <li className={isActive('/signin') ? 'active' : ''}>
          <Link href="/signin">Sign In</Link>
        </li>
        <li className={isActive('/signup') ? 'active' : ''}>
          <Link href="/signup">Sign Up</Link>
        </li>
      </ul>

      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background-color: #333;
          color: white;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .navbar .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 20px;
        }

        .nav-links li {
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .nav-links li.active a {
          color: #ff6f61; /* Highlight active link */
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          text-decoration: underline;
          color: #ff6f61; /* Hover effect */
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            align-items: flex-start;
          }

          .nav-links {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .nav-links li {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
