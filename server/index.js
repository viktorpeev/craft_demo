const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

const path = require('path');

app.listen(
    PORT,
    () => console.log(`works on http://localhost:${PORT}`)
)

app.use(cors());

app.use(express.json());

app.use(express.static('client'));

app.get('/cards', (req, res) => {
    res.status(200).send({
        "parks": [
            {
                "title": "Arches",
                "link": "https://www.nps.gov/arch/index.htm",
                "linkText": "Learn More",
                "body": "Discover a landscape of contrasting colors, land forms, and textures unlike any other. The park has over 2,000 natural stone arches, hundreds of soaring pinnacles, massive rock fins, and giant balanced rocks. This red-rock wonderland will amaze you with its formations, refresh you with its trails, and inspire you with its sunsets.",
                "image": "https://www.nps.gov/common/uploads/grid_builder/arch/crop16_9/8E09FEF8-1DD8-B71B-0BB792C19048545A.jpg?width=350&quality=90&mode=crop",
                "category": "Natural"
            },
            {
                "title": "Boston",
                "link": "https://www.nps.gov/bost/index.htm",
                "linkText": "Learn More",
                "body": "Discover how one city could be the Cradle of Liberty, site of the first major battle of American Revolution, and home to many who espoused that freedom can be extended to all.",
                "image": "https://www.nps.gov/common/uploads/grid_builder/bost/crop16_9/79889BD1-0F7C-4CE8-3EF501B6CDD42702.jpg?width=465&quality=90&mode=crop",
                "category": "Historical"
            },
            {
                "title": "San Francisco Maritime",
                "link": "",
                "linkText": "Learn More",
                "body": "Located in the Fisherman's Wharf neighborhood, San Francisco Maritime National Historical Park offers visitors the sights, sounds, smells and stories of Pacific Coast maritime history. The Park includes a magnificent fleet of historic ships, a Visitor Center, Maritime Museum, Maritime Research Center, and Aquatic Park Historic District.",
                "image": "https://www.nps.gov/common/uploads/grid_builder/safr/crop16_9/475585C0-B398-2C5C-ED0BF5714128EAB4.jpg?width=465&quality=90&mode=crop",
                "category": "Historical"
            },
            {
                "title": "National Lakeshore Michigan",
                "link": "https://www.nps.gov/piro/index.htm",
                "linkText": "Learn More",
                "body": "Sandstone cliffs, beaches, waterfalls, sand dunes, inland lakes, deep forest, and wild shoreline beckon you to visit Pictured Rocks National Lakeshore. The power of Lake Superior shapes the park's coastal features and affects every ecosystem, creating a unique landscape to explore. Hiking, camping, sightseeing, and four-season outdoor opportunities abound.",
                "image": "",
                "category": "Natural"
            },
            {
                "title": "",
                "link": "https://www.nps.gov/yell/index.htm",
                "linkText": "Learn More",
                "body": "On March 1, 1872, Yellowstone became the first national park for all to enjoy the unique hydrothermal and geologic features. Within Yellowstone's 2.2 million acres, visitors have unparalleled opportunities to observe wildlife in an intact ecosystem, explore geothermal areas that contain about half the world's active geysers, and view geologic wonders like the Grand Canyon of the Yellowstone River.",
                "image": "https://www.nps.gov/common/uploads/grid_builder/yell/crop16_9/DF7D12E9-9F55-86A0-D4FC3F4A3BD693AE.jpg?width=350&quality=90&mode=crop",
                "category": "Natural"
            },
            {
                "title": "Martin Luther King, Jr. Memorial",
                "link": "https://www.nps.gov/mlkm/index.htm",
                "linkText": "Learn More",
                "body": "Located in downtown Washington, DC, the memorial honors Martin Luther King, Jr.'s legacy and the struggle for freedom, equality, and justice. A prominent leader in the modern civil rights movement, Dr. King was a tireless advocate for racial equality, working class, and the oppressed around the world.",
                "image": "https://www.nps.gov/common/uploads/grid_builder/mlkm/crop16_9/1223C485-BDE3-9D3B-E37DF625C61B598E.jpg?width=465&quality=90&mode=crop",
                "category": "Monument"
            },
        ]
    })
})