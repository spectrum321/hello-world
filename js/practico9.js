const practico9 = [
      
    { question: "01. ¿Cuál es el principal objetivo de la seguridad perimetral en una red corporativa?", answers: ["Aumentar la velocidad de conexión", "Establecer una barrera de protección entre la red interna y externa", "Reducir el consumo de ancho de banda", "Facilitar el acceso de usuarios externos"], correct: 1 },
    
    { question: "02. Un firewall de aplicación (WAF) opera principalmente en:", answers: ["Capa 2 del modelo OSI", "Capa 3 del modelo OSI", "Capa 7 del modelo OSI", "Todas las capas simultáneamente"], correct: 2 },
    
    { question: "03. ¿Qué protocolo se utiliza principalmente en las VPN de tipo IPSec?", answers: ["HTTP", "FTP", "ESP (Encapsulating Security Payload)", "SMTP"], correct: 2 },
    
    { question: "04. La técnica de NAT (Network Address Translation) contribuye a la seguridad porque:", answers: ["Aumenta la velocidad de navegación", "Oculta las direcciones IP internas de la red", "Reduce el tráfico de red", "Mejora la calidad del servicio"], correct: 1 },
    
    { question: "05. ¿Cuál de los siguientes NO es un tipo de firewall según su arquitectura?", answers: ["Firewall de filtrado de paquetes", "Firewall de aplicación", "Firewall de estado", "Firewall de encriptación"], correct: 3 },
    
    { question: "06. En una VPN SSL/TLS, la autenticación del usuario se realiza típicamente mediante:", answers: ["Solo certificados digitales", "Solo usuario y contraseña", "Certificados digitales y/o credenciales de usuario", "Dirección MAC del dispositivo"], correct: 2 },
    
    { question: "07. ¿Qué puerto TCP utiliza por defecto el protocolo HTTPS?", answers: ["80", "443", "8080", "22"], correct: 1 },
    
    { question: "08. Un sistema de detección de intrusiones (IDS) en modo promiscuo:", answers: ["Solo analiza el tráfico dirigido a él", "Analiza todo el tráfico que pasa por el segmento de red", "Bloquea automáticamente las amenazas", "Solo funciona con protocolos cifrados"], correct: 1 },
    
    { question: "09. ¿Cuál es la diferencia principal entre un IDS y un IPS?", answers: ["El IDS detecta y el IPS previene/bloquea", "El IDS es más rápido que el IPS", "El IPS solo funciona en redes inalámbricas", "No hay diferencias significativas"], correct: 0 },
    
    { question: "10. En el contexto de VPN, ¿qué significa 'túnel dividido' (split tunneling)?", answers: ["Usar dos proveedores de VPN simultáneamente", "Permitir que parte del tráfico vaya por la VPN y parte directamente a Internet", "Dividir la conexión VPN en múltiples túneles", "Usar diferentes protocolos de cifrado"], correct: 1 },
    
    { question: "11. ¿Cuál de estos protocolos de VPN se considera más seguro?", answers: ["PPTP", "L2TP/IPSec", "OpenVPN", "Todas son igualmente seguras"], correct: 2 },
    
    { question: "12. Un proxy inverso se utiliza principalmente para:", answers: ["Ocultar la identidad de los clientes", "Proteger y balancear carga hacia servidores internos", "Acelerar la navegación web", "Filtrar contenido web"], correct: 1 },
    
    { question: "13. ¿Qué es un honeypot en seguridad de redes?", answers: ["Un tipo de firewall avanzado", "Un sistema señuelo para atraer y detectar atacantes", "Un protocolo de autenticación", "Una técnica de cifrado"], correct: 1 },
    
    { question: "14. La autenticación de dos factores (2FA) en el acceso remoto combina:", answers: ["Dos contraseñas diferentes", "Algo que sabes y algo que tienes", "Solo elementos biométricos", "Dos certificados digitales"], correct: 1 },
    
    { question: "15. ¿Cuál es el puerto por defecto para SSH?", answers: ["21", "22", "23", "25"], correct: 1 },
    
    { question: "16. Un ataque de denegación de servicio distribuido (DDoS) se caracteriza por:", answers: ["Usar una sola fuente de ataque", "Atacar solo servidores web", "Utilizar múltiples fuentes para saturar el objetivo", "Solo afectar a redes inalámbricas"], correct: 2 },
    
    { question: "17. ¿Qué protocolo utiliza por defecto una VPN de tipo L2TP?", answers: ["Puerto TCP 1701", "Puerto UDP 1701", "Puerto TCP 443", "Puerto UDP 500"], correct: 1 },
    
    { question: "18. Un certificado digital en una VPN SSL sirve para:", answers: ["Solo cifrar la comunicación", "Solo autenticar el servidor", "Autenticar y establecer cifrado", "Solo gestionar direcciones IP"], correct: 2 },
    
    { question: "19. ¿Cuál de estas medidas NO es típica de la seguridad en el puesto del usuario?", answers: ["Antivirus actualizado", "Firewall personal", "Cifrado del disco duro", "Configuración de routers"], correct: 3 },
    
    { question: "20. Un ataque man-in-the-middle en redes WiFi se puede prevenir principalmente mediante:", answers: ["Ocultar el SSID", "Usar cifrado WPA3", "Cambiar frecuentemente la contraseña", "Reducir la potencia de transmisión"], correct: 1 },
    
    { question: "21. ¿Qué es un VLAN y cómo contribuye a la seguridad?", answers: ["Un tipo de antivirus para redes", "Una red virtual que segmenta el tráfico lógicamente", "Un protocolo de cifrado", "Un sistema de backup automático"], correct: 1 },
    
    { question: "22. El protocolo RADIUS se utiliza principalmente para:", answers: ["Cifrar comunicaciones", "Autenticación, autorización y contabilidad (AAA)", "Transferir archivos", "Gestionar direcciones IP"], correct: 1 },
    
    { question: "23. ¿Cuál es la principal vulnerabilidad del protocolo WEP?", answers: ["Usa claves muy cortas", "Su algoritmo de cifrado es débil y reutiliza vectores", "No permite autenticación", "Es muy lento"], correct: 1 },
    
    { question: "24. Un DMZ (zona desmilitarizada) en seguridad de redes es:", answers: ["Un área sin conexión a Internet", "Una red intermedia entre la red interna y externa", "Un tipo de firewall", "Una técnica de cifrado"], correct: 1 },
    
    { question: "25. ¿Qué información NO debe incluirse en una política de contraseñas seguras?", answers: ["Longitud mínima", "Complejidad requerida", "Ejemplos de contraseñas válidas", "Frecuencia de cambio"], correct: 2 },
    
    { question: "26. El protocolo SNMP v3 mejora la seguridad respecto a versiones anteriores porque:", answers: ["Es más rápido", "Incluye autenticación y cifrado", "Usa menos ancho de banda", "Es compatible con IPv6"], correct: 1 },
    
    { question: "27. ¿Cuál de estos NO es un método de autenticación biométrica?", answers: ["Huella dactilar", "Reconocimiento facial", "Token RSA", "Iris del ojo"], correct: 2 },
    
    { question: "28. En una VPN site-to-site, los túneles se establecen entre:", answers: ["Usuario y servidor", "Dos o más redes/ubicaciones", "Cliente y aplicación", "Solo dispositivos móviles"], correct: 1 },
    
    { question: "29. ¿Qué es el hardening de un sistema?", answers: ["Instalar más hardware", "Endurecer físicamente los equipos", "Configurar el sistema eliminando vulnerabilidades", "Aumentar la velocidad del procesador"], correct: 2 },
    
    { question: "30. Un ataque de phishing dirigido específicamente a ejecutivos se denomina:", answers: ["Vishing", "Smishing", "Spear phishing", "Whaling"], correct: 3 },
    
    { question: "31. ¿Cuál es la principal diferencia entre cifrado simétrico y asimétrico?", answers: ["La velocidad de procesamiento", "El número de claves utilizadas", "El tipo de algoritmo", "La longitud de la clave"], correct: 1 },
    
    { question: "32. Un sistema SIEM (Security Information and Event Management) se utiliza para:", answers: ["Solo detectar virus", "Correlacionar y analizar eventos de seguridad", "Gestionar contraseñas", "Configurar firewalls"], correct: 1 },
    
    { question: "33. ¿Qué protocolo se recomienda para la sincronización segura de tiempo en redes?", answers: ["NTP sin cifrar", "NTP sobre IPSec", "SNTP", "Cualquiera es válido"], correct: 1 },
    
    { question: "34. La técnica de port knocking consiste en:", answers: ["Escanear puertos abiertos", "Cerrar puertos automáticamente", "Acceder a servicios mediante secuencias de conexión específicas", "Cambiar números de puerto dinámicamente"], correct: 2 },
    
    { question: "35. ¿Cuál de estos ataques explota vulnerabilidades en aplicaciones web?", answers: ["SQL Injection", "Ping of Death", "ARP Spoofing", "DNS Poisoning"], correct: 0 },
    
    { question: "36. Un WAF (Web Application Firewall) protege principalmente contra:", answers: ["Ataques de red de capa 3", "Ataques específicos a aplicaciones web", "Virus y malware", "Ataques físicos"], correct: 1 },
    
    { question: "37. ¿Qué es la segmentación de red?", answers: ["Dividir físicamente los cables de red", "Separar lógicamente diferentes partes de la red", "Usar diferentes proveedores de Internet", "Instalar múltiples routers"], correct: 1 },
    
    { question: "38. El protocolo WPA3 introduce como principal mejora:", answers: ["Mayor velocidad de conexión", "Autenticación simultánea de iguales (SAE)", "Soporte para más dispositivos", "Menor consumo de energía"], correct: 1 },
    
    { question: "39. ¿Cuál es el propósito principal de un sandbox en seguridad?", answers: ["Almacenar backups", "Ejecutar código sospechoso en un entorno aislado", "Cifrar archivos", "Gestionar usuarios"], correct: 1 },
    
    { question: "40. La técnica de zero-trust security se basa en el principio de:", answers: ["Confiar en todos los usuarios internos", "No confiar en nada y verificar todo", "Solo proteger el perímetro", "Usar solo cifrado simétrico"], correct: 1 }
];