import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { globalRoutes, privateRoutes } from '../../routes'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../../utils'


const AppRouter = () => {
    const user = false
    return user ? (
        <Routes>
            {privateRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to={CHAT_ROUTE} />} />
        </Routes>
    ) : (
        <Routes>
            {globalRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
        </Routes>
    )
}

export default AppRouter