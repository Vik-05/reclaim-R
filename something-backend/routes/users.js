const {
  createUser,
  signinUser,
  getSingleUser,
} = require("../controllers/users");
const { createItem, itemsFound, itemsLost } = require("../controllers/items");
const { sell, itemsBuy } = require("../controllers/sellcon");
const auth = require("../middleware/auth");


const router = require("express").Router();

router.post("/signup",createUser);
router.post("/signin", signinUser);
router.get("/profile/:id", getSingleUser); // this to be accessed by authorized user only
router.post("/createItems", createItem); //token issue resolved
router.get("/foundItems", itemsFound); //items found resolved
router.get("/sellItems", sell); //sellItems resolved
router.get("/lostItems", itemsLost); //lostItems resolved
router.get("/buyItems", itemsBuy); //resolved

module.exports = router;
