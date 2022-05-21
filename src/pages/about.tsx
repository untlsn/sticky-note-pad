import logo from '~/assets/images/logo.svg';

export default function About() {
  return (
    <div className="text-center">
      <header className="App-header">
        <img src={logo} className="App-image" alt="logo" />
        <p>About</p>
        <p>
          <Link to="/" className="text-react-blue text-lg">
            Back to home
          </Link>
        </p>
      </header>
    </div>
  );
}
