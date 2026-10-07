# MÓDULO 0: LA BIENVENIDA Y EL EQUIPO DE CACERÍA

## Capítulo 0: El mapa del tesoro invisible

### 1. El mar invisible en tu habitación

Imagínate por un momento que pudieras ponerte unas gafas mágicas y ver todo lo que flota a tu alrededor ahora mismo. Verías hilos luminosos cruzando las paredes, destellos que bajan desde el espacio y señales atravesando el aire a la velocidad de la luz.

No es magia, es el **espectro radioeléctrico**.

En este preciso instante, la habitación en la que estás sentado está repleta de información:

* Conversaciones entre pilotos y torres de control.

* Posiciones GPS en tiempo real de los aviones que cruzan el cielo sobre tu tejado.

* Fotografías de nubes enviadas por satélites meteorológicos a cientos de kilómetros de altura.

* Emisoras de radio transmitiendo música desde el otro lado del océano.

* Las señales del Wi-Fi de tu casa, el Bluetooth de tus auriculares y la cobertura de tu móvil.

Todas estas señales son **ondas electromagnéticas**. Están ahí, pero nuestros ojos y oídos no pueden captarlas directamente. Necesitamos un superpoder tecnológico para "verlas" y "escucharlas".

Ahí es donde entra la **Radioescucha** y tu mejor aliado: el **SDR** (*Software Defined Radio* o Radio Definida por Software).

### 2. ¿Qué es la Radioescucha y qué es un SDR?

Tradicionalmente, para escuchar la radio necesitabas un aparato lleno de ruedas, botones fijos y circuitos analógicos dedicados a una sola cosa (como la radio FM del coche).

Un **SDR** cambia las reglas del juego. Es un pequeño dispositivo USB (del tamaño de un pendrive) al que le conectas una antena. En lugar de procesar la señal con circuitos mecánicos, convierte las ondas de radio en datos puros y los envía a tu ordenador. Es tu ordenador, mediante software gratuito como **SDR++** o **SDR#**, el que transforma esos datos en sonido, imágenes o texto.

Con un SDR, tu ordenador se convierte en un receptor universal capaz de sintonizar casi cualquier frecuencia existente.

```
[ Antena ] ──► [ Pincho USB SDR ] ──► [ Cable USB ] ──► [ Tu Ordenador + Software ]
 (Captura        (Convierte ondas                       (Procesa, dibuja
  ondas)          en datos)                              el espectro y reproduce)

```

#### Tu panel de control: Espectro y Waterfall (Cascada)

Cuando abres el programa de SDR, lo primero que salta a la vista no es solo el audio, sino una pantalla llena de colores en movimiento. Esta pantalla se divide en dos partes principales:

1. **El Analizador de Espectro (Spectrum Display):** Es una gráfica superior que muestra la potencia de las señales en vivo. Las montañas o picos más altos representan señales fuertes (como una emisora local), mientras que los valles planos son el ruido de fondo.

2. **La Cascada de Frecuencias (Waterfall):** Es la parte inferior que cae hacia abajo como en la película *Matrix*. Muestra la historia reciente de lo que ha pasado en el aire. Las zonas azules representan silencio o ruido, mientras que las líneas brillantes (amarillas, rojas o verdes) son emisiones activas.

> **¡Regla del cazador!** Si ves una línea vertical brillante bajando por la cascada, ¡ahí hay una señal esperándote! Solo tienes que hacer clic sobre ella para escucharla o descodificarla.

### 3. La física de las ondas: ¿Por qué dividimos el espectro?

Para no perderte en este océano de señales, necesitas entender cómo funcionan las ondas.

Una onda de radio es como una ola en el mar. Tiene dos características clave:

* **Frecuencia (**$f$**):** Cuántas olas pasan por un punto en un segundo. Se mide en Hercios ($\text{Hz}$). $1 \text{ MHz}$ (Megahercio) significa 1 millón de olas por segundo.

* **Longitud de onda (**$\lambda$**):** La distancia física que hay entre la cresta de una ola y la siguiente. Se mide en metros.

Ambas están unidas por una constante fundamental del universo: la **velocidad de la luz** ($c \approx 300.000 \text{ km/s}$ o $3 \times 10^8 \text{ m/s}$).

La fórmula matemática que las relaciona es:

$$
c = f \cdot \lambda
$$

Si despejamos la longitud de onda ($\lambda$), obtenemos la relación matemática directa:

$$
\lambda = \frac{c}{f}
$$

Para hacer cálculos rápidos mentales, usamos la velocidad de la luz aproximada en miles de kilómetros por segundo ($300$):

$$
\text{Longitud de onda (m)} \approx \frac{300}{\text{Frecuencia (MHz)}}
$$

#### El misterio de los números: 3, 30, 300...

¿Te has preguntado por qué los científicos dividen las bandas de radio en saltos de $3$, $30$, $300$? No es casualidad. Es por la matemática limpia de la velocidad de la luz ($300$).

Fíjate en esta relación:

* A $3 \text{ MHz}$, la longitud de onda es $\lambda = \frac{300}{3} = 100 \text{ metros}$.

* A $30 \text{ MHz}$, la longitud de onda es $\lambda = \frac{300}{30} = 10 \text{ metros}$.

* A $300 \text{ MHz}$, la longitud de onda es $\lambda = \frac{300}{300} = 1 \text{ metro}$.

* A $3000 \text{ MHz}$ ($3 \text{ GHz}$), la longitud de onda es $\lambda = \frac{300}{3000} = 0,1 \text{ metros} = 10 \text{ centímetros}$.

