const Database = require('../db/config')

module.exports = {
  async index (req, res) {
    const db = await Database()
    const roomId = req.params.room
    const questionId = req.params.question
    const action = req.params.action
    const password = req.body.password
     

    const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`)
    if(verifyRoom.pass == password) {
      if(action == "delete"){

        await db.run(`DELETE FROM quetions WHERE id = ${questionId}`)
      
      } else if(action == "check"){

        await db.run(`UPDATE quetions SET id = 1 WHERE id = ${question}`)
      }
      
      res.redirect(`/room/${roomId}`)
    } else {
      res.render('passincorrect', {roomId: roomId})
    }
   
    
  } ,

  create (req, res) {
    const db = await Database()
    const question = req.body.question
    const roomId = req.params.room

    await db.run (`INSERT INTO question(
      title, 
      roomID,
      read,
    )VALUES(
      "${question}",
      ${roomId},
      0
    )`)
    res.redirect(`/room/${roomId}`)
  }
}