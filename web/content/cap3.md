# MÓDULO 1: SEÑALES LOCALES Y VISIÓN DIRECTA (VHF / UHF)

## Capítulo 3: Trampolines en las montañas: Repetidores de VHF y UHF

### 1. El límite del horizonte y la física del terreno

Imagina que estás en medio de una plaza rodeada de edificios de diez plantas o en un valle rodeado de altas montañas. Si intentas hablar con un amigo usando un *walkie-talkie* (estación portátil) de $5\text{ W}$ de potencia, o incluso con la estación emisora instalada en el salpicadero de tu coche (estación móvil) a $25\text{ W}$, notarás rápidamente que la comunicación no llega muy lejos.

¿Por qué ocurre esto? Como vimos en los capítulos anteriores, las ondas radioeléctricas en las bandas de **VHF** ($30-300\text{ MHz}$) y **UHF** ($300-3000\text{ MHz}$) se propagan mediante **visión directa** (*line-of-sight*). A diferencia de la Onda Corta (HF), donde las ondas rebotan en las capas ionizadas de la atmósfera superior para salvar miles de kilómetros, las señales de VHF y UHF atravesarían la ionosfera sin rebotar y se perderían en el espacio exterior.

```
       [ Emisión Directa ] ────► (Se pierde en la Ionosfera / Espacio)
               ▲
               │
[ Walkie ] ────┴──────► [ Obstáculo: Montaña / Edificios ] ✕ ──► [ Tu SDR en el valle ]

```

A distancias cortas (dentro de un mismo barrio, en un bosque denso o en un campo abierto) la transmisión no presenta problemas. Sin embargo, en cuanto la **curvatura de la Tierra** o la **orografía del terreno** (colinas, sierras, edificios) se interponen en el camino recto de la onda, la señal se bloquea. Incluso instalando una estación base fija en el tejado de tu casa con una potencia de hasta $50\text{ W}$, si hay un puerto de montaña intermedio, tu señal no podrá traspasarlo.

¿Cómo consiguen entonces los radioaficionados comunicarse entre ciudades separadas por más de cien kilómetros usando simples *walkie-talkies*? La respuesta está en instalar **trampolines electromagnéticos** en los puntos más altos del planeta: los **Repetidores**.

### 2. Anatomía y funcionamiento de un Repetidor

Un **repetidor** (o *relé*) es una estación de radio desatendida instalada estratégicamente en una cima de montaña, una cumbre elevada o la azotea de un rascacielos. Está equipado con antenas de elevada ganancia, cavidades resonantes (filtros de alta resolución) y transmisores con potencias habituales entre los $50\text{ W}$ y $100\text{ W}$.

```
                             [ REPETIDOR ]
                         (Ubicación Elevada)
                           /             \
            Frecuencia de /               \ Frecuencia de
            Entrada (TX) /                 \ Salida (RX)
                        /                   \
                       /                     ▼
         [ Radioaficionado A ]           [ Radioaficionado B ]
           (Walkie / Móvil)              (o tu receptor SDR)

```

Su función fundamental es **retransmitir en tiempo real** la señal que recibe. Cuando un radioaficionado "pincha" o excita un repetidor desde su coche o *walkie*, el repetidor amplifica esa voz y la vuelve a emitir instantáneamente desde su cumbre hacia todo su radio de cobertura (que puede abarcar áreas de más de $150\text{ km}$ a la redonda).

#### El reto de la simultaneidad y el desfase (Offset)

La retransmisión es **simultánea**: escuchas la voz del operador según está hablando (con un desfase o *lag* de microsegundos imperceptible).

Para que un repetidor pueda escuchar y transmitir al mismo tiempo con su propia antena sin "autobloquearse" ni saturar su propio receptor, es imposible que escuche y emita en la misma frecuencia. Por ello, todos los repetidores trabajan en **dúplex con desfase de frecuencia** (*offset* o desplazamiento):

* **Frecuencia de Entrada (Input):** Es la frecuencia en la que tú o cualquier radioaficionado **transmitís** con la emisora hacia el repetidor. El repetidor está siempre a la escucha en esa frecuencia.

