# Nombre del Proyecto

Itinderario

## Requisitos previos

Instalar docker y docker-compose antes de ejecutar el proyecto:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Configuración

1. Clona este repositorio en tu pc:

git clone https://github.com/DiegoB0/Itinderario.git

2. En la raíz del proyecto, crea un archivo `.env` y configura las siguientes
   variables de entorno:

MYSQL_ROOT_PASSWORD=password.example
MYSQL_DATABASE=database.example


## Ejecución

1. Desde la raíz del proyecto, ejecuta el siguiente comando para construir y ejecutar los contenedores de Docker:

docker-compose up

Este comando creará y ejecutará los contenedores de MySQL y la API en segundo plano.

2. Una vez que los contenedores estén en funcionamiento, podrás acceder a la API en la siguiente URL:

http://localhost:3000

## Detener y Limpiar

Para detener los contenedores y limpiar los recursos, ejecuta el siguiente comando:

docker-compose down

## Consideraciones

Procura leer el package.json en la seccion de scripts para saber como controlar tanto los contenedores 
como la webapi
