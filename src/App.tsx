import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { autorun } from 'mobx';
import pages from '~react-pages';
import settings from '~/store/settings';

export default function App() {
  const routes = useRoutes(pages);
  useEffect(() => {
    autorun(() => {
      const fnName = settings.darkMode ? 'add' : 'remove';
      document.body.classList[fnName]('dark');
    });
  }, []);

  return (
    <div className="dark:(bg-[#121212] text-white) min-h-screen">
      <Suspense fallback={<p>Loading...</p>}>
        {routes}
      </Suspense>
    </div>
  );
}
