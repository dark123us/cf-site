import {ReactNode} from 'react';

interface ButtonProps {
    onClick?: () => {}
    children?: ReactNode
}

export const Button = (props: ButtonProps) => {
    const {onClick, children} = props
    return (
        <button type="button" onClick={onClick}>{children}</button>
    )
}
