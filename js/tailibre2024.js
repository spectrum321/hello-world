const tailibre2024 = [
    
	{ question: "19. ¿Qué es la taxonomía de Flynn?", answers: ["Una clasificación de patrones de diseño para objetos de software, centrados en su creación, relación e interacción.", "Una clasificación para las computadoras con arquitectura paralela atendiendo al flujo de datos e instrucciones en un sistema.", "Una clasificación que pretende clarificar los diferentes tipos de tecnologías, técnicas y mecanismos que abarca el concepto abstracto de \"Inteligencia Artificial\".", "Una clasificación de los tipos de controladores (drivers) JDBC."], correct: 1 },
    
    { question: "21. Señale cuál de las siguientes es un formato de interfaz SSD:", answers: ["HHP", "MMVe", "MMD", "M.2"], correct: 3 },
    
    { question: "22. Un controlador de dispositivo periférico:", answers: ["Es el componente electrónico de la unidad de entrada y salida.", "Es el componente mecánico de la unidad de entrada y salida.", "Es la interfaz entre el adaptador y la unidad de entrada y salida.", "Es la interfaz entre la tarjeta controladora y el cable de conexión."], correct: 0 },
    
    { question: "23. Con respecto a los árboles 2-3-4, señale la respuesta correcta:", answers: ["Cumple las propiedades del árbol binario de búsqueda.", "Las hojas pueden estar a distinto nivel.", "Los nodos pueden tener 2, 3 o 4 hijos (2-nodo, 3-nodo o 4-nodo).", "Las reestructuraciones se realizan desde las hojas hacia la raíz."], correct: 2 },
    
    { question: "24. Señale la respuesta correcta referente al tipo abstracto de datos (TAD) Cola:", answers: ["Basada en el principio LIFO (last-in, first-out).", "Es un tipo especial de lista en la que se pueden insertar y eliminar por cualquier extremo.", "Cada nodo tiene dos enlaces, uno al nodo siguiente, y otro al anterior.", "Se pude implementar usando una estructura dinámica."], correct: 3 },
    
    { question: "25. Señale la respuesta INCORRECTA acerca de los tipos abstractos de datos (TAD):", answers: ["Es una colección de propiedades y operaciones que se definen mediante una especificación que es independiente de cualquier representación.", "Nos permiten diseñar nuestros propios tipos para encapsular lógica algorítmica y proveer abstracción a las capas de software de más alto nivel.", "Se pueden escribir usando lenguaje natural, usando pseudo-código o incluso algún lenguaje de programación.", "En JAVA, una estructura de datos (interface) debe implementar todas las operaciones definidas en su TAD (class)."], correct: 3 },
    
    { question: "26. ¿Cuál es la función del kernel en un sistema operativo Unix/Linux?", answers: ["Gestionar la interfaz gráfica.", "Controlar los procesos, la memoria y la administración de dispositivos.", "Proveer servicios de red como TCP/IP.", "Facilitar la comunicación entre usuarios a través de terminales."], correct: 1 },
    
    { question: "27. Señale la respuesta INCORRECTA. Android NDK:", answers: ["Es un conjunto de herramientas que permiten implementar partes de las aplicaciones de Android mediante C y C++.", "Genera librerías binarias para cada arquitectura de procesador que se pueden invocar desde Java por medio de JNI (Java Native Interface).", "Se recomienda su uso con aplicaciones intensivas a nivel computacional, como juegos o simulaciones físicas.", "No permite la reutilización de código, no pudiendo usar bibliotecas de otros desarrolladores."], correct: 3 },
    
    { question: "28. ¿Cuál es la característica diferenciadora de las claves foráneas en una base de datos relacional?", answers: ["Un atributo que no tiene relación con otras tablas.", "Un atributo que referencia la clave primaria de otra tabla.", "Un atributo que puede tener valores duplicados. de datos.", "Un atributo que se utiliza solo para consultas."], correct: 1 },
    
    { question: "29. ¿Cuál de los siguientes es un Sistema de Gestión de Bases de Datos Orientadas a Objetos (SGDBOO)?", answers: ["Cézanne.", "Picasso.", "Matisse.", "Rembrandt."], correct: 2 },
    
    { question: "30. ¿Qué es el lenguaje OQL en el contexto de las bases de datos orientadas a objetos?", answers: ["OQL no es un lenguaje en el contexto de las bases de datos orientadas a objetos.", "Un lenguaje de definición de datos.", "Un lenguaje de consulta de datos.", "Un lenguaje de manipulación de datos."], correct: 2 },
    
    { question: "31. De acuerdo con Métrica v3, en el Modelo Entidad/Relación Extendido, ¿cuál es el término que representa la participación en la relación de cada una de las entidades afectadas?", answers: ["Atributo.", "Cardinalidad.", "Tipo de Correspondencia.", "Dominio."], correct: 1 },
    
    { question: "32. Señale la respuesta correcta sobre la normalización de bases de datos en Métrica v3:", answers: ["Un atributo tiene dependencia funcional completa de otro si, y sólo si, depende de él a través de otro atributo.", "Una entidad está en 1FN si tiene grupos repetitivos, es decir, un atributo puede tomar varios valores de un dominio simple.", "Una entidad está en 2FN si está en 1FN y todos los atributos que no forman parte de las claves candidatas tienen dependencia funcional completa respecto de éstas.", "Una relación en 3FN estará también en 2FN, pero no en 1FN."], correct: 2 },
    
    { question: "33. Señale, de entre las siguientes opciones, el mecanismo en el Modelo Entidad/Relación Extendido que recoge Métrica v3 consistente en relacionar dos tipos de entidades que normalmente son de dominios independientes, pero coyunturalmente se asocian:", answers: ["Asociación.", "Generalización.", "PERT.", "Regresión."], correct: 0 },
    
    { question: "35. Señale la respuesta correcta en relación con las funciones y los procedimientos:", answers: ["Una llamada a un procedimiento puede aparecer como operando de una expresión.", "El paso de parámetros por referencia envía una copia del valor que tenga el parámetro real, por lo que no se podrá alterar el contenido de la variable.", "Los parámetros por referencia se pueden emplear como parámetros de entrada/salida.", "Todo procedimiento debe ejecutar una sentencia de return."], correct: 2 },
    
    { question: "36. Suponga el siguiente programa escrito en un lenguaje de programación estándar: integer x=0; while x<100 do (x=x+1; print x; x=x-1;)", answers: ["Este programa imprime los números enteros del 1 al 100.", "Este programa imprime los números impares del 1 al 100.", "Este programa imprime los números pares del 1 al 100.", "Este programa es un bucle infinito."], correct: 3 },
    
    { question: "37. Referente a los comandos DML del lenguaje SQL, señale la respuesta correcta:", answers: ["DML es acrónimo de Data Manager Language.", "Permiten crear nuevas bases de datos, añadiendo y eliminando elementos.", "El comando TRUNCATE es un comando DML.", "El comando SELECT es un comando DML."], correct: 3 },
    
    { question: "38. Referente al comando DROP de SQL, es correcto decir:", answers: ["Es un comando DCL.", "Puede ser ejecutado por disparadores (triggers).", "Se utiliza para eliminar la estructura de una tabla junto con cualquier dato almacenado en ella.", "Utiliza WHERE para condiciones de filtrado."], correct: 2 },
    
    { question: "39. Señale la respuesta INCORRECTA referente a los disparadores o triggers de una base de datos:", answers: ["Son procedimientos que se ejecutan o activan cada vez que ocurre un evento determinado sobre una tabla determinada.", "Los eventos que se pueden asociar a la ejecución de un trigger son: INSERT, UPDATE, DELETE.", "Puede decidirse que se activen antes o después de un evento determinado.", "Un error durante la ejecución de cualquier trigger no cancela automáticamente la operación que lo disparó, la cancelación hay que programarla."], correct: 3 },
    
    { question: "40. En diseño y programación orientada a objetos, una relación de generalización entre clases:", answers: ["Implica que la subclase hereda las propiedades, el comportamiento y las relaciones de la superclase, a la vez que puede añadir sus propias propiedades, relaciones y comportamiento.", "Describe un conjunto de enlaces, que definen las interconexiones semánticas entre las instancias de las clases que participan en la relación.", "Asume una subordinación conceptual del tipo \"todo/parte\", o bien \"tiene un\".", "Se representa mediante una línea discontinua que une la superclase y subclase con un rectángulo al lado de la superclase."], correct: 0 },
    
    { question: "41. Señale la respuesta INCORRECTA respecto al Lenguaje de Modelado Unificado (UML):", answers: ["Es un lenguaje basado en diagramas para la especificación, visualización, construcción y documentación de cualquier sistema software.", "Es independiente de las metodologías de análisis y diseño y de los lenguajes de programación que se utilicen en la construcción del software.", "Se basa en el paradigma de la orientación a objetos.", "Muestra únicamente el modelado estático de un sistema software, que puede utilizarse en las diferentes fases de su ciclo de desarrollo."], correct: 3 },
    
    { question: "42. Señale la respuesta INCORRECTA. El patrón de diseño \"Composite\":", answers: ["Es un patrón de diseño estructural que permite componer objetos en estructuras de árbol.", "Sirve para construir objetos complejos a partir de otros más simples y similares entre sí.", "Simplifica el tratamiento de los objetos creados que, al poseer de una interfaz común, se tratan todos de la misma manera.", "Se recomienda su uso cuando se quiere añadir responsabilidades a objetos concretos de manera dinámica y transparente y sin afectar a otros objetos."], correct: 3 },
    
    { question: "43. ¿Qué es .NET MAUI?", answers: [".NET MAUI es un marco multiplataforma para crear aplicaciones móviles y de escritorio nativas con C# y XAML.", "Es una plataforma para desarrollar aplicaciones en Java.", "Es una herramienta de pruebas automatizadas.", "Es una plataforma para desarrollar aplicaciones móviles que se puede ejecutar en sistema Android solamente."], correct: 0 },
    
    { question: "44. En el ámbito de ASP.NET Core, señale la respuesta correcta respecto a Razor:", answers: ["Razor es la sintaxis de plantillas utilizada en ASP.NET Core para crear vistas dinámicas en aplicaciones web.", "Es uno de los lenguajes de programación que se utilizan con ASP.NET Core.", "Razor se ejecuta directamente en el navegador del cliente.", "Razor utiliza el @símbolo para realizar la transición de C# a HTML."], correct: 0 },
    
    { question: "45. La persistencia en Jakarta EE se gestiona principalmente a través de la especificación Jakarta Persistence API (JPA). Indique la respuesta correcta:", answers: ["Una de sus ventajas es que no necesita utilizar un proveedor de JPA.", "El lenguaje de consulta similar a SQL pero orientado a objetos de JPA es JPSQL.", "Normalmente, una entidad representa una tabla en una base de datos relacional y cada instancia de la entidad corresponde a una fila de esa tabla.", "JPA no permite definir relaciones entre entidades del tipo uno a muchos."], correct: 2 },

    { question: "48. ¿Cuál de las siguientes es una diferencia entre HTML y XHTML?", answers: ["HTML exige que las etiquetas se escriban en minúscula, mientras que XHTML no.", "XHTML permite que haya elementos no vacíos sin cerrar, mientras que HTML no.", "En HTML es obligatorio que los valores de los atributos vayan entre comillas, mientras que en XHTML no.", "En XHTML es obligatoria la presencia del elemento <head>."], correct: 3 },	
   
   { question: "46. ¿Cuál es una característica de los sistemas distribuidos?", answers: ["Falta de transparencia: un nodo no puede acceder a otros nodos del sistema y comunicarse con ellos.", "Procesamiento independiente: varias máquinas no pueden procesar la misma función a la vez.", "Escalabilidad: la capacidad computacional y de procesamiento puede escalarse hacia arriba según sea necesario cuando se añaden máquinas adicionales.", "Comunicación diferencial: usan nodos distintos para comunicarse y sincronizarse a través de redes independientes entre sí."], correct: 2 },
    
    { question: "47. Señale la opción correcta sobre la arquitectura de servicios web REST:", answers: ["En la arquitectura REST, el servicio no almacena información sobre el estado del cliente entre peticiones.", "El uso de identificadores está basado en SOA.", "En la arquitectura REST, la interfaz para acceder a los recursos expuestos puede ser HTTP o FTP.", "Es una arquitectura no orientada a recursos."], correct: 0 },
    
    { question: "48. ¿Cuál de las siguientes es una diferencia entre HTML y XHTML?", answers: ["HTML exige que las etiquetas se escriban en minúscula, mientras que XHTML no.", "XHTML permite que haya elementos no vacíos sin cerrar, mientras que HTML no.", "En HTML es obligatorio que los valores de los atributos vayan entre comillas, mientras que en XHTML no.", "En XHTML es obligatoria la presencia del elemento <head>."], correct: 3 },
    
    { question: "49. ¿Qué evento de HTML utilizaría para producir un efecto al situar el puntero del ratón sobre un elemento?", answers: ["onclick.", "onmouseover.", "onmousedown.", "onmouseout."], correct: 1 },
    
    { question: "51. En relación a los principios del Diseño Universal, señale cuál es uno de ellos:", answers: ["Seguridad.", "Información operable.", "Robustez.", "Alto esfuerzo físico."], correct: 0 },
    
    { question: "52. Señale la respuesta correcta referente al término ATAG:", answers: ["Son Pautas de Accesibilidad que explican cómo hacer que el contenido web sea más accesible para las personas con discapacidades.", "Es una Suite que define una forma de hacer que el contenido web y las aplicaciones web sean más accesibles para las personas con discapacidades.", "Son Pautas de Accesibilidad que explican cómo hacer que los agentes de usuario sean accesibles para las personas con discapacidades.", "Son un conjunto de normas que deben cumplir las herramientas de autor para ser accesibles y generar contenidos también accesibles."], correct: 3 },
    
    { question: "53. ¿Cuál de las siguientes opciones se utilizan para el control de versiones?", answers: ["Mercurial, CVS y Selenium.", "GitLab, GitHub y Apache Subversion.", "SVN, Git y Cucumber.", "Selenium, Cucumber y GitLab."], correct: 1 },
    
    { question: "54. Según establece Métrica V3, en la construcción de un sistema de información, las pruebas que permiten verificar que los componentes o subsistemas interactúan correctamente a través de sus interfaces, tanto internas como externas, cubren la funcionalidad establecida y se ajustan a los requisitos especificados en las verificaciones correspondientes son:", answers: ["Pruebas unitarias.", "Pruebas de integración.", "Pruebas del sistema.", "Pruebas de migración."], correct: 1 },
    
    { question: "55. ¿Cuál de los siguientes conceptos permite que un proceso ejecute múltiples tareas de manera simultánea o concurrente en un sistema operativo?", answers: ["Segmentación.", "Paginación.", "Prepaging.", "Hilos."], correct: 3 },
    
    { question: "56. El comando sfc /scannow:", answers: ["Examina todos los archivos de sistema protegidos y reemplaza los archivos dañados con una copia en caché.", "Rrepara el entorno de arranque ubicado en la partición del sistema.", "Muestra o establece la directiva de red de área de almacenamiento (sanSAN) para el sistema operativo.", "Analizar uno o varios servidores con una directiva generada por SCW."], correct: 0 },
    
    { question: "57. ¿Cuánta carga útil puede almacenar un jumboframe?", answers: ["7.000 bytes.", "1.500 bytes.", "9.000 bytes.", "10.000 bytes."], correct: 2 },
    
    { question: "58. ¿Qué protocolo hay que utilizar para obtener una dirección física a partir de una dirección lógica?", answers: ["RARP.", "NAT.", "ARP.", "PAT."], correct: 2 },
    
    { question: "59. ¿Qué topología de red consiste en conectar todos los nodos directamente a un nodo central?", answers: ["Estrella.", "Anillo.", "Bus.", "Árbol."], correct: 0 },
    
    { question: "60. La regla 3-2-1 de las copias de seguridad consiste en:", answers: ["Conservar 3 copias de los datos, en 2 medios diferentes con 1 copia almacenada en un lugar externo a la organización.", "Conservar 3 copias de los datos, en 2 medios iguales con 1 copia almacenada en un lugar externo a la organización.", "Conservar 3 copias de los datos, en 2 medios iguales con 1 copia almacenada en un lugar interno a la organización.", "Conservar 3 copias de los datos, en 2 medios diferentes con 1 copia almacenada en un lugar interno a la organización."], correct: 0 },
    
    { question: "61. Señale la respuesta correcta referente a los sistemas de almacenamiento SAN y NAS:", answers: ["SAN es más económico y fácil de configurar.", "SAN es el acrónimo de Storage Attached Network.", "NAS es un dispositivo de almacenamiento compartido basado en archivos.", "NAS es el acrónimo de Network Area Storage."], correct: 2 },
    
    { question: "62. Señale la respuesta correcta:", answers: ["Los backups utilizan poca capacidad de almacenamiento.", "Los backups son manuales, los snapshots son programables.", "Los backups pueden almacenarse en localizaciones y medios distintos.", "Los backups son una representación instantánea del estado de un sistema en un momento específico."], correct: 2 },
    
    { question: "63. ¿Cuál es una ventaja del uso del protocolo IMAP en lugar de POP3?", answers: ["Permite visualizar los correos directamente en el servidor sin descargarlos.", "Es más sencillo que POP3.", "No requiere autenticación.", "Descarga los correos automáticamente del servidor."], correct: 0 },
    
    { question: "64. Señale cuáles de las siguientes son tecnologías relacionadas con la contenerización y la gestión de contenedores:", answers: ["Docker, Containerd y Podman.", "Docker, CRI-O y nginx.", "Podman, Kubernetes y Ubuntu.", "Docker, Kubernetes y Debian."], correct: 0 },
    
    { question: "65. Indique la respuesta INCORRECTA respecto a PoE (Power over Ethernet):", answers: ["Power over Ethernet (PoE) es una tecnología que permite que los conmutadores de red transmitan energía y datos a través de un cable Ethernet simultáneamente.", "Existen dos tipos: PoE activo y PoE pasivo.", "PoE pasivo no se adhiere a ningún estándar IEEE.", "El último estándar de PoE activo es el IEEE 802.3at."], correct: 3 },
    
    { question: "66. La norma IEEE 802.11 se refiere a:", answers: ["Redes inalámbricas.", "Redes de área metropolitana.", "Redes integradas para voz y datos.", "Seguridad de red."], correct: 0 },
    
    { question: "67. ¿Cuál de las siguientes es una herramienta de ticketing para la gestión de incidentes de seguridad en las entidades del ámbito de aplicación del Esquema Nacional de Seguridad?", answers: ["ATENEA.", "MONICA.", "LUCIA.", "INES."], correct: 2 },
    
    { question: "68. Indique la respuesta correcta sobre el formato de firma digital CAdES:", answers: ["Es apropiado para firmar ficheros grandes, especialmente si la firma contiene el documento original.", "Es el formato de firma que utiliza Microsoft Office.", "El resultado es un fichero de texto XML. No es adecuado cuando el fichero original es muy grande.", "Es el formato más adecuado cuando el documento original es un PDF."], correct: 0 },
    
    { question: "69. Indique la respuesta correcta sobre tipos de ataque a un sistema de información:", answers: ["El sniffing es la generación de tráfico utilizando un origen falseado.", "El spoofing es la captura del tráfico que circula por una red.", "Denegacion de servicio distribuida (DDoS) es un ataque a varios objetivos desde un solo punto, con la finalidad de degradar total o parcialmente los servicios prestados por esos recursos a sus usuarios legítimos.", "El barrido (\"escaneo\") de puertos es un ataque que trata de obtener información básica acerca de qué servicios se ofrecen en un determinado sistema, así como otros detalles técnicos del mismo."], correct: 3 },
    
    { question: "70. ¿Cuál de las siguientes categorías de cable Ethernet tiene 10.000 Mbps como tope de velocidad de transferencia?", answers: ["Categoría 6A.", "Categoría 8.", "Categoría 6.", "Categoría 5E."], correct: 0 },
    
    { question: "71. Señale cuál de las siguientes tecnologías NO es una tecnología LPWAN:", answers: ["LoRaWAN.", "Bluetooth LE.", "SigFox.", "NB-IoT."], correct: 1 },
    
    { question: "72. ¿Cuál de las siguientes respuestas es correcta respecto al modelo OSI de ISO?", answers: ["Las capas o niveles del modelo OSI son: Física, de red, de transporte, de sesión, de presentación y de aplicación.", "La versión actual del estándar OSI es la ISO/IEC 7498-1:1994.", "La capa de transporte se ocupa, entre otros, de aspectos como el enrutamiento, el reenvío y el direccionamiento a través de una red.", "La capa de sesión a menudo se divide en dos subcapas: la capa de control de acceso a los medios (MAC) y la capa de control de enlace lógico (LLC)."], correct: 1 },
    
    { question: "73. ¿Cuál es la respuesta correcta con respecto modelo TCP/IP?", answers: ["La arquitectura TCP/IP tiene cinco capas o niveles: Acceso a red, Internet, Transporte, Sesión y Aplicación.", "TCP y UDP son protocolos de la capa de Internet.", "Telnet es un protocolo de la capa de sesión.", "ICMP es un protocolo de la capa de Internet."], correct: 3 },
    
    { question: "74. Relativa al direccionamiento IPv4, indique la respuesta INCORRECTA:", answers: ["La dirección 172.16.52.63 es una dirección de clase B.", "Las direcciones 192.168.123.71 y 192.168.123.133 con máscara de subred 255.255.255.192 se encuentran en la misma red.", "Las redes de clase A usan una máscara de subred predeterminada de 255.0.0.0.", "En las redes clase C se permite direccionar 254 equipos como máximo."], correct: 1 },
    
    { question: "75. ¿Qué código de respuesta HTTP se devuelve si el usuario que hace la petición NO tiene autorización para obtener la información?", answers: ["401", "403", "405", "407"], correct: 1 },
    
    { question: "76. Indique la respuesta correcta sobre el IETF (Internet Engineering Task Force):", answers: ["Es un organismo creador de estándares en Internet.", "Es responsable de las funciones administrativas relacionadas con la raíz del sistema de nombres de dominio (DNS), el direccionamiento del protocolo de Internet y otros recursos del protocolo de Internet.", "Es responsable de administrar y supervisar la coordinación del sistema de nombres de dominio (DNS) de Internet y sus identificadores únicos, como las direcciones de protocolo de Internet (IP).", "Es el Foro de Gobernanza de Internet."], correct: 0 },
    
    { question: "77. Sobre tipos de transferencia de archivos en el servicio FTP (File Transfer Protocol), es CORRECTO decir que:", answers: ["El tipo ASCII es adecuado para transferir archivos de texto plano.", "El tipo Multimedia es adecuado para transferir imágenes y archivos de audio.", "El tipo Binario solo es adecuado para transferir ficheros ejecutables para PC.", "El tipo ASCII es adecuado para transferir páginas HTML y las imágenes que puedan contener."], correct: 0 },
    
    { question: "78. ¿Cuál de los siguientes ataques consiste en suplantar a una entidad legítima por medio de llamadas telefónicas?", answers: ["Pharming.", "Smishing.", "Vishing.", "Whaling."], correct: 2 },
    
    { question: "79. La creación de un señuelo atractivo para potenciales atacantes con el objetivo de aprender sus ataques y poder prevenirlos o defenderlos en el futuro se hace mediante un:", answers: ["IPS.", "SIEM.", "IDS.", "Honeypot."], correct: 3 },
    
    { question: "80. La herramienta del CCN que proporciona visibilidad y control sobre la red es:", answers: ["CARMEN.", "EMMA.", "MONICA.", "OLVIDO."], correct: 1 },
	    
    { question: "1. Señale cuál es una resolución válida para una pantalla:", answers: ["8K UHD - 7680 x 3840 píxeles", "Ultra HD - 4320 x 1280 píxeles", "WQHD - 2560 x 1440 píxeles", "HD - 1920 × 1080 píxeles"], correct: 2 },
    
    { question: "2. ¿Cuál es un tipo de panel de una pantalla LCD?", answers: ["IPS (In-Plane Switching)", "VN (Vertical Nematic)", "TA (Twisted Alignment)", "PSI (Plane Switching Input)"], correct: 0 },
    
    { question: "3. El protocolo de IEEE para Rapid Spanning Tree Protocol es:", answers: ["802.1w", "802.1Q", "802.1D", "802.1aq"], correct: 0 },
    
    { question: "4. En CSS3, ¿cuál de las siguientes unidades de medida NO es relativa?", answers: ["Q", "vw", "ex", "ch"], correct: 0 },
    
    { question: "5. Señale la respuesta correcta:", answers: ["Xcode es un IDE que contiene herramientas destinadas exclusivamente al desarrollo software para iOS", "Xcode Cloud no existe", "SwiftUI es un framework que facilita la creación de aplicaciones para cualquier dispositivo Apple", "iOS SDK permite el desarrollo de aplicaciones para macOS, iOS, watchOS y tvOS"], correct: 2 }
];