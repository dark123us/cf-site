import {classNames} from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import {memo, ReactNode} from 'react';
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
    children?: ReactNode;
}

export const MainPage = memo((props: MainPageProps) => {
    const {
        className,
        children,
    } = props;
    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            {children}
            MainPage
            <Button>Hello</Button>
        </div>
    );
});
