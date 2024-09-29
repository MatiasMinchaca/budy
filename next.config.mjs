import { withJuno } from '@junobuild/nextjs-plugin';

export default withJuno({
  juno: { container: true },
  nextConfig: {
    eslint: {
      ignoreDuringBuilds: true,
    },
    output: 'export',
    distDir: 'dist',
  },
});
