import React from 'react'
import {Paper,Typography} from '@material-ui/core'
 const VideoDetail = ({video})=>{
    if(!video) return <div style={{margin:'auto', textAlign:'center' ,fontSize:'50px'}}>Loading...</div>

    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <>
            <Paper elevation={6} style={{height:'50%'}}>
                <iframe frameBorder='0' height='100%' width='100%' title="Video Player " src={videoSrc}/>
            </Paper>
            <Paper elevation={6} style={{padding:'15px'}}>
                <Typography variant='h4' style={{fontSize:'5vw'}}>{video.snippet.title}-{video.snippet.channelTitle}</Typography>
                <Typography variant='subtitle1'style={{fontSize:'3vw'}}>{video.snippet.channelTitle}</Typography>
                {/*<Typography variant='subtitle2'style={{fontSize:'3vw'}}>{video.snippet.description}</Typography>*/}
            </Paper>
        </>
    )
}

export default VideoDetail