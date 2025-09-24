function SearchBar({ setTerm }) {
  return (
    <input
      type="text"
      placeholder="Rechercher..."
      onChange={(e) => setTerm(e.target.value)}
      style={{ padding: '8px', width: '100%', marginBottom: '20px' }}
    />
  )
}

export default SearchBar
