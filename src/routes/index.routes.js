import { Router } from 'express';
import { createDatos, deleteDatos, getDato, getDatos, updateDatos } from '../controller/datos.controller.js';
const router = Router();

router.get('/',getDatos);
router.get('/:id',getDato);

router.post('/',createDatos);

router.put('/:id',updateDatos);

router.delete('/:id',deleteDatos);

export default router;