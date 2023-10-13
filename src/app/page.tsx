import AsideProfile from '@/components/AsideProfile'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <section className="flex w-full p-8">
        <div className="flex w-full max-w-7xl justify-center items-center">
          <AsideProfile />
        </div>
      </section>
    </>
  )
}
