import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

let users = [];

router.get('/', (req,res) => {
 
    res.send(users);
})

router.post('/', (req,res) => {
   
    const user = req.body;

    
    users.push({ ...user, id: uuidv4() });
    
    res.send(`User with the name ${user.firstname} added!`);
})

router.get('/:id', (req,res) => {

    const {id} = req.params;
    const foundUser = users.find((user) => user.id === id);


    res.send(foundUser);
})

router.delete('/:id', (req,res) => {
    const {id} = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(users);
})

router.patch('/:id', (req,res) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;

    const user = users.find((user) => user.id === id);
    if(firstName){
        user.firstname = firstName;
    }
    if(lastName){
        user.lastname = lastName;
        
    }
    if(age){
        user.age = age;
    }
    
})

export default router;