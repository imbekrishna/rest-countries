import themeIcon from './assets/moon-outline.svg';
import searchIcon from './assets/search.svg';
import FilterDropdown from './components/FilterDropdown';

const App = () => {
  return (
    <>
      <nav className="navbar">
        <h1 className="navbar--title">Where in the world?</h1>
        <img className="navbar--icon" src={themeIcon} alt="" />
        <span className="theme--text">Dark Mode</span>
      </nav>

      <main>
        <div className="action--container">
          <div className="container--md search--container">
            {/* FIXME: update color */}
            <img className="search--icon" src={searchIcon} alt="" />
            <input
              className="search--input"
              type="search"
              placeholder="Search for a country..."
            />
          </div>
          <FilterDropdown />
        </div>
      </main>
    </>
  );
};
export default App;