* **Frecuencia de Salida (Output):** Es la frecuencia en la que el repetidor **emite** hacia el mundo todo lo que escucha por su entrada. Es la frecuencia que tú sintonizarás en tu SDR para escuchar la conversación.

#### Valores Estándar del Offset en España

La diferencia entre la frecuencia de salida y la de entrada depende de la banda en la que nos encontremos:

$$
\text{Frecuencia de Entrada} = \text{Frecuencia de Salida} + \text{Offset}
$$

* **Banda de 2 Metros (VHF):** El offset estándar es negativo y equivale a $-600\text{ kHz}$ ($-0{,}6\text{ MHz}$).

  * *Ejemplo:* Si la salida del repetidor está en $145{,}700\text{ MHz}$, la entrada hacia donde hay que transmitir se encuentra exactamente en $145{,}100\text{ MHz}$.

* **Banda de 70 Centímetros (UHF):** El offset estándar en España es negativo y equivale a $-7{,}6\text{ MHz}$.

  * *Ejemplo:* Si la salida del repetidor está en $438{,}950\text{ MHz}$, la entrada hacia donde hay que transmitir se encuentra en $431{,}350\text{ MHz}$.

### 3. El guardián de acceso: Subtonos CTCSS

Si todos los repetidores de una provincia estuvieran abiertos de forma permanente, cualquier interferencia, un motor encendido o el ruido atmosférico abriría el repetidor de la montaña, manteniéndolo transmitiendo ruido en bucle y desgastando su etapa de potencia.

Para evitar activaciones accidentales se emplean los **Subtonos Analógicos CTCSS** (*Continuous Tone-Coded Squelch System*).

```
[ Transmisión de Voz ] + [ Tono subaudible inaudible (p. ej. 67.0 Hz) ] ──► [ Decodificador CTCSS Repetidor ] ──► ¡Abre Transmisor!

```

Para "despertar" al repetidor y lograr que retransmita nuestra voz, la emisora transmisora debe emitir junto con el micrófono un tono inaudible de muy baja frecuencia (entre $67{,}0\text{ Hz}$ y $254{,}1\text{ Hz}$). Si el decodificador del repetidor reconoce ese tono exacto programado en su memoria, habilita el paso de la señal.

#### Subtonos en recepción: El caso particular del repetidor `ED4YAN`

Por lo general, los repetidores solo exigen el subtono en su **frecuencia de entrada**. Sin embargo, algunos repetidores modernos o situados en puntos con altísimo nivel de interferencias también **emiten un subtono CTCSS en su frecuencia de salida**.

Un caso muy singular en el centro de la Península Ibérica es el repetidor de UHF **`ED4YAN`**, situado a gran altitud en una cumbre montañosa. Este repetidor exige un subtono de $100{,}0\text{ Hz}$ para ser activado por entrada, pero además **inyecta de forma continua ese mismo subtono de** $100{,}0\text{ Hz}$ **en su frecuencia de salida (**$438{,}950\text{ MHz}$**)**. Esto permite a los radioescuchas o estaciones base configurar el *squelch* de sus receptores para que solo abran el altavoz cuando la señal provenga de dicho repetidor, ignorando cualquier otra interferencia en la misma canalización.

### 4. El Plan de Bandas de la URE (VHF y UHF)

La Unión de Radioaficionados Españoles (URE), alineada con la IARU Región 1, establece el uso coordinado del espectro para garantizar la convivencia entre diferentes modos de emisión (Telegrafía CW, Banda Estrecha SSB, Satélites, Voz Digital y Voz Analógica FM).

#### Características técnicas de la voz en estas bandas:

* **Modulación de Voz:** Se utiliza la Modulación en Frecuencia (**FM**).

* **Ancho de banda del canal (Canalización):** En España y Europa se emplean canales estrechos de $12{,}5\text{ kHz}$ (**NFM** o *Narrow FM*). *(A diferencia de EE.UU. u otros países donde se utilizan canalizaciones anchas de* $25\text{ kHz}$*).*

