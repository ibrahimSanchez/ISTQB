import { Certification } from "@/interfaces";
import Image from "next/image"
import Link from "next/link";





export const CardCertifications = ({ title, text, textLink, level = "" }: Certification) => {
    return (

        <div className="min-w-[350px] bg-white border border-gray-200 rounded-lg shadow m-5">
            
            <div className="p-5 gradient-card rounded-br-full h-[150px] flex flex-col justify-between">
                <h5 className="text-xl tracking-tight text-white">
                    {title}
                </h5>
                <h6 className="text-sm tracking-tight text-white">
                    {level}
                </h6>
            </div>

            <p className="mt-3 font-normal text-xs text-gray-600 p-5">
                {text}
            </p>

            <div className="flex justify-between pb-5 px-5">
                <Link
                    href={`${textLink}`}
                    className="inline-flex font-medium items-center text-gray-400 underline text-xs"
                >
                    Leer más
                </Link>

                <Image
                    className="rounded-t-lg"
                    src="/logo.jpg"
                    alt='img'
                    width={100}
                    height={100}
                />
            </div>
        </div>
    )
}
