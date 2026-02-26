import express from "express";
import { verifyIsAdmin } from "../middleware/vendorMiddleware.js";
import { upload } from "../middleware/upload.js";
import {
  createBusiness,
  updateBusiness,
  deleteBusiness,
  getAllBusinesses,
  getBusiness,
  getFeaaturedBusinnesses,
  getIInnvestmentBusinesses,
} from "../controllers/businessController.js";
import verifyToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/featured", verifyToken, verifyIsAdmin, getFeaaturedBusinnesses);
router.get(
  "/investments",
  verifyToken,
  verifyIsAdmin,
  getIInnvestmentBusinesses,
);
router.get("/", verifyToken, verifyIsAdmin, getAllBusinesses);
router.get("/:id", verifyToken, verifyIsAdmin, getBusiness);
router.post(
  "/",
  verifyToken,
  verifyIsAdmin,
  upload.single("coverImage"),
  createBusiness,
);
router.patch(
  "/:id",
  verifyToken,
  verifyIsAdmin,
  upload.single("coverImage"),
  updateBusiness,
);
router.delete("/:id", verifyToken, verifyIsAdmin, deleteBusiness);

export default router;
