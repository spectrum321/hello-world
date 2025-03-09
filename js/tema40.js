const tema40 = [
    
    { question: "01. ¿Cuál de los siguientes es un protocolo de la capa de transporte del modelo TCP/IP?", answers: ["FTP", "UDP", "SMTP", "TFTP"], correct: 1 },
    
    { question: "02. ¿Qué especificaciones de cable indica 100BASE-T?", answers: ["Velocidad de transmisión de 100-Mbps, señal de banda base, cable coaxial", "Velocidad de transmisión de 100-Mbps, señal de banda ancha, cable de par trenzado", "Velocidad de transmisión de 100-Mbps, señal de banda base, cable de par trenzado", "Velocidad de transmisión igual a 10-Gbps, señal de banda base, cable de par trenzado"], correct: 2 },
    
    { question: "03. ¿De cuál de los siguientes elementos funcionales básicos de un sistema de cableado estructurado parte el cableado horizontal?", answers: ["Distribuidor de edificio - Building Distributor", "Distribuidor de planta - Floor Distributor", "Punto de transición - Transition Point", "Toma de usuario - Telecommunications Outlet"], correct: 1 },
    
    { question: "04. Cuál de las capas OSI define las funciones del router:", answers: ["Enlace de datos", "Red", "Transporte", "Sesión"], correct: 1 },
    
    { question: "05. En el modelo OSI, la Capa de Enlace de Datos, transmite los bits en:", answers: ["Paquetes", "Segmentos", "Tramas", "Transportes"], correct: 2 },
    
    { question: "06. ¿Cuál de las siguientes afirmaciones NO se corresponde con la Capa de Presentación del Modelo OSI?", answers: ["Proporciona mecanismos para controlar el dialogo entre las aplicaciones de los sistemas finales", "Define el formato de los datos que se van a intercambiar entre las aplicaciones y ofrece un conjunto de servicios de transformación de datos", "Codifica los datos en modo estándar y realiza funciones de compresión y cifrado de datos", "Define la sintaxis utilizada entre entidades de aplicación y proporciona los medios para la selección y modificación de la representación utilizada"], correct: 0 },
    
    { question: "07. El Protocolo ICMP envía mensajes en forma de datagramas que permiten al conjunto del protocolo TCP/IP realizar varias funciones. ¿Cuál de estas funciones utiliza el comando PING?", answers: ["Pruebas de Conectividad", "Redireccionamiento de rutas", "Detección de destinos inalcanzables", "Control de flujo"], correct: 0 },
    
    { question: "08. ¿Cuál de los siguientes protocolos NO pertenece a la Capa de Aplicación en el modelo TCP/IP?", answers: ["SNMP", "ICMP", "SMTP", "HTTP"], correct: 1 },
    
    { question: "09. Cuando en una red se utiliza una clase y esta clase de direcciones IP, utiliza los 3 primeros segmentos de dirección como identificador de red y solo el último para identificar el equipo, estamos hablando, de una clase:", answers: ["A", "B", "C", "D"], correct: 2 },
    
    { question: "10. En el protocolo IPv4, si los errores de transmisión alteran un datagrama, este simplemente es desechado. Si el datagrama se desecha por cualquier razón, ¿qué protocolo del anfitrión o pasarela que lo deseche generará un mensaje de error de destino inalcanzable y lo devolverá al protocolo del anfitrión origen con un código razón?", answers: ["ARP", "ICMP", "OSPF", "BGP"], correct: 1 },
    
    { question: "11. A fin de que el procedimiento de la cabecera del datagrama IP sea más rápido, se ha dividido la cabecera del protocolo IPv6 en:", answers: ["Una cabecera básica y una o más cabecera de extensión", "Una cabecera básica y solo una cabecera de extensión", "Una cabecera básica y una o más cabecera de enrutamiento", "Una cabecera básica, una cabecera de enrutamiento y una o varias cabeceras de fragmentación"], correct: 0 },
    
    { question: "12. En el protocolo IPv6 a fin de reducir la carga, se envía primero una sola copia de todos los datagramas multidifundidos a un nuevo tipo de nodo de conmutación, llamado:", answers: ["Protocolo de multidifusión", "Enrutador de multidifusión", "Red fundamental de multidifusión", "Árbol de enrutamiento multidifundido"], correct: 1 },
    
    { question: "13. En el protocolo de enrutamiento IP, entre dos pasarelas, el término distancia es el que utilizaremos como:", answers: ["Protocolo de información de enrutamiento", "Tabla de adyacencia", "Tabla de enrutamiento remoto", "Métrica de enrutamiento"], correct: 3 },
    
    { question: "14. ¿Cuál de estas respuestas respecto al protocolo de enrutamiento BGP (Border gateway protocol, protocolo de la pasarela externa) es INCORRECTA?", answers: ["Usa parámetros como el precio de la conexión", "Usa parámetros como el ancho de banda", "Utiliza el protocolo de encaminamiento interno RIP", "Tiene sus propios mensajes entre routers"], correct: 2 },
    
    { question: "15. En el protocolo IPv6, ¿qué mecanismo se ocupa de que IPv6 sea empaquetado y encapsulado dentro de los paquetes IPv4, de tal forma que IPv6 sea transportado en la red IPv4 existente?", answers: ["Mecanismos de transmisión y coexistencia", "Mecanismos Teredo", "Mecanismos de túneles", "Mecanismos de encaminador"], correct: 2 },
    
    { question: "16. ¿Cuál de las siguientes afirmaciones define a un sistema abierto según ISO?", answers: ["Todo sistema informático capaz de interconectarse con otros de acuerdo con unas normas establecidas", "Entornos diseñado e implantados de acuerdo con normas ampliamente divulgadas y básicamente independientes de los fabricantes", "Son aquellos cuyas especificaciones están aprobadas. publicadas y respaldadas por organismos independientes de normalización", "Ninguna"], correct: 0 },
    
    { question: "17. En el modelo OSI ¿qué capa es la encargada de encaminar los datos hacia su destino eligiendo la ruta más efectiva?", answers: ["Capa Física", "Capa Red", "Capa Presentación", "Capa Enlace"], correct: 1 },
    
    { question: "18. ¿Cuál de los siguientes protocolos pertenece al Nivel de Aplicación y crea conexiones seguras entre dos sistemas sobre redes no seguras?", answers: ["SSH", "SSL", "IPSec", "FMS"], correct: 0 },
    
    { question: "19. En un modelo de interconexión OSI. ¿Cuál de estos niveles o capas se ocupa de la representación de los datos durante la transferencia entre dos procesos de aplicación en comunicación?", answers: ["Nivel de sesión", "Nivel de transporte", "Nivel de presentación", "Nivel de red"], correct: 2 },
    
    { question: "20. ¿En qué capa del modelo OSI se convierte la información codificada en Unos (1) y Ceros (0), en una señal digital?", answers: ["Aplicación", "Física", "Transporte", "Enlace"], correct: 1 },
    
    { question: "21. En un modelo de interconexión OSI. ¿Qué capa o nivel se encarga del control y sincronización de diálogos para entidades de aplicación?", answers: ["Nivel de presentación", "Nivel de sesión", "Nivel de transporte", "Nivel de aplicación"], correct: 1 },
    
    { question: "22. Indique cuál de los siguientes protocolos es un protocolo de gestión de red:", answers: ["CMIP", "OSPF", "IKE", "SOCKS"], correct: 0 },
    
    { question: "23. En el protocolo TCP/IP, ¿cuántos bits tiene en total una dirección IP para asegurarse que todos los anfitriones tengan un identificativo único?", answers: ["16 bits", "32 bits", "64 bits", "128 bits"], correct: 1 },
    
    { question: "24. El protocolo IP cuenta con varias operaciones centrales y procedimientos asociados para realizar las diversas funciones de armonización necesarias para la interconexión de redes disímiles. ¿Cuál de estas respuestas NO es una de ellas?", answers: ["Informe de errores", "Enrutamiento", "Fragmentación y reensamblado", "Servicio de flujo confiable"], correct: 3 },
    
    { question: "25. Se denomina \"datagrama\" al paquete de datos en la capa de:", answers: ["Aplicación", "Internet", "Transporte", "Acceso a red"], correct: 1 },
    
    { question: "26. ¿Qué dirección utiliza un puente para crear su tabla de puenteo?", answers: ["La dirección IP destino", "La dirección MAC destino", "La dirección IP origen", "La dirección MAC origen"], correct: 3 },
    
    { question: "27. Selecciona la respuesta INCORRECTA:", answers: ["Multiplexación es la transmisión simultánea a través de múltiples canales de una señal analógica o digital", "FDM y TDM son tipos de multiplexaciones", "ASK es una técnica que permite la transmisión de datos digitales mediante señales analógicas", "Existen conectores RS-232 de 25 contactos"], correct: 0 },
    
    { question: "28. El dispositivo que permite conectar redes que utilizan protocolos de red distintos es:", answers: ["Gateway", "Router", "Hub", "Switch"], correct: 0 },
    
    { question: "29. El estándar Ethernet (IEEE 802.3) para redes emplea para el acceso al medio:", answers: ["Paso de testigos", "ADSL de alta velocidad", "CSMA/CD (Acceso múltiple con detección de portadora y detección de colisiones)", "Conectores coaxiales"], correct: 2 },
    
    { question: "30. En una transmisión por conmutación de paquetes:", answers: ["La información se transmite manteniendo el circuito establecido durante toda la transmisión", "Los nodos intermedios no necesitan disponer de memoria", "Hace falta disponer de un sistema de control de flujo", "Hay un ancho de banda dedicado para cada emisor de datos"], correct: 2 },
    
    { question: "31. En relación a las líneas punto a punto:", answers: ["Con un conjunto de ellas se puede crear una red mallada", "Se pagan según su uso", "Sólo sirven para distancias cortas", "Utilizan la RDSI"], correct: 0 },
    
    { question: "32. ¿Cuál de los siguientes no es un objetivo de las redes TCP/IP?", answers: ["Independencia de la tecnología de redes y ordenadores", "Conectividad extremo a extremo", "Definición de un único protocolo común", "Estandarización de los protocolos de aplicación"], correct: 2 },
    
    { question: "33. Cuál de las siguientes afirmaciones es incorrecta para el protocolo IEEE 802.11g:", answers: ["Es la evolución del IEEE 802.11b", "Utiliza la banda de los 2.4 GHz", "Es compatible con el IEEE 802.11b y utiliza las mismas frecuencias", "Si trabaja con el IEEE 802.11b el rendimiento no se ve afectado"], correct: 3 },
    
    { question: "34. En el modelo de referencia OSI de ISO son primitivas de servicio:", answers: ["REQUEST, INDICATION y REJECT", "REQUEST, CONFIRM y REJECT", "REQUEST, INDICATION y CONFIRM", "INDICATION, CONFIRM y REJECT"], correct: 2 },
    
    { question: "35. En el modelo OSI, ¿qué capa es la encargada de encaminar los datos hacia su destino eligiendo la ruta más efectiva?", answers: ["Capa Física", "Capa Red", "Capa Presentación", "Capa Enlace"], correct: 1 },
    
    { question: "36. El estándar Wimax está especificado en la norma:", answers: ["IEEE 802.11", "IEEE 802.16", "IEEE 802.15", "IEEE 802.19"], correct: 1 },
    
    { question: "37. En la conmutación de circuitos:", answers: ["Los datos pueden permanecer almacenados en nodos intermedios", "El circuito extremo a extremo establecido es compartido por varios emisores simultáneamente", "El ancho de banda es dedicado durante el tiempo de la transmisión", "Optimizan el uso de la red de forma global"], correct: 2 },
    
    { question: "38. SNMP tiene tres componentes:", answers: ["Dispositivos administrados, agentes y NMS", "Dispositivos administrados, agentes y MNS", "Dispositivos administrados, agentes y DNS", "Ninguna de las anteriores"], correct: 0 },
    
    { question: "39. SNMP tiene:", answers: ["2 versiones", "1 versión estándar y 2 anexos", "2 versiones estándar y 1 no estándar", "3 versiones"], correct: 3 },
    
    { question: "40. DWDM (Multiplexación por división en longitudes de onda densas):", answers: ["Permite emplear hasta un máximo de 10 longitudes de onda en una fibra óptica", "Utiliza la fibra óptica por multiplexación en el tiempo", "Se puede usar con enlaces de microondas", "Utiliza repetidores para compensar las pérdidas ópticas cuando es necesario"], correct: 3 },
    
    { question: "41. La sincronización de tiempo de dispositivos de una red se hace mediante:", answers: ["El protocolo SMTP", "La actualización del sistema operativo", "El protocolo NTP", "Directamente por Ethernet"], correct: 2 },
    
    { question: "42. En el método de encaminamiento por métodos determinísticos:", answers: ["El sistema no tiene en cuenta el estado de la red al tomar las decisiones para el encaminamiento", "Entra dentro de la clasificación de métodos dinámicos o adaptativos", "Se caracteriza por la rápida respuesta a los cambios de tráfico o topología de la red", "Es uno de los más utilizados en Internet y se basa en que cada nodo recalcula continuamente la tabla de encaminamiento"], correct: 0 },
    
    { question: "43. ¿Qué es una MAC?", answers: ["Una computadora fabricada por Apple", "Un identificador que corresponde de forma única a un dispositivo Ethernet", "Una controladora de direcciones múltiples (Multi Address Contoller)", "Un dispositivo hardware para interconectar ordenadores"], correct: 1 },
    
    { question: "44. ¿Cuántas direcciones IP puede tener un Windows?", answers: ["Una IPv4 y una IPv6 en cada adaptador de red", "Varias de cualquier tipo en cada adaptador de red", "Una en cada adaptador de red", "Solo una"], correct: 1 },
    
    { question: "45. ¿Qué tamaño tiene una dirección IP?", answers: ["128 bits", "32 bits", "4 números del 0 al 255 separados por puntos", "Todas las anteriores pueden ser correcta"], correct: 3 },
    
    { question: "46. En un sistema DNS de una red IP.", answers: ["Un nombre de máquina corresponde con una dirección IP", "Un nombre de máquina puede corresponder a varias direcciones IP", "Un nombre de máquina puede corresponder a varias direcciones IP y una dirección IP puede corresponder a varios nombres de máquina", "Varios nombres de máquina pueden corresponder a una dirección IP"], correct: 2 },
    
    { question: "47. Respecto a las técnicas NAT de traducción de direcciones…", answers: ["Traducen direcciones IPv4 (Internet Protocol versión 4) a IPv6 (Internet Protocol versión6)", "Asignan direcciones IP públicas a direcciones IP privadas", "Son utilizadas por programas localizados en la CPU para manejar direcciones físicas", "Son utilizadas en los procesos de swapping y así poder realizar el intercambio de datos entre memoria principal y secundaria"], correct: 1 },
    
    { question: "48. En una red con un cableado de par trenzado categoría 5, la conexión a la tarjeta de red se realiza habitualmente con:", answers: ["un conector AUI", "un conector RJ45", "un conector tipo BNC", "un conector RS23"], correct: 1 },
    
    { question: "49. ¿Qué es un Switch?", answers: ["Es un concentrador que reenvía los paquetes de entrada a todos los puertos de salida", "Es un router pero que funciona a menos velocidad", "Es una pasarela entre dos redes locales de distinto tipo", "Un dispositivo de interconexión de red que reenvía los paquetes de entrada solamente al puerto de destino"], correct: 3 },
    
    { question: "50. En los diferentes estándares Ethernet 100Base-T4, 100Base-F, 100Base-FX…, ¿Qué indican la letra o letras que se han subrayado (T4, F, FX..)?", answers: ["El método de modulación empleado", "La velocidad en Megabits/segundo sobre el canal", "Las características del cable", "El protocolo de seguridad"], correct: 2 },    
    { question: "51. TCP/IP es el protocolo base común utilizado por todos los ordenadores conectados a Internet. Una de las grandes ventajas que proporciona es que…", answers: ["No precisa de configuración.", "Es enrutable y compatible con cualquier sistema.", "Usa un tamaño de paquete pequeño que no se puede romper.", "Implementa los siete niveles OSI en sólo cuatro capas."], correct: 1 },
    
    { question: "52. ¿Cuál de los siguientes elementos no se utiliza, por lo general, en la implementación 10BASE-T de Ethernet?", answers: ["Conector RJ-45.", "Cable de par trenzado.", "Derivación vampiro.", "Concentrador."], correct: 2 },
    
    { question: "53. El número de capas del modelo de referencia de interconexión de sistemas abiertos (OSI) creado por la organización internacional para la estandarización (ISO)…", answers: ["Es siempre 5.", "Es siempre 7.", "Depende del fabricante.", "Depende del destinatario."], correct: 1 },
    
    { question: "54. ¿De cuantos bits está formada una dirección IPv6?", answers: ["128", "64", "32", "25"], correct: 0 },
    
    { question: "55. En un armario o rack, ¿qué es la \"unidad de rack\" o \"U\"?", answers: ["La unidad de altura del equipamiento preparado para ser montado en el rack estándar.", "La unidad que determina el número de servidores que se pueden instalar en el rack.", "Es el número que identifica el armario para su localización en el CPD.", "El número medio de servidores y equipamiento por rack."], correct: 0 },
    
    { question: "56. ¿Cuál es el mecanismo que permite que los equipos en una red tengan un esquema de direccionamiento privado ahorrando direccionamiento público y ocultando las direcciones IP reales de las máquinas cuando se sale a Internet?", answers: ["Enrutamiento", "NAT", "Conmutación", "IPv6"], correct: 1 },
    
    { question: "57. ¿Cuál de las siguientes afirmaciones es correcta?", answers: ["TCP y UDP son protocolos orientados a conexión.", "TCP y UDP son protocolos no orientados a conexión.", "TCP es un protocolo orientado a conexión.", "UDP es un protocolo orientado a conexión."], correct: 2 },
    
    { question: "58. Comparando el modelo Internet TCP/IP y el modelo OSI, indique la afirmación correcta:", answers: ["El modelo de Internet TCP/lP no tiene capa de aplicación.", "El modelo OSI no tiene capa de presentación.", "El modelo OSI es de cinco capas.", "El modelo de Internet no diferencia la capa de presentación."], correct: 3 },
    
    { question: "59. ¿Cuál no es una topología permitida para la tecnología Fibre Channel?", answers: ["Punto a Punto (Point to Point, FC-P2P).", "Fabric conmutado (Switched Fabric, FC-SW).", "Bucle arbitrado (Arbitrated loop, FC-AL).", "Red de fabric (Fabric Net, FC-N)."], correct: 3 },
    
    { question: "60. Cuál de las siguientes afirmaciones es verdadera:", answers: ["Las direcciones MAC y direcciones IP son direcciones de nivel 3.", "Las direcciones MAC y direcciones IP son direcciones de nivel 2.", "Las direcciones MAC son direcciones de nivel 2.", "Las direcciones IP son direcciones de nivel 2."], correct: 2 },
    
    { question: "61. ¿Cuál de los siguientes protocolos proporciona servicios de autenticación, autorización y contabilidad?", answers: ["802.1q.", "IPSEC.", "Directorio Activo.", "Radius."], correct: 3 },
    
    { question: "62. ¿En qué capa del modelo OSI de ISO trabajan los routers o encaminadotes?", answers: ["Capa 2.", "Capa 3.", "Capa 7.", "Capa 4."], correct: 1 },
    
    { question: "63. ¿Cuál de las siguientes respuestas es la correcta?", answers: ["La dirección IP: 192.168.1.1 es Clase D.", "La dirección IP: 10.0.0.1 es Clase B.", "La dirección IP: 172.16.1.1 es Clase B.", "La dirección IP: 172.16.1.1 es Clase A."], correct: 2 },
    
    { question: "64. En el modelo de referencia de Interconexión de Sistemas Abiertos (OSI) de ISO:", answers: ["La capa 5 se ocupa de manejar las sesiones de una comunicación.", "Una de las funciones de la capa física es transmitir el flujo de bits a través del medio.", "La capa 3 se encarga de encaminar la información a través de la red en base a las direcciones de paquete.", "Todas las respuestas anteriores son correctas."], correct: 3 },
    
    { question: "65. De los siguientes componentes, ¿cuál no forma parte de la arquitectura de Gestión OSI?:", answers: ["Estructura de la Información de Gestión (SMI).", "Base de Información de Gestión (MIB).", "Servicios de Información de Gestión Común (CMIS).", "Todas las respuestas anteriores forman parte de la arquitectura de Gestión OSI."], correct: 3 },
    
    { question: "66. En el departamento de Salud Pública se han adquirido 10 nuevos ordenadores. ¿Cuál de los siguientes dispositivos utilizarías para conectarlos a su misma Red de Área Local ofreciendo las mejores prestaciones?", answers: ["Un Router o encaminador.", "Un switch o conmutador.", "Un módem.", "Un hub o concentrador."], correct: 1 },
    
    { question: "67. El identificador a nivel mundial (OUI), asignado por IEEE y extendido por los fabricantes, de los adaptadores de Fibra de los hosts se denomina:", answers: ["WWN.", "WWW.", "MAC.", "IPFC"], correct: 0 },
    
    { question: "68. ¿Cuál de las siguientes afirmaciones relacionada con los medios de transmisión utilizados en las redes de comunicaciones es falsa?:", answers: ["Los cables de par trenzado de cobre más utilizados se pueden clasificar en tres grandes tipos: no apantallado (UTP), apantallado (STP) y parcialmente apantallado o con pantalla global (FTP).", "Los pares de cobre de los cables utilizados en comunicaciones se trenzan para aumentar la diafonía producida por los cables adyacentes.", "La fibra óptica se puede clasificar en fibra óptica multimodo y fibra óptica mono modo.", "La fibra óptica monomodo permite transmisiones a mayor distancia que la fibra óptica multimodo."], correct: 1 },
    
    { question: "69. ¿Cuál de las siguientes afirmaciones acerca de SNMP es incorrecta?", answers: ["El método de autenticación para SNMPv1 está basado en una contraseña (comunidad) que viaja en texto plano (sin encriptar) por la red.", "SNMPv2 refuerza las prestaciones de seguridad, incluyendo servicios de confidencialidad, integridad y autenticación.", "Un gestor SNMPv1 soporta 5 tipos de PDUs: GET-REQUEST, SET-REQUEST, GET-RESPONSE, GET-NEXT-REQUEST Y TRAP.", "Un gestor SNMPv2 añade 2 nuevos tipos de PDUs: GET-BUlK-REQUEST e INFORM-REQUEST."], correct: 1 },
    
    { question: "70. Dentro del protocolo TCP/IP, el comando arp -a:", answers: ["Muestra la tabla RARP con la relación entre direcciones MAC e IP.", "Muestra la tabla ARP con la relación entre direcciones IP y MAC.", "Muestra la tabla ARP con la relación entre direcciones IP y puertos UDP.", "Muestra la tabla de direcciones IP con la relación entre direcciones IP y puertos TCP."], correct: 1 },
    
    { question: "71. La unidad de datos intercambiada en la capa de transporte, según el modelo OSI de ISO, es:", answers: ["TPDU.", "Paquete.", "Trama.", "TCDU."], correct: 0 },
    
    { question: "72. Según el estándar ISO/IEC 11801 para la clasificación de fibras multimodo, indicar la respuesta correcta en relación a OM4:", answers: ["Fibra de 62.5/125 micras.", "Fibra de 50/125 micras.", "Fibra de 50/25 micras.", "Fibra de 62/25 micras."], correct: 1 },
    
    { question: "73. La fibra multimodo NO se usa para aplicaciones donde el producto \"largas distancias por ancho de banda\" deba ser alto, porque:", answers: ["Existen diferentes modos de propagación, con diferentes velocidades de propagación de la señal, llegando la misma distorsionada al receptor.", "El coste de fabricación de un segmento continuo se incrementa cuadráticamente con la distancia (mientras que en la monomodo lo hace linealmente).", "Requiere transmitir en la segunda ventana, lo que unido a la potencia óptica necesaria por larga distancia hace que aumente prohibitivamente el coste.", "Requiere, para amplificar la señal a largas distancias, EDFAs (Erbium Doped Fibre Amplifier), mientras que en monomodo hay amplificadores más baratos."], correct: 0 },
    
    { question: "74. En el ámbito de las redes informáticas, el tiempo que tarda un paquete enviado desde un emisor en volver a este mismo emisor habiendo pasado por el receptor de destino es conocido como:", answers: ["Jitter.", "Delay.", "Round Trip delay Time.", "Latencia."], correct: 2 },
    
    { question: "75. Señale cuál de las siguientes NO es una Protocol Data Unit (PDU) del protocolo SNMP v3:", answers: ["SetRequest PDU", "InformRequest PDU", "Report PDU", "GetBackRequest PDU"], correct: 3 },
    
    { question: "76. Cuál de las siguientes afirmaciones sobre el protocolo de enrutamiento OSPF (Open Shortest Path First) es INCORRECTA:", answers: ["OSPF enruta paquetes basándose únicamente en la dirección IP destino.", "Utiliza un método basado en el algoritmo de Dijkstra para el cálculo de la ruta óptima.", "En OSPF un sistema autónomo (AS) es un conjunto de redes bajo una administración común.", "Al operar OSPF internamente en un sistema autónomo (AS), no puede enviar ni recibir rutas a otros AS."], correct: 3 },
    
    { question: "77. ¿Cuál de las siguientes afirmaciones sobre el protocolo de encaminamiento OSPF es verdadera?", answers: ["OSPF responde a las siglas Open Software Path First.", "Utiliza el algoritmo Dijkstra para encontrar el trayecto más corto.", "Se encapsula directamente sobre el protocolo IP poniendo \"98\" en el campo protocolo.", "OSPF for IPv6 se rige por la RFC 5430."], correct: 1 },
    
    { question: "78. En conmutación de paquetes, ¿cuál de las siguientes afirmaciones con respecto a la multiplexación por división de tiempo es correcta?", answers: ["En la multiplexación síncrona no hay preasignación de ranuras temporales.", "En la multiplexación asíncrona se asigna siempre la misma ranura de tiempo a cada dispositivo.", "En la multiplexación síncrona el número de dispositivos debe ser igual al número de ranuras de tiempo disponibles.", "En la multiplexación asíncrona el retardo es variable."], correct: 3 },
    
    { question: "79. ¿Cuál de los siguientes protocolos proporciona la capacidad de hacer seguras las comunicaciones a través de una LAN, WAN e Internet?", answers: ["ICMP", "BGP", "OSPF", "IPSec"], correct: 3 },
    
    { question: "80. Las capas que considera el modelo OSI son:", answers: ["Aplicación, Presentación, Conexión, Transporte, Red, Enlace de datos y Físico.", "Aplicación, Presentación, Sesión, Transporte, Red y Físico.", "Aplicación, Presentación, Conexión, Red, Enlace de datos y Cableado.", "Aplicación, Presentación, Sesión, Transporte, Red, Enlace de datos y Físico."], correct: 3 },
    
    { question: "81. En que capa, de las que normalmente se divide la arquitectura de protocolos TCP/IP, encajaría el protocolo UDP:", answers: ["Capa de Acceso a Red.", "Capa Física.", "Capa de Aplicación.", "Capa de Transporte."], correct: 3 },
    
    { question: "82. ¿Cuál es el tamaño de las direcciones usadas en IPv6?", answers: ["128 bits", "64 bits", "32 bits", "16 bits"], correct: 0 },
    
    { question: "83. ¿Cuál de las siguientes características corresponde al protocolo UDP?", answers: ["Es un protocolo de enrutamiento dinámico.", "Es un protocolo de capa 3 del modelo OSI.", "Es un protocolo que proporciona un servicio orientado a conexión.", "Es un protocolo que proporciona un servicio no orientado a conexión."], correct: 3 },
    
    { question: "84. ¿Qué tipo de registro DNS devuelve el servidor asociado a un dominio de correo electrónico?", answers: ["MX", "PTR", "HINFO", "A"], correct: 0 },
    
    { question: "85. ¿Cuál de los siguientes es un tipo de mensaje BGPv4?", answers: ["Hello", "Link State Request", "Open", "Database Description"], correct: 2 },
    
    { question: "86. El protocolo de gestión de claves que se utiliza en IPSec se conoce como:", answers: ["ISAKMP", "RSA", "DES", "ESP"], correct: 0 },
    
    { question: "87. Cual de las siguientes afirmaciones es correcta en relación con el campo de la cabecera UDP \"Suma de Verificación\":", answers: ["Es obligatorio y se calcula sólo sobre la cabecera del segmento UDP.", "Es opcional y se almacena como 0 si no se calcula.", "En la cabecera UDP no existe el campo \"Suma de Verificación\".", "Es obligatorio y se calcula sobre el segmento UDP completo."], correct: 1 },
    
    { question: "88. En un cable cruzado para Ethernet, los hilos que se cruzan son:", answers: ["el 1 con el 3 y el 2 con el 6", "el 1 con el 2 y el 3 con el 6", "el 1 con el 4 y el 2 con el 5", "el 1 con el 2 y el 4 con el 5"], correct: 0 },
    
    { question: "89. Una dirección MAC esta compuesta por 48 bit de los cuales:", answers: ["los 17 primeros identifican al fabricante y los 32 finales al dispositivo.", "los 24 primeros identifican al fabricante y los 24 finales al dispositivo.", "los 16 finales identifican al fabricante y los 32 primeros al dispositivo.", "en una dirección MAC no se puede distinguir al fabricante."], correct: 1 },
    
    { question: "90. El protocolo APIPA proporciona una dirección ip en caso de no obtener ninguna de un servidor que la proporcione de forma dinámica. ¿Cuál de las siguientes direcciones podría ser proporcionada por APIPA?", answers: ["192.168.0.1", "199.15.0.0", "150.214.0.1", "169.254.0.1"], correct: 3 },
    
    { question: "91. El protocolo de determinación de claves para IPsec es:", answers: ["Diffie-Hellman", "ISAKMP", "Oakley", "Blowfish"], correct: 2 },
    
    { question: "92. El protocolo Ipsec, en el modelo OSI esta en la capa de:", answers: ["aplicación", "trasporte", "red", "sesión"], correct: 2 },
    
    { question: "93. ¿Qué protocolo de red permite obtener los parámetros de configuración de red incluida la dirección ip?", answers: ["ARP", "UDP", "RARP", "DHCP"], correct: 3 },
    
    { question: "94. En una determinada señal digital, el periodo es dos veces el ancho del impulso. El ciclo de trabajo es:", answers: ["100%", "200%", "50 %", "25%"], correct: 2 },
    
    { question: "95. En general un multiplexor tiene:", answers: ["una entrada de datos, varias salidas de datos y entradas de selección.", "una entrada de datos, una salida de datos y una entrada de selección.", "varias entradas de datos, varias salidas de datos y entradas de selección.", "varias entradas de datos, una salida de datos y entradas de selección."], correct: 3 },
    
    { question: "96. Una de las siguientes afirmaciones es cierta, ¿cuál?", answers: ["un conmutado con capacidad de VLAN puede encaminar datagramas entre redes distintas", "no se puede usar un Hub para conectar entre si dos routers", "el protocolo Spanning tree evita que se creen bucles de retransmisiones infinitas entre conmutadores", "un router hace de control de flujo usando un mecanismo de ventana deslizante."], correct: 2 },
    
    { question: "97. En el modelo OSI la capa de enlace:", answers: ["se encarga de envío de bits en un medio físico de transmisión.", "es la capa en la que se toman los bits que se entrega la capa física y los agrupa en cientos o miles de bits para formar los frames.", "se encarga de controlar la operación de la subred y decide como hacer que los paquetes lleguen a su destino.", "establece, administra y finaliza las sesiones de comunicación entre las entidades de la capa de aplicación."], correct: 1 },
    
    { question: "98. En relación a los servicios de OSI, ¿cuál de las siguientes definiciones es FALSA?", answers: ["Es un conjunto de primitivas (operaciones) que una capa proporciona a la capa que está sobre ella.", "Define qué operaciones puede realizar la capa en beneficio de sus usuarios, pero no dice nada de cómo se implementan tales operaciones.", "Es un conjunto de reglas que rigen el formato y el significado de los paquetes o mensajes que se intercambian las entidades iguales en una capa.", "Está relacionado con la interfaz entre dos capas, donde la capa inferior es la que provee el servicio y la superior, quien lo recibe."], correct: 2 },
    
    { question: "99. Un Brouter puede ser configurado para funcionar simultáneamente como:", answers: ["bridge y switch.", "router y switch.", "bridge y router.", "router y hub."], correct: 2 },
    
    { question: "100. Los Protocolos TCP y UDP, son protocolos de:", answers: ["nivel físico", "nivel de red", "nivel de transporte", "nivel de aplicación"], correct: 2 },
    
    { question: "101. Un switch es un dispositivo de interconexión de redes, que opera en:", answers: ["el nivel de red.", "el nivel físico.", "el nivel de enlace.", "el nivel de aplicación."], correct: 2 },
    
    { question: "102. La dirección canónica de un puente o bridge es la dirección:", answers: ["MAC del interface principal del puente.", "IP del interface principal del puente.", "MAC del puente.", "Del interface de rango numérico más alto del puente."], correct: 2 },
    
    { question: "103. ICMP envía mensajes en forma de datagramas que permiten al conjunto del protocolo TCP/IP realizar entre otras las siguientes funciones, señale la FALSA:", answers: ["Control de flujo.", "Detección de destinos inalcanzables.", "Encriptación de paquetes.", "Pruebas de conectividad."], correct: 2 },
    
    { question: "104. Señale cuál de las siguientes afirmaciones es correcta en relación a la MTU (Maximum Transfer Unit) en redes IP, la MTU del camino es el valor de la:", answers: ["suma de todas las MTU entre el receptor y el emisor.", "media aritmética de todas las MTU entre el receptor y el emisor.", "MTU más baja de todos los enlaces a lo largo del camino entre nodos receptor y emisor.", "MTU más alta de todos los enlaces a lo largo del camino entre nodos receptor y emisor."], correct: 2 },
    
    { question: "105. ¿Qué protocolo utiliza traceroute para obtener la ruta que se sigue desde nuestro equipo hasta otro en Internet?", answers: ["Ping", "ICMP", "PPP", "BGP"], correct: 1 },
    
    { question: "106. En el protocolo SNMP, los valores de comunidad por defecto son:", answers: ["Para lectura \"Rmib\" y para escritura \"Wmib\".", "Para lectura \"Rmib\" y para escritura \"Writemib\".", "Para lectura \"public\" y para escritura \"private\".", "Para lectura \"rmis\" y para escritura \"wmis\"."], correct: 2 },
    
    { question: "107. En el modelo OSI, un protocolo es:", answers: ["Un conjunto de reglas, semánticas y sintácticas, que utiliza un nivel N para relacionarse con el mismo nivel de otro sistema.", "EI conjunto de reglas, semánticas y sintácticas, que utiliza un nivel N para relacionarse con los niveles inmediatamente superior e inferior.", "El conjunto de reglas, semánticas y sintácticas, que utiliza un nivel N para utilizar servicios del sistema.", "Ninguna de las anteriores."], correct: 0 },
    
    { question: "108. ¿Qué conectan los routers?:", answers: ["Puentes y repetidores.", "Puentes y hubs.", "Dos o más redes.", "Hubs y nadas."], correct: 2 },
    
    { question: "109. Dentro de la arquitectura de TCP/IP, el protocolo ARP se encuentra en la capa:", answers: ["De acceso a la red.", "De Internet.", "De transporte.", "De aplicación."], correct: 1 },
    
    { question: "110. ¿Qué capa del modelo OSI se encarga de la detección de errores, la topología de red y el acceso al medio?", answers: ["La capa física.", "La capa de enlace a datos.", "La capa de transporte.", "La capa de red."], correct: 1 },
    
    { question: "111. Indique la afirmación incorrecta en relación a las redes de clase B del protocolo IPv4:", answers: ["En una red de clase B se pueden conectar un máximo de 65.536 (2 elevado a 16) hosts distintos.", "255.255.0.0 es una máscara de una red de clase B.", "Puede haber 16.384 (2 elevado a 14) redes de clase B distintas.", "La dirección de una red de clase B tiene el primer bit a 1 y el segundo a 0."], correct: 0 },
    
    { question: "112. Las fibras ópticas se clasifican en:", answers: ["Fibra monomodo, fibra multimodo de índice escalonado y fibra multimodo de índice gradual.", "Fibra monomodo, fibra multimodo simple y fibra multimodo de índice expectral.", "Fibra monomodo, fibra multimodo de índice simple y fibra multimodo de índice gradual.", "Fibra monomodo, fibra multimodo de índice simple y fibra multimodo de índice expectral."], correct: 0 },
    
    { question: "113. Señale la afirmación correcta en relación a la arquitectura IPSec:", answers: ["IPSec proporciona servicios de seguridad a nivel de transporte TCP.", "IPSec utiliza los protocolos de seguridad AH y ESP.", "En el modo transporte de IPSec se cifra completamente el paquete IP original.", "IPSec retransmite los paquetes erróneos que se reciben."], correct: 1 },
    
    { question: "114. En qué capa del modelo OSI opera un router, un switch y un bridge:", answers: ["1, 2 y 3 respectivamente.", "3, 2 y 1 respectivamente.", "3, 3 y 2 respectivamente.", "3, 2 y 2 respectivamente."], correct: 3 },
    
    { question: "115. En relación a la fibra óptica, ¿cuál de las siguientes afirmaciones es correcta?", answers: ["Utiliza conectores RJ45.", "El índice de refracción del núcleo es menor que el índice de refracción de la cubierta.", "Existen tres ventanas de transmisión, la primera ventana con una longitud de onda de 820 nm, la segunda ventana de 1.310 nm y la tercera de 1.550 nm.", "Existen dos tipos de Fibra Óptica: thin o thick."], correct: 2 },
    
    { question: "116. En una infraestructura de fibra óptica mH (Fiber To The Home), el dispositivo terminal que da acceso a la vivienda y que finaliza la infraestructura sobre fibra se denomina:", answers: ["Off (Optical Ending Termination).", "ONT (Optical Network Termination).", "OTP (Optical Termination Point).", "ETP (Ending Termination Point)."], correct: 1 },
    
    { question: "117. ¿Cuál de las siguientes afirmaciones sobre el campo TTL de un paquete IP es verdadera?", answers: ["TTL responde a las siglas Total Timing Live.", "Ocupa 4 bits, por lo que el número máximo de saltos que puede dar un paquete es 16.", "El valor de este campo se incrementa en uno en cada nodo.", "Cuando el campo alcanza el valor cero el paquete se descarta."], correct: 3 },
    
    { question: "118. En una dirección IPv6 unicast, el identificador de interfaz:", answers: ["Se corresponde con los 48 bits de mayor peso.", "Permite identificar una subred.", "Se puede calcular a partir de la dirección MAC del dispositivo.", "Se corresponde con los 64 bits de mayor peso."], correct: 2 },
    
    { question: "119. Si se utilizan 5 bits en el protocolo IP para identificar los hosts de una subred, ¿cuántos hosts pueden direccionarse?", answers: ["29", "30", "31", "32"], correct: 1 },
    
    { question: "120. ¿Para qué sirve el protocolo SNMP?", answers: ["Para el envío de correos electrónicos.", "Para comunicar información de gestión de la red entre las estaciones de gestión y los agentes.", "Para el establecimiento de seguridad entre dos terminales.", "Para envío de ficheros entre un servidor y un cliente."], correct: 1 }
];