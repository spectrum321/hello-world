const tema24 = [
    
    { question: "01. Señale cuál es la opción incorrecta respecto a los componentes principales de un modelo de tres capas:", answers: ["El cliente procesa la lógica de presentación.", "El servidor intermedio (servidor de aplicaciones) procesa la lógica de negocio.", "El servidor final (servidor de base de datos) procesa la lógica de datos.", "El servidor de encaminamiento dirige las peticiones distribuidas entre cliente y servidor de base de datos."], correct: 3 },
    
    { question: "02. ¿Qué significan las siglas SOA?", answers: ["Arquitectura Orientada a Servicios.", "Arquitectura Orientada a Sistemas.", "Sistema de Objetos Abiertos.", "Sistema de Objetos Accesibles."], correct: 0 },
    
    { question: "03. Arquitectura Cliente/Servidor. Descomposición por niveles. Uno de los niveles no está correctamente definido. ¿Cuál es?", answers: ["Nivel de Presentación: agrupa todos los elementos asociados al Cliente", "Nivel de Aplicación: agrupa todos los elementos asociados al componente Servidor", "Nivel de Comunicación: agrupa todos los elementos para la validación de la información de negocio y su transmisión", "Nivel de Base de Datos: agrupa las actividades asociadas al acceso de los datos"], correct: 2 },
    
    { question: "04. Una de las afirmaciones no es correcta. Las funciones que lleva a cabo el proceso cliente pueden resumirse en:", answers: ["Administrar la interfaz de usuario e interactuar con el usuario", "Realizar validaciones locales", "Generar requerimientos de bases de datos", "Recibir resultados del servidor y presentarlos sin realizar ningún procesamiento"], correct: 3 },
    
    { question: "05. ¿Cuál de los siguientes componentes no forma parte de la arquitectura de dos capas?", answers: ["Interfaz de usuario", "Componente para la lógica de negocio", "Servidor intermedio entre la interfaz de usuario y el gestor de datos que proporciona la lógica de negocio", "Componente para la gestión de la base de datos"], correct: 2 },
    
    { question: "06. Dentro de la clasificación de estilos del modelo cliente-servidor de dos capas, cuando el interfaz reside en el cliente, las bases de datos en el servidor y la lógica se reparte entre ambos se denomina tradicionalmente:", answers: ["Lógica distribuida.", "Base de datos distribuida.", "Administración de datos remota.", "Presentación distribuida."], correct: 0 },
    
    { question: "07. Dentro la arquitectura SOA, la orquestación de servicios se refiere a:", answers: ["La necesidad de que cada servicio Web que participe en un proceso conozca los mensajes a intercambiar con los otros servicios Web participantes en el mismo proceso.", "La instalación de los servicios Web relacionados dentro de un mismo servidor.", "El grado de interoperabilidad que ofrece un servicio Web para un proceso concreto.", "La existencia de un proceso central que controla y coordina la participación de los distintos servicios Web."], correct: 3 },
    
    { question: "08. En el patrón Modelo- Vista-Controlador, ¿sobre qué lenguaje se propuso inicialmente una solución?", answers: ["C", "C++", "Java", "Smalltalk."], correct: 3 },
    
    { question: "09. ¿Cuál de las siguientes afirmaciones es una responsabilidad del componente Modelo en el Modelo-Vista-Controlador?", answers: ["Mostrar la información al usuario.", "Buscar los datos del modelo.", "Administrar los eventos que provienen del usuario.", "Notificar a los observadores en caso de actualización."], correct: 3 },
    
    { question: "10. Una aplicación que se ejecuta en el cliente y que hace peticiones a diferentes programas que están en diferentes servidores, en diferentes máquinas, es una arquitectura del tipo:", answers: ["Monolítica", "Cliente-servidor", "De n-niveles o multicapa", "SOA"], correct: 1 },
    
    { question: "11. Una de las características de la arquitectura cliente-servidor es la transparencia. Señale la respuesta correcta acerca de las transparencias que constituyen la transparencia de red:", answers: ["De acceso y de concurrencia.", "De acceso y de fallos.", "De acceso y de escalabilidad.", "De acceso y de ubicación."], correct: 3 },
    
    { question: "12. En relación con la arquitectura cliente-servidor hay una diferencia conceptual entre capa y nivel, el nivel se asocia con una distribución...", answers: ["Lógica.", "Física.", "Completa.", "Distribuida."], correct: 1 },
    
    { question: "13. En una arquitectura tres capas, ¿dónde se encuentran ubicadas las reglas de negocio?", answers: ["En el servidor http", "En el servidor http/SSL", "En el servidor de aplicaciones", "En el servidor de base de datos"], correct: 2 },
    
    { question: "14. La arquitectura cliente-servidor se caracteriza por varios aspectos. ¿Cuál de los siguientes NO es uno de ellos?", answers: ["El almacenamiento siempre se realiza sobre sistemas centralizados tipo SAN / NAS", "Interoperabilidad", "Concurrencia", "Compartición de recursos"], correct: 0 },
    
    { question: "15. ¿Cuál de las siguientes NO es una ventaja de implementar una Arquitectura Orientada a Servicios (SOA)?", answers: ["Facilidad para abordar modelos de negocios basados en colaboración con otros entes (socios, proveedores).", "Mayor acomplamiento entre aplicaciones productoras y aplaciones consumidoras", "Poder para reeemplazar elementos de la capa de aplicaciones SOA sin disrupción en el proceso de negocios.", "Facilidad para la integración de tecnologías disímiles."], correct: 1 },
    
    { question: "16. ¿Qué término define el conjunto de software distribuido necesario para el soporte de interacciones entre clientes y servidores?", answers: ["Capa intermedia.", "Middleware.", "OutSoftware.", "Linkware."], correct: 1 },
    
    { question: "17. ¿Cuál de las siguientes NO es una característica propia de las arquitecturas cliente/servidor?", answers: ["Encapsulamiento de los servicios.", "Escalabilidad horizontal y vertical.", "Acoplamiento de sistemas.", "Interoperabilidad de plataformas."], correct: 2 },
    
    { question: "18. ¿Cuál de las siguientes opciones NO es una ventaja propia de una arquitectura en 3 capas?", answers: ["Reduce el tráfico en la red frente a una arquitectura de dos capas.", "Es una arquitectura mucho más escalable.", "La separación de roles en capas hace más fácil modificar y remplazar capas.", "Si aumenta el tamaño o complejidad de una capa, no afecta a las demás."], correct: 0 },
    
    { question: "19. ¿A qué hace referencia el modelo de 3 capas en el desarrollo de aplicaciones?", answers: ["A que la declaración de clases se realizará con al menos tres niveles de acceso diferenciados: clases públicas, clases privadas y clases protegidas.", "A que se establecerán tres jerarquías de herencia de clases, en la que partiendo de una clase raíz, existirán al menos hasta otras dos capas más de herencia.", "A que las aplicaciones se separarán en 3 capas, estableciendo una capa de Lógica de Presentación, una capa de Lógica de Negocio y una capa de Datos o de Persistencia.", "A que el procesamiento de documentos XML puede realizarse mediante un parser DOM (modelo de árbol), SAX (basado en eventos tipo push) o STAX (basado en eventos tipo pull)."], correct: 2 },
    
    { question: "20. Para la implantación de una arquitectura Cliente/Servidor del tipo 'cliente fino - servidor grueso':", answers: ["Se necesitan un mínimo de 2 equipos si se utiliza el modelo de 2 capas.", "Se necesitan un mínimo de 3 equipos si se utiliza el modelo de 3 capas.", "Puede ser implantada en un único equipo.", "El cliente es el responsable del acceso a los datos físicos y de procesar la lógica de negocio."], correct: 2 }
];