const express = require('express');
const {addNhanVien,getAllNhanVien,updateNhanVien,deleteNhanVien} = require('../controllers/nhanvien.controllers');
const router = express.Router();

router.post('/add/nhanvien', addNhanVien);
router.get('/get/nhanvien', getAllNhanVien);
router.put('/update/nhanvien/:id', updateNhanVien);
router.delete('/delete/nhanvien/:id', deleteNhanVien);
module.exports = {
    routes: router
}