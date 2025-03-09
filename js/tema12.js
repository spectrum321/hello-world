const tema12 = [
{ question: "01. ¿Qué comando utilizamos para listar los archivos de un directorio ordenado por la fecha de último acceso?", answers: ["ls -lag", "ls -lau", "ls -lac", "ls -lar"], correct: 1 },
                { question: "02. En Linux la señal SIGTERM:", answers: ["Mata un proceso incondicional e inmediatamente.", "Mata un proceso de forma controlada.", "Para un proceso y lo deja preparado para continuar.", "Para el proceso y desaparece."], correct: 1 },
                { question: "03. En UNIX V la orden tail –n 50 pp:", answers: ["Extrae las primeras 50 líneas del fichero pp y las envía a la consola.", "Busca las 50 primeras ocurrencias de la letra n en el fichero pp.", "Extrae las últimas 50 líneas del fichero pp y las envía a la salida estándar.", "Pagina el fichero pp de 50 en 50 líneas y lo envía a la salida estándar."], correct: 2 },
                { question: "04. ¿Qué afirmación es correcta en UNIX V?", answers: ["El directorio raíz es /", "La familia grep tiene los comandos grep, egrep y fgrep.", "vi es un editor de texto de pantalla completa.", "El operador > añade texto al final del archivo sin borrar su contenido."], correct: 3 },
                { question: "05. La tabla de descriptores de fichero en un sistema Unix System V es:", answers: ["Una estructura global del núcleo en la que se añade una entrada cada vez que un proceso abre o crea un fichero nuevo.", "Una estructura global del núcleo que contiene una copia en memoria de la lista de inodos que hay en disco.", "Una estructura local a cada proceso que identifica todos los ficheros abiertos por el proceso", "Es una estructura local a cada proceso que permite acelerar el acceso a los ficheros de dispositivo"], correct: 2 },
                { question: "06. Además del Shell estándar la versión de UNIX SVR4, ¿cuántos Shell más incluye?", answers: ["1", "2", "3", "4"], correct: 2 },
                { question: "07. Los Kernels de LINUX más recientes se publican en:", answers: ["kernel.org", "linux-fundation.org", "opensource.org", "gnu.org"], correct: 0 },
                { question: "08. En la Shell BASH ¿qué variable almacena el número máximo de eventos que se pueden guardar?", answers: ["HISTFILE", "HISTSIZE", "HISTCMD", "HISTTYPE"], correct: 1 },
                { question: "09. En LINUX, ¿cuál de los siguientes es un sistema de archivos especial que se genera en la memoria del sistema?", answers: ["/stat", "/var", "/sys", "/proc"], correct: 3 },
                { question: "10. Un administrador de Unix está preparando un sistema para su entrada en funcionamiento, pero por error, ha dejado el disco de más capacidad dev/sd1 asignado a los usuarios home, y el de menor capacidad dev/sd2 asignado a los datos. Para modificar la configuración antes de la entrada en funcionamiento del sistema, asignando el de mayor capacidad a los datos y el de menor a los usuarios, ¿Qué comando o comandos tiene que utilizar?", answers: ["umount /dev/sd1/home; umount /dev/sd2 /data; mount /dev/sd2/home; mount /dev/sd1/data", "mount -swap /home /data", "mount --change /dev/sd1 /dev/sd2", "swap -m /home /data; swap -d /dev/sd2 /dev/sd1"], correct: 0 },
				{ question: "11. Si ejecutamos en una consola de LINUX el comando uname -r y la salida es 2.4.27 podemos decir que la versión es:", answers: ["De pago.", "Estable.", "Original.", "De desarrollo."], correct: 1 },
                { question: "12. En LINUX, ¿qué comando usaremos para ver los sistemas de archivos que soporta nuestro Kernel?", answers: ["cat /proc/filesystems", "cat /proc/devices", "cat /sys/filesystems", "ls /proc/filesystems"], correct: 0 },
                { question: "13. Si tenemos en un fichero crontab la información: 08 6 7,10 * * /bin/opos/comprimir.sh. El fichero comprimir.sh se ejecutará:", answers: ["el 6 de Julio.", "el 7 de Agosto.", "el 6 de Octubre.", "todos los días de Julio y Octubre."], correct: 1 },
                { question: "14. En LINUX, ¿en qué archivo se determina quién puede usar el comando sudo?", answers: ["/etc/sudoers.", "/etc/awsudo.", "/etc/securetty.", "/etc/deluser.conf."], correct: 0 },
                { question: "15. En LINUX, dentro del directorio /var/log, ¿qué archivo registra los accesos con éxito al sistema?", answers: ["btmp", "boot", "dmesg", "wtmp"], correct: 3 },
                { question: "16. En una consola de LINUX, ¿qué símbolo pondríamos tras el comando para hacer que comience la ejecución e inmediatamente nos devuelva el control, sin esperar a que acabe?", answers: ["#", "&", "%", "$"], correct: 1 },
                { question: "17. En LINUX, ¿qué comando empleamos para editar la cuota de disco del usuario lolo?", answers: ["repquota -u lolo", "edquota -p lolo", "repquota -p lolo", "edquota -u lolo"], correct: 3 },
                { question: "18. En LINUX, dentro del archivo de configuración /etc/printcap, ¿qué especifica el campo rm?", answers: ["El directorio spool donde se encolan los trabajos.", "El archivo donde se registrarán los posibles errores.", "El filtro aplicado al archivo antes de enviarlo a la impresora.", "El nombre del sistema remoto de impresión."], correct: 3 },
                { question: "19. En LINUX, la orden netstat se emplea para comprobar cuál es el estado global de la red TCP/IP, la opción -a muestra:", answers: ["La versión de netstat.", "Información sobre todas las conexiones.", "Estadísticas de los dispositivos de red.", "La tabla de encaminamiento del núcleo."], correct: 1 },
                { question: "20. En UNIX/LINUX, la sentencia ps | grep $$ sirve para:", answers: ["Ver la Shell por defecto.", "Ver la Shell anterior.", "Ver la Shell actual.", "Ver las Shell aceptadas por el sistema."], correct: 2 },
				{ question: "21. En LINUX, tenemos la definición de variable LC_COLLATE=C. Si hacemos en línea de comando referencia al rango [A-C] ¿qué caracteres implica?", answers: ["a) AaBbCc", "b) aAbBcC", "c) ABC", "d) AbBcC"], correct: 1 },
				{ question: "22. En un sistema Unix, un proceso ‘zombie’ es aquel que:", answers: ["a) Está listo y esperando a entrar en ejecución.", "b) Ha finalizado su ejecución y se encuentra a la espera de que su proceso padre lea su información de finalización.", "c) Ha finalizado su ejecución con un error que le impide una finalización completa.", "d) Está a la espera de que finalice una operación de E/S para proseguir con su ejecución."], correct: 1 },
				{ question: "23. La variable ‘$?’ de Unix contiene:", answers: ["a) El identificador del proceso (PID) del último comando ejecutado en segundo plano o background.", "b) El identificador del proceso (PID) del último comando ejecutado.", "c) El código de retorno del último comando ejecutado.", "d) El número de argumentos introducidos en el último comando ejecutado."], correct: 2 },
				{ question: "24. En LINUX, de las siguientes órdenes ¿cuál de ellas no crea procesos hijos al ejecutarse?", answers: ["a) date", "b) cat", "c) pwd", "d) mkdir"], correct: 2 },
				{ question: "25. Después de una llamada a fork:", answers: ["a) El proceso hijo se crea, pero no se ejecuta.", "b) El proceso padre continúa su ejecución hasta finalizar y entonces comienza la del hijo.", "c) El proceso padre sigue su ejecución en paralelo con el hijo.", "d) El proceso padre finaliza su ejecución en ese instante y comienza la del hijo."], correct: 2 },
				{ question: "26. En línea de comandos de una consola LINUX, ¿qué realiza la función siguiente?: ls -l | awk ' $1 !~ /d/ { sum += $5 } END { print sum } '", answers: ["a) Suma y muestra el tamaño total ocupado por los archivos que no empiezan por la letra 'd' en el directorio actual.", "b) Suma y muestra el número total de enlaces de los archivos que empiezan por 'd' en el directorio actual.", "c) Suma y muestra el tamaño total ocupado por los archivos y directorios que no empiezan por la letra 'd'.", "d) Suma y muestra el tamaño total ocupado por los archivos del directorio actual."], correct: 3 },
				{ question: "27. En LINUX, con la variable LC_COLLATE=’es_ES.UTF-8’ tenemos la expresión regular b[cq]*e ,¿cuál de las siguientes cadenas concuerda con esta expresión?", answers: ["a) bCe", "b) bcce", "c) bccq", "d) bcqae"], correct: 1 },
				{ question: "28. Inicialmente, ¿en qué lenguaje se escribe el núcleo del Sistema Operativo Unix?", answers: ["a) Lenguaje C.", "b) Lenguaje Ensamblador.", "c) Fortran.", "d) Pascal."], correct: 1 },
				{ question: "29. En LINUX, ¿qué orden se utiliza para copiar archivos de un lugar a otro en el árbol de directorios?", answers: ["a) find", "b) cp", "c) ls", "d) more"], correct: 1 },
				{ question: "30. En la consola de Linux, para salir de la respuesta a un comando man pulsamos:", answers: ["a) x", "b) q", "c) ESC", "d) Control+x"], correct: 1 },
				{ question: "31. ¿Cuál de las siguientes es una distribución gratuita de GNU/Linux?", answers: ["a) IBM AIX", "b) SUSE LINUX ENTERPRISE", "c) UBUNTU", "d) REDHAT ENTERPRISE"], correct: 2 },
				{ question: "32. En el sistema UNIX/LINUX los archivos se disponen en directorios:", answers: ["a) Lineales.", "b) Jerárquicos.", "c) Funcionales.", "d) Verticales."], correct: 1 },
				{ question: "33. ¿Cómo se llama el proyecto encabezado por Matt Welsh, que implementa un conjunto completo de manuales para LINUX?", answers: ["a) linuxjournal.", "b) linuxman.", "c) LDP.", "d) linuxplanet."], correct: 2 },
				{ question: "34. De los siguientes, ¿cuál NO es un tipo de paquetes para LINUX?", answers: ["a) DEB", "b) RPM", "c) tar.gz", "d) APT"], correct: 3 },
				{ question: "35. En UNIX/LINUX, en el comando sudo ¿qué hace la opción -l?", answers: ["a) Impide que sudo solicite al usuario la contraseña.", "b) Muestra los comandos que puede ejecutar el usuario actual como root.", "c) Muestra una lista de los usuarios root y sus comandos en ejecución.", "d) Veta temporalmente el acceso a root al resto de usuarios."], correct: 1 },
				{ question: "36. En LINUX, ¿qué contiene el archivo /etc/resolv.conf?", answers: ["a) La lista de nombres de servidores de dominios.", "b) La lista de protocolos disponibles en el sistema.", "c) La lista de opciones para resolver problemas.", "d) La configuración de servicio de intercambio de nombres."], correct: 0 },				
				{ question: "37. Indique cuál de las siguientes afirmaciones es FALSA:", answers: ["En un sistema Unix, el usuario no se comunica directamente con el kernel, sino que lo hace a través del intérprete de comandos o Shell.", "En un sistema Unix, el tipo de intérprete de comandos o Shell que se ejecuta al iniciar sesión de un determinado usuario aparece configurado en la entrada de dicho usuario del archivo /etc/passwd.", "En el inicio de sesión de un sistema Unix se ejecutan unos ficheros u otros en función del intérprete de comandos utilizado por el usuario que inicia la sesión.", "Una sesión de Unix puede finalizarse con CTRL+D, exit o quit."], correct: 3 },
				{ question: "38. En UNIX/LINUX, ¿cuál de las siguientes palabras es una orden que usamos para conocer la dirección IP de una máquina a partir de su nombre lógico?", answers: ["ipconfig", "ssh", "telnet", "nslookup"], correct: 3 },
				{ question: "39. En UNIX/LINUX, ¿con qué orden podemos mostrar las conexiones de red activas en el sistema?", answers: ["route", "ipconfig", "netstat", "traceroute"], correct: 2 },
				{ question: "40. En LINUX, relacionado con la edición de línea de comandos, podemos asociar teclas a operaciones. Si un usuario quiere personalizar sus comandos de edición ¿qué archivo usará?", answers: [".profile", ".inputrc", "/etc/inputrc", "/etc/profile"], correct: 1 },
				{ question: "41. ¿El fichero UNIX de configuración del acceso a los diferentes dispositivos de almacenamiento masivo es?", answers: ["/proc/filesystem", "/etc/fstab", "/etc/profile", "Ninguna es correcta."], correct: 1 },
				{ question: "42. En LINUX, en línea de comandos ¿qué signo se emplea para distinguir una opción de un argumento?", answers: [":", ";", ",", "-"], correct: 3 },
				{ question: "43. En awk, la variable predefinida que indica el separador de campos es:", answers: ["NF", "OFS", "FS", "NR"], correct: 2 },
				{ question: "44. En LINUX, tenemos un fichero de texto Personal.txt cuyas líneas son registros. Los campos de estos registros están separados por ‘;’. ¿Con cuál de las siguientes sentencias seleccionamos los apellidos de todos los registros?", answers: ["cut -c ';' -f 2 Personal.txt", "cut -d -f 2 Personal.txt", "cut -d ';' -f 2 Personal.txt", "cut -f ';' -d 2 Personal.txt"], correct: 2 },
				{ question: "45. En LINUX, ¿qué orden se utiliza para crear directorios?", answers: ["rmdir", "mkdir", "cd", "ls"], correct: 1 },
				{ question: "46. En LINUX, dentro de los diferentes protocolos en la suite TCP/IP, ¿cuál de los siguientes está encuadrado dentro de los servicios de usuario?", answers: ["IP", "SMTP", "ARP", "IGP"], correct: 1 },
				{ question: "47. Unix SVR4 introduce un interfaz común para acceso al sistema. ¿Cómo se llama este interfaz?", answers: ["Total Access", "System Open Access", "System Access Free", "Service Access Facility"], correct: 3 },
				{ question: "48. ¿Qué valor de umask se necesita para que el permiso por defecto de los directorios permita únicamente leer, escribir y ejecutar al propietario y leer y ejecutar al grupo?", answers: ["750", "640", "027", "057"], correct: 2 },
				{ question: "49. Si se desea que en Unix V a todos los usuarios les aparezca la frase: 'hola' seguido del nombre del usuario deberá colocarse las instrucciones en el fichero:", answers: ["/.profile", "/etc/.profile", "/etc/profile", "/etc/initab"], correct: 2 },
				{ question: "50. ¿Cuál de las siguientes NO es una distribución de Linux?", answers: ["Debian", "Pingu", "Ubuntu", "Fedora"], correct: 1 },
		   	    { question: "51. En Linux, ¿cuál es el comando que se utiliza para visualizar los archivos de una carpeta?", answers: ["ls", "dir", "list", "dlist"], correct: 0 },
{ question: "52. Si en un sistema UNIX, se quiere que el archivo test.txt pueda ser leído, modificado y ejecutado por su propietario, leído y ejecutado por los usuarios que pertenecen al mismo grupo que el propietario y sólo leído por el resto, ¿qué instrucción de las siguientes se debe ejecutar?", answers: ["chmod 652 test.txt", "chmod 754 test.txt", "chmod 654 test.txt", "chmod 752 test.txt"], correct: 1 },
{ question: "53. ¿Cuál de estas afirmaciones es cierta respecto al concepto de sistemas de ficheros en el sistema UNIX?", answers: ["Cualquier fichero se trata como una secuencia de bytes sin estructura.", "Se contemplan dos tipos de estructura: para ficheros ordinarios y para directorios.", "Existe una interfaz especial para la lectura y la escritura sobre dispositivos.", "Se manejan bloques de control."], correct: 0 },
{ question: "54. En un fichero UNIX que tiene líneas consecutivas repetidas, ¿qué orden de UNIX visualiza el fichero mostrando una sola de las líneas repetidas?", answers: ["dd", "tr", "uniq", "rm"], correct: 2 },
{ question: "55. En un sistema UNIX los archivos de dispositivo en modo carácter referencian a dispositivos:", answers: ["De acceso aleatorio.", "De transferencia de datos en bloques.", "Que no utilizan buffers.", "a) y b) son correctas."], correct: 3 },
{ question: "56. En UNIX el primer proceso (proceso 0) que se ejecuta se llama:", answers: ["kernel", "init", "swapper", "shell"], correct: 2 },
{ question: "57. ¿Cuál de las siguientes afirmaciones es cierta sobre el gestor de volúmenes lógicos de Linux LVM 2.0 (Logical Volume Manager Versión 2)?", answers: ["Un volumen lógico (LV) puede pertenecer a distintos grupos de volúmenes lógicos (LVG).", "Un disco físico solo puede pertenecer a un volumen físico (PV).", "Un grupo de LVG se puede formar a partir de varios PV.", "El número de LV incluidos en un grupo de LVG debe ser siempre par."], correct: 2 },
{ question: "58. Señale cuál de las siguientes respuestas permitiría realizar un montaje de un CD-ROM en un sistema operativo Linux:", answers: ["setup -t device/cdrom/cab1", "install -t iso9660 /dev/hdb /mnt/cdrom", "mount -t iso9660 /dev/hdb /mnt/cdrom", "grep -t iso9660 /dev/hdb /mnt/cdrom"], correct: 2 },
{ question: "59. ¿Cuál de las siguientes NO es una distribución LINUX?", answers: ["Fedora", "Mandriva", "Solaris", "Ubuntu"], correct: 2 },
{ question: "60. El comando presente en sistemas operativos Unix que lista el buffer de mensajes generados durante el arranque del sistema se llama:", answers: ["uptime", "messages", "dmesg", "logmsg"], correct: 2 },
{ question: "61. Si queremos conocer las librerías vinculadas a un determinado programa en un sistema Linux usaremos el comando:", answers: ["ldd", "linkedl", "linklib", "lk"], correct: 0 },
{ question: "62. En Linux, el comando utilizado para obtener un análisis del estado del sistema, un detalle general de los procesos, E/S, uso de memoria, swap, estado del sistema y actividad de la CPU es:", answers: ["free", "iostat", "lsof", "vmstat"], correct: 3 },
    { question: "63. ¿Qué componente de UNIX/Linux se encarga de realizar las funciones de más bajo nivel?", answers: ["El Sistema de archivos.", "El Kernel.", "El Shell.", "Las Aplicaciones."], correct: 1 },
    { question: "64. ¿Qué componente de UNIX/Linux actúa como intérprete de comandos?", answers: ["El Shell.", "Las Utilidades.", "El Kernel.", "Las Aplicaciones."], correct: 0 },
    { question: "65. En UNIX/Linux, ¿qué archivo guarda la configuración de las variables de entorno de todos los usuarios?", answers: ["/proc/.profile", "/home/.profile", "/proc/profile", "/etc/profile"], correct: 3 },
    { question: "66. ¿En qué archivo almacena UNIX/Linux las contraseñas de los usuarios?", answers: ["/$HOME/passwd", " /$HOME/shadow", "/etc/shadow", "/etc/passwd"], correct: 2 },
    { question: "67. ¿En UNIX/Linux podemos ejecutar comandos en un tiempo especificado, mediante?", answers: ["at", "atq", "atr", "batch"], correct: 0 },
    { question: "68. ¿Qué directorio en UNIX/Linux contiene los archivos de configuración del sistema?", answers: ["/opt", "/etc", "/usr", "/conf"], correct: 1 },
    { question: "69. ¿Cuál de las siguientes órdenes para configurar la red en Linux es la correcta?", answers: ["ifconfig eth1 192.168.1.11 netmask 255.255.255.0 gateway 192.168.1.1", "ifconfig eth1:1 192.168.1.11 netmask 255.255.255.0 gateway 192.168.1.1 broadcast 192.168.1.255", "ifconfig eth1:1 192.168.1.11 netmask 255.255.255.0 broadcast 192.168.1.255", "ifconfig eth1 192.168.1.11 netmask 255.255.255.0 gateway 192.168.1.1 broadcast 192.168.1.255"], correct: 2 },
    { question: "70. En Linux, ¿en qué fichero se especifica cuáles son los servidores DNS que utiliza el sistema?", answers: ["/etc/resolv.conf", "/etc/dns.conf", "/etc/hosts.conf", "/etc/hostdns.conf"], correct: 0 },
    { question: "71. En Linux, ¿en qué fichero se guardan direcciones IP y los nombres que les corresponden, para poder acceder a estas mediante los nombres?", answers: ["/etc/host.conf", "/etc/hostname", "/etc/resolv.conf", "/etc/hosts"], correct: 3 },
{ question: "72. ¿En qué variable guarda UNIX/Linux el número total de argumentos o parámetros recibidos por un script?", answers: ["$0", "$#", "$*", "$@"], correct: 1 },
{ question: "73. En Linux si ejecutamos la orden: ls [!ae]* ¿Cuál sería el resultado?", answers: ["Mostraría los nombres de archivos y carpetas que no empiecen ni por a ni por e.", "Mostraría los nombres de archivos y carpetas que no empiecen por ae.", "Mostraría los nombres de archivos y carpetas que empiecen por a o por e.", "Mostraría los nombres de archivos y carpetas que empiecen por ae."], correct: 0 },
{ question: "74. En Unix/Linux si ejecutamos: sed '3d' películas.txt, ¿qué resultado obtenemos?", answers: ["Muestra en pantalla las líneas del fichero películas.txt que contengan la cadena 3d.", "Muestra en pantalla las líneas del fichero películas.txt que no contengan la cadena 3d.", "Muestra en pantalla el fichero películas.txt completo menos la tercera línea.", "Muestra en pantalla sólo la tercera línea del fichero películas.txt."], correct: 2 },
{ question: "75. Si en UNIX/Linux, tenemos la siguiente línea en el fichero /etc/crontab: * 6 4 3 5 borrar.sh, indica en qué día de la semana se ejecutaría borrar.sh:", answers: ["Martes.", "Jueves.", "Viernes.", "Sábado."], correct: 2 },
{ question: "76. ¿En UNIX/Linux, si lanzamos el comando chmod 4777 sobre un fichero, que permisos obtendríamos?", answers: ["-rwxrwxrws", "-rwxrwsrwx", "-rwxrwxrwt", "-rwsrwxrwx"], correct: 3 },
{ question: "77. ¿Dónde almacena UNIX la información de los dispositivos de E/S?", answers: ["/Temp", "/dev", "/bin", "/etc"], correct: 1 },
{ question: "78. ¿Qué comando(s) se ve(n) afectado(s) por la presencia de los archivos /etc/at.allow y /etc/at.deny en UNIX estándar?", answers: ["at", "batch", "at y batch", "at, batch y crontab"], correct: 2 },
{ question: "79. ¿Cuál de las siguientes afirmaciones es falsa?", answers: ["Linux nace como arquitectura monolítica.", "En la actualidad, Linux tiene una estructura de micronúcleo pura.", "Actualmente se pueden añadir dinámicamente módulos de Linux sin necesidad de recompilar el núcleo.", "Los sistemas operativos con estructuras monolíticas se ejecutan en un único espacio de direcciones."], correct: 1 },
{ question: "80. Señale cuál es una característica de SAMBA:", answers: ["Es el sistema de archivos de Windows XP.", "Se ejecuta en plataformas Windows para acceder a servicios de ficheros y de impresión de sistemas Linux o Unix.", "Se ejecuta en plataformas Unix o Linux para compartir servicios de ficheros y de impresión con sistemas Windows.", "Ser un sistema de archivos de Linux."], correct: 2 },
{ question: "81. Se puede definir Swap en un S.O. como un espacio de intercambio entre la memoria principal y una memoria virtual, que puede estar en disco. En un servidor Linux, ¿qué comando nos da información acerca de la memoria swap asignada, disponible y ocupada?", answers: ["free", "who -b", "kill –swap", "ls –l"], correct: 0 },
{ question: "82. ¿Cuál de los siguientes comandos Unix impide que el archivo de nombre 'miarchivo' sea modificado y ejecutado por el grupo al que pertenece dicho archivo?", answers: ["chmod 766 miarchivo", "chmod a+xw miarchivo", "chmod 644 miarchivo", "chmod u=rwx go=wx miarchivo"], correct: 2 },
{ question: "83. En Linux, guardamos en un fichero llamado log.txt todas las incidencias de una máquina con la siguiente estructura fecha#descIncidencia, ¿qué comando deberíamos usar para contar el número de filas que tienen la palabra 'error'?", answers: ["grep error log.txt | wc –l", "grep wc –l |error log.txt", "grep error log.txt | ls -l |cut -r'#' -f2", "grep cut -r'#' -f2|ls -l | error log.txt"], correct: 0 },
{ question: "84. El comando en Linux que muestra los usuarios conectados al sistema y el tiempo de conexión es:", answers: ["wall", "wc", "whereis", "who"], correct: 3 },
{ question: "85. En Linux si ejecutamos el comando 'chmod 760 mifichero' y posteriormente listamos con 'Is' obtendremos en la columna de permisos:", answers: ["drwxrw----", "d----- xrwx", "------xrwx", "drwxr-----"], correct: 0 },
{ question: "86. En Linux, para acceder a la referencia específica del capítulo 2 del manual del comando cat, hay que ejecutar:", answers: ["cat 2 man", "man cat 2", "man cat", "man 2 cat"], correct: 3 },
{ question: "87. Los comodines proporcionados por el Shell de Linux son:", answers: ["¿, * y []", "*, % y ?", "*, ? y []", "Ninguna de las anteriores"], correct: 2 },
{ question: "88. El comando 'tail' de UNIX, ¿qué función realiza?", answers: ["Muestra las n últimas líneas de un fichero (por defecto 10)", "Muestra todo el contenido del fichero", "Muestra las n primeras líneas de un fichero (por defecto 10)", "Muestra todo el contenido del fichero paginado"], correct: 0 },
{ question: "89. Usted suele utilizar el comando chmod para...", answers: ["Bloquear un archivo en Windows.", "Cambiar los permisos de un archivo en Linux - Unix", "Crear un directorio modificable en Unix.", "Modificar el estado en que se encuentra un proceso en Windows."], correct: 1 },
{ question: "90. Para facilitarle las cosas al usuario, le piden que investigue escritorios de código abierto para Linux. De los siguientes, uno no lo es, ¿cuál?", answers: ["GNOME", "KNOPPIX", "KDE", "Xfce"], correct: 1 },
{ question: "91. En un sistema operativo Linux, ¿cuál es el directorio destinado para almacenar los archivos de configuración del sistema?", answers: ["/etc", "/sbin", "/bin", "/conf"], correct: 0 },
{ question: "92. Señala el resultado más preciso de la ejecución del comando UNIX: ls -la", answers: ["Lista todos los ficheros del directorio actual.", "Lista todos los ficheros del directorio actual y los directorios que cuelgan del mismo.", "Lista todos los ficheros del directorio actual, incluso los que están ocultos, y los directorios que cuelgan del mismo.", "Lista todos los ficheros del directorio actual, incluso los que están ocultos, y los directorios que cuelgan del mismo. Y además se muestran los permisos de los ficheros y directorios listados."], correct: 3 },
{ question: "93. ¿Qué permisos se están asignando al grupo para el fichero archivo.txt con el siguiente comando UNIX? chmod -774 archivo.txt", answers: ["Lectura.", "Lectura y escritura.", "Lectura y ejecución.", "Lectura, escritura y ejecución."], correct: 3 },
{ question: "94. La herramienta de sistemas Unix que se utiliza para documentar y aprender sobre comandos, archivos, llamadas de sistema, etc se denomina:", answers: ["chmod", "man", "echo", "help"], correct: 1 },
{ question: "95. En el sistema operativo Unix la expresión 'daemon' se refiere a un proceso del sistema que:", answers: ["Siempre se ejecuta en segundo plano (background).", "Está siempre ejecutándose.", "Se ejecuta durante un periodo corto de tiempo.", "Es un proceso que no tiene padre."], correct: 0 },
{ question: "96. ¿Qué resultado devolverá el comando 'pwd' en un sistema UNIX?", answers: ["Una lista de los ficheros ubicados en el directorio en el que estemos trabajando.", "Una lista de los procesos existentes.", "La ruta del directorio en el que estamos trabajando.", "Una lista de los trabajos en espera en la cola de impresión."], correct: 2 },
{ question: "97. ¿Cuál de las siguientes NO es una distribución del sistema operativo Linux?", answers: ["Red Hat.", "Debian.", "Lollipop.", "Suse."], correct: 2 },
{ question: "98. ¿Cuál es el significado del comando sort de UNIX?", answers: ["Genera una secuencia de números.", "Muestra el estado de uno o varios procesos.", "Muestra usuarios autenticados en el sistema.", "Permite ordenar líneas de archivos."], correct: 3 },
{ question: "99. En relación con el gestor de arranque en sistemas Linux, señale la respuesta correcta:", answers: ["LILO es un gestor de arranque muy básico y no permite realizar control de errores.", "GRUB es anterior a LILO y es por ello que ya no se preinstala en nuevas distribuciones de GNU/Linux.", "Aunque sería la solución ideal, tanto LILO como GRUB no pueden instalarse en el Master Boot Record (MBR).", "GRUB 2 ha reemplazado a lo que se conocía hasta entonces como GRUB, pasando ésta a denominarse GRUB Legacy."], correct: 3 },
{ question: "100. Dado un sistema de ficheros de tipo UNIX, ¿cuál de las siguientes opciones NO forma parte de la lista de elementos de información almacenados en cada inodo (inode)?", answers: ["Propietario.", "Nombre del fichero.", "Tipo de archivo.", "Permisos de acceso."], correct: 1 },
{ question: "101. En UNIX, si utilizo el comando 'chmod 754' para modificar los permisos a un fichero, ¿qué permisos le estaré asignando?", answers: ["Acceso de lectura y ejecución al dueño, acceso total al grupo y acceso de lectura al resto de usuarios.", "Acceso total al dueño del fichero, acceso de lectura y ejecución al grupo y acceso de lectura al resto de usuarios.", "Acceso total al dueño del fichero, acceso de lectura al grupo y acceso de lectura y ejecución al resto de usuarios.", "Acceso de lectura al dueño, acceso de lectura al grupo y total al resto de usuarios."], correct: 1 },
{ question: "102. En el editor de texto 'vi' de Unix, el comando para salir sin guardar el fichero que se está editando es:", answers: [":wq", ":exit", ":q!", ":w"], correct: 2 }
      
];
