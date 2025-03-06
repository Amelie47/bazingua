"use client";

import Button, { ButtonType } from '@/components/button'
import { IconType } from '@/components/icon';
import { useState, useEffect, useRef } from "react"

export default function Timer() {

    const initialSeconds = 5
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
                    <div className={`h-[195px] w-[195px] ${isFinished ? 'bg-blue-50!' : 'bg-rose-50!'} rounded-full shadow-inner-lg flex justify-center items-center`}>
                        <div
                            style={{ transform: `rotate(${rotation}deg)`, transition: "transform 1s linear" }}
                            className='h-[182px] w-[182px] absolute top-1/2 left-1/2 -translate-1/2 flex justify-center'>
                            <div className={`h-1/2 w-1  ${isFinished ? 'bg-blue-500!' : 'bg-rose-500!'}`}></div>
                        </div>
                        <div className='h-[180px] w-[180px] rounded-full shadow-drop-lg flex justify-center items-center'>
                            <svg className='absolute top-1/2 left-1/2 -translate-1/2' width="188" height="188" viewBox="0 0 188 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_ddii_73_312)">
                                    <circle cx="95" cy="95" r="75" fill="#EDF1F4" />
                                </g>
                                <defs>
                                    <filter id="filter0_ddii_73_312" x="0" y="0" width="188" height="188" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dx="8" dy="8" />
                                        <feGaussianBlur stdDeviation="5" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.819608 0 0 0 0 0.85098 0 0 0 0 0.901961 0 0 0 0.8 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_73_312" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dx="-8" dy="-8" />
                                        <feGaussianBlur stdDeviation="6" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                                        <feBlend mode="normal" in2="effect1_dropShadow_73_312" result="effect2_dropShadow_73_312" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_73_312" result="shape" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dx="16" dy="16" />
                                        <feGaussianBlur stdDeviation="8" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                                        <feBlend mode="normal" in2="shape" result="effect3_innerShadow_73_312" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dx="-16" dy="-16" />
                                        <feGaussianBlur stdDeviation="8" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.819608 0 0 0 0 0.85098 0 0 0 0 0.901961 0 0 0 1 0" />
                                        <feBlend mode="normal" in2="effect3_innerShadow_73_312" result="effect4_innerShadow_73_312" />
                                    </filter>
                                </defs>
                            </svg>
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