'use client'
import Image from 'next/image'
import { User, Comment } from '../../../data'
import { DateServices } from '@/services/DateServices'
import { useState } from 'react'

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
  const [likes, setLikes] = useState(comment.likes)
  const formattedDate = new DateServices().dateFormatter(comment.publishedAt)

  function handleLikeButton() {
    setLikes(likes + 1)
  }
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
              <span className="text-zinc-400 text-xs">{formattedDate}</span>
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
          <button
            onClick={handleLikeButton}
            className="text-zinc-400 text-sm font-bold"
          >
            Curtir: {likes}
          </button>
        </div>
      </div>
    </div>
  )
}
