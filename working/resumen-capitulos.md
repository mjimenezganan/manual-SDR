# Resumen de capítulos (memoria de trabajo)

Fuente: `web/content/cap0.md` a `web/content/cap4.md`. Resumen fiel de lo que mencionan los capítulos, sin verificación externa de los datos. Si un capítulo cambia, actualizar esta sección.

---

## Módulo 0 — Cap. 0: El mapa del tesoro invisible

**Idea central:** el espectro radioeléctrico está lleno de señales invisibles (ondas electromagnéticas) que podemos captar con un SDR.

* Ejemplos cotidianos de señales: conversaciones piloto-torre, GPS de aviones, fotos de satélites meteorológicos, radios internacionales, Wi-Fi, Bluetooth y móvil.
* **SDR** (*Software Defined Radio*): pincho USB con antena. Convierte las ondas en datos y el ordenador las procesa con software gratuito (**SDR++** o **SDR#**).
* Pantalla del software:
  * **Analizador de espectro** (*Spectrum Display*): gráfica superior con la potencia de las señales.
  * **Cascada** (*Waterfall*): historial que cae hacia abajo. Líneas brillantes = emisiones activas.
  * "Regla del cazador": una línea vertical brillante en la cascada es una señal que se puede escuchar o decodificar.
* **Física:**
  * $f$ en Hz (MHz = millón de ciclos por segundo); $\lambda$ en metros.
  * $c \approx 300.000$ km/s = $3 \times 10^8$ m/s.
  * $c = f \cdot \lambda$, luego $\lambda = c/f$. Regla rápida: $\lambda \approx 300 / f_{\text{MHz}}$.
  * Ejemplos: 3 MHz → 100 m; 30 MHz → 10 m; 300 MHz → 1 m; 3 GHz → 10 cm.
  * El tamaño de la antena depende de la longitud de onda.
* **Mapa de bandas:**
  * LW (30–300 kHz): radiofaros, señal horaria, máxima cobertura.
  * MW (300 kHz–3 MHz): AM comercial (531–1602 kHz en Europa, canales de 9 o 10 kHz). De noche rebota.
  * HF (3–30 MHz): radioaficionados, emisoras lejanas, aviones oceánicos, estaciones militares cifradas.
  * VHF (30–300 MHz): FM comercial 87,5–108 MHz; banda aérea 118–137 MHz; radioaficionados 144–146 MHz.
  * UHF (300 MHz–3 GHz): PMR446 (446 MHz); ADS-B (1090 MHz); 4G/5G, Bluetooth y Wi-Fi 2,4 GHz (no escuchables por cifrado o complejidad).
  * SHF (>3 GHz): Wi-Fi 5 GHz, TV por satélite, radares meteorológicos, horno microondas (~2,45 GHz).
* **Kit de inicio:** pincho SDR basado en RTL2832U (RTL-SDR v3/v4 o similar), kit de dipolo con dos varillas telescópicas, ordenador con SDR++.
* **Misiones del libro:** 1) ajustar varillas de la antena; 2) sintonizar y ajustar filtros; 3) identificar modulación (FM, AM, SSB, digital); 4) decodificar voz, texto o imágenes.

---

## Módulo 1 — Cap. 1: Walkie-talkies PMR446 y el secreto de los subtonos

* Los walkies PMR446 de cajón, de juguete o profesionales son compatibles entre sí. El SDR permite escuchar todas sus conversaciones.
* **PMR446** (*Personal Mobile Radio*): UHF en 446 MHz, uso libre en Europa sin licencia ni examen.
* **Reglas del juego:**
  * Semi-dúplex: o se habla o se escucha.
  * **PTT** (*Push-To-Talk*), que en argot se llama "petetear".
  * Modulación **NFM** (FM estrecha).
  * Ancho de canal 12,5 kHz.
  * Comerciales: máximo 0,5 W y antena fija. Para el radioescucha, sin límites.
