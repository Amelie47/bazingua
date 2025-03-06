import GameCard from '@/components/gameCard';
import { MiniGame, MiniGameSm } from '@/types';
import Image from 'next/image';
import miniGames from '@/data/mini';

export default async function Home() {

  return (
    <main className='flex flex-col w-full items-center gap-6'>
      <Image src="/Logo.svg" width={75}
        height={34}
        alt="Logo" />

      {/* <div className='w-full flex justify-between p-6 rounded-2xl shadow-inner-lg'>
        <div className='flex-1 w-full flex flex-col justify-center items-center'>
          <Button name='Tournoi' type={ButtonType.Icon} page='tournoi' icon={IconType.play} />
        </div>
        <div className='flex-1 w-full flex flex-col justify-center items-center'>
          <Button name='Aléatoire' type={ButtonType.Icon} page='random' icon={IconType.random} />
        </div>
      </div> */}

      <div className=' w-full grid grid-cols-2 gap-6'>
        {miniGames.map((item: MiniGameSm) => (
          <GameCard key={item.slug} name={item.name} page={item.slug} saveMini={item as MiniGame} />
        ))}
      </div>
    </main>
  );
}
