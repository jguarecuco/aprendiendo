var rsync = require("sync-request");
var fiber=require("fibers");
var genreslst = [];
var idx=0;

/*var res = rsync('GET', "http://pelisplus.co/peliculas-2019/");
//console.log(res.body.toString());
var contenido = res.body.toString();
var cherio = require("cherio");
var $ = cherio.load(contenido);
console.log($(".item-pelicula>a"));*/
 //discover(1);
//getMovie("dumbo",2019);
//cloneurl2("https://uqload.com/9mx9tpnwn4o5.html");
var MD5 = function(d){result = M(V(Y(X(d),8*d.length)));return result.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}
function genres() {
    var cherio = require("cherio");
    var res = rsync('GET', "http://pelisplus.co/");
    var contenido = res.body.toString();
    var $ = cherio.load(contenido);
    var genrelist = $(".genres>ul>li>a");
    genrelist.each(function (a, c) {
        //console.log($(c).attr("href").replace("/genero/", "").replace("/", ""));
        var h = $(c).attr("href").replace("/genero/", "").replace("/", "")
        //console.log(h);
        //genreslst.push($(c).attr("href").replace("/genero/", "").replace("/", ""));
        genreslst.push(h);
    });
   // console.log(genreslst);
}
function genreseries() {
    var cherio = require("cherio");
    var res = rsync('GET', "http://pelisplus.co/series/");
    var contenido = res.body.toString();
    var $ = cherio.load(contenido);
    var genrelist = $(".genres>ul>li>a");
    genrelist.each(function (a, c) {
        //console.log($(c).attr("href").replace("/genero/", "").replace("/", ""));
        var h = $(c).attr("href").split("/")[3];
        //console.log(h);
        //genreslst.push($(c).attr("href").replace("/genero/", "").replace("/", ""));
        genreslst.push(h);
    });
    console.log(genreslst);
}
function getList(genre,page) {
   // console.log(genre,page);
    var querystring = require('querystring');
    var request = require('request');
    var form = {
        page: page,
        type: "genre",
        slug: genre
    };
    var formData = querystring.stringify(form);
    var contentLength = formData.length;
    var headers = {
        'Content-Length': contentLength,
        "host": "pelisplus.co",
        "referer": "http://pelisplus.co/",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        "content-type": "application/x-www-form-urlencoded",
        "cookie": "__cfduid=d1220d922b04ef7ddd4a0ebf82f2a1f501558193068; _ga=GA1.2.2032978504.1558193088; splash_i=false; _fbp=fb.1.1558193107162.1663385865; _gid=GA1.2.457209974.1558326261; PHPSESSID=lhku0tuhjbsuvbodcn40gaopeo; splashWeb-210-42=2; splashWeb-397-42=1; _gat=1"
    };
    request({
        headers: headers,
        uri: 'http://pelisplus.co/pagination/',
        body: formData,
        method: 'POST'
    }, function (err, res, body) {
        var cherio = require("cherio");
        var $ = cherio.load(body);
        var listItem = $(".item-pelicula>a");
        var info = [];
        listItem.each(function (a, c) {

           // console.log($(c).attr("href"));
            var n = cherio.load($(c).html());
            //console.log(n(".year").text());
            //console.log(n(".item-detail").text());
            var url="http://pelisplus.co" + $(c).attr("href");
            url=url.replace("pelicula","player/movie");
           // console.log(url);
            var id=MD5($(c).attr("href"));

            var  item = {
                url: "http://pelisplus.co" + $(c).attr("href"),
                    urlmovie:url,
                    title: n(".item-detail").text(),

                    year: n(".year").text(),
                    id:id,
                    page:page

               }


            fiber(function(){



                //var moviesuri=getURLMovies(url);
                //var infomovie=searchmovie(item.title,item.year);
                item = {
                    url: "http://pelisplus.co" + $(c).attr("href"),
                    urlmovie:url,
                    title: n(".item-detail").text(),
                   // movieUrls:moviesuri,
                    year: n(".year").text(),
                    id:id,

                    page:page
                }
                console.log("Paso por aca",idx,genre,page);
                  if (movieurls.find({id:id}).count()==0){
                        movieurls.insert(item);
                        //movies.insert(infomovie)
                  }
                 // console.log(item);
                 //info.push(item);

            }).run();
            info.push(item);
        });
        console.log(info.length);
        if(info.length>0){

            getList(genre,page+1);
        }else{
            console.log(genreslst[idx]);
            idx=idx+1;
            getList(genreslst[idx],1);

        }

    });
}
function getSeries(genre,page) {
    // console.log(genre,page);
    var querystring = require('querystring');
    var request = require('request');
    console.log(genre);
    var form = {
        page: page,
        type: "genre",
        slug: genre

    };
    var formData = querystring.stringify(form);
    var contentLength = formData.length;
    var headers = {
        'Content-Length': contentLength,
        "host": "pelisplus.co",
        "referer": "http://pelisplus.co/",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        "content-type": "application/x-www-form-urlencoded",
        "cookie": "__cfduid=d1220d922b04ef7ddd4a0ebf82f2a1f501558193068; _ga=GA1.2.2032978504.1558193088; splash_i=false; _fbp=fb.1.1558193107162.1663385865; _gid=GA1.2.457209974.1558326261; PHPSESSID=lhku0tuhjbsuvbodcn40gaopeo; splashWeb-210-42=2; splashWeb-397-42=1; _gat=1"
    };
    request({
        headers: headers,
        uri: 'http://pelisplus.co/series/pagination/',
        body: formData,
        method: 'POST'
    }, function (err, res, body) {
        var cherio = require("cherio");
        var $ = cherio.load(body);
        var listItem = $(".item-pelicula>a");
        var info = [];
        listItem.each(function (a, c) {

            // console.log($(c).attr("href"));
            var n = cherio.load($(c).html());
            //console.log(n(".year").text());
            //console.log(n(".item-detail").text());
            var url="http://pelisplus.co" + $(c).attr("href");
            url=url.replace("pelicula","player/movie");
            // console.log(url);
            var id=MD5($(c).attr("href"));

            var  item = {
                url: "http://pelisplus.co" + $(c).attr("href"),
                title: n(".item-detail").text(),
                type:"serie",
                year: n(".year").text(),
                id:id,
                page:page,
                seasons:[]
            }

            fiber(function(){
                //var moviesuri=getURLMovies(url);
                //var infomovie=searchmovie(item.title,item.year);
                item = {
                    url: "http://pelisplus.co" + $(c).attr("href"),
                    urlmovie:url,
                    title: n(".item-detail").text(),
                    // movieUrls:moviesuri,
                    year: n(".year").text(),
                    id:id,
                    type:"serie",
                    page:page,
                    seasons:[]
                }

                if (movieurls.find({id:id,type:"serie"}).count()==0){
                    //console.log("Paso por aca",item)
                    movieurls.insert(item);
                  }


            }).run();
            info.push(item);
        });
        console.log(info.length);
        if(info.length>0){

           getSeries(genre,page+1);
        }else{
            console.log(genreslst[idx]);
            idx=idx+1;
           getSeries( genreslst[idx],1);

        }

    });
}
function clonemovie(url) {
    var opciones = {
        url:"",
        headers: {
            "origin": "https://uqload.com",
            "referer": "https://uqload.com/?op=upload_clone",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
            "content-type": "application/x-www-form-urlencoded",
            "cookie":"__cfduid=d1123815e2855b6e505326b659f1c5f491558193689; _ga=GA1.2.918488671.1558193694; __dtsu=1EE70445229B435CDB4B0E4702187CBC; login=jguarecuco; xfsts=9qu1vxgxchf9994i; _gid=GA1.2.1037138146.1558326712; lang=1; adcashufpv3=13797659466181170691705501497; advanced=0; per_page=20; msg=; ref_url=https%3A%2F%2Fuqload.com%2Ffwa3mv6eipum.html; upload_mode=clone; file_id=475255; aff=942"
        },
        form: {
            op: "upload_clone",
            urls: url,
            submit_btn:" Clone URLs "
        }
    }
    var info = null;
    try {
        info = rsync("POST", "https://uqload.com", opciones);
        var lc = info.headers;
        console.log(info.body.toString());
    } catch (ex) {
        console.log(ex);
    }
}

