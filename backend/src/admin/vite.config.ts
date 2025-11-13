import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    server: {
        allowedHosts: true,
	cors: {
        	origin: ['http://localhost:4321'],
        	credentials: true,
      	},
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  });
};
