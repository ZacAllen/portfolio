const fs = require('fs')
const path = `./.env`
const vars = `
REACT_APP_SERVICE_ID=${process.env.REACT_APP_SERVICE_ID_NETLIFY}\n
REACT_APP_TEMPLATE_ID=${process.env.REACT_APP_TEMPLATE_ID_NETLIFY}\n
REACT_APP_USER_ID=${process.env.REACT_APP_USER_ID_NETLIFY}
`
fs.writeFileSync(path, vars)