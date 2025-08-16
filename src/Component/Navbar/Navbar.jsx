// React router dom
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar shadow-sm shadow-white">
      <div class="flex-1">
        <Link
          to={"/"}
          class="btn btn-ghost text-xl text-blue-700 dark:text-blue-300"
        >
          Linked Posts
        </Link>
      </div>

      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <Link to={'/login'}>Login</Link>
          </li>
          <li>
            <Link to={'/register'}>Register</Link>
          </li>
        </ul>
      </div>

      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <Link class="justify-between">Profile</Link>
          </li>
          <li>
            <Link>Settings</Link>
          </li>
          <li>
            <Link>Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
