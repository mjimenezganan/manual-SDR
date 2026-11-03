<!--
BORRADOR DEL CAPÍTULO 5. No publicar en web/ sin indicación explícita.
Pendientes antes de publicar (ver working/cap5-brainstorming.md, sección 10 y notas en línea):
- Datos de las emisoras de Argelia (potencias y nombres): comprobar, son de consultas antiguas.
- Estado actual de las emisoras de COPE en OM: confirmar.
-->

## Capítulo 5: Voces sin frontera: Broadcasting internacional, emisoras piratas y Outbanders

### 1. Una voz en español desde el otro lado del mundo

Imagínate una noche de invierno. Las luces del salón están apagadas, el portátil brilla sobre la mesa y el pincho SDR ya está conectado. Recorres con la vista la cascada, esa lluvia de líneas que caen que aprendimos a leer en el Capítulo 0, y de pronto aparece una mancha estable que antes no estaba. La sintonizas, subes el volumen y escuchas una voz que habla tu idioma. No es un vecino ni un repetidor: es una emisora que transmite desde miles de kilómetros de distancia.

Esto es la **radiodifusión internacional** (*International Broadcasting*): emisoras que producen programas para oyentes de otros países, en su propio idioma, con noticias, música y cultura. Muchas de ellas usan la **onda corta** porque, como vimos en el Capítulo 4, la ionosfera puede devolver la señal a la Tierra a miles de kilómetros de distancia con un solo transmisor.

En este capítulo aprenderás a localizar estas voces, a entender por qué cambian de frecuencia según la hora y cómo se reparten el espectro. También conocerás las emisiones que se salen de su banda y el mundo de las emisoras piratas.

### 2. Un mapa de tres zonas: LW, MW y SW

La radiodifusión en amplitud se reparte en tres zonas del espectro. Dos de ellas tienen hoy poco peso en este capítulo; la tercera es la protagonista.

* **Onda larga (LW):** de $148{,}5$ a $283{,}5\text{ kHz}$ en la Región 1. Son las frecuencias más bajas de la radiodifusión.
* **Onda media (MW):** de $531$ a $1.602\text{ kHz}$ en Europa, con canales de $9\text{ kHz}$. En América (Región 2) los canales son de $10\text{ kHz}$.
* **Onda corta (SW):** de $3$ a $30\text{ MHz}$. Es la banda donde las emisoras internacionales llegan a otros continentes.

> **Nomenclatura de Canales:** la UIT divide el mundo en tres regiones. La Región 1 cubre Europa, África, Oriente Medio y el norte de Asia. La Región 2 cubre América.

> **¡Atención con tu receptor!** El RTL-SDR V4 cubre de $500\text{ kHz}$ a $1766\text{ MHz}$. Eso significa que **no recibe las ondas largas**. Antes de buscarlas, revisa qué frecuencias cubre tu propio receptor.

#### Ondas largas y medias: cada vez menos emisoras

Las ondas largas tienen pocas emisoras. Según Wikipedia, las causas son la poca audiencia, la falta de receptores de consumo que la incluyan, las interferencias y el alto coste energético de la emisión. Quedan muy pocas emisoras en LW, en países como Rumanía, Polonia, Argelia y Mongolia.

Las ondas medias siguen más vivas, sobre todo de noche. En el último apartado de este capítulo veremos el caso de España.

#### Tabla de bandas de radiodifusión en onda corta

Cada banda de onda corta recibe su nombre según su longitud de onda aproximada. Por ejemplo, para la banda de $49\text{ m}$, con una frecuencia de $6\text{ MHz}$:

$$
\lambda = \frac{c}{f} = \frac{300}{6} = 50\text{ m}
$$

<!-- Pendiente: tabla tomada del borrador de brainstorming, rangos aproximados. Verificar con la tabla de la UIT (WRC-97) antes de publicar. -->

