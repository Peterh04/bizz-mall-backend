import { Sequelize } from "sequelize";
import dotnv from "dotenv";

dotnv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  logging: false,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Successfullly connected to the db");
  } catch (err) {
    console.error("Failed to connnect to db", err);
  }
})();

export default sequelize;