function cloneurl2(url) {
    var querystring = require('querystring');
    var request = require('request');

    var form = {
        op: "upload_clone",
        urls: url,
        submit_btn: " Clone URLs "
    };
    var formData = querystring.stringify(form);
    var contentLength = formData.length;
    var headers = {
        'Content-Length': contentLength,
        "origin": "https://uqload.com",
        "referer": "https://uqload.com/?op=upload_clone",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
        "content-type": "application/x-www-form-urlencoded",
        "cookie": "__cfduid=d1123815e2855b6e505326b659f1c5f491558193689; _ga=GA1.2.918488671.1558193694; __dtsu=1EE70445229B435CDB4B0E4702187CBC; login=jguarecuco; xfsts=9qu1vxgxchf9994i; _gid=GA1.2.1037138146.1558326712; lang=1; adcashufpv3=13797659466181170691705501497; advanced=0; per_page=20; msg=; ref_url=https%3A%2F%2Fuqload.com%2Ffwa3mv6eipum.html; upload_mode=clone; file_id=475255; aff=942"
    };
    request({
        headers: headers,
        uri: 'https://uqload.com',
        body: formData,
        method: 'POST'
    }, function (err, res, body) {
        console.log(res.headers.location);
    });
}
function getSeasons(url){
    var dest=url.replace("http://pelisplus.co","").toString().slice(0,-1);
    var cherio = require("cherio");
    var res = rsync('GET', url);
    var contenido = res.body.toString();
    var $ = cherio.load(contenido);
    var seasons=$(".item-season");
    var seasonsm=[];
    seasons.each(function (idx,item) {
        // console.log($(item).html());
        var ch=cherio.load($(item).html());


        ch("a").each(function (idx1,item1) {
            var obj={
                season:ch(".item-season-title").text().toString().trim(),
                seasonnum:ch(".item-season-title").text().toString().trim().replace("Temporada ","")
            }

            obj["url"]="http://pelisplus.co"+$(item1).attr("href");
            obj["chapter"]=$(item1).text().toString().trim();
            obj["chapternum"]=$(item1).text().toString().trim().replace("Capítulo ","");
            var chapter=parseInt(obj.chapternum);
            if(obj.chapternum.indexOf("-")>0){
                console.log("Chapter error",obj.chapternum);
                chapter=obj.chapternum;
            }
            obj["movieurl"]="http://pelisplus.co/player"+dest+"|"+parseInt(obj.seasonnum)+"|"+chapter+"/";
         //   obj["urls"]=getURLMovies(obj.movieurl);
            //console.log(obj.movieurl);
            seasonsm.push(obj)
        })
        //console.log(obj);
    })
   // console.log(seasonsm);
    return seasonsm;
}
function getMovie(title, year ) {
    try {
        var querystring = require('querystring');
       // console.log(title, year);
        var squery={
            query:title
        }
        var sqfy=querystring.stringify(squery);
        var headers = {
            "host": "pelisplus.co",
            "referer": "http://pelisplus.co/",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
            "X-Requested-With": "XMLHttpRequest",
            "cookie": "__cfduid=d1220d922b04ef7ddd4a0ebf82f2a1f501558193068; _ga=GA1.2.2032978504.1558193088; splash_i=false; _fbp=fb.1.1558193107162.1663385865; _gid=GA1.2.457209974.1558326261; PHPSESSID=lhku0tuhjbsuvbodcn40gaopeo; splashWeb-210-42=2; splashWeb-397-42=1; _gat=1"
        };
        console.log("query",sqfy);
        var res = rsync('GET', "http://pelisplus.co/suggest/?"+sqfy, { headers: headers });
        var info = JSON.parse(res.body.toString());
        //console.log(info.data.m);
        var movieurl = "";
        var iinfo = info.data.m;
        iinfo.forEach(function (item) {
           // console.log(item);
            if (parseInt(item.release_year) == year) {
                movieurl = "http://pelisplus.co/player" + item.slug.replace("pelicula", "movie") + "/";
            }
        });
        console.log(movieurl);
        var res1 = rsync('GET', movieurl, { headers: headers });
        //console.log(res1.body.toString());
        var contenido = res1.body.toString();
        var cherio = require("cherio");
        var $ = cherio.load(contenido);
        var latino = $("#level2_latino>li");
        var subtitulado=$("#level2_subtitulado>li");
        var castellano=$("#level2_castellano>li");
        var items = [];
        latino.each(function (a, c) {
            var data=$(c).data();
            var parse = require('url-parse')
            , url = parse(data.source, true);
            var movinfo={
                    host:url.host,
                    language:"es-LA",
                    codigo:url.pathname.replace("/embed-",""),
                    url:data.source,
                    quality:data.quality
            }
             items.push(movinfo);
           //console.log(url.host);
        });
        castellano.each(function (a, c) {
            var data=$(c).data();
            var parse = require('url-parse')
            , url = parse(data.source, true);
            var movinfo={
                    host:url.host,
                    language:"es-Es",
                    codigo:url.pathname.replace("/embed-",""),
                    url:data.source,
                    quality:data.quality
            }
             items.push(movinfo);
           //console.log(url.host);
        });
        subtitulado.each(function (a, c) {
            var data=$(c).data();
            var parse = require('url-parse')
            , url = parse(data.source, true);
            var movinfo={
                    host:url.host,
                    language:"en-US",
                    codigo:url.pathname.replace("/embed-",""),
                    url:data.source,
                    quality:data.quality
            }
             items.push(movinfo);
           //console.log(url.host);
        });
    
       // console.log(items);
        return items;
    } catch (ex) {
        return [];
    }
}
function getURLMovies(movieurl){
    var headers = {
        "host": "pelisplus.co",
        "referer": "http://pelisplus.co/",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        "cookie": "__cfduid=d1220d922b04ef7ddd4a0ebf82f2a1f501558193068; _ga=GA1.2.2032978504.1558193088; splash_i=false; _fbp=fb.1.1558193107162.1663385865; _gid=GA1.2.457209974.1558326261; PHPSESSID=lhku0tuhjbsuvbodcn40gaopeo; splashWeb-210-42=2; splashWeb-397-42=1; _gat=1"
    };
    //console.log(movieurl);
    movieurl=movieurl.replace("/|","|");

    var res1 = rsync('GET', movieurl, { headers: headers });
    //console.log(res1.body.toString());
    var contenido = res1.body.toString();
    var cherio = require("cherio");
    var $ = cherio.load(contenido);
   // console.log(contenido);
    var latino = $("#level2_latino>li");
    var subtitulado=$("#level2_subtitulado>li");
    var castellano=$("#level2_castellano>li");
    var items = [];
    latino.each(function (a, c) {
        var data=$(c).data();
        var parse = require('url-parse')
        , url = parse(data.source, true);
        var movinfo={
                host:url.host,
                language:"es-LA",
                codigo:url.pathname.replace("/embed-",""),
                url:data.source,
                quality:data.quality
        }
         items.push(movinfo);
       //console.log(url.host);
    });
    castellano.each(function (a, c) {
        var data=$(c).data();
        var parse = require('url-parse')
        , url = parse(data.source, true);
        var movinfo={
                host:url.host,
                language:"es-Es",
                codigo:url.pathname.replace("/embed-",""),
                url:data.source,
                quality:data.quality
        }
         items.push(movinfo);
       //console.log(url.host);
    });
    subtitulado.each(function (a, c) {
        var data=$(c).data();
        var parse = require('url-parse')
        , url = parse(data.source, true);
        var movinfo={
                host:url.host,
                language:"en-US",
                codigo:url.pathname.replace("/embed-",""),
                url:data.source,
                quality:data.quality
        }
         items.push(movinfo);
       //console.log(url.host);
    });
   // console.log(items);
    return items;
}
function searchmovie(title,year){
    try{
        var query={
            api_key:"c33fd3889e14495057c584bf0703a778",
            query:title,
            year:year
        }
        var querystring=require("querystring")
        var sqfy=querystring.stringify(query);
        console.log(sqfy);
    var result = rsync("GET", "https://api.themoviedb.org/3/search/movie?" + sqfy);
    var info= JSON.parse(result.body.toString());

    //console.log(info.results[0]);
    return info.results[0];
    }catch(ex){
        return null;
    }
}
function searchserie(title,year){
    try{
        var query={
            api_key:"c33fd3889e14495057c584bf0703a778",
            query:title,
            year:year
        }
        var querystring=require("querystring")
        var sqfy=querystring.stringify(query);
        console.log("https://api.themoviedb.org/3/search/tv?"+sqfy);
        var result = rsync("GET", "https://api.themoviedb.org/3/search/tv?" + sqfy);
        var info= JSON.parse(result.body.toString());

        //console.log(info.results[0]);
        return info.results[0];
    }catch(ex){
        return null;
    }
}
function getInfoFromPelis(movieurl){
    var headers = {
        "host": "pelisplus.co",
        "referer": "http://pelisplus.co/",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        "cookie": "__cfduid=d1220d922b04ef7ddd4a0ebf82f2a1f501558193068; _ga=GA1.2.2032978504.1558193088; splash_i=false; _fbp=fb.1.1558193107162.1663385865; _gid=GA1.2.457209974.1558326261; PHPSESSID=lhku0tuhjbsuvbodcn40gaopeo; splashWeb-210-42=2; splashWeb-397-42=1; _gat=1"
    };
    console.log(movieurl);
    var res1 = rsync('GET', movieurl, { headers: headers });
    var contenido = res1.body.toString();
    var cherio = require("cherio");
    var $1 = cherio.load(contenido);
    //console.log($1(".info-content").html());
    var $ = cherio.load($1(".info-content").html());
   console.log( $($("p>span")[1]).text());
return $($("p>span")[1]).text();

}
function getInfo(movie) {
  if(movies.find({id:movie.id}).count()==0){
    var movieDetail = rsync("GET", "https://api.themoviedb.org/3/movie/" + movie.id + "?language=es&api_key=c33fd3889e14495057c584bf0703a778");
     var socials = rsync("GET", "https://api.themoviedb.org/3/movie/" + movie.id + "/external_ids?api_key=c33fd3889e14495057c584bf0703a778");
     var images = rsync("GET", "https://api.themoviedb.org/3/movie/" + movie.id + "/images?api_key=c33fd3889e14495057c584bf0703a778");
    //var pelis = getMovie(movie.original_title, parseInt(movie.release_date.split("-")[0]));
    var mdjson=JSON.parse(movieDetail.body.toString());
    var social=JSON.parse(socials.body.toString());
    var image=JSON.parse(images.body.toString());
    //movie["urls"]=pelis;
    //console.log(mdjson);
    movie["social"]=JSON.parse(socials.body);
    movieDetails.insert(JSON.parse(movieDetail.body));
    movieImages.insert(JSON.parse(images.body));
    movies.insert(movie);
  }
}
function discover(page){
    try {
        console.log("Consumiendo servio de https://api.themoviedb.org/3");
        var discover = rsync("GET", "https://api.themoviedb.org/3/discover/movie?page=" + page + "&api_key=c33fd3889e14495057c584bf0703a778&language=es&with_original_language=en");
        var info = JSON.parse(discover.body);
        info.results.forEach(function (item) {
             console.log("Info",item.id);
           if(movieurls.find({movieId:item.id}).count()>0){
            getInfo(item);
           }
        });
    } catch (ex) {
        console.log(ex);
    }
}

