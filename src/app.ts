require("dotenv").config();

import express from "express";

const cors = require("cors");
import expressValidator from "express-validator";

import { BarAPI } from "./api/bar-route";
import { EchoAPI } from "./api/echo";
import { OfferAPI } from "./api/offer-route";
import { SignupAPI } from "./api/signup-route";
import { UserAPI } from "./api/user-route";
import { AuthGuard } from "./auth/auth-guard";
import { TokenIssuer } from "./auth/token-issuer";
import { DrinkAPI } from "./api/drink-route";
import { PreferenceAPI } from "./api/preference-route";

const app = express();

app.use(cors());
app.use(expressValidator());
app.use(express.json());

app.use("/auth", TokenIssuer);
app.use("/signup", SignupAPI);

app.use(AuthGuard);

app.use("/echo", EchoAPI);
app.use("/users", UserAPI);
app.use("/bars", BarAPI);
app.use("/drinks", DrinkAPI);
app.use("/offers", OfferAPI);
app.use("/preferences", PreferenceAPI);

export default app;
