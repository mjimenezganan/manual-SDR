# Capítulo 5: Voces sin frontera (brainstorming)

Fuente: [Index.md](Index.md), entrada del capítulo 5.
Título provisional: "Voces sin frontera: Broadcasting internacional, emisoras piratas y Outbanders".
Descripción provisional: sintonización de radios internacionales en AM, emisiones culturales lejanas y transmisiones no oficiales fuera de banda.

Estado: borrador para decidir temas. Nada de esto está publicado ni debe pasar a `web/` sin indicación explícita.

---

## 1. Temas pedidos y comprobación

| Tema pedido | Comentario tras la búsqueda |
|---|---|
| Emisión en SW con cambio de frecuencia según propagación | Válido. La emisora usa varias frecuencias según hora, destino y estación del año. Se explica con la capa D y la propagación nocturna/diurna. |
| Buscadores de frecuencias (short-wave.info, Shortwave.Live, EiBi) | Válido. Ver sección 4. "whortwavelive" se interpreta como [Shortwave.Live](https://shortwave.live). |
| Forma del espectro AM en SW, como se hizo con SSB | Válido. Propuesta de visualización en sección 3. |
| Separación de 5 kHz entre canales y ancho de banda | Corregido: la separación es de 5 kHz, no de 5 MHz. Ver sección 3. |
| Ondas largas y medias: por qué quedan pocas LW | Válido. Ver sección 2. |
| Radiodifusión en MW en España (RNE y COPE retirándose) | No verificado. Las fuentes consultadas no lo confirman ni lo desmienten. Hay que comprobarlo antes de publicarlo. |
| Argelia: Jil FM y Radio Algérie Internationale | Válido como ejercicio. Las frecuencias encontradas proceden de una lista antigua y deben verificarse. Ver sección 5. |
| Buscadores de MW (mwlist, mediumwave.de) | Válido. Ver sección 4. mwlist parece permitir acceso como invitado; hay que comprobarlo. |
| Emisión fuera de banda como ejemplo | Encontrado. Ver sección 3. |

---

## 2. Bandas y tecnología: LW, MW, SW

### Mapa de bandas

- **Ondas largas (LW):** 148,5 a 283,5 kHz en la Región 1 de la UIT (Europa, África y parte de Asia). Propagación por onda de superficie; cobertura de hasta unos 2.000 km por onda de superficie y más de 3.000 km por onda reflejada.
- **Ondas medias (MW):** 531 a 1.602 kHz en Europa (Región 1), con canales de 9 kHz. En América (Región 2) los canales son de 10 kHz. (Dato conocido; verificar la cifra exacta antes de publicar.)
- **Onda corta (SW):** de 3 a 30 MHz (banda HF). Propagación por onda reflejada en la ionosfera.

### Bandas de broadcasting en SW (referencia aproximada, verificar con la tabla WRC-97)

| Banda | Rango aproximado |
|---|---|
| 120 m | 2,3 a 2,495 MHz |
| 90 m | 3,2 a 3,4 MHz |
| 60 m | 4,75 a 5,06 MHz |
| 49 m | 5,9 a 6,2 MHz |
| 41 m | 7,2 a 7,45 MHz |
| 31 m | 9,4 a 9,9 MHz |
| 25 m | 11,6 a 12,1 MHz |
| 22 m | 13,57 a 13,87 MHz |
| 19 m | 15,1 a 15,8 MHz |
| 16 m | 17,48 a 17,9 MHz |
| 15 m | 18,9 a 19,02 MHz |
| 13 m | 21,45 a 21,85 MHz |
| 11 m | 25,67 a 26,1 MHz |

Nota: la tabla de referencia en [Wikipedia (Shortwave bands)](https://en.wikipedia.org/wiki/Shortwave_bands) no se pudo leer en la consulta. Estos rangos deben cotejarse antes de publicarlos. Algunos países no usan todas las bandas; por ejemplo, Países Bajos no tiene 120 m, 90 m ni 60 m.

### Propagación

- **De día,** las frecuencias altas (más de unos 12 MHz) viajan más lejos; de noche, la relación se invierte.
- **Capa D:** absorbe las frecuencias bajas de día. Por eso las bandas de 60, 49 y 41 m se escuchan mejor de noche.
- **Invierno:** favorece la MW por las noches largas.
- **Zona de silencio (skip zone):** a una distancia donde no llega ni la onda de superficie ni la reflejada.
- **Tormentas solares:** pueden anular la onda reflejada durante minutos.

### Por qué quedan pocas LW (dato verificado en Wikipedia)

- Causas que da la fuente: poca audiencia, falta de LW en los receptores de consumo, interferencias crecientes, ineficiencia energética de la AM y coste eléctrico de los transmisores.
- Rusia cerró todas sus emisoras de LW entre 2014 y 2015.
- Europe 1 (183 kHz, Alemania) cerró en 2019; Deutschlandradio Kultur (177 kHz) cerró en 2014.
- BBC Radio 4 cerró su LW en 198 kHz el 27 de junio de 2026.
- Según la misma fuente (versión de septiembre de 2026), las únicas emisoras de LW que quedan son las de Rumanía, Polonia, Argelia y Mongolia.

### Relojes y señales de tiempo (tema complementario)

- **DCF77** (Frankfurt, 77,5 kHz, 50 kW) y **ALS162** (Allouis, Francia, 162 kHz, 800 kW): señales de hora para relojes de radio.
- **WWV** (EE. UU.): 2,5, 5, 10, 15 y 20 MHz, con voz y pitidos de hora en SW.
- Por qué LW: la onda de superficie sigue siempre el mismo trayecto, así que el retardo es constante en cada lugar y basta con una corrección fija. En SW el trayecto cambia con la ionosfera y el retardo varía.

---

## 3. Espectro AM y separación de canales

- La radiodifusión internacional en SW usa **AM** con **separación de 5 kHz** entre canales (asignaciones WRC-97). La SSB no se usa para radiodifusión musical.
- DRM (radio digital) usa canales de 10 kHz o 20 kHz. Encaja mejor en el capítulo 13.
- **Propuesta de visualización:** dibujar una portadora con dos bandas laterales simétricas (espectro AM), como se hizo con SSB en el capítulo 4. Mostrar que la información de audio ocupa a ambos lados de la portadora.
- **Pregunta a resolver:** si la AM ocupa unos 9 kHz (con audio de 4,5 kHz) y los canales están cada 5 kHz, los canales vecinos se solapan. Hay que confirmar cómo se gestiona (filtrado de audio, coordinación de frecuencias) antes de explicarlo.
- **Comparación con MW y LW:** canales de 9 kHz (Región 1) o 10 kHz (Región 2). Esto es parte del Plan de Ginebra de 1975 para LW: frecuencias múltiplos de 9 kHz entre 153 y 279 kHz.

---

## 4. Herramientas para localizar emisoras

| Herramienta | Qué es | Enlace |
|---|---|---|
| EiBi | Base de datos de horarios de emisoras de SW, mantenida por Eike Bierwirth. Incluye archivo histórico desde 2000 y la programación de invierno 2026/2027. Es la fuente de muchas apps. | [eibispace.de](http://www.eibispace.de/) (no confundir con eibi.de, que es otra empresa) |
| Shortwave.Live | Interfaz web sobre la base EiBi. Muestra qué se emite ahora, con emisoras en verde. Buscar por frecuencia, emisora, idioma o zona. | [shortwave.live](https://shortwave.live) |
| short-wave.info | Consulta de horarios de emisoras de SW. Búsqueda por emisora o por frecuencia ±5 kHz; incluye lista de bandas de 120 m. | [short-wave.info](http://www.short-wave.info/) |
| mwlist.org | Lista de emisoras de MW y LW con mapas. Tiene "Who is on this frequency - Now?" para 2 a 30 MHz. | [mwlist.org](https://www.mwlist.org) |
| mediumwave.de | Estudio de MW y LW en Centroeuropa. Útil como histórico, pero la fecha de sus datos es antigua. | [mediumwave.de](https://mediumwave.de) |

Notas:
- La página de mwlist ofrece "Weiter als Gast" (continuar como invitado), lo que contradice la idea de que haga falta registro. Hay que comprobarlo antes de decirlo en la publicación.
- Las horas de las emisoras están en UTC. Hay que explicar la conversión a hora local.

---

## 5. Ejercicio con Argelia

- Según la lista de [mediumwave.de](https://mediumwave.de) (datos antiguos):
  - RAI (Radio Algérie Internationale) en 531 kHz, Ain El Beida, 600 kW.
  - Jil FM en 549 kHz, Sidi Hamadouche, 300 kW.
  - Radio Algérie en LW en 252 kHz, 1.500 kW.
- Shortwave.Live muestra en su tabla de emisión actual a R. Algiers Int. en 891 kHz (Ouled Fayet, en francés, a las 16:00 UTC). Es una instantánea, no un dato estable.
- **Acción:** antes de publicar el ejercicio, confirmar las frecuencias en mwlist y Shortwave.Live. Dejar el ejercicio con una frase que pida al lector comprobar la frecuencia actual.

---

## 6. Emisiones fuera de banda (outbanders)

Ejemplos verificados en [Wikipedia (Shortwave bands)](https://en.wikipedia.org/wiki/Shortwave_bands):

- **WBCQ:** emite en 60 m hasta 5,13 MHz (el límite de la banda está en 5,06 MHz).
- **WRMI:** emite en 49 m hasta 5,8 MHz (el límite de la banda está en 5,9 MHz). También en 41 m hasta 7,78 MHz (la banda termina en 7,45 MHz).
- **WINB:** emite en 31 m hasta 9,265 MHz (la banda empieza en 9,4 MHz).

Motivos que da la fuente:
- Ocupar espacio de la banda fija, en emisiones de Estados Unidos, por ejemplo.
- Llamar la atención en bandas saturadas: 60, 49, 40, 41, 31 y 25 m.

Propuesta de actividad: que el lector busque un canal en EiBi o Shortwave.Live que quede fuera de banda y compare el resultado con la tabla de la sección 2.

---

## 7. Emisoras piratas y clandestinas (propuesta complementaria)

- **Piratas:** emisoras no autorizadas que emiten música o entretenimiento. Aprovechan la propagación de la SW para llegar más lejos que en AM o FM.
- **Clandestinas:** emiten en nombre de movimientos políticos o insurgentes. Pueden transmitir desde territorio controlado por rebeldes o desde otro país.
- **Relación con el capítulo 8:** las estaciones de números son otro uso no oficial de SW. Conviene no repetir ese contenido aquí.
- **Cuidado con el enfoque:** el capítulo debe tratar la escucha, no la emisión ilegal. Explicar la diferencia entre escuchar y emitir sin licencia.

---

## 8. Temas complementarios (propuestos)

1. Ondas largas: por qué existen, qué las hace distintas y qué queda hoy.
2. Ondas medias: cobertura local, nocturna y de invierno.
3. Onda corta: las bandas de broadcasting y la propagación de día y de noche.
4. Espectro AM: portadora y bandas laterales, con una visualización.
5. Separación de canales: 5 kHz en SW, 9 kHz en LW/MW Región 1.
6. Cómo encontrar emisoras: EiBi, Shortwave.Live, short-wave.info, mwlist.
7. Emisiones fuera de banda (outbanders): definición, ejemplos y cómo detectarlas.
8. Relojes de radio y señales de tiempo en LW y SW.
9. Radiodifusión en MW en España: estado actual (pendiente de verificar).
10. Piratas y clandestinas: definición y diferencia con la escucha legal.
11. Radioescucha práctica: antena de ferrita para LW/MW y la limitación de algunos SDR por debajo de 24 MHz (dato que hay que comprobar con el modelo concreto).

---

## 9. Actividades propuestas

- Caza de la emisora: el lector elige una emisora de SW y la localiza en EiBi o Shortwave.Live a una hora concreta (UTC).
- Diario de propagación: anotar qué bandas se escuchan de día y de noche durante una semana.
- Caza de outbanders: encontrar una emisión fuera de banda con Shortwave.Live y compararla con la tabla de bandas.
- Viaje a la MW: escuchar la misma emisora en MW de día y de noche y comparar la calidad.
- Reloj de radio: explicar cómo se sincroniza un reloj con DCF77 y por qué el retardo es constante en un mismo lugar.

---

## 10. Pendiente de verificar antes de escribir

- [ ] Tabla de bandas de SW (sección 2): cotejar con la fuente oficial.
- [ ] Frecuencias actuales de Argelia (sección 5).
- [ ] Estado de la MW en España (RNE y COPE): no verificado.
- [ ] Acceso de invitado en mwlist.org: comprobar.
- [ ] Explicación del solapamiento de canales AM con separación de 5 kHz (sección 3).
- [ ] Compatibilidad de SDR concretos con LW y MW (sección 8, punto 11).

---

## 11. Decisiones que necesito del autor

1. ¿Incluimos LW y MW en el capítulo o solo SW? Las LW aparecen en el título del capítulo sólo implícitamente.
2. ¿Qué peso dar a las piratas y clandestinas? Podrían formar un capítulo aparte o un apartado breve.
3. ¿Usamos Argelia como ejercicio principal o damos más países?
4. ¿Mantenemos la visualización del espectro AM con la misma profundidad que en el capítulo 4?
