import React, { useState, useEffect } from 'react'
import { getAllPosts, deletePost } from '../services/postService'
import '../styles/landing.css'

// Components
import PostCard from '../components/Post/PostCard'
import CreatePost from "../pages/CreatePost/CreatePost"


const PostList = (props) => {
  const [posts, setPosts] = useState([])



  const handleDeletePost = async (postId) => {
    try {
      await deletePost(postId)
      setPosts(posts.filter((post) => post._id !== postId))
    } catch (error) {
      throw error
    }
  }


  useEffect(() => {
    const fetchAllPosts = async () => {
      const postData = await getAllPosts()
      setPosts(postData)
    }
    fetchAllPosts()
    return () => { setPosts([]) }
  }, [])

  return (
    <div className="layout">
      <h1 className='poststitle'>Posts</h1>
      <h3 className='subtitle'>Share your thoughts</h3>
      <CreatePost
      user={props.user}
      posts={posts}
      setPosts={setPosts}
      />
      {posts.length&&
      posts?.map((post) => (
        <PostCard
          user={props.user}
          post={post}
          key={post._id}
          handleDeletePost={handleDeletePost}
          posts={posts}
          setPosts={setPosts}
          />
      ))}
    </div>
  )
}

export default PostList