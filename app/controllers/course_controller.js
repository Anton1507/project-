const Works = require('../model/works');


class WorkController{
    async create(req,res){
     try{
            const {subject,title,page,wasDone,numbSources,plan}=req.body ;
            const couse = await Works.create({subject,title,page,wasDone,numbSources,plan})
            res.status(200).json("Сервер работает")
    }catch(e){
            res.status(500).json(e)
        }
    }
    
    async getAll(req,res){
        try{
            // const couse = await Works.find({});
            
            // res.status(200).json(couse);

        }catch(e){
            res.status(500).json(e)
        }
    }
    async getWork(req,res){
        try{
            
            const {type,subject_cod}=req.body;
            const works = await Works.find({typeWork:type,subject_cod:subject_cod});
            
            res.status(200).json(works)
        }catch(e){
            
            res.status(500).json(e)
        }
    }
    async seachWork(req,res){
        try{
            
            const seach=req.body.seach;
            console.log(seach);
            const works = await Works.find({name_work:seach}).exec();
            console.log(works)
            res.status(200).json(works)
        }catch(e){
            console.log(e)
        }
    }
   
   
}


module.exports= new WorkController();