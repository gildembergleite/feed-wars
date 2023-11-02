import { DataService } from '@/services/DataServices'
import { Post, User } from '../../../data'
import CommentForm from './CommentForm'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'

interface PostContentProps {
  users: User[]
  post: Post
}

export default function PostContent({ users, post }: PostContentProps) {
  const data = new DataService()
  const user = data.getUserById(post.userId)

  if (!user) return

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
          <CommentForm />
          {post.comments.map((comment, index) => {
            const userComment = users.find((user) => user.id === comment.userId)

            if (userComment) {
              return (
                <PostFooter
                  key={index}
                  profileUrl={userComment.profileUrl}
                  name={userComment.name}
                  content={comment.content}
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
