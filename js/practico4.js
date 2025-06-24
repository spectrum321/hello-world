const practico4 = [
     
    { question: "01. ¿Qué es un SGBD?", answers: ["Sistema Gestor de Bases de Datos", "Sistema Global de Backup de Datos", "Sistema de Gestión Básica de Datos", "Servidor de Gestión de Bases Distribuidas"], correct: 0 },
    
    { question: "02. ¿Qué modelo de base de datos es el más utilizado actualmente?", answers: ["Jerárquico", "Relacional", "Red", "Orientado a objetos"], correct: 1 },
    
    { question: "03. ¿Qué lenguaje se utiliza para consultas en bases de datos relacionales?", answers: ["SQL", "NoSQL", "XML", "JSON"], correct: 0 },
    
    { question: "04. ¿Qué propiedad ACID garantiza que las transacciones se completen totalmente o no se ejecuten?", answers: ["Atomicidad", "Consistencia", "Aislamiento", "Durabilidad"], correct: 0 },
    
    { question: "05. ¿Qué tipo de replicación de bases de datos mantiene copias exactas en todos los nodos?", answers: ["Maestro-Esclavo", "Peer-to-Peer", "Multimaestro", "Snapshot"], correct: 1 },
    
    { question: "06. ¿Qué es un índice en una base de datos?", answers: ["Una tabla de resumen", "Una estructura que mejora la velocidad de búsqueda", "Un tipo de relación entre tablas", "Un procedimiento almacenado"], correct: 1 },
    
    { question: "07. ¿Qué sistema de almacenamiento permite mayor escalabilidad?", answers: ["SAN", "NAS", "DAS", "RAID"], correct: 0 },
    
    { question: "08. ¿Qué nivel RAID ofrece espejado (mirroring)?", answers: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"], correct: 1 },
    
    { question: "09. ¿Qué tipo de virtualización permite crear máquinas virtuales completas?", answers: ["Virtualización de almacenamiento", "Virtualización de servidores", "Virtualización de aplicaciones", "Virtualización de red"], correct: 1 },
    
    { question: "10. ¿Qué comando SQL se usa para recuperar datos?", answers: ["GET", "SELECT", "RETRIEVE", "QUERY"], correct: 1 },
    
    { question: "11. ¿Qué es normalización en bases de datos?", answers: ["Proceso de organizar datos para reducir redundancia", "Técnica para aumentar el rendimiento", "Método de compresión de datos", "Proceso de migración entre sistemas"], correct: 0 },
    
    { question: "12. ¿Qué tipo de backup copia sólo los cambios desde el último backup completo?", answers: ["Completo", "Diferencial", "Incremental", "Espejo"], correct: 2 },
    
    { question: "13. ¿Qué sistema NoSQL es orientado a documentos?", answers: ["MongoDB", "Redis", "Cassandra", "Neo4j"], correct: 0 },
    
    { question: "14. ¿Qué es sharding en bases de datos?", answers: ["Particionamiento horizontal de datos", "Técnica de compresión", "Método de replicación", "Tipo de indexación"], correct: 0 },
    
    { question: "15. ¿Qué protocolo se usa comúnmente en redes SAN?", answers: ["NFS", "iSCSI", "HTTP", "FTP"], correct: 1 },
    
    { question: "16. ¿Qué tipo de join devuelve todos los registros cuando hay coincidencia en alguna tabla?", answers: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"], correct: 3 },
    
    { question: "17. ¿Qué es un data warehouse?", answers: ["Almacén de datos para análisis y reporting", "Sistema de backup centralizado", "Base de datos operacional", "Sistema de archivos distribuido"], correct: 0 },
    
    { question: "18. ¿Qué tecnología permite consolidar almacenamiento físico en pools virtuales?", answers: ["Thin provisioning", "Deduplicación", "Storage virtualization", "RAID"], correct: 2 },
    
    { question: "19. ¿Qué tipo de base de datos es óptima para relaciones complejas?", answers: ["Relacional", "Documental", "Grafos", "Clave-valor"], correct: 2 },
    
    { question: "20. ¿Qué es un trigger en bases de datos?", answers: ["Procedimiento que se ejecuta automáticamente ante eventos", "Tipo especial de índice", "Restricción de integridad", "Método de replicación"], correct: 0 },
    
    { question: "21. ¿Qué sistema proporciona almacenamiento como archivos sobre red?", answers: ["SAN", "NAS", "DAS", "RAID"], correct: 1 },
    
    { question: "22. ¿Qué nivel RAID combina espejado y striping?", answers: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"], correct: 3 },
    
    { question: "23. ¿Qué es CDP (Continuous Data Protection)?", answers: ["Backup continuo con múltiples puntos de recuperación", "Técnica de deduplicación", "Método de compresión", "Tipo de sistema de archivos"], correct: 0 },
    
    { question: "24. ¿Qué tipo de virtualización abstrae los recursos de almacenamiento físico?", answers: ["Virtualización de servidores", "Virtualización de almacenamiento", "Virtualización de aplicaciones", "Virtualización de red"], correct: 1 },
    
    { question: "25. ¿Qué comando SQL modifica datos existentes?", answers: ["CHANGE", "MODIFY", "UPDATE", "ALTER"], correct: 2 },
    
    { question: "26. ¿Qué es un stored procedure?", answers: ["Conjunto de sentencias SQL almacenadas", "Tipo de índice", "Método de backup", "Restricción de integridad"], correct: 0 },
    
    { question: "27. ¿Qué tecnología reduce el espacio almacenando datos únicos una vez?", answers: ["Thin provisioning", "Deduplicación", "Compresión", "RAID"], correct: 1 },
    
    { question: "28. ¿Qué tipo de base de datos usa el modelo clave-valor?", answers: ["MongoDB", "Redis", "Cassandra", "Oracle"], correct: 1 },
    
    { question: "29. ¿Qué es un tablespace en bases de datos?", answers: ["Unidad lógica de almacenamiento", "Tipo de relación", "Método de indexación", "Estructura de backup"], correct: 0 },
    
    { question: "30. ¿Qué protocolo permite acceso a archivos remotos en Linux?", answers: ["iSCSI", "NFS", "Fibre Channel", "CIFS"], correct: 1 },
    
    { question: "31. ¿Qué tipo de backup requiere menos espacio de almacenamiento?", answers: ["Completo", "Diferencial", "Incremental", "Espejo"], correct: 2 },
    
    { question: "32. ¿Qué es un view en SQL?", answers: ["Tabla virtual basada en un conjunto resultante", "Tipo de índice", "Método de optimización", "Estructura física de almacenamiento"], correct: 0 },
    
    { question: "33. ¿Qué sistema NoSQL es columnar?", answers: ["MongoDB", "Cassandra", "Redis", "Neo4j"], correct: 1 },
    
    { question: "34. ¿Qué tecnología permite asignar más almacenamiento del físicamente disponible?", answers: ["Deduplicación", "Thin provisioning", "Compresión", "RAID"], correct: 1 },
    
    { question: "35. ¿Qué comando SQL elimina registros?", answers: ["REMOVE", "DROP", "DELETE", "ERASE"], correct: 2 },
    
    { question: "36. ¿Qué es un deadlock en bases de datos?", answers: ["Situación donde transacciones se bloquean mutuamente", "Error de sintaxis SQL", "Fallo en la replicación", "Corrupción de índices"], correct: 0 },
    
    { question: "37. ¿Qué tipo de almacenamiento ofrece mejor rendimiento para bases de datos?", answers: ["HDD", "SSD", "Cinta", "NAS"], correct: 1 },
    
    { question: "38. ¿Qué es un cursor en bases de datos?", answers: ["Mecanismo para procesar filas una a una", "Tipo de índice", "Método de backup", "Restricción de integridad"], correct: 0 },
    
    { question: "39. ¿Qué sistema de archivos es usado comúnmente por SAN?", answers: ["NTFS", "ext4", "VMFS", "FAT32"], correct: 2 },
    
    { question: "40. ¿Qué tipo de virtualización permite migrar almacenamiento entre sistemas?", answers: ["Virtualización a nivel de bloque", "Virtualización a nivel de archivo", "Virtualización a nivel de sistema", "Virtualización a nivel de aplicación"], correct: 0 }
];