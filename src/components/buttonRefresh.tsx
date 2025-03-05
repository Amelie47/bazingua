"use client"

import { useRouter } from "next/navigation";

type ButtonRefreshProps = {
    name: string
}


export default function ButtonRefresh(props: ButtonRefreshProps) {

    const router = useRouter();

    return (<button onClick={() => router.refresh()} className='cursor-pointer bg-gradient-to-r from-violet-500 to-rose-500 rounded-2xl p-[1px] w-full flex justify-center items-center shadow-drop-lg'>
        <span className="flex justify-center w-full h-full bg-gray-100 rounded-[15px] px-6 py-4">
            {props.name}
        </span>
    </button>)
}
