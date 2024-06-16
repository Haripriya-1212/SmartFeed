const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User')

const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const jwt = require('jsonwebtoken');
const secret = 'vhjcg67tfgvb3f7x34d7rxbxy3g';

const cookieParser = require('cookie-parser');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const fs = require('fs')
const path = require('path');
const Post = require('./models/Post');

const app = express();

app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
// app.use('/uploads', express.static(__dirname + '/uploads'));

// connect to mongoose
mongoose.connect('mongodb+srv://haripriya01212:w8HzKcbknJQYFmPL@smartfeeddb.qfgrwee.mongodb.net/?retryWrites=true&w=majority&appName=smartfeedDb').then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

// Register user
app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const userDoc = await User.create({ username, email, password: bcrypt.hashSync(password, salt) });
        res.json(userDoc);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

// login user
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const userDoc = await User.findOne({username});
        const passOk = bcrypt.compareSync(password, userDoc.password);
        // res.json(passOk);
        if(passOk){
            // Logged in
            // payload, secret/private key, options, callback
            jwt.sign({username, id:userDoc._id},secret, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json(
                    {
                        id:userDoc._id,
                        username
                    }
                );
                // res.json(token);
            });
        }
        else{
            res.status(400).json('Wrong credentials');
        }
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

// to check for logged in and change header
app.get('/profile', (req, res) => {
    // res.json(req.cookies);
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if(err) throw err;
        res.json(info);
    });
});

// logout user
app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok');
})

// create blogpost - add to db
app.post('/post', upload.single('file'), async(req,res) => {
    try {
        const { originalname, path } = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = path + '.' + ext;
        fs.renameSync(path, newPath);

        const {token} = req.cookies;
        jwt.verify(token, secret, {}, async (err, info) => {
            if(err) throw err;

            const {title,summary,content} = req.body;
        
            const postDoc = await Post.create({
            title,
            summary,
            content,
            cover: newPath,
            author: info.id,
        })
        res.json(postDoc);
        });

    } catch (err) {
        console.error('File upload error:', err);
        res.status(500).json({ error: err.message });
    }
})

// display posts in IndexPage
app.get('/post', async (req, res) => {
    // const posts = await Post.find();
    res.json(await Post.find()
    .limit(20)
);

})

app.get('/post/:id', async (req, res) => {
    const {id} = req.params;
    const postDoc = await Post.findById(id);
    res.json(postDoc)
    // res.json({id})
})


const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

