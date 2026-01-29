import TerminalWindow from '../components/TerminalWindow';

function Home() {
  return (
    <main className="page-shell">
      <section className="stack">
        <TerminalWindow title="about.txt">
          <p>hi im adelon</p>
          <p className="prompt">Coming Soon:</p>
          <ul>
            <li>rotating 3d asset</li>
            <li>orb-pondering experience</li>
            <li>230,000 github commits consisting of moving a div 3 px in a direction</li>
            <li>actual content</li>
          </ul>
          In that order!
        </TerminalWindow>
      </section>
    </main>
  );
}

export default Home;
