import Image from "next/image"
import Link from "next/link";


interface Props {
    img: string;
    title: string;
    text: string;
    textLink: string;
}



export const CardImgText = ({ title, text, textLink, img }: Props) => {
    return (

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-6 py-4">

            <div className="flex justify-center">

                <Image
                    className="rounded-t-lg"
                    src={`/images/${img}`}
                    alt='img'
                    width={100}
                    height={100}
                />
            </div>

            <div className="p-5">
                <h5 className="mb-4 text-xl font-semibold tracking-tight text-gray-900">
                    {title}
                </h5>
                <p className="mb-5 font-normal text-gray-600 ">
                    {text}
                </p>

                <Link href={`${textLink}`} className="inline-flex font-medium items-center text-gray-400 underline">
                    Leer más
                </Link>

            </div>
        </div>
    )
}
