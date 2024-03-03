import { useEffect, useState } from 'react';

const NavBar = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [isDark, setIsDark] = useState(defaultDark);

  useEffect(() => {
    document.body.classList.toggle('dark');
  }, [isDark]);

  return (
    <nav className="navbar--wrapper">
      <div className="navbar">
        <h1 className="navbar--title">Where in the world?</h1>
        {/* <img className="navbar--icon" src={themeIcon} alt="" /> */}
        <svg
          className="navbar--icon"
          viewBox="0 0 24 24"
          // FIXME: Update fill color based on theme context
          fill={isDark ? `currentColor` : 'none'}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="theme--text"
          role="button"
          onClick={() => setIsDark((prev) => !prev)}
        >
          Dark Mode
        </span>
      </div>
    </nav>
  );
};
export default NavBar;
