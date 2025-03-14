const tema3opo = [
    
    // HTML, XML y sus derivaciones
    { question: "1. ¿Cuál de las siguientes declaraciones HTML5 es correcta?", answers: ["<!DOCTYPE html5>", "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 5.0//EN\">", "<!DOCTYPE html>", "<html type=\"html5\">"], correct: 2 },
    
    { question: "2. ¿Qué significa XML?", answers: ["Extensive Markup Language", "Extensible Markup Language", "Extended Modern Language", "External Markup Logic"], correct: 1 },
    
    { question: "3. ¿Cuál de las siguientes no es una tecnología derivada de XML?", answers: ["XSL", "XHTML", "DHTML", "SVG"], correct: 2 },
    
    { question: "4. En HTML5, ¿cuál de los siguientes elementos no es semántico?", answers: ["<article>", "<section>", "<div>", "<aside>"], correct: 2 },
    
    { question: "5. ¿Qué atributo se utiliza en HTML5 para especificar que un campo de formulario es obligatorio?", answers: ["required", "mandatory", "must", "validate"], correct: 0 },
    
    { question: "6. ¿Cuál es la forma correcta de crear un hipervínculo en HTML?", answers: ["<a url=\"http://www.ejemplo.com\">Enlace</a>", "<a href=\"http://www.ejemplo.com\">Enlace</a>", "<link href=\"http://www.ejemplo.com\">Enlace</link>", "<hyperlink=\"http://www.ejemplo.com\">Enlace</hyperlink>"], correct: 1 },
    
    { question: "7. ¿Qué elemento HTML5 se utiliza para reproducir video?", answers: ["<media>", "<movie>", "<video>", "<player>"], correct: 2 },
    
    { question: "8. ¿Qué significa DTD en el contexto de XML?", answers: ["Document Type Declaration", "Data Type Definition", "Document Type Definition", "Data Transfer Description"], correct: 2 },
    
    { question: "9. ¿Cuál de los siguientes NO es un elemento estructural de HTML5?", answers: ["<header>", "<footer>", "<content>", "<nav>"], correct: 2 },
    
    { question: "10. ¿Qué elemento HTML5 se utiliza para representar gráficos vectoriales?", answers: ["<svg>", "<canvas>", "<graphic>", "<vector>"], correct: 0 },
    
    { question: "11. ¿Qué atributo se utiliza para validar un campo de formulario con una expresión regular?", answers: ["regex", "pattern", "validate", "regexp"], correct: 1 },
    
    { question: "12. ¿Qué es XSLT?", answers: ["XML Style Language for Templates", "Extensible Style Language Templates", "Extensible Stylesheet Language Transformations", "XML Structured Language for Text"], correct: 2 },
    
    { question: "13. ¿Cuál es la diferencia principal entre XHTML y HTML?", answers: ["XHTML tiene más elementos que HTML", "XHTML no admite JavaScript", "XHTML sigue las reglas sintácticas de XML", "XHTML solo funciona en navegadores modernos"], correct: 2 },
    
    { question: "14. ¿Qué elemento HTML5 se utiliza para dibujar gráficos mediante scripting?", answers: ["<drawing>", "<svg>", "<paint>", "<canvas>"], correct: 3 },
    
    { question: "15. ¿Qué elemento HTML5 define una información adicional que el usuario puede ver o esconder?", answers: ["<details>", "<summary>", "<info>", "<accordion>"], correct: 0 },
    
    // Navegadores y Compatibilidad
    { question: "16. ¿Qué motor de renderizado utiliza Google Chrome?", answers: ["Gecko", "Trident", "Blink", "WebKit"], correct: 2 },
    
    { question: "17. ¿Qué es un polyfill en desarrollo web?", answers: ["Un tipo de plugin para navegadores antiguos", "Una técnica para eliminar código duplicado", "Un código que proporciona funcionalidades modernas en navegadores antiguos", "Una herramienta para probar la compatibilidad de sitios web"], correct: 2 },
    
    { question: "18. ¿Qué significa \"renderizado del lado del servidor\" (server-side rendering)?", answers: ["Cuando el servidor guarda copias cacheadas de las páginas web", "Cuando el HTML se genera en el servidor antes de enviarlo al navegador", "Cuando las imágenes se optimizan en el servidor", "Cuando el servidor ejecuta código JavaScript"], correct: 1 },
    
    { question: "19. ¿Qué motor de renderizado utiliza Firefox?", answers: ["Gecko", "Trident", "WebKit", "EdgeHTML"], correct: 0 },
    
    { question: "20. ¿Qué es un prefijo de proveedor (vendor prefix) en CSS?", answers: ["Una técnica para optimizar el rendimiento de CSS", "Un identificador añadido a propiedades CSS experimentales", "Un método para comprimir archivos CSS", "Una etiqueta que identifica al autor del código CSS"], correct: 1 },
    
    { question: "21. ¿Qué herramienta permite inspeccionar y depurar el código HTML, CSS y JavaScript de una página web?", answers: ["Browser Console", "Developer Tools", "Web Inspector", "DOM Explorer"], correct: 1 },
    
    { question: "22. ¿Qué es \"graceful degradation\" en desarrollo web?", answers: ["Una técnica para reducir gradualmente el tamaño de los archivos", "Un enfoque que asegura que un sitio web sigue funcionando en navegadores antiguos", "Un proceso para eliminar código obsoleto", "Una forma de mostrar mensajes de error amigables"], correct: 1 },
    
    { question: "23. ¿Qué es \"progressive enhancement\" en desarrollo web?", answers: ["Una técnica para mejorar el rendimiento de un sitio web a lo largo del tiempo", "Un enfoque que comienza con una base funcional y añade mejoras para navegadores modernos", "Un método para actualizar gradualmente el servidor web", "Una estrategia para implementar nuevas funciones sin afectar a los usuarios"], correct: 1 },
    
    { question: "24. ¿Qué es el \"Critical Rendering Path\"?", answers: ["El proceso por el cual el navegador convierte HTML, CSS y JavaScript en píxeles en pantalla", "La ruta de acceso a los archivos más importantes de un sitio web", "Un algoritmo para determinar qué elementos mostrar primero en una página", "Una técnica para optimizar el rendimiento de un servidor web"], correct: 0 },
    
    { question: "25. ¿Qué es el \"User-Agent\" en el contexto de los navegadores web?", answers: ["Un software para monitorizar el comportamiento del usuario", "Una cadena de texto que identifica el navegador y sistema operativo del usuario", "Un agente virtual que simula las acciones del usuario para pruebas", "Un plugin que adapta la interfaz del navegador a las preferencias del usuario"], correct: 1 },
    
    // Lenguajes de Programación Web
    { question: "26. ¿Cuál de los siguientes NO es un framework o biblioteca de JavaScript?", answers: ["React", "Ruby on Rails", "Vue.js", "Angular"], correct: 1 },
    
    { question: "27. ¿Qué lenguaje se utiliza principalmente para estilizar páginas web?", answers: ["HTML", "JavaScript", "CSS", "PHP"], correct: 2 },
    
    { question: "28. ¿Cuál es la diferencia entre `==` y `===` en JavaScript?", answers: ["No hay diferencia, son sinónimos", "`==` compara valores y tipos, mientras que `===` solo compara valores", "`==` compara solo valores, mientras que `===` compara valores y tipos", "`==` es para comparación de strings y `===` para números"], correct: 2 },
    
    { question: "29. ¿Qué significa AJAX?", answers: ["Asynchronous JavaScript And XML", "Advanced JavaScript And XHTML", "Automated JavaScript Application XML", "Application JavaScript API XML"], correct: 0 },
    
    { question: "30. ¿Qué es un callback en JavaScript?", answers: ["Una función que se llama cuando otra función ha terminado", "Un error que ocurre durante la ejecución del código", "Una técnica para optimizar el rendimiento", "Un método para llamar a funciones remotas"], correct: 0 },
    
    { question: "31. ¿Qué es el \"hoisting\" en JavaScript?", answers: ["Una técnica para elevar elementos en la página", "El comportamiento predeterminado de mover declaraciones al principio de su ámbito", "Un método para llamar funciones desde otros archivos", "Una técnica para optimizar el rendimiento del código"], correct: 1 },
    
    { question: "32. ¿Qué es un \"closure\" en JavaScript?", answers: ["Una técnica para cerrar conexiones de red", "Un error que ocurre cuando una función no puede ejecutarse", "Una función que tiene acceso a variables de su función padre incluso después de que ésta haya terminado", "Un método para finalizar la ejecución de un bucle"], correct: 2 },
    
    { question: "33. ¿Qué es ES6 o ECMAScript 2015?", answers: ["Un framework de JavaScript", "Un motor de JavaScript", "Una versión estándar de JavaScript con nuevas características", "Un compilador de JavaScript"], correct: 2 },
    
    { question: "34. ¿Qué es un \"Promise\" en JavaScript?", answers: ["Un objeto que representa la eventual finalización o fallo de una operación asíncrona", "Una garantía de que el código se ejecutará sin errores", "Un método para asegurar que una función siempre devuelve un valor", "Una técnica para mejorar el rendimiento de las aplicaciones web"], correct: 0 },
    
    { question: "35. ¿Qué es el evento \"DOMContentLoaded\" en JavaScript?", answers: ["Se dispara cuando se carga completamente el DOM, sin esperar a las imágenes y hojas de estilo", "Se dispara cuando la página está completamente cargada, incluyendo todos los recursos", "Se dispara cuando se modifica el contenido del DOM", "Se dispara cuando el usuario interactúa con el DOM"], correct: 0 },
    
    { question: "36. ¿Qué es un \"transpilador\" en el contexto de JavaScript?", answers: ["Una herramienta que traduce código JavaScript moderno a versiones compatibles con navegadores antiguos", "Un programa que elimina código no utilizado", "Una herramienta que optimiza el rendimiento del código JavaScript", "Un programa que convierte JavaScript en otro lenguaje de programación"], correct: 0 },
    
    { question: "37. ¿Qué es el \"Virtual DOM\" en el contexto de React?", answers: ["Una representación virtual del DOM real utilizada para optimizar las actualizaciones", "Un DOM especial para aplicaciones de realidad virtual", "Una técnica para crear elementos DOM dinámicamente", "Un método para guardar el estado del DOM en caso de errores"], correct: 0 },
    
    { question: "38. ¿Qué es un \"selector\" en CSS?", answers: ["Una herramienta para seleccionar colores", "Un patrón que define a qué elementos se aplican los estilos", "Un método para elegir qué archivos CSS cargar", "Una técnica para optimizar el rendimiento de CSS"], correct: 1 },
    
    { question: "39. ¿Qué es SCSS?", answers: ["Una versión simplificada de CSS", "Un lenguaje de programación del lado del servidor", "Una sintaxis de Sass que es compatible con CSS", "Un formato de compresión para archivos CSS"], correct: 2 },
    
    { question: "40. ¿Qué es \"box-sizing\" en CSS?", answers: ["Una técnica para calcular el tamaño de las cajas de texto", "Una propiedad que define cómo se calculan el ancho y alto de un elemento", "Un método para crear diseños basados en cuadrículas", "Una unidad de medida en CSS"], correct: 1 },
    
    // Desarrollo Multiplataforma y Multidispositivo
    { question: "41. ¿Qué es el diseño responsive?", answers: ["Un tipo de diseño que responde automáticamente a las acciones del usuario", "Un diseño que se adapta a diferentes tamaños de pantalla y dispositivos", "Un diseño que carga rápidamente en conexiones lentas", "Un diseño que solo funciona en dispositivos móviles"], correct: 1 },
    
    { question: "42. ¿Qué herramienta permite desarrollar aplicaciones móviles con tecnologías web?", answers: ["GitHub", "Docker", "Apache Cordova", "WordPress"], correct: 2 },
    
    { question: "43. ¿Qué es una PWA?", answers: ["Progressive Web Application", "Personal Web Adapter", "Professional Web API", "Platform Web Access"], correct: 0 },
    
    { question: "44. ¿Qué son los \"media queries\" en CSS?", answers: ["Consultas a bases de datos de medios", "Técnicas para optimizar la carga de imágenes y videos", "Reglas CSS que se aplican según las características del dispositivo", "Métodos para integrar redes sociales en una web"], correct: 2 },
    
    { question: "45. ¿Qué es un enfoque \"mobile-first\" en diseño web?", answers: ["Diseñar primero para dispositivos móviles y luego adaptar para pantallas más grandes", "Crear aplicaciones exclusivamente para dispositivos móviles", "Priorizar la velocidad de carga en dispositivos móviles", "Desarrollar primero una aplicación móvil nativa y luego una versión web"], correct: 0 },
    
    { question: "46. ¿Qué es el \"viewport\" en desarrollo web móvil?", answers: ["Una unidad de medida relativa", "El área visible de una página web en un dispositivo", "Una técnica para escalar imágenes", "Un método para probar sitios web en diferentes dispositivos"], correct: 1 },
    
    { question: "47. ¿Qué framework permite desarrollar aplicaciones nativas para iOS y Android usando React?", answers: ["React Mobile", "React Native", "React Hybrid", "React Cross-platform"], correct: 1 },
    
    { question: "48. ¿Qué es Flutter?", answers: ["Un framework de Google para crear aplicaciones nativas multiplataforma", "Una biblioteca de JavaScript para animaciones", "Un preprocesador de CSS", "Un formato de intercambio de datos liviano"], correct: 0 },
    
    { question: "49. ¿Qué es Ionic?", answers: ["Un framework para crear aplicaciones nativas", "Una biblioteca para gestionar bases de datos", "Un framework para crear aplicaciones híbridas con tecnologías web", "Un lenguaje de programación para aplicaciones móviles"], correct: 2 },
    
    { question: "50. ¿Qué es el \"Service Worker\" en el contexto de las PWA?", answers: ["Un trabajador que proporciona servicios de mantenimiento web", "Un script que el navegador ejecuta en segundo plano, separado de la página web", "Un servidor web ligero para aplicaciones móviles", "Una API para gestionar servicios externos"], correct: 1 },
    
    { question: "51. ¿Qué es \"App Shell\" en el contexto de las PWA?", answers: ["La estructura básica de la interfaz de usuario sin datos específicos", "El shell de comandos para desarrollar aplicaciones web", "La capa de seguridad de una aplicación web", "El formato de empaquetado para distribuir PWA"], correct: 0 },
    
    { question: "52. ¿Qué permite que una PWA funcione offline?", answers: ["LocalStorage", "Cookies", "Service Workers y Cache API", "SessionStorage"], correct: 2 },
    
    { question: "53. ¿Cuál de los siguientes no es un lenguaje de programación del lado del servidor?", answers: ["PHP", "CSS", "Python", "Node.js"], correct: 1 },
    
    { question: "54. ¿Qué significa API REST?", answers: ["Application Programming Interface Representational State Transfer", "Automated Protocol Interface Remote Exchange System Transfer", "Application Process Integration Real-time Exchange System Transfer", "Advanced Protocol Interface Representational System Transfer"], correct: 0 },
    
    { question: "55. ¿Qué es un ORM en desarrollo web?", answers: ["Object-Relational Mapping", "Online Resource Management", "Optimized Runtime Module", "Output Rendering Method"], correct: 0 },
    
    { question: "56. ¿Qué es Node.js?", answers: ["Un framework de JavaScript", "Un entorno de ejecución de JavaScript en el servidor", "Un servidor web", "Una base de datos NoSQL"], correct: 1 },
    
    { question: "57. ¿Qué es Express.js?", answers: ["Un framework de Node.js para aplicaciones web", "Un servidor web", "Un sistema de gestión de bases de datos", "Un lenguaje de programación"], correct: 0 },
    
    { question: "58. ¿Qué es un middleware en el desarrollo web?", answers: ["Software que actúa como puente entre diferentes aplicaciones o sistemas", "Un programa que gestiona bases de datos", "Una interfaz de usuario", "Un tipo de servidor web"], correct: 0 }
];	