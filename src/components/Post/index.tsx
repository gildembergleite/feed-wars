import data from '../../../data.json'
import CommentForm from './CommentForm'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'

interface PostProps {
  userId: number
  content: string
  hashtags: string[]
  comments: {
    userId: number
    content: string
  }[]
}

export default function Post(post: PostProps) {
  const userPost = data.users.find((user) => user.id === post.userId)
  if (userPost === undefined) return
  return (
    <div className="bg-zinc-800 text-zinc-50  rounded-lg">
      <div className="p-10">
        <PostHeader
          profileUrl={userPost.profileUrl}
          name={userPost.name}
          role={userPost.role}
        />
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
            const userComment = data.users.find(
              (user) => user.id === comment.userId,
            )

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
