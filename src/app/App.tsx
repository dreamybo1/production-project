import "./styles/index.scss"
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Suspense } from "react"
import { useTheme } from "./providers/ThemeProvider"
import { classNames } from "shared/lib/classNames/classNames"
import { MainPage } from "pages/MainPage"
import { AboutPage } from "pages/AboutPage"
import { AppRouter } from "./providers/router"
import { Navbar } from "widgets/Navbar"
import { Sidebar } from "widgets/Sidebar"


function App() {

    const {theme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    )
}

export default App