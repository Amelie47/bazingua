'use client'

import { getMini } from '@/utils/localStorage';
import Abba from './set/abba';
import Image from 'next/image';
import { MiniGamePlayground } from '@/types';
import Empty from './set/empty';
import Timer from './set/timer';

export default function Play() {
    const mini = getMini()
    return (
        <main className='gap-6'>
            <div className='flex flex-col items-center gap-1.5'>
                <Image src="/icons/abba.svg" height={24} width={24} alt='mini game logo' />
                <p>{mini.name}</p>
            </div>

            {mini.play.ground.includes(MiniGamePlayground.QUESTIONS) && <p>questions</p>}
            {mini.play.ground.includes(MiniGamePlayground.OPERATIONS) && <p>operations</p>}
            {mini.play.ground.includes(MiniGamePlayground.STOPWATCH) && <p>stopwatch</p>}
            {mini.play.ground.includes(MiniGamePlayground.WORDS) && <p>words</p>}
            {mini.play.ground.includes(MiniGamePlayground.TIMER) && <Timer />}
            {mini.play.ground.includes(MiniGamePlayground.ABBA) && <Abba />}
            {mini.play.ground.includes(MiniGamePlayground.EMPTY) && <Empty />}
        </main>
    );
}
