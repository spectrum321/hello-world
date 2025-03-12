const tema47 = [
      
    { question: "01. Los sistemas de gestión de incidencias permiten llevar un seguimiento y control de incidencias. Señala la afirmación correcta:", answers: ["Pudiendo en todo momento conocer el estado de las mismas e información de su carácter (Urgente, Normal, Bajo) y la fecha de cada notificación o actuación. Pueden combinar más de una forma de comunicación: correo electrónico, chats, acceso remoto, etc.", "Solo atienden fallos y peticiones relativas a software informático. Estas incidencias se comunican a través del correo electrónico.", "Algunos de los programas de gestión de incidencias más conocidos son: Lotus Notes, VNC y Kayako Fusion.", "El técnico que abre la incidencia o ticket, debe verificar que la información recibida del usuario es correcta y él es el responsable de solucionarlo y cerrarlo cuando esté resuelto."], correct: 0 },
    
    { question: "02. En el software Terminal Server de Microsoft el protocolo utilizado para comunicar cliente y servidor es:", answers: ["B, C, y D son falsas.", "RDSI", "RDP", "X.25"], correct: 2 },
    
    { question: "03. Respecto a productos de virtualización, señale la afirmación falsa:", answers: ["Virtual Box es una solución de virtualización de Oracle.", "Hyper-V es una solución de virtualización de Microsoft.", "La distribución de GNU/Linux Red Hat mantiene una infraestructura de virtualización para el kernel de Linux.", "VMWare Player es una solución de virtualización de escritorio gratuita y de fuentes abiertas de VMWare."], correct: 3 },
    
    { question: "04. Una incidencia es:", answers: ["Una situación que sobreviene al normal funcionamiento de un sistema informático", "Una situación que se da cuando se produce una migración a un sistema distinto", "Una situación que se da cuando se produce un cambio de versión", "Una situación que se da siempre que se produce una queja de un usuario"], correct: 0 },
    
    { question: "05. El protocolo de terminales virtuales en ARPANET se llama:", answers: ["VNC", "RDP", "TELNET", "VTP"], correct: 2 },
    
    { question: "06. En virtualización por procesadores:", answers: ["IVT es la tecnología utilizada por Intel", "RadixV es la tecnología utilizada por AMD", "no existe virtualización por procesadores", "las respuestas a y b son correctas"], correct: 0 },
    
    { question: "07. En virtualización de escritorios, un broker es:", answers: ["un sistema que permite gestionar las conexiones para facilitar el aprovisionamiento de maquinas virtuales", "el nombre que recibe un hypervisor de tipo 2", "cualquier error que provoque la desconexión entre el servidor y el cliente que esta utilizando una maquina virtual", "un software de virtualización para el sistema operativo MAC OS X"], correct: 0 },
    
    { question: "08. En una organización que ha implantado ITIL, ha ocurrido un incidente informático grave. El equipo asignado para solucionarlo no puede resolverlo en el tiempo acordado. Se llama al Gestor de Incidentes. ¿Qué forma de escalado implica esta situación?", answers: ["Escalado formal", "Escalado funcional", "Escalado jerárquico", "Escalado operacional"], correct: 2 },
    
    { question: "09. En ITIL, ¿qué otro término se usa para el concepto Tiempo de disponibilidad (Uptime)?", answers: ["Tiempo Medio Entre Fallos (MTBF)", "Tiempo Medio de Reparación (MITR)", "Tiempo Medio Entre Incidentes del Sistema (MTBSI)", "Relación entre MTBF y MTBSI"], correct: 0 },
    
    { question: "10. ¿Cuál de los siguientes NO es un producto de virtualización?", answers: ["Virtual PC", "XEN", "Atheros", "VirtualBox"], correct: 2 },
    
    { question: "11. La virtualización de ordenadores consiste en:", answers: ["Simular N máquinas virtuales sobre una real, multiplicando por N la CPU y la memoria total.", "Que al hacer login el usuario, se cargue automáticamente el último ordenador virtual que usó.", "Simular varias máquinas virtuales en una real, a costa de compartir los recursos.", "Ejecutar programas de una arquitectura de procesador diferente a la nativa, emulándolo."], correct: 2 },
    
    { question: "12. Si un equipo tiene una avería ¿cuál de los siguientes indicadores nos da información sobre el tiempo medio requerido para reparar dicha avería?", answers: ["MTBF", "MTBR", "MTTR", "MTTF"], correct: 2 },
    
    { question: "13. Un objetivo de utilizar servidores virtuales en los servidores físicos es:", answers: ["Reducir el consumo de memoria en el servidor físico subyacente (host)", "Reducir el consumo de corriente al ser menor el número de equipos físicos necesarios en el CPD", "Mejorar el soporte a aplicaciones de tiempo real", "Poder conectar desde el exterior de la red privada a los escritorios virtuales de los usuarios"], correct: 1 },
    
    { question: "15. La evolución de la tecnología de computación ha creado numerosos tipos de elementos, uno de ellos son las denominadas máquinas virtuales. Pero ¿qué tipo de elemento es exactamente?", answers: ["Físico.", "Lógico.", "Java.", "Las tres anteriores son ciertas."], correct: 1 },
    
    { question: "16. ¿Qué significa el término virtualización referido a sistemas operativos?", answers: ["Es cuando mediante un software especial se simula una máquina virtual donde es posible instalar otro sistema operativo que funciona como si estuviera en una máquina autónoma.", "Es cuando el sistema operativo ofrece a las aplicaciones más memoria RAM de la que realmente tiene el sistema, utilizando habitualmente mecanismos de paginación.", "Es cuando el sistema operativo, en ciertas CPUs que lo permiten, ejecuta las aplicaciones en múltiples hilos en paralelo, haciendo creer a las aplicaciones que cuentan con varios procesadores.", "Es cuando en un sistema de múltiples procesadores, éstos se agrupan de forma lógica, de modo que las aplicaciones ven un único procesador mucho más rápido."], correct: 0 },
    
    { question: "17. Según ITIL v3, el objetivo del proceso de Gestión de Incidencias es:", answers: ["Evitar que los incidentes se repitan en el futuro.", "Hacer lo que piden los usuarios.", "Volver a la situación normal lo antes posible.", "Enseñar a los usuarios a resolver sus incidentes y problemas."], correct: 2 },
    
    { question: "18. Cuál de las siguientes NO es descrita como una Función sino como un Proceso en ITIL?", answers: ["Gestión Técnica.", "Gestión de Portafolio de Servicios.", "Centro de Soporte.", "Gestión de Aplicaciones."], correct: 1 },
    
    { question: "19. La técnica de llamadas a procedimientos remotos se conoce mediante las siglas:", answers: ["LLPR", "RPC", "RPR", "CPC"], correct: 1 },
    
    { question: "20. Utilizando System Center 2012 Configuration Manager ¿es posible instalar y desinstalar software en ordenadores de manera remota?", answers: ["No, es una herramienta para administrar controladores de dominio.", "Sí.", "Sólo en servidores.", "Sólo instalar."], correct: 1 },

    { question: "21. Es una herramienta para virtualizar un equipo:", answers: ["Jaikoz", "Websphere", "Toad", "VirtualBox"], correct: 3 },
    
    { question: "22. Indique cuál de los siguientes es un documento mínimo reclamado por la ISO 22301 de gestión de la continuidad del negocio:", answers: ["Procedimiento para el control de la información documentada", "Estructura de respuesta a incidentes", "Los contratos y acuerdos de nivel de servicio con los proveedores", "Formación y plan de sensibilización"], correct: 1 },
    
    { question: "23. ¿Cuál de los siguientes procesos de ITIL se asocia a la fase de Operación del Servicio?", answers: ["Gestión de Problemas", "Gestión de Proveedores", "Gestión de la Disponibilidad", "Gestión de la Capacidad"], correct: 0 },
    
    { question: "24. ¿Qué secuencia de eventos es la correcta en ITIL?", answers: ["Incidente, Error Conocido, Problema, RFC", "Error Conocido, Incidente, Problema, RFC", "RFC, Incidente, Problema, Error Conocido", "Incidente, Problema, Error Conocido, RFC"], correct: 3 },
    
    { question: "25. EI Departamento de Redes de una organización que aplica ITIL ha llegado a un acuerdo con una organización extema. ¿Cuál de los siguientes documentos lo plasmará?", answers: ["OLA (Acuerdo de Nivel Operacional)", "SLA (Acuerdo de Nivel de Servicio)", "SLR (Service level Requierements)", "UC (Underpinning Contract)"], correct: 3 },
    
    { question: "26. ¿Cuál es la diferencia entre un Error Conocido y un problema según ITIL?", answers: ["En el caso de un Error Conocido se conoce la causa fundamental; en un Problema, no", "En el caso de un Error Conocido se trata de un error en la infraestructura de TI; en un Problema, no", "Un Error Conocido siempre se deriva de un Incidente; esto no siempre es el caso con un Problema", "En el caso de un Problema, los Elementos de Configuración implicados han sido identificados; este no es el caso de un Error Conocido"], correct: 0 },
    
    { question: "27. Una CMDB puede contener diferentes Elementos de Configuración (Cls). ¿Cual de estos elementos NO se considera normalmente un CI?", answers: ["Monitor", "Modem", "Número de serie", "Disco duro"], correct: 2 },
    
    { question: "28. ¿Qué significa y para que sirve la CMDB?", answers: ["Configuration Maintenance Database, se usa para registrar todo mantenimiento de elementos de configuración (CI's) y sus relaciones con otros elementos", "Continuity Management Database, se usa para registrar todos los detalles pertenecientes a la Gestión de Continuidad del Servicio IT", "Configuration Management Database, se usa para registrar toda la información relativa a elementos de configuración (CI's) y sus relaciones con otros elementos", "Continuity Maintenance Database, se usa para registrar toda la información relativa a Mantenimiento de Continuidad del Servicio IT, incluyendo mantenimiento preventivo"], correct: 2 },
];