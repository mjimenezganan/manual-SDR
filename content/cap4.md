# MÓDULO 2: CRUZANDO OCÉANOS EN ONDA CORTA (HF)

## Capítulo 4: Los exploradores globales: Radioaficionados en HF y modos SSB / CW

### 1. La física del rebote ionosférico y el horizonte infinito

En el Módulo 1 aprendimos que las señales de VHF y UHF viajan en línea recta y atraviesan la atmósfera perdiéndose en el espacio exterior. Si la radio se hubiera detenido ahí, comunicarnos con la otra punta del planeta requeriría redes terrestres de repetidores o costosos satélites. Sin embargo, en la banda de **Onda Corta o High Frequency (HF)** —que comprende el espectro entre los $3\text{ MHz}$ y los $30\text{ MHz}$— la Tierra nos ofrece un espejo natural colosal: la **ionosfera**.

La ionosfera es una capa de la alta atmósfera (entre los $60\text{ km}$ y $600\text{ km}$ de altitud) cargada de electrones e iones libres, ionizados principalmente por la radiación solar. Cuando una onda electromagnética de HF sale disparada hacia el cielo con el ángulo adecuado, en lugar de atravesar esta capa, **se refracta (se curva y "rebota") de regreso hacia la superficie terrestre**. Al incidir de nuevo contra la Tierra o el océano, la señal puede rebotar hacia arriba una y otra vez. A este fenómeno se le conoce como **propagación por onda ionosférica o rebote ionosférico (*Skywave propagation*)**, y permite que una emisora de apenas $100\text{ W}$ desde un garaje en España establezca un contacto con Japón, Australia o la Antártida.


```
                     [ Capa F2 / Ionosfera (250-400 km) ]
                      /                            \
  Rebote Ionosférico /                              \  Rebote Ionosférico
                   /                                 \
   [ Transmisor ] ─┘                                  ▼
      (España)    \                              [ Tu SDR ]
                   \     [ Zona de Sombra ]    (Japón / EE.UU.)
                    \    (Estación Sorda)
                     └───────── ✕ ─────────┘
                              300 km

```

#### El enigma de la "Zona de Sombra" (Skip Distance)

Este mecanismo de rebote genera un fenómeno curioso e impactante para el radioescucha novato: la **Zona de Sombra** (*Skip Distance* o *Dead Zone*). 

Si un radioaficionado emite en la banda de HF desde Madrid con $100\text{ W}$, su señal terrestre (*Onda de Superficie*) se atenúa y desaparece tras recorrer apenas $50-100\text{ km}$. Por su parte, la señal que viaja hacia el cielo (*Onda Ionosférica*) asciende con un ángulo determinado, rebota en la ionosfera a $300\text{ km}$ de altura y vuelve a tocar tierra a $1.200\text{ km}$ de distancia (por ejemplo, en Alemania o Escandinavia). 

¿El resultado? Una estación situada en Zaragoza (a $300\text{ km}$ de Madrid) estará en una **zona ciega total** y no escuchará nada, mientras que un radioescucha en Berlín captará la señal con una claridad pasmosa.

#### Las capas de la ionosfera: El ritmo del día y la noche

La ionosfera no es una capa estática; cambia de altura y densidad según la hora del día y la actividad del Sol:

* **Capa D ($60-90\text{ km}$): La "esponja" diurna.** Solo existe durante las horas de luz solar. En lugar de reflejar las ondas, absorbe fuertemente las frecuencias más bajas del rango de HF ($1{,}8\text{ MHz}$ a $7\text{ MHz}$). Por eso, durante el día las bandas bajas se sienten "apagadas" o con alcance muy corto. Al anochecer, la capa D desaparece casi por completo, "abriendo" las bandas nocturnas a contactos intercontinentales.
* **Capa E ($90-150\text{ km}$):** Capa intermedia que ayuda al rebote en frecuencias medias. En verano sufre a veces un fenómeno fascinante llamado **Propagación Esporádica E ($E_s$)**, permitiendo contactos gigantescos en VHF ($144\text{ MHz}$) por nubes ionizadas de alta densidad.
* **Capas F1 y F2 ($150-400\text{ km}$): Las grandes reflectoras.** Durante el día el Sol divide la capa F en dos ($F_1$ y $F_2$). La capa $F_2$ es la cota más alta y densa, responsable de reflejar la radio a distancias de miles de kilómetros en un solo salto. Por la noche, $F_1$ y $F_2$ se fusionan en una sola capa F nocturna.


### 2. Comportamiento de las Bandas de HF de Radioaficionado

El espectro de HF está repartido en sub-bandas asignadas internacionalmente a los radioaficionados. Se las nombra según la longitud de onda aproximada de sus señales ($\lambda = c / f$):


