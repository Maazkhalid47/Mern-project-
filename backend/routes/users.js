const router = require('express').Router();
const User = require('../models/user.model')
const exercise = require('../models/exercise.model')
const bcrypt = require('bcrypt')
const {authenticateToken} = require('./authMiddleware');



///////////////DELETE ACTIVITY
// router.route('/deleteActivity/:id').delete(authenticateToken,async (req, res) => {
//   try {
//       const a = await exercise.findById(req.params.id);

//       if (!a) {
//           return res.status(404).json({ message: "Activity not found" });
//           } 
//       else{
//               await exercise.findByIdAndDelete(req.params.id);
//               return res.status(200).json({ message: "Activity has been deleted" });
//           }
//       }
//       catch (error) {
//          return res.status(500).json(error)
//       }
// });


router.delete("/removeActivity/:id", authenticateToken, async (req, res) => {

  //console.log("id => ",res.id)
 try {
   // console.log(req)
   let response = await exercise.findByIdAndDelete({ _id: req.params.id })
 console.log(response)
   res.status(200).json({ message: "Deleted activity", response })
 } catch (e) {
   console.log(e)
   res.status(404).json({ message: "Activity not found" })
 }


})




// router.route('/removeActivity').delete(authenticateToken, async (req,res)=>{
  
//   const id=req.actId
//   console.log("this is id",id)
//   try{
//    const data= await exercise.find({id:id})
//    console.log("this is data",data)
//     await exercise.deleteOne({id:id})
//     res.status(200).json({ message: "Deleted activity" })
//   }catch(e){
//     console.log(e)
//     res.status(404).json({ message: "Activity not found" })
//    }
//   })
  
  

// router.route("/activities",authenticateToken).get( async (req, res) => {
//   console.log(req.id)

//   const ex = await exercise.find({userId:req.id})//{userId:req.id}
//   res.status(200).json(ex);
// });


router.route('/updateActivity').put(async (req,res)=>{
      const id=req.body._id///getting activity name from request
      const name=req.body.name
      const description=req.body.description
      const type=req.body.type
      const duration=req.body.duration
      const date = req.body.date
      // { "name":activityName,"key":key,"value":value}
      const filter={"_id":id}///setting filter
      
      const updateDoc = {///setting new2  data 
        $set: {
        "name":name,
        "description":description,
        "type":type,
        "duration":duration,
        "date":date

        }
      }
      //res.json(updateDoc)
    
      await exercise.updateOne(filter, updateDoc).then((response)=>{
        console.log(response)
        const responseObj = {
          "status": "success",
          "message": "Activity Updated",
          "data": response
        }
        res.status(200).json(responseObj)
      
       }).catch((e)=>{
        const error = {
          "status": "failure", 
          "message": "Activity Update Failed",
          "data": e.message
        }
        console.log(e)
        res.status(404).json(error)
       })
       
      
      });



router.route("/activities").get( authenticateToken, async (req, res) => {

  try {
    const ex = await exercise.find({ userId: req.id });//{ userId: req.user.id }
    console.log("This is ID check",req.id)
    res.status(200).json(ex);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving activities" });
  }
});
router.route("/activities/:id").get( async (req, res) => {
  //authenticateToken removed because of token issue
  try {
    
    const ex = await exercise.findById(req.params.id);
    if(!ex){
      return res.status(404).json({ message: "Exercise not found" });
    }
    else{
      res.status(200).json(ex);
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving activities" });
  }
});


//Get all users on default route
router.get('/', async (req, res) => {
    const users = await User.find()
    res.status(200).json(users);
})

//Get a user by id
router.route('/:id').get(async(req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      } else {
        res.status(200).json(user);
      }
      //console.log(user);
      //console.log(req.params.id);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
//Update User By id
router.route('/:id').put(authenticateToken,async (req, res) => {  
    if(req.body.userId === req.params.id){
        if(req.body.userPassword){
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.userPassword = await bcrypt.hash(req.body.userPassword , salt)
            } catch (error) {
                return res.status(404).json(error)
                
            }
        }
        try {
            const user = await User.findByIdAndUpdate(
                req.params.id,
                {$set: req.body},
                { new: true });
            res.status(200).json({message: "Account has been Updated Successfully" ,user})
            
            }
        catch (error) {
            return res.status(404).json(error)
        }
    }
    else{
        return res.status(405).json("You can update only your account")
    }

  });

  //Delete User By id
  router.route('/:id').delete(authenticateToken,async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
            } 
        else{
                await User.findByIdAndDelete(req.params.id);
                return res.status(200).json({ message: "User has been deleted" });
            }
        }
        catch (error) {
           return res.status(500).json(error)
        }
});

  router.route('/username/:userName').delete(authenticateToken,async (req, res) => {
    try {
      const user = await User.findOneAndDelete({ userName: req.params.userName });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      } else {
        return res.status(200).json({ message: "User has been deleted" });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  


    //Activity Work Starts Here
  

  //Get All act of logged in User
  

  //CREATE A NEW ACTIVITY
router.post("/createActivity",authenticateToken, async (req, res) => {
  const { name, description, type, duration} = req.body;
 
  try {
    
    const  newActivity= await new exercise({
      name,
      description,
      type,
      duration,
      userId: req.id
    });

    console.log(newActivity)

    //Save activity
    const data = await newActivity.save();
    res.status(200).json(data);
  }
  catch (err) {
    res.status(400).json('Error: ' + err);
  }
});




// router.route("/activities",authenticateToken).get( async (req, res) => {
//   console.log(req.id)
  
//   const ex = await exercise.find()//{userId:req.id}
//   res.status(200).send("ex");
// });



module.exports = router


// router.get('/activities', authenticateToken, async (req, res) => {
//   const ex = await exercise.find({userId:req.id})
//   res.status(200).json(ex);
// })
// //CREATE A NEW ACTIVITY
// router.post("/createActivity", authenticateToken, async (req, res) => {
//   const { name, description, type, duration } = req.body;
 
//   try {
    
//     const newActivity = await new exercise({
//       name,
//       description,
//       type,
//       duration,
//       userId: req.id
//     });

//     //Save User
//     const data = await newActivity.save();
//     res.status(200).json(data);
//   }
//   catch (err) {
//     res.status(400).json('Error: ' + err);
//   }
// });
// ///////////////DELETE ACTIVITY
// router.route('/removeActivity',authenticateToken).delete(async (req,res)=>{
// const activityName=req.body.name
//  await exercise.deleteOne({name:activityName}).then(()=>{
//   res.status(200).json({ message: "Deleted activity" })

//  }).catch((e)=>{
//   console.log(e)
//   res.status(404).json({ message: "Activity not found" })
//  })

// })


// router.route('/updateActivity',authenticateToken).put(async (req,res)=>{
//   const activityName=req.body.actName///getting activity name from request
//   const name=req.body.name
//   const description=req.body.description
//   const type=req.body.type
//   const duration=req.body.duration
//   // { "name":activityName,"key":key,"value":value}
//   const filter={"name":activityName}///setting filter
  
//   const updateDoc = {///setting new2  data 
//     $set: {
//     "name":name,
//     "description":description,
//     "type":type,
//     "duration":duration
//     }
//   }
//   //res.json(updateDoc)

//   await exercise.updateOne(filter, updateDoc).then(()=>{
//     res.status(200).json({ message: "updated activity" })
  
//    }).catch((e)=>{
//     console.log(e)
//     res.status(404).json({ message: "error" })
//    })
   
  
//   })

