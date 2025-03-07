import Link from 'next/link';
import Icon, { IconType } from './icon';
import ButtonRefresh from './buttonRefresh';


type ButtonProps = {
    name?: string | null
    type: ButtonType
    page?: string | null
    icon?: IconType | null
    onClick?: () => void
    disabled?: boolean
}

export enum ButtonType {
    Icon, Button, One, Refresh
}

export default function Button({ disabled = false, ...props }: ButtonProps) {

    switch (props.type) {
        case ButtonType.Button:
            if (props.page != null) {
                return <Link href={`/${props.page!}`} className='w-full'>
                    <div className='bg-gradient-to-r from-violet-500 to-rose-500 rounded-2xl p-[1px] w-full flex justify-center items-center shadow-drop-lg'>
                        <span className="flex justify-center w-full h-full bg-gray-100 rounded-[15px] px-6 py-4">
                            {props.name!}
                        </span>
                    </div>
                </Link>
            } else {
                return <span>page missing</span>
            }

        case ButtonType.Refresh:
            return <ButtonRefresh name={props.name!} />

        case ButtonType.Icon:
            if (props.icon != null) {
                if (props.name != null) {
                    return <div className='bg-gray-100 flex flex-col items-center gap-2.5'>
                        <Link href={`/${props.page}`}>
                            <div className='bg-gray-100 rounded-full p-4 flex justify-center items-center overflow-hidden shadow-drop-lg h-16 min-h-16 w-16 min-w-16'>
                                <Icon type={props.icon!} classNames="shadow-drop-sm" />
                            </div>
                        </Link>
                        <span>{props.name!}</span>
                    </div>
                }
                else {
                    if (props.onClick !== null) {
                        return <div onClick={() => !disabled && props.onClick!()} className={`cursor-pointer bg-gray-100 rounded-full p-4 flex justify-center items-center ${!disabled ? 'shadow-drop-lg shadow-btn' : 'bg-gray-50! shadow-inner-sm no-noise'} overflow-hidden h-14 min-h-14 w-14 min-w-14`}>
                            <Icon type={props.icon!} classNames="shadow-drop-sm" />
                        </div>
                    } else {
                        return <Link href={`/${props.page}`}>
                            <div className='rounded-full p-2 flex justify-center items-center shadow-drop-lg overflow-hidden h-10 min-h-10 w-10 min-w-10'>
                                <Icon type={props.icon!} />
                            </div>
                        </Link>
                    }

                }
            } else {
                return <span className='text-rose-500'>icon missing</span>
            }

        case ButtonType.One:
            return <div>{props.name!}</div>
        default:
            return <Link href={`/${props.page}`}>{props.name!}</Link>
    }


}
