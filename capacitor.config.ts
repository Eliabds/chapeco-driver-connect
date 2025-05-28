
import { CapacitorConfig } from '@capacitor/core';

const config: CapacitorConfig = {
  appId: 'app.lovable.4ddd1551ba164eae9f79ef0dbb3225b2',
  appName: 'ChapecoDriver',
  webDir: 'dist',
  server: {
    url: 'https://4ddd1551-ba16-4eae-9f79-ef0dbb3225b2.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    Geolocation: {
      permissions: ["location"]
    },
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#488AFF"
    }
  }
};

export default config;
