# MÓDULO 1: SEÑALES LOCALES Y VISIÓN DIRECTA (VHF / UHF)

## Capítulo 1: Cacería en el vecindario: Walkie-Talkies PMR446 y el secreto de los subtonos

### 1. El tesoro de tu cajón: Los walkie-talkies PMR446

Seguro que por casa tienes guardado en un cajón un par de esos walkie-talkies de colores que compraste para una excursión, te regalaron de pequeño o usa algún familiar en el trabajo. O quizás hayas visto a los empleados de un centro comercial, a los monitores de un campamento o a los obreros de una construcción comunicándose con ellos.

¿Sabías que **todos ellos funcionan en las mismas frecuencias y son totalmente compatibles entre sí**?

No importa si un walkie-talkie es de juguete, de una gran superficie o profesional: si cumple el estándar **PMR446**, todos transmiten en la misma porción del espectro. Y lo mejor de todo: **con tu receptor SDR puedes interceptar y escuchar absolutamente todas sus conversaciones** desde la comodidad de tu habitación.

### 2. Las reglas del juego: ¿Cómo funciona el PMR446?

PMR446 significa *Personal Mobile Radio* en la banda de $446 \text{ MHz}$. Es una porción del espectro de **UHF** reservada para uso libre en Europa. Esto quiere decir que cualquiera puede comprar un walkie, encenderlo y hablar sin necesidad de pagar ninguna licencia ni examen.

Para que no sea el caos total, existen unas reglas fijas:

1. **Comunicación Semi-Dúplex:** En una llamada de teléfono puedes hablar y escuchar al mismo tiempo (dúplex). En los walkies no. La comunicación es **semi-dúplex**: o estás hablando, o estás escuchando, pero no las dos cosas a la vez.

2. **El botón PTT ("Petetear"):** Para hablar tienes que mantener pulsado el botón lateral llamado **PTT** (*Push-To-Talk* o "Pulsar para hablar"). En el argot de los radioaficionados y exploradores, a pulsar este botón se le llama familiarmente **"petetear"**. Mientras "peteteas", el walkie emite; cuando lo sueltas, vuelve a modo recepción.

3. **Modulación NFM (FM estrecha):** Toda la voz se emite usando modulación en Frecuencia Modulada Estrecha (*Narrow FM*).

4. **Ancho de banda por canal:** Cada canal ocupa exactamente un ancho de banda ($BW$) de $12,5 \text{ kHz}$.

5. **Límites de emisión:** Para evitar saturar las ciudades, la ley exige que los walkies PMR446 comerciales no tengan más de $0,5 \text{ Vatios}$ ($0,5 \text{ W}$) de potencia y tengan la antena fija. Sin embargo, para nosotros los radioescuchas, **no hay límites**: con el SDR puedes conectar la antena que quieras y escuchar a kilómetros de distancia.

### 3. El mapa de los 16 canales PMR446

La banda libre abarca exactamente desde los $446,000 \text{ MHz}$ hasta los $446,200 \text{ MHz}$. Dentro de este pequeño trozo de espectro hay espacio para **16 canales oficiales**, separados entre sí exactamente por $12,5 \text{ kHz}$.

> **Dato Histórico / Curiosidad:** Si desempolvas unos walkies antiguos o muy sencillos, verás que solo tienen del **Canal 1 al Canal 8**. Esto ocurre porque originalmente la norma solo permitía usar la mitad inferior del espectro ($446,000 \text{ MHz}$ a $446,100 \text{ MHz}$). En 2018 se amplió la norma a 16 canales para dar cabida a más usuarios, pero muchos dispositivos antiguos o infantiles siguen funcionando únicamente en esos 8 primeros canales. ¡Tu SDR sí puede ver los 16 sin problema!

La frecuencia que ves en la pantalla es la **frecuencia central** de cada canal:

| Canal | Frecuencia Central | Uso habitual / Observaciones | 
 | ----- | ----- | ----- | 
