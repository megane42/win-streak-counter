import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './app';
import styles   from './index.module.css';

ReactDOM.render(
  <React.StrictMode>
    <div className={styles.webfont}>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
