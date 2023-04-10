import React from 'react'


function Nav() {

    return (
        <header>
            <nav>
                <ul>
                    <li>Google</li>
                    <li><input type="button" value="Get Users" className='getUser' id="user1" /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;