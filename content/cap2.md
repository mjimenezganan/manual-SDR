# MÓDULO 1: SEÑALES LOCALES Y VISIÓN DIRECTA (VHF / UHF)

## Capítulo 2: Hablando con el cielo: La Banda Aérea de aviación

### 1. Mensajes sobre las nubes

Abre la ventana y mira al cielo. Es muy probable que veas la estela blanca de un avión comercial cruzando a más de 10.000 metros de altura, o un helicóptero sobrevolando tu ciudad. Dentro de esa cabina, los pilotos están en constante comunicación con las torres de control en tierra, ajustando su rumbo, solicitando permiso para cambiar de altitud o recibiendo el informe del tiempo.

Estas conversaciones no viajan por internet ni por redes móviles 4G/5G. Viajan por ondas de radio en la denominada **Banda Aérea VHF**, un rango reservado exclusivamente para la aviación en todo el mundo: desde $118,000 \text{ MHz}$ **hasta** $136,975 \text{ MHz}$.

Con tu receptor SDR y el ajuste de antena adecuado, vas a convertir tu habitación en tu propia torre de control virtual.

### 2. El arte de ajustar la antena: La física en tus manos

En el Capítulo 0 aprendimos la fórmula matemática fundamental que une la velocidad de la luz ($c \approx 300.000 \text{ km/s}$), la frecuencia ($f$) y la longitud de onda ($\lambda$):

$$
\lambda = \frac{c}{f}
$$

Para calcular la longitud de onda aproximada en metros usando la frecuencia en Megahercios ($\text{MHz}$), usamos la regla rápida:

$$
\text{Longitud de onda (m)} \approx \frac{300}{f \text{ (MHz)}}
$$

Hagamos las matemáticas para la Banda Aérea tomando una frecuencia intermedia típica de aviación, como $120 \text{ MHz}$:

$$
\lambda = \frac{300}{120} = 2,5 \text{ metros}
$$

#### ¿Cómo ajustamos nuestro kit de dipolo telescópico?

Un dipolo está formado por dos varillas. Para que la antena sea eficiente y entre en **resonancia** con la señal, la longitud total del dipolo debe ser aproximadamente la **mitad de la onda** ($\lambda / 2$).

1. **Longitud total del dipolo (**$\lambda / 2$**):** $2,5 \text{ m} / 2 = 1,25 \text{ metros}$.

2. **Longitud de CADA varilla (**$\lambda / 4$**):** $1,25 \text{ m} / 2 = 0,625 \text{ metros} = \mathbf{62,5 \text{ cm}}$.

#### Comparación de antenas: PMR446 vs. Banda Aérea

* **PMR446 (**$446 \text{ MHz}$ **- UHF):** Onda corta ($\lambda \approx 67 \text{ cm}$). Cada varilla telescópica se extiende solo $16,8 \text{ cm}$.

* **Banda Aérea (**$120 \text{ MHz}$ **- VHF):** Onda más larga ($\lambda = 2,5 \text{ metros}$). Cada varilla telescópica debe extenderse a $62,5 \text{ cm}$.

> **¡Regla del Cazador!** Si no extiendes la antena, la señal de los aviones lejanos llegará débil o ahogada. Para escuchar la aviación: **¡despliega las varillas hasta llegar a los** $60 - 62 \text{ cm}$ **por lado!**

### 3. El gran misterio: ¿Por qué la aviación sigue usando AM en lugar de FM?

Cuando escuchas la radio FM comercial en $98,0 \text{ MHz}$, la calidad de audio es excelente. Sin embargo, en la Banda Aérea ($118 - 137 \text{ MHz}$), la aviación internacional utiliza **Modulación en Amplitud (AM)**, una tecnología que tiene más de cien años de historia.

¿Por qué los aviones modernos no usan la modulación FM? La respuesta se reduce a una palabra crucial para la seguridad aérea: **el Efecto Captura**.

#### El "Efecto Captura" en FM

En modulación FM, cuando dos emisoras transmiten al mismo tiempo en la misma frecuencia, el receptor del radio enmudece por completo a la señal más débil y solo reproduce la señal más fuerte.

