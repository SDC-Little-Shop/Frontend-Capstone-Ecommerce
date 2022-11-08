const router = require('express').Router();
const reviewController = require('./reviewController.js')

router.get('/:id', reviewController.getReviewController);
router.get('/meta/:id', reviewController.getMetaController);
router.post('/', reviewController.addReviewController);
router.put('/:review_id/helpful', reviewController.markHelpfulController);
router.put('/:review_id/report', reviewController.reportReviewController);

module.exports = router;
