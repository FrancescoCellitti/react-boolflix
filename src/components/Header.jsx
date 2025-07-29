import { useState } from "react"


export default function Header({ search, setSearch, onSearch }) {

    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <form className="d-flex" role="search" onSubmit={onSearch}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search}
                            onChange={e => setSearch(e.target.value)} />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}