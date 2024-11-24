import Container from '@/components/container'
import { GameProps } from '@/utils/types/game'
import Image from 'next/image'
import { redirect } from 'next/navigation'

async function getData(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`
    )
    return res.json()
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}

export default async function Game({
  params: { id },
}: {
  params: {
    id: string
  }
}) {
  const data: GameProps = await getData(id)

  if (!data) {
    redirect('/')
  }
  return (
    <main className="w-full text-black">
      <div className="bg-black h-80 sm:h-96 w-full relative">
        <Image
          className="object-cover h-80 sm:h-96 w-full opacity-70"
          src={data.image_url}
          alt={data.title}
          priority={true}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
        />
      </div>
      <Container>
        <h1 className="font-bold text-xl my-4">{data.title}</h1>
        <p>{data.description}</p>
      </Container>
    </main>
  )
}
