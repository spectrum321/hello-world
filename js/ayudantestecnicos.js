const ayudantestecnicos = [
    
    { question: "42. La Free Software Foundation (FSF) define el software libre como aquel que respeta la libertad de los usuarios, y enumera cuatro libertades esenciales para el software. Identifique cuál de las siguientes no es una de ellas:", answers: ["La libertad de usar el programa con cualquier propósito", "La libertad de estudiar cómo funciona el programa y adaptarlo a las necesidades", "La libertad de mejorar el programa y cobrar por las mejoras a los demás, para así beneficiar a la industria del software libre", "La libertad de distribuir copias del programa"], correct: 2 },
    
    { question: "43. Un software libre cuyos términos de distribución no permite a los redistribuidores agregar ninguna restricción adicional de licenciamiento cuando lo redistribuyen o modifican, es decir, la versión modificada debe ser también libre, se denomina:", answers: ["FreeWare", "Shareware", "Software con copyleft", "Malware"], correct: 2 },
    
    { question: "44. Señale cuál de los siguientes es un elemento que forma parte de la CPU (Unidad Central de Procesamiento):", answers: ["ALU", "DMA", "AMD", "RISC-V"], correct: 0 },
    
    { question: "45. Indique cuál de las siguientes opciones se corresponde con una versión de memorias DDR (Double Data Rate) que usa módulos DIMM de 288 contactos:", answers: ["DDR", "DDR2", "DDR3", "DDR4"], correct: 3 },
    
    { question: "46. Indique cuál de las siguientes opciones se corresponde con una arquitectura de procesadores empleadas en dispositivos móviles:", answers: ["MTU", "IOT", "ARM", "DMI"], correct: 2 },
    
    { question: "47. Identifique cuál es el comando que al ejecutarse en un ordenador con Windows 11 mostrará el listado de los servicios en ejecución:", answers: ["Net view active", "Net start all", "Net view", "Net start"], correct: 3 },
    
    { question: "48. Identifique cuál es el comando que al ejecutarse en un ordenador con Windows 11 mostrará información sobre la configuración de políticas de cuentas y contraseñas de una máquina local:", answers: ["Net config", "Net accounts", "Net passwords", "Net principals"], correct: 1 },
    
    { question: "49. Identifique cuál de las siguientes opciones se corresponde con la versión más reciente del sistema operativo macOS:", answers: ["Sonoma", "Monterey", "Ventura", "Big Sur"], correct: 0 },
    
    { question: "53. Las bases de datos relacionales ofrecen propiedades ACID. Identifique las propiedades a las que se refiere dicho acrónimo:", answers: ["Atomicidad, Consistencia, Aislamiento y Durabilidad", "Atomicidad, Coherencia, Integridad y Distribución", "Autenticidad, Cohesión, Interoperabilidad y Depuración", "Atomicidad, Consistencia, Aislamiento y Disponibilidad"], correct: 0 },
    
    { question: "54. Identifique cuál no es un Sistema de Gestión de Bases de Datos (SGBD) relacional:", answers: ["MongoDB", "MariaDB", "PostgreSQL", "MySQL"], correct: 0 },
    
    { question: "56. Dentro del marco de ITIL (Information Technology Infrastructure Library), identifique qué enunciado describe mejor una buena práctica relacionada con la gestión de servicios de TIC y las relaciones con los usuarios:", answers: ["Designar a múltiples puntos de contacto para garantizar una rápida resolución de problemas", "Establecer un único punto de contacto (SPOC) para que los usuarios reporten problemas y soliciten asistencia", "Delegar la responsabilidad de comunicarse con los usuarios en diferentes equipos de TIC según el tipo de problema", "Requerir que los usuarios se comuniquen directamente con los técnicos de soporte sin intermediarios"], correct: 1 },
    
    { question: "58. Indique qué distribución de Linux no está basada en Debian:", answers: ["Ubuntu", "PureOS", "CentOS", "Knoppix"], correct: 2 },
    
    { question: "60. Indique qué conjunto de caracteres ASCII incluye caracteres latinos y otros símbolos adicionales:", answers: ["ASCII básico", "ASCII ampliado", "ASCII extendido", "ASCII avanzado"], correct: 2 },
    
    { question: "61. Indique cuál es un conocido framework para el desarrollo de aplicaciones móviles basadas en tecnologías estándar HTML5, CSS y Javascript:", answers: ["Naturgy", "Apache Cordova", "Apache Nifi", "Open Mobility"], correct: 1 },
    
    { question: "64. En el lenguaje de programación C, indique qué función permite realizar una reserva dinámica de memoria:", answers: ["memcpy", "memset", "malloc", "strcpy"], correct: 2 },
    
    { question: "65. Seleccione la opción que contenga únicamente tipos de eventos que pueden desencadenar el inicio de la ejecución de un proceso BPMN 2.0:", answers: ["Message y Link", "Escalation y Link", "Message y Termination", "Timer y Signal"], correct: 3 },
    
    { question: "68. En un sistema RAID en el que los datos se reparten en múltiples discos con los 'bits de paridad' en un único disco, se habla de:", answers: ["RAID 1", "RAID 0+1", "RAID 3", "RAID 5"], correct: 3 },
    
    { question: "69. Un defecto o debilidad en el diseño, implementación u operación de un sistema de información que habilita o facilita la materialización de una amenaza es:", answers: ["Un peligro", "Una vulnerabilidad", "Un incidente de seguridad", "Un riesgo"], correct: 1 },
    
    { question: "77. En el contexto de la Norma Técnica de Interoperabilidad de Documento Electrónico, indique cuál de las siguientes afirmaciones es correcta para un Código Seguro de Verificación CSV:", answers: ["Es uno de los metadatos mínimos obligatorios del documento electrónico", "Es un posible tipo de firma electrónica", "Es un código HASH biunívoco del identificador del documento electrónico respecto a su contenido", "Es un código HASH biunívoco del contenido del documento electrónico respecto a su(s) firma(s) electrónica(s)"], correct: 2 },
    
    { question: "78. El Anexo I de la Norma Técnica de Interoperabilidad de Documento Electrónico define los metadatos mínimos obligatorios del documento electrónico. Seleccione la opción que contenga un valor no perteneciente al esquema valores del metadato 'Tipo documental':", answers: ["Documento de cabecera", "Notificación", "Diligencia", "Acuse de recibo"], correct: 2 },
    
    { question: "79. La Norma Técnica de Interoperabilidad de Digitalización de Documentos establece que el nivel de resolución mínimo para imágenes electrónicas, tanto para imágenes obtenidas en blanco y negro, color o escala de grises, será de:", answers: ["180 píxeles por pulgada", "200 píxeles por pulgada", "250 píxeles por pulgada", "280 píxeles por pulgada"], correct: 1 },
    
    { question: "80. En relación con el protocolo HLS, definido en la RFC 8216, indique la afirmación correcta:", answers: ["HLS es incompatible con la codificación H.264", "HLS soporta una transmisión con tasa de bits adaptativa", "HLS transporta segmentos en formato MPEG-DASH", "HLS utiliza como protocolo de transporte el RMTP"], correct: 1 },
    
    { question: "81. En relación con los ficheros de audio, indique qué respuesta corresponde a formatos de audio sin comprimir:", answers: ["MPEG2 y MKV", "MP3 y OGG", "WMA y AAC", "WAV y AIFF"], correct: 3 },
    
    { question: "82. La codificación de vídeo muy eficiente (HEVC - High Efficiency Video Coding) es una norma que define el formato compresor de vídeo. Indique qué nombre recibe según la ITU-T:", answers: ["H.261", "H.232", "H.265", "MOV"], correct: 2 },
    
    { question: "83. Indique cuál es una extensión usual de un fichero de copia de seguridad con clave privada de un certificado electrónico:", answers: [".p12", ".pk2", ".pkc", ".crt"], correct: 0 },
    
    { question: "84. En relación con los formatos de firma electrónica, indique cuál de las siguientes respuestas corresponde a una enumeración de formatos de firma electrónica:", answers: ["FNMT, Camerfirma y Verisign", "CAdES, XAdES y PAdES", "PKCS#11, PKCS#12 y PKCS#7", "AES-T, DES-3C y AdesM"], correct: 1 },
    
    { question: "85. Indique qué opción utilizaría si necesita comprobar el estado de un certificado electrónico para saber si está revocado:", answers: ["VCRP", "CRLP", "OCSP", "RCCP"], correct: 2 },
    
    { question: "86. Indique qué respuesta no es un software utilizado para la clonación de equipos:", answers: ["True Image", "Gmao Software", "Norton Ghost", "Clonezilla"], correct: 1 },
    
    { question: "87. Indique cuál es el componente del protocolo WoL (Wake on LAN) que consiste en un paquete que se envía por la red local compuesto por una cadena de 6 bytes de valor 255 en hexadecimal, seguida por 16 repeticiones de la dirección MAC del equipo al que se le envía:", answers: ["Paquete Mágico", "Paquete Despertador", "Componente WL", "Componente Llamada"], correct: 0 },
    
    { question: "88. Respecto a los productos de virtualización, indique la afirmación correcta:", answers: ["Citrix Hypervisor es una solución de virtualización de Google", "Hyper-V es una solución de virtualización de Oracle", "VM VirtualBox es una solución de virtualización de Microsoft", "UDS Enterprise es una solución de virtualización de Virtual Cable"], correct: 3 },
    
    { question: "89. Seleccione la opción correcta con respecto al hipervisor VMware ESXi:", answers: ["Es de tipo 1 o bare metal, esto es, se ejecuta directamente en el hardware sin necesidad de un sistema operativo anfitrión", "Es de tipo 2 o hosted, esto es, requiere de un sistema operativo anfitrión sobre el que ejecutarse", "Está orientado específicamente a la virtualización de almacenamiento", "Está basado en el proyecto Docker"], correct: 0 },
    
    { question: "90. Indique cuál es una plataforma de tecnología open source que utiliza recursos virtuales agrupados para diseñar y gestionar nubes privadas y públicas y permite proporcionar infraestructura como servicio (IaaS):", answers: ["OpenVMS", "OpenStack", "OpenCloud", "OVirt"], correct: 1 },
    
    { question: "91. Indique qué respuesta no corresponde a una plataforma tecnológica que ofrece servicio de infraestructura de escritorio virtual (VDI):", answers: ["VMWare Horizon", "Citrix Virtual Apps and Desktop (CVads)", "Meta Quest", "Azure Virtual Desktop"], correct: 2 },
    
    { question: "92. Indique cuál es la máscara de red de aquella que tiene un CIDR /23:", answers: ["255.255.255.0", "255.255.254.0", "255.255.0.0", "254.0.0.0"], correct: 1 },
    
    { question: "93. Indique qué protocolo no es utilizado para establecer redes privadas virtuales (VPN):", answers: ["PPTP", "OSPF", "L2TP/IPsec", "SSTP"], correct: 1 },
    
    { question: "94. En relación con VLAN, indique cuál de las siguientes respuestas utilizaría como protocolo de etiquetado:", answers: ["IBP", "IEEE 805.1x", "GBP", "IEEE 802.1Q"], correct: 3 },
    
    { question: "95. En relación con los servidores de nombre de dominio, indique qué respuesta no es un registro común de DNS definido por la IANA:", answers: ["MX", "CNAME", "BID", "TXT"], correct: 2 },
    
    { question: "96. Indique qué opción utilizaría para autenticación y autorización en protocolos de internet como IMAP, LDAP, SMTP o POP3:", answers: ["SALF (Simple Authentication Layer Face)", "SASL (Simple Authentication and Security Layer)", "SKA (Security Key Authentication)", "SAP (Simple Authentication Password)"], correct: 1 },
    
    { question: "97. Indique cuáles son los puertos estándar TCP que usan los protocolos de correo IMAP/POP3 (respectivamente):", answers: ["25/465", "110/995", "143/110", "121/963"], correct: 1 },
    
    { question: "98. El modelo de servicio que permite a los usuarios finales suscritos conectarse a aplicaciones del proveedor basadas en la nube a través de Internet y usarlas, se denomina:", answers: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)", "Software as a Service (SaaS)", "User as a Service (UaaS)"], correct: 2 },
    
    { question: "99. La tecnología MU-MIMO (Multi User Multiple-Input Multiple-Output) en Wi Fi se introdujo a partir del estándar:", answers: ["WI-FI 4 (802.11n)", "WI-FI 5 (802.11ac)", "WI-FI 6 (802.11ax)", "WI-FI 7 (802.11bz)"], correct: 1 },
    
    { question: "100. Indique cuál de las siguientes funcionalidades está disponible como parte de la funcionalidad principal de GLPI, un sistema de gestión de incidencias de usuario de código abierto, sin depender de añadidos o integraciones con otros programas:", answers: ["Monitorización de red en tiempo real", "Gestión de inventario de hardware y software", "Creación de informes de rendimiento del servidor", "Automatización de pruebas de seguridad de red"], correct: 1 },
    
    { question: "103. Identifique, de las siguientes respuestas, cuál no es correcta:", answers: ["En Windows de 64 bits, un proceso de 64 bits no puede cargar directamente una biblioteca de vínculos dinámicos (DLL) de 32 bits", "En Windows de 64 bits, un proceso de 32 bits no puede cargar directamente una biblioteca de vínculos dinámicos (DLL) de 64 bits", "En Windows de 64 bits, se admiten llamadas a procedimientos remotos (RPC) entre procesos de 32 y 64 solo en el mismo equipo", "En Windows de 64 bits, un proceso de 32 bits puede cargar una biblioteca de vínculos dinámicos (DLL) de 32 bits utilizando el mecanismo de compatibilidad WoW64, que permite la ejecución de aplicaciones de 32 bits en un entorno de 64 bits"], correct: 2 },
    
    { question: "104. En relación con la firma electrónica avanzada, indique cuál de las siguientes opciones es la que añade los certificados y la información de revocación de los mismos, para su validación a largo plazo:", answers: ["AdES – XL", "BES", "AdES – T", "eIdas"], correct: 0 },
    
    { question: "105. Indique en qué versión de la Máquina Virtual Java (JVM) aparecen por primera vez las expresiones lambda:", answers: ["Java 7", "Java 8", "Java 11", "Java 12"], correct: 1 }
];
