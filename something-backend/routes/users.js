const {
  createUser,
  signinUser,
  getSingleUser,
  insertImage,
  insertSellImage
} = require("../controllers/users");
const { createItem, itemsFound, itemsLost } = require("../controllers/items");
const { sell, itemsBuy } = require("../controllers/sellcon");
const auth = require("../middleware/auth");

const router = require("express").Router();

router.post("/signup", createUser);
router.post("/signin", signinUser);
router.get("/profile/:id", getSingleUser); // this to be accessed by authorized user only (mandatory)
router.post("/createItems", createItem); //token issue resolved
router.get("/foundItems", itemsFound); //items found resolved(aevayi)
router.post("/sellItems", createSell); //sellItems resolved
router.post("/uploadSellImage", insertSellImage);
router.get("/lostItems", itemsLost); //lostItems resolved(aevayi)
router.get("/buyItems", itemsBuy); //resolved(aevayi)
router.post("/uploadImage", insertImage); //resolved


module.exports = router;
