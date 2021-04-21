import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
    inputRef.current.value = '';
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  console.log('header'); // 메모를 써도 콜백함수 때문에 props이 계속 바뀌어 리렌더가 계속 발생하고 있음

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
      <div className={styles.icons}>
        <button>
          <i className="fas fa-video"></i>
        </button>
        <button>
          <i className="fas fa-bell"></i>
        </button>
        <button>
          <i className="fas fa-id-badge"></i>
        </button>
      </div>
    </header>
  );
});

export default SearchHeader;
