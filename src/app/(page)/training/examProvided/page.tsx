

import Link from "next/link";



export default function ExamProvided() {

    return (
        <>

            <div className="flex justify-between">
                <h1 className="subTitle mb-2">Encuentre un proveedor de exámenes</h1>
                <Link
                    className='hover:text-blue-800 transition content-end mb-3'
                    href='/training/trainedProvided'>
                    Encuentre un proveedor de capacitación
                </Link>
            </div>
            {/* line separator */}
            <div className="w-full h-px bg-blue-950 mb-7" />

            <p className="text-sm text-gray-600 my-7">
                Los exámenes ISTQB® se ofrecen a través de proveedores de exámenes externos y juntas de miembros que actúan como proveedores de exámenes. Un proveedor de exámenes es una organización autorizada por una junta miembro para ofrecer exámenes a nivel local e internacional. Para mostrar la lista de todos los proveedores de exámenes disponibles, haga clic en {"Buscar"}.
            </p>

            <div className="mb-16">
                {/* bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  */}
                <form className="">

                    <div className="flex justify-between">
                        <div className="w-[50%] m-5">                            {/* <label className="">Underline select</label> */}
                            <select id="country" className="bg-gray-50 border border-blue-950 text-blue-900 text-sm rounded-md focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 py-3">
                                <option selected>País</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div className="w-[50%] m-5">
                            {/* <label className="">Underline select</label> */}
                            <select id="language" className="bg-gray-50 border border-blue-950 text-blue-900 text-sm rounded-md focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 py-3">
                                <option selected>Idioma</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>

                    </div>

                    <div className="flex justify-between">

                        <div className="w-[50%] m-5">
                            {/* <label className="">Underline select</label> */}
                            <select id="board" className="bg-gray-50 border border-blue-950 text-blue-900 text-sm rounded-md focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 py-3">
                                <option selected>Proveedores de exámenes</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>

                        <div className="w-[50%] m-5">
                            {/* <label className="">Underline select</label> */}
                            <select id="supplier" className="bg-gray-50 border border-blue-950 text-blue-900 text-sm rounded-md focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 py-3">
                                <option selected>Exámen</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="m-5 bg-red-500 hover:bg-red-800 text-sm text-white py-2 px-4 rounded-3xl transition-all"
                        >
                            Buscar
                        </button>

                        <button
                            type="submit"
                            className="m-5 bg-white hover:bg-red-500 text-red-500 hover:text-white p-2 px-4 rounded-3xl transition-all border text-sm border-red-500"
                        >
                            Limpiar todo
                        </button>

                    </div>

                    <hr />
                </form>
            </div>




            {/* line separator */}
            {/* <div className="w-full h-px bg-blue-950 mb-7" /> */}


        </>
    )
}
