import React, { useState } from 'react';
import './login.scss';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [state, setState] = useState();
  const history = useHistory();

  const action = (e: React.FormEvent) => {
    e.preventDefault();
    history.push(`${process.env.REACT_APP_BASE_URL}/about`, { name : state });
  }

  return (
    <div className="Login">
      <form onSubmit={action}>
        <label>
          Edit <code>src/App.tsx</code> and save to reload.
        </label>
        <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
