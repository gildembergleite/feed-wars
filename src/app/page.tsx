import AsideProfile from '@/components/AsideProfile'
import Header from '@/components/Header'
import Post from '@/components/Post'
import data from '../../data.json'

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex w-full justify-center p-8">
        <div className="flex w-full max-w-7xl justify-center items-start gap-8">
          <AsideProfile />
          <section className="flex flex-1 flex-col gap-8">
            {data.posts.map((post, index) => (
              <Post
                key={index}
                userId={post.userId}
                content={post.content}
                hashtags={post.hashtags}
                comments={post.comments}
              />
            ))}
          </section>
        </div>
      </div>
    </>
  )
}
