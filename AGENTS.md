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
- `working/`: ficheros de trabajo de los agentes.
- `working/Index.md`: borrador de trabajo del índice general. Se puebla inicialmente con el contenido de `web/content/index.html`.
- `AGENTS.md`: este documento.

## Instrucciones de trabajo

- Mantener el seguimiento de tareas (hecho / pendiente) en `working/`.
- Cada commit debe tener un mensaje descriptivo de lo que cambia.
