var express = require('express');
var fs = require('fs');
var router = express.Router();

var MyFolder = '/Users/jiraphat/Desktop/ProjectHub/test_project/AV_ca/'
var files = fs.readdirSync(MyFolder);

var data = {

    }
    /* GET home page. */
router.get('/', function(req, res, next) {

    console.log(data);
    for (var file of files) {
        // console.log(file)
        if (file == '.DS_Store') {
            // pass
        } else {
            _file = fs.readdirSync(MyFolder + file);
            console.log(_file);

            for (var __file of _file) {
                // console.log(__file);

                if (__file == '.DS_Store') {
                    // pass
                } else {
                    path = fs.readdirSync(MyFolder + file + '/' + __file)
                        // console.log(path)

                    // for (var _path of path) {
                    // console.log(_path)
                    var str_split = path[0].split('.')

                    data[str_split[0]] = []

                    if (data[str_split[0]]) {
                        console.log('มี' + path);
                        data[str_split[0]].push({
                            path_image: '/AV/' + file + '/' + __file + '/' + path[0],
                            path_video: '/AV/' + file + '/' + __file + '/' + path[1],
                        });

                    } else {
                        console.log('ไม่มี' + path);
                        data[str_split[0]].push({
                            path_image: '/AV/' + file + '/' + __file + '/' + path[0],
                            path_video: '/AV/' + file + '/' + __file + '/' + path[1],
                        });


                    }

                }
            }
        }

    }
    console.log(data)

    res.render('index', {
        title: 'Express',
        data: data,
    });
});


module.exports = router;