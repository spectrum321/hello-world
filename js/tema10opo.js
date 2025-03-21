const tema10opo = [
    
    { question: "02. NAS es un sistema de almacenamiento:", answers: ["Conectado directamente al servidor", "Conectado a la red", "Exclusivo para backups", "Conectado a través de USB"], correct: 1 },
    
    { question: "03. ¿Cuál de los siguientes NO es un protocolo utilizado en redes SAN?", answers: ["Fibre Channel", "iSCSI", "FCoE", "SAMBA"], correct: 3 },
    
    { question: "04. La principal diferencia entre SAN y NAS es:", answers: ["SAN es más rápido que NAS", "NAS presenta sistemas de archivos mientras SAN presenta almacenamiento en bloque", "SAN es más barato que NAS", "NAS solo funciona con Linux"], correct: 1 },
    
    { question: "05. ¿Qué protocolo utiliza Fibre Channel?", answers: ["TCP/IP", "SCSI", "FCP (Fibre Channel Protocol)", "NFS"], correct: 2 },
    
    { question: "06. La velocidad estándar actual de Fibre Channel es:", answers: ["8 Gbps", "16 Gbps", "32 Gbps", "64 Gbps"], correct: 2 },
    
    { question: "07. iSCSI es un protocolo que:", answers: ["Permite ejecutar comandos SCSI sobre TCP/IP", "Es exclusivo de sistemas IBM", "Requiere hardware especializado", "Solo funciona en redes Ethernet de 1 Gbps"], correct: 0 },
    
    { question: "08. ¿Cuál de las siguientes tecnologías NO es un ejemplo de almacenamiento tolerante a fallos?", answers: ["RAID", "Multipathing", "Clustering", "JBOD simple"], correct: 3 },
    
    { question: "09. El término 'Multipathing' en almacenamiento se refiere a:", answers: ["Múltiples caminos de acceso a los datos para redundancia", "Múltiples sistemas RAID", "Múltiples copias de los datos", "Múltiples cabinas de almacenamiento"], correct: 0 },
    
    { question: "10. En un sistema con Multipathing activo, si una ruta falla:", answers: ["Todo el sistema deja de funcionar", "Los datos se pierden", "El sistema conmuta automáticamente a otra ruta", "Se debe reiniciar el sistema"], correct: 2 },
    
    { question: "11. Un RAID 5 ofrece:", answers: ["Solo redundancia sin distribución", "Distribución sin redundancia", "Distribución con redundancia", "Doble redundancia"], correct: 2 },
    
    { question: "12. ¿Cuál de los siguientes RAID ofrece la mejor protección contra fallos?", answers: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"], correct: 3 },
    
    { question: "13. Un volumen lógico es:", answers: ["Lo mismo que un disco físico", "Una partición física de un disco", "Una abstracción que puede incluir espacio de varios discos físicos", "Exclusivamente una partición de sistema"], correct: 2 },
    
    { question: "14. LUN significa:", answers: ["Local Unit Number", "Logical Unit Number", "Large Unit Network", "Logical Universal Node"], correct: 1 },
    
    { question: "15. En el contexto de almacenamiento, una LUN es:", answers: ["Un disco físico", "Un dispositivo de almacenamiento presentado a un servidor", "Un tipo de RAID", "Un protocolo de red"], correct: 1 },
    
    { question: "16. Una snapshot es:", answers: ["Una fotografía del centro de datos", "Una copia completa de los datos", "Una imagen del estado del sistema en un momento determinado", "Un tipo de RAID"], correct: 2 },
    
    { question: "17. La principal ventaja de las snapshots es:", answers: ["Ocupan el mismo espacio que los datos originales", "Son más rápidas que un backup tradicional", "Son siempre más seguras", "Solo funcionan en sistemas Unix"], correct: 1 },
    
    { question: "18. La replicación síncrona:", answers: ["Confirma la escritura después de que se complete en ambos sitios", "Confirma la escritura solo en el sitio principal", "Es más rápida que la asíncrona", "No garantiza la consistencia de datos"], correct: 0 },
    
    { question: "19. La virtualización del almacenamiento permite:", answers: ["Reducir costos eliminando la necesidad de discos físicos", "Gestionar distintos sistemas de almacenamiento como si fueran uno solo", "Aumentar la velocidad de todos los discos", "Eliminar la necesidad de RAID"], correct: 1 },
    
    { question: "20. ¿Qué protocolo se utiliza comúnmente en sistemas NAS?", answers: ["iSCSI", "FCP", "NFS/CIFS", "FC-AL"], correct: 2 },
    
    { question: "21. En una SAN con Fibre Channel, los conmutadores se denominan:", answers: ["Routers FC", "FC Switches", "FC Hubs", "FC Bridges"], correct: 1 },
    
    { question: "22. El WWN (World Wide Name) en Fibre Channel es equivalente a:", answers: ["Una dirección IP", "Una dirección MAC", "Un nombre de host", "Un número de serie"], correct: 1 },
    
    { question: "23. ¿Cuál es la principal ventaja de iSCSI frente a Fibre Channel?", answers: ["Mayor velocidad", "Mayor seguridad", "Menor costo al utilizar infraestructura Ethernet existente", "Mayor compatibilidad con sistemas antiguos"], correct: 2 },
    
    { question: "24. Un RAID Group es:", answers: ["Un conjunto de discos configurados con el mismo nivel RAID", "Un grupo de administradores de RAID", "Un software para gestionar RAID", "Un protocolo de comunicación entre RAIDs"], correct: 0 },
    
    { question: "25. La diferencia entre replicación síncrona y asíncrona es:", answers: ["La síncrona consume menos ancho de banda", "La asíncrona confirma la escritura inmediatamente", "La síncrona confirma la escritura solo cuando se completa en todos los sitios", "No hay diferencia real entre ambas"], correct: 2 },
    
    { question: "26. El 'thin provisioning' permite:", answers: ["Asignar más espacio del físicamente disponible", "Reducir el espacio de almacenamiento necesario", "Aumentar la velocidad de acceso", "Mejorar la seguridad de los datos"], correct: 0 },
    
    { question: "27. En el contexto de monitorización de almacenamiento, SNMP es:", answers: ["Un protocolo de almacenamiento", "Un protocolo de gestión de red", "Un tipo de conexión física", "Un sistema operativo para SANs"], correct: 1 },
    
    { question: "28. La deduplicación es una técnica que:", answers: ["Elimina archivos duplicados", "Elimina bloques de datos redundantes", "Comprime todos los archivos", "Encripta los datos para ahorrar espacio"], correct: 1 },
    
    { question: "29. FCoE significa:", answers: ["Fibre Channel over Ethernet", "Fast Connection over Ethernet", "Fibre Channel over Express", "Fast Channel over Ether"], correct: 0 },
    
    { question: "30. El zoning en una SAN se utiliza para:", answers: ["Asignar direcciones IP", "Limitar el acceso a recursos específicos", "Aumentar la velocidad de transferencia", "Comprimir datos"], correct: 1 },
    
    { question: "31. Una cabina de almacenamiento all-flash:", answers: ["Utiliza exclusivamente memoria RAM", "Utiliza exclusivamente discos SSD", "Es un tipo de cinta magnética", "Es más lenta que los discos mecánicos"], correct: 1 },
    
    { question: "32. El RPO (Recovery Point Objective) en sistemas de replicación se refiere a:", answers: ["La velocidad de recuperación", "El tiempo máximo permitido para recuperar sistemas", "La cantidad máxima de datos que se pueden perder", "El número de puntos de recuperación"], correct: 2 },
    
    { question: "33. En una configuración RAID 10:", answers: ["Se combinan striping y mirroring", "Se utilizan 10 discos como mínimo", "Se obtiene el 100% de capacidad utilizable", "No hay redundancia de datos"], correct: 0 },
    
    { question: "34. La tecnología MPIO (Multipath I/O) proporciona:", answers: ["Mayor capacidad de almacenamiento", "Redundancia en las rutas de acceso al almacenamiento", "Mayor velocidad de procesamiento", "Capacidad de comprimir datos"], correct: 1 },
    
    { question: "35. ¿Qué componente NO forma parte típicamente de una SAN?", answers: ["HBA (Host Bus Adapter)", "Switch FC", "Array de discos", "Router de Internet"], correct: 3 },
    
    { question: "36. La tecnología de auto-tiering en almacenamiento:", answers: ["Realiza copias de seguridad automáticas", "Mueve datos entre diferentes tipos de discos según su uso", "Encripta automáticamente todos los datos", "Comprime todos los archivos"], correct: 1 },
    
    { question: "37. Un sistema de almacenamiento definido por software (SDS):", answers: ["No requiere hardware", "Separa el hardware del software de gestión", "Solo funciona con cierto hardware propietario", "Es exclusivo de entornos virtualizados"], correct: 1 },
    
    { question: "38. ALUA (Asymmetric Logical Unit Access) es:", answers: ["Un tipo de RAID", "Un protocolo de replicación", "Un método para gestionar rutas activas/pasivas", "Un sistema de encriptación"], correct: 2 },
    
    { question: "39. El término 'Split Brain' en sistemas de almacenamiento se refiere a:", answers: ["Una técnica de particionado de datos", "Un problema donde dos nodos creen ser el principal", "Un método de encriptación", "Una tecnología de compresión"], correct: 1 },
    
    { question: "40. La diferencia principal entre un NAS y un servidor de archivos tradicional es:", answers: ["El NAS es más caro", "El NAS es un dispositivo dedicado optimizado para compartir archivos", "El NAS solo funciona con ciertos sistemas operativos", "El NAS no puede ser utilizado en redes pequeñas"], correct: 1 },
    
    { question: "41. El 'Distributed File System' (DFS) permite:", answers: ["Eliminar la necesidad de backups", "Centralizar el acceso a archivos distribuidos en múltiples servidores", "Aumentar la velocidad de todos los discos", "Reducir el tamaño de los archivos"], correct: 1 },
    
    { question: "42. La tecnología VAAI (vStorage API for Array Integration):", answers: ["Es exclusiva de sistemas HP", "Permite que ciertas operaciones de almacenamiento se deleguen directamente a la cabina", "Aumenta el tamaño máximo de LUN", "Es un protocolo de replicación"], correct: 1 },
    
    { question: "43. En un entorno con replicación de datos, el sistema que realiza copias de otro se denomina:", answers: ["Master", "Primary", "Secondary", "Target"], correct: 3 },
    
    { question: "44. ¿Cuál de los siguientes NO es un tipo de snapshot?", answers: ["Copy-on-write", "Redirect-on-write", "Split mirror", "Overwrite-on-demand"], correct: 3 },
    
    { question: "45. La principal desventaja de RAID 5 es:", answers: ["No ofrece redundancia", "El bajo rendimiento en escrituras aleatorias", "El alto costo", "La limitación a solo 5 discos"], correct: 1 },
    
    { question: "46. Un sistema de almacenamiento hiperconvergente:", answers: ["Separa cómputo y almacenamiento", "Integra cómputo, almacenamiento y virtualización", "Solo se enfoca en almacenamiento de alta capacidad", "Es un tipo de cinta magnética avanzada"], correct: 1 },
    
    { question: "47. La 'write penalty' se refiere a:", answers: ["Un costo monetario por escribir datos", "El rendimiento reducido en escrituras en ciertos tipos de RAID", "Una limitación en el número de escrituras", "Un error común en sistemas de almacenamiento"], correct: 1 },
    
    { question: "48. Un HBA (Host Bus Adapter) es:", answers: ["Un tipo de disco duro", "Una tarjeta que conecta el servidor a la SAN", "Un software de gestión", "Un protocolo de comunicación"], correct: 1 },
    
    { question: "49. El 'fan-in ratio' en almacenamiento se refiere a:", answers: ["La relación entre servidores y dispositivos de almacenamiento", "La velocidad de los ventiladores en el sistema", "El tiempo de respuesta del sistema", "La tasa de transferencia máxima"], correct: 0 },
    
    { question: "50. ¿Qué significan las siglas LVM?", answers: ["Large Volume Manager", "Logical Volume Manager", "Linear Virtual Memory", "Linked Volume Module"], correct: 1 },
    
    { question: "51. La tecnología CDP (Continuous Data Protection):", answers: ["Es un tipo de RAID", "Permite restaurar datos a cualquier punto en el tiempo", "Solo funciona con ciertos sistemas operativos", "Es un tipo de cable de conexión"], correct: 1 },
    
    { question: "52. En almacenamiento, QoS (Quality of Service) permite:", answers: ["Mejorar la calidad de los discos", "Garantizar ciertos niveles de rendimiento a aplicaciones específicas", "Reducir el consumo energético", "Aumentar la capacidad de almacenamiento"], correct: 1 },
    
    { question: "53. El término 'hot spare' se refiere a:", answers: ["Un disco de repuesto activo listo para reemplazar uno que falle", "Un servidor caliente", "Una copia de datos críticos", "Un componente con problemas de sobrecalentamiento"], correct: 0 },
    
    { question: "54. La principal ventaja de los sistemas All-Flash Array (AFA) es:", answers: ["Mayor capacidad de almacenamiento", "Menor costo", "Mayor rendimiento", "Menor consumo energético"], correct: 2 },
    
    { question: "55. El término 'data locality' en sistemas de almacenamiento hiperconvergentes se refiere a:", answers: ["La ubicación física de los centros de datos", "Mantener los datos cerca de donde se procesan", "La restricción geográfica de datos por regulaciones", "Un tipo de cifrado local"], correct: 1 },
    
    { question: "56. ¿Cuál es la función principal de un sistema de archivos paralelo como Lustre o GPFS?", answers: ["Reducir el tamaño de los archivos", "Permitir acceso simultáneo de alta velocidad desde múltiples nodos", "Encriptar todos los datos", "Simplificar la administración de usuarios"], correct: 1 },
    
    { question: "57. La técnica 'erasure coding' se utiliza para:", answers: ["Eliminar datos antiguos", "Proporcionar redundancia con menos overhead que el mirroring", "Encriptar datos sensibles", "Comprimir archivos grandes"], correct: 1 },
    
    { question: "58. Un sistema de almacenamiento activo-activo permite:", answers: ["Que solo un controlador esté activo a la vez", "Que múltiples controladores procesen I/O simultáneamente", "Ahorrar energía alternando controladores", "Reducir costos eliminando componentes redundantes"], correct: 1 },
    
    { question: "59. La funcion principal de NPIV (N_Port ID Virtualization) es:", answers: ["Virtualizar puertos físicos FC para asignar múltiples IDs", "Aumentar la velocidad de Fibre Channel", "Reducir el consumo energético", "Comprimir datos en tránsito"], correct: 0 },
    
    { question: "60. ¿Cuál de las siguientes NO es una métrica típica monitoreada en sistemas de almacenamiento?", answers: ["IOPS (Operaciones de I/O por segundo)", "Latencia", "Throughput", "Temperatura de la sala"], correct: 3 }
];
