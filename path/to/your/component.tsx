import { BsArrowRightSquare } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'

import Container from '@/components/container'
import { Input } from '@/components/input'
import { GameProps } from '@/utils/types/game'
async function getGamesData() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, {
      next: { revalidate: 320 },
    })
    return res.json()
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}
