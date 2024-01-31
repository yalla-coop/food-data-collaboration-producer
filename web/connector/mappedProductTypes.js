import { connector } from './index.js';

const groceryStoreBase = connector.PRODUCT_TYPES['LOCAL_GROCERY-STORE'];
const savoryGroceries = groceryStoreBase.SAVORY_GROCERIES;
const flourType = savoryGroceries.FLOUR;
const cannedGoods = groceryStoreBase.CANNED_GOODS;
const driedGoods = groceryStoreBase.DRIED_GOODS;

const productTypes = {
  Cans: cannedGoods,
  CerealFlakes: driedGoods?.FLAKE,
  CerealFlour: flourType,
  BuckwheatFlour: flourType,
  Seeds: driedGoods?.SEED,
  Pulses: driedGoods?.PULSE,
  CerealGrain: driedGoods?.GRAIN,
  GFFlour: flourType,
  Ferments: driedGoods?.FERMENT,
  'Hemp Flour': flourType,
  Herbs: driedGoods?.DRIED_HERB,
  Quinoa: driedGoods?.SEED,
  RoastedSnacks: savoryGroceries?.SNACK
};

export default productTypes;
