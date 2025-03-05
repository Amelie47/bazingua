import { MiniGameEquipment } from '@/types'

type EquipmentTagProps = {
    tag: MiniGameEquipment
}

export default function EquipmentTag(props: EquipmentTagProps) {

    const value = Object.values(MiniGameEquipment)[Object.keys(MiniGameEquipment).indexOf(props.tag)]

    return (
        <div className='px-4 py-1 rounded-full shadow-drop-sm-blur w-fit'>
            <span className='text-gray-500! text-xs!'>{value}</span>
        </div>
    )
}
