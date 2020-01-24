import React, { useState } from 'react';

const Login: React.FC = () => {
  const [state, setState] = useState();
    const action = (e: React.FormEvent) => {
        e.preventDefault();

        // Router.push({
        //     pathname: '/about',
        //     query: { name: state },
        // });
    }

  return (
    <div className="Login">
      <header className="App-header">
        <form onSubmit={action}>
          <label>
            Edit <code>src/App.tsx</code> and save to reload.
        </label>
          <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
          <input type="submit" />
        </form>
      </header>
    </div>
  );
}

export default Login;
