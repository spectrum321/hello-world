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
    
    { question: "42. Para garantizar la seguridad y confidencialidad de los mensajes enviados y recibidos entre remitente y destinatario, un servidor de correo electrónico deberá permitir el uso de las siguientes tecnologías:", answers: ["POP3 e IMAP, ya que implementan en sus protocolos medidas de seguridad necesarias para garantizar la confidencialidad de los intervinientes en la comunicación.", "En el caso de acceso vía web al correo electrónico debe considerarse obligatorio el uso de SSL/TLS tanto para la autenticación del usuario como para la sesión en general.", "POP3S e IMAPS, que no son más que la denominación de los protocolos clásicos pero a través de túneles de cifrado SSL.", "Herramientas de cifrado de clave pública como PGP o su variante de código abierto GPG."], correct: 3 }

];

