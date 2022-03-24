import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <NavBar>
        <Logo src="/images/logo.svg" alt="logo image"/>
        <NavMenu>
            <a>
                <img src="/images/home-icon.svg"/>
                <span>HOME</span>
            </a>
            <a>
                <img src="/images/search-icon.svg" alt="nav-items icons"/>
                <span>SEARCH</span>
            </a>
            <a>
                <img src="/images/watchlist-icon.svg" alt="nav-items icons"/>
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src="/images/original-icon.svg" alt="nav-items icons"/>
                <span>ORIGINALS</span>
            </a>
            <a>
                <img src="/images/movie-icon.svg" alt="nav-items icons"/>
                <span>MOVIES</span>
            </a>
            <a>
                <img src="/images/series-icon.svg" alt="nav-items icons"/>
                <span>SERIES</span>
            </a>
        </NavMenu>
        <UserAccount src="/images/user-img.jpg" alt="user image"/>

    </NavBar>
  )
}

export default Header

const NavBar = styled.nav `
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
    overflow-x: hidden;
`
const Logo = styled.img `
    width: 80px;
    cursor: pointer;
    
`
const NavMenu = styled.div `
    display: flex;
    justify-content: center;
    flex: 1;
    gap: 8px;
    margin: 0 16px;

    a {
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 0 12px;

        @media(max-width: 1024px) {
            padding: 0 8px;
        }

        img {
            height: 20px;

            @media(max-width: 1024px) {
                height: 14px;
            }
        }

        span {
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
         
            @media(max-width: 1024px) {
                font-size: 12px;
                line-height: 16px;
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
        
    }
    @media(max-width: 768px) {
        display: none;
    }

`
const UserAccount = styled.img `
    width: 48px;
    height: 48px;
    border-radius 50%;
    cursor: pointer;
 
`