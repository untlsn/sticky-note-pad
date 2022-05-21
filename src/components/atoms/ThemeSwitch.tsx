import settings from '~/store/settings';

function ThemeSwitch() {
  return (
    <button
      type="button"
      className="border-(2 white) w-12 h-5 rounded-full relative"
      onClick={settings.switchDarkMode}
    >
      <O>{() => (
        <span
          className={`h-7 w-7 bg-white absolute -top-1.5 -left-1.5 rounded-full transition-transform ${
            settings.darkMode ? 'translate-x-full' : ''}`}
        >
          <span className={`text-black mt-1 ${settings.darkMode ? 'i-bi-moon' : 'i-bi-sun'}`} />
        </span>
      )}
      </O>

    </button>
  );
}

export default ThemeSwitch;
