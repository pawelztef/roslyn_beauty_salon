module.exports = {
  /**
   * Promise to fetch all records
   *
   * @return {Promise}
   */
  find(params, populate) {
    return strapi.query('footer').find(params, ['menu.pages' ])
  },
};
