# Запуск в Yandex Serverless Containers

Преимуществом такого запуска является:
- не нужен постоянный выделенный сервер
- не нужно беспокоится о масштабировании при росте нагрузки
- не нужно беспокоиться об отказоустойчивости
- работает только когда его кто-то использует

Если у вас еще нет интерфейса командной строки Yandex Cloud, [установите и инициализируйте его](https://yandex.cloud/ru/docs/cli/quickstart#install).
После этого вы сможете пользоваться утилитой `yc` для управления вашим облаком.

## Создание базы данных PostgreSQL

## Подключение Object Storage для хранения файлов

## Публикация контейнера

Для публикации/обновление контейнера достаточно выполнить команду:

```
yc serverless container revision deploy \ 
    --container-name strapi \
    --image updev/strapi:1.0 \
    --cores 1 \
    --memory 256MB \
    --concurrency 1 \
    --execution-timeout 5m \ 
    --service-account-id aje......hokift \ 
    --description 1.0
    --environment DATABASE_CLIENT=postgres,DATABASE_HOST=127.0.0.1,DATABASE_PORT=5432,DATABASE_NAME=strapi,DATABASE_USERNAME=strapi,DATABASE_PASSWORD=strapi
```

Параметры: 

`--container-name` - название контейнера, должно быть уникально в рамках облака 

`--image` - название вашего образа, его мы создали [тут](./registry.md) 

`--cores` - количество ядер необходимые вашему приложению

`--memory` - размер оперативной памяти необходимые вашему приложению

`--concurrency` - количество одновременно запущенных приложения (с ростом нагрузи нужно увеличивать это число)

`--execution-timeout` - время которое контейнер будет ждать новые запросы, если за это время новых запросов не будет, то он будет остановлен

`--service-account-id` - [сервисный аккаунт](https://yandex.cloud/ru/docs/iam/concepts/users/service-accounts) от имени которого будет работать контейнер

С правилами тарификации можно ознакомиться [тут](https://yandex.cloud/ru/docs/serverless-containers/pricing).
Если кратко, то на стоимость влияют: `--cores`, `--memory`, `--concurrency`, `--execution-timeout`.
Чем выше значения, тем дороже будет обходиться работа приложения. 
Но, когда запросов к приложению не будет, то вы не будете ни за что платить.

## Адрес приложения

