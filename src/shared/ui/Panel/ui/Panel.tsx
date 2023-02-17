import { ReactNode } from 'react';
import { PanelHeader } from './PanelHeader'
import { PanelBody } from './PanelBody'
import { CommingSoon } from './CommingSoon'
import cls from './Panel.module.scss'

interface PanelProps {
    children?: ReactNode;
    header?: string;
    body: ReactNode;
}

export const Panel = (props: PanelProps) => {
    const {
        children,
        header,
        body = <CommingSoon />
    } = props
    return (
        <div className={cls.panel}>
            <PanelHeader>
                {header}
            </PanelHeader>
            <PanelBody>
                {body}
                {children}
            </PanelBody>
        </div>
    )
}

