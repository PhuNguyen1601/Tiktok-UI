import styles from './Image.module.scss';
import classNames from 'classnames/bind';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    const classes = cx('wrapper', { [className]: className });
    return <img className={classes} ref={ref} {...props} alt={alt} src={fallback || src} onError={handleError} />;
});

export default Image;
