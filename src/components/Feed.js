import { Box } from "@mui/system";
import Post from "./post";


const Feed = () => {
  return (
    <Box  flex={4} padding={2}> 
    <Post  image={"https://im.rediff.com/movies/2019/jul/02movie1.jpg?w=670&h=900"} name={'Shahid Kapoor'}/>
    <Post  image={"https://media.gettyimages.com/id/1126615978/photo/los-angeles-california-actress-disha-patani-attends-a-basketball-game-between-the-los-angeles.jpg?s=612x612&w=0&k=20&c=Z7Hlx3WqIM4cTVtGITUa7d-oJkpTxTq74vCMw-aFzTo="} name={'Disha Patani'}/>
    <Post image={"https://i.pinimg.com/originals/79/a9/bf/79a9bf61677dd2a9271d42a5e2d721d9.jpg"} name={'Rocky Bhai'}/>

    
    
      
    </Box>
  )
}

export default Feed
