'use client'

import Button from '@/components/button';
import { getMini } from '@/utils/localStorage';

export default function Play() {
    const mini = getMini()
    return (
        <div>
            <main>
                <p>play game : {mini.name}</p>

                {mini.play.questions.set && <p>questions</p>}
                {mini.play.operations.set && <p>operations</p>}
                {mini.play.stopwatch.set && <p>stopwatch</p>}
                {mini.play.words.set && <p>words</p>}
                {mini.play.timer.set && <p>timer</p>}
                {mini.play.empty.set && <Button name='Fin du jeu' page='/' />}


            </main>
        </div>
    );
}
