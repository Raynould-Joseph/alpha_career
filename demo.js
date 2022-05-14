App = {
    getcourse : function() {
        //var b="";
         const api_url ="http://localhost:3000/course";
       
         //CourseList.innerHTML = b;
         data = this.getapi(api_url).then(data=>{
            console.log(data.length);
             for(var i = 0; i <= data.length; i++) {
                 
                var a ="<tr class='cards'><td><img class='courseimg' src='images/"+data[i].course_img+".png'/></td><td class='courseetc'><p id='coursename'>"+data[i].course_name+"</p><p id='coursedesc'>"+data[i].course_description+"</p></td><td class='btnclass'><button class='btn btn-primary'>Enroll</button></td></tr>";
               //console.log(data[i].course_name);
                //var a = "<tr><td><img class='courseImg' src='images/"+data[i].course_img+".png'/></td></tr>";
                CourseList.innerHTML += a;
             }
         });
     },

     getfreecourse : function() {
        //var b="";
         const api_url ="http://localhost:3000/course";
       
         //CourseList.innerHTML = b;
         data = this.getapi(api_url).then(data=>{
            console.log(data.length);
             for(var i = 0; i <= data.length; i++) {
                 
                var a ="<tr class='cards'><td><img class='courseimg' src='images/"+data[i].course_img+".png'/></td><td class='courseetc'><p id='coursename'>"+data[i].course_name+"</p><p id='coursedesc'>"+data[i].course_description+"</p></td><td class='btnclass'><button class='btn btn-primary' onclick='myfcourse()'>View</button></td></tr>";
               //console.log(data[i].course_name);
                //var a = "<tr><td><img class='courseImg' src='images/"+data[i].course_img+".png'/></td></tr>";
                CourseList.innerHTML += a;
             }
         });
     },
     getteachers : function() {
        //var b="";
         const api_url1 ="http://localhost:3000/teacher";
       
         //CourseList.innerHTML = b;
         data = this.getapi(api_url1).then(data=>{
            console.log(data.length);
             for(var i = 0; i <= data.length; i++) {
                 
                //var a ="<tr class='cards'><td><img class='courseimg' src='images/"+data[i].course_img+".png'/></td><td class='courseetc'><p id='coursename'>"+data[i].course_name+"</p><p id='coursedesc'>"+data[i].course_description+"</p></td><td class='btnclass'><button class='btn btn-primary'>Enroll</button></td></tr>";
               //console.log(data[i].course_name);
                var a = "<tr class='cards'><td><img class='teacherimg' src='images/"+data[i].teacher_img+".png'/></td><td class='teacheretc'><p id='teachername'>"+data[i].teacher_name+"</p><p id='tecspecial'>"+data[i].teacher_specialization+"</p></td><td class='btnclass'><button class='btn btn-primary'>Contact</button></td></tr>";
                teacherBody.innerHTML += a; 
             }
         });
     },
 
     
     getpcourses : function() {
        //var b="";
         const api_url2 ="http://localhost:3000/paidcourse";
       
         //CourseList.innerHTML = b;
         data = this.getapi(api_url2).then(data=>{
            console.log(data.length);
             for(var i = 0; i <= data.length; i++) {
                 
                //var a ="<tr class='cards'><td><img class='courseimg' src='images/"+data[i].course_img+".png'/></td><td class='courseetc'><p id='coursename'>"+data[i].course_name+"</p><p id='coursedesc'>"+data[i].course_description+"</p></td><td class='btnclass'><button class='btn btn-primary'>Enroll</button></td></tr>";
               //console.log(data[i].course_name);
                var a = "<tr class='cards'><td><img class='pimg' src='images/course/"+data[i].pcourse_img+".png'/></td><td class='petc'><p id='pname'>"+data[i].pcourse_name+"</p><p id='pspecial'>"+data[i].pcourse_description+"</p></td><td class='btnclass'><button class='btn btn-primary' onclick='mycourse()' >Enroll</button></td></tr>";
                Pcoursebody.innerHTML += a; 
             }
         });
     },


     getmyfreecourse : function() {
      //var b="";
       const api_url4 ="http://localhost:3000/mcourse";
     
       //CourseList.innerHTML = b;
       data = this.getapi(api_url4).then(data=>{
          console.log(data.length);
           for(var i = 0; i <= data.length; i++) {
            var a = "<tr class='cards'><td><img class='pimg' src='images/course/"+data[i].pcourse_img+".png'/></td><td class='petc'><p id='pname'>"+data[i].pcourse_name+"</p><p id='pspecial'>"+data[i].pcourse_description+"</p></td><td class='btnclass'><button class='btn btn-primary'  >Edit</button></td></tr>";
              
             //console.log(data[i].course_name);
              //var a = "<tr><td><img class='courseImg' src='images/"+data[i].course_img+".png'/></td></tr>";
              mList.innerHTML += a;
           }
       });
   },
     getmycourse : function() {
        //var b="";
         const api_url3 ="http://localhost:3000/mycourse1";
       
         //CourseList.innerHTML = b;
         data = this.getapi(api_url3).then(data=>{
            console.log(data.length);
             for(var i = 0; i <= data.length; i++) {
                 
                //var a ="<tr class='cards'><td><img class='courseimg' src='images/"+data[i].course_img+".png'/></td><td class='courseetc'><p id='coursename'>"+data[i].course_name+"</p><p id='coursedesc'>"+data[i].course_description+"</p></td><td class='btnclass'><button class='btn btn-primary'>Enroll</button></td></tr>";
               //console.log(data[i].course_name);
                var a = "<tr class='cards'><td><video class='pimg' controls src='images/"+data[i].course_vid+".mp4'/></td></tr>";
                mycourse.innerHTML += a; 
             }
         });
     },
  
     getpayid: function() {
        //var b="";
         const api_url2 ="http://localhost:3000/payid";
       
         //CourseList.innerHTML = b;
         data = this.getapi(api_url2).then(data=>{
            console.log(data.length);
             for(var i = 0; i <= data.length; i++) {
                 
                //var a ="<tr class='cards'><td><img class='courseimg' src='images/"+data[i].course_img+".png'/></td><td class='courseetc'><p id='coursename'>"+data[i].course_name+"</p><p id='coursedesc'>"+data[i].course_description+"</p></td><td class='btnclass'><button class='btn btn-primary'>Enroll</button></td></tr>";
               //console.log(data[i].course_name);
                var a = "<tr class='cards'><p id='pspecial'>"+data[i].transaction_id+"</p></td></tr>";
                Paybody.innerHTML += a;
             }
         });
     },

    
 


    
    
    getapi:async function(url) {
 
      
        const response = await fetch(url);
     
        var data = await response.json();
        console.log(data);     
        return data;
    }


}


