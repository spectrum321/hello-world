const tema4opo = [
       
    // Parte I: Administración de Bases de Datos
    { question: "01. ¿Cuál de los siguientes NO es un sistema gestor de bases de datos relacional (SGBDR)?", answers: ["MySQL", "MongoDB", "PostgreSQL", "Oracle"], correct: 1 },
    
    { question: "02. ¿Qué lenguaje se utiliza principalmente para realizar consultas en bases de datos relacionales?", answers: ["XML", "HTML", "SQL", "Python"], correct: 2 },
    
    { question: "03. ¿Qué significa ACID en el contexto de transacciones de bases de datos?", answers: ["Atomicidad, Consistencia, Aislamiento, Durabilidad", "Autenticación, Cifrado, Integridad, Disponibilidad", "Acceso, Control, Identificación, Distribución", "Análisis, Consulta, Indexación, Diseño"], correct: 0 },
    
    { question: "04. ¿Qué tipo de índice se utiliza habitualmente para acelerar las búsquedas en bases de datos?", answers: ["Índice B-Tree", "Índice Hash", "Índice Bitmap", "Todas las anteriores"], correct: 3 },
    
    { question: "05. ¿Cuál es el propósito principal de normalizar una base de datos?", answers: ["Aumentar el rendimiento de las consultas", "Reducir la redundancia de datos", "Facilitar la implementación de bases de datos NoSQL", "Disminuir el tamaño total de la base de datos"], correct: 1 },
    
    { question: "06. ¿Qué herramienta se utiliza para representar gráficamente la estructura de una base de datos?", answers: ["Diagrama de casos de uso", "Diagrama Entidad-Relación", "Diagrama de flujo", "Diagrama de secuencia"], correct: 1 },
    
    { question: "07. ¿Qué es un procedimiento almacenado en una base de datos?", answers: ["Un conjunto de consultas SQL que se almacenan en memoria caché", "Un programa almacenado físicamente en la base de datos que se puede invocar", "Una tabla temporal para almacenar resultados intermedios", "Un método para respaldar datos críticos"], correct: 1 },
    
    { question: "08. ¿Qué es el sharding en bases de datos?", answers: ["Un método de encriptación de datos sensibles", "Una técnica para particionar datos en múltiples servidores", "Un proceso de optimización de consultas", "Un mecanismo de autenticación de usuarios"], correct: 1 },
    
    { question: "09. ¿Qué significa DDL en SQL?", answers: ["Data Definition Language", "Database Design Logic", "Data Description List", "Dynamic Data Link"], correct: 0 },
    
    { question: "10. ¿Qué comando SQL se utiliza para obtener información sobre la estructura de una tabla?", answers: ["SHOW TABLE", "DISPLAY TABLE", "DESCRIBE TABLE", "VIEW TABLE"], correct: 2 },
    
    { question: "11. ¿Cuál de los siguientes NO es un nivel de aislamiento en transacciones de bases de datos?", answers: ["Read Uncommitted", "Read Committed", "Write Committed", "Serializable"], correct: 2 },
    
    { question: "12. ¿Qué es un deadlock en bases de datos?", answers: ["Una consulta que nunca termina de ejecutarse", "Una situación donde dos transacciones se bloquean mutuamente esperando recursos", "Un índice corrupto que bloquea el acceso a los datos", "Un error en la sintaxis SQL que impide la ejecución"], correct: 1 },
    
    { question: "13. ¿Cuál de las siguientes NO es una característica de las bases de datos NoSQL?", answers: ["Escalabilidad horizontal", "Esquema flexible", "Garantía ACID estricta", "Distribución geográfica"], correct: 2 },
    
    { question: "14. ¿Qué significa el término \"hot backup\"?", answers: ["Una copia de seguridad que se realiza cuando la base de datos está muy activa", "Una copia de seguridad que se realiza mientras la base de datos está en funcionamiento", "Una copia de seguridad que se almacena en un dispositivo de alta temperatura", "Una copia de seguridad que requiere mucho espacio de almacenamiento"], correct: 1 },
    
    { question: "15. ¿Cuál es la principal ventaja de utilizar una vista materializada en lugar de una vista normal?", answers: ["Mayor seguridad de los datos", "Mejor rendimiento en consultas complejas", "Menor espacio de almacenamiento", "Mayor compatibilidad entre diferentes SGBD"], correct: 1 },
    
    { question: "16. ¿Qué tipo de base de datos es más adecuada para almacenar relaciones complejas entre entidades?", answers: ["Bases de datos clave-valor", "Bases de datos documentales", "Bases de datos relacionales", "Bases de datos en memoria"], correct: 2 },
    
    { question: "17. ¿Qué es un índice clúster en una base de datos?", answers: ["Un índice que determina el orden físico de almacenamiento de los datos", "Un índice compartido entre varias tablas relacionadas", "Un índice que agrupa varios servidores para mejorar el rendimiento", "Un índice que solo se crea en bases de datos distribuidas"], correct: 0 },
    
    { question: "18. ¿Cuál de las siguientes operaciones consume más recursos en una base de datos?", answers: ["Consulta SELECT simple", "Consulta SELECT con JOIN múltiples", "Operación DELETE con condición simple", "Operación INSERT de un solo registro"], correct: 1 },
    
    { question: "19. ¿Qué es el plan de ejecución de una consulta SQL?", answers: ["La descripción de cómo se programarán las consultas futuras", "La estrategia que utilizará el motor de base de datos para ejecutar la consulta", "El registro histórico de consultas ejecutadas", "El conjunto de permisos necesarios para ejecutar la consulta"], correct: 1 },
    
    { question: "20. ¿Qué tipo de backup permite recuperar una base de datos a un punto específico en el tiempo?", answers: ["Backup completo", "Backup diferencial", "Backup de registros de transacciones", "Backup incremental"], correct: 2 },
    
    // Parte II: Sistemas de Almacenamiento y su Virtualización
    { question: "21. ¿Qué significa SAN en el contexto de almacenamiento?", answers: ["System Area Network", "Storage Area Network", "Structured Access Network", "System Administration Network"], correct: 1 },
    
    { question: "22. ¿Cuál de los siguientes NO es un tipo de RAID?", answers: ["RAID 0", "RAID 1", "RAID 7", "RAID 10"], correct: 2 },
    
    { question: "23. ¿Qué tecnología de almacenamiento ofrece mayor velocidad de acceso a datos?", answers: ["HDD (Hard Disk Drive)", "SSD (Solid State Drive)", "Cinta magnética", "Disco óptico"], correct: 1 },
    
    { question: "24. ¿Qué protocolo se utiliza comúnmente en sistemas de almacenamiento SAN?", answers: ["NFS", "SMB", "Fibre Channel", "HTTP"], correct: 2 },
    
    { question: "25. ¿Qué significa NAS?", answers: ["Network Access Storage", "Network Attached Storage", "New Archive System", "Non-Aggressive Storage"], correct: 1 },
    
    { question: "26. ¿Cuál es la principal diferencia entre SAN y NAS?", answers: ["SAN presenta almacenamiento a nivel de bloque mientras que NAS a nivel de archivo", "SAN solo funciona con discos SSD mientras que NAS con cualquier tipo", "SAN es más económico que NAS", "SAN es para pequeñas empresas mientras que NAS para grandes corporaciones"], correct: 0 },
    
    { question: "27. ¿Qué es la deduplicación de datos?", answers: ["Un proceso para eliminar datos obsoletos", "Una técnica para comprimir archivos grandes", "Un método para eliminar copias redundantes de datos", "Un algoritmo para distribuir datos en diferentes servidores"], correct: 2 },
    
    { question: "28. ¿Qué significa LUN en almacenamiento?", answers: ["Logical Unit Number", "Large Unified Network", "Linked User Node", "Local Utility Network"], correct: 0 },
    
    { question: "29. ¿Cuál de los siguientes es un beneficio de la virtualización de almacenamiento?", answers: ["Eliminación completa de hardware físico", "Mayor utilización de los recursos de almacenamiento", "Menor consumo de energía eléctrica", "Eliminación de la necesidad de copias de seguridad"], correct: 1 },
    
    { question: "30. ¿Qué es un hipervisor Tipo 1?", answers: ["Un software que se ejecuta directamente sobre el hardware", "Un software que se ejecuta sobre un sistema operativo", "Un dispositivo físico para conectar múltiples discos", "Un protocolo para la transferencia de datos"], correct: 0 },
    
    { question: "31. ¿Qué significa IOPS en el contexto de almacenamiento?", answers: ["Input/Output Operations Per Second", "Internal Operating Performance System", "Integrated Output Processing Standard", "Interconnected Optical Processing System"], correct: 0 },
    
    { question: "32. ¿Qué tecnología permite presentar múltiples dispositivos de almacenamiento como un único pool lógico?", answers: ["RAID", "Compresión", "Storage virtualization", "Deduplicación"], correct: 2 },
    
    { question: "33. ¿Qué significa thin provisioning?", answers: ["Asignar menos espacio físico del solicitado, ampliándolo según necesidad", "Utilizar discos de menor capacidad para reducir costos", "Comprimir los datos para ocupar menos espacio", "Utilizar servidores más pequeños y económicos"], correct: 0 },
    
    { question: "34. ¿Cuál de las siguientes NO es una característica del almacenamiento en la nube?", answers: ["Escalabilidad", "Accesibilidad desde cualquier lugar", "Independencia total de Internet", "Pago por uso"], correct: 2 },
    
    { question: "35. ¿Qué es un snapshot en sistemas de almacenamiento?", answers: ["Una fotografía del hardware del sistema", "Una captura del estado de los datos en un momento determinado", "Un informe sobre el rendimiento del sistema", "Una alerta de seguridad"], correct: 1 },
    
    { question: "36. ¿Qué caracteriza a un sistema de almacenamiento definido por software (SDS)?", answers: ["No requiere hardware físico", "Separa el software de gestión del hardware de almacenamiento", "Solo funciona con un tipo específico de hardware", "Es exclusivo para entornos virtualizados"], correct: 1 },
    
    { question: "37. ¿Qué es un sistema de archivos distribuido?", answers: ["Un sistema que distribuye archivos a los usuarios según sus permisos", "Un sistema que permite almacenar archivos en múltiples servidores", "Un sistema que organiza los archivos en diferentes carpetas", "Un sistema que comprime automáticamente los archivos"], correct: 1 },
    
    { question: "38. ¿Qué significa QoS en almacenamiento?", answers: ["Query of Service", "Quality of Storage", "Quality of Service", "Quantity of Storage"], correct: 2 },
    
    { question: "39. ¿Cuál es la principal ventaja del almacenamiento en cinta magnética frente a discos duros?", answers: ["Mayor velocidad de acceso", "Menor costo por terabyte almacenado", "Mayor fiabilidad a corto plazo", "Acceso aleatorio más eficiente"], correct: 1 },
    
    { question: "40. ¿Qué es una SAN virtual (VSAN)?", answers: ["Una SAN que solo existe durante ciertas horas del día", "Una SAN implementada mediante software sobre hardware compartido", "Una SAN que utiliza exclusivamente discos virtuales", "Una SAN con acceso restringido a ciertos usuarios"], correct: 1 }
];
