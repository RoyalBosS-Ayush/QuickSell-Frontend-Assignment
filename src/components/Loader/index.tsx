import React from 'react';
import './loader.css'

function Loader({ fullscreen = true }: { fullscreen?: boolean }) {
    return (
        <div className={`loader-container ${fullscreen && "fullscreen"}`}>
            <span className='loader'>Loading...</span>
        </div>
    );
}

export default Loader;