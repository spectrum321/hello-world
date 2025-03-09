const tema11 = [
{ question: "01. ¿Cuáles son los requisitos mínimos de hardware para instalar Windows 10?", answers: ["Procesador 32 ó 64 bits a 1 GHz o superior compatible con PAE,NX y SSE2, 1 GB de RAM (32 bits) o 2GB de RAM (64 bits), espacio libre en HD 16GB (32 bits) o 20GB (64 bits), dispositivo gráfico DirectX9 con controlador WDDM,pantalla 800x600.", "Procesador 32 ó 64 bits a 1GHz, 1GB de RAM (32 bits) o 2GB de RAM (64 bits), espacio libre en HD 16GB (32 bits) o 20GB (64 bits), dispositivo gráfico DirectX9 con controlador WDDM 1.0 o superior, pantalla 800x600.", "Procesador 32 ó 64 bits a 1 GHz, 1GB de RAM (32 bits) o 2GB de RAM (64 bits), HD de 40GB con espacio libre de 15GB, dispositivo gráfico DírectX9 con controlador WDDM, pantalla 800x600.", "Procesador 32 ó 64 bits a 1GHz o superior o SoC, 1GB de RAM (32 bits) o 2GB de RAM (64 bits), espacio libre en HD 16GB (32 bits) o 20GB (64 bits), dispositivo gráfico DirectX9 o posterior con controlador WDOM 1.0, pantalla 800x600."], correct: 1 },
                { question: "02. ¿Cuál es la última versión disponible de Microsoft Windows Server?", answers: ["Windows Server 2025.", "Windows Server 10.", "Windows Server 2022.", "Windows Server Azure."], correct: 0 },
                { question: "03. Dentro del Directorio Activo hay varias estructuras. ¿Cuál de ellas se compone de elementos intangibles como objetos, dominios, árboles y bosques?", answers: ["Estructura física.", "Estructura de nombre.", "Estructura lógica.", "Estructura global."], correct: 2 },
                { question: "04. ¿Qué comando del Directorio Activo muestra los atributos seleccionados de tipos de objeto específicos de Active Directory?", answers: ["Dsquery.", "LDIFDE.", "Ntdsutil.", "Dsget."], correct: 3 },
                { question: "05. En Windows XP, de los siguientes programas, ¿cuál utilizaremos para hacer un inicio selectivo?", answers: ["cmd", "regedit", "msconfig", "bootcfg"], correct: 2 },
                { question: "06. ¿Que arquitecturas soporta Windows 10?", answers: ["Arquitecturas de 32 y 64 bits.", "Solamente arquitecturas de 32 bits.", "Arquitecturas de 128 bits.", "Solamente arquitecturas de 64 bits."], correct: 0 },
                { question: "07. ¿Qué sistema de archivos es necesario para instalar Active Directory?", answers: ["HPFS", "FAT32", "Es indiferente", "NTFS"], correct: 3 },
                { question: "08. Un dominio de Windows permite:", answers: ["Gestionar el acceso a los recursos de los servidores de la red.", "Establecer servicios de arranque de impresoras.", "Dar respuesta homogénea a las peticiones de los clientes de la red.", "Establecer prioridades de control remoto de equipos."], correct: 0 },
                { question: "09. ¿Dónde podemos activar y desactivar la visibilidad de los archivos protegidos del sistema?", answers: ["En la ventana de propiedades de la carpeta, pestaña de herramientas.", "En la ventana de opciones de la carpeta, pestaña general.", "En la ventana de propiedades de la carpeta, pestaña de seguridad.", "En la ventana de opciones de la carpeta, pestaña ver."], correct: 3 },
                { question: "10. ¿Cómo se configura en Windows una impresora que está conectada directamente a la red IP local?", answers: ["Se da de alta como impresora compartida remotamente.", "Se da de alta como impresora local conectada al equipo.", "Hay que instalar los drivers específicos de la impresora.", "Se da de alta como impresora de red."], correct: 3 },
				{ question: "11. ¿Qué es lo que hace la siguiente instrucción Windows?: route 2>NUL", answers: ["No hace nada pues es un comando erróneo y los errores están silenciados", "Nos muestra en pantalla la sintaxis correcta del comando route", "Anula la segunda ruta de la tabla de enrutamiento", "Dirige el tráfico del segundo interfaz a un sumidero"], correct: 0 },
                { question: "12. En las redes de Windows:", answers: ["Un grupo local de usuarios puede incluir grupos globales", "Un grupo global de usuarios agrupa varios grupos locales", "Un grupo de usuarios no puede pertenecer a otro grupo", "Ninguna de las afirmaciones anteriores es correcta"], correct: 0 },
                { question: "13. En Windows XP ¿desde dónde podemos visualizar el rendimiento del sistema?", answers: ["Ventana de propiedades del sistema", "Administrador de tareas", "Ventana de herramientas del sistema", "Ventanas de propiedades de la barra de tareas y del menú de inicio"], correct: 1 },
                { question: "14. En los sistemas Windows, para conocer la configuración de red de un PC ejecutaremos el comando:", answers: ["netconfig", "iwconfig", "ipconfig", "ifconfig"], correct: 2 },
                { question: "15. En los sistemas Windows, ¿cuál de los siguientes es el sistema de ficheros más robusto?", answers: ["FAT32", "FAT64", "FTP", "NTFS"], correct: 3 },
                { question: "16. Señale la opción correcta respecto a las 'estructuras lógicas' que proporciona Active Directory:", answers: ["Son estructuras lógicas las Unidades Organizativas únicamente", "Son estructuras lógicas las Unidades Organizativas, los Dominios y los Sitios", "Son estructuras lógicas las Unidades Organizativas, los Dominios, los Árboles de Dominios y los Bosques de Dominios", "Son estructuras lógicas las Unidades Organizativas y las Subredes"], correct: 2 },
                { question: "17. Señale la opción correcta respecto a las Directivas de Grupo en Windows Server 2008:", answers: ["Las 'Directivas de Grupo Local' se encuentran almacenadas en el almacén del Directorio Activo y no en los equipos a los que afectan", "Las 'Directivas de Grupo' se dividen en dos grandes grupos, las que se aplican a equipos y las que se aplican a usuarios, siendo normal que se ejecuten primero las que se aplican a los usuarios", "Las 'Directivas de Grupo' se dividen en dos grandes grupos, las que se aplican a equipos y las que se aplican a usuarios, siendo normal que se ejecuten primero las que se aplican a los equipos", "Las 'Directivas de Grupo' solo se aplican a usuarios"], correct: 2 },
                { question: "18. Señale la opción correcta respecto a Active Directory en Windows Server 2008:", answers: ["Hasta que la infraestructura de DNS no esté correctamente instalada y configurada no estarán disponibles las funciones del controlador de dominio", "El controlador de dominio de solo lectura con DNS instalado de Windows Server 2008 permite actualizaciones directas de los clientes", "a) y b) son falsas", "a) y b) son verdaderas"], correct: 3 },
                { question: "19. Señale la opción correcta respecto al ámbito de los grupos en Windows Server 2000, 2003 o 2008:", answers: ["Pueden ser 'Locales de Dominio' o 'Globales' únicamente", "Pueden ser 'Locales de Dominio', 'Globales' y 'Universales'", "Pueden ser 'Globales' y 'Universales' únicamente", "Los grupos no tienen ámbito"], correct: 1 },
                { question: "20. De estas afirmaciones sobre Windows 2008 Server, indica cuál es incorrecta:", answers: ["Windows 2008 Server solamente puede utilizarse con Active Directory", "Las relaciones de confianza permiten a los usuarios de un dominio utilizar recursos de otro", "Un controlador de dominio contiene la base de datos de objetos del directorio para ese dominio", "Para poner nombre a los dominios, Active Directory necesita al menos un servidor DNS instalado en la red"], correct: 0 },
				{ question: "21. ¿Qué extensión tienen los archivos de secuencias de comandos de Windows PowerShell?", answers: ["psp", "psw", "pws", "ps1"], correct: 3 },
                { question: "22. ¿Para qué se utiliza el servicio SMB de Windows?", answers: ["Para configurar un proxy-inverso en la salida a Internet", "Para realizar backups remotos y cronificados", "Para compartir archivos e impresoras", "Para configurar redes wifi"], correct: 2 },
                { question: "23. ¿A qué perfil profesional relacionado con las Tecnologías de Información le corresponde la gestión de las Directivas de Grupo (GPO) en el Directorio Activo de Microsoft Windows Server?", answers: ["Administrador de Base de Datos", "Analista Programador", "Administrador de Sistema Operativo", "Jefe de Proyecto"], correct: 2 },
                { question: "24. Un objeto de Directorio Activo se identifica de forma única por su:", answers: ["Distinguished Name", "Relative Distinguished Name", "Nombre común del objeto", "Object Identifier"], correct: 0 },
                { question: "25. ¿Existe la posibilidad de que el Controlador de Dominio de una red de ordenadores equipada Microsoft Windows XP no sea también un ordenador con sistema operativo de Microsoft?", answers: ["Imposible. Microsoft mantiene un protocolo de comunicaciones de dominio específico", "Es posible, siempre y cuando los ordenadores personales dispongan del cliente del servidor de dominio", "Es lo normal. Los servicios de control de dominio se encomiendan siempre a servidores Novell", "Existen opciones distintas a las propietarias de Microsoft, como por ejemplo Samba"], correct: 3 },
                { question: "26. ¿Cuál de los siguientes lectores de pantalla viene integrado en el Sistema Operativo Windows?", answers: ["Window Eyes", "Narrator", "Blindows", "JAWS (Job Access With Speech)"], correct: 1 },
                { question: "27. En Windows 10 Profesional, ¿qué utilidad tiene BitLocker?", answers: ["Bloquear el disco duro en los portátiles con el fin de protegerle en el transporte", "Instalar una seguridad biométrica en el inicio de sesión", "Realizar un cifrado del disco duro", "Bloquear el acceso a carpetas de todos los usuarios a los usuarios sin privilegios administrativos"], correct: 2 },
                { question: "28. En Windows 10 Profesional, para que al ejecutar un archivo te permita 'ejecutar como otro usuario' ¿cuál de las siguientes opciones debemos utilizar?", answers: ["Seleccionar el archivo y pincharle con el botón derecho del ratón", "Seleccionar el archivo, dejar pulsada la tecla de mayúsculas y pincharle con el botón derecho del ratón", "Seleccionar el archivo, dejar pulsada la teclas de Alt + mayúsculas y pincharle con el botón derecho del ratón", "Seleccionar el archivo dejar pulsadas la teclas Control + mayúsculas y pincharle con el botón derecho del ratón"], correct: 3 },
                { question: "29. En Windows 10 Profesional, desde una consola cmd, ¿qué comando abre las conexiones de red?", answers: ["appwiz.cpl", "nconect.cpl", "pnet.cpl", "ncpa.cpl"], correct: 3 },
                { question: "30. En Windows 10 el servicio 'BITS', ¿qué función realiza?", answers: ["Transfiere archivos en segundo plano mediante el uso de ancho de banda de red inactivo", "Activar los bits de control en comunicaciones cifradas", "Proporciona la tecnología de cifrado de archivos básica del sistema de archivos NTFS", "Habilita la detección, descarga e instalación de actualizaciones de Windows"], correct: 0 },
				{ question: "31. En Directorio Activo ¿Qué se elimina al borrar un grupo?", answers: ["El grupo y los permisos y derechos asociados a él", "El grupo, los permisos y derechos asociados y los usuarios que pertenezcan a él", "El grupo, todos los grupos y usuarios que pertenezcan a él", "Solamente se elimina el grupo, los permisos y derechos de los usuarios se mantienen"], correct: 0 },
                { question: "32. ¿Para qué se utiliza un dominio de Directorio Activo?", answers: ["Se utiliza para arrancar el sistema operativo", "Generar redes independientes entre un conjunto de ordenadores", "Llevar un inventario de todos los componentes de un conjunto de ordenadores", "Aplicar políticas a un conjunto de ordenadores"], correct: 3 },
                { question: "33. En Windows 7 Profesional, ¿cuál de las siguientes es la manera correcta de borrar un perfil de usuario?", answers: ["Borrar la carpeta del usuario dentro de la carpeta ‘Usuarios’", "En Sistema > Perfiles de Usuario > Eliminar perfil", "En Cuentas de usuario > Configurar las propiedades avanzadas del perfil del usuario > (seleccionar el perfil del usuario) > Eliminar", "En Cuentas de Usuario > Administrar credenciales > (seleccionar el perfil del usuario) > Eliminar"], correct: 2 },
                { question: "34. En Directorio Activo ¿a qué se le denomina Árbol?", answers: ["A un conjunto de usuarios", "A un conjunto de recursos", "A un conjunto de servicios", "A un conjunto de dominios"], correct: 3 },
                { question: "35. En Directorio Activo ¿qué objetos se pueden añadir a un grupo?", answers: ["Sólo usuarios", "Sólo equipos", "Usuarios, equipos y otros grupos", "Sólo usuarios y equipos"], correct: 2 },
                { question: "36. Una de las características del sistema operativo Windows es:", answers: ["Hay dos tipos de eventos: de sincronización y de notificación", "El modelo de E/S de bajo nivel es síncrono", "El registro de Windows sólo almacena información en cuanto a hardware y software, delegando la información relativa a los usuarios al Directorio Activo", "El registro de Windows es un único fichero que podemos mantener con el comando regedit"], correct: 0 },
                { question: "37. En Windows PowerShell, los comandos que se ejecutan se denominan:", answers: ["runshell", "scriptlets", "runlets", "cmdlets"], correct: 3 },
                { question: "38. Señale la respuesta correcta, Microsoft Exchange Server es un:", answers: ["servidor de correo electrónico al que puede accederse mediante un navegador web y es compatible con aplicaciones cliente como Microsoft Outlook", "gestor de base de datos relacional que utiliza ADO.NET para exponer servicios de acceso a datos para programadores de .NET Framework", "sistema operativo que utiliza el sistema de archivos distribuido Apache Hadoop (HDFS) para aprovechar el modelo de programación Map - Reduce", "producto que permite la monitorización del rendimiento de los servidores de una organización y la distribución remota de software"], correct: 0 },
                { question: "39. LDAP es un directorio jerárquico y distribuido que…", answers: ["Está optimizado para la lectura y búsqueda de información (lectura intensiva)", "Está optimizado para procesar un gran volumen de actualizaciones (escritura intensiva)", "Se caracteriza porque la información reside en un único punto y no dispone de capacidades de replicación", "Puede contener información de los usuarios (por ejemplo claves públicas) pero no información de las políticas de acceso"], correct: 0 },
                { question: "40. ¿Qué es LDAP?", answers: ["Un servicio de transporte", "Un servidor de correo", "Un servicio de directorio", "Un servicio de alertas"], correct: 2 },
                { question: "41. Señalar cuál de las siguientes NO es una ventaja del uso de directorios LDAP para la autenticación de usuarios:", answers: ["La mayoría de aplicaciones comerciales permiten su integración fácilmente", "Están optimizados para las búsquedas, que es la operación más repetida a la hora de gestionar los usuarios", "Permiten implantar sin ningún mecanismo adicional Single Sign On, ya que todas las aplicaciones pueden tener la autenticación a través del LDAP", "La replicación con los directorios /etc/passwd está automatizada, y por tanto la integración con las aplicaciones comerciales"], correct: 3 },
                { question: "42. En relación al servicio de directorio, señálese la afirmación falsa:", answers: ["Generalmente la información soporta más lecturas que escrituras", "Habitualmente es un componente central en el diseño de la seguridad de un sistema de información", "Los datos se organizan en una estructura poco jerarquizada", "El estándar X.500 fue la base del estándar LDAP"], correct: 2 },
                { question: "43. Señale la respuesta incorrecta entre las siguientes afirmaciones:", answers: ["LDAP es un conjunto de protocolos abiertos usado para acceder a información guardada centralmente a través de una red", "Cualquiera puede acceder a su cuenta desde cualquier máquina en la red activa LDAP", "LDAP se usa como directorio telefónico virtual, permitiendo a los usuarios acceder fácilmente a información de sus contactos para otros usuarios", "LDAP no es capaz de propagar sus directorios a otros servidores LDAP"], correct: 3 },
                { question: "44. Indique qué afirmación en relación al protocolo LDAP es VERDADERA:", answers: ["Es un protocolo para acceder a un directorio X.500 que precisa la pila de protocolos OSI", "La estructura interna del directorio X.500 está definida mediante el protocolo LDAP", "Un servidor LDAP siempre requiere que el cliente LDAP se autentique antes de acceder a la información", "El protocolo LDAP está descrito usando ASN.1"], correct: 3 },
                { question: "45. ¿Cuáles son los requisitos mínimos de hardware para instalar Windows 11?", answers: ["Procesador 32 ó 64 bits a 1 GHz o superior compatible con PAE, NX y SSE2, 1 GB de RAM (32 bits) o 2GB de RAM (64 bits), espacio libre en HD 16GB (32 bits) o 20GB (64 bits), dispositivo gráfico DirectX9 con controlador WDDM, pantalla 800x600", "Procesador 64 bits a 1GHz, 4GB de RAM, HD de 64GB, TMP 2.0, dispositivo gráfico DirectX12 con controlador WDDM 2.0, pantalla 720p", "Procesador 32 ó 64 bits a 1 GHz, 4GB de RAM, HD de 64GB, TMP 2.0, dispositivo gráfico DirectX12 con controlador WDDM 3.1", "Procesador 32 ó 64 bits a 1GHz o superior o SoC, 1GB de RAM (32 bits) o 2GB de RAM (64 bits), espacio libre en HD 16GB (32 bits) o 20GB (64 bits), dispositivo gráfico DirectX9 o posterior con controlador WDOM 1.0"], correct: 1 }				
    
];