* **Otros usos que conviven en la banda:** Aunque en este capítulo nos enfocamos en la escucha de voz analógica en FM, en estas bandas también operan modos como la Banda Lateral Única (SSB) para contactos a muy larga distancia por rebote o propagación esporádica, balizas de estudio de propagación y transmisiones de datos digitales como la red de geolocalización **APRS** ($144{,}800\text{ MHz}$).

#### Estructura de la Banda de 2 Metros ($144\text{ MHz} - 146\text{ MHz}$)

| Segmento / Frecuencia | Tipo de Uso / Nomenclatura URE | Descripción | 
| ----- | ----- | ----- | 
| $144{,}000 - 144{,}400\text{ MHz}$ | CW / Modos Estrechos | Telegrafía y contactos SSB de larga distancia. | 
| $144{,}800\text{ MHz}$ | Datos / APRS | Frecuencia nacional de paquetes de geolocalización de estaciones. | 
| $145{,}200 - 145{,}575\text{ MHz}$ | Canales Simplex (Serie **V**) | Comunicaciones directas entre estaciones sin repetidor. | 
| $145{,}500\text{ MHz}$ | **Canal V40 (Antiguo S20)** | **Frecuencia Internacional de Llamada en Simplex FM.** | 
| $145{,}525\text{ MHz}$ | Canal V42 | Frecuencia secundaria / Emergencias locales. | 
| $145{,}600 - 145{,}7875\text{ MHz}$ | Salidas Repetidores (Serie **RV**) | **Frecuencias de salida de repetidores VHF (Canales RV48 a RV62).** | 
| $145{,}000 - 145{,}1875\text{ MHz}$ | Entradas Repetidores | Frecuencias donde los radioaficionados transmiten (Offset $-600\text{ kHz}$). | 

> **Nomenclatura de Canales:** Antiguamente los canales de repetidor analógicos en 2 metros se denominaban `R0` a `R7` (con canalizaciones clásicas separadas $25\text{ kHz}$). En la normativa actual de IARU/URE, los repetidores abarcan del **`RV48` (`R0`) al `RV62` (`R7`)** (pasos de $12{,}5\text{ kHz}$) aunque los radioaficionados siguen teniendo costumbre de nombrar a los repetidores por sus nombres antiguos de frecuencia:
>
> * **`R0`** $\rightarrow$ Canal **`RV48`** (Salida: $145{,}600\text{ MHz}$)
>
> * **`R1`** $\rightarrow$ Canal **`RV50`** (Salida: $145{,}625\text{ MHz}$)
>
> * **`R2`** $\rightarrow$ Canal **`RV52`** (Salida: $145{,}650\text{ MHz}$)
>
> * **`R5`** $\rightarrow$ Canal **`RV58`** (Salida: $145{,}725\text{ MHz}$)
>
> * **`R7`** $\rightarrow$ Canal **`RV62`** (Salida: $145{,}775\text{ MHz}$)

#### Estructura de la Banda de 70 Centímetros ($430\text{ MHz} - 440\text{ MHz}$)

| Segmento / Frecuencia | Tipo de Uso / Nomenclatura URE | Descripción | 
| ----- | ----- | ----- | 
| $432{,}000 - 432{,}400\text{ MHz}$ | CW / SSB / Balizas | Modos no FM y experimentos de propagación. | 
| $433{,}000 - 433{,}375\text{ MHz}$ | Entradas Repetidores UHF | Transmisiones hacia repetidores con offset $-7{,}6\text{ MHz}$. | 
| $433{,}500\text{ MHz}$ | **Canal U280 (Antiguo SU20)** | **Frecuencia Internacional de Llamada en Simplex FM (UHF).** | 
| $438{,}650 - 439{,}425\text{ MHz}$ | Salidas Repetidores FM (Serie **RU**) | **Frecuencias de salida de repetidores UHF.** | 

> **Nomenclatura UHF:** La serie de repetidores analógicos de UHF abarca desde el canal **`RU692`** (`R70`) en $438{,}650\text{ MHz}$ hasta el **`RU754`** (`R101`) en $439{,}425\text{ MHz}$.

#### Fichas de Repetidores de Ejemplo para tus Prácticas de Escucha

