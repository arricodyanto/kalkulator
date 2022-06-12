const records = require('../models/record')
const db = require('./../models')

const list = async(req, res, next) => {
    const records = await db.Records.findAll()
    res.json({
        success: true,
        message: "Success Retrieve All Records Data",
        data: records
    })
}

const add = async(req, res, next) => {
    try {
        const records = req.body
        const insertData = await db.Records.create(records)
        res.status(201).json({
            success: true,
            message: "Success Adding Records !",
            data: insertData
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    list,
    add
}