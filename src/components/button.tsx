import Link from 'next/link';

type ButtonProps = {
    name: string
    page: string
}

export default function Button(props: ButtonProps) {
    return (
        <Link href={`/${props.page}`} >{props.name}</Link>
    );
}
