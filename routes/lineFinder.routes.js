import express from 'express'
import tableData from '../jsons/tableMock.json' assert { type: "json" }
const router = express.Router();

// Getting the list of users from the mock database
router.get('/processed', (req, res) => {
    res.send(tableData);
})

router.get('/potential', (req, res) => {
    res.send(tableData);
})



export default router