* *El peligro:* Si un piloto con una emergencia intenta hablar al mismo tiempo que otro avión más cercano a la torre, la transmisión del piloto en peligro quedaría **totalmente silenciada e invisible**.

#### El comportamiento de la Amplitud Modulada (AM)

En modulación AM **no existe el efecto captura**. Si dos aviones transmiten simultáneamente en la misma frecuencia:

* Las dos voces se escuchan superpuestas.

* Se produce un pitido agudo de interferencia (llamado *heterodino*).

* El controlador aéreo se da cuenta **inmediatamente** de que dos aviones han pisado sus transmisiones y les pide repetir el mensaje: *"Estación que llamó, repita, transmisión pisada"*.

Por esta simple razón de seguridad vital, la aviación mundial sigue utilizando la modulación AM.

### 4. La jerga del aire: El Alfabeto Fonético ICAO

A $900 \text{ km/h}$ y con ruido de motor de fondo, las letras "B", "C", "D" o "V" pueden sonar exactamente igual por radio. Para evitar catástrofes por malentendidos, la Organización de Aviación Civil Internacional (ICAO/OACI) creó el **Alfabeto Fonético Internacional**.

Cada letra tiene asignada una palabra universal reconocible sin importar el idioma nativo del piloto:

| Letra | Palabra | Pronunciación | Letra | Palabra | Pronunciación | 
 | ----- | ----- | ----- | ----- | ----- | ----- | 
| **A** | Alfa | *AL-fa* | **N** | November | *no-VEM-ber* | 
| **B** | Bravo | *BRA-vo* | **O** | Oscar | *OS-car* | 
| **C** | Charlie | *CHAR-li* | **P** | Papa | *pa-PA* | 
| **D** | Delta | *DEL-ta* | **Q** | Quebec | *ke-BEC* | 
| **E** | Echo | *E-co* | **R** | Romeo | *RO-me-o* | 
| **F** | Foxtrot | *FOX-trot* | **S** | Sierra | *si-E-ra* | 
| **G** | Golf | *GOLF* | **T** | Tango | *TAN-go* | 
| **H** | Hotel | *ho-TEL* | **U** | Uniform | *YU-ni-form* | 
| **I** | India | *IN-di-a* | **V** | Victor | *VIC-tor* | 
| **J** | Juliett | *JU-li-et* | **W** | Whiskey | *WIS-ki* | 
| **K** | Kilo | *KI-lo* | **X** | X-ray | *EX-rey* | 
| **L** | Lima | *LI-ma* | **Y** | Yankee | *YAN-ki* | 
| **M** | Mike | *MAIK* | **Z** | Zulu | *ZU-lu* | 

#### Identificativos de vuelo (Callsigns)

Los aviones no se identifican con el nombre del piloto, sino con su **indicativo de compañía o matrícula**:

* **Iberia 3190** $\rightarrow$ Se pronuncia *"Iberia Tres Uno Nueve Cero"*.

* **EC-LUB** (Matrícula española) $\rightarrow$ Se pronuncia *"ECHO CHARLIE LIMA UNIFORM BRAVO"*.

### 5. Canales principales que vas a cazar y flujo de frecuencias

Si vives cerca de un aeropuerto (o bajo una ruta de paso aéreo), sintonizarás diferentes servicios según la fase en la que se encuentre cada vuelo. A medida que una aeronave se aproxima a su destino, la comunicación no ocurre en una sola frecuencia, sino que pasa de forma secuencial de un controlador a otro en un proceso llamado **handover** (transferencia de control).

1. **ATIS (Servicio de Información de Terminal):**
   * **Fase:** Previa a la salida o antes de iniciar el descenso.
   * **Función:** Emisión automática continua en bucle con la información meteorológica actualizada ($METAR$), pista en uso, visibilidad y ajuste altimétrico ($QNH$).

2. **ACC / Ruta (Centro de Control de Área):**
   * **Fase:** Vuelo de crucero y descenso inicial a gran altitud.
   * **Función:** Gestiona el tráfico aéreo en ruta dividiendo el espacio en amplios sectores geográficos (Norte, Sur, Este, Oeste/Suroeste).