Aquí tienes tres datos reales de repetidores clave en el centro de España para sintonizar en tu SDR:

1. **Repetidor de Talavera de la Reina (Toledo):**

   * **VHF (`ED4YAV`):** Salida: $145{,}625\text{ MHz}$ (`RV50` - R1) | Offset: $-600\text{ kHz}$ | Subtono: $67{,}0\text{ Hz}$

   * **UHF (`ED4YAR`):** Salida: $438{,}750\text{ MHz}$ (`RU700` - R74) | Offset: $-7{,}6\text{ MHz}$ | Subtono: $67{,}0\text{ Hz}$

2. **Repetidor de Toledo Capital:**

   * **VHF:** Salida: $145{,}725\text{ MHz}$ (`RV58` - R5) | Offset: $-600\text{ kHz}$

   * **UHF:** Salida: $438{,}698\text{ MHz}$ aprox. / Canal `RU698` (R73) | Offset: $-7{,}6\text{ MHz}$

3. **Repetidor Elevado (`ED4YAN`):**

   * **UHF (`ED4YAN`):** Salida: $438{,}950\text{ MHz}$ (`RU716` - R82) | Offset: $-7{,}6\text{ MHz}$ (Entrada en $431{,}350\text{ MHz}$) | Subtono Entrada/Salida: $100{,}0\text{ Hz}$

### 5. Las matrículas del aire: Identificativos y Distritos de Radioaficionado

Dado que estas bandas están asignadas en exclusiva al Servicio de Radioaficionados, cuando sintonices cualquier conversación observarás una estricta disciplina de identificación. Todos los operadores con licencia oficial tienen asignada una "matrícula radioeléctrica" única e intransferible denominada **Indicativo** (o *Callsign*).

#### ¿Cómo se identifican durante un contacto (QSO)?

Para transmitir con corrección, los radioaficionados emplean el **Alfabeto Fonético Internacional ICAO** que estudiamos en el Capítulo 2 (Alfa, Bravo, Charlie...):

* **Al iniciar la llamada:** Indican inmediatamente quién habla.
  * *Ejemplo:* *"Aquí Echo Alpha Cuatro Bravo Charlie Delta llamando en el canal"*.

* **Al responder a un colega:** Se cita primero el indicativo de la estación receptora, seguido de la palabra *"de"* y del indicativo propio.
  * *Ejemplo:* *"Echo Alpha Cuatro Bravo Charlie Delta, de Echo Alpha Uno Sierra Tango Uniform, te recibo cinco nueve"*.

* **Durante y al finalizar el contacto:** Si la conversación es extensa, deben dar su indicativo periódicamente al final de cada intervención o al despedirse.

#### Anatomía de un Indicativo Español

Los indicativos oficializados en España constan normalmente de un **prefijo**, un **número de distrito** y un **sufijo de 1 a 3 letras**:

1. **El Prefijo (País):** En España los indicativos habituales comienzan por **`EA`** (las autorizaciones actuales se entregan bajo esta serie). También verás operadores veteranos con licencias antiguas que conservan los prefijos **`EB`** o **`EC`**.

2. **El Número de Distrito (Zona Geográfica):** España está dividida administrativamente en **9 Distritos de Radioafición** (números del 1 al 9):

   * **Distrito 1 (`EA1`):** Galicia, Asturias, Cantabria, La Rioja, Castilla y León.
   * **Distrito 2 (`EA2`):** País Vasco, Navarra, Aragón.
   * **Distrito 3 (`EA3`):** Cataluña.
   * **Distrito 4 (`EA4`):** Madrid, Extremadura y Castilla-La Mancha (excepto Albacete).
   * **Distrito 5 (`EA5`):** Comunidad Valenciana, Región de Murcia y provincia de Albacete.
   * **Distrito 6 (`EA6`):** Islas Baleares.
   * **Distrito 7 (`EA7`):** Andalucía.
   * **Distrito 8 (`EA8`):** Islas Canarias.
   * **Distrito 9 (`EA9`):** Ceuta y Melilla.

![Distritos de Radioafición en España](content/cap3/distritos.jpeg)

