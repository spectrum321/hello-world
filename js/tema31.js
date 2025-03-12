const tema31 = [
    
    { question: "01. ¿Qué hace la función array_shift() en PHP?", answers: ["Elimina un elemento de una matriz", "Borra todos los elementos de una matriz", "Pasa a la siguiente matriz", "Añade un elemento a una matriz"], correct: 0 },

    { question: "02. ¿Cuál es la diferencia entre las funciones require() e include() en PHP?", answers: ["require() insertará el archivo una sola vez aunque se repita la función varias veces", "el tratamiento de los errores", "include() debe estar siempre al principio del script PHP", "los parámetros que devuelven."], correct: 0 },

    { question: "03. ¿Qué función utilizaría para borrar un archivo en PHP?", answers: ["delete()", "file_delete()", "unlink()", "fdelete()"], correct: 2 },

    { question: "04. En PHP un array en el que el índice es un valor de tipo string, es un array:", answers: ["Sustantivo.", "Doblemente asociado.", "Nominativo.", "Asociativo"], correct: 3 },

    { question: "05. La función string chr ( int ascii ) en PHP devuelve una cadena de un carácter que contiene el carácter especificado por el entero ascii. ¿Cuál es la función que realiza la labor inversa (devuelve el valor ASCII del primer carácter de la cadena que toma como parámetro?", answers: ["chr(chr())", "rch()", "ord()", "ascii()"], correct: 2 },

    { question: "06. Los servicios Web en ASP.NET son archivos con la extensión:", answers: ["Asp", "Aspx", "Asmx", "Las opciones a y b son correctas."], correct: 2 },

    { question: "07. ¿Cuál es la diferencia entre exec() y pcntl_exec() en PHP?", answers: ["pcntl_exec() hace un fork desde el proceso que la ejecuta.", "Ninguna, son la misma función.", "pcntl_exec() añade un punto de control antes del exec().", "Ninguna de las anteriores."], correct: 3 },

    { question: "08. No es cierto sobre la tecnología de páginas Web de Microsoft (ASP y ASP.Net):", answers: ["Una página ASP puede escribirse con Java Script.", "ASP se ejecuta del lado del servidor bajo IIS o motores PHP compatibles con ASP.", "ASP.NET es una tecnología orientada a objetos que se ejecuta del lado de servidor.", "Una página ASP puede escribirse con Visual Basic Script."], correct: 1 },

    { question: "09. No es cierto sobre la tecnología PHP5:", answers: ["Es una tecnología para creación de páginas Web dinámicas que se ejecuta del lado del servidor.", "El motor PHP puede instalarse para funcionar con Apache o con Microsoft IIS.", "Es un producto de código abierto.", "No tiene capacidades de programación orientada a objetos."], correct: 3 },

    { question: "10. Sobre la tecnología JSP no es cierto:", answers: ["JSP y servlets utilizan ambas el lenguaje java y su lenguaje de etiquetas propio.", "Un JSP se compila a un servlet de java sólo la primera vez que se ejecuta la aplicación y luego procesa las solicitudes HTTP para generar la respuesta.", "Las páginas JSP codifican scripts dinámicos y HTML conjuntamente, separando la lógica de la programación de la presentación visual.", "Las páginas JSP pueden ubicarse directamente en el servidor de aplicaciones (contenedor Web), ya que no se compilan hasta que se solicitan por un cliente."], correct: 0 },

    { question: "11. En la plataforma Microsoft .NET, el encargado de transformar el código intermedio a código máquina se denomina:", answers: ["ByteCode.", "Empaquetador COM.", "CIL.", "CLR."], correct: 3 },

    { question: "12. ¿Qué función tiene la tecnología Entity Framework de .Net?", answers: ["Realiza mapeos entre clases y bases de datos relacionales (ORM, Object-Relational Mapping).", "Permite realizar mapeos entre XML y clases (XSDS, XML Serializer-DeSerializer).", "Permite exponer objetos para que sean accedidos remotamente, como CORBA o DCOM.", "Realiza una adaptación entre clases de .Net y otros lenguajes, permitiendo acceso transparente."], correct: 0 },

    { question: "13. En .NET, ¿qué es el Managed Extensibility Framework (MEF)?", answers: ["Es una arquitectura que proporciona primitivos asíncronos de paso de aprobación de mensajes sin tipo.", "Es un modelo extensible de programación, motor y herramientas para generar con rapidez aplicaciones de flujo de trabajo en Windows.", "Es una biblioteca de clases portable que permite escribir y compilar ensamblados administrados capaces de funcionar en múltiples plataformas de .NET.", "Es una biblioteca para crear aplicaciones ligeras y extensibles."], correct: 3 },

    { question: "14. Los proveedores de datos .NET Framework incluyen un objeto DbConnection para conectarse al origen de datos. Señale, entre las siguientes clases, cuál NO pertenece a un proveedor de datos incluido en el .NET Framework 4.5:", answers: ["EntityConnection.", "SqlConnection.", "SqlDeConnection.", "OleOdbcConnection."], correct: 3 },

    { question: "15. Señale la manera de proceder en el lenguaje PHP, para poder utilizar dentro de una función una variable que se define globalmente en una página:", answers: ["No se debe declarar explícitamente, puesto que las variables globales son accesibles directamente desde cualquier función definida en la misma página.", "Se puede usar el array $GLOBALVars para acceder al contenido de la variable.", "Se podría declarar la variable como global al principio de la función mediante el uso de la palabra reservada \"global\" seguido del nombre de la variable a utilizar.", "Se debe declarar la variable como \"static\"."], correct: 2 },

    { question: "16. ¿Qué tienen en común los lenguajes ASP, JSP y PHP?", answers: ["Los tres son lenguajes interpretados.", "Los tres son lenguajes que se ejecutan en el lado cliente.", "Los tres son lenguajes que se ejecutan en el lado servidor.", "ASP Y JSP son ejecutados en el lado servidor, mientras que PHP sólo es ejecutado en el lado cliente."], correct: 2 },

    { question: "17. En PHP 5.0, ¿cuál de las siguientes asignaciones es la correcta?", answers: ["$a = 0GOOGLE;", "$a = 0123;", "$a = 0hAF;", "$a = 0xNULL;"], correct: 1 },

    { question: "18. En Visual Basic 2012, ¿cuál es una palabra clave para convertir un tipo numérico a String?", answers: ["CStr", "Cstring", "CChar", "Convert"], correct: 0 },

    { question: "19. En Visual Basic 2012, ¿cuál de las siguientes respuestas es una propiedad de la clase FileSystem para obtener el directorio actual?", answers: ["GetDirectory", "CurrentDirectory", "SetDirectory", "ShowDirectory"], correct: 1 },

    { question: "20. ¿Qué gestor de contenido emplea PHP como lenguaje de programación?", answers: ["Liferay", "Drupal", "Plone", "Magnolia"], correct: 1 },

    { question: "21. En ASP.NET MVC, ¿cuál de los siguientes es un nombre de controlador válido?", answers: ["Servicios.", "ServiciosController.", "ServiciosActionListener.", "Cualquiera de los tres es válido. Basta con que esté en la carpeta controllers."], correct: 1 },

    { question: "22. ¿Cuál es la etiqueta de comienzo de un fichero PHP?", answers: ["<php", "<?php", "<@", "<1"], correct: 1 },

    { question: "23. El atributo de la etiqueta <jsp:useBean> encargado de especificar el ámbito o alcance que tendrá el bean es:", answers: ["request", "scope", "class", "session"], correct: 1 },

    { question: "24. En la plataforma .NET, la herramienta de desarrollo compila el código fuente de cualquiera de los lenguajes soportados por .NET en un código intermedio. ¿Cómo se denomina ese código?", answers: ["Bytecode", "MSIL", "CLR", "Intermediate Code"], correct: 1 },

    { question: "25. El ensamblado es la unidad de implementación en .NET. ¿Cuál de los siguientes elementos NO forma parte de un ensamblado?", answers: ["El manifiesto.", "Los metadatos.", "El código de lenguaje intermedio de Microsoft.", "CLS (Common Language Specification)."], correct: 3 },

    { question: "26. ¿Con qué directiva se declara una página maestra en ASP.Net?", answers: ["Master", "MasterPage", "Master.Page", "Page"], correct: 0 },

    { question: "27. ¿Qué significan las siglas MVC en el contexto de ASP.NET?", answers: ["Model View Controller.", "Multiple Views Canvas.", "Mobile Video Compatible.", "Mobile View Connector."], correct: 0 },

    { question: "28. Los lenguajes del .NET Framework compilan a:", answers: ["ByteCode", "ADO.NET", "CIL", "MCIL"], correct: 2 },

    { question: "29. Trabajando sobre la plataforma Entity Framework de .NET, ¿cuál de las siguientes opciones representa la extensión de los ficheros en los que se define el Entity Data Model de ADO.NET?", answers: [".edmx", ".edms", ".edm", ".edma"], correct: 0 },

    { question: "30. ¿Cuál de las siguientes opciones representa una librería para gestión de logs en aplicaciones desarrolladas en la plataforma .NET?", answers: ["Apache Log4C#.", "Apache Logging4NET.", "Apache Log4NET.", "Apache LoggedForNET."], correct: 2 },
    { question: "31. ¿Cuál de los siguientes bloques de código en PHP permite que se escriba al menos una vez el valor de la variable $i?", answers: ["<?php $i = 0; do { echo $i;} while ($i > 0); ?>", "<?php $i = 1; while($i < 0) { echo $i;} ?>", "<?php for ($i = 1; $i < 0; $i--) { echo $i;} ?>", "<?php $i = 1;if ($i < 0) { echo $i;} ?>"], correct: 0 },
    
    { question: "32. Señale de entre los siguientes cuál NO es un framework de pruebas unitarias para Microsoft .NET:", answers: ["xUnit", "xUnit.net", "NUnit", "csUnit"], correct: 0 },
    
    { question: "33. Elija la respuesta correcta:", answers: ["La JavaServer Pages Standard Tag Library (JSTL) es una colección de bibliotecas de etiquetas con utilidades ampliamente utilizadas en el desarrollo de páginas web.", "Apache Struts es un framework de desarrollo bajo el modelo vista controlador que sirve para crear Aplicaciones web con Smalltalk.", "El Unified Expression Language (EL) integra los JSP con los servlets.", "Los Applets y las Java Server Pages (JSPs) son dos métodos de creación de páginas web dinámicas en servidor usando el lenguaje Java."], correct: 0 },
    
    { question: "34. El Entity Framework es:", answers: ["Un framework ORM (object-relational mapper) desarrollado por Microsoft e integrado en la plataforma .NET.", "Una utilidad que permite identificar las funcionalidades de un sistema informático.", "Una herramienta de planificación y gestión del software desarrollado por Microsoft.", "Un framework orientado a la realización de aplicaciones web implementado por Microsoft que respecta el modelo vista controlador."], correct: 0 }
];
   