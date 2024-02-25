const mongoose  = require ("mongoose");
const Temple = require ("./module/Temple")


const dummydata =  [
 {
    name:'KedarNath',
    img: 'https://th.bing.com/th?id=OIP.4Ooybe1T1JHZ5xAAUaRUvQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
    Address : "Uttrakhand India",
    about : 'Kedarnath Temple (Sanskrit: केदारनाथ मंदिर, IAST: Kēdāranātha Mandira, lit temple of the God of the field is a Hindu temple, one of the twelve jyotirlinga of Shiva. The temple is located on the Garhwal Himalayan range [1] near the Mandakini river, in the state of Uttarakhand, India. Due to extreme weather conditions, the temple is open to the general public only between the months of April (Akshaya Tritiya) and November (Kartik Purnima, the autumn full moon). During the winters, the vigraha (deity) of the temple is carried down to Ukhimath to be worshipped for the next six months. Kedarnath is seen as a homogeneous form of Shiva, the Lord of Kedarkhand, the historical name of the region The temple is not directly accessible by road and has to be reached by a 22 kilometres (14 mi) uphill trek from Gaurikund. Pony, mule and manchan service is available to reach the temple. According to Hindu legends, the temple was initially built by the Pandavas, and is one of the twelve Jyotirlingas, the holiest Hindu shrines of Shiva.[1] The Pandavas were supposed to have pleased Shiva by doing penance in Kedarnath.[1][3] The temple is one of the four major sites in Indias Chota Char Dham pilgrimage of Northern Himalayas and is the first of the Panch Kedar pilgrimage sites. This temple is the highest among the 12 Jyotirlingas.[4] It is one of the 275 paadal petra sthalams expounded in the Tevaram, a sacred Tamil Shaivite text written during the 6th and 7th centuries by 63 saints called Nayanars. This temple is sung of by Thirugnanasambandar, Appar, Sundarar and Sekkizhar in their Tevaram text Kedarnath was the worst affected area during the 2013 flash floods in North India. The temple complex, surrounding areas, and Kedarnath town suffered extensive damage, but the temple structure did not suffer any major damage, apart from a few cracks on one side of the four walls which was caused by the flowing debris from the higher mountains. A large rock among the debris acted as a barrier, protecting the temple from the flood. The surrounding premises and other buildings in the market area were heavily damaged'
 },
 {
    name:'Mahakal',
    img:'https://images.unsplash.com/photo-1658730487395-dcc99f5d997c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dWpqYWlufGVufDB8fDB8fHww',
    Address : 'Ujjain India ',
    about : "Mahakal, located in Ujjain, Madhya Pradesh, is one of the most revered and ancient temples dedicated to Lord Shiva in India. This sacred pilgrimage site holds immense religious significance and cultural importance. The presiding deity, Lord Mahakaleshwar, is believed to be the embodiment of time and the ruler of the past, present, and future. The temple is situated on the banks of the holy Shipra River and is an integral part of the twelve Jyotirlingas, which are considered to be the most powerful manifestations of Lord Shiva. The Mahakal temple complex is not only a spiritual haven but also a stunning architectural marvel, showcasing a blend of Maratha, Rajput, and Mughal styles. Pilgrims from across the country and beyond visit Mahakal to seek the divine blessings of Lord Shiva and to participate in the elaborate rituals that take place daily. The Bhasma Aarti, where sacred ash is applied to the idol, is a unique and awe-inspiring ritual that attracts devotees and tourists alike. Apart from its religious significance, Ujjain holds a rich historical and cultural legacy. The city itself is steeped in mythology and has been a center of learning and astronomy since ancient times. The Kumbh Mela, held every 12 years, adds to the grandeur of Mahakal and draws millions of pilgrims to Ujjain."
 },


]

mongoose.connect('mongodb://127.0.0.1:27017/Hindu_Temple')
 .then(()=>{console.log('db connected')})
 .catch((Err)=>{console.log(Err)})

 async function add(){
   await Temple.deleteMany({});
   await Temple.insertMany(dummydata);
   console.log('DB seeded!');
 }
 add();