3. **El Sufijo (Identificación Personal):** Habitualmente formado por **3 letras** (por ejemplo, `BCD`). Los indicativos especiales o de veteranos con gran trayectoria pueden tener **sufijos de 1 o 2 letras** (dando indicativos más cortos de 4 o 5 caracteres en total, como `EA4A` o `EA1AB`), pero son más escasos.

```
                  [ E A ]    [ 4 ]    [ B C D ]
                     │         │          │
    Prefijo de España ┘         │          └─ Sufijo personal (3 letras)
                                │
          Distrito 4 ───────────┘
 (Madrid / Castilla-La Mancha / Extremadura)

```

#### El gran alcance de `ED4YAN` y la cacería de distritos

Dado que la estación **`ED4YAN`** se encuentra ubicada en una cumbre de altísima cota en la zona central peninsular, su cobertura es colosal. Con tu SDR sintonizado en la salida de `ED4YAN` ($438{,}950\text{ MHz}$), no solo escucharás a radioaficionados de su propio distrito local (**`EA4`** - Madrid o Castilla-La Mancha).

Gracias a la elevación de su antena, captarás con nitidez a operadores emitiendo desde el norte desde el distrito **`EA1`** (Ávila, Segovia, Valladolid, Salamanca), desde el este en **`EA5`** (Albacete) o incluso desde el sur en **`EA7`** (Andalucía). ¡Abre bien la oreja y anota en tu libreta todos los distritos diferentes que seas capaz de descifrar!

### 6. Normativa e Identificación: Las Balizas Automáticas

Los repetidores están considerados por el Reglamento de Radiocomunicaciones como **estaciones desatendidas**. Al no haber un operador físico sentado junto al transmisor en la cima de la montaña, la normativa exige que la propia máquina se identifique periódicamente.

#### Reglas de las Balizas

* **Periodicidad:** Los repetidores deben emitir automáticamente su indicativo oficial (por ejemplo, `ED4YAN` o `ED4YAV`) a intervalos regulares de tiempo (habitualmente **cada 10 o 15 minutos**).

* **Formato de emisión:**

  * **En Telegrafía (Código Morse - CW):** El repetidor inyecta un tono audible codificado en Morse que deletrea su indicativo. El repetidor `ED4YAN` es un claro ejemplo de identificación en telegrafía.

  * **En Fonía (Voz sintetizada o grabada):** Una voz grabada pronuncia el indicativo y la asociación que lo mantiene (por ejemplo: *"Aquí repetidor ED4YAV de la Unión de Radioaficionados de Talavera de la Reina"*).

* **Acceso Público Universal:** Según la legislación española, los repetidores instalados por asociaciones autorizadas están **abiertos al uso de cualquier radioaficionado con licencia en regla**, siempre que respete el uso del código de buenas prácticas y su identificativo oficial.

### 7. Práctica de Escucha con SDR++: Caza e Identificación de Repetidores

En esta actividad vamos a aprovechar la capacidad de nuestro receptor SDR para monitorear múltiples canales de salida simultáneamente, cazar conversaciones a larga distancia e identificar repetidores mediante su baliza periódica.

```
[ Antena Dipolo (VHF/UHF) ] ──► [ SDR++ Wide Bandwidth ] ──► [ Observación de Picos de Salida ]
                                                                      │
                                                   ┌──────────────────┴──────────────────┐
                                                   ▼                                     ▼
                                      [ Escucha de Conversación ]             [ Decodificación de Baliza Morse/Fonía ]

```

#### Paso 1: Configuración en SDR++

1. **Modo / Demodulador:** Selecciona **NFM** (*Narrow FM*).

2. **Ancho de banda de canal:** Ajusta el filtro a $12{,}5\text{ kHz}$.

3. **Ajuste de Antena:**

   * Para la banda de **2 Metros (**$145\text{ MHz}$**)**: Extiende cada varilla telescópica del dipolo a unos $49-51\text{ cm}$ ($\lambda / 4$).

   * Para la banda de **70 Centímetros (**$438\text{ MHz}$**)**: Extiende cada varilla a unos $16-17\text{ cm}$.

#### Paso 2: Estrategia de Monitorización de la Cascada (Waterfall)