function getMovieId(){
    movieurls.find({movieId:{$exists:false}}).forEach(function(field){
        // var text=getInfoFromPelis(field.url);
        var info=searchmovie(field.textSearch,field.year);
        if(info){
            console.log("Agregada",field.title);
            movieurls.update({_id:field._id},{$set:{movieId:info.id}});
        }else{
            console.log(field.textSearch);
            movieurls.update({_id:field._id},{$set:{movieId:-1}});

        }
        });
}
function getSerieId(){
    movieurls.find({movieId:-1}).forEach(function(field){
        var info=searchserie(field.textSearch,field.year);
        if(info){ console.log("Agregada",field.title);
            movieurls.update({_id:field._id},{$set:{movieId:info.id}});

        }else{
            console.log("No Agregada",field.title);
            movieurls.update({_id:field._id},{$set:{movieId:-1}});

        }
    });
}

function getListPromise(genre,page) {
    // console.log(genre,page);
    var Promise=require("promise");
    return new Promise(function(resolve,reject){
     var querystring = require('querystring');
     var request = require('request');
     var form = {
         page: page,
         type: "genre",
         slug: genre
     };
     var formData = querystring.stringify(form);
     var contentLength = formData.length;
     var headers = {
         'Content-Length': contentLength,
         "host": "pelisplus.co",
         "referer": "http://pelisplus.co/",
         "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
         "X-Requested-With": "XMLHttpRequest",
         "content-type": "application/x-www-form-urlencoded",
         "cookie": "__cfduid=d1220d922b04ef7ddd4a0ebf82f2a1f501558193068; _ga=GA1.2.2032978504.1558193088; splash_i=false; _fbp=fb.1.1558193107162.1663385865; _gid=GA1.2.457209974.1558326261; PHPSESSID=lhku0tuhjbsuvbodcn40gaopeo; splashWeb-210-42=2; splashWeb-397-42=1; _gat=1"
     };
     request({
         headers: headers,
         uri: 'http://pelisplus.co/pagination/',
         body: formData,
         method: 'POST'
     }, function (err, res, body) {
         if(err){
             reject(err);
         }
         var cherio = require("cherio");
         var $ = cherio.load(body);
         var listItem = $(".item-pelicula>a");
         var info = [];
         listItem.each(function (a, c) {
            // console.log($(c).attr("href"));
             var n = cherio.load($(c).html());
             //console.log(n(".year").text());
             //console.log(n(".item-detail").text());
             var url="http://pelisplus.co" + $(c).attr("href");
             url=url.replace("pelicula","player/movie");
            // console.log(url);
             var id=MD5($(c).attr("href"));
           
             var  item = {
                 url: "http://pelisplus.co" + $(c).attr("href"),
                     urlmovie:url,
                     title: n(".item-detail").text(),
  
                     year: n(".year").text(),
                     id:id,
                     page:page
 
                }
 
             info.push(item);
         });
         console.log(info.length);

        resolve(info);
     });
    });
 }
 Meteor.methods({
     iniciar:function () {
         console.log("Iniciando Protocolo JARVIS");
         chapters.find({urls:{$exists:false}}).forEach(function (item) {
             console.log(item.url);

             item.urls=getURLMovies(item.movieurl);
             item.status=true;


             chapters.update({_id:item._id},{$set:item});

         });
     },iniciar2:function(){
         chapters.find({remote:{$exists:false}}).forEach(function(info){
             info.seasons=[];
             var opt= info
             var req=HTTP.call("POST","http://swtpca.com:15045/api/v1/addChapter",{data:opt});
             console.log(info.url,req.data);
             chapters.update({_id:info._id},{$set:{remote:req.data}});
         });
     }
 })

