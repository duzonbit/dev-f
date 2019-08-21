import React from 'react'
import styles from './CommonFooter.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const CommonFooter = () => {
  return (
    <div className={cx('footer')}>
      <Link to="/" className={cx('brand')}>bbs</Link>
    </div>
  )
}

export default CommonFooter
