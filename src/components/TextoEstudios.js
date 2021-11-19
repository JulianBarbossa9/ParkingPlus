export const informacion=(estudio)=>{
    let text;
    switch(estudio){
        case 0:
            text=<div>
            <h4 className="modalHeading"><b>Sistema operativo:</b> Windows 10.</h4>

            <h4 className="modalHeading">Lenguaje de Desarrollo: </h4>
            <p className="MyText">Es necesario un lenguaje que cumpla con los siguientes requisitos:
            Comunidad de desarrolladores para solución de problemas y aprendizaje.
            Estable, escalable desde aplicaciones para dispositivos móviles a páginas web.
            Actualizaciones frecuentes.
            Soporte e integración con distintas soluciones tecnológicas.
            Se seleccionaron los siguientes lenguajes de programación.</p>
            <p className="MyText">
            <b>JavaScript.</b>
            </p>
            <p className="MyText">
            Se seleccionó este lenguaje de programación, tomando en cuenta las necesidades técnicas, y capacidades 
            del equipo de desarrollo con el que se cuenta. Como resultado el equipo cuenta con conocimientos y 
            experiencia en desarrollo haciendo uso de React JS, una librería de javascript. 
            </p>
            <h4 className="modalHeading">Base de datos.</h4>
            <p className="MyText">
            estable.
            seguro.
            en continua mejora.
            conexión con frameworks de desarrollo.
            Sistema de gestión de base de datos seleccionado:
            Mysql 
            Las necesidades del proyecto, conocimiento del equipo, además de que la mayoría de proveedores de hosting cuentan con bases de datos Mysql, se optó por hacer uso de esta tecnología.
            </p>
            <h4 className="modalHeading">Hardware para desarrollo.</h4>
            <p className="MyText">
            El equipo cuneta con hardware que cumlpe con las siguientes características minimas:
            Disco duro: más de 100 GB libres.
            Memoria Ram: más de 8Gb.
            Procesador: Quad core a 2.5Mhz.</p>
            
            <h4 className="modalHeading">Experiencia y conocimiento del equipo</h4>
                <p className="MyText">
                    El equipo está conformado por estudiantes de ingeniería en multimedia, quienes cuentan con conocimientos en desarrollo web, haciendo uso de librerías como react, diseño de interfaces, investigación en experiencia de usuario, diseño desarrollo e implementación de bases de datos relacionales haciendo uso de Mysql, metodologías ágiles, entre otros.
            
                    Tomando en cuenta la información recopilada anteriormente, y las necesidades de software, hardware, conocimiento y equipo requeridos para el desarrollo de este proyecto, se puede concluir que a nivel técnico, si es factible el desarrollo del mismo.
                 </p>
            </div>
            return (text);
            


        case 1:
            text=<div>
                <h4 className="modalHeading">Recursos Humanos</h4>
                <table className="striped centered responsive-table">
                    <thead>
                        <tr>
                            <th>Cargo</th>
                            <th>Salario mensual promedio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Desarrollador web</td>
                            <td>1.708.417</td>
                        </tr>
                        <tr>
                            <td>Marketing Digital</td>
                            <td>1.750.000</td>
                        </tr>
                        <tr>
                            <td>Desarrolladro Backend</td>
                            <td>2.250.000</td>
                        </tr>
                    </tbody>
                </table>
                <h4 className="modalHeading">Recursos Tecnicos</h4>
                <table className="striped centered responsive-table">
                    <thead>
                        <tr>
                            <th>Recurso</th>
                            <th>Costo anual</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Hosting</td>
                            <td>200.000</td>
                        </tr>
                        <tr>
                            <td>Publicidad</td>
                            <td>4.000.000</td>
                        </tr>
                    </tbody>
                </table>
                <h4 className="modalHeading">Costos</h4>
                <table className="striped centered responsive-table">
                    <thead>
                        <tr>
                            <th>Recurso</th>
                            <th>Costo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Desarrollador Web</td>
                            <td>1.708.417 / m</td>
                        </tr>
                        <tr>
                            <td>Marketing Digital</td>
                            <td>1.750.000 / m</td>
                        </tr>
                        <tr>
                            <td>Contabilidad</td>
                            <td>1.000.000/m</td>
                        </tr>
                        <tr>
                            <td>Hosting</td>
                            <td>16.600 / m</td>
                        </tr>
                        <tr>
                            <td>Pasarela de pagos</td>
                            <td>2.7% + 800 Cop / Transaccion</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            return (text);
            


        case 2:
        text=<div>
             <h4 className="modalHeading">Introducción:</h4> 
             <p>A través del siguiente proyecto se busca evaluar el desarrollo de la aplicación “Parking +” para tratar de ayudar tanto como arrendador como arrendatario, en publicar los sitios de estacionamiento disponibles, la cual presenta una nueva alternativa para los usuarios.
            </p>
             <h4 className="modalHeading">Problema:</h4><p> Uno de los principales inconvenientes en la ciudad de Bogotá, es la invasión de las vías públicas por no encontrar un sitio correcto donde estacionarse o por los sobrecostos en los parqueaderos públicos cercanos, afectando indirectamente en el tráfico de la ciudad. 
            </p>


             <h4 className="modalHeading">Justificación:</h4> Las aplicaciones móviles representan un cambio en todos los servicios que se hace de forma manual, la tecnología permite que los dispositivos móviles, tengan distintas herramientas que ayuden a desarrollar actividades diarias en cualquier momento y espacio. 

             <h4 className="modalHeading">Identificación del Consumidor:</h4> 
            <p>El mercado objetivo para el uso de la aplicación de parqueaderos son personas, ya sean hombres o mujeres que conduzcan un vehículo particular en las zonas urbanas de Medellín, Envigado, Itagüí, Sabaneta y Bello. Son personas interesadas en tener una alternativa cómoda y fácil para encontrar un parqueadero en estos sectores de la ciudad, ahorrando tiempo y en algunos casos dinero encontrando el mejor parqueadero según sus requerimientos y asegurando un cupo al llegar a su destino
            </p>
             <h4 className="modalHeading">Estado del Arte:</h4>

            <p>Una de estas plataformas es WheelsHouse, una aplicación que surgió con la idea de conectar a quienes tienen parqueaderos desocupados con quienes los necesitan. Actualmente, cuenta con alrededor de 1.500 clientes en su base de datos y tiene presencia en Bogotá, Medellín, Cali y Bucaramanga.
            Se trata de una app para optimizar los espacios particulares de las personas que tienen un parqueadero, con el propósito de mejorar la movilidad.
            </p>
            <p>
                <b>Nidoo</b>, una app que ubica y reserva parqueaderos para carros, bicicletas o motos. El usuario compara por precio y ubicación los establecimientos, y también tiene la opción de ofertar su propio parqueadero. “La plataforma conecta a la persona que está buscando un parqueadero con la gente que lo tiene. Inicialmente comenzamos con pago de mensualidades, pero también ofrecemos el servicio por días y le damos acceso a toda la red de parqueaderos que tenemos”.
            </p>
            <p>
                <b>Parkot</b>, una aplicación con la que se ubica el parqueadero más cercano, se solicita un cupo y la app conecta con el dueño del espacio, quien confirma la disponibilidad. 
            </p>
            <p>
            <b>Parkcero</b> es otra app de este estilo, disponible en Bogotá, para alquilar o buscar parqueaderos. Quien ofrece su garaje define el precio por hora, y quien busca un espacio para aparcar selecciona entre diferentes parqueaderos privados de la ciudad, y reserva. Según Parkcero, es posible ahorrar hasta 50% frente a los parqueaderos públicos.
            </p>
            <p>
                <b>Rent</b> a Parking funciona de forma similar. Por un lado, quien dispone de un espacio publica las características de su parqueadero para arrendarlo, determina su tarifa y recibe las solicitudes. En cuanto a los usuarios que buscan un espacio para estacionar, les ayuda a encontrar diferentes opciones para reservar por días, semanas o meses, hacer la solicitud y el pago en la plataforma.
            </p>
            <p>
            <b>En Queo</b>, por otro lado, es posible arrendar parqueaderos seleccionando la zona donde se desea parquear y el tipo de vehículo. Además, permite ver las especificaciones de los diferentes parqueaderos y pagar una mensualidad u ofrecer parqueaderos. La app cuenta con planes para que las empresas ubiquen parqueaderos para sus empleados y ofrece beneficios por referir nuevos usuarios.
            </p>
            <p>
            Parking tiene su propia aplicación, la cual ya cuenta con más de 5.000 descargas, encuentra el parqueadero de la red más cercano y guía al usuario hasta él. También destaca los parqueaderos ‘favoritos’ que seleccione el usuario, incluye la posibilidad de reserva y el pago de una mensualidad.
            </p>
        </div>

        return (text);

        case 3:

        text=<div>
            <h4 className="modalHeading"> Según forma jurídica</h4>
            <p>
            Debido a que la empresa será conformada por más de un socio se eligió el tipo de empresa <b>S.A.S.</b> o Sociedad por Acciones Simplificadas, según lo estipula la ley 1258 de 2008. De esta manera, los socios solo son responsables hasta el monto de sus respectivos aportes.
            </p>
            <h4 className="modalHeading"> Según el Número de trabajadores</h4>
            <p>
                
                La empresa se considera una <b>Microempresa</b>, debido a que esta conformada por menos de 10 empleados, y aunque según e organigrama hay mas cargos, inicialmente algunos de los empleados tendrán la responsabilidad de varios cargos, esto debido a que inicialmente la carga de trabajo será baja. 

            </p>
            <h4 className="modalHeading"> Según el sector economico</h4>
            <p>
            La empresa es del <b>sector terciario</b> debido a que lo que ofrece es un servicio, la facilidad para las personas de encontrar un parqueadero en la ciudad de bogota. 
            </p>
            <h4 className="modalHeading"> Según el Origen de su capital</h4>
            <p>
            El origen de capital de la empresa proviene únicamente de sus socios, debido a esto la empresa de una <b>empresa privada</b>
            </p>
            <h4 className="modalHeading"> Según el Alcance de su actividad</h4>
            <p>
            La idea es que la empresa logre operar en todo el país, sin embargo inicialmente el servicio será solo para la ciudad de Bogotá, debido a esto la empresa es <b>regional</b>
            </p>
        </div>
        return (text);

        case 4 :

        text=<div>
            <h4 className="modalHeading">Necesidad de personal</h4>
            <p>
            Basándose en la necesidad de personal que tiene la empresa, además del organigrama, se requiere el siguiente talento humano que cumpla con los siguientes perfiles.
            </p>
            <table className="striped centered responsive-table">
                    <thead>
                        <tr>
                            <th>Cargo</th>
                            <th>Perfil</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Contador</td>
                            <td>Profesional en contabilidad</td>
                        </tr>
                        <tr>
                            <td>Director de tecnología</td>
                            <td>Profesional en ingeniería multimedia o afines.</td>
                        </tr>
                        <tr>
                            <td>Tecnico programador</td>
                            <td>Tecnico con conocimientos en JavaScript y desarrollo de aplicaciones para dispositivos móviles</td>
                        </tr>
                        <tr>
                            <td>Tecnico de mantenimiento</td>
                            <td>Tecnico con conocimiento de mantenimiento de equipos de computo</td>
                        </tr>
                        <tr>
                            <td>Diseñador</td>
                            <td>Profesional, tecnico o tecnólogo con conocimiento en diseño grafico.</td>
                        </tr>
                        <tr>
                            <td>Ilustrador</td>
                            <td>Profesional, tecnico o tecnólogo con conocimiento en diseño gráfico.</td>
                        </tr>
                        <tr>
                            <td>Director de recursos humanos</td>
                            <td>Profesional en administración de empresas</td>
                        </tr>
                        <tr>
                            <td>Tecnico de selección</td>
                            <td>Profesional en psicología (externo)</td>
                        </tr>
                        <tr>
                            <td>Director de marketing</td>
                            <td>Profesional en marketing o carreras afines</td>
                        </tr>
                        <tr>
                            <td>Tecnico SEO y SEM</td>
                            <td>Profesional, tecnico o tecnólogo con conocimientos en estrategias de Marketing digital, optimización de SEO y pautas SEM</td>
                        </tr>
                        <tr>
                            <td>Director de operaciones</td>
                            <td>Profesional o tecnólogo en ingeniería industrial, administración de empresas o afines.</td>
                        </tr>
                        <tr>
                            <td>Auditor</td>
                            <td>Profesional con conocimientos en auditoria administrativa (externo)</td>
                        </tr>
                    </tbody>
                </table>
        </div>
            return(text)

        case 5:
            text=<div>
                <h4 className="modalHeading">Costos de Desarrollo:</h4>
                <p>
                <b>UX</b> (user experience)Esta disciplina se encarga de que el sitio sea usable y que la experiencia del usuario sea agradable. Una tarea importante en este rol es el flujo de usuario, que es la cantidad de pasos que debe seguir para realizar una tarea.  $5,266,833.
                </p>
                <p>
                <b>UI</b> (User Interface)Se encarga del diseño de toda la interfaz con programas como: Sketch, AdobeXD Photoshop, etc. UI está profundamente ligado con UX, podemos diseñar perfecto el flujo de usuario, pero sin algún botón es confuso puede que el el usuario no de clic y nuevamente la empresa pierde dinero. $3.629.444.
                </p>
                <p>
                <b>Frontend Developer</b> Se encarga de desarrollar toda la lógica del lado del cliente, por ejemplo: cuando entras a la web de EDteam: haces clic en el botón "ingresar", ese botón te abre un formulario donde pondrás tu usuario y contraseña, los datos se enviarán al servidor, este retornara una respuesta y según la respuesta se mostrará un mensaje u otro. Aunque usualmente el Frontend deja para el web Designer los colores, tipografías márgenes, etc, muchas veces también cumple con este rol, como dije antes, depende mucho del presupuesto. $4.349.748.
                </p>
                <p>
                <b>Backend Developer</b> Hace toda la lógica del lado del servidor, toda la seguridad está en esta parte; si tú haces seguridad en el lado del cliente, una persona con relativos conocimientos de programación podría modificar esa validación desde el inspector del navegador, por eso también se agrega validación del lado del servidor y es muchísimo más segura. El programador Backend también se encarga de comunicarse con las bases de datos, para recuperar la información que luego se le enviará al Frontend. $4.000.000.
                </p>
                <p>                  
                <b>DBA(Database Administrator)</b> Se encarga de Diseñar las bases datos, que son grandes almacenes de información, supongamos que en EDteam tenemos 50,000 suscriptores y necesitamos guardar sus datos (nombre, apellidos, cuándo fue la última vez que iniciaron sesión, que cursos ven, etc). En una aplicación la data es fundamental porque a partir de los datos se toman las decisiones, y una base de datos bien diseñada permite que un proyecto sea escalable, por eso el DBA diseña la base de datos(incluso el lápiz y papel) antes de ponerse a escribir código. Si un proyecto crece y la base de datos está mal diseñada, habrá que cambiar muchas cosas, arrastrando en el proceso al Frontend y al Backend, terminando en un caos total. Así como el front end y el web designer se pueden juntar en un solo rol, en proyectos pequeños también suele hacerse lo mismo con el back end y el DBA, pero lo ideal es que estén separados.$4.500.000.
                </p>
                <p>
                <b>Arquitecto Cloud</b> Analiza el proyecto para definir los requerimientos de hardware e infraestructura que se van a necesitar para que este pueda funcionar en producción, por ejemplo: Un proyecto que va a tener 10 usuarios al día no requiere mucha maquina, pero en un proyecto gigante él arquitecto sabrá qué requerimientos necesita (base de datos, almacenamiento, balanceamiento de carga, certificados ssl, etc), él arquitecto cloud diseña e implementa toda la infraestructura en cloud y luego se encarga de mandar el proyecto a producción.$8.000.000.
                </p>
                <p>
                <b>QA (Quality Assurance o Control de Calidad)</b> Se encarga de hacer las pruebas necesarias durante el desarrollo del proyecto para asegurarse del control de calidad, documenta todos los procesos para que en el futuro las cosas mejoren y los errores que ocurrieron no se vuelvan a repetir. Un tester solamente prueba si algo falla y lo reporta, en cambio un QA también ve qué cosas podrían mejorarse (Aunque no estén fallando).$2.900.000.

                </p>
                <p>
                <b>Profesional en marketing digital.</b> No basta con que un proyecto esté bien hecho, si nadie lo conoce de nada sirve, es aquí donde entra este rol, su labor es la de promocionar el proyecto, se encarga cosas como analytics, SEO, campañas en redes sociales, campañas en buscadores, etc. $1.754.000.



                Creador de contenidos. Un proyecto web necesita contenidos, por ejemplo: $1.250.000.

                </p>
            </div>
            return (text);

            case 6:
                text=<div style={{color: "white"}}>
                    <h5>Activos Circulantes</h5>
                    <p><b>Efectivo:</b> $10.000</p>
                    <p><b>Cuentas por Cobrar:</b> $102.000</p><br></br>

                    <h5>Activos Fijos</h5>
                    <p><b>Mantenimiento:</b> $50.000</p>
                    <p className="total"><u><b>Total Efectivos:</b> $162.000</u></p><br></br>

                    <h5>Pasivos</h5>
                    <p><b>Cuentas por Pagar:</b> $100.000</p>
                    <p><b>Pagares:</b> $30.000</p>
                    <p className="total"><u><b>Subtotal:</b> $130.000</u></p><br></br>

                    <h5>Patrimonio de los Dueños</h5>
                    <p><b>Acciones:</b> $1.000.000</p>
                    <p><b>Ganancias:</b> $0</p>
                    <p className="total"><u><b>Subtotal:</b> $1.000.000</u></p><br></br>

                    <h5>Pasivos y Patrimonio</h5>
                    <p className="total"><u><b>$1.130.000</b></u></p><br></br>

                    
                </div>
                return(text);
            
            default:
                break;

    }
}

export default informacion();