import { Post, User } from '../../../data'
import PostContent from './PostContent'

interface PostSectionProps {
  users: User[]
  posts: Post[]
}

export default function PostSection({ users, posts }: PostSectionProps) {
  return (
    <>
      {posts.map((post) => (
        <PostContent key={post.id} post={post} users={users} />
      ))}
    </>
  )
}
