const practico1 = [
      
    { question: "01. ¿Cuál es la función principal del núcleo (kernel) de un sistema operativo?", answers: ["Gestionar la interfaz gráfica de usuario", "Controlar directamente el hardware y proporcionar servicios básicos", "Ejecutar únicamente aplicaciones de usuario", "Administrar exclusivamente la memoria RAM"], correct: 1 },
    
    { question: "02. En sistemas Windows, ¿qué archivo contiene la configuración del registro del sistema?", answers: ["config.sys", "autoexec.bat", "ntuser.dat", "system.ini"], correct: 2 },
    
    { question: "03. ¿Cuál de los siguientes NO es un elemento constitutivo básico de un sistema operativo?", answers: ["Gestor de procesos", "Gestor de memoria", "Compilador de código", "Sistema de archivos"], correct: 2 },
    
    { question: "04. En sistemas Unix/Linux, ¿qué comando permite cambiar los permisos de un archivo?", answers: ["chown", "chmod", "chgrp", "ls -l"], correct: 1 },
    
    { question: "05. ¿Qué tipo de planificación de procesos utiliza por defecto Windows 10?", answers: ["FIFO (First In, First Out)", "Round Robin", "Planificación por prioridades con algoritmo multinivel", "SJF (Shortest Job First)"], correct: 2 },
    
    { question: "06. En Linux, ¿cuál es el directorio raíz del sistema de archivos?", answers: ["/home", "/root", "/", "/usr"], correct: 2 },
    
    { question: "07. ¿Cuál es la principal diferencia entre un proceso y un hilo (thread)?", answers: ["Los hilos no pueden acceder a memoria compartida", "Los procesos son más rápidos que los hilos", "Los hilos comparten el espacio de memoria del proceso padre", "No existe diferencia técnica entre ambos"], correct: 2 },
    
    { question: "08. ¿Qué sistema operativo móvil está basado en el kernel de Linux?", answers: ["iOS", "Android", "Windows Phone", "BlackBerry OS"], correct: 1 },
    
    { question: "09. En Windows, ¿qué herramienta permite ver los procesos en ejecución?", answers: ["msconfig", "regedit", "Administrador de tareas", "cmd"], correct: 2 },
    
    { question: "10. ¿Cuál es la función del shell en sistemas Unix/Linux?", answers: ["Gestionar la memoria del sistema", "Proporcionar una interfaz de línea de comandos", "Controlar los dispositivos de hardware", "Administrar la red"], correct: 1 },
    
    { question: "11. ¿Qué significa que un sistema operativo sea multitarea?", answers: ["Puede ejecutar múltiples aplicaciones simultáneamente", "Solo puede ejecutar una aplicación a la vez", "Requiere múltiples procesadores", "Solo funciona en redes"], correct: 0 },
    
    { question: "12. En sistemas Windows, ¿cuál es la extensión típica de los archivos ejecutables?", answers: [".bat", ".exe", ".dll", ".sys"], correct: 1 },
    
    { question: "13. ¿Cuál de estos NO es un sistema de archivos típico de Linux?", answers: ["ext4", "XFS", "Btrfs", "NTFS"], correct: 3 },
    
    { question: "14. ¿Qué comando de Linux permite ver el contenido de un directorio?", answers: ["cat", "pwd", "ls", "cd"], correct: 2 },
    
    { question: "15. En sistemas móviles, ¿qué característica es específica de iOS comparado con Android?", answers: ["Uso de pantalla táctil", "Capacidad multitarea", "Sistema cerrado con App Store como única fuente oficial de aplicaciones", "Soporte para redes inalámbricas"], correct: 2 },
    
    { question: "16. ¿Qué es la memoria virtual en un sistema operativo?", answers: ["Memoria física adicional instalada en el equipo", "Técnica que permite usar espacio en disco como extensión de la RAM", "Memoria exclusiva para el sistema operativo", "Memoria que solo usan las aplicaciones gráficas"], correct: 1 },
    
    { question: "17. En Windows, ¿qué servicio se encarga de la resolución de nombres de dominio?", answers: ["DHCP Client", "DNS Client", "WINS Client", "NetBIOS"], correct: 1 },
    
    { question: "18. ¿Cuál es la principal ventaja de los sistemas operativos de código abierto como Linux?", answers: ["Son siempre más rápidos que los propietarios", "No requieren mantenimiento", "Permiten acceso y modificación del código fuente", "Solo funcionan en servidores"], correct: 2 },
    
    { question: "19. ¿Qué característica distingue principalmente a los sistemas operativos móviles de los de escritorio?", answers: ["No pueden conectarse a internet", "Están optimizados para dispositivos con limitaciones de batería y recursos", "No permiten instalar aplicaciones", "Solo pueden ejecutar una aplicación a la vez"], correct: 1 },
    
    { question: "20. En Unix/Linux, ¿qué representa el archivo /etc/passwd?", answers: ["Las contraseñas encriptadas de los usuarios", "La información básica de las cuentas de usuario del sistema", "Los permisos de archivos del sistema", "La configuración de red del sistema"], correct: 1 },
	
    { question: "01. Al revisar el equipo, observas que no emite pitidos al encenderse y la pantalla permanece en negro. ¿Qué componente podría estar fallando principalmente?", answers: ["Disco duro", "Fuente de alimentación", "Memoria RAM", "Placa base"], correct: 3 },
    
    { question: "02. ¿Cuál de los siguientes elementos NO forma parte de los componentes internos principales de un equipo microinformático?", answers: ["Placa base", "Fuente de alimentación", "Cable Ethernet", "Procesador"], correct: 2 },
    
    { question: "03. En un sistema de información, ¿qué elemento se encarga de procesar los datos para convertirlos en información útil?", answers: ["Hardware", "Software", "Red de comunicaciones", "Usuario"], correct: 1 },
    
    { question: "04. ¿Cuál es la unidad mínima de información en informática?", answers: ["Byte", "Bit", "Kilobyte", "Registro"], correct: 1 },
    
    { question: "05. ¿Qué arquitectura de ordenador se caracteriza por compartir memoria y buses de datos entre la CPU y la GPU?", answers: ["Harvard", "Von Neumann", "RISC", "ARM"], correct: 1 },
    
    { question: "06. ¿Cuál de las siguientes afirmaciones sobre la arquitectura Von Neumann es correcta?", answers: ["La memoria de instrucciones y datos está separada", "Utiliza múltiples buses de datos paralelos", "Los datos y las instrucciones comparten la misma memoria", "Solo es aplicable a ordenadores portátiles"], correct: 2 },
    
    { question: "07. El conjunto de hardware, software, datos, procedimientos y personal que interactúan para procesar la información conforma:", answers: ["Un programa informático", "Una base de datos", "Un sistema operativo", "Un sistema de información"], correct: 3 },
    
    { question: "08. ¿Qué componente se encarga de coordinar y controlar todas las operaciones del ordenador?", answers: ["La memoria RAM", "El disco duro", "La Unidad Central de Proceso (CPU)", "La tarjeta gráfica"], correct: 2 },
    
    { question: "09. ¿Cuál de los siguientes dispositivos es considerado de entrada y salida (E/S)?", answers: ["Teclado", "Monitor", "Impresora", "Pantalla táctil"], correct: 3 },
    
    { question: "10. En la arquitectura Von Neumann, ¿qué problema puede presentarse por compartir bus entre instrucciones y datos?", answers: ["Bloqueo del sistema operativo", "Cuello de botella", "Pérdida de energía", "Fragmentación de memoria"], correct: 1 },
    
    { question: "11. ¿Cuál de los siguientes dispositivos almacena información de manera permanente?", answers: ["Memoria RAM", "Disco duro", "Caché", "Procesador"], correct: 1 },
    
    { question: "12. ¿Qué componente se considera el 'cerebro' del ordenador?", answers: ["Disco duro", "Fuente de alimentación", "CPU", "BIOS"], correct: 2 },
    
    { question: "13. ¿Qué significa la sigla RAM?", answers: ["Random Access Memory", "Ready Access Module", "Read And Move", "Rewritable Access Memory"], correct: 0 },
    
    { question: "14. ¿Qué función principal cumple la fuente de alimentación en un ordenador?", answers: ["Procesar datos", "Convertir corriente alterna en continua", "Almacenar información", "Cargar el sistema operativo"], correct: 1 },
    
    { question: "15. ¿Qué componente almacena las instrucciones necesarias para arrancar el ordenador?", answers: ["Disco duro", "RAM", "BIOS/UEFI", "CPU"], correct: 2 },
    
    { question: "16. ¿Qué tipo de memoria es volátil?", answers: ["Disco duro", "RAM", "ROM", "SSD"], correct: 1 },
    
    { question: "17. ¿Qué tipo de puerto se utiliza habitualmente para conectar dispositivos de almacenamiento externo?", answers: ["VGA", "HDMI", "USB", "RJ45"], correct: 2 },
    
    { question: "18. ¿Cuál de estos componentes NO forma parte del sistema de almacenamiento secundario?", answers: ["SSD", "DVD", "RAM", "Disco duro"], correct: 2 },
    
    { question: "19. ¿Qué característica es típica del software de sistema?", answers: ["Permite navegar por internet", "Facilita tareas de diseño gráfico", "Administra los recursos del hardware", "Ejecuta hojas de cálculo"], correct: 2 },
    
    { question: "20. ¿Cuál de las siguientes funciones corresponde a un sistema operativo?", answers: ["Crear bases de datos", "Administrar la memoria del sistema", "Diseñar páginas web", "Conectar impresoras de red"], correct: 1 },
	
    { question: "01. ¿Cuál de los siguientes NO es un elemento constitutivo de un sistema operativo?", answers: ["Kernel", "Interfaz de usuario", "Compilador", "Controladores de dispositivo"], correct: 2 },
    
    { question: "02. En sistemas Windows, el equivalente al \"root\" de Unix/Linux es:", answers: ["Administrator", "System", "Superuser", "Root"], correct: 0 },
    
    { question: "03. ¿Qué comando se utiliza en Linux para listar archivos en un directorio?", answers: ["dir", "list", "ls", "show"], correct: 2 },
    
    { question: "04. ¿Cuál de estos NO es un sistema operativo para dispositivos móviles?", answers: ["iOS", "Android", "Windows Phone", "Ubuntu Touch"], correct: 3 },
    
    { question: "05. La arquitectura de Windows NT está basada en:", answers: ["Microkernel", "Monolito", "Híbrido", "Cliente-servidor"], correct: 3 },
    
    { question: "06. ¿Qué sistema de archivos es propio de Windows?", answers: ["ext4", "NTFS", "HFS+", "APFS"], correct: 1 },
    
    { question: "07. En Linux, ¿qué directorio contiene los archivos de configuración del sistema?", answers: ["/bin", "/etc", "/var", "/usr"], correct: 1 },
    
    { question: "08. ¿Qué comando se usa en Unix/Linux para cambiar permisos de archivos?", answers: ["chmod", "chown", "chattr", "chperm"], correct: 0 },
    
    { question: "09. ¿Cuál de estos es un gestor de arranque en Linux?", answers: ["BootCamp", "GRUB", "BIOS", "MBR"], correct: 1 },
    
    { question: "10. En Android, ¿qué componente es responsable de gestionar los permisos de las apps?", answers: ["Dalvik", "Binder", "Zygote", "Permission Manager"], correct: 3 },
    
    { question: "11. ¿Qué sistema operativo móvil utiliza el kernel XNU?", answers: ["Android", "iOS", "Windows Mobile", "Blackberry OS"], correct: 1 },
    
    { question: "12. ¿Cuál fue el primer sistema operativo de Microsoft con interfaz gráfica?", answers: ["Windows 1.0", "Windows 3.1", "Windows 95", "MS-DOS"], correct: 0 },
    
    { question: "13. ¿Qué comando en Windows muestra las conexiones de red activas?", answers: ["ipconfig", "netstat", "tracert", "ping"], correct: 1 },
    
    { question: "14. En Linux, ¿qué señal se envía para terminar un proceso?", answers: ["SIGTERM", "SIGKILL", "SIGSTOP", "SIGINT"], correct: 0 },
    
    { question: "15. ¿Qué componente del sistema operativo gestiona la memoria virtual?", answers: ["Scheduler", "Memory Manager", "I/O Manager", "File System"], correct: 1 },
    
    { question: "16. ¿Cuál de estos NO es una distribución Linux?", answers: ["Ubuntu", "Fedora", "FreeBSD", "Debian"], correct: 2 },
    
    { question: "17. ¿Qué tecnología permite ejecutar aplicaciones de Android en Windows 11?", answers: ["WSL", "Hyper-V", "Windows Subsystem for Android", "Wine"], correct: 2 },
    
    { question: "18. En Unix/Linux, ¿qué comando muestra el manual de otro comando?", answers: ["info", "help", "man", "doc"], correct: 2 },
    
    { question: "19. ¿Qué versión de Windows introdujo el Menú Inicio?", answers: ["Windows 3.1", "Windows 95", "Windows XP", "Windows 7"], correct: 1 },
    
    { question: "20. ¿Qué sistema de archivos es el predeterminado en macOS?", answers: ["NTFS", "FAT32", "APFS", "ext4"], correct: 2 },
    
    { question: "21. ¿Qué comando en Linux muestra el uso de disco?", answers: ["du", "df", "diskusage", "freespace"], correct: 1 },
    
    { question: "22. ¿Qué componente del kernel Linux gestiona los módulos cargables?", answers: ["systemd", "modprobe", "insmod", "lsmod"], correct: 3 },
    
    { question: "23. ¿Qué protocolo de red es nativo en Windows para compartir archivos?", answers: ["NFS", "SMB", "FTP", "HTTP"], correct: 1 },
    
    { question: "24. ¿Qué directorio en Linux contiene los dispositivos reconocidos?", answers: ["/dev", "/sys", "/proc", "/hw"], correct: 0 },
    
    { question: "25. ¿Qué sistema operativo móvil está basado en Linux?", answers: ["iOS", "Android", "Windows Phone", "Blackberry OS 10"], correct: 1 },
    
    { question: "26. ¿Qué comando en Windows verifica la integridad del sistema de archivos?", answers: ["chkdsk", "scandisk", "fsck", "diskpart"], correct: 0 },
    
    { question: "27. ¿Qué shell es predeterminado en la mayoría de distribuciones Linux?", answers: ["bash", "zsh", "csh", "ksh"], correct: 0 },
    
    { question: "28. ¿Qué tecnología de Windows permite ejecutar aplicaciones de Linux?", answers: ["Cygwin", "WSL", "MinGW", "Hyper-V"], correct: 1 },
    
    { question: "29. ¿Qué comando en Linux muestra procesos en ejecución?", answers: ["processes", "ps", "top", "listp"], correct: 1 },
    
    { question: "30. ¿Qué versión de Windows fue la primera en incluir el Store de aplicaciones?", answers: ["Windows 7", "Windows 8", "Windows 10", "Windows Vista"], correct: 1 },
    
    { question: "31. ¿Qué sistema operativo utiliza el formato de paquete .deb?", answers: ["Fedora", "Arch Linux", "Debian", "openSUSE"], correct: 2 },
    
    { question: "32. ¿Qué comando en Linux permite buscar archivos?", answers: ["search", "find", "locate", "whereis"], correct: 1 },
    
    { question: "33. ¿Qué componente de Android gestiona las notificaciones?", answers: ["Activity Manager", "Notification Manager", "Window Manager", "Content Provider"], correct: 1 },
    
    { question: "34. ¿Qué versión de Unix fue desarrollada por Berkeley?", answers: ["System V", "BSD", "Solaris", "AIX"], correct: 1 },
    
    { question: "35. ¿Qué comando en Windows instala características opcionales?", answers: ["addfeature", "dism", "optionalfeatures", "winconfig"], correct: 1 },
    
    { question: "36. ¿Qué sistema operativo móvil usa la plataforma HarmonyOS?", answers: ["Huawei", "Xiaomi", "Samsung", "Oppo"], correct: 0 },
    
    { question: "37. ¿Qué comando en Linux redirige la salida estándar a un archivo?", answers: [">", "|", "<", ">>"], correct: 0 },
    
    { question: "38. ¿Qué versión de Windows introdujo el escritorio virtual?", answers: ["Windows 7", "Windows 8", "Windows 10", "Windows XP"], correct: 2 },
    
    { question: "39. ¿Qué comando en Linux muestra variables de entorno?", answers: ["env", "set", "printenv", "variables"], correct: 0 },
    
    { question: "40. ¿Qué tecnología de virtualización es nativa en Windows 10/11?", answers: ["VirtualBox", "Hyper-V", "VMware", "QEMU"], correct: 1 }
];