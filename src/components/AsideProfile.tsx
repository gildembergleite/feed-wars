import Image from 'next/image'
import data from '../../data.json'

export default function AsideProfile() {
  return (
    <aside className="flex flex-col w-64 bg-zinc-800 rounded-lg overflow-hidden">
      <header className="flex w-full h-20 bg-cover bg-[url(https://i.pinimg.com/736x/59/01/bd/5901bd0dcd28e11cb61dee97983f7b31.jpg)]"></header>
      <div className="flex flex-col justify-center items-center border-b-zinc-700 border-b -mt-7">
        <div className="flex w-full justify-center items-center">
          <Image
            className="p-1 rounded-lg border-sky-600 border-2 bg-zinc-800"
            width={60}
            height={60}
            src={data.users[0].profileUrl!}
            alt=""
          />
        </div>
        <div className="text-center py-6">
          <h3 className="font-bold text-zinc-50">{data.users[0].name}</h3>
          <span className="text-zinc-400">{data.users[0].role}</span>
        </div>
      </div>
      <footer className="flex w-full justify-center items-center py-6">
        <button className="font-bold text-sky-600 border-sky-600 border-2 rounded-lg py-4 px-6">
          Editar seu perfil
        </button>
      </footer>
    </aside>
  )
}
