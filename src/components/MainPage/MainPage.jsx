import React from 'react'
import HeroPage from '../HeroPage/HeroPage';
import Menu from '../Menu/Menu';
import Projects from '../Projects/Projects';

const MainPage = () => {
    return (
        <div className="App">
            <Menu />
            <HeroPage />
            <Projects />
      </div>
    )
}

export default MainPage;