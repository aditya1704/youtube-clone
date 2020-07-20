import React from 'react'
import {Grid,Paper,Typography,Card,CardMedia,CardContent} from '@material-ui/core'
export default function VideoItem({video,onVideoSelect}) {

    //src={video.snippet.thumbnails.medium.url
    console.log(video)
    return (
        <Grid item xs={12}>
            <Paper style={{alignItems:'center',cursor:'pointer'}} onClick= {()=>onVideoSelect(video)} >
                <Card>
                    <CardMedia component='img' image={video.snippet.thumbnails.medium.url}/>
                    <CardContent>
                        <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
                    </CardContent>
                </Card>
            </Paper>
        </Grid>
    )
}
