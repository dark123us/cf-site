import { ReactNode } from 'react';
import cls from './Button.module.scss';


export const enum TypeButton {
    DEFAULT = 'default',
    WARNING = 'warn',
    OVERLAY = 'overlay',
}

interface ButtonProps {
    onClick?: () => {}
    children?: ReactNode
    type?: TypeButton
    className ?: string
    classText ?: string
}

export const Button = (props: ButtonProps) => {
    const {
        onClick,
        children,
        type=TypeButton.DEFAULT,
        className=cls.button,
        classText=cls.text,
        ...otherProps
    } = props;

    return (
            <button 
                type="button" 
                onClick={onClick}
                className={cls[type + 'Back']}
                {...otherProps}
            >
                <span className={cls[type+'Text']}>
                    {children}
                </span>
            </button>
    )
}
