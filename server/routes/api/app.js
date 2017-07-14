module.exports=function(app,mail){
	
	var mailer=new mail(app);

		app.post('/api/register/freshercandidate',function(req,res){

			/*
			var user={}
				user.to="punnoshakya@gmail.com";
				*/

				var data=JSON.parse(req.body.json);
				console.log(data.personelInfo);

				//console.log(data.personelInfo)
				//mailer.verify(user);

				res.send("done");
		})
}