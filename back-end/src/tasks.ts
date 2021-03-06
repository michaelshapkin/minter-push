import cron from "node-cron";
import storage from "node-persist";
import { saveGifteryProducts } from "./utils/giftery";
import { initStorage, updateStorage } from "./utils/storage";

const tasks = () => {
  initStorage();
  saveGifteryProducts();

  const getProductTask = cron.schedule("*/15 * * * *", saveGifteryProducts);
  const updateStorageTask = cron.schedule("*/15 * * * *", updateStorage);

  getProductTask.start();
  updateStorageTask.start();
};

export default tasks