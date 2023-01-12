import styles from './DefaultComponent.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultComponent() {
    return <div className={cx('wrapper')}></div>;
}

export default DefaultComponent;
