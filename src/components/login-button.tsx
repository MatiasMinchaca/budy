'use client';

import { signIn } from '@junobuild/core-peer';
import { useContext } from 'react';

import { AuthContext } from '@/components/auth';
import { Button } from '@/components/ui/button';

export default function LoginButton() {
  const { user } = useContext(AuthContext);

  if (user !== undefined && user !== null) {
    return null;
  }

  return (
    <Button
      onClick={() => signIn()}
      variant="outline"
      className="rounded-full border-blue-600 px-8 border-2"
    >
      Iniciar sesión
    </Button>
  );
}
