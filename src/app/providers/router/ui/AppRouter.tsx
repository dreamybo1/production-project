import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routerConfig/routerConfig'

type Props = {}

export default function AppRouter({}: Props) {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) => (
                    <Route 
                        key={path} 
                        path={path} 
                        element={element} 
                    />
                ))}
            </Routes>
        </Suspense>
    )
}