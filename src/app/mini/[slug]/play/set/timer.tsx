"use client";

import Button, { ButtonType } from '@/components/button'
import { IconType } from '@/components/icon';
import Image from 'next/image';
import { useState, useEffect, useRef } from "react"

type TimerProps = {
    duration: number
}

export default function Timer(props: TimerProps) {

    const initialSeconds = props.duration
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isRunning, setIsRunning] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isRunning && seconds > 0) {
            intervalRef.current = setInterval(() => {
                setSeconds((prev) => {
                    if (prev <= 1) {
                        setIsRunning(false);
                        setTimeout(() => {
                            setIsFinished(true);
                        }, 1010);
                        return 0;
                    }
                    return prev - 1;
                });
                setRotation((prev) => prev + 360 / initialSeconds);
            }, 1000);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        };
    }, [isRunning, seconds, initialSeconds]);

    const toggleTimer = () => {
        if (isFinished) return;
        if (!isRunning && seconds === 0) {
            setSeconds(initialSeconds);
            setRotation(0);
        }
        setIsRunning((prev) => !prev);
    };

    const handleStop = () => {
        setIsRunning(false);
        setSeconds(initialSeconds);
        setRotation(0);
        setIsFinished(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const handleRestart = () => {
        setIsFinished(false);
        setSeconds(initialSeconds);
        setRotation(0);
    };

    return (
        <div className='w-full flex-1 flex flex-col justify-center items-center max-w gap-10'>
            <div className='flex-1 w-full flex flex-col gap-14 justify-center items-center'>
                <div className='flex flex-col  justify-center items-center gap-4'>
                    <div className="h-[250px] w-[250px] rounded-full shadow-inner-lg flex justify-center items-center">
                        <div
                            style={{ transform: `rotate(${rotation}deg)`, transition: "transform 1s linear" }}
                            className='h-full w-full absolute top-1/2 left-1/2 -translate-1/2 flex justify-center'>
                            <div className={`h-1/2 w-1  ${isFinished ? 'bg-blue-500!' : 'bg-rose-500!'}`}></div>
                        </div>
                        <div className='h-[230px] w-[230px] rounded-full shadow-drop-lg flex justify-center items-center bg-gray-100!'>
                            <Image src="/icons/timer.svg" height={250} width={250} alt='' className='absolute top-1/2 left-1/2 -translate-1/2' />
                            {isFinished ? <p className='text-2xl! w-min'>Temps écoulé</p> : <p className='text-4xl!'>{seconds !== initialSeconds ? seconds + 1 : seconds}</p>}
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <Button onClick={handleStop} type={ButtonType.Icon} icon={IconType.stop} disabled={!isRunning} />
                        <Button onClick={toggleTimer} type={ButtonType.Icon} icon={IconType.pause} disabled={isFinished} />
                        <Button onClick={handleRestart} type={ButtonType.Icon} icon={IconType.again} disabled={isRunning || seconds === initialSeconds} />
                    </div>
                </div>
                <Button type={ButtonType.Button} name='Fin du jeu' page="/" />
            </div>
        </div>
    )
}