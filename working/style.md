# Guía de estilo narrativo

Extraída de `web/content/cap0.md` a `web/content/cap4.md`. Sirve para redactar nuevos capítulos con el mismo estilo.

---

## 1. Voz y tono

* **Segunda persona informal** ("tú"). Imperativos amables: "Abre la ventana", "Prepara tu equipo", "Anota en tu libreta".
* **Gancho narrativo al inicio:** escena cotidiana y sensorial que sitúa al lector ("Imagínate...", "Seguro que tienes...", "Abre la ventana y mira al cielo").
* **Metáfora de aventura:** caza, tesoro, misiones, cazador, explorador, cuaderno de bitácora. El lector es un "radioescucha" o "cazador".
* **Divulgación rigurosa:** datos, cifras, fórmulas y normas concretas, siempre explicados con analogía (ola del mar, pendrive, puerta con muelle, trampolín, vista de un valle).
* **Entusiasmo controlado:** exclamaciones en momentos clave ("¡Felicidades!", "¡Ahí hay una señal esperándote!"). Cierre motivador.
* **Humor ligero y referencias cotidianas o pop:** *Matrix*, el Pato Donald, el "mito comercial" de los 38 subcanales.
* **Desmontar mitos:** "¡Esto es una mentira comercial!", "El mito del recuento de puntos y rayas". Presentar la idea errónea y corregirla.
* **Pedagogía progresiva:** cada capítulo construye sobre los anteriores ("En el Capítulo 0 aprendimos...", "Como vimos en los capítulos anteriores...").
* **Nivel:** sin conocimientos previos. Todo término técnico se explica la primera vez.

## 2. Estructura del capítulo

Patrón observado en los cinco capítulos. Las secciones pueden variar en nombre, pero el orden lógico se mantiene:

1. **Gancho:** escena cotidiana (ventana, cajón, tejado, cielo).
2. **Concepto:** qué es, por qué existe, reglas del juego.
3. **Física o matemática:** fórmula, cálculo paso a paso, ejemplos numéricos.
4. **Mapa o referencia:** tabla, diagrama de bandas o plan de frecuencias.
5. **Equipo:** lo que se necesita (antena, software, cable).
6. **Experimento o práctica:** pasos numerados y configuración en SDR++.
7. **Cuaderno de bitácora:** tabla para rellenar con filas vacías y una fila de ejemplo.
8. **Resumen:** lista de viñetas con los puntos clave.

Plantilla de referencia:

```
# MÓDULO N: TÍTULO DEL MÓDULO (SIGLAS)

## Capítulo N: Metáfora: Tema técnico concreto

### 1. Gancho narrativo
Escena cotidiana.

### 2. Qué es y reglas
...

### 3. La física / El cálculo
...

### 4. Mapa o tabla de referencia
...

### 5. Misión o actividad práctica
#### Instrucciones en SDR++
1. ...
#### Cuaderno de bitácora
| ... |

### Resumen del Capítulo N
* ...
```

## 3. Títulos

* **H1 (módulo):** `MÓDULO N: TÍTULO EN MAYÚSCULAS`, con siglas entre paréntesis cuando aplique (`(VHF / UHF)`).
* **H2 (capítulo):** `Capítulo N: Metáfora: Tema técnico`. Dos puntos separan la metáfora del concepto concreto.
  * Ejemplos: "Cacería en el vecindario: Walkie-Talkies PMR446 y el secreto de los subtonos"; "Trampolines en las montañas: Repetidores de VHF y UHF".
* **H3 (sección):** numerada, `### N. Título`. Preferir títulos que plantean una pregunta o un misterio:
  * "El mar invisible en tu habitación", "El límite del horizonte y la física del terreno".
  * "El gran misterio: ¿Por qué la aviación sigue usando AM en lugar de FM?".
  * "El guardián del silencio: ¿Qué es el Squelch?".
* **H4 (subsección):** sin numerar en general, para dividir una sección ("El efecto captura en FM", "Anatomía de un indicativo").
* **H5 (sub-subsección):** solo para detalles puntuales (Cap. 2 y 4).
* **Títulos de práctica:** elegir un formato y mantenerlo. En los capítulos aparecen: "Misión Práctica N:", "Actividad Práctica:", "Práctica con SDR++:", "Caso Práctico:". Recomendado: "Misión Práctica N: ..." o "Práctica con SDR++: ...".
* **Numeración:** en H3 numerar siempre de forma correlativa y sin repetir número (en el Cap. 4 aparece "6." dos veces; no replicar).
* Los títulos no terminan en punto.

## 4. Ejemplos

* **Ejemplo numérico paso a paso:** cadena de igualdades con unidades, cada paso en su línea.
  * Ejemplo: $\lambda = 300/120 = 2{,}5$ m.
* **Ejemplo de caso real:** indicativo, frecuencia o repetidor concreto (EA4BCD, ED4YAV, IBE3201, DL3BC, 145,625 MHz).
* **Ejemplo de frase o conversación:** en cursiva y entre comillas, con la voz del operador o controlador. Ejemplo: *"Iberia 6251, descienda para nivel de vuelo FL150 y contacte con Madrid Aproximación en 127.100"*.
* **Ejemplo local:** ciudades y lugares cercanos al lector (Torrijos, Toledo, Madrid, Talavera). Hacen el texto más cercano.
* **Analogías con cifras:** "Un avión a 10.000 m produce un horizonte de casi 350 km".
* **Ejemplo marcado en tabla:** primera fila con texto en cursiva y prefijo "Ej:".

