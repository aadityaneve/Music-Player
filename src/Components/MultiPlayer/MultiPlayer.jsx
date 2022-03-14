import { useState, useEffect } from 'react';
import Player from '../Player/Player';

function MultiPlayer() {
    const urls = [
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    ];

    return (
        <div className='MultiPlayer'>
            {urls.map((url, i) => {
                return <Player key={i} url={url} />;
            })}
        </div>
    );
}

export default MultiPlayer;
