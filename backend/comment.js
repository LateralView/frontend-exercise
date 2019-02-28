const cors = require('cors')
const express = require('express')
const Comment = require('./models/comment')
const router = express.Router()

router.options('*', cors())

/**
 * @api {GET} /comments/:albumId Request All the Comments based on the <code>albumId</code>
 * @apiName GetComments
 * @apiGroup Comments
 * @apiVersion 1.0.0
 *
 * @apiSuccess (200) {Object[]} Comments
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  [
 *    {
 *      "__v": 0,
 *      "albumId": "12Chz98pHFMPJEknJQMWvI",
 *      "email": "nahuel.veron@lateralview.net",
 *      "text": "The Resistance is one of my favorites Muse Albums",
 *      "_id": "582a47a82df306000f2e1d30",
 *      "avatar": "https://www.gravatar.com/avatar/351e5e48fe41e78a658763409a9da591",
 *      "id": "582a47a82df306000f2e1d30"
 *    }
 *  ]
 */
router.get('/:albumId', (req, res) => {
  Comment.find({ albumId: req.params.albumId }).then(
    docs => res.status(200).json(docs),
    err => res.status(400).send(err)
  )
})

/**
* @api {POST} /comments Push a Comment to an album
* @apiName CreateComment
* @apiGroup Comments
* @apiVersion 1.0.0
*
* @apiError (400) {Number} 400 The Object Sent was invalid.
*
* @apiErrorExample {json} Error-Response:
*  HTTP/1.1 400 Bad Request
*  {
*    "message": "Comment validation failed",
*    "name": "ValidationError",
*    "errors": {
*      "email": {
*        "message": "Email is required.",
*        "name": "ValidatorError",
*        "properties": {
*          "type": "required",
*          "message": "Email is required.",
*          "path": "email"
*        },
*        "kind": "required",
*        "path": "email"
*      }
*    }
*  }
*
* @apiSuccess (200) {String} albumId The id of the album (via Spotify).
* @apiSuccess (200) {String} email The email of who commented.
* @apiSuccess (200) {String} text The comment.
* @apiSuccess (200) {String} avatar Gravatar URL to Display (autogenerated, based on email).
* @apiSuccess (200) {String} id ID of the comment.
*
* @apiSuccessExample {json} Success-Response:
*  HTTP/1.1 200 OK
*  {
*    "__v": 0,
*    "albumId": "12Chz98pHFMPJEknJQMWvI",
*    "email": "nahuel.veron@lateralview.net",
*    "text": "The Resistance is one of my favorites Muse Albums",
*    "_id": "582a47a82df306000f2e1d30",
*    "avatar": "https://www.gravatar.com/avatar/351e5e48fe41e78a658763409a9da591",
*    "id": "582a47a82df306000f2e1d30"
*  }
*/
router.post('/', (req, res) => {
  let comment = new Comment(req.body)

  comment
    .save()
    .then(
      commentSaved => res.status(200).json(commentSaved),
      err => res.status(400).send(err)
    )
})

module.exports = router
