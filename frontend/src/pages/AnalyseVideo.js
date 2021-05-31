import React, { useState, useContext, useEffect} from 'react';
import { UserContext } from '../contexts/UserContext';
import Dropzone from '../components/Dropzone';
import VideoInfoTable from '../components/VideoInfoTable';
import VideoFile from '../components/VideoFile';
import './AnalyseVideo.css';

function AnalyseVideo(){
    
    const { user, setUser } = useContext(UserContext);
    const [videos, setVideos] = useState();

    return (
        <div className='av'>
            <section className='av-h'>
                <h1>Online detection service</h1>
                <p>We provide a service to list out a set of people detecting in the uploaded video</p>
            </section>
            <section className='av-b'>
                <div className='av-b-top'>
                    <div className='av-dropzone'>
                        <Dropzone setVideos={ f => setVideos(f) } />
                    </div>
                </div>
                <div className='av-b-bot'>
                    <div className='av-vtab'>
                        <div className='av-vtab-video'>
                            { videos ? videos.map( (file,index) => <VideoFile key={index} name={file.name.slice(0,8)} status={true}/> ) : console.log("Not have")
                            }
                        </div>
                    </div>
                    <div className='av-dtab'>
                        <VideoInfoTable />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AnalyseVideo;