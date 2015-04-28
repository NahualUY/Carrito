var sequelize_fixtures = require('sequelize-fixtures');
models = require('./models');

sequelize_fixtures.loadFile(__dirname + '/fixtures/data.json', models).then(function(){
    console.log("Fixtures loaded!");
});
