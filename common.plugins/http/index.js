export default function({$http, $utils}) {
  $http.onRequest(async config => {
    // console.log(config);
  });

  $http.onResponse(async (response) => {
    if (!$utils.checkServer()) {
      // throw '11'
    }
  });

  $http.onRetry(async (request, options, errors, retryCount) => {
  });

  $http.onError(async error => {
    if (error.response) {
      const msg =
        (error.response.config && error.response.config.url + ' => ') +
        (error.response.data && error.response.data.data) +
        ' 【' +
        $utils.moment().format('YYYY-MM-DD HH:mm:ss') +
        '】';
      console.log(msg);
      if (error.response.config && error.response.config.body) {
        console.log('body => ', error.response.config.body);
      }
      if (error.response.config && error.response.config.query) {
        console.log('query => ', error.response.config.query);
      }
      console.log('======');
    }
    if (!$utils.checkServer()) {
      // client
    }
  });
}