| **Canal 1** | $446,00625 \text{ MHz}$ | Canal de llamada general y juegos | 
| **Canal 2** | $446,01875 \text{ MHz}$ | Uso familiar y de ocio | 
| **Canal 3** | $446,03125 \text{ MHz}$ | Salida de excursiones / Senderismo | 
| **Canal 4** | $446,04375 \text{ MHz}$ | Comercios y almacenes | 
| **Canal 5** | $446,05625 \text{ MHz}$ | Eventos y personal de seguridad | 
| **Canal 6** | $446,06875 \text{ MHz}$ | Obras y construcción | 
| **Canal 7** | $446,08125 \text{ MHz}$ | Actividades al aire libre | 
| **Canal 8** | $446,09375 \text{ MHz}$ | Canal Internacional de Emergencia en Montaña (PMR) | 
| **Canal 9** | $446,10625 \text{ MHz}$ | Canales nuevos (introducidos tras 2018) | 
| **Canal 10** | $446,11875 \text{ MHz}$ | Uso general | 
| **Canal 11** | $446,13125 \text{ MHz}$ | Uso general | 
| **Canal 12** | $446,14375 \text{ MHz}$ | Uso general | 
| **Canal 13** | $446,15625 \text{ MHz}$ | Uso general | 
| **Canal 14** | $446,16875 \text{ MHz}$ | Uso general | 
| **Canal 15** | $446,18125 \text{ MHz}$ | Uso general | 
| **Canal 16** | $446,19375 \text{ MHz}$ | Uso general | 

> **Ajuste de tu Antena:** Como estamos en la banda de UHF ($446 \text{ MHz}$), la longitud de onda es corta: $\lambda \approx 67 \text{ cm}$. Para tu antena dipolo telescópica, ajusta cada varilla a un cuarto de onda ($\lambda / 4$), es decir, **aproximadamente** $16,8 \text{ cm}$ **por varilla**. ¡Corta y precisa!

### 4. Misión Práctica 1: Escaneo y Cuaderno de Bitácora

Es hora de salir de cacería. El mejor momento para captar movimiento en PMR446 es en **horario comercial** (de lunes a viernes por la mañana o tarde) o durante los **fines de semana** en zonas cercanas a parques, centros comerciales o montañas.

#### Instrucciones en SDR++:

1. Abre SDR++ y selecciona la modulación **NFM** (*Narrow FM*).

2. Ajusta el ancho de banda (*Bandwidth*) del filtro a $12,5 \text{ kHz}$.

3. Sintoniza la frecuencia central en **$446,100 \text{ MHz}$**. Al situarte justo en el punto medio de la banda, podrás observar de un solo vistazo todo el rango desde $446,000 \text{ MHz}$ hasta $446,200 \text{ MHz}$ (los $200 \text{ kHz}$ de la banda completa) centrado en tu cascada (*Waterfall*).

4. Cuando veas un "pico" vertical brillante en cualquiera de los 16 canales, haz clic sobre él para escuchar.

#### Tu Cuaderno de Bitácora PMR

Rellena la siguiente tabla a medida que caces emisiones en tu zona. Intenta adivinar quién habla por el contexto de la conversación:

| Fecha / Hora | Canal / Frecuencia | Intensidad de Señal | ¿Quiénes parecen ser? (Niños, seguridad, obras...) | 
 | ----- | ----- | ----- | ----- | 
| *Ej: Lunes 17:30* | *Canal 4 (*$446,04375 \text{ MHz}$*)* | *Fuerte (roja en cascada)* | *Dependientes de una tienda reposando stock.* | 
|  |  |  |  | 
|  |  |  |  | 
|  |  |  |  | 

### 5. El guardián del silencio: ¿Qué es el Squelch?

Cuando pones la radio en una frecuencia donde nadie habla, lo único que oyes es un ruido blanco molesto: *sssssssshhhhh*. Ese ruido es la radiación térmica de la atmósfera y el ruido de fondo de tu propia antena.

Para no quedarte sordo esperando a que alguien hable, los receptores utilizan una función llamada **Squelch** (o Silenciador).

* **El Squelch funciona como una puerta con muelle:** Le dices al programa que solo abra el altavoz si la señal supera cierta fuerza.

* Si el muelle está muy flojo (Squelch bajo), escucharás el ruido de fondo constante.

* Si está ajustado correctamente, la radio estará en silencio absoluto hasta que alguien "petetee" cerca; entonces la señal superará la barra de umbral, la puerta se abrirá y escucharás la voz limpia.

### 6. Nivel Avanzado: El mito de los "Subcanales" y el secreto del CTCSS

Muchos fabricantes de walkie-talkies venden sus aparatos diciendo que tienen *"8 canales y 38 subcanales"*, dando a entender que hay $8 \times 38 = 304$ "canales privados".

**¡Esto es una mentira comercial!** No existen los subcanales privados en PMR. Los 16 canales de la tabla son los únicos que existen físicamente.

