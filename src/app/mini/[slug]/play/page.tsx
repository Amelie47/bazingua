'use client'

import Button, { ButtonType } from '@/components/button';
import { getMini } from '@/utils/localStorage';
import Abba from './set/abba';
import Image from 'next/image';

export default function Play() {
    const mini = getMini()
    return (
        <main>
            <div className='flex flex-col items-center gap-1.5 flex-1'>
                <Image src="/icons/abba.svg" height={24} width={24} alt='mini game logo' />
                <p>{mini.name}</p>
            </div>

            {mini.play.questions.set && <p>questions</p>}
            {mini.play.operations.set && <p>operations</p>}
            {mini.play.stopwatch.set && <p>stopwatch</p>}
            {mini.play.words.set && <p>words</p>}
            {mini.play.timer.set && <p>timer</p>}
            {mini.play.abba.set && <Abba />}
            {mini.play.empty.set && <Button name='Fin du jeu' page='/' type={ButtonType.Button} />}
        </main>
    );
}