// var video = document.getElementById("mycourse");
// var button = document.getElementById("mybutton");
// video.addEventListener("ended", function() {
//    button.disabled = false;
// }, true);


async function list(req, res) { 
   res.set('content-type' , 'text/html; charset=mycharset'); 
   data = {};    
   action = 'list'; 
   const allRecord = await Users.getAllData();   
   console.log(controller+'  '+action);
   res.render('admin/users/list',{
       page_title:" List",
       data:allRecord, 
       controller:controller,
       action:action,
       module_name:module_name
   });    
};      
exports.list = list;

/** 
*  Edit
*  Purpose: This function is used to get constructor List
*  Pre-condition:  None
*  Post-condition: None. 
*  Parameters: ,
*  Returns: json  
*/
async function edit(req, res) { 
  
   res.set('content-type' , 'text/html; charset=mycharset'); 
   var action = 'edit';
   var entityDetail = {}; 
   var errorData = {};
   if(req.params.id){
       var id =  String("'"+req.params.id+"'");   
       entityDetail = await Users.getUserByid(id);   
       if(entityDetail.length == 0){ 
           req.flash('error', 'Invalid url')  
           return res.redirect(nodeAdminUrl+'/Users/list');  
       }    
       if (req.method == "POST") { 
           var input = JSON.parse(JSON.stringify(req.body)); 
           console.log(input); console.log('Here');  
           req.checkBody('first_name', 'First name is required').notEmpty();
           req.checkBody('last_name', 'Last name is required').notEmpty();  
           req.checkBody('contact_number', 'Mobile number is required').notEmpty();  
           var errors = req.validationErrors();    
           if(errors){	   
               if(errors.length > 0){
                   errors.forEach(function (errors1) {
                       var field1 = String(errors1.param); 
                       var msg = errors1.msg; 
                       errorData[field1] = msg;   
                       entityDetail[0].field1 = req.field1;
                   }); 
               } 
                  
           }else{  
               var saveResult = '';  
               // Upload Image  
               if (req.files && req.files.profile_pic !== "undefined") { 
                   let profile_pic = req.files.profile_pic;  
                   var timestamp = new Date().getTime();   
                   filename = timestamp+'-'+profile_pic.name;   
                   input.profile_pic =   filename; 
                   profile_pic.mv('public/upload/'+filename, function(err) {
                       if (err){    
                           console.log(err);    
                           req.flash('error', 'Could not upload image. Please try again!')  
                           res.locals.message = req.flash();   
                           return res.redirect(nodeAdminUrl+'/Users/'+action); 
                       }     
                   });  
               }  
               var msg =  controller+' updated successfully.';  
               var saveResult = await Users.updateUserData(input);  
               req.flash('success', msg)   
               res.locals.message = req.flash(); 
               if(saveResult){   
                   //res.set('content-type' , 'text/html; charset=mycharset');  
                   return res.redirect(nodeAdminUrl+'/'+controller+'/list');     
               }       
           } 
       } 
   }else{ 
       req.flash('error', 'Invalid url.');  
       return res.redirect(nodeAdminUrl+'/Categories/list');     
   } 
   res.render('admin/'+controller+'/edit',{page_title:" Edit",data:entityDetail,errorData:errorData,controller:controller,action:action});    
};          
exports.edit = edit;  

