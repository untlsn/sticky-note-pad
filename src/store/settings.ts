import { types } from 'mobx-state-tree';
import prefersDarkMode from '~/data/prefersDarkMode';

const SettingsStore = types
  .model({
    darkMode: prefersDarkMode,
  })
  .actions((self) => ({
    switchDarkMode() {
      self.darkMode = !self.darkMode;
    },
  }));

const settings = SettingsStore.create();

export default settings;
