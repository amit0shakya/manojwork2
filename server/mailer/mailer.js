var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');

var smtpTransport = nodemailer.createTransport({
		host:'smtp.gmail.com',
		secure:false,
		port:587,
		auth:{
		 user:'amit0shakya@gmail.com',
		 pass:'amit@1234'
		}
	});


function sendmail(app){
    _parent=this;
    _parent.app=app;
}

sendmail.prototype.verify=function(obj){
    var receiver=obj.to;

    var mailOptions = {
        from:"Test mail - <amit0shakya@gmail.com>",
        to:receiver,
        subject: 'Email verification from joboculur',
        html:"Hello test mail from nodemailer"
	    }

        smtpTransport.sendMail(mailOptions,function(err,responce){
            if(err){
                res.send("email send error "+err);
            }else{
                res.send("email sent successfully");
            }
	    });

}


module.exports=sendmail;







/*
function mail(val){
    _parent=this;
    _parent.val=val;
}

mail.prototype.send=function(param){
        console.log(_parent.val,"<<<<show val")
}

mail.prototype.get=function(){
    
    console.log("hello prototype function>>>>"+_parent.val)
}

module.exports=mail;

*/