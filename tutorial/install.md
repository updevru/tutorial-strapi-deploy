# Создание проекта на Strapi

Исчерпывающая инструкция на [официальном сайте](https://docs.strapi.io/dev-docs/installation/cli), 
тут я приведу краткий набор команд и действия. Демо приложение будет находиться в папке strapi.

Перед установкой у вас должно быть:
- Node.js версия v18 или v20
- npm или yarn
- Python

Создание проекта:

```
npx create-strapi-app@latest strapi
```

После выполнения запускаем в режиме разработки и создаем наш набор данных.

```
npm run develop
```

Для локальной разработки этого, как правило, достаточно.