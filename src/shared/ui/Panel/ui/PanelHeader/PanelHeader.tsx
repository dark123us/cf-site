import {ReactNode} from 'react';
import cls from './PanelHeader.module.scss'

interface PanelHeaderProps {
    children?: ReactNode
}

export const PanelHeader = (props: PanelHeaderProps) => {
    const {children} = props
    return (
        <div className={cls.panelHeader}>
            <div className={cls.text}>
                {children}
            </div>
        </div>
    )
}