3. **APP (Aproximación / TMA - Área de Control Terminal):**
   * **Fase:** Descenso intermedio, ordenación del tráfico e intercepción del curso de aterrizaje.
   * **Función:** Organiza las secuencias de llegada de los aviones desde las distintas rutas de entrada hacia la pista. En aeropuertos grandes se subdivide en varios sectores (*Feeder* o llegada, y *Director* o aproximación final).

4. **TWR (Torre de Control):**
   * **Fase:** Aterrizaje y despegue en las inmediaciones de la pista ($CTR$).
   * **Función:** Gestiona las autorizaciones finales para tomar tierra o despegar, así como la separación entre aeronaves en la pista activa.

5. **GND (Ground / Rodadura o Tierra):**
   * **Fase:** Movimiento en la plataforma y calles de rodaje.
   * **Función:** Guía al avión desde que abandona la pista de aterrizaje hasta su estacionamiento en la terminal (*finger* o *stand*), y viceversa para las salidas.

### 6. Conceptos Clave para el Escucha

* **Distancia de recepción desde Torrijos / Toledo:** En línea recta (*as the crow flies*), la comarca de Torrijos y la provincia de Toledo se encuentran a unos $75\text{ km}$ a $80\text{ km}$ del Aeropuerto Adolfo Suárez Madrid-Barajas (LEMD). Debido a la altitud de las aeronaves y a los repetidores de ENAIRE, la señal VHF se recibe de forma óptima.

* **¿Qué significa FL240?:** **FL** son las siglas de *Flight Level* (Nivel de Vuelo). Se calcula dividiendo la altitud en pies entre 100:

$$
\text{FL240} = 24.000\text{ ft (pies)} \approx 7.315\text{ metros } (7,3\text{ km de altura})
$$

* **¿Cómo calcular a qué distancia puedes escuchar un avión? (Horizonte de Radio VHF):**
Las señales en VHF viajan en línea recta y dependen directamente de la altura. Una aproximación matemática sencilla para calcular la distancia máxima en kilómetros ($D$) de recepción directa entre un avión a una altitud $h$ (en metros) y tu antena es:

$$
D \approx 3{,}57 \times \sqrt{h}
$$

*Un avión volando a $10.000\text{ m}$ de altitud ($FL330$) produce un horizonte radioeléctrico de casi $350\text{ km}$ a la redonda.*

#### 7. Caso Práctico: Navegando el cielo sobre Torrijos y Madrid (LEMD)

Analicemos cómo pasa un avión procedente del Suroeste (Sevilla, Lisboa o Suramérica) por los sectores de control a medida que se aproxima a Madrid-Barajas (LEMD) o cruza nuestro cielo.

Si escuchas desde **Torrijos o la provincia de Toledo**, ¡estás exactamente bajo el sector de ruta **Toledo Inferior (TLL / TLX en el mapa)** y las rutas de salida/llegada de Madrid!

```
 [ Ruta: TLL (Toledo Lower) ] ──> [ Aproximación: Inicial/Final ] ──> [ Salidas (DEP E/W) ] ──> [ Torre Barajas ] ──> [ Rodadura / Tierra ]
       (133.200 MHz)                 (127.100 / 127.500 MHz)          (131.175 / 124.225 MHz)     (118.150 / 120.150 MHz)      (121.700 MHz)

```

##### Mapa de Sectores de Control en Ruta (ACC)

![Sectores de control de ruta en España](content/cap2/LECX.PNG)

> **¿Cómo interpretar este mapa?:** 
> Cada polígono de color representa un sector espacial de control en ruta en el que los controladores aéreos organizan los vuelos a gran altitud.
>
> * **Zona Centro (Madrid / LECM):** Observa la zona amarilla etiquetada como **TLX** (Toledo) justo encima de Toledo y Madrid. Ahí es donde opera el sector **TLL (Toledo Lower - 133.200 MHz)**.
> * A sus lados verás sectores como **ZMX** (Salamanca/Zamora), **DGX** (Domingo), **CJX** (Castejón), etc.
> * **Zona Sur (Sevilla / LECS):** Sectores como **SEX**, **MA4**, **BA1**, **YES** y **SUR**.
> * **Zona Este/Norte:** Sectores de Barcelona Control (**P2R**, **GOX**, **CCX**, **VNI**) y del Norte (**ASX**, **SAX**).

