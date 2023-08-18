const EventEmitter = require('events');

// event raise
class School extends EventEmitter {
    student() {
        console.log('class started');

        setTimeout(() => {
            this.emit('bellRing', {
                name: 'biplob',
                age: '25',
            });
        }, 2000);
    }
}

module.exports = School;
