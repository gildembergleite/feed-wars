import Image from 'next/image'

interface PostFooterProps {
  profileUrl: string
  name: string
  content: string
}

export default function PostFooter({
  profileUrl,
  name,
  content,
}: PostFooterProps) {
  return (
    <div className="flex justify-center items-start gap-4 pt-6">
      <div>
        <Image
          className="rounded-lg"
          width={54}
          height={54}
          src={profileUrl}
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex flex-col w-full justify-between rounded-lg p-4 bg-zinc-700 gap-4">
          <header className="flex w-full justify-between items-start">
            <div>
              <h4>{name}</h4>
              <span className="text-zinc-400 text-xs">Cerca de 30 minutos</span>
            </div>
            <div>
              <button className="text-sm font-bold text-red-600">
                Excluir
              </button>
            </div>
          </header>
          <div className="flex">
            <p>{content}</p>
          </div>
        </div>
        <div className="pt-4">
          <button className="text-zinc-400 text-sm font-bold">Curtir</button>
        </div>
      </div>
    </div>
  )
}
