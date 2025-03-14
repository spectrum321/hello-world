const tema1802 = [

    { question: "46. La sintaxis estándar de ANSI SQL que nos permite borrar una vista es:", answers: ["ERASE VIEW", "DELETE VIEW", "CLEAR VIEW", "DROP VIEW"], correct: 3 },
    
    { question: "47. Indique qué sentencia ANSI SQL utilizaría para deshacer una transacción:", answers: ["ROLLBACK", "BACKSTEP", "REVOKE", "UNDO"], correct: 0 },
    
    { question: "48. El estándar ANSI-SQL especifica estos tipos de cláusulas JOIN:", answers: ["JOIN, LEFT / RIGHT [INNER], COMPLETE Y CROSS.", "INNER, LEFT / RIGHT / FULL [OUTER], y CROSS.", "INNER, LEFT / RIGHT / BOTH [OUTER], y ACROSS.", "INSIDE, OUTSIDE y LEFT / RIGHT /FULL [OUTER]."], correct: 1 },
    
    { question: "49. En una Base de Datos relacional se quiere añadir una nueva columna en una tabla ya existente. ¿Qué sentencia SQL habría que utilizar?", answers: ["add column", "alter table", "insert column", "modify table"], correct: 1 },
    
    { question: "50. En cuanto al lenguaje de interrogación de bases de datos SQL:", answers: ["es un estándar de facto cuando hablamos de lenguajes de interrogación de bases de datos y su base es el álgebra relacional.", "es el lenguaje de interrogación de bases de datos utilizado para hacer consultas sobre bases de datos estructuradas, relacionalesr jerárquicas o en red.", "es un lenguaje de consulta, pero para realizar otras operaciones sobre bases de datos como la definición/creación de las mismas se utiliza otro tipo de lenguajes.", "no está implementado en gestores de bases de datos menores como Microsoft Access."], correct: 0 },
    
    { question: "51. Indicar qué resultado se puede esperar de esta consulta SQL sobre una tabla 'COCHES_VENTA' que mantiene el inventario de automóviies en un pequeño concesionario: SELECT Modelo, Color, COUNT(Bastidor) AS Num FROM COCHES_VENTA GROUP BY Modelo, Color HAVING COUNT(Bastidor) <= 1", answers: ["Le indica al dueño del concesionario que quizá debe plantearse adquirir más existencias de un cierto modelo y color de automóvil.", "Le indica al dueño del concesionario todos los modelos distintos del concesionario. Es decir, un inventario organizado por modelos.", "Le indica al dueño del concesionario todos los modelos distintos del concesionario. Es decir, un inventario organizado por modelos y color.", "Le indica al dueño todos los modelos cuyo número de Bastidor es menor o igual a 1."], correct: 0 },
    
    { question: "52. ¿Cuál de los siguientes términos se relaciona directamente con el control de integridad en SQL?", answers: ["ROLLBACK", "GRANT", "CREATE INDEX", "REVOKE"], correct: 0 },
    
    { question: "53. ¿Qué operador de SQL, utilizado junto la cláusula WHERE, permite buscar según un patrón determinado en una columna?", answers: ["LIKE", "IN", "BETWEEN", "HAVING"], correct: 0 },
    
    { question: "54. ¿Cuál de las siguientes NO es una palabra reservada de MDX (MultiDimensional eXpressions) en SQL Server 2012?", answers: ["SELECT", "DRILL", "CUBE", "MEMBER"], correct: 1 },
    
    { question: "55. En Sql Server 2012 ¿qué comando se utiliza para configurar una conexión de servidor de informes?", answers: ["rdlccfg", "tsmrpt", "rptsetup", "rsconfig"], correct: 3 },
    
    { question: "56. ¿Qué es Transact-SQL?", answers: ["Un sistema gestor de base de datos de tipo NoSQL.", "Una extensión propietaria al estándar SQL.", "Una query que equivale a realizar consultas SELECT por lotes.", "Una biblioteca de clases para mapear objetos sobre una base de datos relacional."], correct: 1 },
    
    { question: "57. En la tabla PERSONAS del ejemplo, queremos cambiar de V a H el contenido del campo sexo, ¿cuál de las siguientes sentencias SQL utilizarías?", answers: ["Update personas set sexo = \"H\" where SEXO = \"V\";", "Update personas Transform sexo by \"H\" where SEXO = \"V\";", "Update sexo with \"H\" From personas where SEXO = \"V\";", "Update sexo to \"H\" Transform personas where SEXO = \"V\";"], correct: 0 },
    
    { question: "58. En la tabla PERSONAS de la pregunta anterior, queremos saber si hay algún mes en el que cumpla años más de una persona, ¿cuál de las siguientes sentencias SQL utilizarías?", answers: ["Select mesnaci from personas Having group (>1);", "Select mesnaci from personas Group by mesnaci Having count(*) > 1;", "Select group by mesnaci from personas Having count(*) > 1;", "Select Having count(mesnaci) > 1 from personas group by mesnaci;"], correct: 1 },
    
    { question: "59. De la tabla PERSONAS de la pregunta anterior, queremos obtener los registros que tengan en el campo MESNACI la cadena de caracteres \"ero\" ¿cuál de las siguientes sentencias SQL utilizarías?", answers: ["Select * where substr(mesnaci;3,3) \"ero\";", "Select * where medio(mesnaci;?,3) \"ero\";", "Select * where mesnaci like \"'%ero%\";", "Select * where mesnaci = \"*ero*\";"], correct: 2 },
    
    { question: "60. En la tabla PERSONAS del ejemplo, ¿cuál sería la clave primaria?", answers: ["DNI", "DNI/idioma", "DNI/sexo", "DNI/idioma/sexo"], correct: 1 },
    
    { question: "61. En la definición de un bloque de código PL/SQL, ¿cuál de las siguientes palabras reservadas NO existe?", answers: ["DECLARE", "BEGIN", "EXCEPTION", "TRY"], correct: 3 }
];