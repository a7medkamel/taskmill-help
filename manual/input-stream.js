/*
@deploy
@input
{
  "type" : "stream"
}
*/

module.exports = function(req, res, next) {
  res.send(!req.body);
};