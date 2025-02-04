const model = require('../Model/model.js');

module.exports = {
  get: (req, res) => {
    let baseUrl = '/api';
    let endpoint = req.originalUrl.slice(baseUrl.length);

    return model.getAll(endpoint)
      .then(data => res.status(200).send(data.data))
      .catch(error => res.status(404).send(error));
  }
}