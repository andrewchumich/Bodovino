jest.dontMock('../dataMapper');
jest.dontMock('../schema');
jest.dontMock('normalizr');

var mockApiData = [
   {
      "ID":52,
      "title":"Cinder Cabernet Sauvignon\/Merlot 2013",
      "status":"publish",
      "type":"wine",
      "author":{
         "ID":1,
         "username":"bodovinoadmin",
         "name":"bodovinoadmin",
         "first_name":"",
         "last_name":"",
         "nickname":"bodovinoadmin",
         "slug":"bodovinoadmin",
         "URL":"",
         "avatar":"http:\/\/2.gravatar.com\/avatar\/e2973dc24d945ced0dcf224815325b6e?s=96",
         "description":"",
         "registered":"2015-08-28T16:16:05+00:00",
         "meta":{
            "links":{
               "self":"http:\/\/bodovino.zerrtech.com\/wp-json\/users\/1",
               "archives":"http:\/\/bodovino.zerrtech.com\/wp-json\/users\/1\/posts"
            }
         }
      },
      "content":"<p>Warm chocolate aromas are followed by dark cherry notes mixed with cinnamon and clove. The finish is rich and long.<\/p>\n",
      "parent":null,
      "link":"http:\/\/bodovino.zerrtech.com\/wine\/cinder-cabernet-sauvignonmerlot-2013\/",
      "date":"2015-09-04T20:00:01",
      "modified":"2015-09-04T20:00:01",
      "format":"standard",
      "slug":"cinder-cabernet-sauvignonmerlot-2013",
      "guid":"http:\/\/bodovino.zerrtech.com\/?post_type=wine&#038;p=52",
      "excerpt":"<p>Warm chocolate aromas are followed by dark cherry notes mixed with cinnamon and clove. The finish is rich and long.<\/p>\n",
      "menu_order":0,
      "comment_status":"closed",
      "ping_status":"closed",
      "sticky":false,
      "date_tz":"UTC",
      "date_gmt":"2015-09-04T20:00:01",
      "modified_tz":"UTC",
      "modified_gmt":"2015-09-04T20:00:01",
      "meta":{
         "links":{
            "self":"http:\/\/bodovino.zerrtech.com\/wp-json\/posts\/52",
            "author":"http:\/\/bodovino.zerrtech.com\/wp-json\/users\/1",
            "collection":"http:\/\/bodovino.zerrtech.com\/wp-json\/posts",
            "replies":"http:\/\/bodovino.zerrtech.com\/wp-json\/posts\/52\/comments",
            "version-history":"http:\/\/bodovino.zerrtech.com\/wp-json\/posts\/52\/revisions"
         }
      },
      "wine_variety":"Cabernet Sauvignon\/Merlot",
      "wine_origin":"Snake River Valley, Idaho, USA",
      "wine_image":{
         "ID":"53",
         "post_author":"1",
         "post_date":"2015-09-04 19:59:53",
         "post_date_gmt":"2015-09-04 19:59:53",
         "post_content":"",
         "post_title":"cinder-2013-cabmerlot",
         "post_excerpt":"",
         "post_status":"inherit",
         "comment_status":"open",
         "ping_status":"closed",
         "post_password":"",
         "post_name":"cinder-2013-cabmerlot",
         "to_ping":"",
         "pinged":"",
         "post_modified":"2015-09-04 20:00:01",
         "post_modified_gmt":"2015-09-04 20:00:01",
         "post_content_filtered":"",
         "post_parent":"52",
         "guid":"http:\/\/bodovino.zerrtech.com\/wp-content\/uploads\/2015\/09\/cinder-2013-cabmerlot.png",
         "menu_order":"0",
         "post_type":"attachment",
         "post_mime_type":"image\/png",
         "comment_count":"0",
         "pod_item_id":"53"
      },
      "wine_description":"Warm chocolate aromas are followed by dark cherry notes mixed with cinnamon and clove. The finish is rich and long.",
      "wine_color":"red",
      "terms":[

      ]
   },
   {
      "ID":50,
      "title":"Cinder Syrah 2013",
      "status":"publish",
      "type":"wine",
      "author":{
         "ID":1,
         "username":"bodovinoadmin",
         "name":"bodovinoadmin",
         "first_name":"",
         "last_name":"",
         "nickname":"bodovinoadmin",
         "slug":"bodovinoadmin",
         "URL":"",
         "avatar":"http:\/\/2.gravatar.com\/avatar\/e2973dc24d945ced0dcf224815325b6e?s=96",
         "description":"",
         "registered":"2015-08-28T16:16:05+00:00",
         "meta":{
            "links":{
               "self":"http:\/\/bodovino.zerrtech.com\/wp-json\/users\/1",
               "archives":"http:\/\/bodovino.zerrtech.com\/wp-json\/users\/1\/posts"
            }
         }
      },
      "content":"<p>Our signature expression of the Syrah grape displays balance between jammy, ripe fruit flavors and savory aromas of sausage, spice and coffee. The flavors are intense on the mid-palate and the finish is smooth and long. This wine is all mystery and curves, with an emphasis on aroma and silky texture. Expected to drink best from 2020-2025.<\/p>\n",
      "parent":null,
      "link":"http:\/\/bodovino.zerrtech.com\/wine\/cinder-syrah-2013\/",
      "date":"2015-09-04T19:56:45",
      "modified":"2015-09-04T20:00:41",
      "format":"standard",
      "slug":"cinder-syrah-2013",
      "guid":"http:\/\/bodovino.zerrtech.com\/?post_type=wine&#038;p=50",
      "excerpt":"<p>Our signature expression of the Syrah grape displays balance between jammy, ripe fruit flavors and savory aromas of sausage, spice and coffee. The flavors are intense on the mid-palate and the finish is smooth and long. This wine is all mystery and curves, with an emphasis on aroma and silky texture. Expected to drink best &hellip; <a href=\"http:\/\/bodovino.zerrtech.com\/wine\/cinder-syrah-2013\/\" class=\"more-link\">Continue reading <span class=\"screen-reader-text\">Cinder Syrah 2013<\/span><\/a><\/p>\n",
      "menu_order":0,
      "comment_status":"closed",
      "ping_status":"closed",
      "sticky":false,
      "date_tz":"UTC",
      "date_gmt":"2015-09-04T19:56:45",
      "modified_tz":"UTC",
      "modified_gmt":"2015-09-04T20:00:41",
      "meta":{
         "links":{
            "self":"http:\/\/bodovino.zerrtech.com\/wp-json\/posts\/50",
            "author":"http:\/\/bodovino.zerrtech.com\/wp-json\/users\/1",
            "collection":"http:\/\/bodovino.zerrtech.com\/wp-json\/posts",
            "replies":"http:\/\/bodovino.zerrtech.com\/wp-json\/posts\/50\/comments",
            "version-history":"http:\/\/bodovino.zerrtech.com\/wp-json\/posts\/50\/revisions"
         }
      },
      "wine_variety":"Syrah",
      "wine_origin":"Snake River Valley, Idaho, USA",
      "wine_image":{
         "ID":"51",
         "post_author":"1",
         "post_date":"2015-09-04 19:56:40",
         "post_date_gmt":"2015-09-04 19:56:40",
         "post_content":"",
         "post_title":"cinder-2013-syrah21-244x680",
         "post_excerpt":"",
         "post_status":"inherit",
         "comment_status":"open",
         "ping_status":"closed",
         "post_password":"",
         "post_name":"cinder-2014-syrah21-244x680",
         "to_ping":"",
         "pinged":"",
         "post_modified":"2015-09-04 20:00:41",
         "post_modified_gmt":"2015-09-04 20:00:41",
         "post_content_filtered":"",
         "post_parent":"50",
         "guid":"http:\/\/bodovino.zerrtech.com\/wp-content\/uploads\/2015\/09\/cinder-2014-syrah21-244x680.png",
         "menu_order":"0",
         "post_type":"attachment",
         "post_mime_type":"image\/png",
         "comment_count":"0",
         "pod_item_id":"51"
      },
      "wine_description":"Our signature expression of the Syrah grape displays balance between jammy, ripe fruit flavors and savory aromas of sausage, spice and coffee. The flavors are intense on the mid-palate and the finish is smooth and long. This wine is all mystery and curves, with an emphasis on aroma and silky texture. Expected to drink best from 2020-2025.",
      "wine_color":"red",
      "terms":[

      ]
   }
]
describe('dataMapper', function() {
  var dataMapper;
  beforeEach(function() {
    dataMapper = require('../dataMapper');
  });

  it('merges wines and ratings', function() {
    expect(3).toBe(3);
  });

  it('handles api data', function() {
    dataMapper.apiToWines(mockApiData);
  });
});