```
MÁS CORTO                                                                                           MÁS LARGO

Longitud de onda (λ)
10m        12m        15m        17m        20m        30m        40m       60m        80m       160m
┌──────────┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────┐
│ 28.0 MHz │ 24.8 MHz │ 21.0 MHz │ 18.0 MHz │ 14.0 MHz │ 10.1 MHz │  7.0 MHz │  5.3 MHz │  3.5 MHz │  1.8 MHz │
└──────────┴──────────┴──────────┴──────────┴──────────┴──────────┴──────────┴──────────┴──────────┴──────────┘
Frecuencia (f)
MÁS ALTO                                                                                   MÁS BAJO

◄──────── BANDAS DIURNAS ────────► ◄── WARC / INTERMEDIAS ──► ◄────────── BANDAS NOCTURNAS / NVIS ─────────►
       (Mejor con Sol radiante)            (24 Horas)                       (Mejor al caer la noche)

```

#### Bandas Nocturnas o Bajas ($80\text{m}$ y $40\text{m}$)
- **Banda de 80 metros ($3{,}5\text{ MHz} - 3{,}8\text{ MHz}$):** Muy ruidosa durante el día debido a la absorción de la capa D. De noche es ideal para contactos locales y regionales a escala europea.
- **Banda de 40 metros ($7{,}0\text{ MHz} - 7{,}2\text{ MHz}$):** **La reina indiscutible del radioescucha europeo.** Durante el día ofrece cobertura en toda la Península Ibérica y países limítrofes. Al caer la noche y disiparse la capa D, se convierte en una autopista global para escuchar transmisiones con América, África y Asia.

#### La Banda Todoterreno ($20\text{m}$)
- **Banda de 20 metros ($14{,}000\text{ MHz} - 14{,}350\text{ MHz}$):** Considerada la **banda DX por excelencia**. Sufre muy poco la absorción diurna y mantiene una combinación perfecta entre reflectividad ionosférica y estabilidad. Permite enlazar con cualquier continente a casi cualquier hora del día o de la noche.

#### Bandas Diurnas o Altas ($15\text{m}, 12\text{m}$ y $10\text{m}$)
- **Banda de 15 metros ($21{,}0\text{ MHz} - 21{,}45\text{ MHz}$) y 10 metros ($28{,}0\text{ MHz} - 29{,}7\text{ MHz}$):** Requieren una fuerte ionización de la capa F2. Son bandas estrictamente **diurnas**. En épocas de alta actividad solar o en días calurosos de verano, permiten contactos intercontinentales con potencias diminutas (de apenas $5\text{ W}$). De noche suelen permanecer completamente inactivas ("cerradas").

> **Las Bandas Especiales: Bandas WARC (30m, 17m, 12m) y la Banda de 60m**
>
> Además de las bandas tradicionales, existen sub-bandas asignadas con normativas y objetivos muy concretos que todo radioescucha debe conocer, las Bandas WARC (World Administrative Radio Conference)
> Asignadas en la conferencia internacional de Ginebra de 1979, comprenden los segmentos de **30 metros ($10{,}1\text{ MHz}$)**, **17 metros ($18{,}1\text{ MHz}$)** y **12 metros ($24{,}8\text{ MHz}$)**.
> - **Prohibición de Concursos:** Por regulación de la IARU, **nunca se celebran concursos de radio en las bandas WARC**. Esto las convierte en un refugio tranquilo para la escucha relajada y el QSO casual sin la saturación de las grandes competiciones de fin de semana.
> - **La particularidad de los 30 Metros:** Dado su reducidísimo ancho de banda ($50\text{ kHz}$ totales entre $10{,}100\text{ MHz}$ y $10{,}150\text{ MHz}$), **la transmisión en Fonía (voz SSB) está completamente prohibida en 30m**. Se utiliza exclusivamente para Telegrafía (CW) y modos digitales de banda estrecha (FT8, RTTY).
>
> **La Banda de 60 Metros ($5{,}3\text{ MHz}$) — El puente NVIS**
> Aprobada de forma global en la Conferencia WRC-15, la banda de 60 metros ocupa un lugar estratégico entre los $40\text{m}$ y los $80\text{m}$.
> - **Cobertura NVIS constante:** Es la banda idónea para la propagación NVIS (*Near Vertical Incidence Skywave*), garantizando enlaces regionales estables sin zona de sombra tanto de día como de noche.
> - **Servicio Secundario:** Es una banda compartida con los servicios de emergencias y militares, por lo que las estaciones de radioaficionado operan con potencias limitadas y segmentos de frecuencia estrechos.



### 3. Las Antenas en HF: Dimensiones, Resonancia y la Diferencia Transmisión/Recepción

A diferencia de las pequeñas antenas de rodillo metálico o los diminutos látigos de VHF/UHF que caben en un portátil, las ondas de HF son físicamente enormes. Una onda de la banda de $40\text{m}$ mide, literalmente, **40 metros de cresta a cresta**. Por ello, la antena es el elemento más crítico e impresionante de una estación de Onda Corta.

#### El Dipolo Medio Onda ($\lambda/2$): El pilar de la transmisión

