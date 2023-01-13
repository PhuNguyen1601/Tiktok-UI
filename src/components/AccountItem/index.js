import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Images';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f6fc2d1ac627e44255324f0459993238~c5_100x100.jpeg?x-expires=1673694000&x-signature=b4z%2FHQXQmaU3Ri3pkMUcNXtIfdg%3D"
                alt="User"
            ></Image>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Gia Phú</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>NguyenGiaPhu</span>
            </div>
        </div>
    );
}

export default AccountItem;
