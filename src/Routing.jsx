import { Route, Routes, useRoutes } from 'react-router-dom';
import Demo from './component/Demo';

const Routing = () => {

    let element = useRoutes([


        {path: '/demo', element: <Demo/>}
    ])
}