* **Banda:** 446,000–446,200 MHz. 16 canales separados 12,5 kHz.
  * Walkies antiguos: solo canales 1–8 (mitad inferior, 446,000–446,100 MHz).
  * El capítulo afirma que en 2018 se amplió a 16 canales.
* **Tabla de canales** (frecuencia central y uso):

| Canal | Frecuencia (MHz) | Uso indicado |
| --- | --- | --- |
| 1 | 446,00625 | Llamada general y juegos |
| 2 | 446,01875 | Familiar y ocio |
| 3 | 446,03125 | Excursiones / senderismo |
| 4 | 446,04375 | Comercios y almacenes |
| 5 | 446,05625 | Eventos y seguridad |
| 6 | 446,06875 | Obras y construcción |
| 7 | 446,08125 | Actividades al aire libre |
| 8 | 446,09375 | Emergencia en montaña (PMR) |
| 9 | 446,10625 | Nuevos tras 2018 |
| 10–16 | 446,11875 a 446,19375 | Uso general |

* **Antena:** $\lambda \approx 67$ cm. Cada varilla $\lambda/4 \approx 16{,}8$ cm.
* **Misión 1 (escaneo):** horario comercial o fines de semana, cerca de parques, centros comerciales o montañas. En SDR++: modo NFM, ancho 12,5 kHz, centro en 446,100 MHz (vista de 200 kHz), clic sobre los picos.
* **Cuaderno de bitácora:** fecha/hora, canal y frecuencia, intensidad, quién parece hablar. Incluye un ejemplo en cursiva.
* **Squelch:** puerta con muelle que silencia el ruido de fondo. Umbral demasiado bajo = ruido constante.
* **Mito de los "subcanales":** falso. Hay 16 canales y no hay "8 × 38 = 304 canales privados".
  * Los "subcanales" son **subtonos**: **CTCSS** analógico (*Continuous Tone-Coded Squelch System*) o **DCS** digital.
  * El subtono es un tono inaudible (ej. subtono 1 = 67,0 Hz) que abre el squelch del receptor con el mismo tono. Sirve para no escuchar a otros grupos, pero **no privatiza el canal** ni impide que el SDR escuche todo.
* **Experimento 1 (laboratorio con dos walkies):** A con subtono 01 y B sin subtono en el canal 1. B escucha a A. A no escucha a B.
* **Experimento 2:** añadir el módulo **CTCSS Decoder** (*Tone Decoder*) en SDR++ para ver la frecuencia del subtono (ej. 67,0 Hz, 88,5 Hz, 123,0 Hz).
* **Resumen:** UHF 446,0–446,2 MHz; 16 canales de 12,5 kHz; semi-dúplex; NFM; squelch como puerta; subtonos sin privatizar.

---

## Módulo 1 — Cap. 2: Hablando con el cielo (Banda Aérea)

* Pilotos y torres de control hablan en **banda aérea VHF**: 118,000–136,975 MHz, reservada a aviación en todo el mundo.
* **Cálculo de antena** (frecuencia de referencia 120 MHz):
  * $\lambda = 300/120 = 2{,}5$ m.
  * Dipolo total $\lambda/2 = 1{,}25$ m. Cada varilla $\lambda/4 = 62{,}5$ cm. Regla del cazador: 60–62 cm por lado.
  * Comparación: PMR446 = 16,8 cm por varilla; aviación = 62,5 cm.
* **Por qué AM y no FM (efecto captura):**
  * FM: si dos transmisiones coinciden, la más débil queda silenciada. Riesgo en emergencias.
  * AM: no hay efecto captura. Las voces se superponen, se oye un pitido (heterodino) y el controlador pide repetir: *"Estación que llamó, repita, transmisión pisada"*.
* **Alfabeto fonético ICAO/OACI:** tabla A–Z con pronunciación (Alfa, Bravo, Charlie...).
  * Ejemplos: Iberia 3190 → *"Iberia Tres Uno Nueve Cero"*; EC-LUB → *"ECHO CHARLIE LIMA UNIFORM BRAVO"*.
