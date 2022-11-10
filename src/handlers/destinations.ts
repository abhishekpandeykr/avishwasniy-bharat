import prisma from "../db"

// get all destinations
export const getDestinations = async (req, res) =>  {
    const destinations = await prisma.destinations.findMany()
    res.json({data:destinations})
}

// Get one destination
export const getOneDestination = async (req, res) => {
    const id = req.params.id;

    const destination = await prisma.destinations.findFirst({
        where: {
            id
        },
        include : {
            City: true
        }
    })
    res.json({data:destination})
}

// create one destination

export const createDestination = async (req, res) => {
    const destination = await prisma.destinations.create({
        data:{
            label: req.body.label,
            image: req.body.image,
            City:req.body.City
        }
    })
    res.json({data:destination})
}

export const updateDestination = async (req, res) => {
    const updatedDestination = await prisma.destinations.update({
        where : {
            id:req.params.id
        },
        data : {
            label:req.params.label
        }
    })
    res.json({data: updatedDestination})
}

export const deleteDestination = async (req, res) => {
    const deleted = await prisma.destinations.delete({
        where : {
            id: req.params.id,
        }
    })
    res.json({data: deleted})
}