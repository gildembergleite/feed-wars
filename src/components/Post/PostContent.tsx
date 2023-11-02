'use client'
import { DataService } from '@/services/DataServices'
import { Post, User, Comment } from '../../../data'
import CommentForm from './CommentForm'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'
import { useState } from 'react'

interface PostContentProps {
  users: User[]
  post: Post
}

export default function PostContent({ users, post }: PostContentProps) {
  const [comments, setComments] = useState<Comment[]>(post.comments)

  const data = new DataService()
  const user = data.getUserById(post.userId)

  if (!user) return

  function addComment(newComment: Comment) {
    setComments([...comments, newComment])
  }

  function deleteComment(comment: Comment) {
    const index = comments.findIndex((c) => c === comment)

    if (index !== -1) {
      const updatedComments = [...comments]
      updatedComments.splice(index, 1)
      setComments(updatedComments)
    }
  }

  return (
    <div className="bg-zinc-800 text-zinc-50  rounded-lg">
      <div className="p-10">
        <PostHeader user={user} date={post.publishedAt} />
        <article className="py-6">
          <p className="pb-4">{post.content}</p>
          {post.hashtags.map((hashtag, index) => (
            <a href="#" className="text-sky-600" key={index}>
              #{hashtag}{' '}
            </a>
          ))}
        </article>
        <footer>
          <CommentForm onAddComment={addComment} />
          {comments.map((comment, index) => {
            const userComment = users.find((user) => user.id === comment.userId)

            if (userComment) {
              return (
                <PostFooter
                  key={index}
                  user={userComment}
                  comment={comment}
                  onDeleteComment={deleteComment}
                />
              )
            }
            return null
          })}
        </footer>
      </div>
    </div>
  )
}
