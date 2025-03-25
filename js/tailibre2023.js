const tailibre2023 = [
    
    { question: "12. El periodo de vigencia de los certificados cualificados:", answers: ["No será superior a 5 años.", "No será superior a 3 años.", "Es ilimitado.", "No será superior a 6 años."], correct: 0 },
    
    { question: "13. ¿Cuál de los siguientes NO es un derecho digital?", answers: ["Derecho al testamento digital.", "Derecho al olvido en servicios de redes sociales y servicios equivalentes.", "Derecho a la desconexión digital en el ámbito laboral.", "Derecho a la igualdad y a la no discriminación en el entorno digital."], correct: 3 },
    
 //   { question: "14. Según establece el artículo 34 de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, los responsables y encargados de tratamiento comunicarán a la Agencia Española de Protección de Datos, las designaciones, nombramientos y ceses de los delegados de protección de datos en el plazo de:", answers: ["10 días.", "15 días.", "1 mes.", "3 meses."], correct: 0 },
    
    { question: "15. ¿Cuál de las siguientes medidas de seguridad afecta a la dimensión de Confidencialidad?", answers: ["Bloqueo de puesto de trabajo.", "Firma electrónica.", "Registro de la actividad.", "Criptografía."], correct: 3 },
    
    { question: "16. Señale la respuesta correcta sobre lo que establece la Norma Técnica de Interoperabilidad de Protocolos de Intermediación de Datos:", answers: ["Las tecnologías utilizadas para los intercambios se implementarán en base a estándares según lo establecido en la Norma Técnica de Interoperabilidad de Catálogo de estándares.", "De forma general en servicios de intercambio se utilizará la versión 2.0 del protocolo SCSP (Sustitución de Certificados en Soporte Papel).", "Emisores y Requirentes no mantendrán trazabilidad de los intercambios de datos producidos.", "Los intercambios de información se podrán implementar a través de servicios web."], correct: 3 },
    
    { question: "17. Señale qué afirmación es correcta con respecto a las soluciones de Ciberseguridad proporcionadas por el Centro Criptológico Nacional (CCN):", answers: ["CLARA, protección y trazabilidad del dato.", "ELENA, Simulador de Técnicas de Cibervigilancia.", "GLORIA, Gestión de eventos e información de seguridad.", "MONICA, Gestor de logs para responder ante incidentes y amenazas."], correct: 1 },
    
    { question: "18. Señale la respuesta correcta referente a los servicios comunes en materia de administración electrónica:", answers: ["SERVINOMINA realiza la gestión completa de las fases de nómina: cálculo, contabilidad y pago.", "CIRCAB poderosa herramienta de trabajo en grupo para intercambio de información y trabajo colaborativo.", "eVISOR permite a un empleado público la consulta de sus nóminas correspondientes a los cinco últimos años.", "ENVIA es una aplicación que hace posible el envío de ficheros de gran volumen entre usuarios."], correct: 1 },
    
    { question: "20. ¿Qué es WCAG?", answers: ["Unas pautas de accesibilidad de contenidos web promovidas por el W3C.", "Una librería de Java EE para la creación de aplicaciones web creada por Oracle.", "Un componente del ecosistema Hadoop para el manejo de Big Data.", "Un framework javascript especialmente indicado para trabajar con bases de datos no relacionales."], correct: 0 },
    
    { question: "21. ¿Cuál de los siguientes es el nombre de un conector usado para carga y datos creado por el fabricante Apple?", answers: ["USB-Tipo C", "iUSB", "iFirewire", "Lightning"], correct: 3 },
    
    { question: "22. Con respecto a las sentencias del lenguaje SQL, indique la respuesta INCORRECTA:", answers: ["Sentencia DELETE sirve para borrar en forma sencilla distintos objetos como por ejemplo base de datos, tablas o índices.", "La sentencia INSERT agrega uno o más registros a una tabla en una base de datos relacional.", "La sentencia UPDATE modifica los valores de un conjunto de registros existentes en una tabla.", "La sentencia GRANT se utiliza para dar permisos a un usuario."], correct: 0 },
    
    { question: "23. Cuál de los siguientes son los objetos básicos de Kubernetes:", answers: ["Pod, State, Volume, Namespace.", "Pod, Service, Volume, Namespace.", "Job, Service, Volume, Namespace.", "Job, Pod, Volume, Deployment."], correct: 1 },
    
    { question: "24. La ALU es una parte de:", answers: ["La memoria.", "La CPU.", "El bus de operaciones.", "El multiplexor de entrada."], correct: 1 },
    
    { question: "25. Señale la respuesta correcta sobre el modelo CISC:", answers: ["La microprogramación es una característica esencial.", "Plantea un conjunto reducido de instrucciones para reducir el número de ciclos de reloj de ejecución de cada una de ellas.", "Implementa las instrucciones directamente en hardware.", "Está muy extendido en el mercado de procesadores para smartphone y tablets por su bajo consumo y buen rendimiento."], correct: 0 },
    
    { question: "26. En relación con los sistemas RAID señale la respuesta INCORRECTA:", answers: ["El RAID 1+0 exige un mínimo de 4 discos.", "RAID 6 amplía el RAID 5 agregando un bloque de paridad.", "RAID 5 necesitará un mínimo de 3 discos para ser implementado.", "Un RAID 4 distribuye la información a nivel de bloques con dos discos de paridad dedicados."], correct: 3 },
    
    { question: "27. ¿Cuál de las siguientes es una tecnología de almacenamiento en disco mediante bus serie?", answers: ["SATA", "ATA", "SCSI", "DLT"], correct: 0 },
    
    { question: "28. Respecto a la norma USB indique la respuesta INCORRECTA:", answers: ["USB Type-C es lo mismo que USB 3.1", "La diferencia entre USB 3.1 Gen 1 y USB 3.1 Gen 2 se reduce solamente a la velocidad.", "USB 3.2 permite velocidades de hasta 20 Gbps.", "Los dispositivos USB 2.0 pueden lograr una velocidad de transferencia máxima hasta de 480 Mbps."], correct: 0 },
    
   // { question: "29. En teoría de grafos, el algoritmo para la determinación del camino más corto, dado un vértice origen, hacia el resto de los vértices en un grafo que tiene pesos en cada arista se denomina:", answers: ["Algoritmo de Kruskal.", "Algoritmo de Prim.", "Algoritmo de Dijkstra.", "Algoritmo de Floyd-Warshall."], correct: 2 },
    
    { question: "30. Con respecto a los estándares PDF, señale que afirmación NO es correcta:", answers: ["PDF/UA Es el estándar global para la accesibilidad de PDF.", "PDF/A proporciona las especificaciones para crear, ver e imprimir documentos digitales para conservarlos a largo plazo.", "PDF/E proporciona especificaciones para crear, ver e imprimir documentos utilizados en flujos de trabajo de ingeniería.", "PDF/I proporciona especificaciones para crear, ver e imprimir páginas finales listas para imprimir o listas para la prensa."], correct: 3 },
    
    { question: "31. ¿Cuál de las versiones siguientes es la más reciente del sistema operativo macOS?", answers: ["macOS Sierra", "macOS Monterey", "macOS Big Sur", "macOS Sequoia"], correct: 3 },
    
    { question: "32. Cuál de las siguientes afirmaciones NO es correcta:", answers: ["En Windows de 64 bits, un proceso de 64 bits no puede cargar una biblioteca de vínculos dinámicos (DLL) de 32 bits.", "En Windows de 64 bits, un proceso de 32 bits no puede cargar un archivo DLL de 64 bits.", "En Windows de 64 bits se admiten llamadas a procedimientos remotos (RPC) entre procesos de 64 y 32 bits solo en el mismo equipo.", "En Windows de 64 bits se admiten llamadas a procedimientos remotos (RPC) entre procesos de 64 y 32 bits tanto en el mismo equipo como entre equipos distintos."], correct: 2 },
    
    { question: "33. Las bases de datos relacionales ofrecen propiedades ACID. Dicho acrónimo se refiere a:", answers: ["Atomicidad, Consistencia, Aislamiento y Durabilidad.", "Atomicidad, Coherencia, Integridad y Distribución.", "Disponibilidad, Coherencia, Intensidad y Durabilidad.", "Atomicidad, Consistencia, Aislamiento y Disponibilidad."], correct: 0 },
    
    { question: "34. Entre las características obligatorias de un sistema gestor de bases de datos orientadas a objetos, NO se encuentra:", answers: ["Debe permitir construir objetos complejos.", "El conjunto de tipos de datos debe ser fijo, consiguiendo así mayor eficiencia en las búsquedas.", "Todos los objetos deben tener un identificador que sea independiente de los valores de sus atributos.", "El esquema de una BDOO incluye únicamente un conjunto de clases (o de tipos)."], correct: 1 },
    
    { question: "35. Señale qué es el Machine Learning Services para SQL Server:", answers: ["Es un conjunto de tecnologías destinadas a la copia y distribución de datos y objetos de base de datos desde una base de datos a otra, para luego sincronizar ambas bases de datos y mantener su coherencia.", "Es una característica de SQL Server que proporciona la capacidad de ejecutar scripts de Python y R con datos relacionales.", "Es un producto de calidad de datos basado en conocimiento.", "Es el servicio principal para almacenar, procesar y proteger los datos."], correct: 1 },
    
    { question: "36. Señale la respuesta correcta relativa al Modelo Entidad/Relación Extendido según establece METRICA v3:", answers: ["Un atributo se define sobre diversos dominios.", "El dominio no tiene existencia propia y depende de las entidades, las relaciones o los atributos.", "La entidad es aquel objeto, real o abstracto, acerca del cual se desea almacenar información en la base de datos.", "La clave candidata es el conjunto de atributos que garantizan la unicidad de las ocurrencias e identifican la ocurrencia unívocamente."], correct: 2 },
    
//    { question: "38. Cuál de las siguientes afirmaciones es FALSA:", answers: ["Un intérprete es un programa que ejecuta directamente las instrucciones escritas en un lenguaje de programación dado.", "Un compilador es un programa que transforma el código fuente de un programa a su equivalente en otro lenguaje de programación de más bajo nivel.", "Un transpilador es un programa que hace de intérprete y de compilador al mismo tiempo.", "Un compilador cruzado o cross compiler es un compilador capaz de crear código ejecutable para otra plataforma distinta a aquélla en la que se ejecuta."], correct: 2 },
    
  //  { question: "39. C++ permite especificar más de una función con el mismo nombre en el mismo ámbito. ¿Cómo se denominan estas funciones?", answers: ["Funciones dobles.", "Funciones repetidas.", "Funciones sobrecargadas.", "En C++ no se puede nombrar más de una función con el mismo nombre."], correct: 2 },
    
    { question: "40. Indica, de las siguientes afirmaciones, cuál es verdadera:", answers: ["Un array o vector es un tipo de dato estructurado que permite almacenar un conjunto de datos homogéneo donde cada elemento se almacena de forma consecutiva en memoria.", "Bytecode es el código binario obtenido tras el proceso de compilación (Java).", "C++ es un lenguaje de segunda generación.", "En C++ la declaración del array: «int vector2[] = {1,2,3,4,10,9,80,70,19};», es incorrecta."], correct: 0 },
    
    { question: "41. Señale la respuesta correcta sobre los tipos de controladores (drivers) JDBC:", answers: ["Los drivers tipo 1 utilizan Java puro para implementar un protocolo de red de proveedores del Sistema Gestor de Base de Datos.", "Los drivers tipo 3 utilizan un protocolo de red y middleware para comunicarse con un servidor.", "Según la tecnología utilizada para conectarse a la base de datos, los drivers JDBC se categorizan en 3 tipos diferentes.", "Los drivers tipo 2 son controladores \"puente\", que utilizan otra tecnología (por ejemplo ODBC) para comunicarse con la base de datos."], correct: 1 },
    
    { question: "42. Señale la respuesta INCORRECTA. Los tipos más corrientes de anomalías de base de datos son:", answers: ["Lecturas no repetibles.", "Lecturas hundidas.", "Lecturas sucias.", "Lecturas fantasma."], correct: 1 },
    
    { question: "43. En SQL, ¿cómo se pueden eliminar los datos en una tabla, pero no la propia definición de la tabla?", answers: ["DROP TABLE", "DELETE", "REMOVE", "ERASE"], correct: 1 },
    
    { question: "44. ¿Cuál de los siguientes términos hace referencia a patrones generales de software para asignación de responsabilidades en el diseño orientado a objetos?", answers: ["OOD", "GRASP", "Booch", "Fan-In & Fan-Out"], correct: 1 },
    
    { question: "46. Según METRICA v3, ¿cuál es diagrama que describe en detalle un determinado escenario de un caso de uso?", answers: ["Diagrama de Interacción.", "Diagrama de representación.", "Diagrama de flujo de datos.", "Diagrama de casos de uso."], correct: 0 },
    
    { question: "47. Indique cuál de las siguientes NO es una librería de Java proporcionada por la Apache Foundation:", answers: ["Log4J", "httpclient", "commons-io", "Mockete"], correct: 3 },
    
    { question: "48. Seleccione la respuesta correcta sobre .NET:", answers: [".NET es un marco multiplataforma gratuito de Google para compilar aplicaciones y servicios en la nube.", ".NET es un proyecto de código abierto.", ".NET sirve exclusivamente para desarrollar aplicaciones móviles.", ".NET admite un amplio rango de lenguajes de programación, a excepción de C#"], correct: 1 },
    
 //   { question: "49. Señale la respuesta INCORRECTA referente al objeto POCO en .NET:", answers: ["Es una estructura de datos de .NET que solo contiene propiedades o campos públicos.", "Es el acrónimo de Plain Old CLR Object.", "No hereda de otra clase o implementa una interfaz.", "Podrá contener miembros como: métodos. eventos y delegados."], correct: 3 },
    
    { question: "51. Señale cuál es un estándar OASIS que define los mecanismos para establecer y compartir contextos de seguridad, y para obtener claves de contextos de seguridad:", answers: ["WS-Addressing", "WS-Federation", "WS-SecureConversation", "WS-Policy"], correct: 2 },
    
    { question: "52. Señale la afirmación correcta con respecto a WSIL:", answers: ["Es un método alternativo al descubrimiento de servicios Web.", "Define el modelo de programación y la arquitectura de ejecución para desplegar y buscar servicios Web en el entorno Java EE.", "Define un modo de publicar y encontrar información sobre servicios Web.", "Es una organización diseñada para promover la interoperatividad de servicios Web entre plataformas, sistemas operativos y lenguajes de programación."], correct: 0 },
    
    { question: "53. ¿Cuál es el motor web desarrollado por The Mozilla Foundation?", answers: ["WebKit", "Firefox", "Gecko", "Edge"], correct: 2 },
    
  //  { question: "54. ¿Qué término está relacionado con XML-binary Optimized Packaging (XOP)?", answers: ["Reconstituted XML Infoset", "XOP Header", "XOP Package", "Optimized Document"], correct: 2 },
    
    { question: "55. ¿Cuál de los siguientes NO es un framework para javascript?", answers: ["Angular", "Bootstrap", "React", "JDBC"], correct: 3 },
    
    { question: "56. Para detectar, eliminar y/o mitigar las debilidades de una aplicación se pueden realizar diferentes análisis de seguridad durante el ciclo de vida del desarrollo de software, entre los que NO se encuentra:", answers: ["SAST (Static Application Security Testing).", "S-SDLC (Secure Software Development Liability Control).", "DAST (Dynamic Application Security Testing).", "SCA (Software Composition Analysis)."], correct: 1 },
    
    { question: "57. El principio de la accesibilidad web que exige que los componentes y la navegación de la interfaz de usuario se puedan utilizar por cualquier persona usuaria es:", answers: ["La perceptibilidad.", "La comprensibilidad.", "La robustez.", "La operabilidad."], correct: 3 },
    
    { question: "58. Según METRICA v3, ¿qué tipo de pruebas son las que tienen como objetivo verificar el correcto ensamblaje entre los distintos componentes para comprobar que interactúan correctamente a través de sus interfaces, cubren la funcionalidad establecida y se ajustan a los requisitos no funcionales especificados?", answers: ["Pruebas del sistema.", "Pruebas de implantación.", "Pruebas de regresión.", "Pruebas de integración."], correct: 3 },
    
    { question: "59. Según establece METRICA v3, ¿qué participantes están presentes en la tarea de \"Elaboración de los Manuales de Usuario\"?", answers: ["Usuarios Expertos.", "Consultor de Sistemas de Información.", "Equipo de Formación.", "Equipo de Proyecto."], correct: 3 },
    
    { question: "60. ¿Cuál de las siguientes herramientas NO es un software para el control de versiones?", answers: ["JMeter", "Subversion", "Mercurial", "GIT"], correct: 0 },
    
    { question: "61. Señale la respuesta INCORRECTA sobre el kernel de un Sistema Operativo:", answers: ["Controla todas las funciones importantes del hardware.", "Se encarga del procesamiento paralelo de tareas (multitasking).", "Es el núcleo del procesador.", "Recibe peticiones de servicio de los procesos y los comunica con el hardware."], correct: 2 },
    
    { question: "62. En un sistema UNIX, cuál es la respuesta INCORRECTA:", answers: ["El GID es el número de identificación de grupo.", "El UID es el número de identificación de usuario.", "El administrador del sistema se denomina root.", "El proceso init se refiere al proceso de arranque de un usuario."], correct: 3 },
    
    { question: "63. Respecto a la virtualización de máquinas, indique la opción FALSA:", answers: ["Facilita el despliegue de entornos.", "Requiere aumentar la inversión en hardware específico para la virtualización.", "Posibilita la ejecución de varios sistemas operativos en una única máquina física.", "Permite un aprovechamiento mayor de la capacidad del hardware."], correct: 1 },
    
    { question: "64. Una copia de seguridad (backup) diferencial:", answers: ["Realiza una copia fiel de los datos, lo que implica que un archivo eliminado en el origen, también se eliminará en la copia de seguridad.", "Partiendo de una copia de backup completa, realiza una copia de todos los datos modificados desde que se hizo ese backup completo.", "Realiza una copia sólo de los datos modificados desde el último backup (sea completo o incremental).", "Realiza una copia integral de los datos, copiando todos los contenidos de los sistemas a mantener."], correct: 1 },
    
   // { question: "65. ¿En qué campo del objeto de Kubernetes hay que incluir los valores que permiten identificar unívocamente al objeto?", answers: ["kind", "spec", "apiVersion", "metadata"], correct: 3 },
    
    { question: "66. ¿Cuál de los siguientes NO es un protocolo de correo electrónico?", answers: ["IMAP", "SMTP", "Outlook", "POP3"], correct: 2 },
    
    { question: "67. De los siguientes protocolos, ¿cuál se utiliza para administrar dispositivos de una red?", answers: ["SMTP", "DNS", "FTP", "CMIP"], correct: 3 },
    
    { question: "68. ¿Cuál es el comando usado por el administrador SNMP que se utiliza para recuperar datos voluminosos de una tabla MIB grande?", answers: ["GET", "GET BULK", "GET NEXT", "GET RESPONSE"], correct: 1 },
    
    { question: "69. ¿Qué es ECDSA?", answers: ["Un algoritmo de firma.", "Un estándar estadounidense de cableado.", "Un organismo regulador internacional.", "Un protocolo de nivel de enlace."], correct: 0 },
    
    { question: "70. Seleccione la respuesta INCORRECTA sobre la firma electrónica:", answers: ["Se llama Co-firma a la firma múltiple en la que todos los firmantes están al mismo nivel y en la que no importa el orden en el que se firma.", "Cuando se firma en formato XAdES (XML Avanzado), el resultado es un fichero de texto XML.", "En el formato XAdES se habla de firmas despegadas (detached), envolventes (enveloping) y envueltas (enveloped) según en qué sitio del propio fichero de firma se guarde el documento original.", "El formato PAdES (Propietario Avanzado) es el formato propio utilizado por Microsoft Office, si bien existe una implementación abierta que se aplica en Open Office."], correct: 3 },
    
    { question: "71. ¿Cuál de estos equipos de interconexión trabaja a nivel de red (nivel 3 del modelo OSI)?", answers: ["Enrutadores (Routers).", "Puentes (Bridges).", "Conmutadores (Switches).", "Concentradores (Hubs)."], correct: 0 },
    
    { question: "72. Cuál es la respuesta INCORRECTA acerca de la fibra óptica plástica (POF):", answers: ["Está hecha esencialmente de plástico, construida de polimetilmetacrilato envuelto en polímeros fluoruros.", "Permite aprovechar todo el ancho de banda y hacerlo sin pérdidas.", "Ofrece un núcleo conductor menor que el de la fibra tradicional.", "Es muy flexible, lo que hace que se pueda usar sin problema en instalaciones donde los tubos son antiguos."], correct: 2 },
    
    { question: "73. ¿Cuál es el prefijo de dirección de Multicast en IPv6?", answers: ["::1/128", "224.0.0.0/4", "FF00::/8", "FC00::/7"], correct: 2 },
    
    { question: "74. Seleccione la respuesta correcta sobre los niveles y servicios del modelo OSI:", answers: ["El modelo OSI se compone de 7 niveles, pero se pude asimilar a un modelo de referencia simplificado de solamente 2 niveles: TCP (Niveles 1 a 4) e IP (Niveles 5, 6 y 7).", "Las entidades en un nivel N+1 ofrecen servicios que son utilizados por las entidades del nivel N.", "Un servicio confirmado utiliza las 4 primitivas de comunicación entre capas: Request, Indication, Response, Confirm.", "Un servicio no confirmado utiliza 3 de las 4 primitivas: Request, Indication, Response."], correct: 2 },
    
    { question: "75. ¿Cuál de los siguientes organismos está especializado en telecomunicaciones de la Organización de las Naciones Unidas (ONU), encargado de regular las telecomunicaciones a nivel internacional entre las distintas administraciones y empresas operadoras?", answers: ["ICANN", "ITU", "IEEE", "TIA"], correct: 1 },
    
    { question: "76. ¿Qué parte de un certificado de sitio web necesita un navegador para establecer una conexión segura HTTPS?", answers: ["La clave pública del certificado del sitio web, para que el navegador descifre los mensajes enviados por ese sitio web.", "La clave privada del certificado del sitio web, para que el navegador cifre los mensajes que envía al sitio web.", "Las claves pública y privada del certificado del sitio web, para poder cifrar y descifrar los mensajes que se intercambia con el sitio web.", "Ninguna. Es el sitio web el que debe recibir las claves pública y privada del certificado de la persona que navega."], correct: 0 },
    
    { question: "77. ¿Qué es un portal cautivo?", answers: ["Un sitio web bloqueado por un ransomware, cuyo acceso no se recupera hasta que se paga un rescate.", "Una página o aplicación web con acceso limitado, generalmente en fase de pruebas como paso previo a ponerse en producción.", "Un sitio web que no cumple los criterios del nivel AA de WCAG.", "Una página web que gestiona el acceso de los usuarios a una red, generalmente inalámbrica."], correct: 3 },
    
    { question: "78. Entre los protocolos que puede usar una VPN para proporcionar cifrado NO se encuentra:", answers: ["PPTP/MPPE", "IPSec", "L2TP/IPSec", "KSEC 1.1"], correct: 3 },
    
    { question: "79. ¿Qué significa CSMA/CD?", answers: ["Acceso múltiple por servicio de portadora y múltiples colisiones.", "Acceso múltiple con detección de portadora y detección de colisiones.", "Acceso único con múltiples colisiones y detección de portadora.", "Acceso único de múltiples portadoras y detección de colisiones."], correct: 1 },
    
    { question: "81. ¿A qué se corresponden las siglas de Red SOHO?", answers: ["Small Own, Home Own.", "Small Office, Home Own.", "Small Office, Home Office.", "Small Office, House Office."], correct: 2 },
    
    { question: "82. Dentro de los dispositivos Android, es posible encontrar un gran número de capas de personalización. Señale cuál NO es una de ellas:", answers: ["MIUI", "PenPoint OS", "One UI", "OriginOS"], correct: 1 },
    
  //  { question: "83. Señale qué paquete R en SQL Server Machine Learning Services permite realizar transformaciones y manipulaciones de datos, resúmenes estadísticos, visualizaciones y muchas formas de modelado:", answers: ["Revoscalepy", "Microsoftml", "Revoscaler", "SqlRutils"], correct: 2 },
    
    { question: "84. ¿Cuál de los siguientes lenguajes está relacionado con el desarrollo en backend?", answers: ["GO", "SASS", "XML", "ANGULAR"], correct: 0 },
    
    { question: "85. Indique cuáles son los diferentes tipos de configuración contemplados para WPS:", answers: ["PIN, PBC, USB", "PIN, NFC, USB", "PIN, USB", "PIN, PBC, NFC, USB"], correct: 3 }
];
