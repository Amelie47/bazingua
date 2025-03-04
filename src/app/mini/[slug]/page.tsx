'use client'

import Button from '@/components/button';
import { getMini } from '@/utils/localStorage';

export default function MiniGame() {
    const mini = getMini()
    return (
        <div>
            <main>
                <p>mini game : {mini.name}</p>
                <Button name='Jouer' page={`mini/${mini.slug}/play`} />
                <div>
                    <p>{mini.config.rules}</p>
                </div>
            </main>
        </div>
    );
}