| Banda | Rango aproximado |
| :---: | :---: |
| 120 m | $2{,}3$ a $2{,}495\text{ MHz}$ |
| 90 m | $3{,}2$ a $3{,}4\text{ MHz}$ |
| 60 m | $4{,}75$ a $5{,}06\text{ MHz}$ |
| 49 m | $5{,}9$ a $6{,}2\text{ MHz}$ |
| 41 m | $7{,}2$ a $7{,}45\text{ MHz}$ |
| 31 m | $9{,}4$ a $9{,}9\text{ MHz}$ |
| 25 m | $11{,}6$ a $12{,}1\text{ MHz}$ |
| 22 m | $13{,}57$ a $13{,}87\text{ MHz}$ |
| 19 m | $15{,}1$ a $15{,}8\text{ MHz}$ |
| 16 m | $17{,}48$ a $17{,}9\text{ MHz}$ |
| 15 m | $18{,}9$ a $19{,}02\text{ MHz}$ |
| 13 m | $21{,}45$ a $21{,}85\text{ MHz}$ |
| 11 m | $25{,}67$ a $26{,}1\text{ MHz}$ |

Fíjate en que estas bandas son muy parecidas a las de radioaficionado del Capítulo 4, pero aquí están reservadas a la radiodifusión. Cada emisora elige su frecuencia dentro de la banda según la hora y el destino de su programa.

### 3. Cómo se ve una emisora AM y por qué se pisan los canales

La mayoría de emisoras internacionales de onda corta usan **AM** con **separación de $5\text{ kHz}$** entre canales. Algunas emplean BLU (*SSB*), que ya conoces del Capítulo 4. En el Capítulo 2 viste la AM de la banda aérea; aquí la reconocerás en la cascada.

```text
 Amplitud
    ▲
    │                       │
    │                       │  Portadora
    │          ▄▄▄          │         ▄▄▄
    │        ▄█████▄        │       ▄█████▄
    │      ▄█████████▄      │     ▄█████████▄
    └──────────────────────────────────────────► Frecuencia
          Banda lateral     ▲         Banda lateral
            inferior        │           superior
                        Portadora
```

> **¿Cómo interpretar este mapa?** En el centro está la **portadora**, una línea fija que no lleva voz. A cada lado aparece una **banda lateral** que contiene la voz. Ambas bandas son copias de la misma información, y por eso la emisión ocupa una zona alrededor de la portadora.

#### El solapamiento de canales

En AM, la señal ocupa el doble del ancho de banda del audio, porque cada banda lateral tiene la misma información:

$$
B_{\text{AM}} = 2 \times B_{\text{audio}}
$$

Si el audio de una emisora llega a $4{,}5\text{ kHz}$, la emisión ocupa:

$$
B_{\text{AM}} = 2 \times 4{,}5 = 9\text{ kHz}
$$

Ahora imagina dos emisoras en canales contiguos, por ejemplo $6000\text{ kHz}$ y $6005\text{ kHz}$. Sus zonas ocupadas se solapan entre $6000{,}5$ y $6004{,}5\text{ kHz}$. Si ambas llegan con fuerza al mismo lugar, se pisan.

Las emisoras suelen planificar sus frecuencias por separado, pero tu receptor puede filtrar la señal reduciendo el ancho de banda. Lo probarás en la Misión Práctica 2.

### 4. ¿Por qué suena de noche? La propagación de las emisoras

La propagación de la onda corta depende de la hora, como vimos en el Capítulo 4:

* **De día**, la capa D absorbe las frecuencias bajas. Las bandas altas (de unos $12\text{ MHz}$ en adelante) viajan más lejos.
* **De noche**, la capa D desaparece y las bandas bajas, como las de $60$, $49$ y $41\text{ m}$, son las que mejor llegan.
* **En invierno**, las noches son más largas y las emisoras de MW tienen más tiempo para llegar lejos.
* **Tormentas solares:** pueden apagar durante un rato la onda reflejada en la ionosfera.

> **¡Regla del cazador!** Si una emisora no se oye a una hora, prueba otra banda o espera a la noche. Una misma emisora puede cambiar de frecuencia a lo largo del día.

### 5. Herramientas para localizar emisoras

Las emisoras de radiodifusión publican sus horarios y frecuencias. Estas herramientas te ayudan a encontrarlas:

