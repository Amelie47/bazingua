"use client"

import { useRouter } from "next/navigation";
import Icon, { IconType } from './icon';

export default function ButtonBack() {

    const router = useRouter();

    return <div onClick={() => router.back()} className='rounded-full p-2 flex justify-center items-center shadow-drop-lg overflow-hidden h-10 min-h-10 w-10 min-w-10'>
        <Icon type={IconType.arrowLeft} />
    </div>
}
