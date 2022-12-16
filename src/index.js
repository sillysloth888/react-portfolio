import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createHashRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import './index.css';
import Root from './routes/Root';
import Projects from './routes/Projects';
import RoomkastApp from './routes/RoomkastApp';
import "./fonts/Bitter-VariableFont_wght.ttf";
import About from './routes/About';
import HappinessStory from './routes/HappinessStory';
import AlbumApp from './routes/AlbumApp';
import TroopRedesign from './routes/TroopRedesign';
import ScrollToTop from './hooks/useScrollToTop';

const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { index: true, element: <Projects />},
            {
                path: "about",
                element: <About />
            },
            {
                path: "site-redesign",
                element: <TroopRedesign />
            },
            {
                path: "album-app",
                element: <AlbumApp/>
            },
            {
                path: "roomkast-app",
                element: <RoomkastApp />
            },
            {
                path: "happiness-story",
                element: <HappinessStory />
            },
        ],
    },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);