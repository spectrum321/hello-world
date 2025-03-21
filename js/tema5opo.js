const tema5opo = [
    
    // Políticas, Sistemas y Procedimientos de Backup y Recuperación
    // Conceptos Básicos
    { question: "01. ¿Cuál es el objetivo principal de una política de backup?", answers: ["Optimizar el rendimiento del sistema", "Proteger los datos contra pérdidas", "Reducir el espacio de almacenamiento", "Aumentar la velocidad de la red"], correct: 1 },
    
    { question: "02. ¿Qué es un RPO (Recovery Point Objective)?", answers: ["El tiempo que tarda un sistema en recuperarse tras un fallo", "La cantidad máxima de datos que una organización puede permitirse perder", "El proceso de restauración de datos", "El número de copias de seguridad que se deben mantener"], correct: 1 },
    
    { question: "03. ¿Qué es un RTO (Recovery Time Objective)?", answers: ["El tiempo máximo aceptable que puede estar un sistema inactivo", "El punto en el tiempo al que se puede retroceder con un backup", "La frecuencia con la que se realizan las copias de seguridad", "El tiempo que tarda en ejecutarse un backup completo"], correct: 0 },
    
    { question: "04. ¿Qué significa la estrategia de backup 3-2-1?", answers: ["3 tipos de backup, 2 sistemas y 1 administrador", "3 copias de los datos, en 2 medios diferentes, con 1 copia fuera del sitio", "3 días entre backups, 2 veces al mes completo, 1 verificación anual", "3 servidores en red, 2 de respaldo y 1 principal"], correct: 1 },
    
    { question: "05. ¿Qué es un SLA (Service Level Agreement) en el contexto de backup y recuperación?", answers: ["Un acuerdo entre departamentos de TI para compartir recursos", "Un contrato que define los niveles de servicio comprometidos", "Un software específico para gestionar backups", "Un protocolo de comunicación entre sistemas de backup"], correct: 1 },
    
    { question: "06. ¿Qué es la \"ventana de backup\"?", answers: ["El intervalo de tiempo disponible para realizar backups", "La interfaz gráfica del software de backup", "El período máximo entre backups consecutivos", "El tiempo que tarda en ejecutarse un backup completo"], correct: 0 },
    
    { question: "07. ¿Qué es un \"agente de backup\"?", answers: ["Un administrador de sistemas responsable de los backups", "Un software que se instala en los sistemas para facilitar el backup", "Un dispositivo físico donde se almacenan los backups", "Un programa para verificar la integridad de los backups"], correct: 1 },
    
    { question: "08. ¿Qué significa MTTR (Mean Time To Recovery)?", answers: ["El tiempo promedio para restaurar un sistema tras un fallo", "El tiempo máximo permitido para realizar un backup", "El tiempo mínimo entre fallos del sistema", "El tiempo medio entre backups completos"], correct: 0 },
    
    { question: "09. ¿Qué es un \"punto de recuperación\"?", answers: ["El lugar físico donde se almacenan los backups", "Un momento específico en el tiempo al que se puede restaurar el sistema", "El punto final de un proceso de restauración", "El dispositivo utilizado para iniciar la recuperación"], correct: 1 },
    
    { question: "10. ¿Qué es la \"gestión del ciclo de vida de los datos\"?", answers: ["El proceso de eliminar datos obsoletos", "La administración de los datos desde su creación hasta su eliminación", "La clasificación de datos según su importancia", "El proceso de compresión de datos antiguos"], correct: 1 },
    
    // Tipos de Backup
    { question: "11. ¿Qué caracteriza a un backup completo (full backup)?", answers: ["Solo copia los archivos modificados desde el último backup", "Copia todos los datos seleccionados independientemente de cuándo se modificaron", "Requiere menos tiempo que otros tipos de backup", "Siempre se almacena en la nube"], correct: 1 },
    
    { question: "12. Un backup incremental:", answers: ["Copia todos los datos modificados desde el último backup completo", "Solo copia los datos modificados desde el último backup (completo o incremental)", "Es más lento que un backup completo", "No requiere un backup completo previo"], correct: 1 },
    
    { question: "13. ¿Qué ventaja principal ofrece un backup diferencial sobre uno incremental?", answers: ["Requiere menos espacio de almacenamiento", "La restauración es más rápida ya que solo se necesita el backup completo y el último diferencial", "Se ejecuta más rápidamente", "No requiere un backup completo inicial"], correct: 1 },
    
    { question: "14. ¿Qué es un backup sintético?", answers: ["Un backup que solo simula la copia de datos para pruebas", "Un backup completo creado a partir de un backup completo anterior y backups incrementales subsiguientes", "Un backup que utiliza compresión avanzada", "Un backup que se realiza automáticamente sin intervención humana"], correct: 1 },
    
    { question: "15. ¿Qué es un backup espejo (mirror backup)?", answers: ["Un backup que crea una copia exacta de los datos sin compresión", "Un backup que se realiza en dos dispositivos simultáneamente", "Un backup que solo copia archivos nuevos", "Un backup que se refleja en la nube"], correct: 0 },
    
    { question: "16. ¿Qué ventaja principal ofrece un backup progresivo forever-incremental?", answers: ["Es más rápido que un backup completo semanal", "Elimina la necesidad de backups completos regulares después del inicial", "Requiere menos espacio de almacenamiento total", "No necesita un catálogo de backup"], correct: 1 },
    
    { question: "17. ¿Qué es un backup consolidado?", answers: ["Un backup que combina múltiples backups incrementales en uno solo", "Un backup que incluye datos de múltiples servidores", "Un backup que se almacena en un único dispositivo", "Un backup que unifica diferentes tipos de datos"], correct: 0 },
    
    { question: "18. ¿Qué es un backup multinivel?", answers: ["Un backup que utiliza diferentes medios de almacenamiento", "Un esquema de backup que combina diferentes tipos de backup según un calendario", "Un backup que se realiza en múltiples ubicaciones", "Un backup que requiere múltiples administradores"], correct: 1 },
    
    { question: "19. ¿Qué es un backup selectivo?", answers: ["Un backup que selecciona automáticamente los archivos críticos", "Un backup que permite elegir qué archivos o carpetas incluir", "Un backup que selecciona el mejor momento para ejecutarse", "Un backup que solo incluye ciertos tipos de archivos"], correct: 1 },
    
    { question: "20. ¿Qué es un backup CDP (Continuous Data Protection)?", answers: ["Un backup que se realiza continuamente en tiempo real", "Un backup que se ejecuta cada hora", "Un backup que solo protege datos críticos", "Un backup que utiliza compresión avanzada"], correct: 0 },
    
    // Sistemas y Tecnologías
    { question: "21. ¿Qué tecnología permite realizar backups consistentes de máquinas virtuales en funcionamiento?", answers: ["Deduplicación", "Compresión", "Snapshots", "Replicación sincrónica"], correct: 2 },
    
    { question: "22. ¿Qué ventaja ofrece la deduplicación en sistemas de backup?", answers: ["Mejora la velocidad de recuperación", "Reduce el espacio de almacenamiento al eliminar datos redundantes", "Aumenta la seguridad de los datos", "Facilita la verificación de los backups"], correct: 1 },
    
    { question: "23. ¿Qué es un backup en caliente (hot backup)?", answers: ["Un backup que se ejecuta a altas temperaturas", "Un backup que se realiza mientras el sistema está en funcionamiento", "Un backup que se almacena en un medio separado físicamente", "Un backup que se ejecuta con alta prioridad"], correct: 1 },
    
    { question: "24. ¿Qué significa el término \"backup offsite\"?", answers: ["Un backup realizado fuera del horario laboral", "Un backup almacenado en una ubicación geográfica diferente", "Un backup que no está conectado a la red", "Un backup que se realiza sin personal de TI"], correct: 1 },
    
    { question: "25. ¿Cuál es la principal ventaja de utilizar backup en la nube?", answers: ["Siempre es más rápido que los backups locales", "No requiere verificación", "Proporciona almacenamiento fuera del sitio sin infraestructura adicional", "No tiene límites de capacidad"], correct: 2 },
    
    { question: "26. ¿Qué es un dispositivo de backup \"appliance\"?", answers: ["Un software especializado para hacer backups", "Un dispositivo hardware dedicado que integra almacenamiento y software de backup", "Un servidor virtual configurado para backups", "Un dispositivo móvil para transportar backups"], correct: 1 },
    
    { question: "27. ¿Qué es un backup D2D (Disk-to-Disk)?", answers: ["Un backup que se realiza de un disco a otro", "Un backup que se realiza dos veces al día", "Un backup que requiere dos administradores", "Un backup de datos duplicados"], correct: 0 },
    
    { question: "28. ¿Qué es un backup D2D2T (Disk-to-Disk-to-Tape)?", answers: ["Un backup que se realiza tres veces al día", "Un backup que primero se copia a disco y luego a cinta", "Un backup que requiere tres niveles de verificación", "Un backup con triple cifrado"], correct: 1 },
    
    { question: "29. ¿Qué es un VTL (Virtual Tape Library)?", answers: ["Un sistema de cintas virtual que emula cintas físicas pero utiliza discos", "Una biblioteca de cintas físicas administrada virtualmente", "Un sistema de etiquetado virtual para cintas físicas", "Un sistema de backup que solo funciona con máquinas virtuales"], correct: 0 },
    
    { question: "30. ¿Qué tecnología permite realizar backups consistentes de aplicaciones como bases de datos?", answers: ["Backup en frío", "Backup a nivel de aplicación con API específicas", "Backup de archivos estándar", "Backup solo de los logs de la aplicación"], correct: 1 },
    
    // Procedimientos y Gestión
    { question: "31. ¿Qué es un catálogo de backup?", answers: ["Un listado de medios físicos donde se almacenan los backups", "Una base de datos que registra los contenidos y ubicaciones de los backups", "El manual de procedimientos para realizar backups", "Un inventario de los sistemas que requieren backup"], correct: 1 },
    
    { question: "32. ¿Qué es la rotación de cintas Grandfather-Father-Son?", answers: ["Un método de distribución de responsabilidades en el equipo de TI", "Un esquema de rotación de copias de seguridad diarias, semanales y mensuales", "Un sistema de almacenamiento jerárquico", "Un protocolo de verificación de backups"], correct: 1 },
    
    { question: "33. ¿Cuál es la finalidad principal de realizar pruebas de restauración periódicas?", answers: ["Comprobar la integridad de los datos", "Verificar que los backups son utilizables y los procedimientos de recuperación funcionan", "Medir el tiempo que toma realizar un backup", "Optimizar el rendimiento del sistema de backup"], correct: 1 },
    
    { question: "34. En una política de backup, ¿qué significa \"retención\"?", answers: ["El tiempo durante el cual se conservan los backups antes de eliminarlos", "La capacidad del sistema para retener datos en memoria", "La verificación de que los datos se han copiado correctamente", "El número de veces que se debe repetir un backup fallido"], correct: 0 },
    
    { question: "35. ¿Qué es un plan de rotación de medios?", answers: ["Un procedimiento para cambiar discos duros regularmente", "Un esquema que determina cuándo reutilizar los medios de backup", "Un método para rotar el personal responsable de backups", "Un sistema para alternar entre diferentes tipos de backup"], correct: 1 },
    
    { question: "36. ¿Qué es el esquema de rotación Tower of Hanoi?", answers: ["Un método de backup que utiliza tres servidores", "Un esquema complejo de rotación de medios basado en el juego homónimo", "Un algoritmo para optimizar la compresión de datos", "Un sistema de backup multinivel"], correct: 1 },
    
    { question: "37. ¿Qué es una política de backup escalonada?", answers: ["Un sistema que realiza backups a intervalos cada vez más largos", "Un método que combina diferentes tipos de backup según la importancia de los datos", "Un procedimiento que utiliza diferentes medios de almacenamiento", "Un sistema que incrementa la frecuencia de backup con el tiempo"], correct: 1 },
    
    { question: "38. ¿Qué es un inventario de medios de backup?", answers: ["Una lista de todos los medios de backup y su estado actual", "Una base de datos de todos los archivos respaldados", "Un sistema para etiquetar los medios de backup", "Un registro de todos los dispositivos de backup disponibles"], correct: 0 },
    
    { question: "39. ¿Qué es la validación de backup?", answers: ["El proceso de verificar que un backup es completo y funcional", "La aprobación oficial de un backup por parte del departamento de TI", "La certificación de un backup por una entidad externa", "El proceso de cifrado de un backup"], correct: 0 },
    
    { question: "40. ¿Qué es un procedimiento de backup documentado?", answers: ["Un registro de todos los backups realizados", "Un conjunto de instrucciones detalladas para realizar y verificar backups", "Un informe mensual sobre el estado de los backups", "Un certificado de cumplimiento normativo"], correct: 1 },
    
    // Backup de Sistemas Físicos y Virtuales
    { question: "41. ¿Qué tecnología es específica para el backup de bases de datos en funcionamiento?", answers: ["Backup de archivos estándar", "Backup a nivel de bloque", "Backup a nivel de aplicación con consistencia transaccional", "Backup incremental"], correct: 2 },
    
    { question: "42. ¿Qué ventaja ofrece el backup a nivel de imagen para sistemas virtuales?", answers: ["Solo requiere agentes en el sistema operativo invitado", "Permite recuperar máquinas virtuales completas sin necesidad de reinstalar el sistema operativo", "Consume menos ancho de banda", "Solo captura los archivos modificados"], correct: 1 },
    
    { question: "43. ¿Qué es la replicación como estrategia de backup?", answers: ["Hacer múltiples copias del mismo backup", "Copiar datos en tiempo real o casi real a un sistema secundario", "Restaurar datos periódicamente para verificar su integridad", "Comprimir los datos para ahorrar espacio"], correct: 1 },
    
    { question: "44. ¿Qué característica hace que el backup de sistemas virtualizados sea más eficiente que el de sistemas físicos?", answers: ["Los sistemas virtualizados son inherentemente más seguros", "La capacidad de tomar snapshots a nivel de hipervisor", "Los sistemas virtuales procesan datos más rápidamente", "No hay diferencia significativa en la eficiencia"], correct: 1 },
    
    { question: "45. ¿Qué permite la tecnología Changed Block Tracking (CBT) en backups de máquinas virtuales?", answers: ["Identificar usuarios que han modificado archivos", "Rastrear solo los bloques de disco que han cambiado desde el último backup", "Comprimir bloques de datos similares", "Verificar la integridad de los bloques de datos"], correct: 1 },
    
    { question: "46. ¿Qué es un backup agentless?", answers: ["Un backup realizado sin personal de TI", "Un backup que no requiere software específico en los sistemas protegidos", "Un backup automático", "Un backup que no requiere verificación"], correct: 1 },
    
    { question: "47. ¿Qué es un backup a nivel de hipervisor?", answers: ["Un backup que se realiza desde dentro de la máquina virtual", "Un backup que se realiza a nivel del sistema que gestiona las máquinas virtuales", "Un backup que solo incluye los datos del hipervisor", "Un backup que requiere apagar las máquinas virtuales"], correct: 1 },
    
    { question: "48. ¿Qué significa la consolidación de snapshots en entornos virtuales?", answers: ["Combinar múltiples snapshots en uno solo", "Eliminar snapshots antiguos", "Verificar la integridad de los snapshots", "Transferir snapshots a un almacenamiento secundario"], correct: 0 },
    
    { question: "49. ¿Qué es un backup P2V (Physical to Virtual)?", answers: ["Un backup que se realiza de un servidor físico a uno virtual", "Un proceso para convertir un backup físico en un backup virtual", "Un método para virtualizar servidores físicos usando backups", "Un backup que puede restaurarse tanto en entornos físicos como virtuales"], correct: 2 },
    
    { question: "50. ¿Qué es un backup V2V (Virtual to Virtual)?", answers: ["Un backup que se realiza entre diferentes plataformas de virtualización", "Un backup que se realiza entre máquinas virtuales en el mismo hipervisor", "Un backup que se realiza dos veces para verificación", "Un backup que se realiza entre dos centros de datos virtuales"], correct: 0 },
    
    { question: "51. ¿Qué tecnología permite realizar backups consistentes de aplicaciones como Exchange o SQL Server?", answers: ["Backup agentless", "Backup con conocimiento de aplicación (application-aware)", "Backup a nivel de bloque", "Backup de archivos estándar"], correct: 1 },
    
    { question: "52. ¿Qué es un backup \"crash-consistent\"?", answers: ["Un backup que se realiza tras un fallo del sistema", "Un backup que captura el estado exacto del sistema como si se hubiera apagado de golpe", "Un backup diseñado para recuperarse después de un fallo", "Un backup que verifica la integridad después de un fallo"], correct: 1 },
    
    { question: "53. ¿Qué es un backup \"application-consistent\"?", answers: ["Un backup que solo incluye archivos de aplicaciones", "Un backup que garantiza la consistencia de los datos de las aplicaciones", "Un backup que requiere que las aplicaciones estén cerradas", "Un backup que solo incluye configuraciones de aplicaciones"], correct: 1 },
    
    { question: "54. ¿Qué es la tecnología VADP (vStorage APIs for Data Protection) de VMware?", answers: ["Un conjunto de APIs para realizar backups eficientes de máquinas virtuales VMware", "Un software específico para hacer backups de VMware", "Un protocolo de comunicación entre sistemas de backup", "Un tipo de almacenamiento virtual para backups"], correct: 0 },
    
    { question: "55. ¿Qué es un \"backup proxy\" en entornos virtuales?", answers: ["Un servidor intermedio que gestiona el tráfico de datos de backup", "Un sistema que oculta la ubicación real de los backups", "Un dispositivo para conectar cintas de backup", "Un software que simula backups para pruebas"], correct: 0 },
    
    { question: "56. ¿Qué es un backup host-based?", answers: ["Un backup que se realiza desde el servidor host", "Un backup que se almacena en el mismo host", "Un backup que requiere un host dedicado", "Un backup que utiliza un host como intermediario"], correct: 0 },
    
    { question: "57. ¿Qué es un backup storage-based?", answers: ["Un backup que se realiza directamente desde el sistema de almacenamiento", "Un backup que se almacena en dispositivos externos", "Un backup que solo incluye datos de almacenamiento", "Un backup que requiere un sistema de almacenamiento dedicado"], correct: 0 },
    
    { question: "58. ¿Qué es un backup network-based?", answers: ["Un backup que se realiza a través de la red", "Un backup que solo incluye configuraciones de red", "Un backup que requiere una red dedicada", "Un backup que se realiza desde dispositivos de red"], correct: 0 },
    
    { question: "59. ¿Qué significa \"instant recovery\" en el contexto de máquinas virtuales?", answers: ["La capacidad de recuperar archivos individuales instantáneamente", "La capacidad de iniciar una máquina virtual directamente desde el backup", "La restauración inmediata de todos los datos", "La verificación instantánea de los backups"], correct: 1 },
    
    { question: "60. ¿Qué es un backup \"boot from backup\"?", answers: ["Un backup que se inicia automáticamente al arrancar el sistema", "La capacidad de iniciar un sistema directamente desde el backup sin restaurarlo", "Un backup que se realiza durante el inicio del sistema", "Un backup que solo incluye archivos de arranque"], correct: 1 },
    
    // Recuperación y Continuidad del Negocio
    { question: "61. ¿Qué es un plan de continuidad del negocio (BCP)?", answers: ["Un conjunto de procedimientos para mantener las operaciones durante una interrupción", "Un presupuesto para infraestructura de TI", "Un plan para expandir el negocio", "Un protocolo para realizar backups diarios"], correct: 0 },
    
    { question: "62. ¿Qué significa DRP (Disaster Recovery Plan)?", answers: ["Un plan para eliminar datos redundantes", "Un conjunto de procedimientos para recuperar sistemas críticos tras un desastre", "Un protocolo para determinar la causa de un fallo", "Un plan para mejorar el rendimiento del sistema"], correct: 1 },
    
    { question: "63. ¿Qué es un sitio de recuperación \"hot site\"?", answers: ["Un centro de datos con temperatura elevada", "Una instalación completamente equipada que puede asumir operaciones casi inmediatamente", "Un lugar para almacenar backups en cinta", "Un sitio que solo se activa en caso de emergencia"], correct: 1 },
    
    { question: "64. ¿Qué aspecto es crucial evaluar en las pruebas de recuperación de desastres?", answers: ["El costo de los equipos de backup", "La velocidad de la conexión a internet", "El tiempo necesario para restaurar los sistemas críticos", "La cantidad de personal disponible"], correct: 2 },
    
    { question: "65. ¿Qué es la recuperación \"bare-metal\"?", answers: ["Restaurar un sistema en hardware completamente diferente", "Recuperar solo los archivos de metal (como CAD)", "Restaurar un sistema desde cero sin sistema operativo preinstalado", "Recuperar datos desde un servidor sin sistema operativo"], correct: 2 },
    
    { question: "66. ¿Qué es un \"cold site\" en el contexto de recuperación de desastres?", answers: ["Una instalación refrigerada para almacenar medios de backup", "Una instalación básica que requiere configuración significativa antes de poder usarse", "Un sitio de backup que solo se utiliza en invierno", "Un sitio que almacena backups en estado inactivo"], correct: 1 },
    
    { question: "67. ¿Qué es un \"warm site\" en el contexto de recuperación de desastres?", answers: ["Una instalación parcialmente equipada que requiere configuración adicional", "Un sitio de backup que mantiene temperaturas moderadas", "Un sitio que solo se utiliza para pruebas de recuperación", "Un sitio de backup que mantiene copias tibias de los datos"], correct: 0 },
    
    { question: "68. ¿Qué es la recuperación \"sandbox\"?", answers: ["Restaurar datos en un entorno aislado para pruebas", "Recuperar solo los archivos temporales", "Un método para restaurar bases de datos", "Recuperar sistemas sin afectar a los usuarios"], correct: 0 },
    
    { question: "69. ¿Qué significa \"failover\" en el contexto de recuperación?", answers: ["Un fallo en el proceso de backup", "El cambio automático a un sistema secundario cuando el principal falla", "La incapacidad de recuperar datos", "La falla en una restauración de datos"], correct: 1 },
    
    { question: "70. ¿Qué significa \"failback\" en el contexto de recuperación?", answers: ["Volver al sistema principal después de que se haya recuperado de un fallo", "Un fallo en el proceso de recuperación", "La restauración parcial de datos", "Un retroceso en el plan de recuperación"], correct: 0 },
    
    { question: "71. ¿Qué es un \"runbook\" en el contexto de recuperación de desastres?", answers: ["Un registro de fallos del sistema", "Un documento detallado con procedimientos paso a paso para la recuperación", "Un software para gestionar la recuperación", "Un diagrama de flujo para el proceso de backup"], correct: 1 },
    
    { question: "72. ¿Qué es la recuperación \"item-level\"?", answers: ["La capacidad de recuperar elementos individuales de un backup", "La recuperación de datos según su nivel de importancia", "La restauración de archivos por tamaño", "La recuperación secuencial de archivos"], correct: 0 },
    
    { question: "73. ¿Qué es un \"Recovery Time Objective\" (RTO) realista?", answers: ["El tiempo más rápido teóricamente posible para recuperar un sistema", "Un objetivo de tiempo de recuperación que se puede lograr con los recursos disponibles", "El tiempo más lento aceptable para la recuperación", "Un tiempo de recuperación fijo para todos los sistemas"], correct: 1 },
    
    { question: "74. ¿Qué es un \"Recovery Point Objective\" (RPO) realista?", answers: ["El punto de recuperación más antiguo disponible", "Un objetivo de punto de recuperación que se puede lograr con los recursos disponibles", "El punto de recuperación más reciente posible", "Un punto de recuperación fijo para todos los sistemas"], correct: 1 },
    
    { question: "75. ¿Qué es un \"Business Impact Analysis\" (BIA)?", answers: ["Un análisis de los efectos financieros de implementar un sistema de backup", "Un proceso para identificar funciones críticas y evaluar el impacto de su interrupción", "Un estudio del impacto ambiental de los centros de datos", "Un análisis de los efectos de diferentes tipos de backup en el rendimiento"], correct: 1 },
    
    { question: "76. ¿Qué es la \"recuperación a un punto en el tiempo\" (point-in-time recovery)?", answers: ["La capacidad de restaurar datos a un momento específico en el pasado", "La restauración que se realiza a una hora predeterminada", "La recuperación que se realiza un punto a la vez", "La restauración que requiere un tiempo específico para completarse"], correct: 0 },
    
    { question: "77. ¿Qué es un \"sitio de recuperación como servicio\" (DRaaS)?", answers: ["Un servicio en la nube que proporciona capacidades de recuperación ante desastres", "Un servicio que repara sitios de backup dañados", "Un servicio que evalúa la efectividad de los planes de recuperación", "Un servicio que recupera sitios web caídos"], correct: 0 },
    
    { question: "78. ¿Qué es la \"recuperación heurística\"?", answers: ["Un método de recuperación que utiliza técnicas de diagnóstico para encontrar la mejor solución", "Un proceso de recuperación que utiliza inteligencia artificial", "Un método de recuperación que requiere intervención manual", "Un proceso de recuperación que aprende de intentos anteriores"], correct: 0 },
    
    { question: "79. ¿Qué es la \"recuperación en cascada\"?", answers: ["Un proceso de recuperación que ocurre en etapas secuenciales", "Un método de recuperación para sistemas interconectados", "Un proceso que restaura datos de manera aleatoria", "Un método de recuperación que utiliza múltiples fuentes de backup"], correct: 0 },
    
    { question: "80. ¿Qué es un \"plan de comunicación de crisis\" en el contexto de recuperación?", answers: ["Un plan para restaurar sistemas de comunicación", "Un conjunto de procedimientos para comunicar información durante una emergencia", "Un plan para mejorar las comunicaciones internas", "Un procedimiento para comunicarse con los medios después de un desastre"], correct: 1 },
    
    // Seguridad y Cumplimiento
    { question: "81. ¿Qué medida de seguridad es fundamental para los backups que contienen datos sensibles?", answers: ["Almacenamiento en múltiples ubicaciones", "Cifrado de los datos", "Compresión de los datos", "Backup diario"], correct: 1 },
    
    { question: "82. Según normativas como GDPR, ¿qué debe considerarse al planificar backups?", answers: ["Usar solo sistemas de backup europeos", "Realizar backups solo en horario laboral", "El derecho al olvido y la minimización de datos", "La velocidad de los backups"], correct: 2 },
    
    { question: "83. ¿Qué es un air-gap en el contexto de backups?", answers: ["Un espacio físico entre servidores de backup", "Una separación física entre los backups y la red principal", "Una tecnología para mejorar la refrigeración del centro de datos", "Un tiempo de espera entre backups consecutivos"], correct: 1 },
    
    { question: "84. ¿Qué defensa ofrecen los backups inmutables contra el ransomware?", answers: ["Detectan automáticamente el ransomware", "Cifran los datos para hacerlos ilegibles", "No pueden ser modificados ni eliminados durante un período definido", "Restauran automáticamente los sistemas afectados"], correct: 2 }
    
];