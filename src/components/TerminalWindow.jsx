function TerminalWindow({ title, children }) {
  return (
    <div className="terminal-window">
      <div className="terminal-header">{title}</div>
      <div className="terminal-content">
        {children}
      </div>
    </div>
  );
}

export default TerminalWindow;
