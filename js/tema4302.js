const tema4302 = [
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
 
