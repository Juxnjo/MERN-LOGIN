import { Router } from "express";

const router = Router()

router.get("/tasks")
router.get("/task/:id")
router.post("/task")
router.put("/task/:id")
router.delete("/task:id")
