const tsupcyl2024 = [
    
        { question: "7. Para que el código de una página web se vea en un móvil, se debe cumplir una de las siguientes opciones:", answers: ["Tiene que ser obligatoriamente HTML5.", "Sirve cualquier HTML, javascript y CSS ajustados al entorno y necesidades visuales de un móvil.", "No puede tener javascript, solo código fuente en lenguaje responsive.", "No puede tener CSS, solo SCSS para móviles."], correct: 1 },
    
    { question: "8. El objetivo principal de las directrices y recomendaciones recogidas en Web Content Accessibility Guidelines (WCAG) es:", answers: ["Que el mismo contenido HTML sirva tanto en PCs como en dispositivos móviles y personales.", "Que los buscadores accedan de forma legítima y controlada a páginas de contenidos sometidos a derechos de autor.", "Que las personas con alguna discapacidad o dificultad puedan acceder de una forma adecuada a contenidos web.", "Que las páginas web puedan acceder y utilizar los contenidos alojados en el servidor de forma segura."], correct: 2 },
    
    { question: "9. La Norma Técnica de Interoperabilidad del Documento Electrónico lo define como el conjunto de:", answers: ["Contenido, firma electrónica y metadatos.", "Índice, contenido y resumen electrónico.", "Metadatos, índice de subdocumentos, subdocumentos y firma electrónica.", "Contenido, firma electrónica, metadatos y referencia al expediente electrónico al que pertenece."], correct: 0 },
    
    { question: "10. Indica cuál es la herramienta desarrollada por el CCN-CERT para la Gestión de Ciberincidentes en las entidades del ámbito de aplicación del Esquema Nacional de Seguridad:", answers: ["INES.", "CLARA.", "GLORIA.", "LUCIA."], correct: 3 },
    
    { question: "11. Sobre el formato PAdES de firma electrónica podemos afirmar:", answers: ["Añade sellos de tiempo.", "Es una forma avanzada de firma electrónica para documentos PDF.", "Es una forma avanzada de firma electrónica para documentos Microsoft Office.", "Es una forma avanzada de firma electrónica para documentos Open Office."], correct: 1 },
    
    { question: "12. ¿Un CPD con la certificación TIER IV que tipo de redundancia debe ofrecer?", answers: ["No debe ofrecer ningún tipo de redundancia.", "Redundancia 2N+1.", "Redundancia parcial.", "Redundancia N+1."], correct: 1 },
    
    { question: "13. Se usan los distintos niveles de RAID para proporcionar redundancia y mayor rendimiento en los sistemas de almacenamiento. ¿Qué nivel RAID no proporciona ninguna redundancia?", answers: ["RAID1", "RAID5", "RAID6", "RAID0"], correct: 3 },
    
    { question: "14. ¿Cuál de las siguientes sentencias es correcta acerca de Kubernetes?", answers: ["Kubernetes es un sistema de código libre para la automatización del despliegue, ajuste de escala y manejo de aplicaciones en contenedores.", "Kubernetes es un sistema propietario de contenedores.", "Kubernetes es un tipo de framework para KDE.", "Kubernetes es una herramienta de diseño gráfico para Linux."], correct: 0 },
    
    { question: "15. Si se desea modificar el nombre de un fichero en un sistema de archivos en un sistema operativo Linux, ¿qué comando se deberá usar?", answers: ["ls", "chname", "cp", "mv"], correct: 3 },
    
    { question: "16. Si encontramos la siguiente línea en un fichero de configuración del gestor de tareas cron de Linux, se puede afirmar '0 5 * * mon /scripts/script.sh'", answers: ["/scripts/script.sh se ejecutará todos los lunes cada 5 minutos", "/scripts/script.sh se ejecutará todos los lunes a las 5 en punto AM", "/scripts/script.sh se ejecutará todos los lunes cada 5 horas", "/scripts/script.sh se ejecutará todos los lunes a las cero horas y cinco minutos"], correct: 1 },
    
    { question: "17. ¿Cuál de las siguientes sentencias NO es correcta en relación con la tabla de particiones GUID (GPT):", answers: ["Utiliza entradas de 64 bits para el direccionamiento.", "Las particiones GPT también pueden utilizarse independientemente de la UEFI.", "El tamaño máximo de cada partición es de 20 zettabytes.", "Es un estándar para la colocación de la tabla de particiones en un disco duro físico."], correct: 2 },
    
    { question: "18. Si en una base de datos relacional se quiere garantizar que se aplican todos los cambios o ninguno, usaremos:", answers: ["Sesiones.", "Transacciones.", "Restricciones.", "Disparadores."], correct: 1 },
    
    { question: "19. Indica qué sentencia escrita en SQL NO es correcta:", answers: ["SELECT PUESTO, MIN(SALARIO), MAX(SALARIO) FROM PLANTILLA GROUP BY PUESTO;", "SELECT PUESTO, EDAD, AVG(SALARIO)FROM PLANTILLA WHERE EDAD > 40 GROUP BY PUESTO, EDAD;", "SELECT PUESTO, AVG(SALARIO)FROM PLANTILLA HAVING AVG(SALARIO) > 12000 GROUP BY PUESTO;", "SELECT PUESTO, AVG(SALARIO)FROM PLANTILLA GROUP BY PUESTO HAVING AVG(SALARIO) > 12000;"], correct: 2 },
    
    { question: "20. ¿Para qué sirve la anotación @Entity en Spring Boot JPA?", answers: ["Define esa clase como un interface del repositorio.", "Define una clase como una entidad, que representará a una tabla en una BBDD relacional.", "Indica que esa clase es un service.", "Indica que es un controller de un servicio REST."], correct: 1 },
    
    { question: "21. ¿Qué devolverá el siguiente código en Java? String str1 = \"Hello\"; String str2 = new String(\"Hello\"); System.out.println(str1 == str2);", answers: ["true", "false", "Error", "Depende de la versión de Java"], correct: 1 },
    
    { question: "22. Si se utilizase la variable \"x\" para obtener el primer elemento de un array (por ejemplo array[x]), ¿cuál de las siguientes afirmaciones es cierta?", answers: ["Sería 0 en Java y PHP.", "Sería 0 en Java y 1 en PHP.", "Sería 1 en Java y 0 en PHP.", "Sería 1 en Java y 1 en PHP."], correct: 0 },
    
    { question: "23. Hemos construido una aplicación usando la versión 11 de Java en nuestro PC", answers: ["Se podrá ejecutar sin problemas en un servidor con la versión 10 de Java.", "Para ejecutarla en un servidor siempre habrá que recompilarla en él.", "Mientras se use la misma versión de Java en principio podría ejecutarse sin problemas tanto en un PC como en un servidor.", "Solo podrá utilizarse en un servidor si la aplicación usa JSP (Java Server Pages)."], correct: 2 },
    
    { question: "24. Indica qué categoría de los algoritmos de Machine Learning identifica patrones en datos no etiquetados:", answers: ["Aprendizaje no supervisado.", "Aprendizaje supervisado.", "Aprendizaje no afinado.", "Aprendizaje afinado."], correct: 0 },
    
    { question: "25. Indica qué estándar o especificación se utiliza en la comunicación entre herramientas y sistemas de aprendizaje (LMS, Learning Management System):", answers: ["LTI", "Canvas", "Sakai", "XHTML"], correct: 0 },
    
    { question: "26. Si queremos utilizar un fichero estructurado para intercambiar datos entre aplicaciones y poder estar seguros de que su estructura es correcta y se ajusta a un esquema predefinido, cuál de las siguientes opciones es correcta:", answers: ["Utilizaremos JSON.", "Utilizaremos JSON o XML indistintamente.", "Utilizaremos XML.", "Utilizaremos CVS."], correct: 2 },
    
    { question: "27. Con los estilos CSS definidos de la siguiente manera: p { color:green; } p.examen { color:red; } Si los aplicamos al siguiente fragmento de HTML, indica de qué color veremos \"Un texto\". <p class=\"examen\">Un texto</p>", answers: ["Verde (green).", "El color que por defecto que se haya puesto para texto en el tag Body.", "Negro (black).", "Rojo (red)."], correct: 3 },
    
    { question: "28. Si en el código javascript que se ejecuta en el navegador dentro una página que visitamos aparece la siguiente instrucción, indica cuál de las siguientes opciones es correcta: console.log(\"Se ha producido un error\");", answers: ["Se abrirá una ventana de alerta sobre la página con ese texto.", "Aparecerá un error en el log del servidor.", "Veremos ese error en la consola de las herramientas del navegador para inspeccionar la página.", "Aparecerá al final de la página que estamos visitando."], correct: 2 },
    
    { question: "29. Sobre las funciones hash, indica cuál de las siguientes afirmaciones NO es correcta:", answers: ["Una de las utilidades de las funciones hash es la detección de malware.", "Haciendo uso de funciones hash podemos hacer un control de archivos duplicados.", "Las contraseñas pueden protegerse utilizando una función hash.", "Firmando un mensaje con una función hash aseguramos su no repudio."], correct: 3 },
    
    { question: "30. Indica cuál de las siguientes opciones es responsabilidad del Scrum Master:", answers: ["Actualizar diariamente el backlog de cada sprint.", "Actualizar semanalmente el backlog de cada sprint.", "Asegurarse de que la metodología Scrum se entiende y se aplica en los equipos de desarrollo.", "Asignar tareas a cada uno de los desarrolladores."], correct: 2 },
    
    { question: "31. Sobre Hibernate podemos afirmar:", answers: ["Es una herramienta de mapeo objeto-relacional usada en Java.", "Es una herramienta de mapeo objeto-relacional usada en Java que con Hikari puede usarse también en PHP.", "Es un driver jdbc para MySQL y Oracle en Spring.", "Es una herramienta de mapeo objeto-relacional usada en PHP."], correct: 0 },
    
    { question: "32. ¿Qué supone en GIT el comando commit sobre un fichero fuente?", answers: ["Que el fichero se da por bueno en local y se pasa al servidor.", "Que se pasa al servidor.", "Que queda pendiente para que el responsable del repositorio lo valide.", "Que se quiere guardar el estado actual de ese fichero en local."], correct: 3 },
    
    { question: "33. Sobre la norma ISO 9004, indica cuál de las siguientes afirmaciones es correcta:", answers: ["ISO 9004 es adecuada solo para grandes organizaciones y no se aplica a pequeñas o medianas organizaciones.", "ISO 9004 está diseñada exclusivamente para organizaciones de manufactura y no es aplicable a organizaciones de servicios.", "ISO 9004 está diseñada únicamente para organizaciones que buscan la certificación ISO 9001.", "ISO 9004 es aplicable a cualquier tipo y tamaño de organización."], correct: 3 },
    
    { question: "34. ¿Cuál de los siguientes NO es un tipo de registro DNS?", answers: ["AAAA", "MX", "PTR", "PNAME"], correct: 3 },
    
    { question: "35. Para un enlace 10 Gigabit Ethernet de hasta 100 metros, ¿qué categoría de cableado estructurado se debe usar?", answers: ["CAT6", "CAT6A", "CAT5", "CAT5E"], correct: 1 },
    
    { question: "36. ¿En qué capa del modelo OSI se ubicaría el protocolo UDP?", answers: ["Transporte", "Aplicación", "Red", "Enlace"], correct: 0 },
    
    { question: "37. Sobre WDM (Wavelength Division Multiplexing) podemos afirmar:", answers: ["CWDM permite mayor número de canales que DWDM.", "Es una técnica de transmisión por fibra óptica que utiliza varias longitudes de onda de luz (o colores) para enviar datos a través del mismo medio.", "Permite la multiplexación de enlaces tipo Ethernet exclusivamente.", "Es una técnica de multiplexación óptica obsoleta ya en desuso."], correct: 1 },
    
    { question: "38. ¿A partir de que norma WiFi se incorporan los canales de la banda de 6GHz?", answers: ["WiFi5", "WiFi6", "WiFi6E", "WiFi8"], correct: 2 },
    
    { question: "39. ¿Cuál de las siguientes afirmaciones es correcta?", answers: ["172.16.1.1 es una dirección IP privada y 224.0.0.1 es una dirección IP multicast.", "224.0.0.1 es una dirección IP privada.", "172.16.1.1 es una dirección IP multicast.", "172.16.1.1 es una dirección IP pública y 224.0.0.1 es una dirección IP multicast."], correct: 0 },
    
    { question: "40. ¿Cuál de los siguientes protocolos NO es un protocolo de encaminamiento IP dinámico?", answers: ["OSPF", "BGP", "NTP", "IS-IS"], correct: 2 },
    
    { question: "41. ¿Cuál de los siguientes tipos del estándar 10 Gigabit Ethernet (10GbE) no utiliza fibra óptica como medio físico?", answers: ["10G-BASE-T", "10G-BASE-LR", "10G-BASE-SR", "10G-BASE-LRM"], correct: 0 },
    
    { question: "42. ¿Cuál de las siguientes afirmaciones es correcta?", answers: ["Un balanceador de nivel 4 es capaz de gestionar la parte SSL/TLS de una sesión HTTP de un servicio balanceado.", "Un balanceador de nivel 4 es capaz de insertar una cookie de sesión en un servicio HTTP balanceado.", "Un balanceador de nivel 7 es capaz de gestionar la parte SSL/TLS de una sesión HTTP de un servicio balanceado.", "Un balanceador de nivel 7 no es capaz de modificar una cabecera del protocolo HTTP en una sesión de un servicio balanceado."], correct: 2 },
    
    { question: "43. A manda a B un mensaje cifrado usando criptografía de clave pública. ¿Cuál de las siguientes afirmaciones es correcta?", answers: ["A usará la clave privada de B para cifrar el mensaje.", "B usará su clave pública para descifrar el mensaje.", "A usará la clave pública de B para cifrar el mensaje.", "B usará la clave pública de A para descifrar el mensaje."], correct: 2 },
    
    { question: "44. Si navegamos en un sitio web cuya dirección comienza por https://", answers: ["Se trata de un sitio seguro y por tanto libre de malware.", "La comunicación entre nuestro navegador y el servidor de la dirección está cifrada.", "Usa un certificado que en España lo genera la Agencia de Protección de Datos.", "Usará diferente HTML para la versión https://... que para la http://..."], correct: 1 },
    
    { question: "45. Indica cuál es la ventaja que ofrecen los EDR (Endpoint Detection and Response) frente a los antivirus:", answers: ["Interacción con otras herramientas de seguridad, como SIEM, IPS/IDS o herramientas antimalware.", "Detección de virus, gusanos y troyanos.", "Incorporan sistemas de mensajería instantánea.", "En general, son más sencillos de desplegar, configurar y administrar."], correct: 0 }
];
