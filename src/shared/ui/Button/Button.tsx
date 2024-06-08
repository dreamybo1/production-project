import { classNames } from "shared/lib/classNames/classNames"
import styles from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from "react";

export enum ButtonTheme {
    CLEAR = "clear"
}


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme
}


export const Button: FC<ButtonProps> = (props) => {

    const {children, className, theme = ButtonTheme.CLEAR, ...otherProps} = props

    return (
        <button 
            className={classNames(styles.Button, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}