Entonces, ¿qué son esos llamados "subcanales"? En realidad se llaman **Subtonos** (analógicos $\text{CTCSS}$ o digitales $\text{DCS}$).

#### ¿Cómo funciona un subtono analógico (CTCSS)?

$\text{CTCSS}$ significa *Continuous Tone-Coded Squelch System*.

1. Cuando hablas por un walkie con subtono activado (por ejemplo, el subtono 1, que equivale a $67,0 \text{ Hz}$), el walkie emite tu voz **más un pitido muy grave e inaudible** grabado por debajo de tu voz.

2. Si el walkie de tu amigo también tiene seleccionado el subtono 1, su altavoz solo "despertará" y abrirá el Squelch cuando detecte ese tono de $67,0 \text{ Hz}$.

3. **¿Para qué sirve?** Para que si hay dos grupos de personas usando el Canal 1 (unos jugando y otros en una obra), no tengan que escucharse mutuamente cuando no hablan entre ellos.

```
[ Tu Walkie ] ──► Emite Voz + Tono inaudible (67 Hz) ──► [ Espacio / Aire ]
                                                            │
    ┌───────────────────────────────────────────────────────┴────────────────────────────────────────────────┐
    ▼                                                                                                        ▼
[ Walkie de tu amigo ]                                                                    [ Tu Receptor SDR ]
 (Tiene Squelch ajustado a 67 Hz)                                                         (Squelch normal desactivado)
  ► ¡Abre el altavoz y te escucha!                                                         ► ¡Escucha la voz de TODOS
                                                                                              e identifica el subtono!

```

> **¡Atención Cazador!** El canal **sigue estando ocupado por completo**. Si tú hablas en el Canal 1 con subtono, ocupas la frecuencia para todo el mundo. Los demás simplemente no escucharán tu voz en sus walkies si tienen otro subtono puesto, ¡pero no podrán hablar al mismo tiempo sin pisarse!

#### La ventaja del SDR: Escucharlo todo sin restricciones

Si tú pones tu SDR en el Canal 1 sin ningún tipo de filtro de subtono, **escucharás a absolutamente todo el mundo que transmita en ese canal**, da igual el "subcanal" o subtono que hayan puesto en sus aparatos. Nada se le oculta a un analizador de espectro.

### 7. Experimentos con Subtonos y el Plugin de SDR++

Para entender esto al 100%, vamos a hacer un experimento de laboratorio si tienes un par de walkie-talkies a mano.

#### Experimento 1: El filtro invisible

1. Configura el **Walkie A** en el Canal 1 con el **Subtono 01** activado.

2. Configura el **Walkie B** en el Canal 1 **SIN subtono** (subtono 00 o desactivado).

3. Transmite desde el **Walkie A** (con subtono) $\rightarrow$ El **Walkie B** (sin subtono) **SÍ lo escucha**.

4. Transmite desde el **Walkie B** (sin subtono) $\rightarrow$ El **Walkie A** (con subtono) **NO escucha nada** y se queda en silencio, porque le falta la "llave" (el pitido grave) para abrir su Squelch.

#### Experimento 2: Cazar el subtono con SDR++

SDR++ tiene un módulo específico para decodificar subtonos en tiempo real.

1. En el panel izquierdo de SDR++, busca la sección de módulos y añade el módulo **CTCSS Decoder** (o *Tone Decoder*).

2. Pide a un amigo o familiar que hable por el walkie con un subtono activado.

3. Observa cómo en el panel del decodificador de SDR++ aparece instantáneamente la frecuencia exacta del subtono emitido (por ejemplo: `67.0 Hz`, `88.5 Hz` o `123.0 Hz`).

¡Felicidades! Has desarmado el truco de los "subcanales privados" y ahora comprendes perfectamente cómo funciona la gestión de canales en el mundo real.

### Resumen del Capítulo 1

* El PMR446 opera en UHF ($446,0 - 446,2 \text{ MHz}$) con 16 canales de $12,5 \text{ kHz}$ de ancho (los modelos más antiguos solo soportan los 8 primeros).

* Es una comunicación **semi-dúplex** (se habla pulsando el **PTT** o "peteteando").

* La voz viaja en **NFM** (*Narrow FM*).

* El **Squelch** es la puerta que elimina el ruido cuando nadie habla.

* Los **subtonos** ($\text{CTCSS}$) son tonos inaudibles para no escuchar a otros grupos, pero **no privatizan el canal**. Con tu SDR puedes escucharlo todo.