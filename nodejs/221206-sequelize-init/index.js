const express = require("express");
const app = express();
const port = 8000;
const {User} = require("./model/index");

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const router = require("./routes");
const userRouter = require("./routes/user");
app.get('/login', (req,res) => {res.render('login')});
app.post("/main", async (req, res) => {
    console.log(req.body)
    let result = await User.findOne({
        where: {
            id : req.body.id
        }
    })
    console.log('result', result)
    res.render('index', {data: result})
  });
app.use('/visitor', router);
app.use('/user', userRouter);
// localhost:8000/visitor~~~~

app.get('*', (req, res)=>{
    res.send("주소가 존재하지 않습니다. 다시 한 번 확인해주세요.");
});

app.listen(port, ()=>{
    console.log("server open: ", port);
});

