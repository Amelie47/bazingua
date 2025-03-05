import Image from 'next/image'

export default function Footer() {

    return (
        <div className='w-full flex justify-center'>
            <Image src="/icons/logo_inner.svg" height={64} width={34} alt='logo' />
        </div>
    )
}
