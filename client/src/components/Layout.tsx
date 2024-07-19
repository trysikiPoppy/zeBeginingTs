import React, { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <div className="layout">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/nasa">NASA</Link></li>
            <li><Link to="/live-stream">Live Stream</Link></li>
            <li><Link to="/stellarium">Stellarium</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