##### 1. Fase de Ruta en Transición: Sector Toledo Lower / TLL (`LECM_TLL`)

* **Frecuencia estrella local:** **`133.200 MHz`** *(¡Pruébala imprescindible desde Torrijos!)*
* **Ubicación en mapa:** Sector **TLX** (Toledo).
* **Distancia del avión a Barajas:** $100\text{ km}$ a $250\text{ km}$.
* **¿Qué escuchas aquí?:** Estás en **TLL (Toledo Lower / Toledo Inferior)** de Madrid Control (LECM). Desde esta frecuencia verás cómo el controlador actúa como un "director de orquesta", dando instrucciones a los aviones para subir o bajar de nivel de vuelo, ajustar velocidad y separarlos antes de entrar a la zona de aproximación.
* **Fraseología habitual:** *"Iberia 6251, descienda para nivel de vuelo FL150 y contacte con Madrid Aproximación en 127.100"*.

##### 2. Fase de Ingreso y Aproximación a Barajas (LEMD Aproximación)

* **Frecuencias clave:**
* **Aproximación Inicial (`AIX / AEX`):** **`127.100 MHz`**
* **Aproximación Final (`AFX / AWX`):** **`127.500 MHz`** *(Nota técnica: también figura en cartas como 127.505 MHz)*


* **Distancia del avión a Barajas:** $30\text{ km}$ a $120\text{ km}$.
* **¿Cómo funciona el control de Aproximación aquí?:**
* **Pistas Paralelas Dependientes:** Funcionan en secuencia. **`127.100 MHz`** toma el avión en el punto de entrada (IAF) y lo encauza; luego lo pasa a **`127.500 MHz`** para la fase final del descenso en "cremallera".
* **Pistas Paralelas Independientes:** Cada frecuencia gestiona una pista distinta. **`127.100 MHz`** (`AEX`) se encarga de las pistas del Este ($32R$ / $18L$) y **`127.500 MHz`** (`AWX`) se encarga de las pistas del Oeste ($32L$ / $18R$).



##### 3. Fase de Salida de Barajas (Despegues / Departures - DEP)

Si los aviones despegan de Madrid y van hacia el Sur u Oeste (pasando cerca de nuestra zona de cobertura), cambiarán a los sectores de salida:

* **DEP E (Salidas hacia el Este):** **`131.175 MHz`**
* **DEP W (Salidas hacia el Oeste / Suroeste):** **`124.225 MHz`** *(Nota técnica: también figura como 124.230 MHz)*
* **Fraseología habitual:** *"Air Europa 042, tras despegar, ascienda a FL180, directo a Toledo, contacte Salidas en 124.225"*.

##### 4. Fase de Aterrizaje (Barajas Torre - TWR)

* **Frecuencias habituales:** **`118.150 MHz`** (Pistas Oeste) / **`120.150 MHz`** (Pistas Este).
* **Distancia del avión a Barajas:** $0\text{ km}$ a $15\text{ km}$.
* **Estimación de escucha desde Torrijos / Toledo:** A $75-80\text{ km}$ en línea recta, captarás perfectamente la voz del **avión** mientras mantenga altitud antes de tocar tierra. La voz del controlador de la Torre en tierra llegará más débil o silenciada debido a la distancia y obstáculos del terreno.

##### 5. Fase de Rodadura y Tierra (Barajas Tierra - GND)

* **Frecuencias habituales:** **`121.700 MHz`** / **`121.850 MHz`**.
* **Estimación de escucha desde Torrijos:** Difícil o imposible sin una antena muy elevada o receptor remoto, ya que tanto la emisora del aeropuerto como los aviones están a nivel de suelo a $80\text{ km}$ de distancia.

### 8. Actividad Práctica : Sintonizar la Torre y decodificar el Alfabeto





### 9. Actividad Práctica: El Reto del Rastreador Aéreo 🕵️‍♂️✈️

