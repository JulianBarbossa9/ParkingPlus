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
            break;


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
            break;


        case 2:
        text=<div>
             <h4 className="modalHeading">Introducción:</h4> <p>A través del siguiente proyecto se busca evaluar el desarrollo de la aplicación “Parking +” para tratar de ayudar tanto como arrendador como arrendatario, en publicar los sitios de estacionamiento disponibles, la cual presenta una nueva alternativa para los usuarios.
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
            break;

    }
}

export default informacion();