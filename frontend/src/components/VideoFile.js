import file_pic from "../assets/file.png";
import "./VideoFile.css";

function VideoFile ({ name, status }){

    return (
        <div className='videofile'>
            { status ? 
                <div className='file-lpart'>
                    <img className='file-pic' src={file_pic}/>
                    <span className='file-name'>{name}</span>
                </div>
                :
                <div className='file-lpart'>
                    <img className='file-pic' src={file_pic}/>
                    <span className='file-name'>{name}</span>
                </div>
            }

        </div>
    )

}

export default VideoFile;