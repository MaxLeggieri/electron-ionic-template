import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.vivendo.electron-ionic-template',
  appName: 'electron-ionic-template',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
