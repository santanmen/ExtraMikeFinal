const {Response, Router} = require('express');
const {validateError} = require('../../../utils/functions');
const {findAll, findById, save, update, remove} = require('./users.gateway');

const getAll = async(req, res=Response)=>{
    try {
        const user = await findAll();
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({message});
    }
}

const getById = async(req, res=Response)=>{
    try {
        const {id} = req.params;
        const user = await findById(id);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({message});
    }
}

const insert = async(req, res=Response)=>{
    try {
        const {email, password, role, personal_id} = req.body;
        const user = await save({email, password, role, personal_id});
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({message});
    }
}

const actualize = async (req, res = Response) => {
    try {
       const {email, password, role, status, personal_id} = req.body;
       const { id } = req.params;
       const user = await update({email, password, role, status, personal_id}, id)
       res.status(200).json(user);
    } catch (error) {
       console.log(error);
       const message = validateError(error);
       res.status(400).json({ message });
    }
 
 }

 const eliminate = async (req, res = Response) => {
    try {
       const{ id } =req.params;
       const user = await remove(id);
       res.status(200).json(user);
    } catch (error) {
       console.log(error);
       const message = validateError(error);
       res.status(400).json({ message });
    }
 }

const usersRouter = Router();

usersRouter.get('/', getAll);
usersRouter.get('/:id', getById);
usersRouter.post('/', insert);
usersRouter.put('/:id', actualize);
usersRouter.delete('/:id',eliminate);

module.exports = {usersRouter, };