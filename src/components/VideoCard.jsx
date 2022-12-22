import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle,  } from "../utils/constants"

const VideoCard = ({ video: { id:{ videoId }, snippet }  }) => {
  return (
    <Card sx={{ width: { md: '320px', xs: '100%'}, boxShadow: 'none', borderRadius: 0}}> {/* on medium devices 320px of width on small devices is 100% width */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia 
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{width: 358, height: 180 }}
      />
      </Link>
      <CardContent sx={{backgroundColor: '#1e1e1e', height: '80px'}} />
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="white" sx={{backgroundColor: '#1e1e1e', display: 'flex', mt: -10}}>
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}  {/* from 0-60 characters */}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant="subtitle2" fontWeight="bold" color="gray" sx={{backgroundColor: '#1e1111'}}>
          {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)} <CheckCircle sx={{ fontSize: 12, color: 'green', ml: '5px'}}/> {/* from 0-60 characters */}
        </Typography>
      
      </Link>
    </Card>
  )
}

export default VideoCard