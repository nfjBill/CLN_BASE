export default ({ $utils }) => {
  return (obj) => {
    const form = new $utils.FormData();
    const {_} = $utils;
    _.forEach(obj, (value, key) => {
      if (!_.isNil(value)) {
        if (!_.isArray(value)) {
          if (typeof value !== 'object') {
            form.append(key, value);
          } else {
            if (value.name) {
              form.append(key, value);
            } else {
              Object.values(value).forEach(v => {
                form.append(key, v);
              })
            }
          }
        } else {
          value.forEach(v => {
            form.append(key, v);
          })
        }
      }
    });
    return form;
  }
}
