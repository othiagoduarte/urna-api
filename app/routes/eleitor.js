module.exports = function (app) 
{
   	const ctrl = app.controllers.eleitor;

    app.post("/eleitor", async (req, res) =>{
        const R = await ctrl.add(req, res);
        res.status(R.status).jsonp(R.data);
    });

    app.get("/eleitor/:id", async (req, res) =>{
        const R = await ctrl.getById(req, res);
        res.status(R.status).jsonp(R.data);
    });
    
    app.get("/eleitor", async (req, res) =>{
        const R = await ctrl.getAll(req, res);
        res.status(R.status).jsonp(R.data);                
    });


    app.put("/eleitor", async (req, res) =>{
        const R = await ctrl.save(req, res);
        res.status(R.status).jsonp(R.data);
    });

    app.delete("/eleitor/:id", async (req, res) =>{
        const R = await ctrl.dell(req, res);
        res.status(R.status).jsonp(R.data);
    });
    
};