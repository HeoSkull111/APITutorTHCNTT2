'use strict';
const firebase = require('../db');
const NhanVien = require('../models/nhanvien.models');
const firestore = firebase.firestore();
const addNhanVien = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('nhanvien').doc().set(data);
        res.send('Saved successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllNhanVien = async (req, res, next) => {
    try {
        const nhanvien = await firestore.collection('nhanvien');
        const data = await nhanvien.get();
        const nhanvienArray = [];
        if (data.empty) {
            res.status(404).send('No nhanvien record found');
        } else {
            data.forEach(doc => {
                nhanvienArray.push({id:doc.id ,...doc.data()});
            });
            res.send(nhanvienArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const deleteNhanVien = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('nhanvien').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const updateNhanVien = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const nhanvien = await firestore.collection('nhanvien').doc(id);
        await nhanvien.update(data);
        res.send('Record updated successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addNhanVien,
    getAllNhanVien,
    deleteNhanVien,
    updateNhanVien
}