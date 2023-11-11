import NavTabs from "./NavTabs";

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="d-flex navbar navbar-expand-lg mx-1 justify-content-between border bg-primary-subtle">
      <h1>Adam Fong</h1>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
    </div>
  )
}

export default Header;
