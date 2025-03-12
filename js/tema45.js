const tema45 = [
        
    { question: "01. ¿Cuál de las siguientes afirmaciones es INCORRECTA?", answers: ["Las VLANs son dominios de broadcast separados, por lo tanto, no se pueden comunicar directamente.", "Normalmente, cada VLAN se corresponde con una subred.", "La comunicación entre VLANs se hace a través de un router.", "La conexión entre los switches VLAN y el router se hace normalmente mediante enlaces de baja capacidad."], correct: 3 },
    
    { question: "02. En IPSec se conoce como \"Asociación de seguridad\" a:", answers: ["La relación entre dos o más entidades que describe cómo éstas utilizarán los servicios de seguridad para comunicarse de forma segura", "Servicios de seguridad y autenticación que incluyen mecanismos de firma digital o funciones resumen con clave", "Servicios de confidencialidad, integridad y autenticación que incluyen mecanismos de cifrado, firma digital o funciones resumen con clave", "Protocolo en dos fases para el intercambio seguro de claves"], correct: 0 },
    
    { question: "03. Cuando en movilidad necesitamos usar recursos de la empresa, se hace a través de una Red Privada Virtual (VPN). ¿Cuál de estas afirmaciones es cierta?", answers: ["El algoritmo de cifrado «Advanced Encryption Standard» (AES) asegura la integridad de los datos enviados.", "El algoritmo de hash «Secure Hash Algorithm» (SHA) asegura la confidencialidad de los datos enviados.", "El protocolo de seguridad SSL opera en la capa de sesión (nivel 5 de OSI) por lo que permite que las aplicaciones lo usen sin tener que modificarse.", "El protocolo de seguridad IPsec opera en la capa de red (nivel 3 de OSI) por lo que permite que las aplicaciones lo usen sin tener que modificarse."], correct: 3 },
    
    { question: "04. ¿Qué caracteriza una VLAN?", answers: ["Una VLAN es una LAN virtual con un único dominio de broadcast.", "Una VLAN es una LAN virtual con un único dominio de colisión.", "Una VLAN es una LAN virtual que permite establecer una RPV a través de Internet.", "Una VLAN es una LAN virtual capaz de enrutar diferentes LANs."], correct: 0 },
    
    { question: "05. En una Red Privada Virtual (RPV) con IPSEC, ¿cuál de los siguientes protocolos se utiliza para establecer las asociaciones de seguridad y generar las claves criptográficas iniciales?", answers: ["SSL.", "IKE/ISAKMP", "TSL/SSL", "ESP/AH"], correct: 1 },
    
    { question: "06. ¿Cuál de las siguientes afirmaciones acerca de las Redes Privadas Virtuales es falsa?", answers: ["Habitualmente distinguimos entre dos tipos de RPV: de acceso remoto, para dar acceso a un usuario que se conectan a la oficina desde lugares remotos, y site to site, para interconectar de manera permanente dos sedes de una misma compañía.", "Para incrementar la seguridad de la RPV, el usuario remoto puede acceder utilizando certificados digitales.", "Dos de los protocolos más habituales para establecer RPVs son IPSEC y SSL.", "La RPV ofrecen un mejor rendimiento debido a que encapsulan el tráfico en una nueva cabecera IP."], correct: 3 },
    
    { question: "07. Indica qué protocolo de autenticación de los siguientes No se puede usar en una conexión VPN utilizando L2TP:", answers: ["MS-CHAP", "CHAP", "TPAP", "PAP"], correct: 2 },
    
    { question: "08. En el entorno de servicios VPN, ¿cuál de los siguientes es un protocolo que se utiliza específicamente para la autenticación de usuarios entre el servidor VPN y la base de datos de usuarios?", answers: ["PL/SQL", "WPA", "RADIUS", "SHA-1"], correct: 2 },
    
    { question: "09. Se le plantea la necesidad de unir dos sedes situadas en ciudades distintas vía telemática, intentando minimizar los costes y con nivel de seguridad similar al que se obtendría al unirlas físicamente por cable. ¿Cuál de estas soluciones escogería?", answers: ["Contratación a un operador de telecomunicaciones de líneas de comunicación dedicadas.", "Uso de firewalls y tecnologías VPN a través de Internet.", "Creación de una red interconexión LAN-MAN entre ambas sedes.", "Uso de proxies de comunicaciones a través de una red MAN."], correct: 1 },
    
    { question: "10. ¿Cuál de los siguientes es un protocolo de tunneling?", answers: ["MLTP: Multi Level Tunneling Protocol", "SSL: Secure Sockets Layer", "L2PP: Layer 2 Private Protocol", "GRE: Generic Routing Encapsulation"], correct: 3 },

    { question: "11. De entre los siguientes, ¿qué protocolo es utilizado para implantar Redes Privadas Virtuales?", answers: ["ARP", "IPSEC", "RARP", "TCP"], correct: 1 },
    
    { question: "12. Indique la afirmación correcta respecto a VPLS:", answers: ["Sólo permite establecer enlaces VPN punto a punto.", "Ofrece un servicio VPN de capa 4.", "Permite establecer Calidad de Servicio (QoS) utilizando el campo EXP.", "Sólo es útil en un contexto LAN."], correct: 2 },
    
    { question: "13. Indique la respuesta FALSA, respecto al protocolo IPSEC:", answers: ["El protocolo IPSEC AH garantiza integridad y autenticación, pero no confidencialidad.", "El protocolo IPSEC ESP utiliza el número de protocolo 50 en la cabecera IP.", "IPSEC utiliza IKE como protocolo de intercambio de claves.", "IPSEC ESP es incompatible con el modo transporte, sólo se puede utilizar en modo túnel."], correct: 3 }
];