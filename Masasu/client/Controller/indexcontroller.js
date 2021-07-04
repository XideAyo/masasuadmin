const Cars = require('../model/cars')

const masasu = [
    {
        about: [
            "Masasu Autos Limited is an integral part of the Nigerian Economy with an integrated commercial, industrial and service-oriented organization, positioning itself as one of the leading business entities in Nigeria."
            ,"Masasu Autos Limited (RC: 1611787) registered and incorporated 2019 with the aim of carrying out business of buying, selling, Automobiles dealership, Motorcars, Buses, Vans, Trucks and vehicles suitable for propulsion on land, rail or incombination, whether propelled by means of petrol, diesel, spirit, steam, gas, electrical etc."
            ,"Masasu Autos Limited is established and registered to carry out business of manufacture, fabricate and assemble, buy,sell, import, distribute and deal in automobile parts of all kinds and descriptions, automotives and other gears,transmission and other axles, universal joints, accessories and fittings of all kinds and acts as brokers and marketing agents."   
        ],
        vision: "To be the most successful, respected and best liked car Dealership Company in Nigeria and other parts of Africa.",
        mission: "Our Mission is to earn our customer’s loyalty by delivering sales and services experiences with high quality, excellent value, trust, integrity and enthusiasm. We will function as a team, work ethically and focus on meeting and to exceed the expectations of our customers."
        ,values: [
            "Honesty" ,
            "Transparency",
            "Trust",
            "Customer First",
            "Integrity",
            "Quality products and services to our client giving them huge satisfaction.",
            "Continuous lifelong learning and growth curve",
            "High quality and professionalism"
        ],
        policy: "Masasu Autos Limited is engaged in Selling, Distributing and Dealership of Brand New and Tokunbo/Used Vehicles. It is therefore the intent and policy of the company to supply products and services, which conforms to contract specifications and regulatory requirements. The activities of the company demand that emphasis should be laid on Customer First, Trust, Efficiency, Reliability and Cost Effectiveness. Management of Masasu Autos Limited shall implement this policy and support initiatives, which further enhance performances."
        ,email: ["masasuautos.gmail.com", "sales@masasuautosltd.com", "info@masasuautosltd.com"],
        telephone: [09085764622, 08038438134]
    }
] 

const cars = {
    options: ["Manufacturer" , "Body Type" , "Status" , "Year"],
    manufacturer: ["Toyota" , "Kia" , "Lexus" , "Hyundai" , "Other"],
    Body_Type: ["Hatchback" , "Sedan" , "Muv/Suv" , "Van" ],
    status: ["New" , "Foreign Used"],
    year: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020, 2021]
}

const date = new Date()
const year = date.getFullYear()


exports.Home = (req, res, next) => {
    res.render('home', { title: 'Masusu Autos Limited - Distributing and Dealership of Brand New and Tokunbo/Used Vehicles' ,year, masasu, cars});
};
exports.About = (req, res, next) => {
    res.render('about', { title: 'Masusu Autos Limited - Distributing and Dealership of Brand New and Tokunbo/Used Vehicles' ,year, masasu,cars});
};
exports.Contact = (req, res, next) => {
    res.render('contact', { title: 'Masusu Autos Limited - Contact Us' , year,masasu, cars});
};
exports.SendMessage = (req, res, next) => {
    
    const firstname = req.body.firstname
    const surname = req.body.surname
    const email = req.body.email
    const telephone = req.body.telephone
    const message = req.body.message

    res.render('about', { title: 'Masusu Autos Limited - ' , masasu, year,cars});
};
exports.Request= (req,res, next) => {

    res.render('request', {title : 'Masasu Autos Limited', masasu, year, cars})
}
exports.UsedPage = async (req, res, next) => {
    const usedCars = await Cars.find({status: "USED"})
    console.log(usedCars)

    res.render('usedcars', {title: 'Masusu Autos Limited - Distributing and Dealership of Brand New and Tokunbo/Used Vehicles' , usedCars , year, cars , used_active: "active"})
}
exports.NewPage = async (req, res, next) => {
    const newCars = await Cars.find({status: "NEW"})
    console.log(newCars)

    res.render('newcars', {title: 'Masusu Autos Limited - Distributing and Dealership of Brand New and Tokunbo/Used Vehicles' , newCars , cars ,year,   new_active: "active"})
}
exports.SingleCar = async (req , res , next) => {
    const car = await Cars.findById(req.params.id)

    res.render('singlecar' , {title: 'Masasu Autos Limited - '+ car.manufacturer+' '+car.model , car , year, masasu, cars})
}