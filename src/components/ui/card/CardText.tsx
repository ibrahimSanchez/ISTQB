import Link from "next/link";

interface Props {
    title: string;
    text: string;
    textLink: string;
}



export const CardText = ({ title, text, textLink }: Props) => {
    return (
        <div className="max-w-sm p-6 text-left">

            <h5 className="mb-4 text-xl font-semibold tracking-tight text-gray-900">
                {title}
            </h5>
            <p className="mb-5 font-normal text-gray-600 ">
                {text}
            </p>

            <Link href="#" className="inline-flex font-medium items-center text-gray-400 underline">
                {textLink}
                {/* <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                </svg> */}
            </Link>


        </div>

    )
}
