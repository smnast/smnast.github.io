import React, { useState } from "react";
import WelcomeWindow from "./components/windows/WelcomeWindow";
import ProjectsWindow from "./components/windows/ProjectsWindow";
import ContactWindow from "./components/windows/ContactWindow";
import SynthScriptWindow from "./components/windows/projects/SynthScriptWindow";
import HueMasterWindow from "./components/windows/projects/HueMasterWindow";
import KiokuWindow from "./components/windows/projects/Kioku";
import Robot10Window from "./components/windows/projects/Robot10Window";
import RoboticaWindow from "./components/windows/projects/RoboticaWindow";
import CPToolWindow from "./components/windows/projects/CPToolWindow";
import MinesweeperWindow from "./components/windows/minesweeper/MinesweeperWindow";
import PortfolioWindow from "./components/windows/projects/PortfolioWindow";
import WelcomeIcon from "./components/icons/WelcomeIcon";
import MinesweeperIcon from "./components/icons/MinesweeperIcon";
import "./App.css";

type ProjectName =
    | "SynthScript"
    | "HueMaster"
    | "Kioku"
    | "Robot10"
    | "Robotica"
    | "CPTool"
    | "Portfolio";
type WindowName =
    | "welcome"
    | "projects"
    | "contact"
    | "minesweeper"
    | ProjectName;

// Main App component
const App: React.FC = () => {
    const [windows, setWindows] = useState<{ [key in WindowName]: boolean }>({
        welcome: true,
        projects: false,
        contact: false,
        minesweeper: false,
        SynthScript: false,
        HueMaster: false,
        Kioku: false,
        Robot10: false,
        Robotica: false,
        CPTool: false,
        Portfolio: false,
    });

    const [windowOrder, setWindowOrder] = useState<WindowName[]>([]);

    const [selectedIcon, setSelectedIcon] = useState<WindowName | null>(null);
    const [firstSelection, setFirstSelection] = useState<boolean>(false);

    const getZIndex = (windowName: WindowName) => {
        return windowOrder.indexOf(windowName) + 1;
    };

    const isFocused = (windowName: WindowName) => {
        return windowOrder[windowOrder.length - 1] === windowName;
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

    const renderWindow = (
        WindowComponent: React.FC<any>,
        windowName: WindowName,
        additionalProps = {}
    ) => {
        return windows[windowName] ? (
            <WindowComponent
                onClose={() => closeWindow(windowName)}
                onClick={() => bringToFront(windowName)}
                zIndex={getZIndex(windowName)}
                focused={isFocused(windowName)}
                {...additionalProps}
            />
        ) : null;
    };

    const isIconSelected = (iconName: WindowName) => {
        return selectedIcon === iconName;
    };

    const handleIconClick = (iconName: WindowName) => {
        if (firstSelection && iconName === selectedIcon) {
            openWindow(iconName);
        } else {
            setFirstSelection(true);
        }

        setSelectedIcon(iconName);
        setTimeout(() => {
            setFirstSelection(false);
        }, 200);
    };

    const renderIcon = (IconComponent: React.FC<any>, iconName: WindowName) => {
        return (
            <IconComponent
                selected={isIconSelected(iconName)}
                onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    handleIconClick(iconName);
                }}
            />
        );
    };

    return (
        <div id="view" onClick={() => setSelectedIcon(null)}>
            {renderWindow(WelcomeWindow, "welcome", {
                onProjectsClick: () => openWindow("projects"),
                onContactClick: () => openWindow("contact"),
            })}
            {renderWindow(MinesweeperWindow, "minesweeper")}
            {renderWindow(ProjectsWindow, "projects", {
                onProjectClick: (projectName: ProjectName) =>
                    openWindow(projectName as WindowName),
            })}
            {renderWindow(ContactWindow, "contact")}
            {renderWindow(SynthScriptWindow, "SynthScript")}
            {renderWindow(HueMasterWindow, "HueMaster")}
            {renderWindow(KiokuWindow, "Kioku")}
            {renderWindow(Robot10Window, "Robot10")}
            {renderWindow(RoboticaWindow, "Robotica")}
            {renderWindow(CPToolWindow, "CPTool")}
            {renderWindow(PortfolioWindow, "Portfolio")}

            {renderIcon(WelcomeIcon, "welcome")}
            {renderIcon(MinesweeperIcon, "minesweeper")}
        </div>
    );
};

export type { ProjectName };
export default App;
