import { Router } from "express";
import { getEmployees, getEmployeeById, createEmployee, deleteEmployee, updateEmployee} from "../Controllers/employees.controller.js";

const router = Router();

router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployeeById);
router.post('/employees', createEmployee);
router.delete('/employees/:id', deleteEmployee);
router.patch('/employees/:id', updateEmployee);

export default router;