import Button, { ButtonType } from '@/components/button'
import Icon, { IconType } from '@/components/icon'
import { generateRandomABBAString } from '@/utils/random'
import Link from 'next/link'

export default function Abba() {

    return (
        <div className='w-full flex-1 flex flex-col justify-center items-center max-w gap-10'>
            <div className='w-full flex flex-col items-center gap-6'>
                <p className='text-3xl! tracking-wider'>{generateRandomABBAString()}</p>
                <div className='shadow-drop-sm p-6 w-full rounded-2xl flex flex-col gap-2'>
                    <div className='grid grid-cols-3 items-center'>
                        <div className='m-auto'><span>BB</span></div>
                        <div className='m-auto'><Icon type={IconType.arrowRight} /></div>
                        <div className='m-auto'><span>ø</span></div>
                    </div>
                    <div className='grid grid-cols-3 items-center'>
                        <div className='m-auto'><span>AAA</span></div>
                        <div className='m-auto'><Icon type={IconType.arrowRight} /></div>
                        <div className='m-auto'><span>AB</span></div>
                    </div>
                    <div className='grid grid-cols-3 items-center'>
                        <div className='m-auto'><span>ABA</span></div>
                        <div className='m-auto'><Icon type={IconType.arrowRight} /></div>
                        <div className='m-auto'><span>BAA</span></div>
                    </div>
                </div>
                <Button name='Recommencer' type={ButtonType.Refresh} />
            </div>
            <Link href="/" className='text-gray-500!'>Fin du jeu</Link>
        </div>
    )
}
