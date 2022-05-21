import '~/App.css';
import Header from '~/components/organisms/Header';
import StickyIcon from '~/components/atoms/StickyIcon';
import Button from '~/components/atoms/Button';

export default function App() {
  return (
    <>
      <Header />
      <main className="h-screen flex-center flex-col">
        <article>
          <header className="text-end space-y-2 relative z-1">
            <h1 className="text-5xl font-bold mr-2">
              Sticky note pad
            </h1>
            <p>
              Your notes
            </p>
            <StickyIcon className="absolute -left-3/4 -top-5/2 -rotate-15 scale-80 -z-1" />
          </header>
          <Button className="mt-20">Create first note</Button>
        </article>
      </main>
    </>
  );
}
