import prisma from "../db";

// get all cities
export const getAllCities = async (req, res) => {
    const cities = await prisma.city.findMany({})
    res.json({data:cities})
}

// create City
export const createCity =async (req, res) => {
    const newCity = await prisma.city.create({
        data:{
            description:req.body.description,
            label: req.body.label,
            state: req.body.state,
            Place: req.body.Place,
            destinationsRelateTo:req.body.belongsTo,
            image: req.body.image
        }
    })
    res.json({data:newCity})
}

// get one city
export const getOneCity = async (req, res) => {
    const city = await prisma.city.findFirst({
        where : {
            id: req.params.id
        },
        include : {
            Place:true
        }
    })
    res.json({data:city})
}

// delete one city
export const deleteCity = async (req, res) => {
    const city = await prisma.city.delete({
        where : {
            id: req.params.id
        }
    })
    res.json({data:city})
}

// update one city
export const updateCity = async (req, res) => {
    const city = await prisma.city.update({
        where : {
            id: req.params.id
        },
        data : {
            label: req.params.label,
            image: req.params.image,
            state:req.params.state,
            description: req.params.description
        }
    })
    res.json({data:city})
}