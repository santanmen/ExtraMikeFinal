const {Response, Router} = require('express');
const { auth, checkRoles } = require('../../../config/jwt');
const {validateError} = require('../../../utils/functions');
const {uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez} = require('./personal.gateway');

const unoG = async(req, res=Response)=>{
    try {
        const personal = await uno();
        res.status(200).json(personal);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({message});
    }
}
const dosG = async(req, res=Response)=>{
    try {
        const personal = await dos();
        res.status(200).json(personal);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({message});
    }
}
const tresG = async(req, res=Response)=>{
    try {
        const personal = await tres();
        res.status(200).json(personal);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({message});
    }
}
const cuatroG = async(req, res=Response)=>{
    try {
        const personal = await cuatro();
        res.status(200).json(personal);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({message});
    }
}
const cincoG = async(req, res=Response)=>{
    try {
        const personal = await cinco();
        res.status(200).json(personal);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({message});
    }
}
const seisG = async(req, res=Response)=>{
    try {
        const personal = await seis();
        res.status(200).json(personal);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({message});
    }
}
const sieteG = async(req, res=Response)=>{
    try {
        const personal = await siete();
        res.status(200).json(personal);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({message});
    }
}
const ochoG = async(req, res=Response)=>{
    try {
        const personal = await ocho();
        res.status(200).json(personal);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({message});
    }
}
const nueveG = async(req, res=Response)=>{
    try {
        const personal = await nueve();
        res.status(200).json(personal);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({message});
    }
}
const diezG = async(req, res=Response)=>{
    try {
        const personal = await diez();
        res.status(200).json(personal);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({message});
    }
}


const personalRouter = Router();

personalRouter.get('/uno', unoG);
personalRouter.get('/dos', dosG);
personalRouter.get('/tres', tresG);
personalRouter.get('/cuatro', cuatroG);
personalRouter.get('/cinco',cincoG);
personalRouter.get('/seis', seisG);
personalRouter.get('/siete', sieteG);
personalRouter.get('/ocho', ochoG);
personalRouter.get('/nueve', nueveG);
personalRouter.get('/diez',diezG);

module.exports = {personalRouter, };