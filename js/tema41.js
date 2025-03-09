const tema41 = [
      
    { question: "01. ¿Cómo se llama en Frame Relay el bit ubicado en el campo de control que indica que una trama puede ser descartada en caso de congestión?", answers: ["DE", "BECN", "DLCI", "FECN"], correct: 0 },
    
    { question: "02. La celda ATM tiene:", answers: ["53 bytes: 5 de cabecera + 48 de datos", "63 bytes: 5 de cabecera + 58 de datos", "5 bytes de cabecera y los datos pueden tener 48 bytes, 58 bytes o 144 bytes", "El tamaño de la celda no es fijo, depende del tipo de información transmitido: voz, vídeo o datos"], correct: 0 },
    
    { question: "03. En redes xDSL, ¿qué protocolos pueden utilizarse en un DSLAM (Digital Subscriber Line Access Multiplexer) de la red de agregación?", answers: ["ATM", "Ethernet", "ATM Y Ethernet", "Ninguna de las anteriores"], correct: 2 },
    
    { question: "04. En ADSL:", answers: ["Se usa fibra óptica para las categorías más altas", "Tiene mayor velocidad de subida hacia la red que de bajada", "La velocidad máxima depende, entre otros parámetros, de la calidad del cable telefónico", "Cuando se transmiten datos, el teléfono asociado no se puede utiliza"], correct: 2 },
    
    { question: "05. En las redes de área extensa, ¿cuál fue el primer protocolo estándar de la red de datos pública?", answers: ["Red de transporte básica", "Frame Relay", "RDSI", "X.25"], correct: 3 },
    
    { question: "06. En las redes de área extensa, de acuerdo con los convenios internacionales, ¿cuál es el protocolo de acceso a la red para conectar un DTE (Equipo terminal de datos) a un PSPDN (packed-swiched red de área pública)?", answers: ["ATM", "X.25", "Frame Relay", "Tecnología xDSL"], correct: 1 },
    
    { question: "07. Cuales son los elementos que utilizan los switches Frame Relay para informar a los DTE acerca de una congestión dentro de la red:", answers: ["CCP y LMI", "CIR y LATE", "DLCI y SPID", "FECN y BECN"], correct: 3 },
    
    { question: "08. ¿Cuál de las siguientes afirmaciones es incorrecta en la tecnología de telecomunicación ATM?", answers: ["Se trata de celdas de 53 bytes", "Cada celda tiene dos campos principales: Header y Payload", "Los canales y rutas virtuales en que se basa están tratados en dos identificadores en la cabecera (VCI y VPI)", "El campo CLP indica el nivel de prioridad de la celda. Si este bit está activo cuando la red ATM está congestionada la celda no puede ser descartada"], correct: 3 },
    
    { question: "09. Cual de los siguientes protocolos especifica los procedimientos para el establecimiento, mantenimiento y liberación de conexiones de red en la interfaz usuario-red de RDSI:", answers: ["ITU-T Q.921", "ITU-T Q.931", "ITU-T I.430", "ITU-T I.431"], correct: 1 },
    
    { question: "10. Se ha solicitado al operador de telecomunicaciones del SCS el alta de una nueva línea de comunicaciones para unir la red del SCS con el Ministerio. El operador nos indica que el coste de la línea depende de los siguientes parámetros: CIR (Commited Information Rate), Bc (Commited Burst Size), EIR (Excess Information Rate) y Be (Excess Burst Size). Teniendo en cuenta estos datos ¿Qué tipo de tecnología estamos contratando para la nueva línea de comunicaciones?", answers: ["RDSI", "ATM", "xDSL", "Frame Relay"], correct: 3 },
    
    { question: "11. ¿Cuál de las siguientes tecnologías utiliza como estructura de datos las \"celdas\"?", answers: ["RDSI", "MPLS", "ATM", "Ethernet"], correct: 2 },
    
    { question: "12. En tecnologías xDSL, ¿cuál de los siguientes dispositivos se utiliza para separar la señal de baja frecuencia (telefonía) de la de alta frecuencia (acceso a Internet)?", answers: ["Splitter", "DSLAM", "Modem", "Cable-Modem"], correct: 0 },
    
    { question: "13. La recomendación ITU-T G.992.3 hace referencia a:", answers: ["ADSL", "VDSL", "ADSL2", "ADSL2+"], correct: 2 },
    
    { question: "14. La longitud de clave que se usa en el cifrado opcional de DECT, el denominado DECT Standard Cipher (DSC) es:", answers: ["32 bits", "64 bits", "128 bits", "256 bits"], correct: 1 },
    
    { question: "15. En ATM se utiliza un tamaño de celda muy pequeño para el transporte y el encaminamiento de la información. La celda ATM tiene:", answers: ["53 bytes: 5 de cabecera + 48 de datos", "63 bytes: 15 de cabecera + 48 de datos", "La celda siempre tiene 5 bytes de cabecera, pero los datos pueden tener 48 bytes, 96 bytes o 144 bytes", "El tamaño de la celda no es fijo, depende del tipo de información transmitido, voz, vídeo o datos"], correct: 0 },
    
    { question: "16. Señala la afirmación INCORRECTA:", answers: ["La tecnología VDSL permite transmisión asimétrica o simétrica", "VDSL utiliza 2 canales para transmisión de datos, uno para subida y el otro para descarga", "La tecnología HFC es una combinación de cable y fibra óptica", "La tecnología FTTH permite que la fibra óptica llegue hasta la casa del cliente"], correct: 1 },
    
    { question: "17. La tecnología Frame Relay implementa mecanismos de notificación de saturación. ¿A qué se corresponde la representada por las siglas FECN?", answers: ["Notificación de saturación fuera de banda", "Notificación de la saturación explícita hacia atrás", "En esta tecnología no se implementan estos mecanismos", "Notificación de congestión explícita hacia delante"], correct: 3 },
    
    { question: "18. El estándar del ADSL2+ (ADSL2 Plus) es:", answers: ["ITU G.993.3", "ITU G.992.4", "ITU G.992.5", "ITU G.993.6"], correct: 2 },
    
    { question: "19. En una Red Digital de Servicios Integrados (RDSI) el acceso básico está compuesto por:", answers: ["2 canales B y 1 canal D", "3 canales B y 2 canales D", "2 canales B y 30 canales D", "30 canales B y 1 canal D"], correct: 0 },
    
    { question: "20. En la red digital de servidos integrados, existen canales no estructurados que resultan de la combinación de varios canales B para transportar datos a velocidades más altas. ¿Qué velocidad alcanza un canal H11?", answers: ["144 Kbps", "2 Mbps", "1280 Kbps", "1536 Kbps"], correct: 3 },
    
    { question: "21. ¿Cuál es la capacidad en Mbps de un E1 ATM?", answers: ["4Mbps", "6Mbps", "100 Mbps", "2Mbps"], correct: 3 },
    
    { question: "22. ¿Cuántos canales B tiene un acceso Primario RDSI?", answers: ["30", "2", "16", "8"], correct: 0 },
    
    { question: "23. Cuál de las siguientes tecnologías de la familia DSL, puede suministrarse de forma simétrica o de forma asimétrica:", answers: ["VDLS", "HDSL", "SDSL", "ADSL2"], correct: 0 },
    
    { question: "24. ¿Cuál de las siguientes afirmaciones es correcta?", answers: ["ATM es una tecnología de conmutación de paquetes no orientada a conexión", "ATM es una tecnología de conmutación de circuitos orientada a conexión", "ATM es una tecnología de conmutación de paquetes orientada a conexión", "ATM es una tecnología de conmutación de circuitos no orientada a conexión"], correct: 2 },
    
    { question: "25. Un microfiltro, utilizado en instalaciones ADSL:", answers: ["Elimina ruido de señal en la toma donde se conecta el router", "Impide la propagación de la señal Wifi al exterior", "Sólo hay que utilizarlos en instalaciones telefónicas antiguas", "Elimina ruido de señal en la toma donde se conecta un terminal telefónico"], correct: 3 },
    
    { question: "26. En función de los parámetros de calidad de servicio y los de tráfico, se definen varios tipos de conexiones ATM. Entre ellas se encuentra, según la especificación TM versión 4.1 del ATM Forum:", answers: ["VBR-NRT (tasa de bit variable sensibles al retardo - \"real time\")", "ABR (tasa de bit constante)", "UBR (tasa de bit disponible)", "GFR (tasa de tramas garantizada)"], correct: 3 },
    
    { question: "27. ¿Cuál de las siguientes afirmaciones es FALSA con respecto a la tecnología ADSL?", answers: ["Permite transmitir el mismo volumen de tráfico cuando estamos transmitiendo y cuando estamos recibiendo datos", "Es la tecnología que ha permitido la expansión de Internet a una mayoría de hogares", "Mediante el filtrado de frecuencias permite conectarse a Internet a la vez que hablamos por teléfono", "El ancho de banda que permite utilizar depende, entre otras cosas, de la distancia que existe entre el punto de abonado y la central telefónica"], correct: 0 },
    
    { question: "28. ¿Cuál es la velocidad máxima de bajada con el estándar G.992.5 (ADSL2+)?", answers: ["10 Mbps", "12 Mbps", "2 Mbps", "24 Mbps"], correct: 3 }
];