Para **transmitir** en HF de forma eficiente sin dañar el equipo por potencia reflejada (SWR/ROE), la antena debe estar rígidamente ajustada en frecuencia (**sintonizada/resonante**). 

La antena por excelencia en HF es el **Dipolo de Media Onda ($\lambda/2$)**, formado por un cable cortado por la mitad y alimentado en el centro por una línea coaxial:

$$
L_{\text{total}} (\text{metros}) \approx \frac{142.5}{f (\text{MHz})}
$$

```text
                     [ Cable Dipolo de Media Onda (λ/2) ]
      ◄─────────────── ~10 m ───────────────►   ◄─────────────── ~10 m ───────────────►
     ┌───────────────────────────────────────┐ ┌───────────────────────────────────────┐
  [Aislador]                               [Balun]                                 [Aislador]
                                             ││
                                             ││ Cable Coaxial
                                             ││
                                             ▼
                                     [ Transmisor / SDR ]
```

> **Ejemplo práctico en la Banda de 40 Metros ($7{,}100\text{ MHz}$):**
> * Cálculo de longitud total: $L \approx 142.5 / 7.1 \approx 20\text{ metros}$.
> * El dipolo se compone de **dos brazos independientes de aproximadamente $10\text{ metros}$ cada uno**.
> 
> **Resonancia Armónica Secundaría:**
> Un dipolo construido para la banda de $40\text{m}$ ($7\text{ MHz}$) presenta la propiedad de resonar de forma natural en sus **armónicos impares**. Por ello, un dipolo de $40\text{m}$ también funcionará muy bien en la banda de **$15\text{m}$ ($21\text{ MHz}$)** sin necesitar ajustes físicos adicionales.

#### Antenas para Recepción (SDR): La regla del "Hilo Largo"

Una de las grandes ventajas de trabajar únicamente como radioescucha (receptor SDR) es que **no necesitas una antena perfectamente sintonizada para escuchar**. Un receptor no sufre daños por desadaptación de impedancia porque no emite energía al aire.

Sin embargo, dado que las pérdidas en HF son elevadas y el ruido electromagnético ambiental es alto, la diminuta antena telescópica que viene por defecto con los SDR comerciales resulta insuficiente para las frecuencias más bajas.

* **El Hilo Largo (*Random Long Wire*):** Para captar HF con gran sensibilidad con tu SDR, basta con desplegar un simple hilo de cobre aislado de entre **$5\text{ m}$ y $30\text{ m}$ de longitud**, lo más alto e despejado posible (por la ventana, un balcón o el tejado).
* **¿Por qué funciona?** Cuanto más largo sea el cable exterior, mayor será la superficie física expuesta para capturar la débil variación del campo magnético de las ondas de decámetros, entregando una señal mucho más limpia e inteligible a la entrada del SDR.


### 4. Anatomía de los Modos SSB (Banda Lateral Única)

En los Módulos 0 y 1 estudiamos la **Modulación en Amplitud (AM)** usada en la banda aérea y la **Modulación en Frecuencia (FM)** usada en repetidores locales. Sin embargo, en la banda de HF el modo rey de las comunicaciones de voz es la **SSB** (*Single Sideband* o Banda Lateral Única).

¿Por qué se utiliza SSB en lugar de AM en Onda Corta? La respuesta se reduce a dos factores clave: **eficiencia energética** y **ahorro de ancho de banda**.

#### El desperdicio de la AM tradicional

Cuando una emisora transmite en AM clásica, genera tres componentes:
1. Una **portadora central** de gran potencia que no contiene ningún dato de voz (consume el $66\%$ de la energía total emitida).
2. Una **Banda Lateral Superior (USB)** que contiene una copia de la señal de voz.
3. Una **Banda Lateral Inferior (LSB)** que contiene otra copia exactamente idéntica y espejo de la voz.


```
AM CONVENCIONAL (Ancho de banda: ~6 kHz)
   Banda Lateral               Banda Lateral
     Inferior    Portadora       Superior
  ┌────────────┐     │        ┌────────────┐
  │            │     │        │            │
──┴────────────┴─────┴────────┴────────────┴──> Frecuencia

BANDA LATERAL ÚNICA - USB (Ancho de banda: ~2.7 kHz)
                              Banda Lateral
                                Superior
                             ┌────────────┐
                             │            │
─────────────────────────────┴────────────┴──> Frecuencia
 (Portadora y LSB eliminadas)

```

#### La revolución de la SSB: Todo el motor en una sola rueda

La tecnología SSB elimina mediante filtros de cristal la portadora central y una de las dos bandas laterales redundantes antes de amplificar la señal.

* **Ahorro de espectro:** Una transmisión en AM ocupa unos $6\text{ kHz}$ de ancho de banda. Una transmisión en SSB ocupa únicamente **$2{,}7\text{ kHz}$** (menos de la mitad). Esto permite acomodar más del doble de estaciones en la misma porción de banda.
* **Ganancia de potencia:** Al concentrar el $100\%$ de la energía del transmisor únicamente en la información de voz (en lugar de malgastar el $66\%$ en mantener una portadora muda), un equipo de SSB de $100\text{ W}$ logra el mismo impacto y alcance que una estación de AM de $400\text{ W}$.

