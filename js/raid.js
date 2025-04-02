const raid = [
        
    { question: "01. ¿Qué significa RAID?", answers: ["Rapid Access to Integrated Databases", "Redundant Array of Independent Disks", "Remote Access and Input Device", "Resource Allocation for Internal Domains"], correct: 1 },
    
    { question: "02. ¿Cuál es el principal objetivo de implementar RAID?", answers: ["Aumentar la velocidad de la CPU", "Mejorar la capacidad de la memoria RAM", "Mejorar el rendimiento y/o la redundancia de datos", "Reducir el consumo de energía"], correct: 2 },
    
    { question: "03. ¿Qué tipo de RAID utiliza paridad distribuida y striping de datos?", answers: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"], correct: 2 },
    
    { question: "04. ¿Cuál es la característica principal de RAID 0?", answers: ["Espejado (mirroring) de datos", "División (striping) de datos sin redundancia", "Paridad distribuida", "Doble paridad"], correct: 1 },
    
    { question: "05. ¿Cuántos discos como mínimo se necesitan para implementar RAID 1?", answers: ["1", "2", "3", "4"], correct: 1 },
    
    { question: "06. ¿Qué nivel de RAID combina striping y mirroring?", answers: ["RAID 0+1", "RAID 3", "RAID 5", "RAID 6"], correct: 0 },
    
    { question: "07. ¿En qué nivel de RAID se produce pérdida total de datos si falla un solo disco?", answers: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"], correct: 0 },
    
    { question: "08. ¿Qué nivel de RAID ofrece la mejor velocidad de escritura?", answers: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"], correct: 0 },
    
    { question: "09. ¿Cuál es la capacidad utilizable en un RAID 1 con dos discos de 2TB cada uno?", answers: ["1TB", "2TB", "3TB", "4TB"], correct: 1 },
    
    { question: "10. ¿Qué nivel de RAID puede soportar la falla de hasta dos discos simultáneamente?", answers: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"], correct: 3 },
    
    { question: "11. ¿Qué significa el término \"hot spare\" en sistemas RAID?", answers: ["Un disco de repuesto frío que debe ser instalado manualmente", "Un disco de repuesto en espera que se activa automáticamente", "Un disco que genera más calor que los demás", "Un disco dedicado exclusivamente a la caché"], correct: 1 },
    
    { question: "12. ¿Qué es el \"striping\" en RAID?", answers: ["La duplicación exacta de datos entre discos", "La división de datos en bloques distribuidos entre varios discos", "El cálculo de información de paridad", "El proceso de verificación de datos"], correct: 1 },
    
    { question: "13. ¿Cuál de los siguientes NO es un nivel estándar de RAID?", answers: ["RAID 2", "RAID 7", "RAID 5", "RAID 0"], correct: 1 },
    
    { question: "14. ¿Qué ocurre durante un proceso de \"reconstrucción\" (rebuild) en RAID?", answers: ["Se formatea el array completo", "Se regeneran datos en un disco nuevo utilizando información de paridad", "Se crea una nueva configuración RAID", "Se optimiza la distribución de datos"], correct: 1 },
    
    { question: "15. ¿Qué nivel de RAID utiliza código Hamming para detección y corrección de errores?", answers: ["RAID 0", "RAID 2", "RAID 5", "RAID 10"], correct: 1 },
    
    { question: "16. En un RAID 5 con 4 discos de 1TB cada uno, ¿cuál es la capacidad utilizable?", answers: ["1TB", "2TB", "3TB", "4TB"], correct: 2 },
    
    { question: "17. ¿Qué nivel de RAID es conocido como \"mirroring\" o espejado?", answers: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"], correct: 1 },
    
    { question: "18. ¿Qué tipo de RAID combina RAID 0 y RAID 1?", answers: ["RAID 5", "RAID 6", "RAID 10", "RAID 50"], correct: 2 },
    
    { question: "19. ¿Qué afirmación es correcta sobre RAID 3?", answers: ["Utiliza un disco dedicado para paridad", "No tiene redundancia", "Proporciona double mirroring", "Requiere un mínimo de 6 discos"], correct: 0 },
    
    { question: "20. ¿Qué nivel de RAID es más adecuado para servidores de bases de datos con muchas operaciones de escritura?", answers: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"], correct: 3 },
    
    { question: "21. ¿Qué nivel de RAID utiliza doble paridad distribuida?", answers: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"], correct: 3 },
    
    { question: "22. ¿Cuál de los siguientes NO es un beneficio de RAID?", answers: ["Mayor rendimiento", "Mayor redundancia", "Mayor capacidad efectiva en todos los niveles", "Menor tiempo de inactividad"], correct: 2 },
    
    { question: "23. ¿Qué significa el acrónimo JBOD?", answers: ["Just a Bunch Of Disks", "Join Both Operating Disks", "Jumbo Block Operation Drive", "Junction Between Optical Drives"], correct: 0 },
    
    { question: "24. ¿Qué tipo de RAID ofrece la mejor relación entre rendimiento y redundancia para servidores críticos?", answers: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"], correct: 3 },
    
    { question: "25. ¿Qué nivel de RAID requiere un mínimo de 3 discos para su implementación?", answers: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"], correct: 2 },
    
    { question: "26. ¿En qué nivel de RAID la falla de un disco no causa pérdida de datos?", answers: ["RAID 0", "RAID 1", "Ambos RAID 1 y RAID 5", "Ningún nivel de RAID"], correct: 2 },
    
    { question: "27. ¿Qué tipo de controlador RAID ofrece mejor rendimiento?", answers: ["RAID por software", "RAID por hardware", "RAID híbrido", "El rendimiento es igual en todos"], correct: 1 },
    
    { question: "28. ¿Qué nivel de RAID se recomienda para almacenamiento de video o procesamiento de imágenes?", answers: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"], correct: 0 },
    
    { question: "29. ¿Qué ocurre con los datos en un RAID 0 si falla un disco?", answers: ["Los datos se pueden recuperar del disco restante", "Se puede reconstruir con información de paridad", "Se pierden todos los datos", "Los datos se pueden recuperar parcialmente"], correct: 2 },
    
    { question: "30. ¿Qué nivel de RAID requiere exactamente 4 discos?", answers: ["RAID 0", "RAID 1", "RAID 3", "Ninguno, todos son flexibles"], correct: 3 },
    
    { question: "31. ¿Cuál es la penalización de escritura (write penalty) en RAID 5?", answers: ["No hay penalización", "Requiere 2 lecturas y 2 escrituras por cada operación de escritura", "Requiere 4 lecturas y 4 escrituras por cada operación de escritura", "Depende del número de discos"], correct: 1 },
    
    { question: "32. ¿Qué es un RAID anidado?", answers: ["RAID dentro de otro RAID", "Una combinación de diferentes niveles RAID", "Un RAID con discos de diferente capacidad", "Un RAID que solo usa la mitad de cada disco"], correct: 1 },
    
    { question: "33. ¿Qué nivel de RAID ofrece la mejor protección contra fallos de múltiples discos?", answers: ["RAID 1", "RAID 5", "RAID 6", "RAID 60"], correct: 3 },
    
    { question: "34. ¿Cuál es la eficiencia de almacenamiento de un RAID 5 con 5 discos?", answers: ["50%", "75%", "80%", "100%"], correct: 2 },
    
    { question: "35. ¿Qué tipo de RAID no proporciona redundancia?", answers: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"], correct: 0 },
    
    { question: "36. En RAID 6, ¿cuál es el número mínimo de discos requeridos?", answers: ["2", "3", "4", "5"], correct: 2 },
    
    { question: "37. ¿Qué nivel de RAID tiene la mayor sobrecarga (overhead) de almacenamiento?", answers: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"], correct: 1 },
    
    { question: "38. ¿Qué tipo de RAID es el más adecuado para servidores de archivos con muchas lecturas secuenciales?", answers: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"], correct: 2 },
    
    { question: "39. ¿Qué significa \"degraded mode\" en un sistema RAID?", answers: ["El sistema está operando con un disco fallido", "El sistema funciona a menor velocidad por configuración", "El RAID ha sido desactivado", "Todos los discos han fallado"], correct: 0 },
    
    { question: "40. ¿Cuál de estos RAID es más resistente a la pérdida de datos?", answers: ["RAID 0+1", "RAID 5", "RAID 10", "RAID 50"], correct: 3 },
    
    { question: "41. ¿Qué proceso ocurre durante un RAID \"resilvering\"?", answers: ["Formateo de bajo nivel de los discos", "Reconstrucción de datos en un disco de reemplazo", "Verificación de la integridad de datos", "Optimización del rendimiento"], correct: 1 },
    
    { question: "42. ¿Qué nivel RAID ofrece la mejor velocidad de lectura para archivos pequeños?", answers: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"], correct: 3 },
    
    { question: "43. ¿Cuántos discos se pueden perder sin pérdida de datos en un RAID 10 con 8 discos?", answers: ["1", "2", "4", "Depende de qué discos fallen"], correct: 3 },
    
    { question: "44. ¿Qué nivel de RAID se conoce también como \"striping with distributed parity\"?", answers: ["RAID 0", "RAID 3", "RAID 5", "RAID 6"], correct: 2 },
    
    { question: "45. ¿Qué tipo de RAID proporciona la mejor capacidad utilizable?", answers: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"], correct: 0 },
    
    { question: "46. ¿Qué nivel de RAID NO proporciona ganancia en rendimiento?", answers: ["RAID 0", "RAID 1", "RAID 5", "RAID 2"], correct: 3 },
    
    { question: "47. ¿Qué es una controladora RAID?", answers: ["Un software que gestiona configuraciones RAID", "Un hardware dedicado a gestionar arrays RAID", "Un disco especial dentro del array", "Tanto A como B pueden ser correctas"], correct: 3 },
    
    { question: "48. ¿Qué tipo de RAID es mejor para el almacenamiento de copias de seguridad?", answers: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"], correct: 3 },
    
    { question: "49. ¿Qué es un \"write-back cache\" en controladoras RAID?", answers: ["Una caché que almacena datos antes de escribirlos en disco", "Una caché que solo almacena datos leídos", "Un área reservada en cada disco", "Un tipo de RAID especial"], correct: 0 },
    
    { question: "50. ¿Qué factor NO afecta al rendimiento de un sistema RAID?", answers: ["El tamaño del stripe", "El tipo de disco", "El color de los cables SATA", "La velocidad del controlador"], correct: 2 }
];
