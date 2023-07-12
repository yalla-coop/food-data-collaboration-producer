import { Router } from 'express';

import retrieveOrder from './retrieve-order.js';
import convertFDCRequestFromJSON from '../../../middleware/convertFDCRequestFromJSON.js';

const orders = Router();

orders.post('/', convertFDCRequestFromJSON, retrieveOrder);

export default orders;
