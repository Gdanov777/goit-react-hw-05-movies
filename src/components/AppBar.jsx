import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  return (
    <>
      <header>
        <nav>
          <span>
            <NavLink to={'/'}>Home</NavLink>
          </span>
          <span>
            <NavLink to={'/movies'}>Movies</NavLink>
          </span>
        </nav>
      </header>
    </>
  );
};