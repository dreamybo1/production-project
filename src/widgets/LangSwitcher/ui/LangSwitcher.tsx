import { classNames } from "shared/lib/classNames/classNames"
import styles from './LangSwitcher.module.scss'
import { FC } from "react";
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {

    const { className } = props
    const { t, i18n } = useTranslation()

    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button 
            onClick={onToggle} 
            className={classNames(styles.LangSwitcher, {}, [className])}
        >
            {t("Язык")}
        </Button>
    )
}