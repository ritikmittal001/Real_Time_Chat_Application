const express=require("express");
const router = express.Router();


const orderController = require("../controller/adminOrder.controller.js");
const { authenticate } = require("../middleware/authenticate.js");
const { route } = require("./auth.route.js");

router.get("/", authenticate,orderController.getAllOrder);
router.put('/:orderId/confirmed',authenticate,orderController.confirmedOrder);
router.put('/:orderId/ship',authenticate,orderController.shippOrder);
router.put('./:orderId/deliver',authenticate,orderController.deliverOrder);
router.put('/:orderId/delete',authenticate,orderController.deleteOrder);
router.put('./:orderId/cancel',authenticate,orderController.cancelledOrder);

module.exports=router;