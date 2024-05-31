import "../styles/index.scss"
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {MainPageAsync} from "../pages/MainPage/MainPage.async"
import {AboutPageAsync} from "../pages/AboutPage/AboutPage.async"
import { Suspense, useContext, useState } from "react"
import { Theme, ThemeContext } from "../theme/ThemeContext"
import { useTheme } from "../theme/useTheme"
import { classNames } from "../helpers/classNames/classNames"


function App() {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'about'}>О проекте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPageAsync />}/>
                    <Route path='/about' element={<AboutPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App