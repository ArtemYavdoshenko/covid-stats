import React from 'react'
import './styles/topbar.css'

export default function Topbar() {
    return (
        <nav className="topbar">
            <span className="material-icons coronavirus">
            coronavirus
            </span>
            <h1>COVID-19 Stats</h1>
            <span className="material-icons">
            menu
            </span>
        </nav>
    )
}
