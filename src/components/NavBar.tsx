import themeIcon from '../assets/moon-outline.svg';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar--title">Where in the world?</h1>
      <img className="navbar--icon" src={themeIcon} alt="" />
      <span className="theme--text">Dark Mode</span>
    </nav>
  );
};
export default NavBar;
