const cors = require('cors')
const PORT = process.env.PORT || 8080;
const express = require('express');
const app = express();
app.use(express.json())
app.use(cors())

var admin = require("firebase-admin");

var serviceAccount = require("./secretkey/key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});



app.get('/uruncek/:kategoriid', async (req, res) => {
    const db = admin.firestore();
    urunArray = [];
    const snapshot = await db.collection('urunler').get();
    snapshot.forEach((doc) => {
        if(doc.data().kategori == req.params.kategoriid){
            console.log(doc.data());
            urunArray.push(doc.data());
        }
    });
    res.send(urunArray)
});


app.get('/urundetaycek/:urunisim', async (req, res) => {
    const db = admin.firestore();
    urunArray = [];
    const snapshot = await db.collection('urunler').get();
    snapshot.forEach((doc) => {
        if(doc.data().isim == req.params.urunisim){
            console.log(doc.data());
            urunArray.push(doc.data());
        }
    });
    res.send(urunArray)
});




app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

