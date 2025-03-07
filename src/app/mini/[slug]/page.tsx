'use client'

import Button, { ButtonType } from '@/components/button';
import ButtonBack from '@/components/buttonBack';
import EquipmentTag from '@/components/equipmentTag';
import { MiniGameEquipment } from '@/types';
import { formatPoints } from '@/utils/format';
import { getMini } from '@/utils/localStorage';
import Image from 'next/image';

export default function MiniGame() {
    const mini = getMini()
    const isTournoi = false
    return (
        <main className='relative gap-14'>
            <div className='fixed top-0 left-0 p-6'>
                <ButtonBack />
            </div>
            {isTournoi && <div className='rounded-lg px-6 py-1 shadow-drop-sm-blur flex justify-center gap-1'>
                <span className=' text-gray-700!'>1</span>
                <span className=' text-gray-700!'>/</span>
                <span className=' text-gray-700!'>5</span>
            </div>}
            <div className='flex flex-col gap-12 items-center w-full max-w'>
                <div className='w-full flex justify-between'>
                    <div className='flex flex-col items-center gap-1.5 flex-1'>
                        <Image src="/icons/splash.svg" height={89} width={89} alt='mini game logo' />
                        <p>{mini.name}</p>
                    </div>
                    {isTournoi && <div className='flex-1 h-[120px] w-[120px] min-w-[120px] min-h-[120px] shadow-inner-lg rounded-full flex justify-center items-center'>
                        <span className='text-5xl! text-gray-200! shadow-drop-sm-text-blur'>{formatPoints(mini.config.points)}</span>
                    </div>}
                </div>

                <Button name='Jouer' page={`mini/${mini.slug}/play`} type={ButtonType.Button} />
                <div className='flex flex-col gap-6 w-full'>
                    {mini.config.equipment.length > 0 && <div className='w-full flex flex-wrap gap-2'>
                        {mini.config.equipment.map((item: MiniGameEquipment, index) => (<EquipmentTag key={index} tag={item} />))}
                    </div>}
                    <div className='flex flex-col w-full gap-3'>
                        {mini.config.rules.map((rule, index) => (<p key={index} className='text-gray-400! text-sm!'>{rule}</p>))}
                    </div>
                </div>
            </div>
        </main>
    );
}