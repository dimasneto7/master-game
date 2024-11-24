'use client'
import { FormEvent, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

export function Input() {
  const [input, setInput] = useState('')
  const router = useRouter()

  function handleSearch(event: FormEvent) {
    event.preventDefault()

    if (input === '') return

    router.push(`/game/search/${input}`)
  }
  return (
    <form
      onSubmit={handleSearch}
      className="w-full bg-slate-200 my-5 gap-2 flex justify-between items-center rounded-lg p-3"
    >
      <input
        className="bg-slate-200 outline-none w-11/12"
        type="text"
        placeholder="Digite o nome do jogo que você procura..."
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button type="submit">
        <FiSearch size={24} color="#9956f6" />
      </button>
    </form>
  )
}
