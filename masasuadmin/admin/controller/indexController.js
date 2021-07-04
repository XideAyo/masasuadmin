
const Cars = require('../model/cars')
const cloudinary = require('../utils/cloudinary')


class App{
    getAdminPage = (req, res, next) => {
        res.render('admin', { title: 'Masasu Admin' })
    }

    postCars = async (req, res, next) => {

       try{
            const file = req.file;

            const {manufacturer, model, bodytype, status, year} = req.body
            
            const result = await cloudinary.uploader.upload(file.path)

            const newCar = new Cars({
                manufacturer : manufacturer.toUpperCase(),
                model: model.toUpperCase(),
                bodytype : bodytype.toUpperCase(),
                status: status.toUpperCase(),
                carImage: result.secure_url,
                cloudinary_id: result.public_id
            })

            const saveCar = newCar.save()
            if(saveCar){
                res.redirect(303, '/allcars')
            }else{
                res.send('There is an error saving this')
            }
       }catch(err){
           console.log(err)
       }
    }

    getAllCars = async (req, res, next) => {
        try{
            const cars = await Cars.find({})
            console.log(cars)

            res.render('allcars',{ title: 'Masasu Admin', cars} )
        }catch(err){
            console.log(err)
        }
    }

    deleteCar = async (req, res, next) => {
        let car = await Cars.findById(req.params.id);

        await cloudinary.uploader.destroy(car.cloudinary_id);

        await car.remove()
    }

    getEditPage = async(req, res, next) => {
        const car = await Cars.findOne({_id: req.params.id})

        res.render('editcar', {car})
    }

    editCar = async(req, res, next) => {
        
        const file = req.file;
        console.log(file)
        let car = await Cars.findById(req.params.id);

        console.log(car)

        await cloudinary.uploader.destroy(car.cloudinary_id);

        const result = await cloudinary.uploader.upload(file.path)

        Cars.findByIdAndUpdate(req.params.id,{
            manufacturer: req.body.manufacturer,
            model: req.body.model,
            status: req.body.status,
            bodytype: req.body.bodytype,
            carImage: result.secure_url,
            cloudinary_id: result.public_id
        },{new:true, useFindAndModify: false},(err,item) => {
            if(err){
                console.log(err)
            }else{
                res.redirect(303, '/allcars')
            }
        })
    }

}

const returnApp = new App
module.exports = returnApp