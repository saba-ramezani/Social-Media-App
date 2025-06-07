import { Box} from '@mui/material'
import fakePosts from '../data/posts';
import Post from './Post';


const Feed = () => {
  console.log(fakePosts)
  return (
    <Box flex={4} p={2}>
      {fakePosts.map((post) => (
        <Post 
          key={post.id}
          avatarAlt={post.avatarAlt}
          avatarSrc={post.avatarSrc}
          mediaSrc={post.mediaSrc}
          title={post.title}
          date={post.date}
          description={post.description}  
        />
      ))}
    </Box >
  )
}

export default Feed