| Herramienta | Qué es | Enlace |
| :--- | :--- | :--- |
| EiBi | Base de datos de horarios de emisoras de onda corta, mantenida por Eike Bierwirth. Incluye archivo histórico y la programación de invierno 2026/2027. Es la fuente de muchas aplicaciones. | [eibispace.de](http://www.eibispace.de/) |
| Shortwave.Live | Interfaz web sobre la base EiBi. Muestra qué se emite ahora y permite buscar por frecuencia, emisora, idioma o zona. | [shortwave.live](https://shortwave.live) |
| short-wave.info | Consulta de horarios de emisoras de onda corta. Permite buscar por emisora o por frecuencia, con un margen de $\pm 5\text{ kHz}$. | [short-wave.info](http://www.short-wave.info/) |
| mwlist.org | Lista de emisoras de MW y LW con mapas. Requiere registro. | [mwlist.org](https://www.mwlist.org) |
| mediumwave.de | Estudio de MW y LW en Centroeuropa. Sus datos son antiguos, así que sirven como histórico. | [mediumwave.de](https://mediumwave.de) |

Debido a que estas herramientas, así como las transmisiones que reflejan, tienen alcance global, las horas que indican siempre están en **UTC** (hora universal). Para pasarlas a tu hora local, en España suma una hora en invierno (UTC+1) y dos en verano (UTC+2).

> Los radioaficionados, de los que hablamos en el capítulo 4, también utilizan **UTC** para documentar los contactos y establecer horas.

#### Calentamiento: primera caza de China Radio International

1. Abre [short-wave.info](http://www.short-wave.info/) o [Shortwave.Live](https://shortwave.live).
2. Busca **China Radio International** (CRI) filtrando por idioma español.
3. Anota la frecuencia, la banda y el horario en UTC.
4. Convierte el horario a tu hora local.

Pregunta para el cuaderno: ¿a qué hora local se escucha y en qué banda?

### 6. La radiodifusión en MW en España: un paisaje que cambia

La onda media en España se está quedando sin emisoras. Se están eliminando múltiples transmisiones: en diciembre de 2025, RNE dio de baja todas sus transmisiones de onda media, que eran decenas. Otras cadenas, como COPE, también han cerrado estaciones.

<!-- Pendiente: estado actual de COPE en OM. Confirmar antes de publicar. -->

No obstante, todavía se escuchan varias frecuencias españolas. Cope Madrid (999 kHz) y Onda Cero (954 kHz) emiten con potencia suficiente para llegar, así que puedes intentar encontrarlas a cualquier hora del día.

Otras transmisiones internacionales hay que recibirlas mejor por la noche.

> **¡Atención Cazador!** Estos cambios son recientes. Antes de salir de caza en MW, comprueba en las herramientas de la sección 5 qué emisoras siguen activas en tu zona.

### 7. Outbanders: voces fuera de su banda

Las **outbanders** son emisoras que transmiten fuera de los límites de su banda de radiodifusión. Algunos ejemplos documentados:

* **WBCQ:** emite en la banda de $60\text{ m}$ hasta $5{,}13\text{ MHz}$, por encima del límite de la banda ($5{,}06\text{ MHz}$).
* **WRMI:** emite en la banda de $49\text{ m}$ hasta $5{,}8\text{ MHz}$, por debajo del inicio de la banda ($5{,}9\text{ MHz}$). También emite en la de $41\text{ m}$ hasta $7{,}78\text{ MHz}$, por encima del límite ($7{,}45\text{ MHz}$).
* **WINB:** emite en la banda de $31\text{ m}$ hasta $9{,}265\text{ MHz}$, por debajo del inicio de la banda ($9{,}4\text{ MHz}$).

Según la fuente consultada, algunas emisoras eligen estas frecuencias para llamar la atención en bandas muy concurridas, como las de $60$, $49$, $41$, $31$ o $25\text{ m}$.

**Misión de caza:** busca en [EiBi](http://www.eibispace.de/) o en [Shortwave.Live](https://shortwave.live) una emisión que quede fuera de los límites de la tabla de la sección 2, y compara su frecuencia con esos límites.

### 8. Piratas y clandestinas: emisiones que no deberían estar

Mientras escuchas, es posible que encuentres emisiones que no deberían estar ahí. Hay dos casos principales:

* **Piratas:** emiten música o entretenimiento sin licencia. La onda corta les permite llegar mucho más lejos que la AM o la FM locales.
* **Clandestinas:** emiten en nombre de grupos políticos o insurgentes, a veces desde otro país.

También puedes encontrar emisiones de radiodifusión fuera de sus bandas, como las outbanders de la sección 7. Hablaremos de muchas otras emisiones en capítulos posteriores, como las **estaciones de números** del Capítulo 8. Por ahora basta con que sepas que existen.

Como radioescucha, tu papel es **escuchar**. Emitir sin autorización queda fuera del alcance de este manual.

### 9. Misión Práctica 1: Caza nocturna de la radio argelina

Tu misión consiste en localizar emisoras de Argelia en las ondas medias, de noche, y anotar qué consigues recibir.

**Frecuencias candidatas:**

| Frecuencia | Emisora | Notas |
| :---: | :--- | :--- |
| $252\text{ kHz}$ | Radio Algérie (LW) | Con el RTL-SDR V4 no se recibe. Hace falta un receptor que cubra LW. |
| $531\text{ kHz}$ | Radio Algérie Internationale (RAI), Ain El Beida | Onda media. |
| $549\text{ kHz}$ | Jil FM, Sidi Hamadouche | Onda media. |
| $891\text{ kHz}$ | Radio Algérie Internationale, Ouled Fayet, en francés | Onda media. |

Las frecuencias pueden cambiar. Compruébalas en [mwlist.org](https://www.mwlist.org) antes de salir de caza.

#### Instrucciones en SDR++

1. Prepara la antena: para SW y MW, usa un hilo largo de 5 a 20 metros, colgado por la ventana o sobre el tejado y lo más alejado posible de la estructura del edificio. Si puedes, usa un balun 1:9.
2. Espera a que anochezca. Las ondas medias llegan mucho más lejos de noche.
3. Pon el modo en **AM** y el ancho de banda del filtro en $10\text{ kHz}$.
4. Centra la vista en $700\text{ kHz}$ para ver a la vez las emisoras de $531$, $549$ y $891\text{ kHz}$.
5. Haz clic sobre cada pico de la cascada y anota si se oye y con qué calidad.
6. Repite la búsqueda la noche siguiente. Es normal que una emisora se oiga una noche y no la siguiente.

#### Cuaderno de bitácora

| Fecha | Hora UTC | Hora local | Frecuencia (kHz) | Emisora | Calidad (1 a 5) | Notas |
| :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| *12/03* | *23:00* | *00:00* | *549* | *Jil FM* | *4* | *Solo se oye de noche.* |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |

### 10. Misión Práctica 2: Ajuste del ancho de banda

Tu misión consiste en comprobar cómo el filtro del receptor afecta al canal vecino y a la calidad del audio.

#### Instrucciones en SDR++

1. Usa la misma antena de hilo largo que en la Misión Práctica 1.
2. Sintoniza una emisora de AM que se oiga con claridad, de noche en MW o en la banda de CRI del calentamiento.
3. Pon el modo en **AM** y el ancho de banda en $10\text{ kHz}$. Observa el canal vecino en la cascada.
4. Reduce el ancho de banda a $6\text{ kHz}$ y, después, a $4\text{ kHz}$.
5. Observa dos cosas: si el canal vecino pierde fuerza y cómo cambia la voz. Con un filtro muy estrecho el audio suena más apagado.
6. Vuelve al ancho de banda inicial y anota el resultado.

> **¡Regla del cazador!** Busca el punto en el que el canal vecino desaparece sin que la voz pierda inteligibilidad. Ese es el ancho de banda más útil para esa emisora.

#### Cuaderno de bitácora

| Ancho de banda (kHz) | Canal vecino atenuado | Calidad del audio (1 a 5) | Notas |
| :---: | :---: | :---: | :--- |
| *10* | *No* | *5* | *Voz completa, pero se oye el vecino.* |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

### Resumen del Capítulo 5

* La radiodifusión internacional usa mayoritariamente **AM** en onda corta, con canales separados **$5\text{ kHz}$**.
* En AM, la señal ocupa **el doble del ancho de banda del audio**, por eso las emisoras vecinas pueden solaparse.
* Las emisoras suelen planificar sus frecuencias por separado. Tu **filtro** puede reducir el ancho de banda para atenuar al vecino; pruébalo en SDR++.
* De noche, las bandas bajas (**$60$, $49$ y $41\text{ m}$**) llegan más lejos que de día.
* Las **outbanders** emiten fuera de su banda. EiBi y Shortwave.Live ayudan a localizarlas.
* Las **ondas largas** tienen muy pocas emisoras y el RTL-SDR V4 no las recibe. Revisa las capacidades de tu receptor.
* En diciembre de 2025, **RNE** dio de baja todas sus transmisiones de onda media. Otras cadenas, como **COPE**, también han cerrado estaciones, pero **Cope Madrid** (999 kHz) y **Onda Cero** (954 kHz) siguen audibles.

¡La caza de voces lejanas acaba de empezar!
