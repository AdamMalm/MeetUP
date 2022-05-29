const s = `{
   "categories":[
      {
         "categoryId":1,
         "name":"Selected for you"
      },
      {
         "categoryId":2,
         "name":"Events near you"
      },
      {
         "categoryId":3,
         "name":"Events this week"
      }
   ],
   "events":[
      {
         "eventId":1,
         "title":"Duck feeding",
         "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         "categoryId":1,
         "categoryName":"Selected for you",
         "location":"Ducklake",
         "eventImage":"https://images.unsplash.com/photo-1620573083867-730048a6cb33?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631",
         "noGoing":"842",
         "imageGoing1":"https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471",
         "imageGoing2":"https://images.unsplash.com/photo-1526795443948-005b48ce4791?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470",
         "imageGoing3":"https://images.unsplash.com/photo-1503443062224-9f77d743cf25?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774",
         "year": "2022",
         "month":"June",
         "day": "Monday",
         "time":"12.30"
      },
      {
         "eventId":2,
         "title":"Cooking class",
         "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         "categoryId":1,
         "categoryName":"Selected for you",
         "location":"88 Begley Street",
         "eventImage":"https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374",
         "noGoing":"5",
         "imageGoing1":"https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471",
         "imageGoing2":"https://images.unsplash.com/photo-1526795443948-005b48ce4791?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470",
         "imageGoing3":"https://images.unsplash.com/photo-1503443062224-9f77d743cf25?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774",
         "year": "2022",
         "month":"June",
         "day": "Monday",
         "time":"12.30"
      },
      {
         "eventId":3,
         "title":"Book Club",
         "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         "categoryId":1,
         "categoryName":"Selected for you",
         "location":"Bookstreet 123",
         "eventImage":"https://images.unsplash.com/photo-1589998059171-988d887df646?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476",
         "noGoing":"10",
         "imageGoing1":"https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471",
         "imageGoing2":"https://images.unsplash.com/photo-1526795443948-005b48ce4791?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470",
         "imageGoing3":"https://images.unsplash.com/photo-1503443062224-9f77d743cf25?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774",
         "year": "2022",
         "month":"June",
         "day": "Monday",
         "time":"12.30"
      },
      {
       "eventId":4,
       "title":"Duck feeding",
       "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
       "categoryId":2,
       "categoryName":"Events near you",
       "location":"Ducklake",
       "eventImage":"https://images.unsplash.com/photo-1620573083867-730048a6cb33?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631",
       "noGoing":"123",
       "imageGoing1":"https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471",
       "imageGoing2":"https://images.unsplash.com/photo-1526795443948-005b48ce4791?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470",
       "imageGoing3":"https://images.unsplash.com/photo-1503443062224-9f77d743cf25?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774",
       "year": "2022",
       "month":"June",
       "day": "Monday",
       "time":"12.30"
    },
    {
       "eventId":5,
       "title":"Cooking class",
       "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
       "categoryId":2,
       "categoryName":"Events near you",
       "location":"88 Begley Street",
       "eventImage":"https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374",
       "noGoing":"8",
       "imageGoing1":"https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471",
       "imageGoing2":"https://images.unsplash.com/photo-1526795443948-005b48ce4791?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470",
       "imageGoing3":"https://images.unsplash.com/photo-1503443062224-9f77d743cf25?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774",
       "year": "2022",
         "month":"June",
         "day": "Monday",
         "time":"12.30"
    },
    {
       "eventId":6,
       "title":"Book Club",
       "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
       "categoryId":2,
       "categoryName":"Events near you",
       "location":"Bookstreet 123",
       "eventImage":"https://images.unsplash.com/photo-1589998059171-988d887df646?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476",
       "noGoing":"7",
       "imageGoing1":"https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471",
       "imageGoing2":"https://images.unsplash.com/photo-1526795443948-005b48ce4791?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470",
       "imageGoing3":"https://images.unsplash.com/photo-1503443062224-9f77d743cf25?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774",
       "year": "2022",
         "month":"June",
         "day": "Monday",
         "time":"12.30"
    },
    {
       "eventId":7,
       "title":"Duck feeding",
       "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
       "categoryId":3,
       "categoryName":"Events this week",
       "location":"Ducklake",
       "eventImage":"https://images.unsplash.com/photo-1620573083867-730048a6cb33?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631",
       "noGoing":"420",
       "imageGoing1":"https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471",
       "imageGoing2":"https://images.unsplash.com/photo-1526795443948-005b48ce4791?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470",
       "imageGoing3":"https://images.unsplash.com/photo-1503443062224-9f77d743cf25?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774",
       "year": "2022",
         "month":"June",
         "day": "Monday",
         "time":"12.30"
    },
    {
       "eventId":8,
       "title":"Cooking class",
       "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
       "categoryId":3,
       "categoryName":"Events this week",
       "location":"88 Begley Street",
       "eventImage":"https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374",
       "noGoing":"1",
       "imageGoing1":"https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471",
       "imageGoing2":"https://images.unsplash.com/photo-1526795443948-005b48ce4791?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470",
       "imageGoing3":"https://images.unsplash.com/photo-1503443062224-9f77d743cf25?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774",
       "year": "2022",
         "month":"June",
         "day": "Monday",
         "time":"12.30"
    },
    {
       "eventId":9,
       "title":"Book Club",
       "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
       "categoryId":3,
       "categoryName":"Events this week",
       "location":"Bookstreet 123",
       "eventImage":"https://images.unsplash.com/photo-1589998059171-988d887df646?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476",
       "noGoing":"66",
       "imageGoing1":"https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471",
       "imageGoing2":"https://images.unsplash.com/photo-1526795443948-005b48ce4791?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470",
       "imageGoing3":"https://images.unsplash.com/photo-1503443062224-9f77d743cf25?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774",
       "year": "2022",
         "month":"June",
         "day": "Monday",
         "time":"12.30"
    }
   ]
}`;

const a = s
	.replace(/\\n/g, "\\n")
	.replace(/\\'/g, "\\'")
	.replace(/\\"/g, '\\"')
	.replace(/\\&/g, "\\&")
	.replace(/\\r/g, "\\r")
	.replace(/\\t/g, "\\t")
	.replace(/\\b/g, "\\b")
	.replace(/\\f/g, "\\f");
// remove non-printable and other non-valid JSON chars
const b = a.replace(/[\u0000-\u0019]+/g, "");
const eventdata = JSON.parse(b);

export default eventdata;
