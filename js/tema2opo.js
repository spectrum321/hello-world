const tema2opo = [
    
    // Características y elementos constitutivos de los sistemas operativos
    { question: "01. ¿Cuál es la función principal de un sistema operativo?", answers: ["Ejecutar aplicaciones de usuario", "Crear documentos de texto", "Gestionar los recursos hardware y proporcionar servicios a las aplicaciones", "Conectarse a Internet"], correct: 2 },
    { question: "02. ¿Cuál de los siguientes NO es un componente principal de un sistema operativo?", answers: ["Gestor de procesos", "Gestor de memoria", "Sistema de archivos", "Procesador de textos"], correct: 3 },
    { question: "03. ¿Qué es un kernel o núcleo en un sistema operativo?", answers: ["La interfaz gráfica de usuario", "El componente central que gestiona CPU, memoria y dispositivos", "El conjunto de aplicaciones instaladas", "La utilidad para comprimir archivos"], correct: 1 },
    { question: "04. ¿Qué tipo de sistema operativo puede ejecutar múltiples programas simultáneamente?", answers: ["Sistema operativo monotarea", "Sistema operativo multitarea", "Sistema operativo monousuario", "Sistema operativo distribuido"], correct: 1 },
    { question: "05. ¿Qué significa que un sistema operativo sea multiusuario?", answers: ["Que puede instalarse en múltiples ordenadores", "Que permite que varios usuarios utilicen el sistema simultáneamente", "Que puede ejecutar varias aplicaciones a la vez", "Que tiene múltiples interfaces gráficas"], correct: 1 },
    { question: "06. ¿Qué es un proceso en el contexto de los sistemas operativos?", answers: ["Un programa en ejecución", "Un archivo en el disco duro", "Un dispositivo de entrada/salida", "Una conexión de red"], correct: 0 },
    { question: "07. ¿Qué técnica utiliza el sistema operativo para compartir el tiempo de CPU entre varios procesos?", answers: ["Virtualización", "Multiprocesamiento", "Planificación (scheduling)", "Paginación"], correct: 2 },
    { question: "08. ¿Qué es la memoria virtual en un sistema operativo?", answers: ["Una memoria física adicional", "Una técnica que utiliza el disco duro como extensión de la memoria RAM", "Un tipo especial de memoria caché", "La memoria utilizada por las máquinas virtuales"], correct: 1 },
    { question: "09. ¿Qué es un sistema de archivos?", answers: ["Un programa para comprimir archivos", "Un método para organizar y almacenar archivos en el medio de almacenamiento", "Una colección de archivos de sistema", "Una utilidad para buscar archivos"], correct: 1 },
    { question: "10. ¿Qué es un driver o controlador de dispositivo?", answers: ["Un componente hardware", "Una utilidad de diagnóstico", "Un software que permite al sistema operativo comunicarse con el hardware", "Un dispositivo de entrada como el ratón"], correct: 2 },
    { question: "11. ¿Qué es el spooling en sistemas operativos?", answers: ["Un tipo de virus", "Una técnica para gestionar las colas de impresión", "Un método de cifrado de datos", "Un tipo de sistema de archivos"], correct: 1 },
    { question: "12. ¿Qué significa GUI en el contexto de los sistemas operativos?", answers: ["General User Identification", "Graphical User Interface", "Global Utility Integration", "General Unity Implementation"], correct: 1 },
    { question: "13. ¿Qué tipo de sistema operativo está diseñado específicamente para servidores?", answers: ["Sistema operativo de tiempo real", "Sistema operativo de propósito general", "Sistema operativo de red", "Sistema operativo embebido"], correct: 2 },
    { question: "14. ¿Qué es un sistema operativo de tiempo real?", answers: ["Un sistema operativo que siempre muestra la hora actual", "Un sistema operativo que garantiza tiempos de respuesta predecibles y deterministas", "Un sistema operativo que funciona 24/7", "Un sistema operativo con actualizaciones automáticas"], correct: 1 },
    { question: "15. ¿Qué es la fragmentación en el contexto de sistemas de archivos?", answers: ["La división de un archivo en múltiples partes no contiguas en el disco", "La compresión de archivos para ahorrar espacio", "La eliminación segura de archivos", "La división de un disco en múltiples particiones"], correct: 0 },
    { question: "16. ¿Qué es el modo kernel en un sistema operativo?", answers: ["Un modo de bajo consumo energético", "Un modo de ejecución con privilegios máximos para el sistema", "Un modo de compatibilidad para software antiguo", "Un modo de operación sin interfaz gráfica"], correct: 1 },
    { question: "17. ¿Qué es una API en el contexto de los sistemas operativos?", answers: ["Advanced Programming Interface", "Application Programming Interface", "Automated Process Integration", "Advanced Protocol Implementation"], correct: 1 },
    { question: "18. ¿Cuál de estos NO es un algoritmo común de planificación de CPU?", answers: ["Round Robin", "First-Come, First-Served", "Priority Scheduling", "File Allocation Table"], correct: 3 },
    { question: "19. ¿Qué es un deadlock o interbloqueo en sistemas operativos?", answers: ["Un error en el código del sistema operativo", "Una situación donde dos o más procesos no pueden continuar porque cada uno espera recursos que otro tiene", "Un tipo de malware que bloquea el sistema", "Un método de protección contra accesos no autorizados"], correct: 1 },
    { question: "20. ¿Qué tipo de arquitectura de sistema operativo separa claramente el núcleo básico de los servicios ampliados?", answers: ["Arquitectura monolítica", "Arquitectura de microkernel", "Arquitectura de máquina virtual", "Arquitectura cliente-servidor"], correct: 1 },
    
    // Sistemas Windows
    { question: "21. ¿Quién desarrolló el sistema operativo Windows?", answers: ["Apple", "Microsoft", "IBM", "Google"], correct: 1 },
    { question: "22. ¿Cuál fue el primer sistema operativo de Microsoft con interfaz gráfica?", answers: ["MS-DOS", "Windows 1.0", "Windows 95", "Windows NT"], correct: 1 },
    { question: "23. ¿Qué versión de Windows introdujo la barra de tareas y el menú Inicio?", answers: ["Windows 3.1", "Windows 95", "Windows 98", "Windows XP"], correct: 1 },
    { question: "24. ¿Qué sistema de archivos es nativo de los sistemas Windows modernos?", answers: ["FAT32", "NTFS", "EXT4", "HFS+"], correct: 1 },
    { question: "25. ¿Qué significa NTFS?", answers: ["New Technology File System", "Network Technology File System", "National Technical File Standard", "New Type File Storage"], correct: 0 },
    { question: "26. ¿Qué es el Registro de Windows?", answers: ["Un log de todas las acciones realizadas por el usuario", "Una base de datos jerárquica que almacena configuraciones del sistema", "Un sistema de archivos especial", "Una herramienta para registrar nuevos usuarios"], correct: 1 },
    { question: "27. ¿Qué es el ''Administrador de tareas'' en Windows?", answers: ["Una aplicación para programar tareas", "Una herramienta que muestra procesos en ejecución y permite finalizarlos", "Un calendario de eventos", "Una herramienta para organizar archivos"], correct: 1 },
    { question: "28. ¿Qué herramienta de Windows se utiliza para gestionar discos duros, crear particiones y formatear unidades?", answers: ["Explorador de archivos", "Administrador de dispositivos", "Administración de discos", "Panel de control"], correct: 2 },
    { question: "29. ¿Qué versión de Windows fue la primera en incluir el navegador Internet Explorer integrado?", answers: ["Windows 3.1", "Windows 95", "Windows 98", "Windows 2000"], correct: 2 },
    { question: "30. ¿Qué servicio de Windows es responsable de la autenticación de usuarios?", answers: ["Windows Update", "Windows Defender", "Windows Firewall", "Windows Active Directory"], correct: 3 },
    { question: "31. ¿Qué versión de Windows fue diseñada específicamente para ser utilizada en servidores?", answers: ["Windows Home", "Windows Professional", "Windows Server", "Windows Enterprise"], correct: 2 },
    { question: "32. ¿Qué tecnología de Windows permite ejecutar aplicaciones en un entorno aislado?", answers: ["Hyper-V", "DirectX", "Windows Sandbox", ".NET Framework"], correct: 2 },
    { question: "33. ¿Qué es PowerShell en Windows?", answers: ["Una herramienta para gestionar la energía del sistema", "Un shell de línea de comandos y lenguaje de scripting", "Una utilidad para mejorar el rendimiento gráfico", "Un sistema de gestión de contraseñas"], correct: 1 },
    { question: "34. ¿Qué versión de Windows introdujo la interfaz Modern UI (anteriormente conocida como Metro)?", answers: ["Windows 7", "Windows 8", "Windows 10", "Windows Vista"], correct: 1 },
    { question: "35. ¿Qué característica de seguridad de Windows controla qué aplicaciones pueden acceder a ciertas características del sistema?", answers: ["Windows Defender", "Control de cuentas de usuario (UAC)", "BitLocker", "Windows Firewall"], correct: 1 },
    { question: "36. ¿Qué es Microsoft OneDrive?", answers: ["Un sistema de archivos", "Un servicio de almacenamiento en la nube integrado en Windows", "Una utilidad de copia de seguridad", "Un sistema de virtualización"], correct: 1 },
    { question: "37. ¿Qué año se lanzó Windows 10?", answers: ["2012", "2013", "2014", "2015"], correct: 3 },
    { question: "38. ¿Qué asistente de voz está integrado en Windows 10?", answers: ["Siri", "Cortana", "Google Assistant", "Alexa"], correct: 1 },
    { question: "39. ¿Qué características de seguridad en Windows permite cifrar todo un volumen de disco?", answers: ["Windows Defender", "BitLocker", "Windows Firewall", "Control de cuentas de usuario"], correct: 1 },
    { question: "40. ¿Qué es Hyper-V en Windows?", answers: ["Un sistema de archivos", "Una tecnología de virtualización", "Un sistema de compresión de archivos", "Un protocolo de red"], correct: 1 },
    
    // Sistemas UNIX y Linux
    { question: "41. ¿En qué año se desarrolló UNIX originalmente?", answers: ["1969", "1975", "1981", "1991"], correct: 0 },
    { question: "42. ¿Quién desarrolló inicialmente el kernel de Linux?", answers: ["Steve Jobs", "Bill Gates", "Linus Torvalds", "Richard Stallman"], correct: 2 },
    { question: "43. ¿Qué término se utiliza para referirse a las diferentes versiones o distribuciones de Linux?", answers: ["Versiones", "Distros", "Ediciones", "Paquetes"], correct: 1 },
    { question: "44. ¿Cuál de estas NO es una distribución de Linux?", answers: ["Ubuntu", "Fedora", "Debian", "macOS"], correct: 3 },
    { question: "45. ¿Qué sistema de archivos es comúnmente utilizado en sistemas Linux?", answers: ["NTFS", "FAT32", "EXT4", "HFS+"], correct: 2 },
    { question: "46. ¿Qué es el shell en sistemas UNIX/Linux?", answers: ["La interfaz gráfica de usuario", "El núcleo del sistema operativo", "Un intérprete de línea de comandos", "El sistema de archivos"], correct: 2 },
    { question: "47. ¿Cuál es el directorio raíz en sistemas UNIX/Linux?", answers: ["/root", "/home", "/", "C:\\"], correct: 2 },
    { question: "48. ¿Qué comando se utiliza para listar archivos en Linux?", answers: ["dir", "show", "ls", "list"], correct: 2 },
    { question: "49. ¿Qué significa GNU en GNU/Linux?", answers: ["General New Unix", "GNU's Not Unix", "General Network Utility", "Global New User Experience"], correct: 1 },
    { question: "50. ¿Qué permiso representa el valor numérico ''755'' en UNIX/Linux?", answers: ["Lectura y escritura para todos", "Lectura, escritura y ejecución para el propietario; lectura y ejecución para grupo y otros", "Solo lectura para todos", "Todos los permisos para todos"], correct: 1 },
    { question: "51. ¿Qué comando se utiliza para cambiar permisos de archivos en UNIX/Linux?", answers: ["chmod", "chown", "chperm", "permmod"], correct: 0 },
    { question: "52. ¿Qué es un daemon en sistemas UNIX/Linux?", answers: ["Un virus informático", "Un proceso que se ejecuta en segundo plano", "Una utilidad de línea de comandos", "Un tipo de sistema de archivos"], correct: 1 },
    { question: "53. ¿Qué es X Window System en UNIX/Linux?", answers: ["Un sistema de gestión de ventanas", "Un navegador web", "Un sistema de archivos", "Un protocolo de red"], correct: 0 },
    { question: "54. ¿Qué es sudo en sistemas UNIX/Linux?", answers: ["Un método para crear archivos", "Un comando para ordenar directorios", "Un comando para ejecutar programas con privilegios de superusuario", "Una utilidad para buscar archivos"], correct: 2 },
    { question: "55. ¿Qué entorno de escritorio es nativo de Ubuntu?", answers: ["KDE", "GNOME", "Xfce", "Cinnamon"], correct: 1 },
    { question: "56. ¿Qué gestor de paquetes utiliza Debian y sus derivados como Ubuntu?", answers: ["RPM", "Pacman", "APT", "YUM"], correct: 2 },
    { question: "57. ¿Qué comando muestra el uso de espacio en disco en Linux?", answers: ["disk", "space", "df", "memory"], correct: 2 },
    { question: "58. ¿Qué es una terminal en sistemas UNIX/Linux?", answers: ["Un dispositivo de hardware específico", "Una aplicación que proporciona acceso al shell", "El final de un cable de red", "El núcleo del sistema operativo"], correct: 1 },
    { question: "59. ¿Qué significa LAMP en el contexto de servidores Linux?", answers: ["Linux Apache MySQL PHP", "Linux Advanced Management Protocol", "Local Application Management Process", "Linux Automated Memory Processing"], correct: 0 },
    { question: "60. ¿Qué es cron en sistemas UNIX/Linux?", answers: ["Un lenguaje de programación", "Un sistema para programar tareas", "Un comando para crear archivos", "Un sistema de gestión de usuarios"], correct: 1 },
    
    // Sistemas operativos para dispositivos móviles
    { question: "61. ¿Qué empresa desarrolla el sistema operativo Android?", answers: ["Apple", "Microsoft", "Google", "Samsung"], correct: 2 },
    { question: "62. ¿Qué sistema operativo móvil fue desarrollado por Apple?", answers: ["Android", "iOS", "Windows Phone", "BlackBerry OS"], correct: 1 },
    { question: "63. ¿En qué sistema operativo está basado Android?", answers: ["Windows", "Linux", "macOS", "Solaris"], correct: 1 },
    { question: "64. ¿Qué versión de Android fue la primera en utilizar el nombre de un postre?", answers: ["Android 1.5 Cupcake", "Android 1.0 Alpha", "Android 2.0 Eclair", "Android 4.0 Ice Cream Sandwich"], correct: 0 },
    { question: "65. ¿Qué tienda de aplicaciones es propia de iOS?", answers: ["Google Play Store", "App Store", "Windows Store", "Amazon Appstore"], correct: 1 },
    { question: "66. ¿Qué asistente de voz está integrado en iOS?", answers: ["Cortana", "Google Assistant", "Siri", "Alexa"], correct: 2 },
    { question: "67. ¿Qué tipo de kernel utiliza Android?", answers: ["Monolítico", "Microkernel", "Híbrido", "Exokernel"], correct: 0 },
    { question: "68. ¿Qué lenguaje de programación se utiliza principalmente para desarrollar aplicaciones nativas de Android?", answers: ["Swift", "Objective-C", "Java/Kotlin", "C#"], correct: 2 },
    { question: "69. ¿Qué lenguaje de programación se utiliza principalmente para desarrollar aplicaciones nativas de iOS?", answers: ["Swift/Objective-C", "Java", "Kotlin", "C#"], correct: 0 },
    { question: "70. ¿Qué es una APK en el contexto de Android?", answers: ["Android Programming Kit", "Application Package", "Android Platform Key", "App Processing Kernel"], correct: 1 },
    { question: "71. ¿Qué sistema operativo móvil se utilizaba principalmente en los dispositivos BlackBerry?", answers: ["Android", "iOS", "BlackBerry OS", "Windows Mobile"], correct: 2 },
    { question: "72. ¿Qué sistema de archivos utiliza Android?", answers: ["NTFS", "Ext4 / F2FS", "FAT32", "HFS+"], correct: 1 },
    { question: "73. ¿Qué es ART en Android?", answers: ["Android Runtime", "Advanced Rendering Technology", "Application Runtime Technology", "Android Resource Tracker"], correct: 0 },
    { question: "74. ¿Qué capa de abstracción permite a las aplicaciones comunicarse con el hardware en Android?", answers: ["Dalvik", "HAL (Hardware Abstraction Layer)", "JVM", "BIOS"], correct: 1 },
    { question: "75. ¿Qué es ''jailbreak'' en el contexto de los dispositivos iOS?", answers: ["Un tipo de malware", "Un proceso para eliminar las restricciones impuestas por Apple", "Una característica de seguridad", "Un método para hacer copia de seguridad"], correct: 1 },
    { question: "76. ¿Qué es ''rooting'' en dispositivos Android?", answers: ["Un proceso para obtener acceso privilegiado (root) al sistema", "Un método para instalar aplicaciones", "Un sistema de archivos", "Una característica de seguridad"], correct: 0 },
    { question: "77. ¿Qué sistema operativo móvil intentó Microsoft potenciar como alternativa a iOS y Android?", answers: ["Windows CE", "Windows Mobile", "Windows Phone", "Windows RT"], correct: 2 },
    { question: "78. ¿Qué sistema operativo móvil está basado en el núcleo de Linux pero no es Android?", answers: ["iOS", "Ubuntu Touch", "Windows Phone", "BlackBerry OS"], correct: 1 },
    { question: "79. ¿Qué es WebOS?", answers: ["Un navegador web para móviles", "Un sistema operativo móvil originalmente desarrollado por Palm", "Un tipo de aplicación web", "Un entorno de desarrollo para iOS"], correct: 1 },
    { question: "80. ¿Qué característica de seguridad aísla las aplicaciones entre sí en iOS?", answers: ["Firewall", "Antivirus", "Sandboxing", "Encriptación"], correct: 2 },
    
    // Preguntas mixtas y avanzadas
    { question: "81. ¿Qué es la virtualización de sistemas operativos?", answers: ["Ejecutar múltiples sistemas operativos en un solo hardware físico", "Emular hardware que no existe físicamente", "Crear copias de seguridad del sistema operativo", "Optimizar el rendimiento del sistema operativo"], correct: 0 },
    { question: "82. ¿Qué tipo de virtualización ejecuta el sistema operativo invitado directamente en el procesador?", answers: ["Emulación", "Virtualización completa", "Paravirtualización", "Virtualización asistida por hardware"], correct: 3 },
    { question: "83. ¿Qué es un hipervisor?", answers: ["Un tipo de malware", "Un software que permite crear y gestionar máquinas virtuales", "Un sistema operativo de alto rendimiento", "Un componente de hardware especial"], correct: 1 },
    { question: "84. ¿Qué es un contenedor en el contexto de los sistemas operativos?", answers: ["Un tipo de archivo comprimido", "Una unidad de almacenamiento virtual", "Un entorno ligero y portátil para ejecutar aplicaciones", "Un espacio reservado en el disco duro"], correct: 2 },
    { question: "85. ¿Qué software de contenedores se ha vuelto muy popular en los últimos años?", answers: ["VMware", "Docker", "VirtualBox", "Hyper-V"], correct: 1 },
    { question: "86. ¿Qué es UEFI en los sistemas modernos?", answers: ["Un tipo de puerto USB", "Un sucesor de la BIOS tradicional", "Un sistema de archivos", "Una tecnología de virtualización"], correct: 1 },
    { question: "87. ¿Qué es el arranque dual o dual boot?", answers: ["Un proceso que permite iniciar el ordenador con dos procesadores", "Un sistema que permite elegir entre dos sistemas operativos al iniciar", "Una tecnología que duplica la velocidad de arranque", "Un método de copia de seguridad del sistema"], correct: 1 },
    { question: "88. ¿Qué es un bootloader o gestor de arranque?", answers: ["Un virus que afecta al proceso de inicio", "Un programa que carga el sistema operativo al iniciar el ordenador", "Una herramienta para optimizar el rendimiento", "Un tipo de memoria de arranque rápido"], correct: 1 },
    { question: "89. ¿Qué es RAID en sistemas operativos?", answers: ["Una tecnología para mejorar el rendimiento o la redundancia de los discos", "Una herramienta para eliminar virus", "Un tipo de memoria", "Un sistema de archivos especial"], correct: 0 },
    { question: "90. ¿Qué significa POSIX?", answers: ["Portable Operating System Interface", "Personal Operating System Implementation X", "Programmable Open Source Interface for X platforms", "Primary OS Information Exchange"], correct: 0 },
    { question: "91. ¿Qué es una partición swap en Linux?", answers: ["Una partición para almacenar copias de seguridad", "Una partición que se utiliza como memoria virtual", "Una partición para intercambiar archivos entre sistemas operativos", "Una partición con archivos temporales"], correct: 1 },
    { question: "92. ¿Qué es el MBR en un disco duro?", answers: ["Master Boot Record", "Memory Backup Registry", "Master Backup Recovery", "Multiple Boot Routine"], correct: 0 },
    { question: "93. ¿Qué característica permite a los sistemas operativos modernos usar múltiples núcleos de procesador?", answers: ["Multitarea", "Multiprocesamiento", "Multiusuario", "Multisesión"], correct: 1 },
    { question: "94. ¿Qué sistema operativo es conocido por su uso en dispositivos embebidos y sistemas de tiempo real?", answers: ["Windows", "macOS", "QNX", "Ubuntu"], correct: 2 },
    { question: "95. ¿Qué es un sistema de archivos distribuido?", answers: ["Un sistema de archivos que separa archivos grandes en fragmentos", "Un sistema de archivos que permite acceder a archivos almacenados en múltiples computadoras", "Un sistema de archivos que distribuye copias de seguridad", "Un sistema de archivos que asigna diferentes prioridades a los archivos"], correct: 1 },
    { question: "96. ¿Qué tecnología permite que los sistemas operativos administren grandes cantidades de datos que no caben en memoria RAM?", answers: ["Caché de disco", "Memoria virtual", "RAID", "Cloud storage"], correct: 1 },
    { question: "97. ¿Qué sistema operativo es utilizado mayoritariamente en supercomputadoras?", answers: ["Windows", "macOS", "Linux", "Solaris"], correct: 2 },
    { question: "98. ¿Qué sistema operativo fue desarrollado específicamente para la Raspberry Pi?", answers: ["Windows IoT", "Raspbian/Raspberry Pi OS", "Android Things", "Ubuntu Core"], correct: 1 },
    { question: "99. ¿Qué es un sistema operativo en tiempo real crítico?", answers: ["Un sistema operativo que siempre muestra notificaciones críticas", "Un sistema operativo donde los fallos en los tiempos de respuesta pueden ser catastróficos", "Un sistema operativo diseñado para situaciones críticas de negocio", "Un sistema operativo diseñado para videojuegos"], correct: 1 },
    { question: "100. ¿Qué tipo de sistema operativo está diseñado específicamente para ejecutarse en la nube?", answers: ["Sistema operativo de escritorio", "Sistema operativo móvil", "Sistema operativo embebido", "Sistema operativo de nube (Cloud OS)"], correct: 3 }
];
