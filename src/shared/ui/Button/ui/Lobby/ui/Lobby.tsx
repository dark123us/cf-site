import {ReactNode} from 'react';
import cls from './Lobby.module.scss';

interface LobbyProps {
    onClick?: () => {}
    children?: ReactNode
}

export const Lobby = (props: LobbyProps) => {
    const {
        onClick,
        children = 'LEAVE LOBBY'
    } = props
    return (
        <button className={cls.lobby} type="button" onClick={onClick}>
            <div className={cls.text}>
                {children}
            </div>
        </button>
    )
}

