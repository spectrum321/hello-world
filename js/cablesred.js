const cablesred = [
       
    { question: "01. ¿Cuál es la categoría de cable UTP más utilizada actualmente en instalaciones nuevas?", answers: ["Cat 5", "Cat 5e", "Cat 6", "Cat 7"], correct: 2 },
    
    { question: "02. ¿Qué tipo de conector se utiliza habitualmente en los cables UTP?", answers: ["BNC", "RJ-11", "RJ-45", "SC"], correct: 2 },
    
    { question: "03. ¿Cuál es la velocidad máxima que puede soportar un cable Cat 5e?", answers: ["100 Mbps", "1 Gbps", "10 Gbps", "40 Gbps"], correct: 1 },
    
    { question: "04. ¿Qué significa UTP en el contexto de cables de red?", answers: ["Ultra Twisted Pair", "Universal Twisted Pair", "Unified Transmission Protocol", "Unshielded Twisted Pair"], correct: 3 },
    
    { question: "05. ¿Cuál de los siguientes NO es un estándar de cableado para conectores RJ-45?", answers: ["T568A", "T568B", "T569C", "Directo (straight-through)"], correct: 2 },
    
    { question: "06. ¿Qué tipo de cable se utiliza para conectar dos dispositivos del mismo tipo (p.ej., dos computadoras)?", answers: ["Cable directo", "Cable cruzado (crossover)", "Cable coaxial", "Cable de fibra óptica"], correct: 1 },
    
    { question: "07. ¿Cuál es la longitud máxima recomendada para un cable UTP Cat 6?", answers: ["50 metros", "100 metros", "150 metros", "200 metros"], correct: 1 },
    
    { question: "08. ¿Qué significa STP en el contexto de cables de red?", answers: ["Standard Transfer Protocol", "Shielded Twisted Pair", "System Transfer Path", "Standard Telecommunication Pair"], correct: 1 },
    
    { question: "09. ¿Cuántos pares de cables contiene un cable UTP estándar utilizado en redes Ethernet?", answers: ["2 pares", "3 pares", "4 pares", "8 pares"], correct: 2 },
    
    { question: "10. ¿Qué herramienta se utiliza para verificar la continuidad y el mapeado de cables de red?", answers: ["Multímetro", "Tester de cable o comprobador de red", "Analizador de espectro", "Osciloscopio"], correct: 1 },
    
    { question: "11. ¿Qué cable ofrece mayor protección contra interferencias electromagnéticas?", answers: ["UTP Cat 5e", "UTP Cat 6", "STP Cat 6", "Cable coaxial"], correct: 2 },
    
    { question: "12. ¿Qué color de cables se cruzan en un cable crossover T568A/T568B?", answers: ["Verde y naranja", "Azul y marrón", "Verde y azul", "Naranja y marrón"], correct: 0 },
    
    { question: "13. ¿Qué tecnología permite la alimentación eléctrica a través de cables de red Ethernet?", answers: ["PLC (Power Line Communication)", "POE (Power Over Ethernet)", "EOP (Ethernet Over Power)", "EPD (Ethernet Power Delivery)"], correct: 1 },
    
    { question: "14. ¿Qué característica principal diferencia un cable Cat 7 de un Cat 6a?", answers: ["Número de pares trenzados", "Tipo de conector", "Blindaje individual de cada par", "Calibre del conductor"], correct: 2 },
    
    { question: "15. ¿Cuál es la velocidad máxima teórica que puede soportar un cable Cat 6a?", answers: ["1 Gbps", "10 Gbps", "40 Gbps", "100 Gbps"], correct: 1 },
    
    { question: "16. ¿Qué tipo de cable es más adecuado para instalaciones exteriores expuestas a la intemperie?", answers: ["UTP estándar", "STP con protección UV", "UTP con vaina anti-UV y resistente al agua", "Cualquier cable Cat 5e o superior"], correct: 2 },
    
    { question: "17. ¿Qué norma define los estándares para el cableado de telecomunicaciones en edificios comerciales?", answers: ["IEEE 802.3", "ANSI/TIA-568", "ISO/IEC 11801", "EN 50173"], correct: 1 },
    
    { question: "18. ¿Qué cable utilizarías para conectar un ordenador directamente a un router?", answers: ["Cable cruzado", "Cable directo", "Cable null-modem", "Cable serie"], correct: 1 },
    
    { question: "19. ¿Qué es el \"alien crosstalk\" en cables de red?", answers: ["Interferencia entre cables adyacentes", "Interferencia entre pares dentro del mismo cable", "Interferencia causada por señales de radio externas", "Interferencia en los conectores RJ-45"], correct: 0 },
    
    { question: "20. ¿Cuál es el propósito principal del trenzado en los pares de cables UTP?", answers: ["Aumentar la resistencia física del cable", "Reducir la interferencia electromagnética", "Mejorar la flexibilidad del cable", "Reducir la resistencia eléctrica"], correct: 1 },
    
    { question: "21. ¿Qué significa MDI/MDIX en el contexto de conexiones Ethernet?", answers: ["Medium Dependent Interface/Medium Dependent Interface Crossover", "Multiple Device Interface/Multiple Device Interface Crossover", "Medium Data Interface/Medium Data Interface Extension", "Multiple Digital Interface/Multiple Digital Interface Extension"], correct: 0 },
    
    { question: "22. ¿Qué tipo de cable tiene mejor rendimiento a largas distancias?", answers: ["UTP Cat 6", "STP Cat 7", "Cable coaxial", "Fibra óptica"], correct: 3 },
    
    { question: "23. ¿Qué propiedad determina la calidad de la instalación de un cable UTP según las normas?", answers: ["Resistencia del conductor", "Capacitancia del cable", "El tiempo de propagación", "El radio de curvatura"], correct: 2 },
    
    { question: "24. ¿Cuál es la principal ventaja de un cable plenum sobre un cable riser?", answers: ["Mayor velocidad de transmisión", "Mayor resistencia al fuego y baja emisión de humos tóxicos", "Mayor resistencia a la humedad", "Mayor flexibilidad"], correct: 1 },
    
    { question: "25. ¿Qué dispositivo utilizarías para crimpar un conector RJ-45 en un cable UTP?", answers: ["Pelacables", "Crimpadora RJ-45", "Tester de cable", "Cortadora de precisión"], correct: 1 },
    
    { question: "26. ¿Qué estándar define las características de transmisión para la categoría Cat 6a?", answers: ["ANSI/TIA-568-C.2", "ISO/IEC 11801 Class E", "EN 50173-1", "IEEE 802.3an"], correct: 0 },
    
    { question: "27. ¿Cuál de las siguientes NO es una característica que se mide en la certificación de un cable UTP?", answers: ["NEXT (Near End Crosstalk)", "Pérdida de retorno (Return Loss)", "Resistencia de aislamiento", "Atenuación"], correct: 2 },
    
    { question: "28. ¿Qué significa la sigla LSZH en algunos cables de red?", answers: ["Low Signal Zone Habilitation", "Low Smoke Zero Halogen", "Long Span Zone Handling", "Linear Symmetrical Zero Handling"], correct: 1 },
    
    { question: "29. ¿Qué tipo de cable se utiliza normalmente para redes de área local industriales con altos niveles de interferencia electromagnética?", answers: ["UTP Cat 6", "FTP (Foiled Twisted Pair)", "Cable coaxial", "Fibra óptica"], correct: 3 },
    
    { question: "30. ¿Qué orden de colores corresponde al estándar T568B para los pares 1 y 2?", answers: ["Blanco-verde, verde, blanco-naranja, naranja", "Blanco-naranja, naranja, blanco-verde, verde", "Blanco-azul, azul, blanco-naranja, naranja", "Blanco-naranja, naranja, blanco-azul, azul"], correct: 1 }
];
