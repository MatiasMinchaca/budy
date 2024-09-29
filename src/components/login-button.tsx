'use client';

import { signIn, signOut } from '@junobuild/core-peer';
import { usePathname, useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';

import { AuthContext } from '@/components/auth';
import { Button } from '@/components/ui/button';

export default function LoginButton() {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (user && pathName === '/') {
      router.push('/chat');
    }

    if (!user && pathName === '/chat') {
      router.push('/');
    }
  }, [user, pathName, router]);

  return !user ? (
    <Button
      onClick={() => signIn()}
      variant="outline"
      className="rounded-full border-blue-600 px-8 border-2"
    >
      Iniciar sesión
    </Button>
  ) : (
    <Button
      onClick={() => signOut()}
      variant="outline"
      className="rounded-full border-blue-600 px-8 border-2"
    >
      Cerrar sesión
    </Button>
  );
}
