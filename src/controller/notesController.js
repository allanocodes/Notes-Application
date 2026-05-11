
const notes = [

    {
  "_id": "n006",
  "title": "Fix memory leak",
  "content": "Investigate increasing RAM usage in Node.js service",
  "completed": false,
  "userId": "u999",
  "createdAt": "2026-05-14T07:00:00Z"
},
{
  "_id": "n007",
  "title": "Cache GET /notes",
  "content": "Store paginated notes in Redis for 5 minutes",
  "completed": false,
  "userId": "u123",
  "createdAt": "2026-05-15T13:15:00Z"
},
{
  "_id": "n003",
  "title": "Submit assignment",
  "content": "Upload software engineering assignment before Friday",
  "completed": false,
  "userId": "u200",
  "createdAt": "2026-05-12T14:10:00Z"
}
]




 async function createNotes (req,res,next){
try{
    const body = req.body;

    res.status(201).json({
      status: "success",
      message: "items inserted successsfully",
      data: body
    })

}catch(error){
    next(error);
}

 }

 async function getNotes (req,res,next){
try{


    if(req.params.id){
       res.status(201).json({
      status: "success",
      message: "items inserted successsfully",
      data: {
            "_id": "n456",
            "title": "Learn Redis",
            "content": "Practice caching API responses",
            "completed": false,
            "userId": "u123",
            "createdAt": "2026-05-10T11:00:00Z"}
    })

    }


    else{
      res.status(200).json({
      status: "success",
      message: "items inserted successsfully",
      data: notes })
    }

   

}catch(error){
    next(error);
}

 }


 module.exports = {createNotes,getNotes}
