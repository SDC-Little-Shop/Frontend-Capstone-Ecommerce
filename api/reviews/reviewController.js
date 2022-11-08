const model = require('./reviewModels.js');

module.exports = {
  getReviewController: (req, res) => {

    model.getReviews(Number(req.params.id), Number(req.query.page), Number(req.query.count), req.query.sort)
      .then((result) => {
        res.status(200).send(result)})
      .catch((error) => console.log(error))
  },

  getMetaController: (req, res) => {
    model.getMeta(Number(req.params.id))
      .then((result) => {
        res.status(200).send(result)})
      .catch((error) => console.log(error))
  },

  addReviewController: (req, res) => {
    model.addReview(req.body)
      .then((result) => {
        res.sendStatus(201)})
      .catch((error) => console.log(error))
  },

  markHelpfulController: (req, res) => {
    model.markHelpful(Number(req.params.review_id))
      .then((result) => {
        res.sendStatus(204)})
      .catch((error) => console.log(error))
  },

  reportReviewController: (req, res) => {
    model.reportReview(Number(req.params.review_id))
      .then((result) => {
        res.sendStatus(204)})
      .catch((error) => console.log(error))
  },
}