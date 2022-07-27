var express=require ('express');
var app=express();

app.get("/",(req,res)=>{
    res.send(
        "<h1> Vihay Sales</h1>"
        +"<hr/>"
        +"<h3>smart Devices for sale</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Laptops</li>"
        +"<li>Mobile phones</li>"
        +"<li>smart Watches</li>"
       
        +"<li>gaming consoles</li>"
        +"<ol/>"
    );
});

app.get("/aboutus",(req,res)=>{
    res.send(
        "<h1> Vihay Sales</h1>"
        +"<hr/>"
        +"<h3>Doing ordinary Things</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Chief Mrntor:Yuvraj Patil</li>"
        +"<li>Rector:Rohan</li>"
        +"<li>smart Watches</li>"
       
        +"<li>gaming consoles</li>"
        +"<ol/>"
    );
});
var server=app.listen(9000);
console.log("online shopping running on port no 9000")