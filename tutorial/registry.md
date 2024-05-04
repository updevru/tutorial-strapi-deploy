# Публикация Docker образа

Для запуска контейнера из нашего образа на удаленном сервере - необходимо загрузить образ в registry.

## Docker Hub

Публичные образы можно загружать туда бесплатно, а для приватных нужна платная подписка.

Необходимо [создать аккаунт](https://docs.docker.com/docker-hub/quickstart/), 
если у вас его еще нет, и [авторизоваться под ним](https://docs.docker.com/reference/cli/docker/login/).

После этого можно собрать образ и загрузить в реестр. Название образа обязательно должно в формате <login>/название:версия

```
docker build -t updev/strapi:1.0 .
docker push updev/strapi:1.0
```

## Yandex Container Registry

Реестр Яндекса платный, но стоимость достаточно низкая и зависит от размера хранящихся там образов.

Инструкция как создать реестр и авторизоваться [тут](https://yandex.cloud/ru/docs/container-registry/quickstart/).
После создания у вас будет реестр с уникальным именем, например cr.yandex/crpoe5.....8h9al8r0/strapi

```
docker build -t cr.yandex/crpoe5.....8h9al8r0/strapi:1.0 .
docker push cr.yandex/crpoe5.....8h9al8r0/strapi:1.0
```