## 5. Fórmulas y unidades

* Fórmulas en LaTeX dentro de `$...$` (en línea) o `$$...$$` (bloque).
* Unidades con `\text{ MHz}`, `\text{ kHz}`, `\text{ m}`, `\text{ W}`, separadas por espacio fino.
* **Decimales con coma** (estilo español): $12{,}5$ kHz, $446{,}100$ MHz, $0{,}5$ W.
* Miles con punto: 300.000 km/s. En tablas de frecuencias se usa coma decimal y punto de miles cuando hace falta.
* Regla rápida antes que la fórmula exacta: "Para hacer cálculos rápidos mentales, usamos...".
* Explicar cada variable al introducirla: "**Frecuencia** ($f$): cuántas olas pasan por un punto en un segundo".

## 6. Diagramas y elementos visuales

* **Diagramas ASCII** en bloques de código: cajas con corchetes `[ Antena ]`, flechas `──►`, `▼`, `│`, separadores `┌ ┐ └ ┘`.
  * Cada diagrama ilustra un proceso (cadena de señal, rebote, flujo de audio).
* **Mapas de bandas** en ASCII con columnas alineadas.
* **Tablas Markdown** con cabecera y, en las bitácoras, filas vacías para completar.
* **Imágenes** referenciadas desde `content/capN/` (ej. `content/cap2/LECX.PNG`), con descripción en el texto alrededor.
* Cada figura o tabla va precedida de una frase que la introduce y, si es compleja, seguida de una explicación ("¿Cómo interpretar este mapa?").

## 7. Callouts (cajas de aviso)

Bloques de cita con negrita al inicio. Usar 1–3 por capítulo:

* "> **¡Regla del cazador!** ..." para un consejo práctico.
* "> **¡Atención Cazador!** ..." para una advertencia.
* "> **Dato Histórico / Curiosidad:** ..." para contexto.
* "> **Nomenclatura de Canales:** ..." para equivalencias de nombres.
* "> **¿Cómo interpretar este mapa?:** ..." para guiar la lectura de una figura.

## 8. Actividades

Patrón de actividad práctica:

1. **Objetivo:** frase con misión clara ("Tu misión consiste en...").
2. **Pasos numerados:** "Paso 1 / Paso 2 / Paso 3" o lista numerada con verbos de acción (abre, sintoniza, selecciona, ajusta, anota).
3. **Configuración concreta:** modo (NFM, AM, LSB, USB, CW), ancho de banda, sample rate, ganancia, longitud de antena en cm, frecuencia exacta.
4. **Diagrama de flujo** (opcional) en ASCII.
5. **Cuaderno de bitácora:** tabla con columnas claras y filas vacías. Fila de ejemplo en cursiva.
6. **Enlaces externos** para contrastar o ampliar (QRZ.com, listado de repetidores de la URE, plan de bandas IARU).

Mantener la especificidad: frecuencias con decimales completos, longitudes de varilla en cm, anchos de banda en kHz o Hz.

## 9. Formato de texto

* **Negrita:** términos clave en su primera aparición, siglas y acciones importantes (**PTT**, **Squelch**, **SSB**).
* **Glosario entre paréntesis:** tras el término, la traducción o desarrollo. Ej.: "**SDR** (*Software Defined Radio* o Radio Definida por Software)".
* **Cursiva:** términos en inglés, pronunciaciones y ejemplos de conversación.
* **Código en línea:** indicativos, subtonos y canales de repetidor (`ED4YAN`, `RU716`, `67,0 Hz`).
* **Argot entre comillas:** "petetear", "Pato Donald", "gruñido cavernoso".
* **Viñetas** con `*` para listas de características; **listas numeradas** para procesos y pasos.
* **Idioma:** español de España. Términos técnicos en inglés con su equivalente en español.
* **Emojis:** casi no se usan. Solo aparecen en un título (Cap. 2). No replicar.

## 10. Ritmo y longitud

* Capítulos largos (varias secciones H3), pero párrafos cortos (2–4 líneas).
* Frases cortas tras una explicación larga para fijar la idea ("¿Por qué importa esto?").
* Preguntas retóricas para abrir secciones ("¿Te has preguntado por qué...?", "¿Cómo consiguen entonces...?").
* Cierre de capítulo: bloque "Resumen del Capítulo N" con 5–8 viñetas breves, cada una con el dato clave en negrita o en código.
* Cierre del último párrafo: frase de acción o celebración ("¡La cacería del espectro acaba de comenzar!").

## 11. Checklist para un nuevo capítulo

- [ ] H1 de módulo y H2 de capítulo con la fórmula "Metáfora: Tema técnico".
- [ ] Gancho narrativo en la primera sección.
- [ ] Cada término técnico con su desarrollo la primera vez.
- [ ] Al menos una fórmula con variables explicadas y un ejemplo numérico.
- [ ] Al menos una tabla de referencia (frecuencias, códigos, siglas).
- [ ] Una actividad práctica con pasos numerados y configuración concreta en SDR++.
- [ ] Bitácora en tabla con fila de ejemplo y filas vacías.
- [ ] 1–3 callouts en blockquote.
- [ ] Referencia cruzada a capítulos anteriores.
- [ ] Resumen con viñetas breves.
- [ ] Numeración de H3 correlativa, sin duplicados.
- [ ] Sin emojis.
- [ ] Coma decimal y unidades en LaTeX, o en texto plano en tablas.
