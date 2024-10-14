import React, { useCallback, useState, useEffect, useRef } from 'react';
import './Window.css';

interface WindowProps {
    title: string;
    windowWidth: number;
    windowHeight: number;
    children: React.ReactNode;
    onClose: () => void;
    onClick: () => void;
    zIndex: number;
}

const Window: React.FC<WindowProps> = ({ title, windowWidth, windowHeight, children, onClose, onClick, zIndex }) => {
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [initialized, setInitialized] = useState(false);
    const offset = useRef({ x: 0, y: 0 });
    const relativePosition = useRef({ x: 0, y: 0 });
    const ref = useRef<HTMLDivElement>(null);

    const [currentWidth, setCurrentWidth] = useState(windowWidth);
    const [currentHeight, setCurrentHeight] = useState(windowHeight);

    const updatePosition = useCallback(() => {
        const x = (window.innerWidth - currentWidth) / 2 + relativePosition.current.x;
        let y = (window.innerHeight - currentHeight) / 2 + relativePosition.current.y;

        const titleBarHeight = 30; // Adjust if needed
        if (y < 0) y = 0;
        else if (y > window.innerHeight - titleBarHeight) {
            y = window.innerHeight - titleBarHeight;
        }

        setPosition({ x, y });
    }, [currentWidth, currentHeight]);

    useEffect(() => {
        if (ref.current) {
            setInitialized(true); // Mark initialization after the first render
            updatePosition();
        }
    }, [updatePosition]);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            if (ref.current) {
                setCurrentWidth(ref.current.offsetWidth);
                setCurrentHeight(ref.current.offsetHeight);
            }
            updatePosition();
        });

        if (ref.current) resizeObserver.observe(ref.current);
        window.addEventListener('resize', updatePosition);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', updatePosition);
        };
    }, [updatePosition]);

    // Initialize the window position with a slight random offset
    useEffect(() => {
        if (initialized) return;
        relativePosition.current = {
            x: Math.random() * 50 - 25,
            y: Math.random() * 50 - 25,
        };
        updatePosition();
    }, [updatePosition]);

    const handleMouseDown = (e: React.MouseEvent) => {
        if ((e.target as HTMLElement).classList.contains('xp-close-button')) return;
        setIsDragging(true);
        offset.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        };
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if ((e.target as HTMLElement).classList.contains('xp-close-button')) return;
        setIsDragging(true);
        offset.current = {
            x: e.touches[0].clientX - position.x,
            y: e.touches[0].clientY - position.y,
        };
    }

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!isDragging) return;
            const newClientX = Math.max(0, Math.min(e.clientX, window.innerWidth));
            const newClientY = Math.max(0, Math.min(e.clientY, window.innerHeight));

            relativePosition.current = {
                x: newClientX - offset.current.x - (window.innerWidth - currentWidth) / 2,
                y: newClientY - offset.current.y - (window.innerHeight - currentHeight) / 2,
            };
            setPosition({
                x: newClientX - offset.current.x,
                y: newClientY - offset.current.y,
            });
        },
        [isDragging, currentWidth, currentHeight]
    );

    const handleTouchMove = useCallback(
        (e: TouchEvent) => {
            if (!isDragging) return;
            const newClientX = Math.max(0, Math.min(e.touches[0].clientX, window.innerWidth));
            const newClientY = Math.max(0, Math.min(e.touches[0].clientY, window.innerHeight));

            relativePosition.current = {
                x: newClientX - offset.current.x - (window.innerWidth - currentWidth) / 2,
                y: newClientY - offset.current.y - (window.innerHeight - currentHeight) / 2,
            };
            setPosition({
                x: newClientX - offset.current.x,
                y: newClientY - offset.current.y,
            });
        },
        [isDragging, currentWidth, currentHeight]
    );

    const handleMouseUp = useCallback(() => setIsDragging(false), []);
    const handleTouchEnd = useCallback(() => setIsDragging(false), []);

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [handleMouseMove, handleMouseUp]);
    
    return (
        <div
            className="xp-container"
            style={{
                position: 'absolute',
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `${windowWidth}px`,
                height: `${windowHeight}px`,
                zIndex,
                opacity: initialized ? 1 : 0,
                transition: 'opacity 0.1s ease-in-out',
            }}
            onMouseDown={onClick}
            onTouchStart={onClick}
            ref={ref}
        >
            <div className="xp-title-bar" onMouseDown={handleMouseDown} onTouchStart={handleTouchStart}>
                <span className="xp-title">{title}</span>
                <button className="xp-close-button" onClick={onClose}>&#x00D7;</button>
            </div>
            <div className="xp-window">
                <div className="xp-content">{children}</div>
            </div>
        </div>
    );
};

export default Window;