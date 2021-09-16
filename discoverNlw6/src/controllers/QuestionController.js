const Database = require('../db/config')

module.exports = {
  async index (req, res) {
    const db = await Database()
    const roomId = req.params.room
    const questionId = req.params.question
    const action = req.params.action
    const password = req.body.password
     console.log(`room = ${roomId}, questionId = ${questionId}
     action = ${action}, password = ${password}`)
  },

  create (req, res) {
    const db = await Database()
    const question = req.body.question
    const roomId = req.params.room

    await db.run (`INSERT INTO question(
      title, 
      roomID,
      read,
    )VALUES(
      ${question},
      ${roomId},
      0
    )`)
    res.redirect(`/room/${roomId}`)
  }
}