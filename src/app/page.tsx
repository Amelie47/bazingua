import Button, { ButtonType } from '@/components/button';
import GameCard from '@/components/gameCard';
import mini from "../data/mini.json"
import { MiniGame, MiniGameSm } from '@/types';
import Image from 'next/image';
import { IconType } from '@/components/icon';

export default async function Home() {

  return (
    <main className='flex flex-col w-full items-center gap-6'>
      <Image src="/Logo.svg" width={75}
        height={34}
        alt="Logo" />

      <div className='w-full flex justify-between p-6 rounded-2xl shadow-inner-lg'>
        <div className='flex-1 w-full flex flex-col justify-center items-center'>
          <Button name='Tournoi' page='tournoi' type={ButtonType.Icon} icon={IconType.play} />
        </div>
        <div className='flex-1 w-full flex flex-col justify-center items-center'>
          <Button name='Aléatoire' page='random' type={ButtonType.Icon} icon={IconType.random} />
        </div>
      </div>

      <div className=' w-full grid grid-cols-2 gap-6'>
        {mini.map((item: MiniGameSm) => (
          <GameCard key={item.slug} name={item.name} page={item.slug} saveMini={item as MiniGame} />
        ))}
      </div>
    </main>
  );
}
