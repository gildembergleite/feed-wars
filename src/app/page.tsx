import AsideProfile from '@/components/AsideProfile'
import Header from '@/components/Header'
import PostSection from '@/components/Post'
import { DataService } from '@/services/DataServices'

export default function Home() {
  const data = new DataService()
  const posts = data.getPosts()
  const users = data.getUsers()
  return (
    <>
      <Header />
      <div className="flex w-full justify-center p-8">
        <div className="flex w-full max-w-7xl justify-center items-start gap-8">
          <AsideProfile user={users[0]} />
          <section className="flex flex-1 flex-col gap-8">
            <PostSection users={users} posts={posts} />
          </section>
        </div>
      </div>
    </>
  )
}
