var ApiExplorer = require("api-explorer");

var apiExplorer = new ApiExplorer(getApiDescription());
apiExplorer.startServer({port: process.env.PORT || 8082});

function getApiDescription() {
    return JSON.parse(require('fs').readFileSync('doc.json'));
}