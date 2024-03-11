import App from "./app";
import 'dotenv/config'

const port = Number(process.env.NOTIFICATION_PORT)
new App().listen(port);