**¿Por qué importa esto?** Porque **el tamaño de tu antena depende del tamaño de la onda**. Para captar una onda de 10 metros necesitas una antena grande; para captar una onda de 10 centímetros basta con una pequeña varilla.

### 4. El mapa de carreteras del espectro (Bandas y Ejemplos)

El espectro radioeléctrico está dividido en "barrios" o bandas. Aquí tienes un mapa visual desde las ondas más gigantescas hasta las más diminutas:

```
+-----------------------------------------------------------------------------------------+
|  ONDA LARGA (LW)  |  ONDA MEDIA (MW)  |  ONDA CORTA (HF)  |   VHF    |   UHF    |  SHF  |
|   (30-300 kHz)    |   (300-3000 kHz)  |     (3-30 MHz)    | (30-300) | (300-3G) | (>3G) |
+-----------------------------------------------------------------------------------------+
|  Ondas de km      |  Ondas de hm      |  Ondas de decam.  | Ondas m  | Ondas dm | cm/mm |
+-----------------------------------------------------------------------------------------+

```

#### 1. Onda Larga (LW - Long Wave): $30 \text{ kHz}$ a $300 \text{ kHz}$

* **Longitud de onda:** De $10 \text{ km}$ a $1 \text{ km}$.

* **Usos:** Radiofaros de navegación antigua, señales del tiempo y radioemisiones de máxima cobertura que atraviesan montañas.

#### 2. Onda Media (MW - Medium Wave): $300 \text{ kHz}$ a $3 \text{ MHz}$ ($3000 \text{ kHz}$)

* **Longitud de onda:** De $1 \text{ km}$ a $100 \text{ metros}$.

* **Usos:** La clásica **Radio AM comercial** ($531 \text{ kHz} - 1602 \text{ kHz}$ en Europa, y hasta $1700 \text{ kHz}$ en América, con canales separados por $9 \text{ kHz}$ o $10 \text{ kHz}$). Por la noche, estas ondas rebotan en la atmósfera y permiten escuchar emisoras a cientos o miles de kilómetros con una simple antena de hilo.

#### 3. Onda Corta (HF - High Frequency): $3 \text{ MHz}$ a $30 \text{ MHz}$

* **Longitud de onda:** De $100 \text{ metros}$ a $10 \text{ metros}$.

* **Usos que cazaremos:** Radioaficionados de todo el planeta, emisoras internacionales de países lejanos (China, Rumanía, etc.), aviones cruzando el océano Atlántico y misteriosas estaciones militares cifradas.

#### 4. VHF (Very High Frequency): $30 \text{ MHz}$ a $300 \text{ MHz}$

* **Longitud de onda:** De $10 \text{ metros}$ a $1 \text{ metro}$.

* **Usos que cazaremos:**

  * **Radio Comercial FM en Europa (**$87,5 \text{ MHz} - 108,0 \text{ MHz}$**):** Tu música e información local usando modulación FM y datos RDS.

  * **Banda Aérea (**$118 \text{ MHz} - 137 \text{ MHz}$**):** Torres de control hablando con pilotos en modulación AM.

  * **Radioaficionados (**$144 \text{ MHz} - 146 \text{ MHz}$ **/ Banda de 2m).**

#### 5. UHF (Ultra High Frequency): $300 \text{ MHz}$ a $3 \text{ GHz}$ ($3000 \text{ MHz}$)

* **Longitud de onda:** De $1 \text{ metro}$ a $10 \text{ centímetros}$.

* **Usos que cazaremos:** Walkie-talkies PMR446 ($446 \text{ MHz}$), señales de radar transpondedor de aviones ADS-B ($1090 \text{ MHz}$).

* **Usos cotidianos (que no escucharemos por estar cifrados o ser muy complejos):** Redes móviles 4G/5G, Bluetooth y Wi-Fi de $2,4 \text{ GHz}$.

#### 6. SHF (Super High Frequency / Microondas): Por encima de $3 \text{ GHz}$

* **Longitud de onda:** Menor a $10 \text{ centímetros}$.

* **Usos:** Wi-Fi de $5 \text{ GHz}$, enlaces de televisión por satélite, radares meteorológicos avanzados y... ¡el horno microondas de tu cocina! (que calienta la comida usando ondas en torno a los $2,45 \text{ GHz}$).

### 5. Tu Kit de Inicio para la Cacería

Para empezar esta aventura solo necesitas tres cosas sobre tu mesa:

1. **Tu pincho SDR:** Un receptor basado en RTL2832U (como RTL-SDR v3/v4 o similar).

2. **El kit de antena dipolo:** Una base con soporte y dos varillas telescópicas extensibles.

3. **Tu ordenador con software SDR:** SDR++ cargado y listo.

### 6. Tu Misión en este Libro

A lo largo de los siguientes capítulos no nos limitaremos a leer teoría. Vamos a ir **desbloqueando misiones prácticas**:

* **Paso 1:** Ajustarás la longitud de las varillas de tu antena para sincronizarla perfectamente con la frecuencia deseada.

* **Paso 2:** Sintonizarás la frecuencia en el software y ajustarás los filtros.

* **Paso 3:** Identificarás el tipo de modulación (FM, AM, SSB, datos digitales).

* **Paso 4:** Decodificarás la voz, el texto o las imágenes ocultas en la cascada de la pantalla.

Prepara tu equipo, conecta la antena cerca de la ventana y abre SDR++. ¡La cacería del espectro acaba de comenzar!