import React from 'react';
import Window from '../Window';
import { ProjectName } from '../../App'

interface ProjectsWindowProps {
    onClose: () => void;
    onClick: () => void;
    onProjectClick: (projectName: ProjectName) => void;
    zIndex: number;
    focused: boolean;
}

const ProjectsWindow: React.FC<ProjectsWindowProps> = ({ onClose, onClick, onProjectClick, zIndex, focused }) => {
    return (
        <Window title="Projects" windowWidth={500} windowHeight={500} onClose={onClose} onClick={onClick} zIndex={zIndex} focused={focused}>
            <p>Here are some of my projects...</p>
            <ul className="project-list">
                <li>
                    <span className="project-item link" onClick={() => {onProjectClick('SynthScript')}}>SynthScript</span>
                    <ul>
                        <li>Custom programming language</li>
                        <li>Written in C++</li>
                        <li>Tested with doctest and GitHub Actions</li>
                    </ul>
                </li>
                <li>
                    <span className="project-item link" onClick={() => {onProjectClick('HueMaster')}}>HueMaster</span>
                    <ul>
                        <li>Generates a Linux colour scheme from an image</li>
                        <li>Written in C++</li>
                        <li>Uses OpenCV and toml11 libraries</li>
                    </ul>
                </li>
                <li>
                    <span className="project-item link" onClick={() => {onProjectClick('Robot10')}}>Robot10</span>
                    <ul>
                        <li>VEX Robotics autonomous and driver code</li>
                        <li>Written in C++</li>
                        <li>Uses PROS and LemLib libraries</li>
                    </ul>
                </li>
                <li>
                    <span className="project-item link" onClick={() => {onProjectClick('Robotica')}}>Robotica</span>
                    <ul>
                        <li>VEX Robotics prototyping application</li>
                        <li>Written in C# and GDScript with the Godot Engine</li>
                    </ul>
                </li>
                <li>
                    <span className="project-item link" onClick={() => {onProjectClick('CPTool')}}>cp-tool</span>
                    <ul>
                        <li>Command-line interface for competitive programming</li>
                        <li>Written in Python and Bash</li>
                    </ul>
                </li>
            </ul>
        </Window>
    );
}

export default ProjectsWindow;
