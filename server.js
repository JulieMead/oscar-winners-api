const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const oscarsYear = {
    2020: {
        'title': 'NomadLand',
        'yearWon' : 2020,
        'director': 'Chloe Zhao',
        'totalOscarsWon': 3,
        'stars': ['Frances Mcdormand', 'David Strathairn'],
        'genre': 'drama',
        'summary': 'A woman in her sixties, after losing everything in the Great Recession, embarks on a journey through the American West, living as a van-dwelling modern-day nomad.'
    },
    2019: {
        'title' : 'Parasite',
        'yearWon': 2019,
        'director': 'Bong Joon Ho',
        'totalOscarsWon': 4,
        'stars': ['Song Kang-Ho', 'Sun-Kyun Lee'],
        'genre': ['comedy', 'drama', 'thriller'],
        'summary': 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.'

    },
    2018: {
        'title' : 'Green Book',
        'yearWon': 2018,
        'director': 'Peter Farrelly',
        'totalOscarsWon': 3,
        'stars': ['Viggo Mortensen', 'Mahershala Ali'],
        'genre': ['biography', 'comedy', 'drama'],
        'summary': 'A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.'

    },
    2017: {
        'title' : 'The Shape of Water',
        'yearWon': 2017,
        'director': 'Guillermo Del Toro',
        'totalOscarsWon': 4,
        'stars': ['Sally Hawkins', 'Octavia Spencer'],
        'genre': ['drama', 'fantasy', 'romance'],
        'summary': 'At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.'

    },
    2016: {
        'title' : 'Moonlight',
        'yearWon': 2016,
        'director': 'Barry Jenkins',
        'totalOscarsWon': 3,
        'stars': ['Mahershala Ali', 'Naomie Harris'],
        'genre': 'drama',
        'summary': 'A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.'

    },
    2015: {
        'title' : 'Spotlight',
        'yearWon': 2015,
        'director': 'Tom Mccarthy',
        'totalOscarsWon': 2,
        'stars': ['Mark Ruffalo', 'Michael Keaton'],
        'genre': ['biography', 'crime', 'drama'],
        'summary': 'The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.'

    },
    2014: {
        'title' : 'Birdman or (the unexpected virtue of ignorance)',
        'yearWon': 2014,
        'director': 'Alejandro G. Inarritu',
        'totalOscarsWon': 4,
        'stars': ['Michael Keaton', 'Edward Norton'],
        'genre': ['drama', 'comedy'],
        'summary': 'A washed-up superhero actor attempts to revive his fading career by writing, directing, and starring in a Broadway production.'

    },
    2013: {
        'title' : '12 Years A Slave',
        'yearWon': 2013,
        'director': 'Steve Mcqueen',
        'totalOscarsWon': 3,
        'stars': ['Chiwetel Ejiofor', 'Michael Kenneth Williams'],
        'genre': ['biography', 'drama', 'history'],
        'summary': 'In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.'

    },
    2012: {
        'title' : 'Argo',
        'yearWon': 2012,
        'director': 'Ben Affleck',
        'totalOscarsWon': 3,
        'stars': ['Ben Affleck', 'Bryan Cranston'],
        'genre': ['biography', 'drama', 'thriller'],
        'summary': 'Acting under the cover of a Hollywood producer scouting a location for a science fiction film, a CIA agent launches a dangerous operation to rescue six Americans in Tehran during the U.S. hostage crisis in Iran in 1979.'

    },
    2011: {
        'title' : 'The Artist',
        'yearWon': 2011,
        'director': 'Michael Hazanavicius',
        'totalOscarsWon': 5,
        'stars': ['Jean Dujardin', 'Berenice Bejo'],
        'genre': ['comedy', 'drama', 'romance'],
        'summary': 'An egomaniacal film star develops a relationship with a young dancer against the backdrop of Hollywood silent era.'

    },
    2010: {
        'title' : 'The Kings Speech',
        'yearWon': 2010,
        'director': 'Tom Hooper',
        'totalOscarsWon': 4,
        'stars': ['Colin Firth', 'Geoffrey Rush'],
        'genre': ['biography', 'drama', 'history'],
        'summary': 'The story of King George VI, his impromptu ascension to the throne of the British Empire in 1936, and the speech therapist who helped the unsure monarch overcome his stammer.'

    },
    2009: {
        'title' : 'the hurt locker',
        'yearWon': 2009,
        'director': 'kathryn bigelow',
        'totalOscarsWon': 6,
        'stars': ['jeremy renner', 'anthony mackie'],
        'genre': ['war', 'drama', 'thriller'],
        'summary': 'During the Iraq War, a Sergeant recently assigned to an army bomb squad is put at odds with his squad mates due to his maverick way of handling his work.'

    },
    2008: {
        'title' : 'slumdog millionaire',
        'yearWon': 2008,
        'director': ['danny boyle', 'loveleen tandan'],
        'totalOscarsWon': 8,
        'stars': ['dev patel', 'freida pinto'],
        'genre': ['drama', 'romance'],
        'summary': 'A Mumbai teenager reflects on his life after being accused of cheating on the Indian version of "Who Wants to be a Millionaire?".'

    },
    2007: {
        'title' : 'no country for old men',
        'yearWon': 2007,
        'director': ['ethan cohen', 'joel cohen'],
        'totalOscarsWon': 4,
        'stars': ['tommy lee jones', 'javier bardem'],
        'genre': ['crime', 'drama', 'thriller'],
        'summary': 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.'

    },
    2006: {
        'title' : 'the departed',
        'yearWon': 2006,
        'director': 'martin scorcese',
        'totalOscarsWon': 4,
        'stars': ['leonardo dicaprio', 'matt damon'],
        'genre': ['crime', 'drama', 'thriller'],
        'summary': 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.'

    },
    2005: {
        'title' : 'crash',
        'yearWon': 2005,
        'director': 'paul haggis',
        'totalOscarsWon': 3,
        'stars': ['don cheadle', 'sandra bullock'],
        'genre': ['crime', 'drama', 'thriller'],
        'summary': 'Los Angeles citizens with vastly separate lives collide in interweaving stories of race, loss and redemption.'

    },
    2004: {
        'title' : 'million dollar baby',
        'yearWon': 2004,
        'director': 'clint eastwood',
        'totalOscarsWon': 4,
        'stars': ['hilary swank', 'clint eastwood'],
        'genre': ['drama', 'sports'],
        'summary': 'A determined woman works with a hardened boxing trainer to become a professional.'

    },
    2003: {
        'title' : 'the lord of the rings: return of the king',
        'yearWon': 2003,
        'director': 'peter jackson',
        'totalOscarsWon': 11,
        'stars': ['elijah wood', 'viggo mortensen'],
        'genre': ['action', 'adventure', 'drama'],
        'summary': 'Gandalf and Aragorn lead the World of Men against Saurons army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.'

    },
    2002: {
        'title' : 'chicago',
        'yearWon': 2002,
        'director': 'rob marshall',
        'totalOscarsWon': 6,
        'stars': ['renee zellweger', 'catherine zeta-jones'],
        'genre': ['comedy', 'crime', 'musical'],
        'summary': 'Two death-row murderesses develop a fierce rivalry while competing for publicity, celebrity, and a sleazy lawyers attention.'

    },
    2001: {
        'title' : 'a beautiful mind',
        'yearWon': 2001,
        'director': 'ron howard',
        'totalOscarsWon': 4,
        'stars': ['russell crowe', 'ed harris'],
        'genre': ['biography', 'drama'],
        'summary': 'After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.'

    },
    2000: {
        'title' : 'gladiator',
        'yearWon': 2000,
        'director': 'ridley scott',
        'totalOscarsWon': 5,
        'stars': ['russell crowe', 'joaquin phoenix'],
        'genre': ['action', 'adventure', 'drama'],
        'summary': 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.'

    },
    1999: {
        'title' : 'american beauty',
        'yearWon': 1999,
        'director': 'sam mendes',
        'totalOscarsWon': 5,
        'stars': ['kevin spacey', 'annette bening'],
        'genre': 'drama',
        'summary': 'A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughters best friend..'

    },
    1998: {
        'title' : 'shakespeare in love',
        'yearWon': 1998,
        'director': 'john madden',
        'totalOscarsWon': 7,
        'stars': ['gwyneth paltrow', 'joseph fiennes'],
        'genre': ['comedy', 'drama', 'history'],
        'summary': 'The worlds greatest ever playwright, William Shakespeare, is young, out of ideas and short of cash, but meets his ideal woman and is inspired to write one of his most famous plays.'

    },
    1997: {
        'title' : 'titanic',
        'yearWon': 1997,
        'director': 'james cameron',
        'totalOscarsWon': 11,
        'stars': ['kate winslet', 'leonardo dicaprio'],
        'genre': ['drama', 'romance'],
        'summary': 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.'

    },
    1996: {
        'title' : 'the english patient',
        'yearWon': 1996,
        'director': 'anthony minghella',
        'totalOscarsWon': 9,
        'stars': ['ralph fiennes', 'juliette binoche'],
        'genre': ['drama', 'romance', 'war'],
        'summary': 'At the close of World War II, a young nurse tends to a badly-burned plane crash victim. His past is shown in flashbacks, revealing an involvement in a fateful love affair.'

    },
    1995: {
        'title' : 'braveheart',
        'yearWon': 1995,
        'director': 'mel gibson',
        'totalOscarsWon': 5,
        'stars': ['mel gibson', 'sophie marceau'],
        'genre': ['biography', 'drama', 'history'],
        'summary': 'Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.'

    },
    1994: {
        'title' : 'forrest gump',
        'yearWon': 1994,
        'director': 'robert zemeckis',
        'totalOscarsWon': 6,
        'stars': ['tom hanks', 'robin wright'],
        'genre': ['drama', 'romance'],
        'summary': 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.'

    },
    1993: {
        'title' : 'schindler\'s list',
        'yearWon': 1993,
        'director': 'steven spielberg',
        'totalOscarsWon': 7,
        'stars': ['liam neeson', 'ralph fiennes'],
        'genre': ['biography', 'drama', 'history'],
        'summary': 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.'

    },
    1992: {
        'title' : 'unforgiven',
        'yearWon': 1992,
        'director': 'clint eastwood',
        'totalOscarsWon': 4,
        'stars': ['clint eastwood', 'gene hackman'],
        'genre': ['drama', 'western'],
        'summary': 'Retired Old West gunslinger William Munny reluctantly takes on one last job, with the help of his old partner Ned Logan and a young man, The "Schofield Kid."'

    },
    1991: {
        'title' : 'the silence of the lambs',
        'yearWon': 1991,
        'director': 'jonathan demme',
        'totalOscarsWon': 5,
        'stars': ['jodie foster', 'anthony hopkins'],
        'genre': ['crime', 'drama', 'thriller'],
        'summary': 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.'

    },
    1990: {
        'title' : 'dances with wolves',
        'yearWon': 1990,
        'director': 'kevin costner',
        'totalOscarsWon': 7,
        'stars': ['kevin costner', 'mary mcdonnell'],
        'genre': ['adventure', 'drama', 'western'],
        'summary': 'Lieutenant John Dunbar, assigned to a remote western Civil War outpost, befriends wolves and Native Americans, making him an intolerable aberration in the military.'

    },

    'unknown': {
        'title' : 'unknown',
        'yearWon': 0,
        'director': 'unknown',
        'totalOscarsWon': 0,
        'stars': 'unknown',
        'summary': 'unknown'

    }

}

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:year', (request,response)=>{
    const awardYear = request.params.year
    if( oscarsYear[awardYear] ){
        response.json(oscarsYear[awardYear])
    }
    else{
        response.json(oscarsYear['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}`)
})