'use client'

import { MiniGame } from '@/types'
import { storeMini } from '@/utils/localStorage'
import Link from 'next/link'
import { useRouter } from "next/navigation"

type GameCardProps = {
    name: string
    page: string
    saveMini?: MiniGame | null
}

export default function GameCard(props: GameCardProps) {

    const router = useRouter()

    const onClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (props.saveMini) {
            event.preventDefault()
            storeMini(props.saveMini!)
            await router.push(event.currentTarget.href)
        }
    }

    return (
        <Link href={`/mini/${props.page}`} onClick={onClick}>
            <div className='flex flex-col justify-center items-center p-4 rounded-2xl shadow-drop-sm transition-all'>
                <p>{props.name}</p>
            </div>
        </Link>
    )
}
