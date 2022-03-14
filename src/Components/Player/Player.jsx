import { useState, useEffect } from 'react';
import { useStyles } from './Styles';

function Player({ url }) {
    const [isPlaying, setIsPlaying] = useState(null);
    const [audioElement] = useState(new Audio(url));

    useEffect(() => {
        if (isPlaying === null) {
            setIsPlaying(null);
        } else if (isPlaying) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    }, [isPlaying]);

    const handlePlayButton = () => {
        if (isPlaying === null) {
            setIsPlaying(true);
        } else if (!isPlaying) {
            setIsPlaying(true);
        } else {
            setIsPlaying(false);
        }
    };

    const classes = useStyles();

    return (
        <div className='App'>
            <button onClick={handlePlayButton} className={classes.root}>
                {isPlaying === null || isPlaying === false ? 'PLAY' : 'PAUSE'}
            </button>
        </div>
    );
}

export default Player;
