import React from 'react';
import { Grid } from '@material-ui/core'
import youtube from './api/youtube'
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import VideoList from './components/VideoList'
class App extends React.Component {

  state={
    videos:[],
    selectedVideo: null
  }

  onVideoSelect = (video)=>{
    console.log(video)
    
    this.setState({
      selectedVideo: video
    });
  }

  handleSubmit =async (searchTerm)=>{
    const response=await youtube.get('search',{
      params:{
        part:'snippet',
        maxResults: 5,
        key:'AIzaSyChpAJ9kXMtPSgy51V4PwxZf5yzs96ZtDs',
        q:searchTerm
    }
    })
    

    this.setState({
      videos:response.data.items,
      selectedVideo:response.data.items[0]
    })
  }

  render(){
  return (
    <div>
    <Grid container={true} justify='center' spacing={10} >
      <Grid item={true} xs={11}>
        <Grid container={true} spacing={10}>
          <Grid item={true} xs={12}>
            <SearchBar onFormSubmit={this.handleSubmit}/>
          </Grid>
          <Grid item={true} md={8} xs={12} >
            {/* Video Details */}
            <VideoDetail video={this.state.selectedVideo}/>
          </Grid>
          <Grid item={true} md={4} xs={12}>
            {/* Video List */}
            <VideoList videos={this.state.videos} selectedVideo={this.state.selectedVideo} onVideoSelect={this.onVideoSelect}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </div>
  )};
}

export default App;
