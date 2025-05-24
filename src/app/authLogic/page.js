'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthLogic = (WrappedComponent) => {
    return function ProtectedComponent(props) {
        const router = useRouter();
        const isAuthenticated = typeof window !== 'undefined' && localStorage.getItem('isAuthenticated') === 'true';

        useEffect(() => {
            if (!isAuthenticated) {
                router.push('/login');
            }
        }, [isAuthenticated]);

        return <WrappedComponent {...props} />;
    };
};

export default AuthLogic;
