'use client';

import { authSubscribe, initSatellite, type User } from '@junobuild/core-peer';
import { createContext, useEffect, useState, type ReactNode } from 'react';

export const AuthContext = createContext<{ user: User | undefined | null }>({ user: undefined });

interface AuthProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useState<User | undefined | null>(undefined);

  useEffect(() => {
    const sub = authSubscribe((user) => setUser(user));

    return () => sub();
  }, []);

  useEffect(() => {
    const initializeSatellite = async () => {
      try {
        await initSatellite({
          satelliteId:
            process.env.NODE_ENV === 'development'
              ? 'jx5yt-yyaaa-aaaal-abzbq-cai'
              : '6wai3-dyaaa-aaaal-amhqa-cai',
          workers: {
            auth: true,
          },
          container: true,
        });
        console.log('Juno initialized successfully');
      } catch (error) {
        console.error('Error initializing satellite:', error);
      }
    };

    initializeSatellite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};
