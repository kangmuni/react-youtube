import React, { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h3 className={styles.title}>YouTube</h3>
      </div>
      <div className={styles.search}>
        <input
          ref={inputRef}
          className={styles.input}
          type="search"
          placeholder="search"
          onKeyPress={onKeyPress}
        />
        <button className={styles.button} type="submit" onClick={onClick}>
          <img
            className={styles.img_search}
            src="/images/search.png"
            alt="search"
          />
        </button>
      </div>
      <ul className={styles.icons}>
        <li>
          <button>
            <i className="fas fa-video"></i>
          </button>
        </li>
        <li>
          <button>
            <i className="fas fa-bell"></i>
          </button>
        </li>
        <li>
          <button>
            <i className="fas fa-id-badge"></i>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default SearchHeader;
