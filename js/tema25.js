const tema25 = [
   
    { question: "01. Señale la respuesta correcta sobre las arquitecturas de servicios Web.", answers: ["Para describir la interfaz de un servicio Web se utiliza el formato WSDL", "Se puede interactuar con el servicio Web mediante el intercambio de mensajes SOA.", "Web Services y SOA son conceptos equivalentes.", "Las respuestas a) y c) son correctas."], correct: 0 },
    
    { question: "02. Las siglas \"SOAP\", en el marco de los servicios Web, corresponden a:", answers: ["Service Oriented Architecture Protocol.", "Simple Object Access Protocol.", "Simple Oriented Access Paradigm.", "Service Object Architecture Paradigm."], correct: 1 },
    
    { question: "03. ¿Qué organización es actualmente la responsable a nivel internacional de asignar direcciones IP, identificadores de protocolo y de las funciones de gestión del sistema de nombres de dominio de primer nivel?", answers: ["OASIS.", "Apache Software Foundation.", "IEEE.", "ICANN."], correct: 3 },
    
    { question: "04. En la 'RFC 2396' se especifican varios elementos. Las siglas URL se refieren a:", answers: ["Universal Resource Locator", "Universal Recursive Locator", "Uniform Resource Locator", "Uniform Recursive Locator"], correct: 2 },
    
    { question: "05. En la tecnología de Web Services, una de las afirmaciones siguientes no es correcta.", answers: ["SOAP deriva de XML-RPC", "Se emplea WSDL (Web Service Definition Language) como lenguaje de descripción de Web Services por sus proveedores.", "UDDI (Universal Description Discovery and Integration) permite la publicación y localización de los Servicios Web.", "WSSL (Web Service Specification Language) se usa como lenguaje de especificación de los Servicios Web."], correct: 3 },
    
    { question: "06. Cual de los siguientes no es un elemento estándar SOAP:", answers: ["Binding", "Header", "Body", "Description"], correct: 3 },
    
    { question: "07. Cual de las siguientes tecnologías no está relacionada o no ha intentado un objetivo similar a UDDI:", answers: ["ebXML", "UDML", "JAXR", "DSML"], correct: 1 },
    
    { question: "08. ¿Qué características definen un socket en una conexión TCP/IP?", answers: ["El número de puerto al que se asigna, el programa que lo controla y el protocolo de conexión.", "Las direcciones IP local y remota y los puertos local y remoto.", "Las direcciones IP local y remota, los puertos local y remoto y el protocolo de transporte utilizado.", "Los puertos local y remoto, las direcciones IP local y remota, el nombre del dominio y el protocolo de transporte."], correct: 2 },
    
    { question: "09. Dentro del ámbito de los Servicios Web, se puede definir UDDI como:", answers: ["Una forma de publicar servicios Web.", "Un estándar para definir y describir servicios Web.", "Un protocolo para el intercambio de mensajes hacia o desde servicios Web.", "Una API de Java para desarrollo de servicios Web."], correct: 0 },
    
    { question: "10. En relación con el estándar WS-Security, indica cual de las siguientes afirmaciones es FALSA:", answers: ["Soporta los siguientes mecanismos de autenticación: Username, Aserciones SAML, certificado X.509 y Kerberos.", "Es un protocolo de capa 3 según el modelo OSI.", "Permite implementar mecanismos de seguridad en servicios Web a nivel de mensaje.", "El cifrado de la información se realiza mediante XML-Encryption."], correct: 1 },
    
    { question: "11. Los clientes pueden realizar tres tipos de preguntas a un servidor de DNS:", answers: ["Recursivas, iterativas e inversas", "Recursivas, directas e interactivas", "Recursivas, directas e inversas", "En realidad son cuatro tipos: recursivas, iterativas, inversas y directas"], correct: 0 },
    
    { question: "12. En CSS, cuando hay conflicto entre reglas !important para un mismo elemento, el orden de prevalencia lo marca:", answers: ["La hoja de estilo del usuario.", "La hoja de estilo del navegador.", "La hoja de estilo del autor.", "La versión html utilizada."], correct: 0 },
    
    { question: "13. En CSS, el tipo de selector que utiliza el símbolo # en su declaración es:", answers: ["Clase", "Etiqueta html", "Compuesto", "Id"], correct: 3 },
    
    { question: "14. En CSS, una forma simple de hacer un sistema de pestañas y de esta forma poder mostrar una amplia información en una página es:", answers: ["Padding", "Hover", "Sliding Doors", "Tabber"], correct: 3 },
    
    { question: "15. En CSS, la propiedad que permite seleccionar el área de visión de un elemento, como, por ejemplo, cuando hacemos un recorte con un editor de imágenes, es:", answers: ["Clip", "Visibility", "Position", "Display"], correct: 0 },
    
    { question: "16. En una página Web, si hacemos referencia al término \"enlace o link\", ¿cuál es la respuesta correcta?", answers: ["El color azul y el subrayado es la única forma correcta que puede tener el enlace para que el usuario reconozca su función.", "El cambio de tonalidad del enlace, cuando es sobrevolado con el puntero, no ayuda a que el usuario lo reconozca.", "La regla más aceptada es que, al sobrevolar el enlace, el puntero del ratón modifica su aspecto.", "En ningún caso el enlace podrá ser representado por una imagen."], correct: 2 },
    
    { question: "17. Según la RFC 2616, cuando una petición HTTP recibe una respuesta \"400 Bad Request\" significa que:", answers: ["El usuario no está autorizado a ver la página solicitada.", "La página solicitada no existe.", "La sintaxis de la petición es incorrecta.", "El servidor no está disponible."], correct: 2 },
    
    { question: "18. En la Web 2.0, ¿qué se entiende por \"folksonomías\"?:", answers: ["Sistema flexible de licencias de derechos de autor para trabajos creativos donde compartir es prioritario frente a restringir o limitar.", "Metodología de clasificación en la que los propios usuarios emplean tags o etiquetas de modo descentralizado sobre objetos diversos tales como fotografías, páginas, videos o textos.", "Ciertas estructuras sociales autorreguladas que muestran comportamientos inteligentes en sí mismas, siendo más eficientes que sus miembros individualmente.", "Archivos de sonido que se distribuyen mediante suscripción a los oyentes."], correct: 1 },
    
    { question: "19. Uno de los grupos de tecnologías consideradas en el ámbito de la Web2.0 es AJAX (Asynchronous JavaScript And XML). Indique cuál de las siguientes afirmaciones NO se corresponde con este grupo de tecnologías:", answers: ["Es una técnica de desarrollo Web para crear aplicaciones interactivas o RIA (Rich Internet Applications)", "Estas aplicaciones se ejecutan en el servidor y man tiene comunicación asíncrona con el cliente en segundo plano.", "En los entornos RIA no se producen recargas de página, ya que desde el principio se carga toda la aplicación y sólo se produce comunicación con el servidor cuando se necesitan datos externos como los de una Base de Datos o de otros ficheros externos.", "Lleva consigo la utilización de XHTML (o HTML) y hojas de estilos en cascada (CSS) para el diseño que acompaña a la información."], correct: 1 },
    
    { question: "20. El lenguaje de descripción del Web Service es:", answers: ["WML.", "WSDL.", "WAP.", "UDDI."], correct: 1 },
    
    { question: "21. Indique cuál de los siguientes no es un elemento de WSDL (Web Services Description Language):", answers: ["<portType>", "<message>", "<atribute>", "<types>"], correct: 2 },
    
    { question: "22. ¿Cual no es una afirmación correcta respecto a los servicios Web?", answers: ["Es un servicio software diseñado para soportar interoperabilidad con otros componentes sobre una red bajo protocolos Internet.", "Tiene un interfaz que describe su funcionalidad de una forma abstracta y la manera de explotarla. Escrito en un formato procesable de forma automática por el componente que lo invoca (Lenguaje escrito en XML).", "La invocación se realiza mediante mensajes SOAP que siempre se transmiten utilizando el protocolo HTTP.", "Si se quiere facilitar su descubrimiento por otras aplicaciones se debe registrar en un repositorio."], correct: 2 },
    
    { question: "23. La plataforma informática y de servicios en Internet hospedada en centros de datos administrados o respaldados por Microsoft se llama:", answers: ["Bajoo.", "Azure.", "Heroku.", "Adrive."], correct: 1 },
    
    { question: "24. En un Servicio Web, qué lenguaje de los siguientes especifica la sintaxis y los mecanismos de intercambio de mensajes:", answers: ["WSDL.", "SOAP.", "UDDI.", "WS-Security."], correct: 1 },
    
    { question: "25. Señale qué tecnología de servicios Web se podría usar para enviar ficheros de gran tamaño en un servicio Web, con tecnología SOAP que optimiza en formato binario:", answers: ["REST-WS", "ATOM", "MTOM", "WSS"], correct: 2 },
    
    { question: "26. ¿Cuál de las siguientes tecnologías NO se usa en el desarrollo de servicios Web?", answers: ["AXIS", "JAX-WS", "CXE", "AXIS 2"], correct: 2 },
    
    { question: "27. En un contexto Web, ¿qué significa AJAX?", answers: ["Accelerated JAva eXtensions.", "Active JSON And XML.", "Asynchronous JAvaScript eXtensions.", "Asynchronous JavaScript and XML."], correct: 3 },
    
    { question: "28. La especificación de las hojas de estilo en cascada (CSS 2.1) del W3C define varios orígenes para las hojas de estilo. Entre ellos NO se encuentra:", answers: ["Autor.", "Usuario.", "Dispositivo.", "Agente de usuario (user agent)."], correct: 2 },
    
    { question: "29. ¿Qué es SPDY?", answers: ["Es un protocolo que reduce el tiempo de carga de sitios Web.", "Storage Protocol Data Yield, protocolo para el almacenamiento de datos según la probabilidad de uso de los mismos.", "Es una medida de rendimiento de CPU utilizada en entornos de altas prestaciones.", "Es la evolución de HSUPA con una tasa de transferencia de 5 Gbps reales."], correct: 0 },
    
    { question: "30. El lenguaje de consulta sobre RDF que permite hacer búsquedas sobre los recursos de la Web Semántica utilizando distintas fuentes de datos es:", answers: ["OWL", "RQUERY", "JQUERY", "SPARQL"], correct: 3 },
    
    { question: "31. ¿A qué se refiere el término mashup?", answers: ["Plataforma de desarrollo Web que define la base de datos (MySQL), el servidor Web (Apache), el sistema operativo (Solaris) y el lenguaje de programación (Haskell).", "Pequeña sección de la ventana del navegador que muestra un mensaje de texto que se desplaza a través de la pantalla.", "Conjunto de técnicas y recomendaciones para conseguir que una página Web aparezca en los primeros resultados de los buscadores para unas determinadas palabras clave (keywords).", "Aplicaciones Web que combinan datos y contenido de distintas fuentes para dar una experiencia de usuario integrada."], correct: 3 },
    
    { question: "32. ¿Qué es P3P?", answers: ["Una consola de juegos", "Una forma de compartir ficheros superior al P2P", "P3P es un lenguaje estándar que permite controlar el uso que se hace de su información personal en los sitios Web", "Ninguna de las anteriores"], correct: 2 },
    
    { question: "33. Las Hojas de Estilo en Cascada describen, entre otras cosas, cómo se va a mostrar un documento en la pantalla. ¿Cuál de las siguientes afirmaciones es FALSA respecto a ellas?", answers: ["Se pueden definir solamente para documentos XML y no para HTML.", "Separan la presentación de la estructura del documento.", "Definen el estilo para una etiqueta, para una página o para todo un sitio Web.", "Una página puede disponer de diferentes hojas de estilo según el dispositivo que lo muestre o incluso a elección del usuario."], correct: 0 },
    
    { question: "34. Señale la respuesta INCORRECTA relativa a una arquitectura basada en servicios Web:", answers: ["WS-Security permite crear servicios Web seguros.", "SOAP es un protocolo usado para el intercambio de información en un entorno descentralizado y distribuido basado en XML a través de servicios Web.", "AXIS2 es un motor de servicios Web desarrollado por Apache. Una de las implementaciones disponible está realizada en lenguaje C.", "Los lenguajes de desarrollo distintos a Java poseen dificultad para integrarse con los Servicios Web."], correct: 3 },
    
    { question: "35. Si quiero desarrollar un sitio Web con diseño adaptativo (responsive Web design) con un framework elegiría:", answers: ["Python.", "Euphoria 3.0.", "Groovy.", "Bootstrap."], correct: 3 },
    
    { question: "36. En AJAX, el objeto usado para recibir información del servidor Web es:", answers: ["XMLRequestObject", "AJAXRequest", "JSONRequest", "XMLHttpRequest"], correct: 3 },
    
    { question: "37. Dada la expresión <link rel=\"stylesheet\" ref.=\"examen.css\" type=\"text/css\"> se da al documento un estilo del tipo:", answers: ["Hoja de estilo INTERNA", "Hoja de estilo EXTERNA", "Estilo en LÍNEA", "Todas las anteriores son correctas"], correct: 1 },
    
    { question: "38. Para realizar una consulta a un servidor sin recargar la página:", answers: ["Es imprescindible usar un applet de AJAX.", "Utilizaremos un objeto instalado en el cliente.", "Tenemos que utilizar XML.", "No es posible dicha funcionalidad."], correct: 1 },
    
    { question: "39. Señala cual de las afirmaciones es correcta.", answers: ["SOA es una arquitectura basada en Web Services.", "UDDI, es uno de los protocolos XML que permite la comunicación entre procesos.", "Que un documento XML esté bien formado es una restricción mayor que la de que el documento sólo sea XML válido.", "Ninguna de las anteriores."], correct: 3 },
    
    { question: "40. Sobre los servicios Web, ¿cuál de las siguientes afirmaciones es FALSA?", answers: ["Los documentos intercambiados entre un cliente y un proveedor de servicios Web van en formato XML.", "WSDL es el protocolo que se encarga de describir el servicio Web cuando es publicado.", "Los servicios Web sólo se pueden programar en Java a través del API JAXP.", "UDDI es el protocolo que permite la publicación y localización de los servicios Web."], correct: 2 },
    
    { question: "41. Referente al modelo DOM (Modelo de Objeto de Documentos) de procesamiento de documentos XML indicar la sentencia correcta:", answers: ["Genera un árbol a partir del documento XML.", "Procesa los documentos en serie, convirtiendo los elementos de un documento XML en una serie de eventos.", "El procesamiento con DOM es más rápido con respecto a SAX (Simple API for XML) por su modo de acceso.", "El modelo DOM requiere mucha menos memoria que SAX."], correct: 0 },
    
    { question: "42. Señale la afirmación correcta respecto a firmar digitalmente mediante XML Signature al usar WS-Security:", answers: ["WS-Security no contempla el uso de XML Signature por no adaptarse bien al modelo petición respuesta de Web Services.", "WS-Security contemplaba el uso de XML Signature en la versión 1.0 pero se abandonó en favor de XML DynaSign.", "WS-Security contempla el uso de XML Signature con algunas limitaciones, como recomendar el no usar Enveloped Signature Transform.", "WS-Security contempla el uso de XML Signature, sin establecer limitaciones ni extensiones especiales."], correct: 2 },
    
    { question: "43. El Lenguaje de Ontologías Web (OWL) proporciona tres sublenguajes, cada uno con nivel de expresividad mayor que el anterior. Señale el que NO es correcto:", answers: ["OWL Lite.", "OWL DL.", "OWL Extension.", "OWL Full."], correct: 2 },
	
	    { question: "44. Axis2 es:", answers: ["Una base de datos no-SQL.", "Un motor de búsqueda.", "Un motor nuclear de servicios web.", "Una librería para la automatizaeión de tareas de compilación y despliegue de aplicaciones."], correct: 2 },
    
    { question: "45. ¿Cuál de los siguientes es un estándar que se utiliza como elemento de seguridad en los servicios web?", answers: ["SAML", "WSDL", "SOAP", "UDDI"], correct: 0 },
    
    { question: "46. El protocolo SOAP (Simple Object Access Protocol):", answers: ["Es una recomendación del W3C.", "Es un estándar ISO.", "Es una norma UNE.", "Es un estándar ANSI."], correct: 0 },
    
    { question: "47. La distribución de Apache que contiene MySQL, PHP y Perl disponible para cualquiera de los diferentes sistemas operativos se denomina:", answers: ["MAMP", "XAMPP", "MAMPP", "LAMP"], correct: 1 },
    
    { question: "48. WURFL es:", answers: ["Una aplicación web que permite comparar diferentes versiones de un mismo documento.", "Un repositorio de información que identifica, a partir de la metainformación de una petición web de un dispositivo móvil, sus capacidades y limitaciones.", "Un motor de búsqueda que pone el foco en la rastrear personas, su actividad online y su posible posición geográfica.", "Un entorno para desarrollar juegos nativos o web para cada plataforma, como Play Station, Wii, PC, Mac, etc."], correct: 1 },
    
    { question: "49. ¿Cuál es el orden correcto de los niveles de prioridad del mensaje de la librería log4j de Apache Software Foundation?", answers: ["ERROR, FATAL, INFO, WARN, DEBUG Y TRACE.", "ERROR, FATAL, INFO, WARN, TRACE Y DEBUG.", "FATAL, ERROR, WARN, INFO, DEBUG Y TRACE.", "FATAL, ERROR, WARN, INFO, TRACE Y DEBUG."], correct: 2 },
    
    { question: "50. Si quiero desarrollar un sitio web con diseño adaptativo (responsive web design) con un framework elegiría:", answers: ["Python.", "Euphoria 3.0.", "Groovy.", "Bootstrap."], correct: 3 },
    
    { question: "51. Señale cuál de los siguientes es un lenguaje de consulta sobre grafos RDF en la web semántica:", answers: ["RDFQL", "SWL", "SPARQL", "SQLWS"], correct: 2 },
    
    { question: "52. La web semántica utiliza mecanismos que ayudan a convertir la web en una infraestructura global en la que es posible compartir, y reutilizar datos y documentos entre diferentes tipos de usuarios. Indicar el INCORRECTO:", answers: ["OWL", "SPARQL", "RDF", "RSA"], correct: 3 },
    
    { question: "53. Señale la respuesta INCORRECTA respecto a la tecnología de Servicios Web REST:", answers: ["JAX-RS es una API Java que proporciona soporte en la creación de servicios web de acuerdo con REST.", "Jersey es una implementación de referencia de servicios web REST.", "REST publica recursos que son accesibles a través de métodos http, por ejemplo POST y GET.", "Los recursos REST permiten sólo 3 operaciones: CREATE, UPDATE y DELETE."], correct: 3 },
    
    { question: "54. Señale la respuesta FALSA acerca de la tecnología Java Web Start:", answers: ["El software de Java Web Start permite descargar y ejecutar aplicaciones Java desde la Web.", "Garantiza que se está ejecutando la última versión de la aplicación.", "Incluido en el JDK desde la versión 6, permitiendo instalar aplicaciones a través de URLs con JMLP (Java Main Launch Protocol).", "Permite desplegar fácilmente aplicaciones standalone de escritorio."], correct: 2 },
    
    { question: "55. En el contexto de la web semántica, señale la definición correcta de ontología:", answers: ["Es una especificación explícita de una conceptualización.", "Es un sistema de clasificación abierto y/o colaborativo basado en etiquetas.", "Es un conjunto de nombres en el cual todos los nombres son únicos.", "Es un sistema de clasificación que permite agrupar un conjunto de elementos dentro de unas categorías predefinidas que pueden estar contenidas unas en otras, o relacionadas de cualquier otra manera."], correct: 0 },
    
    { question: "56. Indique cuál de los siguientes es un framework software de Apache que soporta aplicaciones distribuidas que trabajan con miles de nodos y volúmenes de datos del orden de peta bytes:", answers: ["Joost", "Netflix", "Cassandra", "Hadoop"], correct: 3 },
    
    { question: "57. En relación con los servicios web y SOAP, las siglas MTOM se corresponden con:", answers: ["Mail Transmission Optimization Mechanism.", "Message Transmission Optimization Mechanism.", "Message Transport Optimization Module.", "Mail Transport Optimization Module."], correct: 1 }

];

    
