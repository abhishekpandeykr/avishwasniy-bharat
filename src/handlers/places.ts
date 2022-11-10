import prisma from "../db";


export const getAllPlaces= async (req, res) => {
    const place = await prisma.place.findMany({});
    res.json({data:place})
}

export const getPlace= async (req, res) => {
    const place = await prisma.place.findFirst({
        where: {
            id:req.params.id
        }
    })
    res.json({data:place})
}

export const createPlace= async (req, res) => {

    const place = await prisma.place.create({
        data: {
            name: req.body.name,
            address: req.body.address,
            description: req.body.description,
            image:req.body.image,
            belongsToCity: req.body.belongsToCity,
            belongsToDestinationId:req.body.belongsToDestinationId
        }
    })
    res.json({data:place})
}