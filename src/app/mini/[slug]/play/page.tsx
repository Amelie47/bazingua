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
            <div className='fixed top-3 left-3 px-3 py-1 flex items-center justify-center shadow-inner-sm rounded-2xl overflow-hidden'>
                <Image src="/icons/abba.svg" height={50} width={50} alt='mini game logo' />
                <p className='text-xs/3! text-gray-700!'>{mini.name}</p>
            </div>

            {mini.play.ground.includes(MiniGamePlayground.QUESTIONS) && <p>questions</p>}
            {mini.play.ground.includes(MiniGamePlayground.OPERATIONS) && <p>operations</p>}
            {mini.play.ground.includes(MiniGamePlayground.STOPWATCH) && <p>stopwatch</p>}
            {mini.play.ground.includes(MiniGamePlayground.WORDS) && <p>words</p>}
            {mini.play.ground.includes(MiniGamePlayground.TIMER) && <Timer duration={mini.play.metadata.duration!} />}
            {mini.play.ground.includes(MiniGamePlayground.ABBA) && <Abba />}
            {mini.play.ground.includes(MiniGamePlayground.EMPTY) && <Empty />}
        </main>
    );
}