* Sintoniza tu SDR++ en la frecuencia central de la banda de salidas de VHF: $145{,}700\text{ MHz}$.

* Con una frecuencia de muestreo (*Sample Rate*) típica de $2{,}048\text{ MHz}$ o $2{,}56\text{ MHz}$ en tu RTL-SDR, podrás abarcar **toda la porción de repetidores de VHF (desde RV48 hasta RV62) de un solo vistazo** en la pantalla del analizador de espectro.

#### Paso 3: El reto del Espectro Ampliado (Captura Simultánea)

¿Podemos ver en la misma pantalla la transmisión original del operador y la retransmisión del repetidor al mismo tiempo?

* **En la Banda de VHF (2 Metros):** **¡SÍ ES POSIBLE!** Dado que el offset es únicamente de $600\text{ kHz}$ ($0{,}6\text{ MHz}$), si sintonizas tu SDR en $145{,}400\text{ MHz}$, captarás dentro de tu ancho de banda de recepción ($2{,}56\text{ MHz}$) tanto la entrada en $145{,}100\text{ MHz}$ como la salida en $145{,}700\text{ MHz}$. Si un operador cercano a tu casa transmite hacia el repetidor, verás dos trazos verticales iluminarse a la vez en la cascada.

* **En la Banda de UHF (70 cm):** **POR LO GENERAL NO ES POSIBLE.** El offset de UHF en España es de $7{,}6\text{ MHz}$. Este espacio supera con creces el rango de visión simultáneo de $2{,}56\text{ MHz}$ de un pincho RTL-SDR v4 común, por lo que tendrás que elegir entre escuchar la entrada o la salida.

#### Cuaderno de Bitácora de Caza de Repetidores

Utiliza esta tabla para registrar las estaciones captadas. Cuando escuches una baliza o una transmisión, contrástala con el [Listado Oficial de Repetidores de la URE](https://www.ure.es/repetidores/#r):

| Frecuencia Salida ($\text{MHz}$) | Canal / Banda | Indicativo Captado | Tipo de Baliza (Morse / Fonía) | Subtono Detectado | Ubicación Estimada / Notas | 
| ----- | ----- | ----- | ----- | ----- | ----- | 
| $145{,}625\text{ MHz}$ | `RV50` (2m) | `ED4YAV` | Fonía | $67{,}0\text{ Hz}$ | Talavera de la Reina (Toledo) | 
| $438{,}950\text{ MHz}$ | `RU716` (70cm) | `ED4YAN` | Telegrafía (CW) | $100{,}0\text{ Hz}$ | Repetidor elevado | 
| $145{,}500\text{ MHz}$ | `V40` (2m) | Directo (Simplex) | N/A (Llamada) | Ninguno | Frecuencia Internacional Llamada | 
|  |  |  |  |  |  | 
|  |  |  |  |  |  | 

### Resumen del Capítulo 3

* Las señales de VHF y UHF se propagan por **visión directa** y están limitadas por el terreno y la curvatura terrestre.

* Los **repetidores** situados en cotas elevadas permiten ampliar masivamente la cobertura de *walkies* y estaciones móviles.

* Operan en modo dúplex con un **desfase de frecuencia (Offset)**: $-600\text{ kHz}$ en 2m y $-7{,}6\text{ MHz}$ en 70cm.

* Los canales analógicos de repetidor en 2m van del **`RV48` (`R0`) al `RV62` (`R7`)**.

* Los **subtonos CTCSS** evitan la apertura accidental del *squelch* del repetidor por ruido o interferencias.

* En España la voz analógica utiliza **Modulación FM Estrecha (NFM,** $12{,}5\text{ kHz}$**)**.

* Los radioaficionados se identifican con su **indicativo oficial** (ej. `EA4BCD`), usando el **Alfabeto Fonético ICAO** y revelando su origen geográfico mediante los **distritos (1 al 9)**.

* Como estaciones desatendidas, los repetidores identifican su indicativo mediante **balizas automáticas** en telegrafía o fonía cada 10-15 minutos y están abiertos al uso público de cualquier radioaficionado con licencia.