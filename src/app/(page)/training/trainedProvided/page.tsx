import Link from "next/link";





export default function TrainedProvided() {
    return (
        <>
            <div className="flex justify-between">
                <h1 className="subTitle mb-2">Encuentre proveedores de capacitación</h1>
                <Link
                    className='hover:text-blue-800 transition content-end mb-3'
                    href='/training/examProvided'>
                   Encuentre un proveedor de exámenes
                </Link>
            </div>
            {/* line separator */}
            <div className="w-full h-px bg-blue-950 mb-7" />

            <p className="text-sm text-gray-600 my-7">
                Encuentre cualquiera de los muchos proveedores de capacitación acreditados por ISTQB® en todo el mundo
            </p>

            <div className="mb-16">
                {/* bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  */}
                <form className="">

                    <div className="flex justify-between">
                        <div className="w-[30%] m-5">
                            {/* <label className="">Underline select</label> */}
                            <select id="country" className="bg-gray-50 border border-blue-950 text-blue-900 text-sm rounded-md focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 py-3">
                                <option selected>País</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div className="w-[30%] m-5">
                            {/* <label className="">Underline select</label> */}
                            <select id="language" className="bg-gray-50 border border-blue-950 text-blue-900 text-sm rounded-md focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 py-3">
                                <option selected>Idioma</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div className="w-[30%] m-5">
                            {/* <label className="">Underline select</label> */}
                            <select id="course" className="bg-gray-50 border border-blue-950 text-blue-900 text-sm rounded-md focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 py-3">
                                <option selected>Curso</option>
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
                                <option selected>Junta</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>

                        <div className="w-[50%] m-5">
                            {/* <label className="">Underline select</label> */}
                            <select id="supplier" className="bg-gray-50 border border-blue-950 text-blue-900 text-sm rounded-md focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 py-3">
                                <option selected>Nombre del proveedor de capacitación</option>
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
