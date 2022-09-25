import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

export default function RoutesApp() {
    const { signed } = useContext(AuthContext)
    return (
        signed ? <AuthRoutes /> : <AppRoutes />
    )

}   