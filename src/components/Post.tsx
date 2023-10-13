'use client'
import Image from 'next/image'
import data from '../../data.json'

interface PostProps {
  userId: Number
  content: String
  hashtags: String[]
  comments: {
    userId: Number
    content: String
  }[]
}

export default function Post(post: PostProps) {
  const userPost = data.users.find((user) => user.id === post.userId)
  if (userPost === undefined) return
  return (
    <div className="bg-zinc-800 text-zinc-50  rounded-lg">
      <div className="p-10">
        <header className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div>
              <Image
                className="p-1 rounded-lg border-sky-600 border-2 bg-zinc-800"
                width={60}
                height={60}
                src={userPost.profile_url!}
                alt=""
              />
            </div>
            <div>
              <h3 className="font-bold text-zinc-50">{userPost.name}</h3>
              <span className="text-zinc-400">{userPost.role}</span>
            </div>
          </div>
          <div>
            <span className="text-zinc-400">Publicado há 1h</span>
          </div>
        </header>
        <article className="pt-6">
          <p className="pb-4">{post.content}</p>
          {post.hashtags.map((hashtag, index) => (
            <a href="#" className="text-sky-600" key={index}>
              #{hashtag}{' '}
            </a>
          ))}
        </article>
        <footer>
          {post.comments.map((comment, index) => {
            const userComment = data.users.find(
              (user) => user.id === comment.userId,
            )

            if (userComment) {
              return (
                <div
                  key={index}
                  className="flex justify-center items-start gap-4 pt-6"
                >
                  <div>
                    <Image
                      className="rounded-lg"
                      width={54}
                      height={54}
                      src={userComment.profile_url!}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex flex-col w-full justify-between rounded-lg py-6 px-4 bg-zinc-700 gap-4">
                      <header className="flex w-full justify-between items-start">
                        <div>
                          <h4>{userComment.name}</h4>
                          <span className="text-zinc-400 text-sm">time</span>
                        </div>
                        <div>
                          <button className="text-sm font-bold text-red-600">
                            Excluir
                          </button>
                        </div>
                      </header>
                      <div className="flex">
                        <p>{comment.content}</p>
                      </div>
                    </div>
                    <div className="pt-4">
                      <button className="text-zinc-400 text-sm font-bold">
                        Curtir
                      </button>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          })}
        </footer>
      </div>
    </div>
  )
}
