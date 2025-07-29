import { useState } from 'react'
import Movie from './components/MovieGrid'
import Header from './components/Header'



function App() {
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    const handlesearch = (e)=>{
      e.preventDefault();
      setQuery(search);
    }


  return (
    <>
    <Header search={search} setSearch={setSearch} onSearch={handlesearch}></Header>
    <Movie query={query}></Movie>
    </>
  )
}

export default App
