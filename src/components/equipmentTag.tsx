import { MiniGameEquipment } from '@/types'

type EquipmentTagProps = {
    tag: MiniGameEquipment
}

export default function EquipmentTag(props: EquipmentTagProps) {

    return (
        <div className='px-2 py-[1px] rounded-full shadow-drop-sm-blur w-fit'>
            <span className='text-gray-500! text-xs!'>{props.tag}</span>
        </div>
    )
}
