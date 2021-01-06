const express = require('express')
const crypto = require("crypto")
const shortcode = require('./models/ShortCode')

const app = express();

var shortURLs = []

//Endpoint for creating a shortcode
//Random or user created
app.get("/shorten", (req,res) => {
    var newName;
    var exists = false

    if(req.query.name == null){
        do{
            exists = false
            newName = crypto.randomBytes(3).toString('hex')
            shortURLs.forEach(function(item, index){
                if(newName == item.name)
                    exists = true
            })
        }while(exists)
    }

    else{
        newName = req.query.name
        if(newName.length < 4 || /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(newName)){
            res.send("Error: Shortcode must be 4 or more characters and cannot contain special symbols.")
            return
        }
        shortURLs.forEach(function(item, index){
            if(newName == item.name){
                res.send("Error: Shortcode already exists.")
                exists = true
            }
        })

        if(exists)
            return
    }

    var newShortCode = new shortcode({
        name: newName,
        sourceURL: req.query.url,
        dateCreated: new Date(),
        lastUsed: new Date(),
        amountUsed: 0
    })

    shortURLs.push(newShortCode)

    res.send(newName)
})

//Endpoint for accessing the url
app.get("/:shortcode", (req,res) => {
    var exists = false
    shortURLs.forEach(function(item, index){
        if(item.name == req.params.shortcode){
            res.redirect(item.sourceURL)
            item.lastUsed = new Date()
            item.amountUsed++
            exists = true
        }
    })

    if(exists)
        return

    res.send("Error: Shortcode does not exist.")
})

//Endpoint for seeing stats about a specific shortcode
app.get("/:shortcode/stats", (req,res) => {
    var exists = false
    shortURLs.forEach(function(item, index){
        if(item.name == req.params.shortcode){
            res.send("Shortcode: " +item.name + 
                "<br/>Registered: " + item.dateCreated + 
                "<br/>Last used: " + item.lastUsed + 
                "<br/>Times used: " + item.amountUsed)
            exists = true
        }
    })

    if(exists)
        return

    res.send("Error: Shortcode does not exist.")
})

module.exports = app.listen(3000)