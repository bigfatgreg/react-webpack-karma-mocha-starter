var context = require.context('.', true, /_spec\.jsx?$/);

context.keys().forEach(context);

module.exports = context;