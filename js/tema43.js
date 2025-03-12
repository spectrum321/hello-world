const tema43 = [
       
    
    { question: "01. ¿Cuál de las siguientes opciones no es uno de los campos que configuran la trama empleada en CSMA/CD?", answers: ["Preámbulo.", "Delimitador de inicio.", "Relleno.", "Tiempo de vida."], correct: 3 },
    
    { question: "02. Una pequeña empresa posee una dirección de red clase C completa y necesita crear seis subredes utilizables, cada una de las cuales debe poder albergar por lo menos 22 hosts. ¿Cuál de las siguientes alternativas es la máscara de subred adecuada?", answers: ["255.255.255.0", "255.255.255.192", "255.255.255.224", "255.255.255.240"], correct: 2 },
    
    { question: "03. Cuando un administrador de red aplica la máscara de subred 255.255.255.248 a una dirección Clase A, ¿cuántas direcciones IP hay disponibles para ser asignadas a los dispositivos para una subred cualquiera?", answers: ["16", "8", "7", "6"], correct: 3 },
    
    { question: "04. Dentro de la topología de las redes de área local, aquella que se caracteriza por existir en ella un punto central, al cual se conectan todos los equipos, se denomina:", answers: ["Topología en Bus.", "Topología en Anillo.", "Topología en Círculo.", "Topología en Estrella."], correct: 3 },
    
    { question: "05. En una red de topología en anillo, si hay una rotura de un enlace entre dos dispositivos...", answers: ["La red funcionaria sin problema.", "La red encontraría otro camino para llevar los datos a todos los dispositivos.", "La red se reconfigura.", "La red no funcionaría al estar roto el anillo."], correct: 3 },
    
    { question: "06. ¿Cuál de estas topologías de red de área local (LAN), tiene la característica de que existe un enlace punto a punto directo entre los Equipos Terminal de Datos (DTE) vecinos que operan en un solo sentido?", answers: ["Topología de concentrador o árbol.", "Topología de estrella.", "Topología de bus.", "Topología de anillo."], correct: 3 },
    
    { question: "07. En las redes de área local (LAN). ¿Cuál de estos métodos de control de acceso al medio solo se usa con redes de bus?", answers: ["Testigo de control o pase de testigo.", "CSMA/CD.", "Anillo ranurado o Polling.", "Inserción de registro."], correct: 1 },
    
    { question: "08. En las redes de área local (LAN). ¿Cuál de estos protocolos de normalizaciones internacionales IEEE802.x se refiere al bus con testigo?", answers: ["IEEE 802.3", "IEEE 802.4", "IEEE 802.5", "IEEE 802.11"], correct: 1 },
    
    { question: "09. En las redes de área local (LAN) Inalámbricas, ¿cómo se denomina al conjunto de computadores portátiles que quieren comunicarse entre sí para formar una LAN autónoma?", answers: ["LAN inalámbrica de infraestructura.", "LAN inalámbrica ad hoc.", "LAN inalámbrica de acceso portátil.", "LAN inalámbrica ad hoc de modulación y codificación."], correct: 1 },
    
    { question: "10. ¿En que banda funciona el WiFi 802.11a?", answers: ["El 802.11a funciona en varias bandas.", "UHF", "5GHz", "2,4GHz"], correct: 2 },
    
    { question: "11. ¿Qué información muestra el comando ipconfig?", answers: ["Solamente dirección IP, máscara de subred y puerta de enlace predeterminada.", "Solamente dirección IP, máscara de subred, puerta de enlace predeterminada y servidor DHCP.", "Solamente dirección IP, máscara de subred, puerta de enlace predeterminada, servidor DHCP y servidores DNS.", "Solamente dirección IP y máscara de subred."], correct: 0 },
    
    { question: "12. En el estándar Ethernet (IEEE 802.3) para redes la velocidad máxima de transmisión:", answers: ["Es de100 Mbps", "Entre otros parámetros, depende del medio utilizado", "Es de 10 Mbps", "Ninguna de las anteriores respuestas es correcta"], correct: 1 },
    
    { question: "13. Las direcciones MAC en Ethernet:", answers: ["Tenemos que configurarlas en todos los dispositivos", "Ya vienen asignadas de fábrica en el hardware", "Actualmente conviene configurarlas en IPv6", "Dependen del rango de nuestro proveedor de Internet"], correct: 1 },
    
    { question: "14. La mascara correcta para un protocolo IP en una red de clase B es:", answers: ["255.255.255.255", "255.0.0.0", "255.255.255.0", "255.255.0.0"], correct: 3 },
    
    { question: "15. ¿Cual de estas direcciones es de Internet?", answers: ["172.15.1.246", "189.312.165.3", "192.168.189.1", "10.50.252.15"], correct: 0 },
    
    { question: "16. ¿Qué comandos utilizamos para renovar nuestra dirección IP (estamos utilizando DHCP)?", answers: ["ICONFIG /RELEASE seguido de IPCONFIG /DHCP.", "IPCONFIG /DHCP", "IPCONFIG /FREE seguido de IPCONFIG /DHCP.", "IPCONFIG /RENEW."], correct: 3 },
    
    { question: "17. El comando NET STOP \"nombre\"", answers: ["Detiene el servicio \"nombre\".", "Detiene el servicio \"nombre\" si no hay usuarios conectados.", "Detiene la red \"nombre\" en cualquier caso.", "Detiene la red \"nombre\" si no hay usuarios conectados."], correct: 0 },
    
    { question: "18. ¿Cuál de las siguientes es la \"dirección de difusión limitada\" en redes IPv4?", answers: ["224.0.0.255", "127.0.0.0", "255.255.255.255", "Ninguna de las anteriores."], correct: 2 },
    
    { question: "19. ¿Qué tipo de Wifi es más rápido?", answers: ["802.11ac", "802.11g", "802.11n", "802.11a"], correct: 0 },
    
    { question: "20. ¿En qué banda funciona el WiFi 802.11n?", answers: ["5Ghz", "UHF", "El 802.11n funciona en varias bandas", "2,4GHz"], correct: 2 },
    
    { question: "21. ¿En Windows cuál es el comando que muestra la ruta, a través de la red, que sigue una conexión IP?", answers: ["tracert", "list ip route.", "route print", "show route."], correct: 0 },
    
    { question: "22. El estándar 802.12 se ocupa de:", answers: ["Redes inalámbricas.", "LAN de acceso de prioridad de demanda.", "Implementación de la norma CSMA/CD", "Token Ring."], correct: 1 },
    
    { question: "23. Disponemos de una red de ordenadores en la que, si falla uno de ellos, todos los demás pueden seguir recibiendo la información a través de cualquier otro ordenador. ¿A qué tipo de red nos estamos refiriendo?", answers: ["Anillo.", "Estrella.", "Malla.", "Árbol."], correct: 2 },
    
    { question: "24. ¿Qué significa CSMA/CD?", answers: ["Acceso múltiple por servicio de portadora y múltiples colisiones.", "Acceso múltiple con detección de portadora y detección de colisiones.", "Acceso único con múltiples colisiones y detección de portadora.", "Acceso único de múltiples portadoras y detección de colisiones."], correct: 1 },
    
    { question: "25. ¿Cuál es el sistema más seguro para proteger las redes inalámbricas Wi-Fi?", answers: ["SWAP", "WAP", "WPA2", "WEP"], correct: 2 },
    
    { question: "26. El conjunto de normas o estándares elaborado por el Instituto de Ingenieros Eléctricos y Electrónicos bajo el Grupo de Trabajo 802, referidos a las redes inalámbricas Wi-Fi, se denomina…", answers: ["802.1", "802.3", "802.11", "No existe el epígrafe IEEE 802"], correct: 2 },
    
    { question: "27. Las Redes Inalámbricas de Área Personal (WPAN) utilizan…", answers: ["Un protocolo de comunicaciones, denominado «Bluetooth», diseñado especialmente para dispositivos de bajo consumo y con una cobertura baja.", "La infraestructura de comunicaciones OpenBTS.", "El acceso múltiple por división de código de banda ancha (WCDMA).", "El servicio general de paquetes vía radio (GPRS)."], correct: 0 },
    
    { question: "28. Un usuario abre una incidencia indicando que no tiene conexión a Internet. Su PC presenta la siguiente configuración de red: Dirección IP=192.168.1.155; Máscara de red=255.255.255.128; Puerta de enlace=192.168.1.1. DNS: 194.30.0.1 ¿Cuál de las siguientes respuestas es más probable que sea la causa del problema?", answers: ["El PC tiene configurada una IP privada.", "No existen mascaras de red 255.255.255.128.", "El PC tiene configurado una puerta de enlace incorrecta.", "El servidor DNS tiene configurada una IP Pública."], correct: 2 },
    
    { question: "29. Cual de los siguientes protocolos utilizarías para administrar los dispositivos de tu red:", answers: ["SMTP", "FTP", "DNS", "CMIP"], correct: 3 },
    
    { question: "30. ¿Cuál de las siguientes secuencias de estados se corresponde con la definida para el protocolo de Spanning Tree (lEEE 802.1d)?", answers: ["Bloqueo-Escucha-Aprendizaje-Envío.", "Escucha-Aprendizaje-Envío-Reseteo.", "Aprendizaje-Reescritura-Enrutado-Envío.", "Escucha-Aprendizaje-Enrutado-Envío."], correct: 0 },
    
    { question: "31. ¿Cuál es la tecnología empleada en los smartphones o tablets para realizar Comunicaciones sin contacto entre dos dispositivos sin necesidad de emparejamiento entre ellos?", answers: ["NFC.", "Bluetooth.", "Wifi.", "Ninguna de las anteriores, ya que para realizar comunicaciones entre dos dispositivos es requisito indispensable al menos realizar emparejamiento entre ambos."], correct: 0 },
    
    { question: "32. Se va a abrir un nuevo Centro de Salud y el responsable de Informática de la Gerencia ha reservado el siguiente direccionamiento para el centro: 10.0.10.0/255.255.255.0 ¿Cuál es el número máximo de equipos que podremos conectar en red usando dicho direccionamiento?", answers: ["255", "1", "254", "126"], correct: 2 },
    
    { question: "33. En el hospital ha surgido un nuevo proyecto para dotar de cobertura WiFi las nuevas zonas de hospitalización. De las siguientes alternativas, ¿qué tecnología WiFi usaría para ofrecer a los usuarios la velocidad de acceso más alta?", answers: ["802.11g", "802.11n", "802.11b", "802.11ac"], correct: 3 },
    
    { question: "34. ¿Cuál de los siguientes protocolos es un estándar IEEE para el control de acceso a la red?", answers: ["802.1x", "802.11n", "802.1q", "802.1s"], correct: 0 },
    
    { question: "35. Señale qué número de puerto debería usarse si se quiere configurar un servicio para la autenticación de redes Kerberos:", answers: ["88", "42", "74", "105"], correct: 0 },
    
    { question: "36. Indique el número de puerto que debería usarse sí se quiere configurar un servicio para usar el protocolo de configuración dinámica de host DHCP para IPv6:", answers: ["58", "169", "389", "547"], correct: 3 },
    
    // { question: "37. ¿Cuál es la dirección de red de una dirección IP: 192.168.30.200 cuya máscara es 255.255.255.128?", answers: ["192.168.30.0", "192.168.30.128", "192.168.30.255", "192.168.30.200"], correct: 1 },
    
    { question: "38. El comando ping es el acrónimo de:", answers: ["Packet Internet Group.", "Packet Internet Gangway.", "Packet Internet Gate.", "Packet Internet Groper."], correct: 3 },
    
    { question: "39. Señale qué norma del IEEE normaliza la tecnología Power over Ethernet Plus (PoE +):", answers: ["IEEE 802.3ab", "IEEE 802.3at", "IEEE 802.3ap", "No es un estándar del IEEE sino que es una categoría de EIA/TIA 568b."], correct: 1 },
    
    { question: "40. El estándar conocido como WRAN (Wireless Regional Area Network) pertenece al grupo de trabajo del IEEE:", answers: ["802.19", "802.20", "802.21", "802.22"], correct: 3 },
    
    // { question: "41. Señale cuáles son las direcciones IP de red y de broadcast para la siguiente subred 132.27.43.25/27:", answers: ["red: 132.27.43.31/27 y broadcast: 132.27.43.0", "red: 132.27.43.20/27 y broadcast: 132.27.43.1", "red: 132.27.43.0/27 y broadcast: 132.27.43.1", "red: 132.27.43.0/27 y broadcast: 132.27.43.31"], correct: 3 },
    
    { question: "42. Según RFC 2460, señale de las siguientes cabeceras IPv6 cuál es una cabecera de extensión:", answers: ["Cabecera Siguiente.", "Fragmento.", "Límite de Saltos.", "Longitud de la Carga Útil."], correct: 1 },
    
    { question: "43. Señale los tipos de tráfico IPv6 que hay:", answers: ["Unicast, Multicast y Broadcast.", "Somecast, Multicast y Broadcast.", "Unicast, Multicast y Anycast.", "Unicast, Megacast y Anycast."], correct: 2 },
    
    { question: "44. ¿Cuál es el tipo de la dirección IPv6 ::1/128?", answers: ["Loopback.", "Indefinida (Unspecified).", "Multicast.", "No es válida."], correct: 0 },
    
   // { question: "45. ¿Cuál es la dirección de broadcast de la subred 172.17.11.32/27?", answers: ["172.17.11.255", "172.17.11.63", "172.17.11.47", "172.17.255.255"], correct: 1 },
   { question: "45. En el ámbito de las redes inalámbricas, la variante IEEE 802.11ac:", answers: ["Opera dentro del rango de los 6 GHz.", "Opera dentro del rango de los 2.4 GHz.", "Opera dentro del rango de los 5 GHz.", "Opera dentro del rango de los 11 GHz."], correct: 0 },
   
    { question: "46. En el ámbito de las redes inalámbricas, la variante IEEE 802.11a:", answers: ["Opera dentro del rango de los 5 GHz.", "Es compatible con el estándar 802.11b.", "Es compatible con el estándar 802.11g.", "Incorpora QoS (Calidad de Servicio)."], correct: 0 },
    
    { question: "47. El estándar IEEE 802.11e sobre redes inalámbricas se corresponde con especificaciones …", answers: ["para la coexistencia con sistemas de Radar o Satélite.", "de seguridad.", "de roaming.", "sobre calidad de servicio QoS."], correct: 3 },
    
    { question: "48. ¿Cuál de los siguientes NO es un protocolo relacionado con las redes inalámbricas WLAN?", answers: ["DECT.", "802.11b.", "802.11g.", "802.11n."], correct: 0 },
    
    { question: "49. Señalar en qué banda de frecuencias el estándar 802.11ad alcanza sus velocidades máximas:", answers: ["60 GHz.", "6 GHz.", "600 MHz.", "60 MHz."], correct: 0 },
    
    { question: "50. ¿Qué es WirelessMAN-Advanced?", answers: ["La evolución de la norma 802.16.", "Bluetooth versión 5.", "El nuevo grupo de trabajo 802.13.", "LTE (Long-Term Evolution) para redes MAN."], correct: 0 },
    
     { question: "51. ¿Qué estándar del IEEE opera con canales de 80 MHz de ancho de banda por cliente?", answers: ["802.11n", "802.11g", "802.11ac", "802.11ad"], correct: 2 },
    
    { question: "52. El estándar del IEEE que permite a la tecnología PLC llegar a velocidades de 500 Mbps (denominado Broadband over Power Line o BPL) es:", answers: ["IEC 61850.", "IEEE 1901.", "IEEE 1613.", "IEEE 1284."], correct: 1 },
    
    { question: "53. ¿Cuál es el estándar que define el cifrado y la autenticación de datos en redes inalámbricas?", answers: ["802.11c", "802.11s", "802.11i", "802.11ad"], correct: 2 },
    
    { question: "54. ¿Cuál es el protocolo de acceso al medio usado en Gigabit Ethernet?", answers: ["ALOHA", "CSMA/CD", "ARP", "CSMA/CA"], correct: 1 },
    
    { question: "55. El grupo de trabajo del IEEE 802.11 se refiere a:", answers: ["Redes de área local inalámbricas.", "Redes de área local virtuales (VLAN).", "Seguridad de red.", "Redes de área local cableadas."], correct: 0 },
    
    { question: "56. ¿Cuántas direcciones IP están contenidas en una subred con mascara /27 ó 255.255.255.224?", answers: ["128", "64", "32", "16"], correct: 2 },
    
   // { question: "57. Consideramos la subred 193.146.76.160/27, ¿cuál de las siguientes direcciones se puede utilizar en dicha subred?", answers: ["193.146.76.158", "193.146.76.190", "193.146.76.193", "193.146.76.196"], correct: 1 },
    
    { question: "58. El protocolo Rapid Spanning Tree Protocol (RSTP) esta especificado en:", answers: ["802.1d", "802.1q", "802.1d", "802.1w"], correct: 3 },
    
    { question: "59. ¿Qué velocidad máxima teórica se alanza en las redes 802.11g?", answers: ["11 Mbps", "54 Mbps", "480 Mbps", "600 Mbps"], correct: 1 },
    
    { question: "60. Señale una característica propia de una red WIFI con WDS (Wireless Distribution System)", answers: ["todos los APs han de funcionar en modo repeater", "admite cifrado WPA pero no WEP", "todos los APs en el mismo WDS han de estar configurado en el mismo canal y SSID", "al menos un repeater AP ha de estar cableado al DS"], correct: 2 },
	
    { question: "61. ¿Cuál de las siguientes afirmaciones es verdadera?", answers: ["Ethernet es un protocolo de red de bajo nivel", "Ethernet utiliza exclusivamente topología de Estrella", "Ethernet es un protocolo de red de aho nivel", "Ethernet ha sido desplazado por Internet"], correct: 0 },
    
    { question: "62. Los equipos que permiten obtener una dirección IP a partir de un nombre(URL), se les denomina:", answers: ["DHCP", "NSLOOKUP", "Proxy", "DNS"], correct: 3 },
    
    { question: "63. Tamaño destinado en una trama básica Ethernet (IEEE 802.3-2012) para el payload:", answers: ["Tiene un mínimo de 64 Bytes hasta un máximo de 1500 Bytes.", "Tiene un mínimo de 16 Bytes hasta un máximo de 1000 Bytes.", "Tiene un mínimo de 46 Bytes hasta un máximo de 1500 Bytes.", "Tiene un mínimo de 32 Bytes hasta un máximo de 1000 Bytes."], correct: 2 },
    
    { question: "64. En una red Ethernet 10BASE-T, un paquete de 1000 KBytes se transmite en:", answers: ["0,81 ms", "8,19 ms", "819 ms", "81,9 ms"], correct: 2 },
    
    { question: "65. La especificación del Institute of Electrical and Electronics Engineers (IEEE) para acceso inalámbrico de banda ancha móvil o MBWA, es la:", answers: ["IEEE 802.19", "IEEE 802.20", "IEEE 802.21", "IEEE 802.22"], correct: 1 },

	{ question: "66. Señale qué estándar wifi del IEEE está especialmente diseñado para uso en redes que permitan la comunicación en entornos entre vehículos:", answers: ["802.11Qay", "802.11n", "802.11p", "802.11ve"], correct: 2 },
    
    { question: "67. WPS (Wifi Protected Setup) define los mecanismos a través de los que los diferentes dispositivos de la red obtienen las credenciales (SSID y PSK), necesarias para iniciar el proceso de autenticación. ¿Cuál de las siguientes configuraciones WPS para el intercambio de credenciales es FALSA?", answers: ["RADIUS", "PBC", "NFC", "USB"], correct: 0 },
    
    { question: "68. En relación con el estándar 802.11ac señale la opción INCORRECTA:", answers: ["puede funcionar con 80 MHz o incluso 160 MHz.", "se conoce como WIFI 5G o WiFi Gigabit, y es una mejora del IEEE 802.11n.", "opera en el espectro de 2,4 GHz.", "los componentes utilizados consumen menos energía que los utilizados en el estándar 802.11n."], correct: 2 },
    
    { question: "69. ¿Cuál de los siguientes estándares IEEE 802 es el que define la relación existente entre el grupo de estándares 802 de la IEEE y el modelo de referencia para interconexión de Sistemas Abiertos (OSI) de la ISO?", answers: ["802.1", "802.3", "802.5", "802.7"], correct: 0 },
    
    { question: "70. ¿Cuál de estas definiciones sobre topología de redes de área local es correcta?", answers: ["En la topología en estrella cada host tiene sus propias conexiones con los demás hosts", "La topología de anillo conecta un host con el siguiente y al último host con el primero", "La topología de malla conecta todos los cables con un punto central de concentración", "La topología de árbol conecta un host con el siguiente y al último host con el primero."], correct: 1 },
	
	{ question: "71. ¿Cuál es un estándar IEEE para las redes de área local inalámbricas?", answers: ["802.9", "802.11g", "802.16", "802.3"], correct: 1 },
    
    { question: "72. ¿Cuál de los siguientes estándares persigue evitar las vulnerabilidades de seguridad en las redes inalámbricas?", answers: ["802.11i", "802.1", "802.3", "802.l1a"], correct: 0 },
    
    { question: "73. La tecnología WiMAX 2 es conocida formalmente como:", answers: ["802.16m", "802.16a", "802.11x", "802.11"], correct: 0 },
    
    { question: "74. ¿Cuál de estas características de las direcciones del Protocolo de Internet versión 6 (Ipv6) NO es correcta?", answers: ["El formato ::ffff:1.2.3.4 se denomina dirección IPv4 compatible.", "Tienen 128 bits de longitud, si no están comprimidas.", "Se puede comprimir un grupo de cuatro dígitos, siempre que éste sea nulo.", "Pueden comprimirse varios grupos de cuatro dígitos nulos consecutivos como ''::''."], correct: 0 },
    
    { question: "75. Los estándares IEEE que definen el protocolo Bluetooth se definen en la norma:", answers: ["802.15.1", "803.1", "802.11j", "811.1b"], correct: 0 },
    
    { question: "76. La velocidad máxima teórica por canal de una red WIFI 802.11ac es:", answers: ["1,3 Gbps.", "600 Mbps.", "2,5 Gbps.", "750 Mbps."], correct: 0 },

    { question: "01. ¿Qué estándar define 10-Gigabit Ethernet?", answers: ["IEEE 802.3ae", "IEEE 802.3ab", "IEEE 802.3az", "IEEE 802.3ad"], correct: 0 },
    
    { question: "02. La tecnología MIMO en el ámbito de las redes inalámbricas:", answers: ["Utiliza procesadores de señal digital para mejorar el rechazo al ruido y a la interferencia.", "Utiliza simultáneamente las bandas de frecuencia de 2.4Ghz y 5 Ghz para aumentar la capacidad de transmisión.", "Utiliza varias antenas para la recepción y emisión, lo que permite aumentar la capacidad de transmisión.", "Utiliza un transmisor de alta potencia, lo que permite aumentar el alcance."], correct: 2 },
    
    { question: "03. Si trabajamos con sistemas Windows y se ha configurado la obtención automática de direcciones IP para acceder a una LAN, ¿cómo podemos saber la IP concreta que tenemos asignada en nuestro equipo?", answers: ["No podemos saberlo, salvo que seamos usuarios con privilegios de administrador de comandos.", "Bastaría con acceder a la configuración TCP/IP de nuestra conexión de área local a través de la interfaz gráfica.", "A través de la consola cmd con el comando ipconfig.", "A través de la consola cmd con el comando tracert /ip."], correct: 2 },
    
    { question: "04. Kerberos es:", answers: ["Una pasarela de pagos de la AEAT.", "Una aplicación cliente de firma electrónica.", "Un protocolo de autenticación de red creado por el MIT.", "Una distribución de Linux."], correct: 2 },
    
    { question: "05. ¿Cuál de los siguientes grupos de trabajo del IEEE se refiere a las redes PAN (Personal Area Network) inalámbricas?", answers: ["802.11", "802.15", "802.16", "802.20"], correct: 1 },
    
    { question: "06. Indique la velocidad máxima que puede proporcionar una red inalámbrica que cumpla el estándar 802.11n:", answers: ["11 Mbps", "54 Mbps", "600 Mbps", "1300 Mbps"], correct: 2 },
    
    { question: "07. El protocolo de acceso inalámbrico a una red de área local, que opera en la banda de los 5 GHz y que consigue velocidades máximas teóricas de hasta 7 Gbps es:", answers: ["802.llb", "802.11ac", "802.11n", "802.11g"], correct: 1 },
    
    { question: "08. Si en un entorno de red sobre un sistema operativo Windows nos encontramos con una sentencia como la siguiente#> wget -r -l2 -i listado.txt lo interpretaremos como la recuperación de una serie de documentos:", answers: ["del sistema operativo que se leerán del fichero \"listado.txt\".", "de la red que se leerán del fichero \"listado.txt\".", "de la red que se volcarán en el fichero \"Iistado.txt\".", "del sistema operativo que se volcarán en el fichero \"Iistado.txt\"."], correct: 1 },
    
    { question: "09. Indica cuál de los siguientes es un método de control de acceso al medio controlado y centralizado:", answers: ["Aloha.", "Mecanismos de encuesta.", "Ethernet.", "CSMA/CA."], correct: 1 },
    
    { question: "10. En el contexto de las redes de área local, señale la afirmación FALSA con respecto a la topología en bus:", answers: ["Todos los nodos se conectan a un único medio de transmisión.", "Si falla un segmento de cable, los nodos restantes quedan incomunicados.", "Cualquier transmisión de un nodo puede ser recibida por el resto de nodos.", "Un fallo en el concentrador incapacita a toda la red."], correct: 3 },
    
    { question: "11. El estándar IEEE 802.1d (Spanning Tree Protocol):", answers: ["Previene la formación de bucles en la red.", "Proporciona QoS, lo que es útil en redes que usan voz y datos.", "Suministra alimentación eléctrica a equipos, como por ejemplo, teléfonos IP.", "Define las redes virtuales, VLAN en las redes Ethernet."], correct: 0 },
    
    { question: "12. ¿Cuál de los siguientes estándares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual está enfocado a permitir la conexión continua de clientes en movimiento?", answers: ["IEEE 802.11p", "IEEE 802.11r", "IEEE 802.11v", "IEEE 802.11w"], correct: 1 },
    
    { question: "13. El conjunto de servicios que permite la interoperabilidad de aplicaciones distribuidas en una LAN se conoce como:", answers: ["inyector de dependencia.", "middleware.", "framework.", "controller."], correct: 1 },
    
    { question: "14. Indique el producto de Microsoft que permite la administración de la configuración del cumplimiento y la administración integral de activos de servidores, equipos de escritorio, portátiles y dispositivos móviles:", answers: ["System Center Data Protection Manager.", "System Center App Controller.", "System Center Configuration Manager.", "System Center Orchestrator."], correct: 2 },
    
    { question: "15. ¿Cuál de las siguientes afirmaciones es INCORRECTA cuando nos referimos a la tecnología NFC?", answers: ["Trabaja en una banda que no requiere licencia para su uso.", "Es una tecnología inalámbrica.", "Permite alcances de hasta 10 metros.", "Su funcionamiento se basa en los campos electromagnéticos."], correct: 2 },
    
    { question: "16. Señale la afirmación correcta respecto al estándar IEEE 802.11ac-2013:", answers: ["Amplía ancho de banda de canal a 160 MHz y opera en la banda de 2,4 GHz.", "Amplía ancho de banda de canal a 40 MHz y opera en la banda de 2,4 GHz.", "Amplía ancho de banda de canal a 80 MHz y opera en la banda de 60 GHz.", "Amplía ancho de banda de canal a 160 MHz y opera en la banda de 5 GHz."], correct: 3 },
    
    { question: "17. Señale cuál de las siguientes opciones está basada en el protocolo ICMP:", answers: ["SMTP", "SNMP", "PING", "DNS"], correct: 2 },
    
    { question: "18. Una desventaja de la topología física de bus es que:", answers: ["Un fallo en el concentrador provoca el aislamiento de todos los nodos a él conectados.", "Requiere más cable que la topología en estrella.", "Es vulnerable a la atenuación, ya que pierde señal a través de la distancia del cable.", "Es compleja y difícil de arreglar."], correct: 2 },
    
    { question: "19. ¿Cuál es el grupo de trabajo correspondiente al estándar WRAN (Wireless Regional Area Network)?:", answers: ["802.19", "802.20", "802.21", "802.22"], correct: 3 },
    
    { question: "20. En redes de área local, ¿cuál de los siguientes es un método de acceso al medio compartido con escucha por contienda?", answers: ["Paso de testigo en anillo.", "CSMA no persistente.", "ALOHA ranurado.", "Contención."], correct: 1 },
    
    { question: "21. En una empresa con 2.000 puestos de usuario en su red local de comunicaciones existen 3 subredes con estos direccionamientos: red A: 10.X.X.X, red B: 192.168.1.X y red C: 195.57.72.X. Teniendo en cuenta que en la ubicación de los equipos de usuarios y servidores se busca mantener la red operativa y a la vez con la máxima seguridad posible, ¿dónde se ubicarían los servidores de Base de Datos de los que se alimentan tanto los servidores web públicos como los de la intranet?", answers: ["Red A.", "Red B.", "Red C.", "Habría dos servidores de bases de datos, el público en la red C y el privado en la red B."], correct: 1 },
    
    { question: "22. ¿Cuál de los siguientes NO es un mecanismo de control de la congestión en redes?", answers: ["Cubeta con ficha.", "Paquetes de estrangulamiento.", "Control de admisión.", "Vector distancia."], correct: 3 },
    
    { question: "23. Los términos scatternet y piconet están relacionados con la tecnología:", answers: ["RDSI", "Bluetooth", "DECT", "Wimax"], correct: 1 },
    
    { question: "24. En el contexto de comunicaciones inalámbricas, MIMO significa:", answers: ["Multiple Input Multiple Output.", "Massive Input Massive Output.", "Multiplexed Input Multiplexed Output.", "Mapped Input Mapped Output."], correct: 0 },
    
    { question: "25. Ethernet realiza la difusión recibiendo tramas con la siguiente dirección MAC de destino:", answers: ["00:00:00:00:00:FF", "FF:FF:FF:FF:FF:FF", "FF:00:00:000:00:FF", "00:00:00:00:00:00"], correct: 1 },
    
    { question: "26. ¿Cuántos bytes utiliza la trama de Ethernet (IEEE 802.3-2012) para el código de redundancia cíclica?", answers: ["4 bytes.", "6 bytes.", "12 bytes.", "Ethernet no utiliza ningún código de redundancia cíclica."], correct: 0 },
    
    { question: "27. ¿Cómo se llama la base de datos que tiene los parámetros de gestión de una red?", answers: ["MIB (Management Information Base).", "NMD (Network Management database).", "NMS (Network Management System).", "Ninguna de los anteriores."], correct: 0 },
    
    { question: "28. ¿Se pueden controlar el número de impresiones que un usuario ha realizado en una impresora en red mediante el protocolo de gestión SNMP?", answers: ["Si, siempre y cuando en la MIB de la impresora se contemple este parámetro.", "No, necesitaría una base de datos externa para almacenarlo.", "Si, sólo mediante instalación de firmware nuevo en la impresora.", "Si, pero con protocolos propietarios de la impresora."], correct: 0 },
    
    { question: "29. ¿Qué protocolo utiliza la orden \"traceroute\" para obtener la ruta que se sigue desde nuestro equipo hasta otro en Internet?", answers: ["Ping", "ICMP", "PPP", "RSVP"], correct: 1 },
    
    { question: "30. De entre los siguientes, ¿qué protocolo es utilizado para reservar recursos de red a una determinada aplicación?", answers: ["RSVP", "ARP", "802.1ar", "H.264"], correct: 0 },
    
    { question: "31. Indica cuál es el grupo de trabajo en el estándar IEEE 802.11 cuyo objetivo es ampliar el soporte para aplicaciones wireless con requisitos de calidad de servicio (QoS):", answers: ["802.11e", "802.11i", "802.11n", "802.11q"], correct: 0 }

];
 
