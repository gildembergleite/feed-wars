import Image from 'next/image'

interface PostHeaderProps {
  profileUrl: string
  name: String
  role: String
}

export default function PostHeader({
  profileUrl,
  name,
  role,
}: PostHeaderProps) {
  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div>
          <Image
            className="p-1 rounded-lg border-sky-600 border-2 bg-zinc-800"
            width={60}
            height={60}
            src={profileUrl}
            alt=""
          />
        </div>
        <div>
          <h3 className="font-bold text-zinc-50">{name}</h3>
          <span className="text-zinc-400">{role}</span>
        </div>
      </div>
      <div>
        <span className="text-zinc-400">Publicado há 1h</span>
      </div>
    </header>
  )
}
