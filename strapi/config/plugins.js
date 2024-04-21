module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        credentials: {
          accessKeyId: env('YC_ACCESS_KEY_ID'),
          secretAccessKey: env('YC_ACCESS_SECRET'),
        },
        region: 'ru-central1',
        endpoint: 'https://storage.yandexcloud.net',
        params: {
          Bucket: env('YC_BUCKET'),
        },
      },
    },
  },
});
