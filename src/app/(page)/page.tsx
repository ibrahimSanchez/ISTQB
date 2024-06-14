import { CardImgText, CardText } from "@/components";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";




export default function Home() {


  return (

    <>

      {/* Section 1 */}
      {/* 
          //TODO: Revisar este parrafo que lleva links y cosas  
      */}
      <section className="mt-28 mb-12 grid grid-cols-2 gap-2 sm:px-14">

        <div className="col-start-1 col-end-3">

          <h1 className="antialiased text-5xl font-bold mb-10 text-gray-950 tracking-tight">
            Bienvenido a ISTQB®
          </h1>
          <h2 className="text-lg font-semibold my-6 text-gray-800">
            ISTQB® es el esquema de certificación líder a nivel mundial en el campo de las pruebas de software.
          </h2>


          <p className="leading-10 text-gray-600">
            Hasta junio de 2023, ISTQB® ha administrado <span className="negrita">1,3 millones</span> de exámenes y emitido más de
            <span className="negrita"> 957.000</span> certificaciones en más de <span className="negrita"> 130</span> países . Con su extensa red de proveedores de
            capacitación acreditados , juntas de miembros y proveedores de exámenes , ISTQB® es uno de los esquemas de certificación
            profesional independiente de proveedores más grandes y más establecidos del mundo.
          </p>

          <div className="flex">
            <button className="btn-primary my-8">
              <a href="#">
                Nuestras certificaciones
              </a>
            </button>
            <button className="btn-outline my-8 mx-8">
              <a href="#">
                Trabaja con nosotros
              </a>
            </button>
          </div>

        </div>

        <div className="col-end-7 col-span-2">
          <Image
            className="rounded-3xl shadow-sm"
            src='/images/image.jpg'
            alt='img'
            width={600}
            height={600}
          />
        </div>

      </section >







      {/* Section 2 */}
      <section className="py-20 sm:px-14 bg-gray-100 flex flex-col text-center" >

        <h2 className="subTitle">
          Desarrolle Sus Habilidades De Prueba
        </h2>

        <div className="mt-10 grid grid-cols-3 gap-4">

          <CardText
            title="Encuentre una certificación"
            text="Explore información clave y descargue programas de estudios y exámenes de muestra en nuestra base de conocimientos gratuita"
            textLink="Nuestras certificaciones"
          />
          <CardText
            title="Encuentre formación acreditada"
            text="Elija entre más de 300 proveedores de formación acreditados líderes en todo el mundo"
            textLink="Nuestros proveedores de formación acreditados"
          />
          <CardText
            title="Encontrar un examen"
            text="Identifique proveedores de exámenes en su área que ofrezcan el examen de certificación seleccionado"
            textLink="Nuestros proveedores de exámenes"
          />
          <CardText
            title="Consulte el Registro de candidatos exitosos (SCR)"
            text="Explore la lista de personas certificadas"
            textLink="Nuestro SCR"
          />

        </div>

      </section >



      {
        //TODO: Foto de los links DUDAAAAA
      }
      {/* Section 3 */}
      {/* <section className="pt-20 sm:px-14 bg-gray-100 flex flex-col text-center">

        <h2 className="subTitle mb-4">
          Mejora y certifica tus habilidades
        </h2>

        <p className="leading-10 text-gray-600 mb-8">
          Eche un vistazo a nuestra cartera de certificaciones y explore lo que respaldará su carrera en las pruebas.
        </p>
      </section> */}


      {/* Section 4 */}
      {
        //TODO: Poner foto de fondo
      }
      <section className="py-24 sm:px-14 mt-14 bg-blue-400 flex flex-col text-center">

        <h2 className="subTitle mb-10">
          Glosario ISTQB®
        </h2>


        <div className="relative">
          <input
            type="text"
            placeholder="Busca una definición de término"
            className="w-[80%] sm:w-[40%] mb-6 rounded-2xl pl-5 py-3 pr-10 text-sm border-blue-950 focus:outline-none"
          />
          <IoSearchOutline
            size={25}
            className="right-[11%] absolute top-2 sm:right-[31%] cursor-pointer"
          />

          <select className="bg-white hover:bg-blue-950 text-blue-950 hover:text-white py-3 px-4 rounded-3xl transition-all sm:absolute  sm:right-[15%]">
            <option value="idioma">idioma</option>
          </select>

        </div>


      </section>














      {/* Section 5 */}

      <section className="py-20 sm:px-14 flex flex-col text-center" >

        <h2 className="subTitle mb-6">
          Trabaja Con Nosotros Y Participa
        </h2>

        <p className="leading-8 text-gray-600">
          Hay varias oportunidades interesantes para que las organizaciones y las personas contribuyan al ISTQB®.
          Somos una comunidad colaborativa que trabaja junta en todo el mundo para lograr una visión común.
          Nuestros socios y contribuyentes demuestran un compromiso con la calidad y una pasión por las pruebas
          de software. ¡Descubra más y únase a nosotros!
        </p>

        <div className="mt-10 grid grid-cols-3 gap-4">

          <CardImgText
            img="image-2.jpg"
            title="Únase A Nuestro Programa De Socios"
            text="Aumente la confianza en las habilidades de prueba de su equipo y obtenga una ventaja competitiva como socio de ISTQB®"
            textLink="#"
          />
          <CardImgText
            img="image-2.jpg"
            title="Únase A Nuestro Programa De Socios"
            text="Aumente la confianza en las habilidades de prueba de su equipo y obtenga una ventaja competitiva como socio de ISTQB®"
            textLink="#"
          />
          <CardImgText
            img="image-2.jpg"
            title="Únase A Nuestro Programa De Socios"
            text="Aumente la confianza en las habilidades de prueba de su equipo y obtenga una ventaja competitiva como socio de ISTQB®"
            textLink="#"
          />
          <CardImgText
            img="image-2.jpg"
            title="Únase A Nuestro Programa De Socios"
            text="Aumente la confianza en las habilidades de prueba de su equipo y obtenga una ventaja competitiva como socio de ISTQB®"
            textLink="#"
          />
          <CardImgText
            img="image-2.jpg"
            title="Únase A Nuestro Programa De Socios"
            text="Aumente la confianza en las habilidades de prueba de su equipo y obtenga una ventaja competitiva como socio de ISTQB®"
            textLink="#"
          />
          <CardImgText
            img="image-2.jpg"
            title="Únase A Nuestro Programa De Socios"
            text="Aumente la confianza en las habilidades de prueba de su equipo y obtenga una ventaja competitiva como socio de ISTQB®"
            textLink="#"
          />


        </div>

      </section >






    </>

  );
}
