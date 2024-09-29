export default function Home() {
  return (
    <div className="space-y-8 bg-gray-100/80">
      <section className="relative pt-40 z-10">
        <div className="absolute top-0 right-0 left-0 -z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#bfe8ef"
              fill-opacity="1"
              d="M0,64L34.3,74.7C68.6,85,137,107,206,101.3C274.3,96,343,64,411,58.7C480,53,549,75,617,106.7C685.7,139,754,181,823,186.7C891.4,192,960,160,1029,128C1097.1,96,1166,64,1234,69.3C1302.9,75,1371,117,1406,138.7L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
            />
          </svg>
        </div>

        <div className="flex gap-4 justify-between container mx-auto -mt-6 px-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Hola! Soy Budy</h1>

            <p className="text-xl text-balance font-semibold">
              Un simpático perro interactivo que está aquí para ayudarte a cuidar tu salud de manera
              fácil y segura.
            </p>

            <p className="text-sm text-balance font-semibold">
              Solo tienes que decirle cómo te sientes. <br /> Gracias a la inteligencia artificial y
              la tecnología blockchain, toda la información que compartes con Budy es completamente
              privada y segura, tienes el control total de tu salud sin preocupaciones.
            </p>
          </div>

          <div className="w-80">img perro</div>
        </div>
      </section>
      <section className="container px-40 space-y-16 mx-auto pt-10">
        <div className="flex w-3/5">
          <div className="p-6 flex-1 space-y-4 pl-14 rounded-s-[6rem] bg-tip-divs">
            <h3 className="font-bold text-balance">
              Accede de manera autónoma y privada, sos dueño de tus datos
            </h3>
            <p className="font-medium">
              Para que Budy pueda asesorarte con la mejor precisión, tenga en cuenta consultas
              anteriores y documentos compartidos. Buscamos lo mejor para vos
            </p>
          </div>
          <div className="h-60 w-40 bg-green-300 relative">
            <img src="" alt="img ss" className="absolute inset-0 w-full h-full" />
          </div>
        </div>
        <div className="flex w-3/5 ml-auto">
          <div className="p-6 flex-1 space-y-4 mt-2 h-fit pl-8 rounded-s-[4rem] bg-tip-divs">
            <p className="font-medium">
              Carga tu historial clínico e informes médicos <br /> Budy esta para vos
            </p>
          </div>
          <div className="h-60 w-40 bg-green-300 relative">
            <img src="" alt="img ss" className="absolute inset-0 w-full h-full" />
          </div>
        </div>
        <div className="flex w-3/5 -mt-32 -translate-y-36">
          <div className="h-60 w-40 bg-green-300 relative">
            <img src="" alt="img ss" className="absolute inset-0 w-full h-full" />
          </div>
          <div className="h-fit p-6 flex-1 space-y-4 pr-10 rounded-e-[5rem] mt-10 bg-tip-divs">
            <p className="font-medium">
              Escribinos desde nuestra web o para una mejor experiencia en la comodidad de tu
              WhatsAppEscribinos desde nuestra web o para una mejor experiencia en la comodidad de
              tu WhatsApp
            </p>
          </div>
        </div>
      </section>
      <section className="bg-dark-blue">
        <div className="container mx-auto px-10 py-8">
          <h2 className="mb-8 text-2xl font-bold text-cyan-100">Te ofrecemos</h2>
          <ul className="list-disc pl-4 grid grid-rows-3 grid-cols-2 gap-4 text-white">
            <li>Cargar y controlar tus historiales médicos de manera segura</li>
            <li>Budy en WhatsApp te acompaña en tu autocuidado de salud</li>
            <li>Asistencia personalizada para mejorar tu bienestar</li>
            <li>Seguimiento de tus síntomas y ofrecerte apoyo en cualquier momento.</li>
            <li>Garantizamos que solo tú tienes control total sobre tu información</li>
            <li>
              Buscamos facilitar el servicio del sistema de salud para optimizar el trabajo de los
              profesionales
            </li>
          </ul>
        </div>
      </section>
      {/* <section className="">
        <h2>
          ¡Lleva a <span>Budy</span> a todas partes!
        </h2>
        <p>
          Agrega a Budy en WhatsApp y recibe recomendaciones personalizadas al instante. Estaré aquí
          para ayudarte a resolver tus dudas de salud y mantenerte en el camino hacia un bienestar
          óptimo, ¡todo desde la comodidad de tu chat!
        </p>
      </section> */}
      <footer className="bg-slate-100/80">
        <div className="container mx-auto p-10 space-y-10">
          <h2 className="text-green-800 font-bold text-xl">Siempre a tu alcance</h2>
          <p className="text-xs">
            En Budy, utilizamos la tecnología blockchain para garantizar la máxima seguridad y
            privacidad de tu información de salud. A través de un smart contract, se crea un acuerdo
            digital que permite a Budy acceder únicamente a la información necesaria cuando
            interactúas con la aplicación. Este smart contract asegura que, fuera de estas
            interacciones, Budy no tiene acceso a tu wallet ni a tu información personal. Además, la
            naturaleza descentralizada del blockchain significa que tu información no puede ser
            alterada, vulnerada o utilizada para otros fines sin tu consentimiento. Tu privacidad y
            seguridad están siempre protegidas, permitiéndote confiar en Budy como tu compañero de
            salud.
          </p>
        </div>
      </footer>
    </div>
  );
}
