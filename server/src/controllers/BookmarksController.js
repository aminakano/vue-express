const { Bookmark } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const { songId, userId } = req.query;
      // const songId = req.body.params.songId;
      // const userId = req.body.params.userId;
      const bookmark = await Bookmark.findOne({
          where: {
            songId: songId,
            userId: userId
          }
      })
      res.send(bookmark);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to fetch the bookmark."
      });
    }
  },
  async post(req, res) {
    try {
          // const { songId, userId } = req.body;
        const { songId } = req.body;
        const userId = req.user.id;
        const bookmark = await Bookmark.findOne({
          where: {
            SongId: songId,
            UserId: userId
          }
        });
        console.log("query: ",songId, userId)
        if (bookmark) {
          return res.status(400).send({
            error: "You already have this set as a bookmark."
          });
        }
        const newBookmark = await Bookmark.create(bookmark);
        res.send(newBookmark);
      } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to create the bookmark."
        });
      }
  },
  async delete(req, res) {
    try {
      const { bookmarkId } = req.params;
      const bookmark = await Bookmark.findByPk(bookmarkId);
      await bookmark.destroy();
      res.send(bookmark);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to delete the bookmark."
      });
    }
  }
};
