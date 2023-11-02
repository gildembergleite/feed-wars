import Image from 'next/image'
import { User } from '../../../data'
import { DateServices } from '@/services/DateServices'

interface PostHeaderProps {
  user: User
  date: Date
}

export default function PostHeader({ user, date }: PostHeaderProps) {
  const formattedDate = new DateServices().dateFormatter(date)
  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div>
          <Image
            className="p-1 rounded-lg border-sky-600 border-2 bg-zinc-800"
            width={60}
            height={60}
            src={user.profileUrl}
            alt=""
          />
        </div>
        <div>
          <h3 className="font-bold text-zinc-50">{user.name}</h3>
          <span className="text-zinc-400">{user.role}</span>
        </div>
      </div>
      <div>
        <time className="text-zinc-400">{formattedDate}</time>
      </div>
    </header>
  )
}
