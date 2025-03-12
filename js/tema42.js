const tema42 = [
    
    { question: "01. Según la entidad lANA, ¿qué número de puerto TCP está reservado para Telnet?", answers: ["110", "21", "25", "23"], correct: 3 },
    
    { question: "02. ¿Qué protocolo usa el número de puerto 993?", answers: ["POP3 sobre SSL.", "IMAP4 sobre SSL.", "SMTP sobre SSL.", "Ninguno de los anteriores."], correct: 1 },
    
    { question: "03. Cuando enviamos un mensaje, ¿qué protocolo es el que debe utilizar directamente nuestro correo electrónico?", answers: ["POP.", "SMTP", "HTTP", "IRC."], correct: 1 },
    
    { question: "04. La telefonía IP:", answers: ["Utiliza terminales totalmente digitales", "Transmite la voz analógica por redes IP", "Es una tecnología que sólo permite hablar dentro de Internet", "Necesita siempre una conexión ADSL para trabajar"], correct: 1 },
    
    { question: "05. ¿Cuál de los siguientes protocolos no se utiliza en Internet?", answers: ["IPX", "BGP", "ICMP", "OSPF"], correct: 0 },
    
    { question: "06. ¿Cuál de los siguientes no es un protocolo de correo electrónico?", answers: ["SMTP", "IMAP4", "POP3", "Los tres anteriores son protocolos de correo electrónico"], correct: 3 },
    
    { question: "07. Dos usuarios del mismo departamento comparten cuenta de correo electrónico, para que los dos reciban todos los correos en su cliente de correo será necesario:", answers: ["No se puede compartir una cuenta de correo electrónico", "Que el protocolo de acceso delimite el acceso ordenado por turnos.", "Que ambos en su configuración dejen los mensajes en el servidor", "Que accedan mediante el protocolo pop3"], correct: 2 },
    
    { question: "08. ¿Se pueden recuperar los correos electrónicos después de haber eliminado la cuenta de correo del Thunderbird?", answers: ["No es necesario recuperarlos porque al eliminar la cuenta de correo las carpetas se siguen visualizando en el Thunderbird.", "Sí, se puede recuperar la bandeja de entrada.", "No, si se ha eliminado la cuenta se ha eliminado todo.", "Sí, porque aunque desaparece la cuenta y las carpetas del Thunderbird, no se eliminan las carpetas de correos en el perfil del usuario."], correct: 3 },
    
    { question: "09. Para poder enviar correo electrónico a un destinatario, se necesita un servidor…", answers: ["IMAP", "POP3", "SMTP", "SNMP"], correct: 2 },
    
    { question: "10. Si hablamos del Protocolo de Transferencia de Archivos (FTP), ¿cuál de las siguientes afirmaciones es cierta?", answers: ["Está pensado para ofrecer la máxima velocidad en la conexión.", "Está pensado para ofrecer la máxima seguridad en la conexión.", "Realiza el intercambio de información con el texto cifrado.", "Depende del sistema operativo utilizado en cada equipo."], correct: 0 },
    
    { question: "11. El Protocolo de Transferencia de Hipertexto (HTTP)…", answers: ["Carece de sintaxis, sólo indica la semántica que utilizan los elementos software de la arquitectura Web para comunicarse.", "Está orientado a transacciones con entidades bancarias.", "Es un protocolo sin estado, que no guarda ninguna información sobre conexiones anteriores.", "Es un protocolo que consume muchos «recursos», que se denominan «UniformedResource Location» (URL)."], correct: 2 },
    
    { question: "12. En el Protocolo de Transferencia de Hipertexto Seguro (HTTPS), la seguridad se garantiza por medio de…", answers: ["La criptografía asimétrica que usa certificados de claves públicas y privadas para cifrar la información transmitida.", "Una capa de conexión segura cifrada «Secure Sockets Layer» (SSL) o una conexión con seguridad de la capa de transporte «Transport Layer Security» (TLS).", "El uso de firma electrónica avanzada XML «XML Advanced Electronic Signatures» (XAdES).", "Usando el protocolo S-HTTP con el método de cifrado PGP."], correct: 1 },
    
    { question: "13. En lo que se refiere a estándares de seguridad para Internet podemos afirmar que:", answers: ["SET proporciona seguridad para cualquier aplicación Web.", "Secure HTTP está orientado sólo a transacciones con tarjeta de crédito.", "SSL asegura el canal de comunicación.", "S/MIME está orientado a aplicaciones diferentes a las de correo electrónico."], correct: 2 },
    
    { question: "14. ¿Qué diferencia principal existe entre los servicios de Internet IMAP y POP3?", answers: ["Con POP3 sólo se leen los mensajes del servidor y con IMAP se puede acceder a la estructura de carpetas.", "Con POP3 se accede a la estructura de carpetas y con IMAP sólo se pueden leer los mensajes del servidor.", "El protocolo POP3 permite visualizar los mensajes de manera remota, mientras que el protocolo IMAP obliga a descargar los mensajes en el cliente.", "No existen diferencias, son servicios equivalentes."], correct: 0 },
    
    { question: "15. Señala la opción que NO es correcta en cuanto a los protocolos del servicio de correo electrónico que podemos encontrar en la red internet:", answers: ["SMTP (Simple Mail Transfer Protocol).", "IMP (Internet Mail Protocol).", "POP (Post Office Protocol).", "IMAP (Internet Message Access Protocol)."], correct: 1 },
    
    { question: "16. En lo relativo al servicio de correo electrónico, señale la afirmación correcta:", answers: ["SMTP se utiliza únicamente para las comunicaciones entre servidores de correo.", "Los protocolos POP3 o IMAP intervienen entre programa cliente y el servidor SMTP a la hora de enviar un correo.", "El protocolo DNS se utiliza para conocer el registro MX asociado al dominio configurado como destino.", "Todas las respuestas son correctas."], correct: 2 },
    
    { question: "17. WebDAV (RFC 4918) son un conjunto de extensiones para el protocolo HTTP, entre ellos, el método PROPPATCH que sirve para:", answers: ["Crear colecciones.", "Recuperar propiedades, almacenadas como XML, desde un recurso.", "Cambiar y borrar múltiples propiedades de un recurso en una simple operación atómica.", "Desbloquear un recurso."], correct: 2 },
    
    { question: "18. El puerto del protocolo FTP sobre TLS/SSL (FTPS) es:", answers: ["2121", "2020", "980", "990"], correct: 3 },
    
    { question: "19. ¿Qué números de puerto TCP tienen asignados por IANA los protocolos IMAP e IMAPS (IMAP4 sobre TLS/SSL)?", answers: ["IMAP 143 e IMAPS 993.", "IMAPS 143 e IMAP 993.", "IMAP 193 e IMAPS 443.", "IMAPS 193 e IMAP 443."], correct: 0 },
    
    { question: "20. Entre los múltiples protocolos de señalización para VoIP se encuentra:", answers: ["SIP", "VDSL", "IMAP", "POTS"], correct: 0 },
    
    { question: "21. Desde que fueron definidas extensiones del archivo en SMTP, un cliente SMTP que soporte dichas extensiones debería comenzar una sesión SMTP enviando el comando:", answers: ["HELL", "EHLO", "HELO", "ELLO"], correct: 1 },
    
    { question: "22. Submissión en SMTP utiliza el puerto:", answers: ["25", "110", "587", "143"], correct: 2 },
    
    { question: "23. El estándar S/MIME", answers: ["define el modo de intercambio de correo seguro", "define el multicast de los servicios multimedia", "no existe", "ninguna de las anteriores es correcta."], correct: 0 },
    
    { question: "24. SSL es:", answers: ["un protocolo propiedad de Netscape", "un protocolo abierto y no propietario", "un protocolo de propiedad de Microsoft", "ninguna de las anteriores es correcta."], correct: 1 },
    
    { question: "25. En relación a los puertos utilizados por el protocolo FTP, señale la afirmación correcta:", answers: ["Utiliza el 21 para datos y el 20 para control.", "Utiliza el 20 para datos y el 21 para control.", "Utiliza el 23 para datos y el 25 para control.", "Utiliza el 25 para datos y el 23 para control."], correct: 1 },
    
    { question: "26. Un proxy es:", answers: ["Un lenguaje de programación", "Un sistema de bases de datos", "Un sistema de acceso compartido a Internet", "Un lenguaje de copias de seguridad"], correct: 2 },
    
    { question: "27. De Internet se puede afirmar:", answers: ["es una red orientada a conexión", "es una red de conmutación de línea.", "es una red conmutada por mensaje.", "es una red de conmutación de paquetes."], correct: 3 },
    
    { question: "28. ¿Cuál de los siguientes protocolos de Internet relacionados con el correo electrónico permite descargar selectivamente los mensajes de entrada del servidor de correo?:", answers: ["SMTP (Simple Mail Transfer Protocol).", "POP3 (Post Office Protocol versión 3).", "IMAP4 (Internet Message Access Protocol versión 4).", "S/MIME (Secure Multipurpose Internet Mail Extensions)."], correct: 2 },
    
    { question: "29. El protocolo SMTP (SimpleMail Transfer Protocol):", answers: ["Tiene asignado el puerto 23.", "Tiene asignado los puertos 20 y 21.", "Tiene asignado el puerto 25.", "Tiene asignado el puerto 80."], correct: 2 },
    
    { question: "30. ¿Quién elaboró la especificación Transport Layer Security (TLS)?", answers: ["UIT (Unión Internacional de Telecomunicaciones).", "IETF (Internet Engineering Task Force).", "Netscape Communications.", "ETSI (European Telecommunications Standards Institute)"], correct: 1 },
    
    { question: "31. Uno de los problemas en cuanto a la calidad del servicio (QoS) de una red VoIP es la latencia, señale su definición correcta:", answers: ["Variación en el tiempo de llegada de los paquetes, causada por congestión de red, pérdida de sincronización o por las diferentes rutas seguidas.", "Es una reflexión retardada de la señal acústica original.", "El tiempo que tarda un paquete en llegar desde la fuente al destino.", "Pérdida que se produce al usar protocolos no orientados a conexión que no reenvían paquetes perdidos. Además también se produce por descartes de paquetes que no llegan a tiempo al receptor."], correct: 2 },
    
    { question: "32. ¿Cuál de las siguientes respuestas se corresponde con el número de puerto tcp \"bien conocido\" para poder usar el servicio de correo saliente POP3 sobre SSL (POP3s)?", answers: ["295", "995", "445", "725"], correct: 1 },
    
    { question: "33. El conjunto de protocolos estándares adoptados por el Internet Architecture Board (IAB), para proporcionar seguridad al correo electrónico sobre Internet se denomina:", answers: ["PEM", "CMS", "PGP", "S/MIME"], correct: 0 },
    
    { question: "34. El comando para iniciar una sesión con un servidor ftp es:", answers: ["Start", "Init", "open", "put"], correct: 2 },
    
    { question: "35. ¿Cuál de estas afirmaciones sobre el protocolo HTTPS de Internet es cierta?", answers: ["Cuando se conecta a un sitio Web con un certificado no confiable, el navegador ofrece un aviso al usuario y se permite la comunicación.", "Cuando se conecta a un sitio Web con un certificado no confiable, el navegador impide completamente la comunicación", "El puerto estándar que se utiliza es el 441", "Está sujeto a ataques man-in-the-middle"], correct: 0 },
    
    { question: "36. Internet Small Computer Systems Interface (iSCSI) según el RFC 3720 es un protocolo de:", answers: ["Enlace.", "Red.", "Transporte.", "Aplicación."], correct: 2 },
    
    { question: "37. ¿Cuando hablamos de \"SSL\" a qué nos referimos?", answers: ["Un estándar de pago por internet.", "Un protocolo para realizar conexiones seguras entre un cliente y un servidor.", "Un estándar de certificados digitales sobre internet.", "Un diseño de seguridad en redes WIFI."], correct: 1 },
    
    { question: "38. Señale la afirmación incorrecta en relación a la arquitectura SSL:", answers: ["El protocolo de internet https se basa en la arquitectura SSL.", "La arquitectura SSL usa los protocolos SSL Record y Handshake Record.", "La arquitectura SSL proporciona un servicio fiable y seguro extremo a extremo.", "El protocolo IPv6 incorpora de forma nativa la arquitectura SSL."], correct: 3 },
    
    { question: "39. Señale la afirmación incorrecta en relación al servicio DNS:", answers: ["Las peticiones a un servidor DNS siempre se encapsulan en un datagrama TCP.", "El puerto well-known de un servidor DNS es el 53.", "Se basa en una base de datos global, distribuida y jerárquica de nombres de dominio.", "La ICANN es la responsable de la coordinación global del sistema DNS."], correct: 0 },
    
    { question: "40. Según RFC 5321, una transacción SMTP se compone de estos comandos:", answers: ["HELO, RCPT FROM y MSG.", "MAIL FROM, RCPT TO y DATA.", "MAIL FROM, MAIL TO y SEND.", "HELLO, MAIL FROM y DATA."], correct: 1 },
    
    { question: "41. Según la RFC 5321 referida a Simple Mail Transfer Protocol, una implementación mínima de este protocolo debe contar con la siguiente lista die comandos implementada en todos los receptores para cumplir con la especificación:", answers: ["EHLO, MAIL, SEND, DATA, RESET, NACK, BYE, VRFY", "HALO, HELO, MAIL, RCPT, MSG, RESET, NOOP, QUIT, VRFY", "EHLO, HELO, SEND, RCPT, MSG, RSET, ACK, QUIT, VRFY", "EHLO, HELO, MAIL, RCPT, DATA, RSET, NOOP, QUIT, VRFY"], correct: 3 },
    
    { question: "42. Para garantizar la seguridad y confidencialidad de los mensajes enviados y recibidos entre remitente y destinatario, un servidor de correo electrónico deberá permitir el uso de las siguientes tecnologías:", answers: ["POP3 e IMAP, ya que implementan en sus protocolos medidas de seguridad necesarias para garantizar la confidencialidad de los intervinientes en la comunicación.", "En el caso de acceso vía web al correo electrónico debe considerarse obligatorio el uso de SSL/TLS tanto para la autenticación del usuario como para la sesión en general.", "POP3S e IMAPS, que no son más que la denominación de los protocolos clásicos pero a través de túneles de cifrado SSL.", "Herramientas de cifrado de clave pública como PGP o su variante de código abierto GPG."], correct: 3 },
	
    { question: "43. ¿Cuál de las siguientes órdenes del protocolo SMTP (Simple Mail Transfer Protocol) se utiliza para indicar el destinatario del mensaje?", answers: ["SENT TO", "DESTINATION TO", "RCPT TO", "MAIL TO"], correct: 2 },
    
    { question: "44. ¿Cuál de los siguientes NO es un protocolo de correo electrónico?", answers: ["SNMP", "POP", "IMAP", "SMTP"], correct: 0 },
    
    { question: "45. Indique cuál de las siguientes afirmaciones sobre el protocolo TLS 1.2 descrito en la RFC 5246 es FALSA:", answers: ["El protocolo TLS consta de dos capas, el protocolo de transmisión de registros (TLS record protocol) y el protocolo de negociación (TLS handshake protocol).", "La solución de encriptado del protocolo de transmisión de registros es asimétrica.", "El protocolo TLS encapsula protocolos de nivel superior.", "El protocolo de negociación (TLS handshake protocol) permite la autenticación con criptografía de clave pública."], correct: 1 },
    
    { question: "46. Indique la característica que NO proporciona el protocolo SSL:", answers: ["No repudio.", "Autenticación.", "Integridad.", "Confidencialidad."], correct: 0 },
    
    { question: "47. ¿Qué nos indica un error 502 en el protocolo de comunicaciones HTTP?", answers: ["El servidor, actuando como gateway o proxy, recibió una respuesta inválida desde un servidor de flujo ascendente al cuál accedió para intentar completar la solicitud.", "El servidor encontró un error inesperado lo que le impide completar la solicitud.", "El servidor no soporta la funcionalidad requerida para completar la solicitud.", "El servidor no puede completar la solicitud debido a una sobrecarga temporal o mantenimiento del mismo."], correct: 0 },
    
    { question: "48. ¿Cuál es el número de puerto usado por DNS?", answers: ["53", "25", "110", "135"], correct: 0 },
    
    { question: "49. ¿Cuál es el tipo de registro de DNS que proporciona información del servidor de correo para un dominio dado?", answers: ["MAIL", "MX", "SOA", "LOC"], correct: 1 },
    
    { question: "50. El RIR (Regional Internet Registry) responsable de las direcciones IP de América Latina y algunas islas del Caribe es:", answers: ["LATNIC", "LACNIC", "ARIN", "RIPE"], correct: 1 },
    
    { question: "51. ¿Cuál de los siguientes NO es un tipo de registro DNS válido?", answers: ["MX", "SOA", "PTR", "AAA"], correct: 3 },
    
    { question: "52. ¿Cuál de los siguientes NO es un método válido de petición SIP según la especificación RFC 3261?", answers: ["PUSH", "OPTIONS", "INVITE", "REGISTER"], correct: 0 },
    
    { question: "53. Asterisk es:", answers: ["Una antena parabólica de tipo Cassegrain que se caracteriza por llevar un segundo reflector cerca de su foco, el cual refleja la onda radiada desde el dispositivo radiante hacia el reflector en las antenas transmisoras.", "La evolución del protocolo de autenticación Kerberos para sistemas en la nube.", "Un algoritmo de búsqueda creado y utilizado por Google.", "Un framework de software libre (bajo licencia GPL) para controlar y gestionar comunicaciones de cualquier tipo (analógicas, digitales o VoIP)."], correct: 3 },
    
    { question: "54. El departamento de desarrollo de una organización demandará fundamentalmente servicios de cloud computing del tipo:", answers: ["Infraestructure as a Service (IaaS).", "Software as a Service (SaaS).", "Platform as a Service (PaaS).", "Business Process as a Service (BPaaS)."], correct: 2 },
    
    { question: "55. Una de las características de las nubes privadas es:", answers: ["Es un entorno conocido, estable y seguro.", "Se produce un uso por demanda.", "Sabemos que todos los servidores están virtualizados.", "La mayor parte de los trabajos se procesan en batch."], correct: 1 },
    
    { question: "56. Indique el tipo de nube computacional falsa:", answers: ["Privada.", "Federada.", "Pública.", "Híbrida."], correct: 1 },
    
    { question: "57. El algoritmo PLC (Packet Loss Concealment):", answers: ["Lo utiliza Frame Relay para el reenvío de tramas pérdidas por la congestión en el sentido de la transmisión.", "Algoritmo de ocultamiento de pérdida de paquetes utilizado por VoIP.", "Utilizado por TCP para la retransmisión de paquetes después de una trama NACK (negative acknowledgement).", "Algoritmo de descarte de paquetes en situación de congestión en redes Frame Relay."], correct: 1 },
    
    { question: "59. Indique de entre las siguientes cuál es la definición de secráfono:", answers: ["Equipo de frontera que, situado fuera de la red interna, ofrece servicios al exterior.", "Equipo infectado por un atacante remoto no detectado.", "Equipo que genera y entrega claves criptográficas para su distribución.", "Equipo para realizar el cifrado analógico de la voz."], correct: 3 },
    
    { question: "60. Indicar de qué zonas se encarga RIPE-NCC como Registro Regional de Internet (RIR):", answers: ["América Central, América del Norte y del Sur.", "Europa y Norte de África.", "Europa, América Central y América del Sur.", "Europa, Oriente Medio y Asia Central."], correct: 3 },
    
    { question: "61. Analizando los problemas con la calidad de servicio en VoIP, ¿qué se entiende por jitter?", answers: ["Una reflexión retardada de la señal acústica original.", "El tiempo que tarda un paquete en llegar desde la fuente al destino.", "Variación en el tiempo de llegada de los paquetes, causada por congestión de red, perdida de sincronización o por las diferentes rutas seguidas.", "Cantidad de información o de datos que se puede enviar a través de una conexión de red en un período de tiempo dado."], correct: 2 },
    
    { question: "62. Qué datos NO incorporará una descripción de sesión SDP (Session Description Protocol - RFC 4566) en una iniciación de sesión utilizada en SIP (Session Initiation Protocol):", answers: ["Tipo de medio.", "Protocolo de transporte (RTP/UDP/IP, H 320, etc.).", "Formato del medio (video H.261, video MPEG, etc.).", "Tamaño de los datos."], correct: 3 },
    
    { question: "63. ¿Cuál de las siguientes afirmaciones es correcta en relación al protocolo FTP?", answers: ["En el modo activo el puerto de datos del cliente es el 20.", "El comando \"upload\" permite subir un fichero al servidor.", "Entre los tipos de acceso, está el acceso anónimo, que permite conectarse sin necesidad de usuario y contraseña.", "El protocolo permite tres modos de conexión: activo, pasivo y bajo demanda."], correct: 2 },
    
    { question: "64. El puerto 69 es utilizado por:", answers: ["TFTP (Trivial File Transfer Protocol).", "Finger.", "IMAP (Internet Message Access Protocol).", "SFTP (Secure File Transfer Protocol)."], correct: 0 },
    
    { question: "65. Con respecto al protocolo DNS. ¿Cuál de las siguientes opciones NO es una parte de un mensaje DNS?", answers: ["Cabecera.", "Checksum.", "Registros de recursos de Respuesta.", "Registros de recursos de Autoridad."], correct: 1 },
    
    { question: "66. ¿Cuál de los siguientes organismos se encarga de generar y mantener las RFC en internet?", answers: ["IETF (Internet Engineering Task Force).", "IAB (Internet Architecture Board).", "lANA (Internet Assigned Numbers Authority).", "ISOC (Internet Society)."], correct: 0 },
    
    { question: "67. El protocolo FTP sobre TLS/SSL (FTPS-data) usa el puerto:", answers: ["989", "567", "742", "334"], correct: 0 },
    
    { question: "68. Los Puntos Neutros (Internet Exchange Points) en Internet:", answers: ["Permiten conectarse a Internet sin coste.", "Eliminan los paquetes con un TIL mayor del fijado en el segmento de red (típicamente 30).", "Son pasarelas para compatibilizar el tráfico IPv4 y el IPv6.", "Permiten interconectar las redes de diferentes ISP, reduciendo y encaminando de forma eficiente el tráfico que circula entre ellas."], correct: 3 },
    
    { question: "69. La medida Mean Opinion Score (MOS) se utiliza en:", answers: ["La ponderación de alternativas en el método Delphi.", "La calidad de la voz sobre el protocolo VoiP.", "La evaluación de riesgos del método Magerit v2.", "La explotación de almacenes de datos en CRM (Customer Relationship Management)."], correct: 1 },
    
    { question: "70. ¿Cuál de los siguientes protocolos no es un protocolo de correo electrónico?", answers: ["SMTP.", "IMAP.", "POP3.", "Outlook."], correct: 3 },
    
    { question: "71. ¿Para qué se utiliza el protocolo IMAP?", answers: ["Es un protocolo de rastreo de puertos para evaluar la seguridad de los sistemas informáticos", "Es una arquitectura de mensajería utilizada únicamente en sistemas Microsoft Windows", "Es un protocolo de red de acceso a correo electrónico almacenado en un servidor", "Es un protocolo de transferencia de correo entre agentes de transferencia de correo (MTA)"], correct: 2 },
    
    { question: "72. Que afirmación es cierta:", answers: ["La nueva Internet que, técnicamente, soporta IPV7 es conocida como Web 2.0", "El termino WebSemantica es sinónimo de Docencia 2.0", "Internet 2.0 es la evolución tecnológica de Internet.", "La Web 2.0 engloba servicios como: redes sociales, blogs, networking, etc."], correct: 3 }
 
];