Meteor.startup(function() {
    /*
    movieurls.find({textSearch:{$exists:false}}).forEach(function(field){
        var text=field.url.replace("http://pelisplus.co/serie/","").replace("/","");
        movieurls.update({_id:field._id},{$set:{textSearch:text}});
    });
*/
    
   //  getSerieId();
/*
  chapters.find({remote:{$exists:false}}).forEach(function(info){
        info.seasons=[];
        var opt= info
        var req=HTTP.call("POST","http://swtpca.com:15045/api/v1/addChapter",{data:opt});
       chapters.update({_id:info._id},{$set:{remote:req.data}});

    });
*/
 // Meteor.call("iniciar2");
    //genres();
     // genreseries();
     // getSeries(genreslst[0],1);

//searchmovie("dumbo",2016);
    // code to run on server at startup
   //getList(genreslst[idx],1);
   //console.log(getURLMovies("http://pelisplus.co/player/movie/halloween-at-aunt-ethels/"));
  /* 
  for(i=1;i<1000;i++){
    console.log("Posicion del arreglo",i);
    discover(i);
  }
  */

/*
 movieurls.find({status:{$exists:false}}).forEach(function(field){
  //console.log(field);
  var info=getURLMovies(field.urlmovie);
  //console.log(info);
  movieurls.update({id:field.id},{$set:{movieUrls:info,status:"ready"}});
 });
  movieurls.find({textSearch:{$exists:false}}).forEach(function(field){
    var text=field.url.replace("http://pelisplus.co/pelicula/","").replace("/","");
    movieurls.update({_id:field._id},{$set:{textSearch:text}});
 });
*/
 //var c=getListPromise("accion",1)
 //console.log(c);
 //getMovieId();




//getInfoFromPelis("http://pelisplus.co/pelicula/drive-el-escape/");
//discover(1);
    //chapters.remove({});

    movieurls.find({type:"serie",status:false }).forEach(function(item){
      var seasons=getSeasons(item.url);
      //console.log("Actualizado",item.url);
      var text=item.url.replace("http://pelisplus.co/serie/","").replace("/","");
      console.log(text)
      var info=searchserie(text,item.year);
      //console.log(info);
      if(!info){
          movieurls.update({_id:item._id},{$set:{status:true,error:true,textSearch:text}});
      }else{

      movieurls.update({_id:item._id},{$set:{seasons:seasons,textSearch:text,movieId:info.id}});
        item.seasons.forEach(function(chapter){
            var id=MD5(chapter.movieurl);
            chapter["id"]=id;
            chapter["serieId"]=item.id;
            chapter["urls"]=getURLMovies(chapter.movieurl);
            chapter["status"]=true;
            if(chapters.find({id: id}).count()==0){
                chapters.insert(chapter);
            }else{
               chapters.update({id:id},{$set:chapter}) ;
            }
        })
        console.log("Listo",item.title);
        movieurls.update({_id:item._id},{$set:{status:true}});
    }
    })
/*
    chapters.find({status:{$exists:false}}).forEach(function (item) {
        console.log("Obteniendo ",item.movieurl);
        item.urls=getURLMovies(item.movieurl);
        item.status=true;
        chapters.update({_id:item._id},{$set:item});
    });

*/


});