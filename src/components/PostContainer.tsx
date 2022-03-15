import React from 'react'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

type Props = {}

const PostContainer = (props: Props) => {

    const {data: posts} = postAPI.useFetchAllPostsQuery(5)

  return (
    <div className='postContainer'>
        { posts && posts.map(post => 
            <PostItem post={post} />    
        )}
    </div>
  )
}

export default PostContainer