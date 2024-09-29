"use client";

import { useEffect, useState } from 'react';
import { Auth } from '@/components/auth';
import Chatbot from '../components/chatbot';
import { initSatellite } from '@junobuild/core-peer';

export default function Home() {
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const initializeSatellite = async () => {
            try {
                await initSatellite({
                    workers: {
                        auth: true,
                    },
                });
                setIsInitialized(true);
                console.log('Juno initialized successfully');
            } catch (error) {
                console.error('Error initializing satellite:', error);
            }
        };

        initializeSatellite();
    }, []);

    return (
        <Auth>
            <Chatbot isInitialized={isInitialized} />
        </Auth>
    );
}
