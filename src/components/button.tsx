"use client"

import Link from 'next/link';
import Icon, { IconType } from './icon';
import { useRouter } from "next/navigation";


type ButtonProps = {
    name: string
    page?: string | null
    icon?: IconType | null
    type: ButtonType
}

export enum ButtonType {
    Icon, Button, One, Refresh
}

export default function Button(props: ButtonProps) {

    const router = useRouter();

    switch (props.type) {
        case ButtonType.Button:
            if (props.page != null) {
                if (props.page == "refresh") {
                    <div onClick={() => router.refresh()} className='bg-gradient-to-r from-violet-500 to-rose-500 rounded-2xl p-[1px] w-full flex justify-center items-center shadow-drop-lg'>
                        <span className="flex justify-center w-full h-full bg-gray-100 rounded-[15px] px-6 py-4">
                            {props.name}
                        </span>
                    </div>
                } else {
                    return (
                        <Link href={`/${props.page!}`} className='w-full'>
                            <div className='bg-gradient-to-r from-violet-500 to-rose-500 rounded-2xl p-[1px] w-full flex justify-center items-center shadow-drop-lg'>
                                <span className="flex justify-center w-full h-full bg-gray-100 rounded-[15px] px-6 py-4">
                                    {props.name}
                                </span>
                            </div>
                        </Link>
                    )
                }
            } else {
                return <span>page missing</span>
            }

        case ButtonType.Refresh:
            return <button onClick={() => router.refresh()} className='cursor-pointer bg-gradient-to-r from-violet-500 to-rose-500 rounded-2xl p-[1px] w-full flex justify-center items-center shadow-drop-lg'>
                <span className="flex justify-center w-full h-full bg-gray-100 rounded-[15px] px-6 py-4">
                    {props.name}
                </span>
            </button>

        case ButtonType.Icon:
            if (props.icon != null) {
                return <div className='flex flex-col items-center gap-2.5'>
                    <Link href={`/${props.page}`}>
                        <div className='rounded-full p-4 flex justify-center items-center shadow-drop-lg h-16 min-h-16 w-16 min-w-16'>
                            <Icon type={props.icon!} classNames="shadow-drop-sm" />
                        </div>
                    </Link>
                    <span>{props.name}</span>
                </div>
            } else {
                return <span className='text-rose-500'>icon missing</span>
            }

        case ButtonType.One:
            return (
                <div>{props.name}</div>
            )
        default:
            return (
                <Link href={`/${props.page}`} >{props.name}</Link>
            )
    }


}
