import TerminalWindow from '../components/TerminalWindow';

function Links() {
  return (
    <main>
      <section className="content">
        
        <TerminalWindow title="links.txt">
          <ul>
            <li><a href="https://github.com/zerobaseone" target="_blank" rel="noopener noreferrer">GitHub</a> - my code and projects</li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">[link1]</a> - description</li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">[link2]</a> - description</li>
          </ul>
        </TerminalWindow>
      </section>
    </main>
  );
}

export default Links;
