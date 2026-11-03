# AGENTS.md

Instrucciones para los agentes que trabajan en este proyecto.

## Objetivo

Crear una publicación digital sobre SDR (Software Defined Radio) y radioescucha orientada a jóvenes.

La publicación debe:

- Ayudarles a sacar partido a un dispositivo SDR.
- Introducirles, de forma progresiva, en conceptos de la radioafición a través de la radioescucha.
- Desarrollarse a través de los distintos temas que ya están planteados en el índice del manual.

## Restricciones

- No tocar ningún fichero fuera de la carpeta de este proyecto.
- La carpeta `web/` contiene el resultado publicable. No modificar nada en `web/` a menos que el usuario lo indique explícitamente.
- La carpeta `working/` contiene los ficheros de trabajo para los agentes: gestión de lo que está hecho, lo que queda por hacer, borradores y notas de planificación.
- Hacer un commit cada vez que se realicen cambios en ficheros.

## Estructura del proyecto

- `web/`: publicación final (no modificar salvo indicación explícita).
- `web/content/cap0.md` a `web/content/cap4.md`: capítulos publicados (fuente de lectura, no de modificación).
- `working/`: ficheros de trabajo de los agentes.
- `working/Index.md`: borrador de trabajo del índice general, en Markdown, con los temas y sus descripciones.
- `working/resumen-capitulos.md`: resumen de todo lo mencionado en cap0 a cap4. Es la memoria de trabajo para analizar los capítulos sin releerlos completos.
- `working/style.md`: guía del estilo narrativo de cap0 a cap4 (títulos, ejemplos, actividades, tono, formato) para replicarlo.
- `AGENTS.md`: este documento.

## Instrucciones de trabajo

- Mantener el seguimiento de tareas (hecho / pendiente) en `working/`.
- Antes de analizar o redactar capítulos, consultar `working/resumen-capitulos.md` como memoria de trabajo y `working/style.md` para el estilo. Leer los capítulos completos solo cuando haga falta el detalle.
- Si cambia el contenido de cap0 a cap4, actualizar `working/resumen-capitulos.md` y, si cambia el estilo, `working/style.md`.
- Cada commit debe tener un mensaje descriptivo de lo que cambia.
