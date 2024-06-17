import { Route, Routes, useRoutes } from 'react-router-dom';
import Demo from './component/Demo';
import findPeople from './component/findPeople';

const Routing = () => {

    let element = useRoutes([
        { path: '/demo', element: <Demo /> },
    ])
}