const CarouselModel = require("../models/carousel")
const carouselModel = new CarouselModel 


class HomeController{
    async index(req,res) {
        
        try {
            const carousels = await carouselModel.findALL
            res.render('home', {
                carousels
            })
        } catch (error) {
            
        }
    }
}
module.exports = HomeController