    const express = require("express")
    const app = express()
    const port = process.env.PORT || 3000
    const path = require("path");

    const { createClient } = require('@supabase/supabase-js');
    const supabaseUrl = 'https://hknrbmfihwwaepwhfhbi.supabase.co'
    const supabaseKey = process.env.SUPABASE_KEY

    const supabase = createClient(supabaseUrl, supabaseKey)
 

    app.use(express.json())


    app.use(function (req, res, next) {
        console.log("== Request received")
        console.log("  - METHOD:", req.method)
        console.log("  - URL:", req.url)
        console.log("  - HEADERS:", req.headers)
        next()
    })
    app.use(express.static(path.join(__dirname, "dist")));

    app.get('/', function (req, res, next) {
        res.sendFile(__dirname + "/dist/index.html");
    });
   
    app.get('/api/Hazards', async (req, res) => {
        try {
            const { data, error } = await supabase.from('hazards').select('*');

            if (error) {
                throw error;
            }

            res.json({ data  });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }

    });

    app.post('/api/addHazard', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('hazards')
                .insert([
                    { type: req.body.type, latitude: req.body.latitude, longitude: req.body.longitude, text: req.body.text, creator_id: req.body.creator_id, radius: req.body.radius, location: req.body.location},
                ])
                .select()

            if (error) {
                throw error;
            }

            res.json({ data });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
    
    // async function to get the sensor's current status based on
    // the sensor's name

    app.get('*', function (req, res, next) {
        res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });






    app.listen(port, function () {
        console.log("== Server is listening on port:", port)
    })

