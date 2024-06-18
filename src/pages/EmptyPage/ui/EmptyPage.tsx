import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './EmptyPage.module.scss';

interface EmptyPageProps {
    className?: string;
}

export const EmptyPage: FC<EmptyPageProps> = (props) => {
    const { children, className } = props;
    const { t, i18n } = useTranslation();

    return (
        <div className={classNames(styles.EmptyPage, {}, [className])}>
            {t('Страница не найдена')}
            ...
        </div>
    );
};
