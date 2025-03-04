import Button from '@/components/button';
import GameCard from '@/components/gameCard';
import mini from "../data/mini.json"
import { MiniGame, MiniGameSm } from '@/types';

export default async function Home() {

  return (
    <div>
      <main>
        <Button name='tournoi' page='tournoi' />
        <Button name='jeux aléatoire' page='random' />

        <div>
          <p>Liste des jeux :</p>
          {mini.map((item: MiniGameSm) => (
            <GameCard key={item.slug} name={item.name} page={item.slug} saveMini={item as MiniGame} />
          ))}
        </div>
      </main>
    </div>
  );
}