* **Servicios por fase de vuelo** (traspaso de control = *handover*):
  * **ATIS:** información automática en bucle (METAR, pista en uso, visibilidad, QNH).
  * **ACC / Ruta:** crucero y descenso inicial; sectores geográficos.
  * **APP / TMA:** aproximación y ordenación de llegadas (*Feeder* y *Director*).
  * **TWR:** torre; autorizaciones de despegue y aterrizaje.
  * **GND:** rodadura y tierra, hasta estacionamiento.
* **Conceptos clave:**
  * Torrijos/Toledo a unos 75–80 km de Madrid-Barajas (LEMD).
  * FL240 = 24.000 ft ≈ 7.315 m (FL = *Flight Level*, altitud en pies / 100).
  * Horizonte VHF: $D \approx 3{,}57\sqrt{h}$ km (h en metros). Avión a 10.000 m → unos 350 km.
* **Caso práctico LEMD:**
  * Ruta: TLL (Toledo Lower) 133,200 MHz (sector TLX).
  * Aproximación: AIX/AEX 127,100 MHz; AFX/AWX 127,500 MHz (en cartas 127,505).
  * Salidas: DEP E 131,175 MHz; DEP W 124,225 MHz (en cartas 124,230).
  * Torre: 118,150 MHz (pistas Oeste) / 120,150 MHz (pistas Este).
  * Tierra: 121,700 / 121,850 MHz.
  * Desde Torrijos: ruta y torre del avión sí; torre de tierra y rodadura, difícil.
  * Sectores de ruta mencionados: TLX, ZMX, DGX, CJX, SEX, MA4, BA1, YES, SUR, P2R, GOX, CCX, VNI, ASX, SAX. Imagen: `content/cap2/LECX.PNG`.
  * Fraseología de ejemplo: *"Iberia 6251, descienda para nivel de vuelo FL150 y contacte con Madrid Aproximación en 127.100"*; *"Air Europa 042, tras despegar, ascienda a FL180, directo a Toledo, contacte Salidas en 124.225"*.
* **Práctica "Reto del Rastreador Aéreo":**
  * Localizar un vuelo sobre Toledo/Torrijos hacia LEMD (Flightradar24 o a simple vista).
  * Seguir la secuencia TLL → AIX/AFX → TWR, anotando cada transferencia.
  * SDR++: modo AM; ancho 8,33 kHz o 25 kHz; ganancia RF hasta ver el suelo de ruido; antena a 62 cm.
  * Bitácora de 5 pasos con ejemplo de indicativo IBE3201.
* **Sección vacía:** "8. Actividad Práctica: Sintonizar la Torre y decodificar el Alfabeto" no tiene contenido.
* **Resumen:** banda 118,000–136,975 MHz; $\lambda = 2{,}5$ m; varillas 62,5 cm; AM por el efecto captura; alfabeto ICAO.

---

## Módulo 1 — Cap. 3: Trampolines en las montañas (Repetidores VHF/UHF)

* **Visión directa:** VHF y UHF no rebotan en la ionosfera. El terreno y la curvatura de la Tierra bloquean la señal.
* **Potencias citadas:** walkie 5 W; móvil 25 W; base en tejado hasta 50 W.
* **Repetidor:** estación desatendida en cima o azotea; antenas de ganancia, cavidades resonantes; 50–100 W; cobertura de más de 150 km.
* **Offset (dúplex):** Entrada = Salida + Offset.
  * 2 m: offset −600 kHz (ej.: salida 145,700 → entrada 145,100 MHz).
  * 70 cm: offset −7,6 MHz (ej.: salida 438,950 → entrada 431,350 MHz).
