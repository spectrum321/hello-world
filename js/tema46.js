const tema46 = [
     
    { question: "01. La buena implementación de un CPD estará regida bajo criterios, reglas y recomendaciones avalados por Instituciones Internacionales como el ANSI-TIA. En cuanto a esta organización, señale la afirmación correcta:", answers: ["La norma europea TIA 942, define los requisitos a cumplir para la instalación de las infraestructuras de un CPD.", "Según el estándar TIA 942, la infraestructura de soporte de un Data Center no contempla los subsistemas eléctrico y mecánico.", "Según el estándar TIA 942 la ubicación del CPD más adecuada es el sótano.", "Según el estándar TIA 942, la infraestructura de soporte de un Data Center contempla los subsistemas eléctrico y mecánico."], correct: 3 },
    
    { question: "02. ¿Cuáles de las siguientes son funciones de un Centro de Sistemas de Información?", answers: ["El desarrollo, control, gestión y supervisión de las infraestructuras, equipos, bases de datos y sistemas de comunicación e información.", "La dirección, impulso y supervisión de proyectos de informatización.", "La colaboración en la implementación de procedimientos de gestión prestando el apoyo técnico necesario.", "Las tres anteriores son ciertas."], correct: 3 },
    
    { question: "03. De las siguientes tareas a efectuar sobre un servidor de aplicaciones, ¿cuál se puede encuadrar dentro del mantenimiento preventivo?", answers: ["Limpieza periódica del polvo en la fuente de alimentación.", "Sustitución de un disco duro defectuoso.", "Ampliación de la RAM del equipo.", "Actualización de la versión del software servidor de aplicaciones."], correct: 0 },
    
    { question: "04. El estándar ANSI/TIA-942 describe distintos niveles en relación a ciertos requisitos de seguridad en los CPD. ¿Cuál es el nivel (Tier) que se refiere a una instalación que no tiene redundadas sus componentes vitales (climatización, suministro eléctrico)?", answers: ["Tier 0.", "Tier 2.", "Tier 1.", "Tier 3."], correct: 2 },
    
    { question: "05. El concepto de Green CPD está muy avanzado y se está convirtiendo en un referente. Una de las técnicas utilizadas es el Free Cooling. ¿En qué consiste?", answers: ["Utilizar software libre en el control de la climatización.", "Utilizar temperaturas bajo cero para la climatización.", "Se trata del pasillo frío.", "Utilizar las bajas temperaturas del aire exterior para la climatización."], correct: 3 },
    
    { question: "06. ¿Cuál de entre los siguientes es actualmente un método de control biométrico de acceso a un CPD?", answers: ["Tarjeta de acceso", "Identificación por huella dactilar", "Código de acceso", "Chip subcutáneo"], correct: 1 },
    
    { question: "07. Ante un posible desastre, ¿qué método de comunicación entre CPD's ofrece una respuesta más rápida y fiable?", answers: ["Copia síncrona.", "Copia asíncrona.", "Copia ''en caliente''.", "Copia continua."], correct: 0 },
    
    { question: "08. En el CPD de una nueva sede de nuestro organismo, que va a entrar en funcionamiento en próximas semanas, tenemos 5 equipos con una potencia de 220W cada uno, teniendo en cuenta que disponemos de un SAl de 1000VA, ¿cuántos equipos como máximo podré conectar a nuestro SAl para un funcionamiento normal teniendo en cuenta que el cos menor p=0,75?:", answers: ["2 equipos", "3 equipos", "4 equipos", "5 equipos"], correct: 1 },
    
    { question: "09. Se le solicita que elija un tipo de SAl de los siguientes, sin embargo usted sabe que uno de ellos no existe, indique cuál.", answers: ["Off Line.", "Line Interactive.", "Line Balance.", "On-Line Doble Conversión."], correct: 2 },
    
    { question: "010. Según el estándar TIA 942, los CPD's se pueden certificar en:", answers: ["3 tiers o niveles", "4 tiers o niveles", "5 tiers o niveles", "6 tiers o niveles."], correct: 1 },
    
    { question: "11. ¿Cuál de los siguientes sistemas de seguridad NO es recomendable instalar en un CPD donde se encuentren localizados nuestros servidores, unidades de almacenamiento de datos y electrónica activa de red?:", answers: ["Detectores de humo para prevenir un posible incendio.", "Sistema de aspersores de agua para la extinción de incendios.", "Detectores de humedad en el suelo para prevenir una posible inundación.", "Cámara de vigilancia para detectar el acceso de posibles intrusos."], correct: 1 },
    
    { question: "12. El control de la humedad y la temperatura es una medida contra:", answers: ["Fallos en la climatización.", "Fallos producidos por el agua.", "Acciones malintencionadas.", "Ninguna de las anteriores."], correct: 0 },
    
    { question: "13. Nagios es:", answers: ["Un sistema de monitorización de infraestructuras de tecnologías de la Información.", "Un sistema de autenticación de usuarios de Windows, basado en Kerberos.", "Una herramienta de control de versiones.", "Un sistema de intercambio de ficheros P2P."], correct: 0 },
    
    { question: "14. En los cuadros eléctricos de un CPD, los interruptores diferenciales:", answers: ["Protegen la instalación frente a sobrecargas y cortocircuitos.", "Protegen a las personas de electrocución por un eventual contacto a un equipo con un problema de aislamiento eléctrico.", "Seleccionan la fase a la que se conecta la carga.", "Permiten repartir la carga entre las fases."], correct: 1 },

    { question: "15. De entre los siguientes, ¿qué software permite la monitorización de las infraestructuras de Tecnologías de la Información en una organización?", answers: ["Watch Now", "Perfect Viewer", "Nagios", "DAT Network Monitor"], correct: 2 },
    
    { question: "16. El PUE (Power Usage effectiveness) es una métrica que trata de determinar la eficiencia energética de un Centro de Proceso de Datos, y se define como el resultado de dividir:", answers: ["La potencia total consumida por el CPD por la potencia consumida en el equipamiento TI (servidores, equipos de comunicaciones, almacenamiento y otros)", "La potencia total consumida por el CPD por la potencia usada en el equipamiento no TI (climatización, distribución eléctrica, iluminación, etc)", "La potencia consumida por el equipamiento TI entre la consumida por el equipamiento no TI", "La potencia total consumida por el CPD por la potencia consumida en el equipamiento de cómputo (servidores), excluyendo equipos de comunicaciones y almacenamiento"], correct: 0 },
    
    { question: "17. Según la ANSI/TIA-942 el porcentaje de disponibilidad de 99.982% en un CPD corresponde a:", answers: ["TIER I", "TIER II", "TIER III", "TIER IV"], correct: 2 },
    
    { question: "18. El estándar ANSI/TIA-942 establece distintos niveles en relación a ciertos requisitos de seguridad en los Centros de Proceso de Datos (CPD). ¿Cuál es el nivel más exigente?", answers: ["Tier 5", "Tier 4", "Tier 3", "Tier 0"], correct: 1 }
];
