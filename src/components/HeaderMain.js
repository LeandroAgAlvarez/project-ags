import React from 'react'
import {
    Link
} from 'react-router-dom';

export const HeaderMain = () => {
    return (
        <div className="App-header">
            <div class="d-flex align-items-center">
                <Link to='/'>
                    <img src="https://agsyouthsoccer.com/assets/images/ags.jpeg" className="App-logo" alt="logo" />
                </Link>
                
                <h1 className="App-title">AGS Youth Soccer</h1>
            </div>

            <nav class="nav-container navbar navbar-expand-md">

                <button
                    class="navbar-toggler ms-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse mobile-menu" id="menu">

                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link to='/' className='nav-link'>
                                Home
                            </Link>
                        </li>

                        <li class="nav-item">
                            <Link to='/matches' className='nav-link'>
                                Matches
                            </Link>
                        </li>

                        <li class="nav-item">
                            <Link to='/about' className='nav-link'>
                                About Me
                            </Link>
                        </li>
                    </ul>

                </div>

            </nav>
        </div>
    )
}
