import React from 'react'
import Nav from './NavBar';
import UserCard from "./UserCard";
import Posts from "./Posts";
import Trends from './Trends';
import '../styles/Home.css'


const Home = () => {
    return (
      <div className="home">
        <Nav />
        <div className="home__sections">
          <UserCard />
          <Posts/>
          <Trends/>
        </div>
      </div>
    );
}

export default Home
