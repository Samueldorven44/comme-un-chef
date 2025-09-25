import '../styles/SearchBar.css'

function SearchBar({ setTerm }) {
  return (
    <div className='SearchBar'>
      <input
        type="text"
        placeholder="Rechercher..."
        className="search-input"
        onChange={(e) => setTerm(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
