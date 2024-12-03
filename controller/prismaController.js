const { prisma } = require("../db/config");


const createCommand = async (req,res) =>{
    try {
        const { name, email } = req.body;
    
        // Complete this creation request using prisma ORM
        const user = ;
    


        res.status(201).json(user);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

const getRecord =  async (req, res) => {
    try {
        const { id } = req.query;
        if(!id){


            // Complete this get all request using prisma ORM
            const user =  ;



            return res.status(200).json(user);
        }

        // Complete this get by id request using prisma ORM
        const user = ;


        if (!user) return res.status(404).json({ error: "User not found" });
        return res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;


        // Complete this creation request using prisma ORM
        const user = ;



        if (!user) return res.status(404).json({ error: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const removeRecord = async (req, res) => {
    try {
        const { id } = req.params;

        // Complete this deletion request using prisma ORM
        const user = ;



        if (!user) return res.status(404).json({ error: "User not found" });
        res.status(200).json({message: "User deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { createCommand,getRecord, updateRecord, removeRecord }