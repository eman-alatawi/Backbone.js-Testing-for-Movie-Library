var FIXTURES= window.FIXTURES || {};

FIXTURES.server ={
    'movies':{
         'ok':['200',
             {'Content-Type':'application/json'},
            JSON.stringify([FIXTURES.movies.noRestrictions])
        ]

    }
}