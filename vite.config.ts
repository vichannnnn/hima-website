import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default ({ mode }) => {
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components/'),
        '@features': path.resolve(__dirname, 'src/features/'),
        '@utils': path.resolve(__dirname, 'src/utils/'),
        '@providers': path.resolve(__dirname, 'src/providers/'),
      },
    },
  });
};
