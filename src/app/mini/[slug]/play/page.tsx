'use client'

import { getMini } from '@/utils/localStorage';
import Abba from './set/abba';
import Image from 'next/image';
import { MiniGamePlayground } from '@/types';
import Empty from './set/empty';
import Timer from './set/timer';
import Modal from '@/components/modal';

export default function Play() {
    const mini = getMini()

    function ModalAction() {
        return <div className='relative h-22 w-22 min-h-22 min-w-22 flex items-center justify-center gap-2 shadow-drop-sm rounded-full overflow-hidden'>
            <Image src="/icons/splash.svg" height={50} width={50} alt='mini game logo' />
        </div>
    }

    function ModalContent() {
        return <div className='flex flex-col gap-6 w-full items-center'>
            <div className='flex flex-col items-center gap-1.5 flex-1'>
                <Image src="/icons/splash.svg" height={89} width={89} alt='mini game logo' />
                <p>{mini.name}</p>
            </div>
            <div className='flex flex-col w-full gap-3'>
                {mini.config.rules.map((rule, index) => (<p key={index} className='text-gray-400! text-sm! text-left'>{rule}</p>))}
            </div>
        </div>
    }

    return (
        <main className='gap-6'>

            <Modal action={<ModalAction />} content={<ModalContent />} />

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