/** 
*  Edit
*  Purpose: This function is used to get constructor List
*  Pre-condition:  None
*  Post-condition: None. 
*  Parameters: ,
*  Returns: json  
*/
async function add(req, res) { 
  
   //CheckPermission();   
   res.set('content-type' , 'text/html; charset=mycharset'); 
   var page_title = 'Add'; 
   var errorData = {}; 
   var data = {};  
   var action = 'add'; 
   var errorData = {};    
   if (req.method == "POST") { 
       var input = JSON.parse(JSON.stringify(req.body));  
       req.checkBody('first_name', 'First name is required').notEmpty();
       req.checkBody('last_name', 'Last name is required').notEmpty();  
       req.checkBody('contact_number', 'Mobile number is required').notEmpty(); 
       req.checkBody('password', 'Password is required').notEmpty(); 
       req.checkBody('email', 'email is required').notEmpty();  
       var errors = req.validationErrors();    
       if(errors){	  
           if(errors.length > 0){
               errors.forEach(function (errors1) {
                   var field1 = String(errors1.param); 
                   console.log(errors1);
                   var msg = errors1.msg; 
                   errorData[field1] = msg;   
                   data.field1 = req.field1; 
               }); 
           }     
           data = input;   
       }else{   

           // Upload Image 
           if (req.files && req.files.profile_pic !== "undefined") { 
               let profile_pic = req.files.profile_pic;  
               var timestamp = new Date().getTime(); 
               var imagePath = '';   
               filename = timestamp+'-'+profile_pic.name;   
               input.profile_pic =   filename; 
               profile_pic.mv('public/upload/'+filename, function(err) { 
                   if (err){    
                       console.log(err);    
                       req.flash('error', 'Could not upload image. Please try again!')  
                       res.locals.message = req.flash();   
                       return res.redirect(nodeAdminUrl+'/Users/add'); 
                   }     
               }); 
           }  
           // Decrypt password with password hash
           var salt = bcrypt.genSaltSync(saltRounds);
           var password = bcrypt.hashSync(input.password, salt);
           input.password = password;   
             
           var saveResult = await Users.saveData(input);   
           if(saveResult){    
               req.flash('success', controller+' added successfully.')  
               res.locals.message = req.flash();  
               res.set('content-type' , 'text/html; charset=mycharset');  
               return res.redirect(nodeAdminUrl+'/'+controller+'/list');     
           }else{
               req.flash('error', 'Could not save record. Please try again')  
               res.locals.message = req.flash();  
           }      
       } 
   }   
   res.render('admin/'+controller+'/add',{page_title:page_title,data:data, errorData:errorData,controller:controller,action:action});    
};          
exports.add = add; 

/** 
*  delete
*  Purpose: This function is used to get constructor delete
*  Pre-condition:  None
*  Post-condition: None. 
*  Parameters: ,
*  Returns: json  
*/
async function deleteRecord(req, res) { 
  
   var categoryDetail = {}; 
   if(req.params.id){
       var cat_id =  String("'"+req.params.id+"'");    
       categoryDetail = await Users.deleteRecord(cat_id);  
       if(categoryDetail.length == 0){  
           req.flash('error', 'Invalid url')  
           return res.redirect(nodeAdminUrl+'/'+controller+'/list'); 
       }else{
           req.flash('success', 'Record deleted succesfully.');    
           return res.redirect(nodeAdminUrl+'/'+controller+'/list');  
       }   
   }else{ 
       req.flash('error', 'Invalid url.');   
       return res.redirect(nodeAdminUrl+'/'+controller+'/list');      
   }    
};          
exports.deleteRecord = deleteRecord;  
