import "./styles/index.scss"
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Suspense } from "react"
import { useTheme } from "./providers/ThemeProvider"
import { classNames } from "shared/lib/classNames/classNames"
import { MainPage } from "pages/MainPage"
import { AboutPage } from "pages/AboutPage"
import { AppRouter } from "./providers/router"


function App() {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'about'}>О проекте</Link>
            <AppRouter/>
        </div>
    )
}

export default App