> **🎯 Tarea Principal:**
> Tu misión consiste en **sintonizar un avión que pase justo por encima de tu zona** (usando la frecuencia de ruta local) e ir **siguiendo la secuencia entera de frecuencias** por las que el controlador lo va transfiriendo, desde que entra en nuestro sector hasta que toca tierra en el aeropuerto (caso ideal).

#### Pasos para completar el reto:

1. **Localiza a tu "presa":** Abre *Flightradar24* o sal a mirar al cielo para identificar un vuelo que sobrevuele la zona de Toledo / Torrijos en dirección a Madrid-Barajas (LEMD).
2. **Sintoniza la ruta sobre tu cabeza:** Empieza escuchando en **`133.200 MHz`** (Sector Toledo Lower - TLL).
3. **Escucha la transferencia (*Handover*):** Mantente atento a cuando el controlador diga a tu avión: *"Contacte con Madrid Aproximación en..."*.
4. **Caza la siguiente frecuencia:** Cambia rápidamente la frecuencia en tu SDR++ para engancharte a la nueva llamada en **`127.100 MHz`** o **`127.500 MHz`** (Aproximación / Final), luego a **Torre (`118.150 MHz` / `120.150 MHz`)**, y comprueba hasta qué punto de la secuencia logras mantener la señal.

#### Configuración en SDR++:

1. **Modo / Demodulador:** Selecciona **AM** (*Amplitude Modulation*).

2. **Ancho de banda (*Bandwidth*):** Configura el filtro en $8,33 \text{ kHz}$ o $25 \text{ kHz}$ (la separación estándar entre canales de aviación).

3. **Ganancia del SDR:** Sube la ganancia RF en el panel lateral hasta que el suelo de ruido sea visible sin saturar la pantalla.

4. **Antena:** Estira cada brazo del dipolo a unos $62 \text{ cm}$ y colócalo cerca de una ventana.

```
[ Ajustar Varillas a 62 cm ] ──► [ SDR++ Modo AM ] ──► [ Ancho de banda 8.33 kHz ] ──► [ Buscar picos entre 118-137 MHz ]

```

#### Tu Cuaderno de Bitácora Aérea (Registro de la Secuencia)

Usa una tabla como esta para registrar el viaje completo de una aeronave paso a paso:

| Paso | Frecuencia ($\text{MHz}$) | Servicio / Sector | Indicativo Captado (*Callsign*) | Instrucción / Mensaje del Controlador |
| --- | --- | --- | --- | --- |
| **1** | **$133,200\text{ MHz}$** | *Ruta (TLL - Toledo Lower)* | *IBE3201 (Iberia 3201)* | *"Descendiendo a FL150. Contacte Aproximación en 127.100"* |
| **2** | **$127,100\text{ MHz}$** | *Aproximación Inicial (AIX)* | *IBE3201* | *"Directo a punto de intercepción. Contacte Final en 127.500"* |
| **3** | **$127,500\text{ MHz}$** | *Aproximación Final (AFX)* | *IBE3201* | *"Reduzca a 160 nudos, autorizado ILS pista 32L. Contacte Torre en 118.150"* |
| **4** | **$118,150\text{ MHz}$** | *Torre Barajas (TWR)* | *IBE3201* | *"Viento 240/08 nudos, pista 32L, autorizado a aterrizar"* |
| **5** | **$121,700\text{ MHz}$** | *Rodadura / Tierra (GND)* | *(Llegadas en tierra)* | *(Opcional: comprobar si llega cobertura desde tu ubicación)* |
||||
||||
||||

### Resumen del Capítulo 2

* La Banda Aérea VHF abarca desde $118,000 \text{ MHz}$ **hasta** $136,975 \text{ MHz}$.

* La longitud de onda a $120 \text{ MHz}$ es de $2,5 \text{ metros}$, por lo que cada varilla telescópica del dipolo debe medir $\approx 62,5 \text{ cm}$.

* Se utiliza **Modulación AM** para evitar el **Efecto Captura** de FM y garantizar que ninguna llamada de emergencia quede silenciada.

* Los pilotos utilizan el **Alfabeto Fonético ICAO** (Alfa, Bravo, Charlie...) para deletrear matrículas e identificativos con total claridad.