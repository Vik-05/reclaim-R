const {
  createUser,
  signinUser,
  getSingleUser,
  createItem,
  itemsFound,
  sell,
  itemsLost,
  itemsBuy,
} = require("../controllers/users");
const auth = require("../middleware/auth");

const router = require("express").Router();

router.post("/signup", createUser);
router.post("/signin", signinUser);
router.get("/profile", auth, getSingleUser); // this to be accessed by authorized user only
router.post("/createItems", createItem); //token issue resolved
router.get("/foundItems", auth, itemsFound); //items found resolved
router.get("/sellItems",auth, sell); //sellItems resolved
router.get("/lostItems", auth, itemsLost); //lostItems resolved
router.get("/buyItems", auth, itemsBuy); //resolved

module.exports = router;
