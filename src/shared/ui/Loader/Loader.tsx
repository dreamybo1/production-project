import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = (props) => {
    const { children, className } = props;
    const { t, i18n } = useTranslation();

    return (
        <div className={classNames('lds-ripple', {}, [className])}>
            <div />
            <div />
        </div>
    );
};
