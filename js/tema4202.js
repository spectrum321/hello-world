const tema4202 = [
    
	
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

