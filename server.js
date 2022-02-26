const app = require("./app");
const config = require("./app/config");

const PORT =config.app.port;
app.listen(PORT, ()=>{
    console.log(`server is runging on port ${PORT}..`);
});