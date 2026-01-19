import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div style={{
        fontFamily: "'Press Start 2P', cursive",
        fontSize: '2rem',
        color: 'var(--soft-yellow)',
        textShadow: '3px 3px 0 var(--coral), 6px 6px 0 var(--tangerine), 0 0 20px var(--warm-orange)', /* last color is the glow */
        marginBottom: '0rem',
        animation: 'glitch 3s infinite'
      }}>
        adelon.studio
      </div>
      <div style={{
        fontFamily: "'VT323', monospace",
        fontSize: '1.2rem',
        color: 'var(--soft-yellow)',
        animation: 'blink 2.5s infinite',
        marginBottom: '0rem' /** space between text and buttons */
      }}>
        &gt; loading creative assets...█
      </div>
      
      <nav>
        <NavLink to="/" end>home</NavLink>
        <NavLink to="/projects">projects</NavLink>
        <NavLink to="/blog">blog</NavLink>
        <NavLink to="/links">links</NavLink>
      </nav>
    </header>
  );
}

export default Header;