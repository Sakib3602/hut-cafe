const Nav = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className=" text-[40px] text-[#4CCD99] font-[700]">Hut Cafe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[16px] font-[600]">
            <li>
              <a className="text-[#007F73]">Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>

          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://i.ibb.co/6Yn63W4/trashed-1662163552-IMG-20220803-WA0021.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Nav.propTypes = {};

export default Nav;
