/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ name, setName }) => {
  const inputEl = React.useRef(null);
  if (!name) {
    return (
      <div className="container">
        <label htmlFor="uname">
          <b>Username</b>
          <input type="text" ref={inputEl} placeholder="Enter Username" name="uname" id="uname" required />
        </label>

        <label htmlFor="psw">
          <b>Password</b>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
        </label>
        <div>
          <button type="submit" onClick={() => setName(inputEl.current.value)}>Login</button>
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

Home.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func.isRequired,
};

Home.defaultProps = {
  name: '',
};

export default Home;
