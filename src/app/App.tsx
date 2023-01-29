import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [])}>
            <AppRouter />
        </div>
    );
};
export default App;
