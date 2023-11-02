import Image from 'next/image'
import { User, Comment } from '../../../data'

interface PostFooterProps {
  user: User
  comment: Comment
  onDeleteComment: Function
}

export default function PostFooter({
  user,
  comment,
  onDeleteComment,
}: PostFooterProps) {
  return (
    <div className="flex justify-center items-start gap-4 pt-6">
      <div>
        <Image
          className="rounded-lg"
          width={54}
          height={54}
          src={user.profileUrl}
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex flex-col w-full justify-between rounded-lg p-4 bg-zinc-700 gap-4">
          <header className="flex w-full justify-between items-start">
            <div>
              <h4>{user.name}</h4>
              <span className="text-zinc-400 text-xs">Cerca de 30 minutos</span>
            </div>
            <div>
              <button
                onClick={() => onDeleteComment(comment)}
                className="text-sm font-bold text-red-600"
              >
                Excluir
              </button>
            </div>
          </header>
          <div className="flex">
            <p>{comment.content}</p>
          </div>
        </div>
        <div className="pt-4">
          <button className="text-zinc-400 text-sm font-bold">Curtir</button>
        </div>
      </div>
    </div>
  )
}
