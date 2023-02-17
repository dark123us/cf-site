import {ReactNode} from 'react';
import cls from './PanelBody.module.scss';

interface PanelBodyProps {
    children?: ReactNode
}

export const PanelBody = (props: PanelBodyProps) => {
    const {children} = props
    return (
        <div className={cls.panelBody}>
            {children}
        </div>
    )
}

