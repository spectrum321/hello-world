const tema402 = [
    
    { question: "01. Señale cuál de las siguientes NO es una Protocol Data Unit (PDU) del protocolo SNMP v2/v3:", answers: ["GETREQUEST PDU", "SETRESPONSE PDU", "RESPONSE PDU", "INFORMREQUEST PDU"], correct: 1 },
    
    // { question: "02. Indicar las direcciones IP de red y de broadcast para la siguiente subred 132.27.31.77/26:", answers: ["red: 132.27.31.0/26 y broadcast: 132.27.31.127", "red: 132.27.31.0/26 y broadcast: 132.27.31.111", "red: 132.27.31.64/26 y broadcast: 132.27.31.127", "red: 132.27.31.64/26 y broadcast: 132.27.31.111"], correct: 2 },
    
    { question: "03. ¿Cuántos hosts puede direccionar la subred 172.16.1.0/26?", answers: ["62", "30", "14", "126"], correct: 0 },
    
    { question: "04. El ancho de banda del cable de pares trenzados CAT6 empleado en el cableado de redes locales, es de:", answers: ["Hasta 100 MHz.", "Hasta 160 MHz.", "Hasta 250 MHz.", "Hasta 500 MHz."], correct: 2 },
    
    { question: "05. Si queremos diseñar un enlace de 10Gbps ¿qué medio de transmisión nos permite alcanzar la máxima longitud del enlace?", answers: ["Cableado de cobre categoría 7.", "Fibra óptica monomodo tipo OS2.", "Fibra óptica multimodo tipo OM3.", "Fibra óptica multimodo tipo OM4."], correct: 1 },
    
    { question: "06. En el Modelo OSI ¿en qué nivel se encuadra el protocolo HDLC?", answers: ["Transporte", "Red", "Enlace de datos", "Física"], correct: 2 },
    
    { question: "07. ¿Cuál es la dirección de red asociada a la IP 113.128.14.35 con máscara de red 255.192.0.0?", answers: ["113.128.0.0", "113.192.0.0", "113.128.0.1", "113.192.0.1"], correct: 0 },
    
    { question: "08. ¿Cuál es la wildcard de la dirección de red asociada a la que pertenece el host con IP 123.132.14.35 y con máscara de red 255.240.0.0?", answers: ["0.63.255.255", "0.15.255.255", "0.92.255.255", "0.32.255.255"], correct: 1 },
    
    { question: "09. Indique cuál de las siguientes afirmaciones sobre la red clase A 127.0.0.0 es VERDADERA:", answers: ["La dirección 127.0.0.1 es la dirección de loopback, pero el resto de las direcciones del rango son direcciones válidas que se pueden asignar a cualquier host.", "Cuando un host recibe un paquete de la dirección 127.0.0.1 debe devolverlo a la misma dirección sin procesarlo. Es la base de funcionamiento de la herramienta PING.", "Cuando un protocolo de nivel superior envía un datagrama dirigido a una IP de esta red se le devuelve al remitente sin que llegue a los niveles inferiores de la capa OSI.", "Es una red de clase A ordinaria, cuyas direcciones IP pueden asignarse libremente a los hosts sin restricciones."], correct: 2 },
    
    { question: "10. Señale la respuesta correcta. La longitud de una dirección IP en la versión:", answers: ["IPv4 es de 32 bytes.", "IPv4 es de 16 bytes.", "IPv6 es de 128 bits.", "IPv6 es de 128 bytes."], correct: 2 },
    
    { question: "11. Señale el protocolo de estado de enlace:", answers: ["IGRP", "RIP", "OSPF", "EIGRP"], correct: 2 },
    
    { question: "12. En los conedores RJ45 de un cable de red cruzado empleado en una conexión 10BASE-T para conectar dos equipos:", answers: ["Se intercambian los pares TX y RX solamente.", "Se intercambian los pares TX-RX y los pares de datos bidireccionales.", "Se intercambian solo los pares de datos bidireccionales.", "Se intercambian los hilos conectados a los pines 1-8, 2-7, 3-6, 4-5 del conector."], correct: 0 },
    
    { question: "13. El campo \"versión\" de la cabecera del protocolo IPv4 puede contener:", answers: ["Desde 0000 hasta 1111.", "0100 ó 0110.", "4 y 6 en complemento a 1.", "Siempre 1111."], correct: 1 },
    
    { question: "14. Según la especificación del protocolo de encaminamiento 8GP-4:", answers: ["En E-BGP, los prefijos que aprende un router de un vecino no pueden ser anunciados a otro vecino mediante I-BGP.", "Un prefijo aprendido de un vecino mediante I-BGP no puede reanunciarse a otro vecino por I BGP.", "Es un protocolo que funciona sobre TCP por el puerto 169.", "Es un protocolo que funciona sobre UDP por el puerto 169."], correct: 1 },
    
    { question: "15. Los Protocolos TCP y UDP son protocolos de:", answers: ["nivel físico", "nivel de red", "nivel de transporte", "nivel de aplicación"], correct: 2 },
    
    { question: "16. El algoritmo de grafos que resuelve el problema de encontrar los caminos más cortos a partir de un origen dado al resto de los vértices de un grafo pesado se denomina:", answers: ["Algoritmo de Primo", "Algoritmo de Kruskal.", "Algoritmo de Dijkstra.", "Algoritmo de Floyd-Warshall."], correct: 2 },
    
    { question: "17. ¿Cuál as la tercera ventana de funcionamiento para la fibra óptica?", answers: ["850 nm", "1310 nm", "1480 nm", "1550 nm"], correct: 3 },
    
    { question: "18. La velocidad de transmisión del cable de pares trenzados CAT6 empleado en el cableado de redes locales, es de:", answers: ["Hasta 56 Mbps.", "Hasta 100 Mbps.", "Hasta 1,2 Gbps.", "Hasta 10 Gbps."], correct: 2 },
    
    { question: "19. La RFC 1918 regula 105 rangos de direcciones reservadas para redes privadas, según dicho RFC ¿cuál de los siguientes rangos sería INCORRECTO considerarlo como red privada?", answers: ["10.0.0.0 a 10.255.255.255", "192.168.0.0 a 192.168.255.255", "169.16.0.0 a 169.31.255.255", "172.16.0.0 a 172.31.255.255"], correct: 2 },
    
    { question: "20. ¿Cuál de las siguientes NO sería una dirección válida en IPv6?", answers: ["FFED::BA98:3210:4562", "3FFE:FFFF::8:800:20C4:0", "8000::56FA::FE12", "3FFE:FFFF:0:CD30::/64"], correct: 2 },
    
    { question: "21. Un protocolo para la conexión entre sistemas autónomos es:", answers: ["ELP4 (Exterior linking protocol).", "SGP2 (Standalone gateway protocol).", "BGP4 (Border gateway protocol).", "SLP2 (Standalone linking protocol)."], correct: 2 },
    
    { question: "22. ¿Qué es una \"zona NGA blanca\"?", answers: ["Zona en la que existe una sola red de nueva generación (NGA).", "Zona en la que ya existe más de una NGA o van a desplegarse en los próximos 3 años.", "Zona en la que ya existe o va a desplegarse una sola NGA en los próximos 3 años.", "Zona en la que no existen NGA y en la que no es probable que los operadores privados las construyan en un período de 3 años."], correct: 3 },
    
    { question: "23. El estándar utilizado para la transmisión de la señal de televisión en la red de televisión digital terrestre es:", answers: ["PAL B/G", "DVB-T", "DVB-C", "DOCSIS 3.0"], correct: 1 },
    
    { question: "24. ¿Qué término NO aparece el RFC 3775 \"Mobility Support in IPv6\"?", answers: ["Correspondent node.", "L3 handover.", "Home agent.", "Care-of registration."], correct: 3 },
    
    { question: "25. Una red TCP usa el protocolo de ventana deslizante como mecanismo de control de flujo. Supongamos que se establece el tamaño de la ventana en 4 y los paquetes se numeran del 1 en adelante. Con estas condiciones, el emisor podrá enviar al receptor el paquete número 5:", answers: ["Únicamente cuando reciba el ACK del paquete 4.", "Cuando haya recibido al menos dos ACK.", "Cuando reciba cualquier ACK.", "Cuando se cumpla el timeout de envío del paquete 1."], correct: 2 },
    
    { question: "26. ¿Cuál de las siguientes respuestas NO se considera una de las cuatro primitivas de servicio que define el modelo OSI de ISO para la comunicación entre niveles?", answers: ["Request.", "Invoke.", "Response.", "Confirmation."], correct: 1 },
    
    { question: "27. El protocolo DHCP (Dynamic Host Configuration Protocol) y DHCPv6 (DHCP for IPv6) están definidos en los documentos:", answers: ["RFC 792 y RFC 4361, respectivamente.", "RFC 826 y RFC 3315, respectivamente.", "RFC 1034 y RFC 4361, respectivamente.", "RFC 2131 y RFC 3315, respectivamente."], correct: 3 },
    
    { question: "28. Señale cuál de las siguientes direcciones IP puede ser asignada a un host en la siguiente subred 132.26.41.90/26:", answers: ["132.26.41.128", "132.26.41.127", "132.26.41.124", "132.26.41.55"], correct: 2 },
    
    { question: "29. Indique a qué subred pertenece la siguiente dirección de broadcast 95.25.46.159:", answers: ["95.25.30.128/27", "95.25.30.128/25", "95.25.46.128/27", "95.25.46.128/25"], correct: 2 },
    
    { question: "30. En el protocolo RIP Version 2 (Routing Information Protocol), cuyo algoritmo está basado en vector distancia, el límite máximo de saltos a partir del cual se considera una ruta como inalcanzable es:", answers: ["15 saltos.", "9 saltos.", "16 saltos.", "7 saltos."], correct: 0 },
    
    { question: "31. Diferencia entre el protocolo RIP v1 y RIP v2:", answers: ["RIP v1 es un protocolo de estado del enlace mientras que el RIP v2 es de vector de distancia.", "RIP v1 encapsula los mensajes en paquetes UDP y RIP v2 en paquetes TCP.", "RIP v1 no admite subredes y RIP v2 si las admite.", "RIP v1 es un protocolo de encaminamiento dinámico de tipo IGP y RIP v2 es un protocolo de encaminamiento dinámico de tipo BGP."], correct: 2 },
    
    { question: "32. El tamaño de una cabecera MPLS según la RFC 3032, es de:", answers: ["20 bits.", "32 bits.", "48 bits.", "64 bits."], correct: 1 },
    
    { question: "33. En un escenario de movilidad IP ¿de qué se encarga el Agente Base (Home Agent)?", answers: ["Es el nodo que cambia su punto de conexión a la red sin cambiar su dirección IP o perder las conexiones establecidas.", "Es el router situado en la red origen del nodo móvil que intercepta el tráfico destinado al nodo móvil y se lo reenvía mediante túneles IP, realizando además tareas de localización de los nodos móviles.", "Es el router situado en la red visitada que proporciona servicios de encaminamiento a los nodos móviles registrados.", "Es el router situado en la red visitada que facilita una nueva dirección IP al nodo móvil."], correct: 1 },
    
    { question: "34. Un proyecto europeo cuyo objetivo estratégico fue mejorar y potenciar el uso de la tecnología PLC se denominó proyecto:", answers: ["CORDIS", "OPERA", "Dublin Core", "POIROT"], correct: 1 },
    
    { question: "35. ¿Qué características de seguridad presenta SNMPv3, tal y como se mencionan en la RFC 3418 (MIB for the SNMP Protocol)?", answers: ["Se recomienda que los implementadores usen el modelo de seguridad basado en usuario y el control de acceso basado en vistas.", "Se obliga a que los implementadores usen el modelo basado en usuario y el control de acceso basado en vistas.", "En dicha RFC no se menciona ningún elemento de seguridad.", "En temas de seguridad, sólo hace mención al uso obligatorio del algoritmo de encriptación CBC (Cipher Block Chaining) de DES, conocido también por DES-56."], correct: 0 },
    
    { question: "36. Si se quiere interconectar mediante fibra óptica dos dispositivos separados a menos de 100 metros en un CPD a una velocidad de 40Gb/s, la categoría mínima de fibra óptica a usar debería ser:", answers: ["OM2", "OM3", "OM4", "OM5"], correct: 2 },
    
    { question: "37. La especificación del protocolo RTP (Real-Time Transport Protocol) corresponde a:", answers: ["ITU-T", "IETF", "W3C", "IEEE"], correct: 1 },
    
    { question: "38. ¿Qué tasa de transferencia tiene la codificación de voz CS-ACELP (Conjugate-Structure Algebraic Code Excited Linear-Prediction) de la Recomendación ITU G.729 (anexo A)?", answers: ["8 Kbit/s.", "16 Kbit/s.", "32 Kbit/s.", "64 Kbit/s."], correct: 0 },
    
    { question: "39. La norma TETRA (TErrestrial Trunked RAdio) es un estándar elaborado por:", answers: ["IEEE (Institute of Electrical and Electronics Engineers).", "IETF (Internet Engineering Task Force).", "ETSI (European Telecommunications Standards Institute).", "ITU (International Telecommunications Union)."], correct: 2 },
    
    { question: "40. ¿Cuál de los siguientes conceptos NO está relacionado con la especificación de IP móvil para IPv4 del IETF (RFC 5944)?", answers: ["Tunneling.", "Home agent.", "Mobile Switching Centre.", "Care-of address."], correct: 2 },
    
    { question: "41. ¿Cuál de los siguientes NO es un elemento de una red MPLS según el RFC 3031?", answers: ["LSR - Label Switching Router.", "LDP - Label Distribution Protocol.", "ILM - Incoming Label Mode.", "LSP - Label Switched Path."], correct: 2 },
    
    { question: "42. Señale la respuesta correcta relativa al protocolo iSCSI (Internet Small Computer System Interface), definido en la RFC 7143:", answers: ["Tanto iniciadores como destinos compatibles iSCSI deben implementar el método de autenticación CHAP (Challenge Handshake Authentication Protocol).", "Un nombre iSCSI consiste en una cadena de texto con tres campos: un designador de tipo, un espacio de nombres, y un nombre de dispositivo único dado por la IETF.", "En la RFC se definen sólo dos designadores de tipo: el tipo \"iqn\" y el tipo \"eui\".", "Debe utilizarse obligatoriamente iSNS (Internet Storage Name Servicc) para localizar los destinos iSCSI."], correct: 0 },
    
    { question: "43. En el protocolo IPv6 señale la dirección inválida:", answers: ["FEAA:1055::20CD:AA59", "::FFFF:155.133.20.45", "D256:20:FD34:0000:80::", "B45B::5623::4522:1A4A"], correct: 3 },
    
    { question: "44. Uno de los siguientes términos NO se corresponde con un tipo de antena satelital:", answers: ["Cassegrain", "Krenwinkel", "Gregorian", "Offset"], correct: 1 },
    
    { question: "45. Indique cuál de los siguientes es un tipo válido de cable de par trenzado según su aislamiento o apantallamiento:", answers: ["scp", "htp", "ftp", "ssh"], correct: 2 },
    
    { question: "46. En SNMP ¿qué puerto utilizan las traps y en qué sentido se transmiten?", answers: ["Puerto 162 y las envía el agente al gestor.", "Puerto 162 y las envía el gestor al agente.", "Puerto 161 y las envía el agente al gestor.", "Puerto 161 y las envía el gestor al agente."], correct: 0 },
    
    { question: "47. Señale cuál de las siguientes NO es una Protocol Data Unit (PDU) del protocolo SNMP v2/v3:", answers: ["GETREQUEST PDU", "SETRESPONSE PDU", "RESPONSE PDU", "INFORMREQUEST PDU"], correct: 1 },
    
    { question: "48. En la administración de un dispositivo switch ¿qué es un trunk?", answers: ["Un puerto de velocidad GigaEthernet o 10 GigaEthernet.", "Un enlace que agrega tráfico de varias VLANs.", "Un adaptador fibra - par trenzado.", "Una versión estable del firmware del dispositivo."], correct: 1 },
    
    { question: "49. Indicar de las siguientes, cuál es una cabecera de extensión IPv6:", answers: ["Cabecera siguiente.", "Enrutamiento.", "Longitud de la carga útil.", "Límite de saltos."], correct: 1 },
    
    { question: "50. Indicar cuál de las siguientes direcciones IP puede ser asignada a un host en la siguiente subred 135.26.41.80/28", answers: ["135.26.41.94", "135.26.41.95", "135.26.41.96", "135.26.41.97"], correct: 0 },
    
    { question: "51. En IPv6 (RFC 2460), ¿cuánto ocupa el campo \"tipo de enrutamiento\"?", answers: ["15 bits.", "8 bits.", "10 bits.", "3 bits."], correct: 1 },
    
    { question: "52. Indicar cuál de los siguientes NO es un modo de transferencia de datos utilizado por el protocolo HDLC (High Level Data Link Control):", answers: ["Modo de respuesta normal (NRM, Normal Response Mode).", "Modo balanceado asíncrono (ABM, Asynchronous Balanced Mode).", "Modo de respuesta asíncrono (ARM, Asynchronous Response Mode).", "Modo balanceado síncrono (SBM, Synchronous Balanced Mode)."], correct: 3 },
    
    { question: "53. ¿De qué tipo es la dirección de IPv6 ff00::/8?", answers: ["No es válida.", "Unicast.", "Multicast.", "Loopback."], correct: 2 },
    
    { question: "54. ¿Qué banda de frecuencia se utiliza para la prestación de los servicios de televisión terrestre con tecnología digital, según el Cuadro Nacional de Atribuciones de Frecuencia?", answers: ["100 a 224 MHz", "225 a 356 MHz", "357 a 469 MHz", "470 a 862 MHz"], correct: 3 },
    
    { question: "55. ¿Qué nombre recibe el estándar de Televisión Digital Terrestre utilizado en Europa?", answers: ["ATSC", "ISDB-T", "DVB-T", "EDTVB"], correct: 2 },
    
    { question: "56. Un conector tipo \"MT-Array\" es un conector para:", answers: ["Fibra óptica.", "Mainframes.", "Buses PCI.", "Par trenzado."], correct: 0 },
    
    { question: "57. Los conectores LC son:", answers: ["Conectores para PCI.", "Conectores de par trenzado.", "Conectores exclusivos para Mainframe.", "Conectores de fibra óptica."], correct: 3 },
    
    { question: "58. ¿Cuál de los siguientes puertos utiliza el protocolo SNMP?", answers: ["110", "119", "161", "25"], correct: 2 },
    
    { question: "59. Indique la respuesta correcta en relación al comando SNMP GetBulkRequest:", answers: ["Está disponible en todas las versiones de SNMP.", "Es utilizado por un sistema gestor de red para enviar un mensaje a otro gestor sobre objetos administrados.", "Es el que permite utilizar autenticación en SNMP v3.", "Es utilizado cuando se requiere una cantidad elevada de datos transmitidos."], correct: 3 },
    
    { question: "60. ¿En qué protocolo de encaminamiento se utiliza el Algoritmo de Dijkstra para el cálculo de rutas?", answers: ["OSPF", "RIP", "BGP", "EGP"], correct: 0 }
];