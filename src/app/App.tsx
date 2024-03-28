import {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/Themes';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets';

const App = () => {
	const {theme} = useTheme();
	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<AppRouter />
		</div>
	);
};

export default App;
