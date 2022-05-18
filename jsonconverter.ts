const s = `{
    "events":[
       {
          "eventId":1,
          "title":"Duck feeding",
          "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "categoryId":1,
          "categoryName":"Selected for you",
          "location":"Ducklake",
          "eventImage":"app/assets/Duckfeeding.avif",
          "noGoing":"842",
          "imageGoing1":"app/assets/going1.avif",
          "imageGoing2":"app/assets/going2.avif",
          "imageGoing3":"app/assets/going3.avif",
       },
       {
          "eventId":2,
          "title":"Cooking class",
          "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "categoryId":1,
          "categoryName":"Selected for you",
          "location":"88 Begley Street",
          "eventImage":"app/assets/Cookingclass.avif",
          "noGoing":"5",
          "imageGoing1":"app/assets/going1.avif",
          "imageGoing2":"app/assets/going2.avif",
          "imageGoing3":"app/assets/going3.avif",
       },
       {
          "eventId":3,
          "title":"Book Club",
          "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "categoryId":1,
          "categoryName":"Selected for you",
          "location":"Bookstreet 123",
          "eventImage":"app/assets/Bookclub.avif",
          "noGoing":"10",
          "imageGoing1":"app/assets/going1.avif",
          "imageGoing2":"app/assets/going2.avif",
          "imageGoing3":"app/assets/going3.avif",
       },
       {
        "eventId":4,
        "title":"Duck feeding",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "categoryId":2,
        "categoryName":"Events near you",
        "location":"Ducklake",
        "eventImage":"app/assets/Duckfeeding.avif",
        "noGoing":"123",
        "imageGoing1":"app/assets/going1.avif",
        "imageGoing2":"app/assets/going2.avif",
        "imageGoing3":"app/assets/going3.avif",
     },
     {
        "eventId":5,
        "title":"Cooking class",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "categoryId":2,
        "categoryName":"Events near you",
        "location":"88 Begley Street",
        "eventImage":"app/assets/Cookingclass.avif",
        "noGoing":"52",
        "imageGoing1":"app/assets/going1.avif",
        "imageGoing2":"app/assets/going2.avif",
        "imageGoing3":"app/assets/going3.avif",
     },
     {
        "eventId":6,
        "title":"Book Club",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "categoryId":2,
        "categoryName":"Events near you",
        "location":"Bookstreet 123",
        "eventImage":"app/assets/Bookclub.avif",
        "noGoing":"7",
        "imageGoing1":"app/assets/going1.avif",
        "imageGoing2":"app/assets/going2.avif",
        "imageGoing3":"app/assets/going3.avif",
     },
     {
        "eventId":7,
        "title":"Duck feeding",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "categoryId":3,
        "categoryName":"Events this week",
        "location":"Ducklake",
        "eventImage":"app/assets/Duckfeeding.avif",
        "noGoing":"420",
        "imageGoing1":"app/assets/going1.avif",
        "imageGoing2":"app/assets/going2.avif",
        "imageGoing3":"app/assets/going3.avif",
     },
     {
        "eventId":8,
        "title":"Cooking class",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "categoryId":3,
        "categoryName":"Events this week",
        "location":"88 Begley Street",
        "eventImage":"app/assets/Cookingclass.avif",
        "noGoing":"1",
        "imageGoing1":"app/assets/going1.avif",
        "imageGoing2":"app/assets/going2.avif",
        "imageGoing3":"app/assets/going3.avif",
     },
     {
        "eventId":9,
        "title":"Book Club",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "categoryId":3,
        "categoryName":"Events this week",
        "location":"Bookstreet 123",
        "eventImage":"app/assets/Bookclub.avif",
        "noGoing":"66",
        "imageGoing1":"app/assets/going1.avif",
        "imageGoing2":"app/assets/going2.avif",
        "imageGoing3":"app/assets/going3.avif",
     },
    ]
 }`

 const a = s.replace(/\\n/g, "\\n")  
 .replace(/\\'/g, "\\'")
 .replace(/\\"/g, '\\"')
 .replace(/\\&/g, "\\&")
 .replace(/\\r/g, "\\r")
 .replace(/\\t/g, "\\t")
 .replace(/\\b/g, "\\b")
 .replace(/\\f/g, "\\f");
// remove non-printable and other non-valid JSON chars
const b = a.replace(/[\u0000-\u0019]+/g,""); 
const eventdata = JSON.parse(b);

export default eventdata;