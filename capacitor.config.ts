import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'northman-mybh-shell2',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    Portals: {
      shell: {
        name: 'shell',
        webDir: './build'
      },
      apps: [
        {
          name: 'mfe2',
          webDir: 'portals/mfe2',
          liveUpdateConfig: {
          appId: "33a7772e",
          channel: "production",
            autoUpdateMethod: "none"
          }
        },
        {
          name: 'mfe1sa',
          webDir: 'portals/mfe1sa',
          liveUpdateConfig: {
          appId: "1bfaeee6",
          channel: "production",
            autoUpdateMethod: "none"
          }
        }
      ],
    },
  },
};

export default config;
