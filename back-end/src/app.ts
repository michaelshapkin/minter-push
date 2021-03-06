import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import tasks from "./tasks";

import WalletController from "./controllers/WalletController";
import BipToPhone from "./controllers/BipToPhone";
import CampaignController from "./controllers/CampaignController";
import GifteryController from "./controllers/GifteryController";

tasks();

const app = express();

app.set("trust proxy", 1);
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));

app.use("/api", WalletController);
app.use("/api/phone", BipToPhone);
app.use("/api/campaign", CampaignController);
app.use("/api/giftery", GifteryController)

export default app;
