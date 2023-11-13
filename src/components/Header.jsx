import NavTabs from "./NavTabs";

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="d-flex navbar navbar-expand-lg mx-1 justify-content-between border header">
      <h1 className="header">Adam Fong</h1>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
    </div>
  )
}

export default Header;
