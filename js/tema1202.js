const tema1202 = [
    { question: "103. En el sistema operativo UNIX, las contraseñas de los usuarios se guardan encriptadas en el fichero:", answers: ["letc/passwd", "/etc/shadow", "letc/keys", "/etc/users"], correct: 1 },
    
    { question: "104. Indique cuál de los siguientes comandos Unix muestra un archivo de texto de manera interactiva, permitiendo navegar en él y realizar búsquedas:", answers: ["less", "joe", "sed", "cat"], correct: 0 },
    
    { question: "105. En un sistema operativo linux en cuanto a las instalaciones y desinstalaciones de software:", answers: ["Uno de los inconvenientes de estos sistemas operativos es que deberemos estar conectados a la red para poder instalar cualquier software ya que hacemos uso de los comandos apt, rpm, urpmi... que se conectan a diferentes repositorios para descargar los paquetes de instalación.", "Los gestores de paquetes para la instalación de software como apt, rpm, urpmi necesitan definir una serie de fuentes o repositorios desde donde descargar los paquetes de instalación, para ello, cada gestor de paquetes cuenta con comandos orientados a su definición y actualización.", "Los repositorios asociados a un gestor de paquetes dependen de este y de la versión del sistema operativo. Es por ello que para mantener las últimas versiones o actualizaciones del software se recomienda la instalación de la distribución del sistema operativo más reciente que haya en su momento.", "Los gestores de paquetes para la instalación de software como apt, rpm, urpmi solo permiten instalar paquetes. Para desínstalar software deberemos conocer los directorios donde están ubicados los archivos, suelen ser /bin y /sbin para borrarlos directamente."], correct: 1 },
    
    { question: "106. Señale la opción que sirve en UNIX para crear enlaces hard o duro:", answers: ["In -s", "In", "link -hard", "hardlink"], correct: 1 },
    
    { question: "107. ¿Cuál de las siguientes herramientas podría usarse en una red con sistemas UNIX si queremos acceder a recursos comunes, asegurando que la lista de usuarios y grupos esté disponible en todas las máquinas clientes?", answers: ["SRM", "UGMS", "RNUM", "NIS"], correct: 3 },
    
    { question: "108. TCP Wrappers es un sistema que permite controlar el acceso a:", answers: ["los servidores de una máquina UNIX. En concreto, permite filtrar conexiones no deseadas y permitir conexiones legítimas. Las reglas que se configuran son muy sencillas haciendo uso de un par de ficheros.", "los servidores de una máquina UNIX. En concreto, permite filtrar conexiones no deseadas y permitir conexiones legítimas a un nivel muy bajo de la capa OSI por lo que podemos prescindir del uso de cortafuegos.", "cada servicio que está corriendo en una máquina UNIX. Para ello es necesario tener instalado el GUla entorno gráfico que nos permite configurar cada una de las reglas.", "cada servicio que está corriendo en una máquina UNIX de manera remota. Es utilizado por los auditores de seguridad cuando se pretende interceptar paquetes TCP en una red. Se acompaña del uso de algún lenguaje de alto nivel como JAVA para su configuración."], correct: 0 },
    
    { question: "109. En el sistema operativo Linux, ¿cuál de las siguientes opciones busca la palabra \"libro\" dentro de ficheros?", answers: ["find -type f | xwygs grep \"libro\"", "find -type f | xaygs grep \"libro\"", "find -type f | xargs grep \"libro\"", "find -type f | xargp grep \"libro\""], correct: 2 },
    
    { question: "110. Para entornos Unix, indica cómo se asigna el sticky bit a un directorio:", answers: ["chmod u+s /directorio/fichero", "chmog g+s /directorio", "chmod 177 /directorio", "chmod +t /directorio"], correct: 3 },
    
    { question: "111. ¿Cuál de los siguientes NO es un gestor de ventanas de Linux?", answers: ["Metacity de GNOME.", "KWIN de KDE.", "GTK de CDE.", "Enlightenment de GNOME."], correct: 2 },
    
    { question: "112. Señale, entre los siguientes, cuál es un cliente WebDAV de línea de comandos para entornos Unix:", answers: ["cadaver", "audacity", "mahout", "CalDAV"], correct: 0 },
    
    { question: "113. En un sistema UNIX, ¿cuál es la diferencia entre los ficheros /etc/passwd y /etc/shadow?", answers: ["/etc/shadow es una copia exacta del fichero /etc/password pero sólo visible por root.", "/etc/password alberga las passwords de los usuarios y /etc/shadow alberga la historia de comandos realizadas por los mismos.", "/etc/passwd es legible por todos los usuarios, mientras que /etc/shadow es legible sólo por root.", "/etc/passwd alberga las passwords de los usuarios mientras que /etc/shadow alberga el nombre de los usuarios."], correct: 2 },
    
    { question: "114. De los siguientes comandos UNIX, indique el que permite mostrar el espacio libre disponible en el disco:", answers: ["df", "du", "ps", "wc"], correct: 0 },
    
    { question: "115. En UNIX, el atributo \"uid\" de un proceso:", answers: ["Indica el identificador del usuario que ha lanzado el proceso.", "Indica el grupo del usuario que ha lanzado el proceso.", "Indica el identificador del proceso.", "Indica la prioridad del proceso."], correct: 0 },
    
    { question: "116. La llamada POSIX que permite al sistema operativo crear un proceso hijo a partir de un proceso padre es:", answers: ["setpid", "fork", "trap", "exec"], correct: 1 },
    
    { question: "117. ¿Qué muestra el comando top en UNIX?", answers: ["Los ficheros abiertos.", "El escritorio.", "Los procesos.", "Los puertos TCP/IP."], correct: 2 },
    
    { question: "118. ¿Cuál de estas instrucciones NO vacía el contenido del fichero con nombre 2013 en Linux?", answers: ["true > 2013", "> 2013", "cat /dev/null > 2013", "| > 2013"], correct: 3 },
    
    { question: "119. Si queremos restringir el almacenamiento en disco en Linux a determinados usuarios o grupos, ¿cuál de los siguientes métodos podemos usar?", answers: ["Mediante cuotas de disco.", "Mediante el editor de directivas de grupo.", "No se puede restringir el almacenamiento a usuarios.", "No se puede restringir el almacenamiento por grupos."], correct: 0 }
      
];
