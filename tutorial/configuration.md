# Конфигурация и сборка проекта

После установки и создание структуры данных для запуска проекта на сервере мы будем использовать Docker.
Это очень универсальный способ, который позволит запустить наше приложение как в облаке, так и на сервере.

Убедитесь что у вас установлен [Docker](https://www.docker.com/) и [Docker Compose](https://docs.docker.com/compose/). 

Добавляем [Dockerfile](../strapi/Dockerfile) в наш проект.

Переходим в папку `strapi` с проектом и проверяем что сборка работает.

```
docker build -t strapi .
```

Запускаем контейнер, для запуска потребуется указать реквизиты сервера базы данных.
Ниже команда для примера, необходимо указать свои.

```
docker run -p 1337:1337 \ 
    -e DATABASE_CLIENT=postgres \ 
    -e DATABASE_HOST=127.0.0.1 \
    -e DATABASE_PORT=5432 \
    -e DATABASE_NAME=strapi \ 
    -e DATABASE_USERNAME=strapi \ 
    -e DATABASE_PASSWORD=strapi \
    strapi
```