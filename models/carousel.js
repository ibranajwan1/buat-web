let caruosels = require("../database/carousel.json");
class CarouselModel {
    async findALL() {
        return caruosels
    }
}

module.exports = CarouselModel