* **Subtonos CTCSS** para abrir el repetidor: rango 67,0 Hz a 254,1 Hz. Evitan activaciones por ruido.
* **Caso ED4YAN:** repetidor UHF que exige 100,0 Hz en entrada y emite el mismo tono en su salida (438,950 MHz). Permite filtrar el squelch en el receptor.
* **Plan de bandas URE / IARU Región 1:**
  * Voz en FM; canal estrecho **NFM 12,5 kHz** en Europa (EE. UU. usa 25 kHz).
  * Otros modos: SSB, balizas de propagación, **APRS** en 144,800 MHz.
  * **Tabla 2 m:** 144,000–144,400 CW/SSB; 144,800 APRS; 145,200–145,575 simplex (serie V); 145,500 **V40** (antes S20), llamada internacional simplex; 145,525 V42, secundaria/emergencias; 145,600–145,7875 salidas de repetidor (RV48–RV62); 145,000–145,1875 entradas.
  * **Tabla 70 cm:** 432,000–432,400 CW/SSB/balizas; 433,000–433,375 entradas UHF (offset −7,6 MHz); 433,500 **U280** (antes SU20), llamada simplex UHF; 438,650–439,425 salidas (serie RU, de RU692/R70 a RU754/R101).
  * **Equivalencias antiguas:** R0 = RV48 (145,600); R1 = RV50 (145,625); R2 = RV52 (145,650); R5 = RV58 (145,725); R7 = RV62 (145,775).
* **Fichas de ejemplo:**
  * Talavera de la Reina: `ED4YAV` VHF salida 145,625 (RV50), offset −600 kHz, subtono 67,0 Hz. `ED4YAR` UHF salida 438,750 (RU700/R74), offset −7,6 MHz, subtono 67,0 Hz.
  * Toledo capital: VHF salida 145,725 (RV58/R5), offset −600 kHz. UHF "438,698 aprox." (RU698/R73), offset −7,6 MHz.
  * `ED4YAN` (elevado): UHF salida 438,950 (RU716/R82), entrada 431,350, subtono 100,0 Hz.
* **Indicativos españoles:**
  * Estructura: prefijo + número de distrito + sufijo (1 a 3 letras).
  * Prefijo: `EA` (actual); `EB` y `EC` en licencias antiguas.
  * Distritos 1 a 9:
    * 1: Galicia, Asturias, Cantabria, La Rioja, Castilla y León.
    * 2: País Vasco, Navarra, Aragón.
    * 3: Cataluña.
    * 4: Madrid, Extremadura, Castilla-La Mancha (excepto Albacete).
    * 5: Comunidad Valenciana, Región de Murcia, Albacete.
    * 6: Baleares.
    * 7: Andalucía.
    * 8: Canarias.
    * 9: Ceuta y Melilla.
  * Ejemplo: `EA4BCD`. Imagen: `content/cap3/distritos.jpeg`.
  * Sufijos de 1–2 letras en indicativos de veteranos (`EA4A`, `EA1AB`).
