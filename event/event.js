const School = require('./schoolclass');

const school = new School();

// event register

school.on('bellRing', (man) => {
    console.log(`event fired! ${man.name} and age : ${man.age}`);
});

// event raise

school.student();
