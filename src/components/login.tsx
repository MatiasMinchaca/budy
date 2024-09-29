import { signIn } from '@junobuild/core-peer';

import { Button } from '@/components/ui/button';

export const Login = () => {
  return <Button onClick={() => signIn()}>Login</Button>;
};