#### La Convención de HF: ¿Cuándo sintonizar LSB y cuándo USB?

En los albores de la radio aficionada en SSB (década de 1950), la tecnología de los osciladores heterodinos obligó a adoptar una norma práctica que se mantiene intacta hasta el día de hoy:

$$
\text{Frecuencias } < 10\text{ MHz} \longrightarrow \text{Usar modo LSB (Lower Side Band)}
$$
$$
\text{Frecuencias } > 10\text{ MHz} \longrightarrow \text{Usar modo USB (Upper Side Band)}
$$

* **En la banda de $40\text{m}$ ($7{,}100\text{ MHz}$) e inferiores:** Sintonizaremos siempre en **LSB**.
* **En la banda de $20\text{m}$ ($14{,}200\text{ MHz}$) y superiores:** Sintonizaremos siempre en **USB**.

*(Nota: La única excepción internacional a esta norma es la banda de aviación en HF o emergencias marítimas, donde se utiliza siempre USB independientemente de la frecuencia).*

### 5. El Rey de la Larga Distancia: La Telegrafía CW (Código Morse)

Aunque la voz en SSB revolucionó la radio en el siglo XX, existe un modo de emisión indestructible que sigue reinando en el espectro de HF cuando las condiciones de propagación son nefastas: la **Telegrafía o CW** (*Continuous Wave*).

La Telegrafía es el modo digital/analógico más antiguo y resistente que existe. Consiste simplemente en encender y apagar la portadora de radio pura ($RF$) siguiendo el código Morse (puntos y rayas).


```text
Comparativa de Ancho de Banda ocupado por canal:

FM Comercial:  [=======================================/.../=====================================] ~150 kHz
FM Estrecha:   [========================] ~12.5 kHz
SSB (Voz HF):  [======] ~2.7 kHz
CW (Morse):    [=] ~0.5 kHz (500 Hz)
```

#### ¿Por qué el Morse llega más lejos?

1. **Ancho de banda ultra-estrecho:** Frente a los $2.700\text{ Hz}$ de la voz en SSB, una emisión en Morse en CW solo requiere entre **$100\text{ Hz}$ y $500\text{ Hz}$** de ancho de banda.
2. **Densidad espectral masiva:** Al concentrar toda la potencia de la emisora en una línea de frecuencia tan diminuta, la señal de CW penetra el ruido atmosférico más severo. Para el receptor SDR, captar un pitido de CW requiere una relación señal/ruido ($S/N$) mínima. Si se escucha un tenue silbido en el auricular, el contacto es posible.

#### El mito del recuento de puntos y rayas

Al aprender código Morse, tendemos a memorizar que la letra **`A`** es "un punto y una raya" ($\cdot -$). Sin embargo, a velocidades operativas reales (superiores a **20 Palabras Por Minuto / PPM**), el cerebro humano no tiene tiempo físico para contar mentalmente los impulsos.

Los operadores de telegrafía experimentados no ven "puntos y rayas"; **escuchan patrones musicales**. La letra **`A`** no se cuenta, se escucha como el ritmo di-DÁ (`di-DAH`). La letra **`Q`** se percibe como una melodía característica: DÁ-DÁ-di-DÁ (`DAH-DAH-di-DAH`).

#### Tabla del Código Morse Internacional (CW)

| Carácter | Código | Ritmo Auditivo | Carácter | Código | Ritmo Auditivo |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **A** | `.-` | di-DÁ | **N** | `-.` | DÁ-dit |
| **B** | `-...` | DÁ-di-di-dit | **O** | `---` | DÁ-DÁ-DÁ |
| **C** | `-.-.` | DÁ-di-DÁ-dit | **P** | `.--.` | di-DÁ-DÁ-dit |
| **D** | `-..` | DÁ-di-dit | **Q** | `--.-` | DÁ-DÁ-di-DÁ |
| **E** | `.` | dit | **R** | `.-.` | di-DÁ-dit |
| **F** | `..-.` | di-di-DÁ-dit | **S** | `...` | di-di-dit |
| **G** | `--.` | DÁ-DÁ-dit | **T** | `-` | DÁH |
| **H** | `....` | di-di-di-dit | **U** | `..-` | di-di-DÁ |
| **I** | `..` | di-dit | **V** | `...-` | di-di-di-DÁ |
| **J** | `.---` | di-DÁ-DÁ-DÁ | **W** | `.--` | di-DÁ-DÁ |
| **K** | `-.-` | DÁ-di-DÁ | **X** | `-..-` | DÁ-di-di-DÁ |
| **L** | `.-..` | di-DÁ-di-dit | **Y** | amplio | DÁ-di-DÁ-DÁ |
| **M** | `--` | DÁ-DÁ | **Z** | `--..` | DÁ-DÁ-di-dit |

