import { classNames } from "shared/lib/classNames/classNames"
import styles from './ThemeSwitcher.module.scss'
import { FC } from "react";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import DarkIcon from "shared/assets/icons/theme-dark.svg"
import LightIcon from "shared/assets/icons/theme-light.svg"
import { Button } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const {theme, toggleTheme} = useTheme()

    const { className } = props

    return (
        <Button 
            className={classNames(styles.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}