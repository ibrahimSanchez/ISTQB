import Link from "next/link";

interface Props {
    title: string;
    text: string;
    textLink: string;
    link: string;
}



export const CardText = ({ title, text, textLink, link }: Props) => {
    return (
        <div className="max-w-sm p-6 text-left shadow-lg bg-white rounded-xl">

            <h5 className="mb-4 text-xl font-semibold tracking-tight text-gray-900">
                {title}
            </h5>
            <p className="mb-5 font-normal text-gray-600 ">
                {text}
            </p>

            <Link href={link} className="inline-flex font-medium items-center text-sm text-gray-400 underline">
                {textLink}
            </Link>


        </div>

    )
}