### 6. Estructura de los Planes de Banda en HF

Para evitar que los transmisores de voz en SSB sepulten con sus $2.700\text{ Hz}$ de ancho de banda a las débiles señales de telegrafía, la IARU (Unión Internacional de Radioaficionados) ha parcelado rígidamente cada banda de HF. 

La regla de oro para cualquier banda de HF sigue siempre la misma estructura ascendente en frecuencia:

```text
FRECUENCIA INFERIOR                                                     FRECUENCIA SUPERIOR

┌───────────────────────────┬───────────────────────────┬──────────────────────────────────┐
│      SECTOR CW / MORSE    │     MODOS DIGITALES       │            FONÍA SSB             │
│     (Telegrafía Pura)     │   (FT8 / RTTY / PSK)      │         (LSB o USB según f)      │
└───────────────────────────┴───────────────────────────┴──────────────────────────────────┘
```

#### Ejemplos Múltiples de Planes de Banda (Región 1 - IARU)

A continuación se muestran tres planes de bandas clave para ilustrar cómo varían la escala de frecuencias, los anchos de banda y la organización en función del tamaño del segmento asignado:

##### 1. Banda de 40 Metros ($7{,}000\text{ MHz} - 7{,}200\text{ MHz}$) — *Banda Nocturna / Regional*
* **$7{,}000\text{ MHz} - 7{,}040\text{ MHz}$:** Exclusivo CW. ($7{,}030\text{ MHz}$ es el centro de actividad QRP/Baja potencia).
* **$7{,}040\text{ MHz} - 7{,}060\text{ MHz}$:** Modos digitales de banda estrecha (FT8 en $7{,}074\text{ MHz}$, RTTY, JS8Call).
* **$7{,}060\text{ MHz} - 7{,}200\text{ MHz}$:** Fonía LSB (*Banda Lateral Inferior*).
  * $7{,}090\text{ MHz}$: Centro de actividad SSB QRP.
  * $7{,}110\text{ MHz}$: Frecuencia de Emergencia de la IARU Región 1.

##### 2. Banda de 20 Metros ($14{,}000\text{ MHz} - 14{,}350\text{ MHz}$) — *Banda Todoterreno DX*
* **$14{,}000\text{ MHz} - 14{,}070\text{ MHz}$:** Exclusivo CW. ($14{,}060\text{ MHz}$ centro de actividad CW QRP).
* **$14{,}070\text{ MHz} - 14{,}099\text{ MHz}$:** Modos digitales de banda estrecha (FT8 en $14{,}074\text{ MHz}$, PSK31).
* **$14{,}099\text{ MHz} - 14{,}101\text{ MHz}$:** Segmento exclusivo de Balizas Internacionales IBU (red de prueba de propagación mundial).
* **$14{,}101\text{ MHz} - 14{,}350\text{ MHz}$:** Fonía USB (*Banda Lateral Superior*).
  * $14{,}230\text{ MHz}$: Centro de actividad de Televisión de Barrido Lento (SSTV).
  * $14{,}300\text{ MHz}$: Centro de actividad de Redes de Emergencia Globales.

##### 3. Banda de 10 Metros ($28{,}000\text{ MHz} - 29{,}700\text{ MHz}$) — *Banda Diurna Ancha*
* **$28{,}000\text{ MHz} - 28{,}070\text{ MHz}$:** Exclusivo CW. ($28{,}060\text{ MHz}$ centro QRP CW).
* **$28{,}070\text{ MHz} - 28{,}190\text{ MHz}$:** Modos digitales (FT8 en $28{,}074\text{ MHz}$).
* **$28{,}190\text{ MHz} - 28{,}300\text{ MHz}$:** Balizas internacionales en servicio continuo.
* **$28{,}300\text{ MHz} - 29{,}100\text{ MHz}$:** Fonía USB y datos.
* **$29{,}100\text{ MHz} - 29{,}700\text{ MHz}$:** Canalizaciones FM símplex y repetidores de 10 metros, además de enlaces de satélite amateur.

