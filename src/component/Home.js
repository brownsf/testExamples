/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const Home = ({ name, setName }) => {
  if (!name) {
    return (
      <div className="container">
        <label htmlFor="uname">
          <b>Username</b>
          <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter Username" name="uname" id="uname" required />
        </label>

        <label htmlFor="psw">
          <b>Password</b>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
        </label>
        <div>
          <button type="submit">Login</button>
          <label htmlFor="remember">
            <input type="checkbox" checked="checked" name="remember" />
            {' '}
Remember me
          </label>
        </div>

      </div>
    );
  }

  return <div>Home</div>;
};

export default Home;
