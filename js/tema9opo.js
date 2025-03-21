const tema9opo = [

    { question: "01. ¿Qué es un firewall de próxima generación (NGFW)?", answers: ["Un firewall que solo bloquea tráfico saliente", "Un firewall que combina funcionalidades tradicionales con prevención de intrusiones y control de aplicaciones", "Un firewall que solo funciona en la nube", "Un firewall exclusivamente hardware"], correct: 1 },
    
    { question: "02. ¿Cuál de las siguientes NO es una función típica de un sistema IDS?", answers: ["Detección de anomalías", "Monitorización del tráfico de red", "Cifrado de datos en tránsito", "Generación de alertas"], correct: 2 },
    
    { question: "03. El protocolo IPsec opera principalmente en:", answers: ["Capa de aplicación", "Capa de transporte", "Capa de red", "Capa de enlace de datos"], correct: 2 },
    
    { question: "04. ¿Qué significa DMZ en seguridad de redes?", answers: ["Zona Desmilitarizada", "Zona de Defensa Múltiple", "Dominio de Máxima Zonificación", "Directorio Maestro de Zonas"], correct: 0 },
    
    { question: "05. ¿Cuál de las siguientes es una técnica de autenticación de dos factores?", answers: ["Nombre de usuario y contraseña", "Contraseña y huella digital", "Solo contraseña con requisitos complejos", "Dirección IP fija"], correct: 1 },
    
    { question: "06. ¿Qué tipo de VPN se utiliza típicamente para conectar oficinas remotas a la oficina central?", answers: ["VPN de acceso remoto", "VPN site-to-site", "VPN SSL", "VPN L2TP"], correct: 1 },
    
    { question: "07. ¿Qué función cumple un WAF (Web Application Firewall)?", answers: ["Proteger contra ataques a nivel de aplicación web", "Acelerar la carga de páginas web", "Gestionar el ancho de banda de la red", "Virtualizar servidores web"], correct: 0 },
    
    { question: "08. El protocolo HTTPS utiliza para el cifrado de datos:", answers: ["SSH", "TLS/SSL", "IPsec", "PGP"], correct: 1 },
    
    { question: "09. Un ataque de denegación de servicio distribuido (DDoS) se caracteriza por:", answers: ["Robo de credenciales de usuarios", "Múltiples sistemas atacando a un objetivo", "Cifrado de datos para pedir rescate", "Infiltración sigilosa en sistemas"], correct: 1 },
    
    { question: "10. ¿Cuál de estos NO es un protocolo utilizado en VPNs?", answers: ["L2TP", "PPTP", "IPsec", "SNMP"], correct: 3 },
    
    { question: "11. ¿Qué es un honeypot en seguridad de redes?", answers: ["Un sistema para bloquear ataques", "Un sistema deliberadamente vulnerable para atraer atacantes", "Un tipo de malware", "Un software de cifrado"], correct: 1 },
    
    { question: "12. El concepto de defensa en profundidad implica:", answers: ["Utilizar solo un firewall muy potente", "Tener múltiples capas de seguridad", "Centrar los recursos en un solo punto crítico", "Actualizar solo los sistemas más importantes"], correct: 1 },
    
    { question: "13. ¿Qué es Zero Trust en seguridad de redes?", answers: ["No permitir ninguna conexión a la red", "Un modelo que no confía en ningún usuario o dispositivo por defecto", "Una arquitectura sin firewalls", "Una red completamente aislada de Internet"], correct: 1 },
    
    { question: "14. El protocolo RADIUS se utiliza principalmente para:", answers: ["Cifrado de datos", "Autenticación, autorización y contabilidad", "Gestión de claves", "Detección de intrusiones"], correct: 1 },
    
    { question: "15. ¿Qué tecnología permite crear túneles seguros a través de Internet?", answers: ["DNS", "DHCP", "VPN", "FTP"], correct: 2 },
    
    { question: "16. Un ataque de man-in-the-middle consiste en:", answers: ["Interceptar comunicaciones entre dos partes", "Sobrecargar servidores con peticiones", "Explotar vulnerabilidades en sistemas operativos", "Adivinar contraseñas por fuerza bruta"], correct: 0 },
    
    { question: "17. ¿Cuál es la función principal de un NAT en seguridad perimetral?", answers: ["Cifrar todo el tráfico", "Ocultar las direcciones IP internas", "Detectar malware", "Gestionar certificados digitales"], correct: 1 },
    
    { question: "18. ¿Qué protocolo se utiliza comúnmente para el acceso remoto seguro a sistemas Unix/Linux?", answers: ["Telnet", "FTP", "SSH", "HTTP"], correct: 2 },
    
    { question: "19. La segmentación de redes es importante para:", answers: ["Aumentar la velocidad de la red", "Limitar el impacto de las brechas de seguridad", "Reducir costos de hardware", "Simplificar la administración"], correct: 1 },
    
    { question: "20. ¿Qué es un SIEM en seguridad de redes?", answers: ["Un tipo de firewall", "Sistema de gestión de eventos e información de seguridad", "Un protocolo de cifrado", "Un tipo de ataque"], correct: 1 },
    
    { question: "21. El endpoint security se refiere a:", answers: ["La seguridad en los routers perimetrales", "La seguridad en los dispositivos finales como PC, móviles, etc.", "La seguridad en los servidores centrales", "La seguridad en las conexiones WiFi"], correct: 1 },
    
    { question: "22. ¿Qué función cumple un UTM (Unified Threat Management)?", answers: ["Solo protección contra virus", "Centralizar múltiples funciones de seguridad en un único dispositivo", "Gestionar únicamente el control de acceso", "Monitorizar exclusivamente el tráfico de red"], correct: 1 },
    
    { question: "23. El protocolo HTTPS utiliza por defecto el puerto:", answers: ["80", "443", "22", "25"], correct: 1 },
    
    { question: "24. ¿Qué tecnología se utiliza para verificar la identidad de un sitio web?", answers: ["Firewall", "Antivirus", "Certificados SSL/TLS", "VPN"], correct: 2 },
    
    { question: "25. Un EDR (Endpoint Detection and Response) se centra en:", answers: ["Protección de servidores", "Detección y respuesta a amenazas en dispositivos finales", "Gestión de contraseñas", "Configuración de routers"], correct: 1 },
    
    { question: "26. La tecnología de sandboxing se utiliza para:", answers: ["Ejecutar código en un entorno aislado", "Cifrar archivos", "Gestionar contraseñas", "Acelerar conexiones de red"], correct: 0 },
    
    { question: "27. ¿Cuál es una característica de las VPN basadas en SSL?", answers: ["Requieren siempre hardware específico", "Funcionan a nivel de aplicación", "Solo son compatibles con Windows", "No requieren autenticación"], correct: 1 },
    
    { question: "28. ¿Qué es un ataque de phishing?", answers: ["Un tipo de malware que cifra archivos", "Un intento de obtener información confidencial suplantando entidades legítimas", "Un ataque que sobrecarga servidores", "Una técnica para romper contraseñas"], correct: 1 },
    
    { question: "29. La autenticación multifactor combina:", answers: ["Solo usuarios y contraseñas", "Múltiples contraseñas diferentes", "Algo que sabes, algo que tienes y/o algo que eres", "Solo sistemas biométricos"], correct: 2 },
    
    { question: "30. ¿Qué medida NO es típica en la seguridad del puesto de usuario?", answers: ["Antivirus", "Firewall personal", "Cifrado de disco", "Configuración de routers perimetrales"], correct: 3 },
    
    { question: "31. Un IPS (Sistema de Prevención de Intrusiones) se diferencia de un IDS en que:", answers: ["Solo detecta amenazas", "Puede bloquear activamente el tráfico malicioso", "No genera alertas", "Solo funciona a nivel de aplicación"], correct: 1 },
    
    { question: "32. ¿Qué protocolo es el más seguro para acceso remoto?", answers: ["Telnet", "FTP", "SSH", "HTTP"], correct: 2 },
    
    { question: "33. El concepto de least privilege en seguridad informática significa:", answers: ["Dar acceso mínimo necesario para realizar tareas", "Restringir completamente todos los accesos", "Dar privilegios solo a administradores", "Permitir todo el acceso y luego restringir"], correct: 0 },
    
    { question: "34. ¿Qué es el network segmentation?", answers: ["Dividir una red en subredes lógicas o físicas", "Comprimir datos de red", "Cifrar todo el tráfico de red", "Cambiar dinámicamente direcciones IP"], correct: 0 },
    
    { question: "35. Un SOC (Security Operations Center) se encarga de:", answers: ["Vender productos de seguridad", "Monitorizar y analizar la postura de seguridad de una organización", "Desarrollar software seguro", "Auditar únicamente servidores"], correct: 1 },
    
    { question: "36. El protocolo IPsec puede operar en modo:", answers: ["Transporte y túnel", "Cliente y servidor", "Estático y dinámico", "Público y privado"], correct: 0 },
    
    { question: "37. ¿Qué es una ACL en seguridad de redes?", answers: ["Un tipo de malware", "Un protocolo de cifrado", "Una lista de control de acceso", "Un tipo de autenticación"], correct: 2 },
    
    { question: "38. El concepto de air gap en seguridad implica:", answers: ["Redes completamente desconectadas físicamente", "Redes con alta latencia", "Conexiones inalámbricas seguras", "Redes con múltiples firewalls"], correct: 0 },
    
    { question: "39. ¿Qué es el port scanning?", answers: ["Una técnica para optimizar puertos de red", "Un método para descubrir servicios activos en sistemas", "Un tipo de cifrado", "Una configuración de firewall"], correct: 1 },
    
    { question: "40. La tecnología NAC (Network Access Control) permite:", answers: ["Acelerar el tráfico de red", "Controlar qué dispositivos pueden conectarse a la red", "Cifrar todo el tráfico", "Detectar solo ataques externos"], correct: 1 },
    
    { question: "41. ¿Qué es un CASB (Cloud Access Security Broker)?", answers: ["Un tipo de firewall", "Un servicio que media entre usuarios y aplicaciones cloud para aplicar políticas de seguridad", "Un protocolo de autenticación", "Un tipo de VPN"], correct: 1 },
    
    { question: "42. El protocolo LDAP se utiliza principalmente para:", answers: ["Cifrado de datos", "Servicios de directorio y autenticación", "Enrutamiento de paquetes", "Gestión de certificados"], correct: 1 },
    
    { question: "43. ¿Qué tecnología permite la inspección del tráfico cifrado?", answers: ["SSL Inspection", "NAT", "Packet filtering", "MAC filtering"], correct: 0 },
    
    { question: "44. Un proxy inverso (reverse proxy) se utiliza para:", answers: ["Acelerar conexiones de usuario", "Proteger y ocultar servidores internos", "Bloquear exclusivamente malware", "Gestionar contraseñas de usuario"], correct: 1 },
    
    { question: "45. ¿Qué es una vulnerabilidad de día cero (zero-day)?", answers: ["Una vulnerabilidad que existe desde hace mucho tiempo", "Una vulnerabilidad que se explota antes de que haya un parche disponible", "Un ataque que ocurre a medianoche", "Una vulnerabilidad que no afecta a sistemas críticos"], correct: 1 },
    
    { question: "46. La gestión de parches es crítica porque:", answers: ["Mejora el rendimiento de los sistemas", "Corrige vulnerabilidades conocidas", "Reduce el consumo de energía", "Simplifica la interfaz de usuario"], correct: 1 },
    
    { question: "47. ¿Qué tecnología se utiliza para verificar la integridad de los archivos?", answers: ["Encriptación", "Hashing", "Compresión", "Virtualización"], correct: 1 },
    
    { question: "48. Un sistema HIDS (Host-based Intrusion Detection System) monitoriza:", answers: ["Solo el tráfico de red", "Actividades sospechosas en un host específico", "Solo el tráfico cifrado", "Exclusivamente conexiones VPN"], correct: 1 },
    
    { question: "49. ¿Qué medida de seguridad utiliza preguntas personales para recuperar acceso?", answers: ["Two-factor authentication", "Biometría", "Challenge-response questions", "Certificate pinning"], correct: 2 },
    
    { question: "50. La tecnología SD-WAN (Software-Defined Wide Area Network) ofrece:", answers: ["Solo mayor velocidad de conexión", "Gestión centralizada y seguridad mejorada para redes distribuidas", "Exclusivamente cifrado de datos", "Menor costo sin beneficios de seguridad"], correct: 1 },
    
    { question: "51. ¿Qué es el principle of least privilege?", answers: ["Dar acceso únicamente a administradores", "Conceder solo los permisos mínimos necesarios", "Limitar el acceso solo a horario laboral", "Forzar cambios de contraseña diarios"], correct: 1 },
    
    { question: "52. El concepto de ''defense in depth'' implica:", answers: ["Usar un único mecanismo de defensa muy potente", "Implementar múltiples capas de seguridad", "Centralizar todas las defensas en un punto", "Utilizar solo soluciones open source"], correct: 1 },
    
    { question: "53. ¿Qué tecnología permite la federación de identidades entre organizaciones?", answers: ["DHCP", "SAML", "ARP", "SMTP"], correct: 1 },
    
    { question: "54. El bloqueo geográfico (geo-blocking) de IP se utiliza para:", answers: ["Mejorar la velocidad de conexión", "Restringir acceso basado en la ubicación geográfica", "Compresión de datos", "Autenticar usuarios"], correct: 1 },
    
    { question: "55. ¿Qué es el network segmentation?", answers: ["Dividir una red en segmentos más pequeños y controlables", "Comprimir paquetes de red", "Encriptar todo el tráfico", "Usar múltiples proveedores de Internet"], correct: 0 },
    
    { question: "56. Un EDR (Endpoint Detection and Response) ofrece:", answers: ["Solo protección contra virus conocidos", "Detección, investigación y mitigación de amenazas en endpoints", "Exclusivamente control de acceso a la red", "Gestión de actualizaciones de software"], correct: 1 },
    
    { question: "57. ¿Qué protocolo es utilizado por OpenVPN?", answers: ["Exclusivamente IPsec", "SSL/TLS", "Exclusivamente L2TP", "SMTP"], correct: 1 },
    
    { question: "58. La tecnología DLP (Data Loss Prevention) se centra en:", answers: ["Prevenir la pérdida de hardware", "Detectar y prevenir la filtración de datos sensibles", "Acelerar transmisiones de red", "Compresión de archivos"], correct: 1 },
    
    { question: "59. ¿Qué es un NGFW (Next Generation Firewall)?", answers: ["Un firewall exclusivamente software", "Un firewall que incluye funciones avanzadas como IPS y control de aplicaciones", "Un firewall que solo funciona en la nube", "Un firewall que solo analiza tráfico saliente"], correct: 1 },
    
    { question: "60. En el modelo Zero Trust:", answers: ["Se confía en los usuarios internos por defecto", "No se confía en ningún usuario o dispositivo sin verificación", "Solo se verifica el acceso una vez por sesión", "Se elimina toda necesidad de autenticación"], correct: 1 }
];
