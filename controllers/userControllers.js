import { fs } from "../dependencies.js";

export const postUserData = (req, res) => {

    try {
        const data= fs.readFileSync('./localCollection/users.json');
        const jsonData= JSON.parse(data);

        const newUser={
            id:jsonData.users.length+1,
            name:req.body.name,
            email:req.body.email,
            birth:req.body.birth,
            phone:req.body.phone,
            date:req.body.date,
            ubication:req.body.ubication,
            interactionStart:req.body.interactionStart,
            interactionDuration:req.body.interactionDuration
        }
        console.log(newUser);
        jsonData.users.push(newUser)
        console.log(jsonData);

        fs.writeFileSync('./localCollection/users.json',JSON.stringify(jsonData,null,2));

        res.end();
    } catch (error) {
        console.log(error);
        res.status(201).send({msn:`User ${newUser.id}`});
    }
    // console.log(req.body);
    // res.send({ mns: 'Hello! post' });

    // fs.writeFile(`database.json`,(error, data)=>{
    //     JSON.stringify(data,null,2)
    // })
}

export const getUsers = (req, res) => {
    res.send({ mns: 'Hello!' });
}