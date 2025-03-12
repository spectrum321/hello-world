const tema44 = [
    
    { question: "01. ¿Qué norma ISO es la norma internacional para la Gestión de Riesgos?", answers: ["31000", "27000", "38500", "20000"], correct: 0 },
    
    { question: "02. ¿Cuál de los siguientes procesos no menciona MAGERIT v3 como que formaliza la confianza que merece un sistema de información para los cuales el análisis de riesgos es una piedra angular?", answers: ["Evaluación", "Certificación", "Análisis", "Acreditación"], correct: 2 },
    
    { question: "03. La arquitectura de seguridad 081 establece los siguientes servicios de seguridad:", answers: ["Autenticación, Control de acceso, Confidencialidad, Integridad y No repudio", "Autenticación, Confidencialidad, Integridad, Auditoría y No repudio", "Autenticación, Control de acceso, Integridad, Auditoría y No repudio", "Autenticación, Control de acceso, Confidencialidad, Auditoría y No repudio"], correct: 0 },
    
    { question: "04. El Servicio de No Repudio sirve para proteger a los usuarios de las redes telemáticas contra el hecho de que alguien niegue falsamente haber participado en algún evento o acción que haya tenido lugar. ¿Cuál de los siguientes NO es un servicio de dicho tipo?", answers: ["No Repudio de Envío", "No Repudio de Destino", "No Repudio de Entrega", "No Repudio de Conocimiento"], correct: 1 },
    
    { question: "05. ¿Cuál de las siguientes no es una técnica para medir riesgos en la metodología MAGERIT v3?", answers: ["Técnicas gráficas", "Regresión de datos", "Sesiones de trabajo", "Valoración Delphi"], correct: 1 },
    
    { question: "06. El mecanismo hardware usado para garantizar que solo los usuarios autorizados pueden usar o copiar aplicaciones software específicas se llama:", answers: ["Dongle", "Clave", "SLA", "Door"], correct: 0 },
    
    { question: "07. Si montamos un sistema RAID 0 con tres discos de 500 GBytes, 450 Gbytes y 300 Gbytes respectivamente, nuestro nivel RAID 0 presentará una única unidad lógica con una capacidad de:", answers: ["1250 GBytes", "900 GBytes", "300 GBytes", "Ninguna es correcta"], correct: 1 },
    
    { question: "08. Señale a que se denomina Single Sign-On (SSO):", answers: ["Es un protocolo de cifrado para autenticar al usuario", "Es un procedimiento de autenticación que habilita al usuario para acceder a varios sistemas con una sola instancia de identificación", "Está asociado al cifrado basado en Secure Sockect Layers (SSL)", "Permite a través del protocolo de red HTTPS identificar a los usuarios en el acceso a servicios Web"], correct: 1 },
    
    { question: "09. ¿Cuál de los siguientes software de backup no es propietario?", answers: ["Acronis", "Amanda", "NovaBackup", "Symantec/Veritas"], correct: 1 },
    
    { question: "10. Indique cual de los siguientes estándares se aplica a la seguridad de los sistemas informáticos", answers: ["ISO 12207", "ISO 2167", "ISO 27002", "ISO 9004"], correct: 2 },
    
    { question: "11. Indique cuál no es un elemento de MAGERIT:", answers: ["Amenaza", "Activo", "Riesgo", "Salvaguarda"], correct: 2 },
    
    { question: "12. Para la protección del puesto de trabajo, NO son necesarios los productos de una de las siguientes categorías:", answers: ["Antifraude", "Seguridad en movilidad", "Seguridad en los sistemas", "Gestión y control de acceso e identidad"], correct: 2 },
    
    { question: "13. ¿Cuál de las siguientes categorías de servicios tienen una relación directa con la protección del puesto de trabajo?", answers: ["Planificación e implantación de servicios", "Control de dispositivos externos de almacenamiento", "Control de acceso a la red corporativa", "Autenticación"], correct: 0 },
    
    { question: "14. \"Es un software que recopila información de un ordenador y después transmite esta información a una entidad externa sin el conocimiento o consentimiento del propietario del ordenador\". ¿A qué término nos estamos refiriendo?", answers: ["Malware", "Spyware", "Anti-Spyware", "Antivirus"], correct: 1 },
    
    { question: "15. La gestión unificada de amenazas (UTM) se refiere a un:", answers: ["Grupo de expertos en seguridad de una organización", "Mecanismo para evaluar posibles amenazas", "Dispositivo de seguridad que proporciona integradas diferentes soluciones de seguridad perimetral", "Conjunto de salvaguardas dentro de un plan general de contingencias"], correct: 2 },
    
    { question: "16. Se define \"grayware\" como:", answers: ["El software malicioso, sin incluir virus y troyanos, que actúa de forma molesta para el usuario", "Todo el software malicioso", "El software malicioso que captura las pulsaciones de las teclas en un ordenador", "El software malicioso que se ejecuta sobre un conjunto de ordenadores que están controlados de forma remota"], correct: 0 },
    
    { question: "17. Los sistemas de detección de intrusos se utilizan para:", answers: ["Obtener información confidencial de los usuarios", "Hacer un seguimiento de los lugares visitados en Internet por los usuarios de una institución", "Analizar la red y generar alarmas ante actividades anómalas", "Todas son ciertas"], correct: 2 },
    
    { question: "18. Si disponemos de 2 discos en RAID O, el primero es una unidad de 10 GB y la segunda unidad tiene una capacidad 27 GB, se creará una unidad lógica resultante de:", answers: ["37 GB", "40 GB", "20 GB", "47 GB"], correct: 2 },
    
    { question: "19. ¿Contra qué protege un cortafuegos?", answers: ["Contra accesos no autorizados desde el exterior de una institución, empresa u organización", "Contra ataques desde el interior de una institución, empresa u organización", "Contra virus y troyanos", "Todas son ciertas"], correct: 0 },
    
    { question: "20. ¿Qué es SQL Injection?", answers: ["Un sistema en SQL que permite hacer una carga masiva de información en una base de datos", "Un tipo de ataque a páginas Web consistente en cambiar trozos de la URL por comandos SQL y recoger las respuestas del servidor Web", "Un sistema de copias de seguridad de bases de datos que permite recargar rápidamente los datos de una base de datos", "Un procedimiento que permite a dos bases de datos intercambiar consultas entre ellas usando el estándar SQL"], correct: 1 },
    
    { question: "21. Un plan de continuidad de negocio de una organización tiene previsto un sitio alterno de procesamiento habilitado para acomodar el 30% de la capacidad primaria de procesamiento. Analizado este punto se puede afirmar …", answers: ["que el plan cumple, porque para la supervivencia de cualquier organización se sabe que menos del 25% del procesamiento primario es crítico", "que hay que revisar el plan, porque para asegurar el buen funcionamiento de la organización, al menos el 50% de la capacidad primaria de procesamiento debe estar contratada", "que para verificar que cumple se deben identificar las aplicaciones críticas de la organización y asegurarse que el sitio alterno tiene capacidad para procesar a todas ellas", "que se debe obligatoriamente contratar un sitio de respaldo redundante para asegurar la continuidad del negocio"], correct: 2 },
    
    { question: "22. En un \"plan de contingencia\" un aspecto que se ha de considerar es:", answers: ["La importancia de las personas en relación a los puestos que ocupan", "Mantener actualizado y aprobado el Documento de Seguridad", "La formación en herramientas microinformáticas", "Disponer de sistemas de prevención de intrusos bien configurados"], correct: 0 },
    
    { question: "23. En un CPD se realizan copias de 160 Gb con una periodicidad bianual (cada dos años). Si se quiere disponer de 4 años de información ¿cuántas cintas de 40 Gb son necesarias?", answers: ["48 cintas", "32 cintas", "16 cintas", "8 cintas"], correct: 1 },
    
    { question: "24. En el área del almacenamiento, los requisitos de disponibilidad:", answers: ["Hacen referencia al tiempo en que un sistema puede dejar de estar operativo debido a fallos inesperados", "No tienen nada que ver con los acuerdos de nivel de servicio que se establecen", "Indican que el sistema posee una tolerancia a fallos, y que los sistemas están debidamente replicados", "Indican que es obligatorio que existan sistemas de alimentación ininterrumpida que posibiliten la continuidad del negocio"], correct: 0 },
    
    { question: "25. El objetivo de seguridad que se persigue con el procedimiento de cifrado del disco duro de un ordenador portátil es:", answers: ["El no repudio", "La confidencialidad de la información almacenada", "Evitar el robo del equipo portátil", "La autenticidad de la información almacenada"], correct: 1 },
    
    { question: "26. En el ámbito de la criptografía, un ataque basado en el barrido del espacio de claves se denomina ataque…", answers: ["De denegación de servicio", "De colisiones", "De fuerza bruta", "De barrido espectral continuo"], correct: 2 },
    
    { question: "27. Hablando de la seguridad perimetral y de firewalls se puede decir que…", answers: ["Una DMZ (DeMilitarized Zone) es una subred entre las redes interna y externa (generalmente Internet)", "La arquitectura denominada spoofing utiliza un equipo con una única tarjeta de red para conectarse a dos redes, a la red interna y a la red externa", "Una arquitectura de capa de red, basada en el filtrado de paquetes IP en función de unas reglas establecidas, se utiliza en sistemas que requieren un nivel de seguridad muy elevado", "En ningún caso un firewall implementa políticas de seguridad, ya que simplemente bloquea todo acceso de un usuario externo a la red interna"], correct: 0 },
    
    { question: "28. SINGLE SIGN-ON…", answers: ["Es una técnica de ocultación de información similar a la esteganografía, diferenciándose de ésta en que se utiliza sin combinarse con otras técnicas", "Es un protocolo basado en infraestructura de clave pública que posibilita la autenticación del usuario mediante cifrado de claves", "Es un procedimiento de autenticación que permite al usuario acceder a diferentes sistemas mediante una única instancia de identificación", "Es una base de datos relacional que gestiona las claves de los usuarios de un sistema de manera encriptada y en ficheros de red, que se utiliza para acceder a las aplicaciones y servicios"], correct: 2 },
    
    { question: "29. Los botnets son:", answers: ["Discos de arranque para los sistemas operativos UNIX", "Un conjunto de ordenadores infectados por un código de software que los controla", "Programas de configuración para controlar el arranque de los ordenadores que conforman una red", "Sectores de arranque de los discos duros físicos que forman parte de un sistema RAID"], correct: 1 },
    
    { question: "30. Para garantizar la seguridad perimetral, se suelen utilizar firewalls, sistemas…", answers: ["De autenticación basados en LDAP y sistemas que utilizan RAID combinados", "SAS y sistemas de prevención de intrusos", "De detección de intrusos y programas antivirus", "DAS y programas de traducción de direcciones"], correct: 2 },
    
    { question: "31. Entre las configuraciones de almacenamiento en RAID, NO ofrece redundancia de datos:", answers: ["Todas las configuraciones RAID garantizan la redundancia de la información", "RAID 0", "RAID 1", "RAID 5"], correct: 1 },
    
    { question: "32. ¿Qué se entiende por DMZ (Demilitarized Zone)?", answers: ["Un segmento de red de alta seguridad inaccesible desde el exterior de una organización", "Una zona que se usa habitualmente para ubicar servidores de una compañía con presencia en Internet", "Una red propiedad del Ministerio de Defensa", "Ninguna de las anteriores es correcta"], correct: 1 },
    
    { question: "33. ¿Qué definición es la que mejor se ajusta a un Ataque de Denegación de Servicio?", answers: ["Un ataque de tipo phishing en el cual se envía información a los usuarios legítimos indicando que el servicio no esta disponible", "Almacenar mensajes interceptados y enviarlos más tarde causando un daño aun cuando el mensaje estuviese cifrado. Por ejemplo, retrasando una pugna en una subasta on line", "Es un ataque de tipo Man in the Middle en el cual se interceptan los mensajes y se alteran afectando a la operatividad del sistema", "Desbordar un canal u otro recurso con mensajes con el fin de impedir que otros usuarios accedan a él"], correct: 3 },
    
    { question: "34. Un plan de contingencias se divide en:", answers: ["Plan de emergencias y plan de recuperación", "Plan de emergencias y plan de respaldo", "Plan de emergencias, plan de recuperación y plan de respaldo", "Seguridad física y seguridad lógica"], correct: 2 },
    
    { question: "35. En lo que respecta a virus y malware podemos decir que:", answers: ["los hoaxes siempre se distribuyen a través de códigos asociados a ficheros adjuntos", "los virus de macro se caracterizan porque su módulo de ataque se ejecuta en una fecha concreta", "los virus polimórficos son advertencias que se multiplican y se envían por Internet", "un backdoor es un programa que se introduce en el ordenador de manera encubierta"], correct: 3 },
    
    { question: "36. Atendiendo únicamente a criterios de eficiencia en tiempo, ¿cuál de los siguientes métodos sería el más eficiente para securizar las comunicaciones entre usuarios dentro de una red?", answers: ["Mediante claves simétricas", "Mediante claves asimétricas", "Mediante claves simétricas compartidas periódicamente con claves asimétricas", "Mediante claves asimétricas compartidas periódicamente con claves simétricas"], correct: 0 },
    
    { question: "37. La arquitectura de cortafuegos que combina un router con un host bastión y donde el principal nivel de seguridad proviene del filtrado de paquetes se denomina:", answers: ["Screened Subnet", "Dual-Homed Host", "Router-Homed Host", "Screened Host"], correct: 3 },
    
    { question: "38. ¿Cuál de los siguientes niveles RAID, distribuye la información de paridad entre todos los discos que lo componen?", answers: ["RAID 1", "RAID 4", "RAID 5", "RAID 3"], correct: 2 },
    
    { question: "39. Aplicando criterios generales de seguridad perimetral, ¿cual de los siguientes rangos de direcciones IPv4 filtraría en un cortafuegos perimetral de acceso a Internet?", answers: ["192.68.0.0/24 (192.68.0.0/255.255.255.0)", "169.254.0.0/16 (169.254.0.0/255.255.0.0)", "180.18.0.0/16 (180.18.0.0/255.255.0.0)", "200.0.0.0/8 (200.0.0.0/255.0.0.0)"], correct: 1 },
    
    { question: "40. Un capcha es:", answers: ["una prueba de Turing utilizada para determinar si el usuario es humano o una maquina", "un texto deformado", "una prueba que mide la velocidad máxima de una conexión a Internet", "un software malicioso que captura las teclas que son pulsadas en un teclado"], correct: 0 },
    
    { question: "41. ¿Cuál de los siguientes es un firewall de Linux?", answers: ["IpTables", "LanGuard", "Tcpdump", "Nmap"], correct: 0 },
    
    { question: "42. Un ataque ARP Spoonfing:", answers: ["hace que un equipo crea que la MAC de una IP local es la de otro equipo de la misma red", "hace que un equipo crea que la dirección IP de una MAC loca es la de otro equipo de la misma red", "inunda de paquetes a un equipo", "ninguna de las anteriores es correcta"], correct: 0 },
    
    { question: "43. Para que un IDS (sistema de detección de intrusión) sea efectivo:", answers: ["solo pasará por el tráfico de correo electrónico", "solo pasará por le trafico http", "todo el tráfico de red debe llegar a él", "ninguna de las anteriores es correcta"], correct: 2 },
    
    { question: "44. ¿Cuál de las siguientes afirmaciones relativas a los firewall es falsa?", answers: ["funciona, en principio, denegando cual quier trafico que se produzca cerrado todos los puertos de nuestro PC", "el funcionamiento de este tipo de programas se basa en el filtrado de paquetes", "se componen de equipos y programas", "nos advierte de que ciertos paquetes pueden ser perniciosos para nuestro sistema o la red"], correct: 3 },
    
    { question: "45. ¿Cuál es la descripción del termino Confidencialidad como parte del proceso de la Administración de la Seguridad?", answers: ["La protección de los datos contra el acceso y uso no autorizado", "La habilidad de poder acceder a los datos en todo momento", "La capacidad de verificar que los datos son correctos", "La exactitud de los datos"], correct: 0 },
    
    { question: "46. Entre las acciones a tomar en la seguridad de un Sistema de información está la elaboración de un Plan de Seguridad, este NO contemplará:", answers: ["Las necesidades de Seguridad del Sistema", "Valoración de los riesgos", "Creación de unas Políticas de Seguridad", "Periodo de implantación del Plan transcurrido el cual ya no se hacen necesarias las medidas de seguridad"], correct: 3 },
    
    { question: "47. Entre los mecanismos para proteger un Sistema Informático distribuido No se encuentran:", answers: ["Autenticación de identidades, verificación de autoridad de los datos y utilización de métodos criptográficos", "Protección de los puestos contra vulnerabilidades del Sistema Operativo e instalación de los parches necesarios", "Creación de interfaces gráficas simples y claras en el diseño de aplicaciones distribuidas", "Instalación de antivirus y otros programas para luchar contra el malware"], correct: 2 },
    
    { question: "48. En relación a un cortafuegos, ¿cuál de las siguientes afirmaciones es FALSA?", answers: ["Se puede impedir el paso a todo el tráfico IP que vaya dirigido a una cierta dirección IP o a una red concreta", "No se puede impedir el paso a todo el tráfico que provenga de cierta dirección IP o de cierta red concreta", "Se puede impedir el paso a todo tráfico que no provenga de cierta dirección IP o de cierta red concreta", "Se puede impedir el paso del tráfico que vaya dirigido a un puerto concreto"], correct: 1 },
    
    { question: "49. Un cortafuegos:", answers: ["Sirve exclusivamente para eliminar los problemas de virus en el ordenador", "Analiza todos los mensajes que entran o salen, y bloquea los que no cumplen los criterios de seguridad fijados", "Es un elemento hardware de interconexión entre 2 redes", "Es un router de propósito específico, para el acceso a Internet de una red"], correct: 1 },
    
    { question: "50. Según Magerit v3, ¿qué concepto se correspondería con la definición: \"proceso específico cuyo objetivo es legitimar al sistema para formar parte de sistemas más amplios\"?", answers: ["Auditoría", "Acreditación", "Certificación", "Evaluación"], correct: 1 },
    
    { question: "51. Señale de las siguientes cuál es una técnica específica dentro de un proyecto de análisis y gestión de riesgos, según la guía de Técnicas de MAGERIT v3:", answers: ["Sesiones de trabajo", "Valoraciones Delphi", "Histogramas", "Árboles de ataque"], correct: 3 },
    
    { question: "52. ¿Qué tipo de ataque es un \"ataque smurf\"?", answers: ["Denegación de servicio", "Hombre intermedio", "Fuerza Bruta", "Ingeniería social"], correct: 0 },
    
    { question: "53. Según MAGERIT v3, ¿quiénes son participantes en la tarea PS.2 (Plan de ejecución) para llevar a cabo un Plan de Seguridad?", answers: ["El equipo de proyecto, especialistas en seguridad y especialistas en áreas específicas de seguridad", "Departamento de desarrollo y departamento de compras", "El equipo de proyecto y personal especializado en la salvaguarda en cuestión", "El director de proyecto y el comité de seguimiento"], correct: 1 },
    
    { question: "54. Señale qué dos activos esenciales marcan los requisitos de seguridad para todos los demás componentes del sistema según la metodología Magerit versión 3:", answers: ["Información y aplicaciones", "Información y servicios", "Aplicaciones e instalaciones", "Información y personal"], correct: 1 },
    
    { question: "55. ¿Cuál de los siguientes es un ataque que se caracteriza porque el fraude está dirigido principalmente a ejecutivos de alto nivel con el objeto de obtener todo tipo de información confidencial para el acceso y control de los sistemas de información de la empresa?", answers: ["Hunting", "Stalking", "Whaling", "Trusting"], correct: 2 },
    
    { question: "56. ¿Cuál es la fuente principal para calcular los tiempos estimados de recuperación de las actividades (RTO)?", answers: ["Plan de Respuesta ante incidentes", "Pruebas de stress", "Plan de Comunicación de crisis", "Análisis de impacto en el negocio"], correct: 3 },
    
    { question: "57. Indique la afirmación correcta sobre la configuración de almacenamiento RAID 3:", answers: ["Consiste en hacer stripping a nivel de byte más un disco de paridad dedicado", "Es la configuración más utilizada en la práctica", "Distribuye los datos a nivel de bloque", "Implementa el mirroring o espejo de discos"], correct: 0 },
    
    { question: "58. ¿Cómo se podrían mitigar los ataques XSS (Cross-Site Scripting) a una aplicación Web?", answers: ["Mediante el uso de certificados electrónicos", "Mediante el filtrado de datos maliciosos en la entrada de la aplicación, en la salida o en ambas", "Mediante la creación de reglas que permite un cortafuegos tradicional", "Mediante la configuración de listas de control de accesos (ACL)"], correct: 1 },
    
    { question: "59. El software que puede ejecutarse con máximos privilegios en el sistema infectado y que modifica el funcionamiento normal del S.O o de otras aplicaciones para ocultar su actividad, es denominado:", answers: ["Spyware", "Eavesdropping", "Troyano", "Rootkit"], correct: 3 },
    
    { question: "60. La tecnología VSS:", answers: ["Permite la restauración extrema de las copias de seguridad en caso de desastre", "Permite el balanceo de los grupos del cluster", "Permite crear una instantánea exacta del disco en un momento dado", "Permite fijar la sensibilidad al fallo y la respuesta"], correct: 2 },
    
    { question: "61. Cuando se copian únicamente los archivos y directorios que han sido creados y/o modificados desde la última copia completa se llama:", answers: ["Copia diferencial", "Copia en espejo", "Copia incremental", "Copia de modificada"], correct: 0 },
    
    { question: "62. ¿Cuál es el objetivo principal perseguido por un keylogger?", answers: ["\"Intercepción\" y captura de datos", "Suplantación de identidad", "Denegación de servicio", "Manipulación de un recurso"], correct: 0 },
    
    { question: "63. Le proponen implementar RAID-5 sobre un conjunto de 6 discos de 500GB cada uno. ¿Qué capacidad neta quedaría una vez montado el sistema?", answers: ["3 TB", "2,5 TB", "2 TB", "1,5 TB"], correct: 1 },
    
    { question: "64. Si encuentras que varios ficheros del disco duro se han encriptado por un programa ajeno a ti y te piden un dinero para poderlos desencriptar, puedes sospechar que has sido víctima de un:", answers: ["Phising", "Spyware", "Ransomware", "Ninguno de los anteriores"], correct: 2 },
    
    { question: "65. De entre las siguientes medidas de seguridad para combatir el malware, señale la que NO es preventiva", answers: ["Mantener un sistema de copias de seguridad", "Mantener el software actualizado, incluyendo los drivers de los componentes hardware", "Formatear el equipo y reinstalar los programas", "Configurar y mantener un cortafuegos o firewall"], correct: 2 },
    
    { question: "66. Cuáles de las siguientes características corresponden con un sistema de disco montados en RAID 5.", answers: ["Los datos se dividen en bloques y se distribuyen en varios discos, tiene un disco de paridad y se puede recuperar la información en caso de fallo de cualquier disco", "Los datos se dividen en bloques y se distribuyen en varios discos y se forman dos grupos de discos en espejo con la información duplicada y se puede recuperar la información en caso de fallo de cualquier disco", "Los datos se dividen en bloques y se distribuyen en varios discos, la información de paridad se reparte entre todos los discos y se puede recuperar la información en caso de fallo de cualquier disco", "Cada disco tiene una copia exacta con toda la información y se puede recuperar la información en caso de fallo de cualquier disco"], correct: 2 },
    
    { question: "67. El uso de tecnologías de redes por parte de un atacante para intentar obtener acceso a un sistema haciéndose pasar por otro (suplantación de identidad) se denomina:", answers: ["Sniffing", "Spoofing", "Hacking", "Stealth"], correct: 1 },
    
    { question: "68. La redirección a una página web fraudulenta que simula ser la web legítima, con intención de obtener información personal y financiera del usuario se llama", answers: ["Virus de Correos", "Phishing", "Suplantación de identidad", "Fishing"], correct: 1 },
    
    { question: "69. En el ámbito de la seguridad informática, RSA es:", answers: ["Una familia de funciones hash", "Un sistema criptográfico de clave pública", "Un sistema criptográfico de clave simétrica", "El algoritmo para calcular el resumen de un certificado X.509"], correct: 1 },
    
    { question: "70. El conjunto de los programas que realizan una acción delictiva en el equipo, básicamente con fines lucrativos, se denomina:", answers: ["Spyware", "Adware", "Downloader", "Crimeware"], correct: 3 },
    
    { question: "71. La vulnerabilidad conocida como heartbleed afecta a:", answers: ["el servidor de páginas web Apache Webserver", "el intérprete de tipo shell en Unix llamado Bash", "al software criptográfico OpenSSL", "servidores de bases de datos Microsoft SQL Server"], correct: 2 },
    
    { question: "72. ¿A qué ámbito de la seguridad afecta un ataque realizado con un sniffer?", answers: ["Integridad", "Disponibilidad", "Autenticación", "Confidencialidad"], correct: 3 },

    { question: "01. ¿Con qué tipo de mecanismo de seguridad se corresponde un análisis forense?", answers: ["De recuperación.", "De detección.", "De prevención.", "De disponibilidad."], correct: 0 },
    
    { question: "02. El ataque informático denominado \"pharming\" consiste en:", answers: ["Capturar todas las pulsaciones de teclado para averiguar datos sensibles.", "Realizar copias de sí mismo con el objetivo de colapsar un ordenador.", "Mandar correos electrónicos con contenido falso para promover el envío de forma encadenada a otros usuarios.", "Mediante la modificación en el DNS, enviar al usuario a una web falsa."], correct: 3 },
    
    { question: "03. De entre los siguientes, ¿qué nivel de RAID utiliza el denominado \"disk mirroring\" como mecanismo de tolerancia a fallos?", answers: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"], correct: 1 },
    
    { question: "04. En el ámbito de la seguridad informática, Hoax es un mensaje:", answers: ["inofensivo, normalmente distribuido por correo electrónico, que alerta de un problema informático que realmente no existe para causar, mediante una serie de instrucciones, problemas en el sistema.", "normalmente distribuido por correo electrónico, de un destino aparentemente de confianza con la intención de engañar al usuario para que facilite datos personales, bancarios, contraseñas...", "distribuido por correo electrónico, que contiene un fichero adjunto que, una vez descargado y ejecutado se replica e infecta rápidamente la red, reenviándose a la lista de contactos de la víctima.", "distribuido por correo electrónico, que contiene publicidad no solicitada."], correct: 0 },
    
    { question: "05. Cuando hablamos de IronPort o Sophos nos estamos refiriendo a:", answers: ["Protección de sistemas de correo electrónico.", "Distribuciones Linux.", "Servidores de video streaming.", "Sistemas de seguridad para domótica."], correct: 0 },
    
    { question: "06. En una arquitectura de red, un firewall o cortafuegos:", answers: ["Es un elemento de seguridad perimetral.", "Es un dispositivo físico de seguridad que previene tanto de ataques externos como de amenazas internas.", "En su definición más básica, es un mecanismo de seguridad software basado en los estándares ACL (Access Control List) destinado a canalizar el tráfico entrante en una red.", "Es un dispositivo de seguridad centrado en el nivel 4 del modelo OSI (filtrado de paquetes IP)."], correct: 0 },
    
    { question: "07. Se conoce como \"Gestión Unificada de Amenazas (UTM)\" a:", answers: ["Un dispositivo único que integra diferentes soluciones de seguridad perimetral", "El equipo de técnicos expertos coordinados bajo el responsable de seguridad de un organismo, empresa o institución.", "El conjunto de procedimientos de seguridad TIC dentro de un plan general de contingencias", "En MAGERIT, los mecanismos para evaluar el riesgo sobre los activos y aplicar las adecuadas salvaguardas"], correct: 0 },
    
    { question: "08. En el análisis algorítmico descrito en la guía de técnicas de Magerit v3, el coeficiente denominado \"grado de dependencia\", es un coeficiente aplicado a las dependencias entre:", answers: ["activos en el modelo cualitativo, que varía entre 0,0 (activos independientes) y 1,0 (activos con dependencia absoluta).", "activos en el modelo cuantitativo, que varía entre 0,0 (activos independientes) y 1,0 (activos con dependencia absoluta).", "activos en el modelo cualitativo, que varía entre 0,0 (activos con dependencia absoluta) y 1,0 (activos independientes).", "activos en el modelo cuantitativo, que varía entre 0,0 (activos con dependencia absoluta) y 1,0 (activos independientes)."], correct: 1 },
    
    { question: "09. ¿Qué es la esteganografía?", answers: ["Es equivalente al cifrado, especialmente en imágenes digitales, audio, ficheros y video digital.", "Es un tipo de troyano.", "Actualmente no se utiliza para el envío de información.", "Es el envío de un mensaje oculto, especialmente en imágenes digitales, audio, ficheros y video digital."], correct: 3 },
    
    { question: "10. Según Magerit v2, quien NO es un participante en un proyecto de análisis y gestión de riesgos:", answers: ["Comité de Gestión.", "Grupos de Interlocutores.", "Comité de Seguimiento.", "Equipo de Proyecto."], correct: 0 },
    
    { question: "11. Según Magerit v2 cuál de las siguientes tareas NO forma parte de la actividad de caracterización de los activos en el Análisis de Riesgos:", answers: ["Identificación de los activos.", "Dependencias entre activos.", "Auditoría de los activos.", "Valoración de los activos."], correct: 2 },
    
    { question: "12. En el contexto de la seguridad, el shoulder surfing consiste en:", answers: ["Espiar a los usuarios modificando los navegadores web para obtener sus claves de acceso.", "Uso de aplicaciones intermedias llamadas shoulders para la obtención de los datos de navegación.", "Espiar físicamente a los usuarios, para obtener generalmente claves de acceso al sistema.", "Es un sinónimo del ataque man in the middle"], correct: 2 },
    
    { question: "13. Indique la sentencia correcta respecto al análisis del factor dolor (Pain Value Analysis), es una técnica:", answers: ["Para ayudar a identificar el impacto en el negocio de uno o más problemas.", "Para calcular el límite máximo de usuarios que el sistema es capaz de gestionar, teniendo en cuenta la capacidad del hardware y el número de peticiones de cada usuario.", "Para la asignación de prioridades a diferentes actividades, dice que el 80% del valor de una actividad es generado por el 20% del esfuerzo.", "Acuñada en los años 80, cuya finalidad era calcular la capacidad física de los usuarios del sistema informático."], correct: 0 },
    
    { question: "14. En el contexto de copias de seguridad o respaldo, un TMS es acrónimo de:", answers: ["Tape Management System.", "Transaction Multiplexing System.", "Tape Mapping System.", "Transaction Management System."], correct: 0 },
    
    { question: "15. ¿Cuál es el máximo porcentaje de disco desaprovechado para el almacenamiento efectivo de datos en un array de discos configurado en RAID 5 (suponiendo que todos los discos tienen la misma capacidad)?", answers: ["33%", "20%", "50%", "0%"], correct: 0 },
    
    { question: "16. Un ataque ARP Spoonfing consiste en:", answers: ["hace que un equipo crea que la MAC de una IP local es la de otro equipo de la misma red", "hacer que un equipo crea que la dirección IP de una MAC loca es la de otro equipo de la misma red", "inundar de paquetes a un equipo", "ninguna de las anteriores es correcta"], correct: 0 }
];