* **Identificación en QSO:** *"Aquí Echo Alpha Cuatro Bravo Charlie Delta llamando..."*. Respuesta: *"[destino], de [origen], te recibo cinco nueve"*.
* **Alcance de ED4YAN:** desde Madrid o Castilla-La Mancha se captan EA1 (Ávila, Segovia, Valladolid, Salamanca), EA5 (Albacete) y EA7 (Andalucía).
* **Balizas:** los repetidores identifican su indicativo cada 10–15 min en CW (ej. ED4YAN) o en fonía grabada (ej. ED4YAV). Uso público para cualquier radioaficionado con licencia.
* **Práctica con SDR++:**
  * NFM 12,5 kHz. Antena: 2 m → 49–51 cm por varilla; 70 cm → 16–17 cm.
  * Sintonizar 145,700 MHz; sample rate 2,048 o 2,56 MHz para ver RV48–RV62 de una vez.
  * **Captura simultánea:** en 2 m sí (sintonizar 145,400 MHz y ver entrada 145,100 y salida 145,700 con 2,56 MHz). En 70 cm no (offset 7,6 MHz > 2,56 MHz).
  * Bitácora con ejemplos: ED4YAV (fonía, 67,0 Hz, Talavera); ED4YAN (CW, 100,0 Hz); V40 simplex.
  * Enlace de referencia: listado de repetidores de la URE (https://www.ure.es/repetidores/#r).
* **Resumen:** propagación por visión directa; repetidores con offset; CTCSS; NFM 12,5 kHz; indicativos con distritos; balizas cada 10–15 min.

---

## Módulo 2 — Cap. 4: Radioaficionados en HF (SSB / CW)

* **Ionosfera** (60–600 km): capas D, E, F1 y F2. Refleja la HF y permite el rebote ionosférico (*skywave*).
* **Zona de sombra** (*Skip Distance*): ejemplo de 100 W desde Madrid. Zaragoza (300 km) sin señal; Alemania o Escandinavia (1.200 km) con señal.
* **Capas:**
  * D (60–90 km): absorbe 1,8–7 MHz de día; desaparece de noche.
  * E (90–150 km): propagación esporádica Es, que permite contactos en 144 MHz.
  * F1 y F2 (150–400 km): reflectoras principales. De noche F1 y F2 se funden.
* **Bandas de radioaficionado en HF:**
  * 80 m (3,5–3,8 MHz): ruidosa de día; regional de noche.
  * 40 m (7,0–7,2 MHz): "reina del radioescucha europeo". Día: Península. Noche: global.
  * 20 m (14,000–14,350 MHz): banda DX por excelencia.
  * 15 m (21,0–21,45 MHz) y 10 m (28,0–29,7 MHz): diurnas. Cerradas de noche.
  * Bandas WARC (Ginebra 1979): 30 m (10,1 MHz), 17 m (18,1 MHz), 12 m (24,8 MHz). Sin concursos.
    * 30 m: 10,100–10,150 MHz, sin fonía, solo CW y digitales.
  * 60 m (5,3 MHz, WRC-15): propagación NVIS, banda compartida con emergencias y militares, potencias limitadas.
* **Antenas:**
  * Dipolo λ/2 para transmitir: $L \approx 142{,}5 / f_{\text{MHz}}$. En 40 m: 20 m totales, 10 m por brazo.
  * Un dipolo de 40 m resuena en armónicos impares; sirve también en 15 m (21 MHz).
  * Para recepción con SDR: hilo largo aislado de 5 a 30 m, lo más alto posible.
* **SSB** (*Single Sideband*):
  * AM convencional: ~6 kHz; SSB: ~2,7 kHz.
  * En AM, la portadora consume el 66% de la energía y no lleva información.
  * SSB de 100 W ≈ AM de 400 W en impacto.
  * Norma: LSB por debajo de 10 MHz; USB por encima. Excepción: aviación y marítimo, siempre USB.
* **CW (Telegrafía/Morse):**
  * Ancho de banda 100–500 Hz; penetra el ruido.
  * Escuchar patrones musicales, no contar puntos y rayas (di-DÁ para A; DÁ-DÁ-di-DÁ para Q).
  * Tabla A–Z con código y ritmo auditivo. Nota: la fila de la letra Y tiene "amplio" en lugar de ritmo.
  * Comparativa de ancho de banda: FM comercial ~150 kHz; FM estrecha ~12,5 kHz; SSB ~2,7 kHz; CW ~0,5 kHz.
* **Planes de banda** (Región 1, IARU):
  * **40 m:** 7,000–7,040 CW (7,030 QRP); 7,040–7,060 digitales (FT8 7,074); 7,060–7,200 LSB (7,090 QRP; 7,110 emergencia).
  * **20 m:** 14,000–14,070 CW (14,060 QRP); 14,070–14,099 digitales (FT8 14,074; PSK31); 14,099–14,101 balizas IBU; 14,101–14,350 USB (14,230 SSTV; 14,300 emergencias).
  * **10 m:** 28,000–28,070 CW (28,060 QRP); 28,070–28,190 digitales (FT8 28,074); 28,190–28,300 balizas; 28,300–29,100 USB; 29,100–29,700 FM símplex, repetidores y satélites.
* **Código RST:** R (inteligibilidad 1–5), S (fuerza 1–9), T (tono en CW 1–9). "59" = voz clara y señal excelente. En CW: RST 599.
* **Códigos Q:** QRM (interferencia), QRN (ruido atmosférico), QSO (contacto), QSL (confirmación), QRZ? (¿quién me llama?).
* **Prefijos DX:** EA/EB/EC España; F Francia; G/M Reino Unido; DL/DK Alemania; W/K/N EE. UU.; I/IK/IZ Italia; PT/PY Brasil; LU Argentina; JA/JH Japón; VK Australia.
* **Práctica QRZ.com:** anotar indicativo de QSO en 20 m USB (ej. "Delta Lima Tres Bravo Charlie" → `DL3BC`) y consultar en qrz.com. Ejemplo: DL3BC, Hans Schmidt, Munich, 100 W y Yagi de 3 elementos.
* **Práctica SSB en SDR++:**
  * Firma en cascada: mancha asimétrica en forma de cuña. USB: lado vertical a la izquierda. LSB: lado vertical a la derecha.
  * Ajuste fino con paso de 10 Hz o 50 Hz. Síntomas: agudo (efecto "Pato Donald") o grave (gruñido). Un desfase de 30 Hz marca la diferencia.
* **Práctica CW (avanzada):**
  * 40 m, tramo 7,000–7,035 MHz. Trazos estrechos en cascada.
  * Modo CW (o USB con filtro de 500 Hz). Tono de 600–800 Hz (usar 700 Hz como referencia).
  * Lectura manual: E (dit), T (DAH), A (di-DAH), N (DAH-dit). Balizas en 14,100 MHz (20 m) o 28,200 MHz (10 m).
  * Decodificación automática: cable de audio virtual (VB-Cable en Windows; BlackHole o Loopback en macOS; PipeWire o PulseAudio en Linux). SDR++ → cable → FLDIGI o CwGet.
  * Velocidad: duración del punto $t_{\text{dit}} = 1200 / \text{WPM}$ ms.
* **Bitácora HF:** ejemplos: 7,115 MHz LSB EA4BCD (59); 14,205 MHz USB W1AW (57); 7,025 MHz CW IK2AAA (599).
* **Resumen:** rebote ionosférico; zona de sombra; capa D diurna; bandas nocturnas y diurnas; dipolo λ/2 para transmitir, hilo largo para recibir; SSB ahorra ancho de banda y potencia; LSB < 10 MHz y USB > 10 MHz; CW con mayor alcance; firma de SSB; ajuste fino.

---

## Observaciones y pendientes (detectados al resumir)

* Cap. 2: sección 8 "Actividad Práctica: Sintonizar la Torre y decodificar el Alfabeto" está vacía. La tabla de bitácora tiene filas vacías.
* Cap. 2: el título de la sección 9 incluye emojis (🕵️‍♂️✈️). No se usan en el resto de capítulos.
* Cap. 3: la tabla de 2 m contiene "145,600 – 145,7875 MHz" (cuatro decimales, posible errata). La frecuencia de "Toledo capital" en UHF está marcada como aproximada ("438,698 aprox.").
* Cap. 3: la tabla de bitácora tiene filas vacías.
* Cap. 4: hay dos secciones numeradas "6." (planes de banda y práctica SDR++). Tabla Morse: la letra Y tiene "amplio" en lugar de ritmo auditivo.
* Cap. 4: la sección "Anatomía de los modos SSB" menciona "Módulos 0 y 1" para AM y FM. La AM se trata en el Cap. 2 y la FM en los Caps. 1 y 3.
* Cap. 1: la afirmación de que la norma se amplió a 16 canales en 2018 no está verificada en el texto.
