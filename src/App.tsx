import React, { useState } from 'react';
import WelcomeWindow from './components/windows/WelcomeWindow';
import ProjectsWindow from './components/windows/ProjectsWindow';
import ContactWindow from './components/windows/ContactWindow';
import SynthScriptWindow from './components/windows/projects/SynthScriptWindow';
import HueMasterWindow from './components/windows/projects/HueMasterWindow';
import Robot10Window from './components/windows/projects/Robot10Window';
import RoboticaWindow from './components/windows/projects/RoboticaWindow';
import CPToolWindow from './components/windows/projects/CPToolWindow';
import './App.css';

type ProjectName = 'SynthScript' | 'HueMaster' | 'Robot10' | 'Robotica' | 'CPTool';
type WindowName = 'welcome' | 'projects' | 'contact' | ProjectName;

// Main App component
const App: React.FC = () => {
    const [windows, setWindows] = useState<{ [key in WindowName]: boolean }>({
        welcome: true,
        projects: false,
        contact: false,
        SynthScript: false,
        HueMaster: false,
        Robot10: false,
        Robotica: false,
        CPTool: false,
    });

    const [windowOrder, setWindowOrder] = useState<WindowName[]>([]);

    const getZIndex = (windowName: WindowName) => {
        return windowOrder.indexOf(windowName) + 1;
    };

    const bringToFront = (windowName: WindowName) => {
        setWindowOrder((prevOrder) => {
            const newOrder = prevOrder.filter((name) => name !== windowName);
            newOrder.push(windowName);
            return newOrder;
        });
    };

    const openWindow = (windowName: WindowName) => {
        setWindows((prevWindows) => ({
            ...prevWindows,
            [windowName]: true,
        }));
        bringToFront(windowName);
    };

    const closeWindow = (windowName: WindowName) => {
        setWindows((prevWindows) => ({
            ...prevWindows,
            [windowName]: false,
        }));
    };

    const renderWindow = (WindowComponent: React.FC<any>, windowName: WindowName, additionalProps = {}) => {
        return windows[windowName] ? (
            <WindowComponent
                onClose={() => closeWindow(windowName)}
                onClick={() => bringToFront(windowName)}
                zIndex={getZIndex(windowName)}
                {...additionalProps}
            />
        ) : null;
    };

    return (
        <>
            {renderWindow(WelcomeWindow, 'welcome', {
                onProjectsClick: () => openWindow('projects'),
                onContactClick: () => openWindow('contact'),
            })}
            {renderWindow(ProjectsWindow, 'projects', {
                onProjectClick: (projectName: ProjectName) => openWindow(projectName as WindowName),
            })}
            {renderWindow(ContactWindow, 'contact')}
            {renderWindow(SynthScriptWindow, 'SynthScript')}
            {renderWindow(HueMasterWindow, 'HueMaster')}
            {renderWindow(Robot10Window, 'Robot10')}
            {renderWindow(RoboticaWindow, 'Robotica')}
            {renderWindow(CPToolWindow, 'CPTool')}
        </>
    );
};

export type { ProjectName };
export default App;
