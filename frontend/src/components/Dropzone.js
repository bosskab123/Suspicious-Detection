import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './Dropzone.css';

function Dropzone({ setVideos }) {

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log(acceptedFiles);
        setVideos(acceptedFiles);
    }, []);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    return (
        <div className='container' {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drop your videos here [supported formats: mp4]</p>
        </div>
    )
}

export default Dropzone;