import React, { useEffect, useState } from 'react';
import './MinesweeperGame.css';

const MinesweeperGame: React.FC = () => {
    const NUM_MINES = 8;
    const SIZE = 9;
    const TOUCH_FLAG_DELAY = 200;

    const [tilesUsed, setTilesUsed] = useState<boolean[][]>(
        Array.from({ length: SIZE }, () => Array(SIZE).fill(false))
    );
    const [tilesToBeRevealed, setTilesToBeRevealed] = useState<boolean[][]>(
        Array.from({ length: SIZE }, () => Array(SIZE).fill(false))
    );
    const [tilesMines, setTilesMines] = useState<boolean[][]>(
        Array.from({ length: SIZE }, () => Array(SIZE).fill(false))
    );
    const [tilesNumbers, setTilesNumbers] = useState<number[][]>(
        Array.from({ length: SIZE }, () => Array(SIZE).fill(0))
    );
    const [tilesFlags, setTilesFlags] = useState<boolean[][]>(
        Array.from({ length: SIZE }, () => Array(SIZE).fill(false))
    );
    const [tilesHit, setTilesHit] = useState<boolean[][]>(
        Array.from({ length: SIZE }, () => Array(SIZE).fill(false))
    );

    const [gameOver, setGameOver] = useState<boolean>(false);
    const [gameWon, setGameWon] = useState<boolean>(false);

    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
    const [currentRow, setCurrentRow] = useState<number | null>(null);
    const [currentCol, setCurrentCol] = useState<number | null>(null);

    const [touchFlagTimeout, setTouchFlagTimeout] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        initialize();
    }, []);

    const initialize = () => {
        initializeMines();
        setGameOver(false);
        setTilesUsed(Array.from({ length: SIZE }, () => Array(SIZE).fill(false)));
        setTilesFlags(Array.from({ length: SIZE }, () => Array(SIZE).fill(false)));
        setTilesHit(Array.from({ length: SIZE }, () => Array(SIZE).fill(false)));
        setCurrentRow(null);
        setCurrentCol(null);
        setIsMouseDown(false);
    }

    const initializeMines = () => {
        const newTilesMines: Array<Array<boolean>> = Array.from({ length: SIZE }, () => Array(SIZE).fill(false));
        let minesPlaced = 0;
        while (minesPlaced < NUM_MINES) {
            const rowIndex = Math.floor(Math.random() * SIZE);
            const colIndex = Math.floor(Math.random() * SIZE);
            if (!newTilesMines[rowIndex][colIndex]) {
                newTilesMines[rowIndex][colIndex] = true;
                minesPlaced++;
            }
        }
        setTilesMines(newTilesMines);
        initializeNumbers(newTilesMines);
    }

    const initializeNumbers = (mines: Array<Array<boolean>>) => {
        const newTilesNumbers = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
        for (let row = 0; row < SIZE; row++) {
            for (let col = 0; col < SIZE; col++) {
                if (mines[row][col]) {
                    for (let i = -1; i <= 1; i++) {
                        for (let j = -1; j <= 1; j++) {
                            const newRow = row + i;
                            const newCol = col + j;
                            if (newRow >= 0 && newRow < SIZE && newCol >= 0 && newCol < SIZE) {
                                newTilesNumbers[newRow][newCol]++;
                            }
                        }
                    }
                }
            }
        }
        setTilesNumbers(newTilesNumbers);
    }

    const handleMouseDown = (rowIndex: number, colIndex: number, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (gameOver) {
            return;
        }

        setCurrentRow(rowIndex);
        setCurrentCol(colIndex);

        if (event.type === 'mousedown' && (event as React.MouseEvent).button === 0) {
            setIsMouseDown(true);
            updateTilesToBeRevealed(rowIndex, colIndex);
        } else if (event.type === 'mousedown' && (event as React.MouseEvent).button === 2) {
            flagTile(rowIndex, colIndex);
        } else if (event.type === 'touchstart') {
            setIsMouseDown(true);
            updateTilesToBeRevealed(rowIndex, colIndex);
        }
    };

    const handleMouseUp = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (gameOver || !isMouseDown) {
            return;
        }

        if (event.type === 'mouseup' && (event as React.MouseEvent).button === 0) {
            setIsMouseDown(false);
            if (currentRow !== null && currentCol !== null) {
                revealTile(currentRow, currentCol);
            }
            updateTilesToBeRevealed(null, null);
        } else if (event.type === 'touchend') {
            setIsMouseDown(false);
            if (currentRow !== null && currentCol !== null) {
                revealTile(currentRow, currentCol);
            }
            updateTilesToBeRevealed(null, null);
        }
    };

    const handleTouchStart = (rowIndex: number, colIndex: number, event: React.TouchEvent<HTMLDivElement>) => {
        setIsMouseDown(true);
        setTouchFlagTimeout(setTimeout(() => {
            flagTile(rowIndex, colIndex);
        }, TOUCH_FLAG_DELAY));
    }

    const handleTouchEnd = (rowIndex: number, colIndex: number, event: React.TouchEvent<HTMLDivElement>) => {
        setIsMouseDown(false);
        if (touchFlagTimeout) {
            clearTimeout(touchFlagTimeout);
            setTouchFlagTimeout(null);
        } else {
            revealTile(rowIndex, colIndex);
        }
    }

    const revealTile = (rowIndex: number, colIndex: number) => {
        if (tilesFlags[rowIndex][colIndex]) {
            return;
        }

        const visited = Array.from({ length: SIZE }, () => Array(SIZE).fill(false));
        const revealAdjacentTiles = (rowIndex: number, colIndex: number) => {
            if (rowIndex < 0 || rowIndex >= SIZE || colIndex < 0 || colIndex >= SIZE) return;
            if (visited[rowIndex][colIndex] || tilesUsed[rowIndex][colIndex] || tilesFlags[rowIndex][colIndex]) return;

            visited[rowIndex][colIndex] = true;
            updateTileUsed(rowIndex, colIndex, true);
            if (tilesMines[rowIndex][colIndex]) {
                hitMine(rowIndex, colIndex);
            }

            if (tilesNumbers[rowIndex][colIndex] === 0) {
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        if (i !== 0 || j !== 0) {
                            revealAdjacentTiles(rowIndex + i, colIndex + j);
                        }
                    }
                }
            }
        };

        if (tilesUsed[rowIndex][colIndex]) {
            let adjacentFlags = 0;
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    const newRow = rowIndex + i;
                    const newCol = colIndex + j;
                    if (newRow >= 0 && newRow < SIZE && newCol >= 0 && newCol < SIZE) {
                        if (tilesFlags[newRow][newCol]) {
                            adjacentFlags++;
                        }
                    }
                }
            }

            if (adjacentFlags === tilesNumbers[rowIndex][colIndex]) {
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        const newRow = rowIndex + i;
                        const newCol = colIndex + j;
                        if (newRow >= 0 && newRow < SIZE && newCol >= 0 && newCol < SIZE) {
                            revealAdjacentTiles(newRow, newCol);
                        }
                    }
                }
            }
        } else {
            revealAdjacentTiles(rowIndex, colIndex);
        }
    }

    const hitMine = (rowIndex: number, colIndex: number) => {
        updateTileHit(rowIndex, colIndex, true);
        endGame(false);
    }

    useEffect(() => {
        updateWin();
    }, [tilesUsed]);

    const updateWin = () => {
        let win = true;
        for (let row = 0; row < SIZE; row++) {
            for (let col = 0; col < SIZE; col++) {
                if (!tilesUsed[row][col] && !tilesMines[row][col]) {
                    win = false;
                }
            }
        }

        if (win) {
            endGame(true);
        }
    }

    const endGame = (win: boolean) => {
        setGameOver(true);
        setGameWon(win);

        for (let row = 0; row < SIZE; row++) {
            for (let col = 0; col < SIZE; col++) {
                if (tilesMines[row][col] && !tilesFlags[row][col]) {
                    if (win) {
                        flagTile(row, col);
                    } else {
                        updateTileUsed(row, col, true);
                    }
                }
            }
        }
    }

    const updateTileHit = (rowIndex: number, colIndex: number, value: boolean) => {
        setTilesHit(prevTiles => {
            const newTilesHit = [...prevTiles];
            newTilesHit[rowIndex] = [...newTilesHit[rowIndex]];
            newTilesHit[rowIndex][colIndex] = value;
            return newTilesHit;
        });
    }

    const flagTile = (rowIndex: number, colIndex: number) => {
        if (tilesUsed[rowIndex][colIndex]) {
            return;
        }

        setTilesFlags(prevTiles => {
            const newTilesFlags = [...prevTiles];
            newTilesFlags[rowIndex] = [...newTilesFlags[rowIndex]];
            newTilesFlags[rowIndex][colIndex] = !newTilesFlags[rowIndex][colIndex];
            return newTilesFlags;
        });
    }

    const countFlags = () => {
        let flags = 0;
        for (let row = 0; row < SIZE; row++) {
            for (let col = 0; col < SIZE; col++) {
                if (tilesFlags[row][col]) {
                    flags++;
                }
            }
        }
        return flags;
    }

    const updateTileUsed = (rowIndex: number, colIndex: number, value: boolean) => {
        setTilesUsed(prevTiles => {
            const newTilesUsed = [...prevTiles];
            newTilesUsed[rowIndex] = [...newTilesUsed[rowIndex]];
            newTilesUsed[rowIndex][colIndex] = value;
            return newTilesUsed;
        });
    };

    const handleMouseEnter = (rowIndex: number, colIndex: number) => {
        setCurrentCol(colIndex);
        setCurrentRow(rowIndex);
        updateTilesToBeRevealed(rowIndex, colIndex);
    };

    const handleMouseLeave = () => {
        setCurrentCol(null);
        setCurrentRow(null);
        setIsMouseDown(false);
        updateTilesToBeRevealed(null, null);
    }

    const updateTilesToBeRevealed = (rowIndex: number | null, colIndex: number | null) => {
        if (rowIndex === null || colIndex === null) {
            setTilesToBeRevealed(Array.from({ length: SIZE }, () => Array(SIZE).fill(false)));
        } else if (tilesUsed[rowIndex][colIndex]) {
            setTilesToBeRevealed(() => {
                const newTilesToBeRevealed = Array.from({ length: SIZE }, () => Array(SIZE).fill(false));
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        const newRow = rowIndex + i;
                        const newCol = colIndex + j;
                        if (newRow >= 0 && newRow < SIZE && newCol >= 0 && newCol < SIZE) {
                            newTilesToBeRevealed[newRow][newCol] = true;
                        }
                    }
                }
                return newTilesToBeRevealed;
            });
        } else {
            setTilesToBeRevealed(() => {
                const newTilesToBeRevealed = Array.from({ length: SIZE }, () => Array(SIZE).fill(false));
                newTilesToBeRevealed[rowIndex][colIndex] = true;
                return newTilesToBeRevealed;
            });
        }
    }

    const isMouseSweeping = (rowIndex: number, colIndex: number) => {
        return isMouseDown && tilesToBeRevealed[rowIndex][colIndex] && !tilesFlags[rowIndex][colIndex];
    };

    return (
        <div className="game outer-border">
            <div className="header inner-border">
                <div className="game-button">
                    <b>{NUM_MINES - countFlags()}</b>
                </div>
                <div className="game-button clickable" onClick={() => initialize()}>
                    {gameOver ? (gameWon ? '🤓' : '💀') : '😺'}
                </div>
            </div>
            <div className="field inner-border" onMouseLeave={() => handleMouseLeave()}>
                {Array.from({ length: SIZE }).map((_, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        {Array.from({ length: SIZE }).map((_, colIndex) => (
                            <div
                                className="tile"
                                key={colIndex}
                                onMouseDown={(event) => handleMouseDown(rowIndex, colIndex, event)}
                                onMouseUp={(event) => handleMouseUp(event)}
                                onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
                                onTouchStart={(event) => handleTouchStart(rowIndex, colIndex, event)}
                                onTouchEnd={(event) => handleTouchEnd(rowIndex, colIndex, event)}
                                onContextMenu={(e) => e.preventDefault()}
                            >
                                <div
                                    className={`tile-contents 
                                        ${tilesHit[rowIndex][colIndex] ? 'hit-mine' : ''}
                                        ${gameOver && tilesMines[rowIndex][colIndex] ? 'mine' : ''}
                                        number-${tilesNumbers[rowIndex][colIndex]} 
                                        ${(tilesUsed[rowIndex][colIndex] || isMouseSweeping(rowIndex, colIndex)) ? 'used' : 'unused'}`}
                                >
                                    {tilesUsed[rowIndex][colIndex] && (
                                        tilesMines[rowIndex][colIndex] ? '💣' :
                                            tilesNumbers[rowIndex][colIndex] > 0 ? tilesNumbers[rowIndex][colIndex] : ''
                                    )}
                                    {!tilesUsed[rowIndex][colIndex] && tilesFlags[rowIndex][colIndex] && '🚩'}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MinesweeperGame;