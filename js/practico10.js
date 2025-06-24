const practico10 = [
    
    { question: "01. ¿Cuál es la principal diferencia entre una arquitectura SAN y NAS?", answers: ["SAN utiliza protocolos de red IP mientras NAS utiliza Fibre Channel", "SAN proporciona almacenamiento a nivel de bloque, NAS a nivel de archivo", "NAS es más rápido que SAN para aplicaciones de base de datos", "SAN solo funciona con sistemas Windows"], correct: 1 },
    
    { question: "02. ¿Qué velocidad máxima puede alcanzar Fibre Channel de 32ª generación?", answers: ["8 Gbps", "16 Gbps", "32 Gbps", "64 Gbps"], correct: 2 },
    
    { question: "03. En iSCSI, ¿qué término se utiliza para referirse al servidor que proporciona almacenamiento?", answers: ["Initiator", "Target", "Portal", "LUN"], correct: 1 },
    
    { question: "04. ¿Cuál es el puerto TCP por defecto para iSCSI?", answers: ["443", "3260", "8080", "1433"], correct: 1 },
    
    { question: "05. En un sistema RAID 5, ¿cuántos discos pueden fallar sin pérdida de datos?", answers: ["Ninguno", "1 disco", "2 discos", "La mitad de los discos"], correct: 1 },
    
    { question: "06. ¿Qué nivel de RAID ofrece el mejor rendimiento de escritura?", answers: ["RAID 1", "RAID 5", "RAID 6", "RAID 0"], correct: 3 },
    
    { question: "07. ¿Qué significa el término 'hot spare' en sistemas de almacenamiento?", answers: ["Un disco de alta temperatura", "Un disco de reserva que se activa automáticamente ante fallos", "Un disco con ventilación especial", "Un disco que solo funciona en caliente"], correct: 1 },
    
    { question: "08. En multipathing, ¿cuál es el objetivo principal?", answers: ["Aumentar la capacidad de almacenamiento", "Reducir el coste del sistema", "Proporcionar redundancia y balanceo de carga en las rutas", "Simplificar la configuración"], correct: 2 },
    
    { question: "09. ¿Qué es un LUN en el contexto de almacenamiento?", answers: ["Local Unit Network", "Logical Unit Number", "Linear Unit Node", "Large Unit Namespace"], correct: 1 },
    
    { question: "10. ¿Cuál es la principal ventaja de RAID 6 sobre RAID 5?", answers: ["Mayor velocidad de escritura", "Menor coste por GB", "Tolerancia a fallos de hasta 2 discos", "Menor latencia"], correct: 2 },
    
    { question: "11. En una arquitectura SAN, ¿qué dispositivo se utiliza para conectar múltiples hosts y dispositivos de almacenamiento?", answers: ["Router", "Switch SAN", "Gateway", "Hub"], correct: 1 },
    
    { question: "12. ¿Qué protocolo utiliza NAS tradicionalmente para compartir archivos en redes Windows?", answers: ["NFS", "FTP", "SMB/CIFS", "HTTP"], correct: 2 },
    
    { question: "13. ¿Cuál es el tamaño máximo de trama en Fibre Channel?", answers: ["1500 bytes", "2148 bytes", "4096 bytes", "9000 bytes"], correct: 1 },
    
    { question: "14. En iSCSI, ¿qué es un IQN?", answers: ["Internet Quality Name", "iSCSI Qualified Number", "iSCSI Qualified Name", "Internal Queue Number"], correct: 2 },
    
    { question: "15. ¿Qué significa MPIO en sistemas de almacenamiento?", answers: ["Multiple Path Input Output", "Multiple Protocol Internet Operations", "Maximum Performance Input Output", "Multi-Platform Integration Operations"], correct: 0 },
    
    { question: "16. ¿Cuál es la diferencia principal entre un snapshot y un backup?", answers: ["Los snapshots son más lentos que los backups", "Los snapshots ocupan más espacio que los backups", "Los snapshots son copias instantáneas que comparten espacio con el original", "No hay diferencia, son términos sinónimos"], correct: 2 },
    
    { question: "17. En replicación síncrona, ¿cuándo se confirma la escritura al host?", answers: ["Inmediatamente tras escribir en el almacenamiento primario", "Tras escribir en ambos almacenamientos (primario y secundario)", "Cada 5 minutos", "Solo tras escribir en el almacenamiento secundario"], correct: 1 },
    
    { question: "18. ¿Qué es la virtualización del almacenamiento?", answers: ["Crear máquinas virtuales en el almacenamiento", "Abstraer los recursos físicos de almacenamiento para presentarlos como un pool lógico", "Comprimir los datos almacenados", "Encriptar todos los datos"], correct: 1 },
    
    { question: "19. ¿Cuál es el objetivo principal del thin provisioning?", answers: ["Aumentar la velocidad de acceso", "Asignar espacio físico solo cuando se utiliza realmente", "Crear copias de seguridad automáticas", "Mejorar la seguridad de los datos"], correct: 1 },
    
    { question: "20. En FC-AL (Fibre Channel Arbitrated Loop), ¿cuántos dispositivos pueden conectarse máximo?", answers: ["16", "64", "126", "256"], correct: 2 },
    
    { question: "21. ¿Qué es un volume en sistemas de almacenamiento?", answers: ["El control de sonido del sistema", "Una unidad lógica de almacenamiento que puede abarcar múltiples discos físicos", "Un tipo específico de disco duro", "Un protocolo de comunicación"], correct: 1 },
    
    { question: "22. ¿Cuál es la principal ventaja de usar SSD sobre HDD en sistemas de altas prestaciones?", answers: ["Mayor capacidad", "Menor coste por GB", "Menor latencia y mayor IOPS", "Mayor durabilidad física"], correct: 2 },
    
    { question: "23. En replicación asíncrona, ¿cuál es el principal riesgo?", answers: ["Mayor consumo de ancho de banda", "Posible pérdida de datos en caso de fallo (RPO > 0)", "Menor rendimiento del sistema primario", "Mayor complejidad de configuración"], correct: 1 },
    
    { question: "24. ¿Qué significa RPO en sistemas de almacenamiento?", answers: ["Recovery Point Objective", "Replication Performance Optimization", "RAID Protection Operations", "Remote Procedure Operations"], correct: 0 },
    
    { question: "25. ¿Qué significa RTO en sistemas de almacenamiento?", answers: ["RAID Time Operations", "Recovery Time Objective", "Real Time Operations", "Remote Target Operations"], correct: 1 },
    
    { question: "26. En un sistema de almacenamiento, ¿qué es el cache hit ratio?", answers: ["El porcentaje de fallos de cache", "El porcentaje de accesos que encuentran los datos en cache", "El tiempo medio de acceso al cache", "El tamaño del cache en MB"], correct: 1 },
    
    { question: "27. ¿Cuál es la función principal de un storage controller?", answers: ["Solo gestionar las interfaces de red", "Gestionar las operaciones de I/O, cache, y funcionalidades avanzadas", "Únicamente controlar la alimentación eléctrica", "Solo gestionar la refrigeración del sistema"], correct: 1 },
    
    { question: "28. En RAID 10, ¿cuál es el mínimo número de discos necesarios?", answers: ["2 discos", "3 discos", "4 discos", "5 discos"], correct: 2 },
    
    { question: "29. ¿Qué es el deduplication en sistemas de almacenamiento?", answers: ["Duplicar los datos para mayor seguridad", "Eliminar copias duplicadas de datos para ahorrar espacio", "Crear índices de los datos", "Comprimir los archivos automáticamente"], correct: 1 },
    
    { question: "30. En iSCSI, ¿qué es CHAP?", answers: ["Un protocolo de enrutamiento", "Un mecanismo de autenticación", "Un tipo de compresión", "Un formato de datos"], correct: 1 },
    
    { question: "31. ¿Cuál es la principal diferencia entre scale-up y scale-out en almacenamiento?", answers: ["Scale-up es más barato que scale-out", "Scale-up añade recursos a un sistema existente, scale-out añade más sistemas", "Scale-out solo funciona con SAN", "No hay diferencia práctica"], correct: 1 },
    
    { question: "32. ¿Qué es un storage pool?", answers: ["Una piscina donde se almacenan los discos", "Un conjunto de recursos de almacenamiento físico agrupados lógicamente", "Un tipo específico de RAID", "Un protocolo de comunicación"], correct: 1 },
    
    { question: "33. En monitorización de almacenamiento, ¿qué métrica indica IOPS?", answers: ["Input/Output Per Second", "Internet Operations Per Second", "Internal Operations Processing Speed", "Integrated Output Processing System"], correct: 0 },
    
    { question: "34. ¿Qué es el wear leveling en SSDs?", answers: ["Un sistema de refrigeración", "Una técnica para distribuir las escrituras uniformemente", "Un método de compresión", "Un protocolo de comunicación"], correct: 1 },
    
    { question: "35. En Fibre Channel, ¿qué es un WWPN?", answers: ["World Wide Port Name", "Wide World Protocol Number", "Wireless World Port Network", "World Wide Protocol Name"], correct: 0 },
    
    { question: "36. ¿Cuál es la función del zoning en SAN?", answers: ["Dividir el ancho de banda", "Controlar qué dispositivos pueden comunicarse entre sí", "Gestionar la temperatura", "Comprimir los datos"], correct: 1 },
    
    { question: "37. ¿Qué es el tiering automático en sistemas de almacenamiento?", answers: ["Un tipo de RAID especial", "Mover datos automáticamente entre diferentes tipos de almacenamiento según su uso", "Un protocolo de respaldo", "Un sistema de monitorización"], correct: 1 },
    
    { question: "38. En sistemas de almacenamiento, ¿qué significa QoS?", answers: ["Quality of Storage", "Queue of Services", "Quality of Service", "Quick Operations System"], correct: 2 },
    
    { question: "39. ¿Cuál es la principal limitación de RAID 0?", answers: ["Baja velocidad de lectura", "Alto coste", "No proporciona tolerancia a fallos", "Compleja configuración"], correct: 2 },
    
    { question: "40. En virtualización de almacenamiento, ¿qué es un hypervisor?", answers: ["Un tipo de disco duro especial", "Software que gestiona máquinas virtuales y sus recursos de almacenamiento", "Un protocolo de red", "Un sistema de monitorización específico"], correct: 1 }
];