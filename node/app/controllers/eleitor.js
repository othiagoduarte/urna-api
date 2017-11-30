module.exports = function (app) 
{
    const mongoose = require('mongoose');
    const R = app.builder.retorno;
    const eleitorModel = app.models.eleitor;
            
    async function add(req, res){
        try{
            const retorno = await eleitorModel.create(req.body);
            return R.sucesso(retorno);   
        } catch (error) {
            return R.erroServidor(error.message);							
        }      
    }

    async function getAll(req, res){
        try{
            const id = req.params.id;
            const retorno = await eleitorModel.find({});
            return R.sucesso(retorno);   
        } catch (error) {
            return R.erroServidor(error);							
        }
    }

    async function getById(req, res){
        try{
            const id = req.params.id;
            const query = {"_id":mongoose.Types.ObjectId(id)};
            return R.sucesso(await eleitorModel.findOne(query));          
        }catch(error){
            return R.erroServidor(error.message);	
        }      
    }

    async function save(req, res){
        try{
            const eleitor = req.body;   
            const query = {"_id":mongoose.Types.ObjectId(eleitor._id)};
            return R.sucesso(await eleitorModel.findOneAndUpdate(query, eleitor,{ upsert: true, new: true }));         
        }catch(error){
            return R.erroServidor(error.message);	
        }
    }

    async function dell(req, res){
        try{
            const id = req.params.id;
            const query = {"_id":mongoose.Types.ObjectId(id)};
            return R.sucesso(await eleitorModel.findOneAndRemove(query));          
        }catch(error){
            return R.erroServidor(error.message);	
        }
    }

    return {
        add, 
        getAll,
        getById,
        save,
        dell
    }


}