En el [Plan de Bandas de la IARU para la Región 1](https://www.ure.es/wp-content/uploads/wpforo/default_attachments/media/kunena/attachments/1505/plandebandas.pdf) (Europa, África, Oriente Medio, Norte de Asia) se puede obtener un detalle mayor de estas bandas, así como las frecuencias concretas en el resto de bandas de radioaficionado.

#### El Código RST y la Jerga Operativa en HF

Cuando escuches QSO (conversaciones) en HF, los radioaficionados emplean un código numérico para evaluarse mutuamente la calidad de la señal denominado **Reporte RST**:

* **R (Readability / Inteligibilidad):** Escala de 1 a 5 (donde 5 indica voz perfectamente clara).
* **S (Signal Strength / Fuerza de Señal):** Escala de 1 a 9 (medida en el S-Meter del receptor, indicando el nivel de señal sobre el ruido).
* **T (Tone / Tono de Morse):** Escala de 1 a 9 (empleado únicamente en Telegrafía CW para certificar la pureza de la nota).

> *Ejemplo audible:* *"Hola compañero, te recibo 59 en Madrid"* significa Inteligibilidad 5 (máxima) y Fuerza de Señal 9 (excelente). En Morse se transmitirá como `RST 599`.

#### Los códigos Q fundamentales que escucharás en HF:
* **QRM:** Interferencia causada por otras estaciones emisoras vecinas.
* **QRN:** Ruido atmosférico o de estática (rayos, tormentas, ruido de motores).
* **QSO:** Contacto o conversación establecida entre dos o más radioaficionados.
* **QSL:** Tarjeta de confirmación física o digital que atestigua que el contacto tuvo lugar.
* **QRZ?:** "¿Quién me llama?" (o consulta de indicativos).


### 6. Práctica con SDR++: Caza de Emisiones y Cacería Internacional

Ha llegado el momento de encender tu receptor SDR, conectar una antena extendida (idealmente un cable largo o dipolo desplegado) y explorar la jungla electromagnética de la Onda Corta.


```text
[ Antena Hilo Largo / Dipolo ] ──► [ SDR++ ] ──► [ Inspección Visual de Firmas en Cascada ]
                                                           │
                      ┌────────────────────────────────────┴────────────────────────────────────┐
                      ▼                                                                         ▼
            [ Firma Asimétrica: SSB ]                                               [ Trazos Estrechos: CW ]
             (Ajuste Fino paso 10 Hz)                                                (Decodificación Morse)
                      │
                      ▼
            [ Captura de Indicativo / Callsign ]
                      │
                      ▼
            [ Verificación Global en QRZ.com ]
```

#### Paso 1: Reconocimiento Visual de SSB en el Waterfall (La firma triangular)

Sintoniza tu SDR++ en la porción de fonía de la banda de 40m ($7{,}100\text{ MHz}$) o 20m ($14{,}200\text{ MHz}$).

1. **Modo LSB vs USB:** 
   * A diferencia de la FM (que produce un trazo central continuo) o la AM (que muestra una portadora con dos bandas simétricas a los lados), **la voz en SSB no tiene portadora central**.
   * En la cascada (*waterfall*), la voz en SSB se aprecia como una **mancha rugosa y asimétrica en forma de cuña o triángulo**.

```text
        CASCADA EN MODO USB (> 10 MHz)                    CASCADA EN MODO LSB (< 10 MHz)
 Frecuencia Grave ───► Frecuencia Aguda           Frecuencia Aguda ◄─── Frecuencia Grave

  Lado Vertical                                                               Lado Vertical
  a la IZQUIERDA                                                             a la DERECHA
       │                                                                           │
       ▼                                                                           ▼
       ▒                                                                           ▒
       █ ▒                                                                       ▒ █
       ██ ▒                                                                     ▒ ██
       ████ ▒                                                                 ▒ ████
       ██████ ▒                                                              ▒ ██████
       │                                                                           │
───────┴──────────────────────────                    ─────────────────────────────┴──────
 Frecuencia Seleccionada (Portadora)                   Frecuencia Seleccionada (Portadora)
```

* **Firma en USB:** La máxima concentración de potencia vocal se encuentra justo en el límite izquierdo vertical (frecuencias graves), extendiéndose hacia la derecha a medida que la energía de los agudos cae.
* **Firma en LSB:** La máxima concentración de potencia vocal se encuentra en el límite derecho vertical (frecuencias graves), extendiéndose hacia la izquierda a medida que los agudos decaen.

#### Paso 2: El Arte del Ajuste Fino (Eliminando el "Efecto Pato Donald")

Una de las dificultades iniciales al sintonizar SSB en SDR++ es que al no haber portadora fija, si el demodulador no se sitúa exactamente en el Hertzio correcto donde se generó la emisión, la voz sonará completamente ininteligible.

* **El síntoma "Pato Donald" / Agudo:** Si colocas el cursor desplazado hacia las frecuencias agudas, la voz humana sonará con un tono chillón, rápido e incomprensible (parecido al personaje de dibujos animados).
* **El síntoma "Gruñido Cavernoso" / Grave:** Si te pasas hacia el lado contrario, las frecuencias bajas se amplificarán en exceso y la voz sonará como un gruñido grave e impreciso.
* **Técnica de ajuste:**
  1. En SDR++, selecciona el modo correcto (**LSB** para 40m, **USB** para 20m).
  2. Haz un ajuste inicial sobre la firma visual del triángulo en la cascada.
  3. Cambia el salto de sintonización (*Step*) de tu ratón o rueda a **$10\text{ Hz}$** o **$50\text{ Hz}$**.
  4. Desplaza suavemente la barra de sintonía hasta que la voz adquiera su timbre natural y humano. ¡Un desfase de apenas $30\text{ Hz}$ marca la diferencia entre entender la conversación o escuchar un chirrido!

#### Paso 3: Cacería Internacional de Indicativos y Consulta en QRZ.com

A diferencia del VHF local donde la inmensa mayoría de las estaciones captadas comenzaban por el prefijo `EA` (España), en la Onda Corta vas a escuchar un mosaico global de prefijos telefónicos e indicativos.

#### Tabla de Prefijos DX Frecuentes en HF

| Prefijo Internacional | País / Origen | Prefijo Internacional | País / Origen |
| :---: | :---: | :---: | :---: |
| **EA / EB / EC** | España | **I / IK / IZ** | Italia |
| **F** | Francia | **PT / PY** | Brasil |
| **G / M** | Reino Unido | **LU** | Argentina |
| **DL / DK** | Alemania | **JA / JH** | Japón |
| **W / K / N** | Estados Unidos | **VK** | Australia |

#### Práctica de Verificación en QRZ.com:
1. Sintoniza un QSO en la banda de 20 metros ($14{,}200\text{ MHz}$) en modo USB.
2. Abre tu cuaderno de bitácora y mantén el oído atento a la despedida o inicio del contacto, identificando las letras mediante el alfabeto ICAO (*"Delta Lima Tres Bravo Charlie..."* $\rightarrow$ `DL3BC`).
3. Abre tu navegador web e ingresa en el portal global de radioaficionados: **[www.qrz.com](https://www.qrz.com)**.
4. Introduce el indicativo anotado en el buscador superior de QRZ.com.


```

┌────────────────────────────────────────────────────────────────────────┐
│  QRZ.com CALLSIGN SEARCH: [ DL3BC         ] [ SEARCH ]                 │
├────────────────────────────────────────────────────────────────────────┤
│  DL3BC - Hans Schmidt                                                  │
│  City: Munich | Country: GERMANY                                       │
│  Equipment: 100W Transceiver - 3 Element Yagi Antenna                  │
└────────────────────────────────────────────────────────────────────────┘

```

¡Descubrirás al instante el nombre del operador, su fotografía, la ciudad exacta desde la que te llega la señal y los detalles de las antenas que está utilizando en ese mismo momento!

### 7. Práctica Avanzada: Caza y Decodificación de Telegrafía (CW)

Una vez dominada la sintonización de fonía en SSB, el siguiente reto del radioescucha en HF es interceptar y decodificar señales en Código Morse. La telegrafía sigue siendo muy activa en los primeros kilohertzios de cada banda (por ejemplo, entre $7{,}000\text{ MHz}$ y $7{,}040\text{ MHz}$ en la banda de 40 metros).

```text
  ┌───────────┐  Audio digital   ┌─────────────────────┐   Audio Pipe   ┌──────────────────────────┐
  │   SDR++   │ ───────────────► │ Cable Audio Virtual │ ─────────────► │ Software Decodificador   │
  │ (Modo CW) │  (Pinchazo VBC)  │ (VB-Cable / Pipe)   │  (Entrada Mic) │ (FLDIGI / CwGet / MRP)   │
  └───────────┘                  └─────────────────────┘                └──────────────────────────┘
```

---

#### Paso 1: Localización visual en el Waterfall

1. **Sintoniza el segmento inferior de la banda:** En la banda de 40m, sitúate entre $7{,}000\text{ MHz}$ y $7{,}035\text{ MHz}$.
2. **Identifica el trazo:** En el espectrograma/cascada (*waterfall*), las señales de CW no son manchas anchas como la voz en SSB, sino **trazos verticales de luz extremadamente estrechos ($100-500\text{ Hz}$)** que se encienden y apagan intermitentemente dibujando patrones de puntos y rayas.
3. **Selecciona el modo adecuado:** En SDR++, selecciona la demodulación **CW** (o **USB** con un filtro estrecho de $500\text{ Hz}$). Al sintonizar sobre la señal, escucharás un silbido o tono claro de radio (habitualmente ajustado entre $600\text{ Hz}$ y $800\text{ Hz}$).

---

#### Paso 2: Lectura auditiva manual (Señales lentas y Balizas)

Las señales con velocidades inferiores a **12-15 Palabras Por Minuto (PPM / WPM)** o las balizas automáticas de propagación se pueden decodificar a mano con un poco de práctica:

* **Busca las letras simples primero:**
  * **`E`** (un punto corto: `dit`).
  * **`T`** (una raya larga: `DAH`).
  * **`A`** (corto-largo: `di-DAH`).
  * **`N`** (largo-corto: `DAH-dit`).
* **Sintoniza balizas automatizadas:** En el segmento de balizas ($14{,}100\text{ MHz}$ en 20m o $28{,}200\text{ MHz}$ en 10m) encontrarás emisoras automáticas que transmiten de forma pausada y repetitiva su indicativo seguido de tonos continuos para comprobar la propagación.

---

#### Paso 3: Decodificación automática de alta velocidad (FLDIGI / CwGet)

En transmisiones rápidas (superiores a **20-30 WPM**) o en concursos internacionales, el cerebro no entrenado no puede seguir el ritmo. Para decodificar el texto automáticamente en pantalla con tu ordenador, utilizaremos un software externo enrutado con el audio de SDR++.

##### ¿Cómo funciona la estimación de velocidad (WPM)?
Los programas decodificadores de telegrafía analizan en tiempo real la **envolvente del audio** (*Audio Envelope*). Miden la duración en milisegundos del elemento más corto registrado (el punto o *dit*) y aplican la regla estándar internacional:

$$
\text{Duración del Punto } (t_{\text{dit}}) = \frac{1.200}{\text{Velocidad en WPM (PPM)}} \text{ ms}
$$

El software ajusta de forma automática su algoritmo de seguimiento (*Auto-Tracking*) calculando la velocidad del emisor constante o dinámicamente.

##### Configuración paso a paso del flujo de audio:

1. **Instala un Cable de Audio Virtual:**
   * **Windows:** Instala *VB-Audio Virtual Cable* (VB-Cable).
   * **macOS:** Utiliza *BlackHole* o *Loopback*.
   * **Linux:** Configura un módulo nulo en *PipeWire* o *PulseAudio*.
2. **Configura SDR++:**
   * En el panel **Audio** de SDR++, cambia la salida de audio (*Audio Output*) de tus altavoces habituales al dispositivo virtual (ej. `CABLE Input`).
3. **Instala y configura el software decodificador:**
   * Abre un programa multimodo como **FLDIGI** (gratuito y multiplataforma) o **CwGet**.
   * En la configuración de audio del decodificador, selecciona como dispositivo de entrada (*Audio Input*) el extremo del cable virtual (ej. `CABLE Output`).
   * Selecciona el modo **CW** en el software.
4. **Sintonización fina en pantalla:**
   * Observa el espectrograma de audio dentro de FLDIGI.
   * Haz clic sobre la línea del tono de Morse para centrar el filtro en la frecuencia exacta (habitualmente $700\text{ Hz}$).
   * Verás cómo el texto claro (indicativos, nombres, ubicaciones) comienza a imprimirse en la ventana de texto a medida que la señal es procesada.

---

### Cuaderno de Bitácora de Escucha en Onda Corta (HF)

Utiliza esta plantilla para registrar tus primeros "cazas" intercontinentales:

| Frecuencia ($\text{MHz}$) | Modo (LSB / USB / CW) | Indicativo Captado | País / Distrito (QRZ.com) | Reporte RST Estimado | Notas de Propagación / Calidad |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $7{,}115\text{ MHz}$ | LSB | `EA4BCD` | España (Distrito 4) | $59$ | Conversación clara en 40m. |
| $14{,}205\text{ MHz}$ | USB | `W1AW` | EE.UU. (Connecticut) | $57$ | Señal transatlántica nítida en 20m. |
| $7{,}025\text{ MHz}$ | CW | `IK2AAA` | Italia | $599$ | Tono Morse muy estable. |
|  |  |  |  |  |  |
|  |  |  |  |  |  |

---

### Resumen del Capítulo 4

* Las señales de **HF ($3-30\text{ MHz}$)** refractan y rebotan en la **ionosfera**, superando la curvatura terrestre y alcanzando distancias continentales.
* La **Zona de Sombra (*Skip Distance*)** explica por qué a veces no escuchamos estaciones a $300\text{ km}$ pero sí a $1.500\text{ km}$.
* La **Capa D** absorbe las frecuencias bajas durante el día; al caer la noche desaparece y "abre" las bandas nocturnas ($80\text{m}$ y $40\text{m}$).
* En **transmisión** en HF se usan antenas sintonizadas como el **dipolo de media onda** (ej. dos brazos de $10\text{ m}$ para $40\text{ m}$), mientras que para **recepción con SDR** basta un **hilo largo ($5-30\text{ m}$)** para captar mayor señal.
- Un dipolo de $40\text{m}$ ($7\text{ MHz}$) resuena armónicamente en impares, adaptándose bien a la banda de $15\text{m}$ ($21\text{ MHz}$).
* La **SSB (Banda Lateral Única)** ahorra más del $50\%$ de ancho de banda ($2{,}7\text{ kHz}$) y concentra el $100\%$ de la potencia en la voz, eliminando la portadora inútil de la AM.
* Se emplea la norma universal de sintonización: **LSB por debajo de $10\text{ MHz}$** y **USB por encima de $10\text{ MHz}$**.
* La **Telegrafía CW (Código Morse)** exige un ancho de banda mínimo ($100-500\text{ Hz}$), logrando las mayores distancias globales (DX) en condiciones extremas de ruido.
* En SDR++, la voz en SSB se distingue por su **firma visual triangular en la cascada** y requiere un ajuste fino a pasos de $10\text{ Hz}$ para evitar el "efecto Pato Donald".

