import Link from 'next/link';
import Icon, { IconType } from './icon';
import ButtonRefresh from './buttonRefresh';


type ButtonProps = {
    name: string
    type: ButtonType
    page?: string | null
    icon?: IconType | null
}

export enum ButtonType {
    Icon, Button, One, Refresh
}

export default function Button(props: ButtonProps) {

    switch (props.type) {
        case ButtonType.Button:
            if (props.page != null) {
                return <Link href={`/${props.page!}`} className='w-full'>
                    <div className='bg-gradient-to-r from-violet-500 to-rose-500 rounded-2xl p-[1px] w-full flex justify-center items-center shadow-drop-lg'>
                        <span className="flex justify-center w-full h-full bg-gray-100 rounded-[15px] px-6 py-4">
                            {props.name}
                        </span>
                    </div>
                </Link>
            } else {
                return <span>page missing</span>
            }

        case ButtonType.Refresh:
            return <ButtonRefresh name={props.name} />

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
            return <div>{props.name}</div>
        default:
            return <Link href={`/${props.page}`}>{props.name}</Link>
    }


}
