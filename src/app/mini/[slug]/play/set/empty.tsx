import Button, { ButtonType } from '@/components/button'

export default function Empty() {

    return (
        <div className='w-full flex-1 flex flex-col justify-center items-center max-w gap-10'>
            <div className='flex-1 w-full flex flex-col gap-14 justify-center items-center'>
                <div className='h-[250px] w-[250px] rounded-full shadow-inner-lg flex justify-center items-center'>
                    <div className='h-[220px] w-[220px] rounded-full shadow-drop-lg flex justify-center items-center'>
                        <svg width="161" height="251" viewBox="0 0 161 251" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_dd_42_581)">
                                <path d="M131 135.805L55.3087 61.0557L30 119.547L71.4075 159.783L61.8528 215.667L131 135.805Z" fill="#EDF1F4" />
                                <path d="M78.4598 30L78.9175 100.207L60.9375 127.991L55.0739 129.775L36.9483 63.4281L78.4598 30Z" fill="#EDF1F4" />
                                <path d="M65.1368 220.819L75.1937 206.79L88.5137 206.769L87.9045 221L65.1368 220.819Z" fill="#EDF1F4" />
                            </g>
                            <defs>
                                <filter id="filter0_dd_42_581" x="0" y="0" width="161" height="251" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="10" dy="10" />
                                    <feGaussianBlur stdDeviation="10" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.819608 0 0 0 0 0.85098 0 0 0 0 0.901961 0 0 0 1 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_42_581" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="-10" dy="-10" />
                                    <feGaussianBlur stdDeviation="10" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.9875 0 0 0 0 0.9875 0 0 0 0 0.9875 0 0 0 1 0" />
                                    <feBlend mode="normal" in2="effect1_dropShadow_42_581" result="effect2_dropShadow_42_581" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_42_581" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
                <Button type={ButtonType.Button} name='Fin du jeu' page="/" />
            </div>
        </div>
    )
}
