const orderArray = [{"id":1,"first_name":"Rickard","last_name":"Basson","email":"rbasson0@behance.net","gender":"Male","product":"Wine - Bourgogne 2002, La","phoneNumber":"+595 656 195 4650"},
{"id":2,"first_name":"Eva","last_name":"Bewley","email":"ebewley1@com.com","gender":"Female","product":"Veal - Ground","phoneNumber":"+48 543 483 3011"},
{"id":3,"first_name":"Meredith","last_name":"Ardley","email":"mardley2@yandex.ru","gender":"Female","product":"Broccoli - Fresh","phoneNumber":"+86 826 606 5163"},
{"id":4,"first_name":"Cobby","last_name":"Moyser","email":"cmoyser3@msn.com","gender":"Male","product":"Horseradish - Prepared","phoneNumber":"+63 501 238 3273"},
{"id":5,"first_name":"Juan","last_name":"Dole","email":"jdole4@devhub.com","gender":"Male","product":"Goulash Seasoning","phoneNumber":"+48 894 442 8148"},
{"id":6,"first_name":"Aloysius","last_name":"Rabbet","email":"arabbet5@yandex.ru","gender":"Male","product":"Melon - Watermelon Yellow","phoneNumber":"+63 657 272 6797"},
{"id":7,"first_name":"Maren","last_name":"Hursey","email":"mhursey6@slideshare.net","gender":"Female","product":"Cheese - Havarti, Roasted Garlic","phoneNumber":"+7 251 666 8068"},
{"id":8,"first_name":"Trevar","last_name":"Van Arsdalen","email":"tvanarsdalen7@tinypic.com","gender":"Male","product":"Pasta - Canelloni, Single Serve","phoneNumber":"+86 227 229 6992"},
{"id":9,"first_name":"Kylila","last_name":"Jobey","email":"kjobey8@technorati.com","gender":"Female","product":"Wine - Magnotta - Cab Franc","phoneNumber":"+504 478 307 4925"},
{"id":10,"first_name":"Paige","last_name":"Tabbernor","email":"ptabbernor9@europa.eu","gender":"Male","product":"Butter - Pod","phoneNumber":"+995 417 424 9206"},
{"id":11,"first_name":"Correy","last_name":"Cutchey","email":"ccutcheya@linkedin.com","gender":"Female","product":"Calvados - Boulard","phoneNumber":"+373 547 946 0966"},
{"id":12,"first_name":"Timoteo","last_name":"Filpo","email":"tfilpob@home.pl","gender":"Male","product":"Ice - Clear, 300 Lb For Carving","phoneNumber":"+670 891 464 7226"},
{"id":13,"first_name":"Ulrika","last_name":"Wearne","email":"uwearnec@mapy.cz","gender":"Female","product":"Wine - Maipo Valle Cabernet","phoneNumber":"+63 520 415 3896"},
{"id":14,"first_name":"Lilah","last_name":"Darridon","email":"ldarridond@weather.com","gender":"Female","product":"Sunflower Seed Raw","phoneNumber":"+55 423 126 1222"},
{"id":15,"first_name":"Fawn","last_name":"Twamley","email":"ftwamleye@dropbox.com","gender":"Female","product":"Cake - Lemon Chiffon","phoneNumber":"+33 733 202 1750"},
{"id":16,"first_name":"Daffi","last_name":"Isham","email":"dishamf@nationalgeographic.com","gender":"Female","product":"Galliano","phoneNumber":"+27 140 505 3450"},
{"id":17,"first_name":"Andreana","last_name":"Jones","email":"ajonesg@berkeley.edu","gender":"Female","product":"Ginsing - Fresh","phoneNumber":"+84 352 795 1338"},
{"id":18,"first_name":"Hewe","last_name":"Jaimez","email":"hjaimezh@google.es","gender":"Polygender","product":"Tomato - Tricolor Cherry","phoneNumber":"+992 534 897 8873"},
{"id":19,"first_name":"Zack","last_name":"Stitch","email":"zstitchi@ebay.co.uk","gender":"Male","product":"Lemonade - Pineapple Passion","phoneNumber":"+506 313 439 0627"},
{"id":20,"first_name":"Moise","last_name":"Fantin","email":"mfantinj@mapy.cz","gender":"Male","product":"Wine - Masi Valpolocell","phoneNumber":"+86 430 533 6429"},
{"id":21,"first_name":"Max","last_name":"Cassely","email":"mcasselyk@xinhuanet.com","gender":"Male","product":"Cup - 3.5oz, Foam","phoneNumber":"+62 310 466 7897"},
{"id":22,"first_name":"Deny","last_name":"Glasgow","email":"dglasgowl@imageshack.us","gender":"Female","product":"Sterno - Chafing Dish Fuel","phoneNumber":"+374 770 416 9512"},
{"id":23,"first_name":"Gregorius","last_name":"Tompkin","email":"gtompkinm@home.pl","gender":"Male","product":"Wanton Wrap","phoneNumber":"+86 416 211 3832"},
{"id":24,"first_name":"Irvin","last_name":"Nield","email":"inieldn@mashable.com","gender":"Male","product":"Bread Foccacia Whole","phoneNumber":"+595 152 662 2072"},
{"id":25,"first_name":"Symon","last_name":"Hinkley","email":"shinkleyo@nyu.edu","gender":"Male","product":"Sage Derby","phoneNumber":"+1 315 418 9942"},
{"id":26,"first_name":"Ernesto","last_name":"Ziemke","email":"eziemkep@dedecms.com","gender":"Male","product":"Chicken - Wings, Tip Off","phoneNumber":"+63 865 112 8638"},
{"id":27,"first_name":"Jacynth","last_name":"Cluley","email":"jcluleyq@prlog.org","gender":"Female","product":"Sauce Bbq Smokey","phoneNumber":"+62 624 506 5753"},
{"id":28,"first_name":"Prisca","last_name":"Greenhead","email":"pgreenheadr@sbwire.com","gender":"Female","product":"Onions - Vidalia","phoneNumber":"+62 557 314 3703"},
{"id":29,"first_name":"Wade","last_name":"Gilgryst","email":"wgilgrysts@dedecms.com","gender":"Male","product":"Russian Prince","phoneNumber":"+54 379 303 2965"},
{"id":30,"first_name":"Laney","last_name":"Targe","email":"ltarget@unc.edu","gender":"Male","product":"Tea - Darjeeling, Azzura","phoneNumber":"+52 602 869 0929"},
{"id":31,"first_name":"Harri","last_name":"Yakobovicz","email":"hyakoboviczu@dmoz.org","gender":"Agender","product":"Wine - Cave Springs Dry Riesling","phoneNumber":"+86 491 928 4435"},
{"id":32,"first_name":"Abbi","last_name":"Cassin","email":"acassinv@sciencedirect.com","gender":"Female","product":"Turnip - White, Organic","phoneNumber":"+62 745 545 5962"},
{"id":33,"first_name":"Colline","last_name":"Birley","email":"cbirleyw@nyu.edu","gender":"Female","product":"Cheese - Cottage Cheese","phoneNumber":"+63 359 540 5265"},
{"id":34,"first_name":"Clio","last_name":"McWhin","email":"cmcwhinx@blinklist.com","gender":"Female","product":"Doilies - 12, Paper","phoneNumber":"+30 325 238 8415"},
{"id":35,"first_name":"Juanita","last_name":"Boyton","email":"jboytony@baidu.com","gender":"Female","product":"Muffin Mix - Chocolate Chip","phoneNumber":"+51 307 463 4644"},
{"id":36,"first_name":"Ber","last_name":"Dowman","email":"bdowmanz@shutterfly.com","gender":"Male","product":"Duck - Legs","phoneNumber":"+62 201 383 8407"},
{"id":37,"first_name":"Jeremias","last_name":"Chesworth","email":"jchesworth10@comcast.net","gender":"Male","product":"Raisin - Golden","phoneNumber":"+66 722 673 0224"},
{"id":38,"first_name":"Calhoun","last_name":"O'Towey","email":"cotowey11@furl.net","gender":"Male","product":"Dc - Sakura Fu","phoneNumber":"+86 647 506 4165"},
{"id":39,"first_name":"Nolie","last_name":"Norvel","email":"nnorvel12@amazon.co.jp","gender":"Female","product":"Chocolate - Dark Callets","phoneNumber":"+86 681 352 9435"},
{"id":40,"first_name":"Hyacinth","last_name":"Armsden","email":"harmsden13@foxnews.com","gender":"Female","product":"Wine - Chablis 2003 Champs","phoneNumber":"+58 723 349 0393"},
{"id":41,"first_name":"Arte","last_name":"Lawrey","email":"alawrey14@youtube.com","gender":"Male","product":"Olives - Morracan Dired","phoneNumber":"+55 992 574 7629"},
{"id":42,"first_name":"Moselle","last_name":"Hamper","email":"mhamper15@live.com","gender":"Female","product":"V8 Pet","phoneNumber":"+63 624 514 6774"},
{"id":43,"first_name":"Minne","last_name":"Danhel","email":"mdanhel16@whitehouse.gov","gender":"Female","product":"Sauce - Soya, Light","phoneNumber":"+355 122 321 7619"},
{"id":44,"first_name":"Merola","last_name":"Flanner","email":"mflanner17@fda.gov","gender":"Female","product":"Bagel - 12 Grain Preslice","phoneNumber":"+55 852 546 4297"},
{"id":45,"first_name":"Noah","last_name":"Schimann","email":"nschimann18@google.ru","gender":"Male","product":"Pork - Inside","phoneNumber":"+51 800 626 9137"},
{"id":46,"first_name":"Herby","last_name":"Bernadot","email":"hbernadot19@issuu.com","gender":"Male","product":"Amarula Cream","phoneNumber":"+55 162 640 4319"},
{"id":47,"first_name":"Verge","last_name":"Gai","email":"vgai1a@walmart.com","gender":"Male","product":"Oil - Olive, Extra Virgin","phoneNumber":"+351 913 832 4631"},
{"id":48,"first_name":"Cicily","last_name":"Halloway","email":"challoway1b@infoseek.co.jp","gender":"Female","product":"V8 Splash Strawberry Kiwi","phoneNumber":"+48 568 133 1321"},
{"id":49,"first_name":"Taite","last_name":"O'Neary","email":"toneary1c@trellian.com","gender":"Male","product":"Rice - Aborio","phoneNumber":"+86 259 680 5997"},
{"id":50,"first_name":"Tony","last_name":"Hub","email":"thub1d@nbcnews.com","gender":"Male","product":"Rum - Spiced, Captain Morgan","phoneNumber":"+86 424 665 8046"},
{"id":51,"first_name":"Selig","last_name":"Rudd","email":"srudd1e@about.com","gender":"Male","product":"Blueberries","phoneNumber":"+52 151 722 0810"},
{"id":52,"first_name":"Jennette","last_name":"Diviny","email":"jdiviny1f@sogou.com","gender":"Genderqueer","product":"Coffee - Irish Cream","phoneNumber":"+216 501 682 0215"},
{"id":53,"first_name":"Gav","last_name":"Keer","email":"gkeer1g@skype.com","gender":"Bigender","product":"Beer - Steamwhistle","phoneNumber":"+81 503 802 4757"},
{"id":54,"first_name":"Gisele","last_name":"Allum","email":"gallum1h@redcross.org","gender":"Female","product":"Dehydrated Kelp Kombo","phoneNumber":"+261 765 781 1079"},
{"id":55,"first_name":"Heath","last_name":"Pirot","email":"hpirot1i@drupal.org","gender":"Female","product":"Lemonade - Kiwi, 591 Ml","phoneNumber":"+504 654 705 5886"},
{"id":56,"first_name":"Anneliese","last_name":"Spinetti","email":"aspinetti1j@usgs.gov","gender":"Bigender","product":"Melon - Cantaloupe","phoneNumber":"+7 652 342 8723"},
{"id":57,"first_name":"Hillier","last_name":"Vodden","email":"hvodden1k@ft.com","gender":"Male","product":"Wine - Chateau Timberlay","phoneNumber":"+51 889 598 4537"},
{"id":58,"first_name":"Romain","last_name":"Domeney","email":"rdomeney1l@plala.or.jp","gender":"Male","product":"Beef - Striploin Aa","phoneNumber":"+967 720 103 6390"},
{"id":59,"first_name":"Jodie","last_name":"Durtnal","email":"jdurtnal1m@themeforest.net","gender":"Female","product":"Cheese - Cottage Cheese","phoneNumber":"+48 196 273 1364"},
{"id":60,"first_name":"Verena","last_name":"Alcorn","email":"valcorn1n@cargocollective.com","gender":"Female","product":"Oil - Truffle, Black","phoneNumber":"+375 167 449 1170"},
{"id":61,"first_name":"Tobe","last_name":"Hairesnape","email":"thairesnape1o@mashable.com","gender":"Male","product":"Sugar - Brown, Individual","phoneNumber":"+57 567 533 0437"},
{"id":62,"first_name":"Shanda","last_name":"Blankman","email":"sblankman1p@princeton.edu","gender":"Female","product":"Sword Pick Asst","phoneNumber":"+54 769 962 3092"},
{"id":63,"first_name":"Tally","last_name":"Swatheridge","email":"tswatheridge1q@msn.com","gender":"Female","product":"Eggplant - Baby","phoneNumber":"+98 209 860 6120"},
{"id":64,"first_name":"Olvan","last_name":"Hayle","email":"ohayle1r@shop-pro.jp","gender":"Male","product":"Salt - Celery","phoneNumber":"+7 743 945 5439"},
{"id":65,"first_name":"Rockey","last_name":"Condict","email":"rcondict1s@cnn.com","gender":"Male","product":"Vinegar - Champagne","phoneNumber":"+86 808 153 7967"},
{"id":66,"first_name":"Annadiana","last_name":"Grestye","email":"agrestye2t@netscape.com","gender":"Female","product":"Pasta - Spaghetti, Dry","phoneNumber":"+33 908 375 9782"},
{"id":67,"first_name":"Marquita","last_name":"Hekkert","email":"mhekkert1u@vimeo.com","gender":"Female","product":"Pepper - Cayenne","phoneNumber":"+358 531 888 2610"},
{"id":68,"first_name":"Merrili","last_name":"Joontjes","email":"mjoontjes1v@kickstarter.com","gender":"Female","product":"Soup - Beef Conomme, Dry","phoneNumber":"+234 271 954 5063"},
{"id":69,"first_name":"Connie","last_name":"Lattin","email":"clattin1w@senate.gov","gender":"Male","product":"Ice Cream - Vanilla","phoneNumber":"+57 950 787 4366"},
{"id":70,"first_name":"Esmaria","last_name":"Raeside","email":"eraeside2x@devhub.com","gender":"Female","product":"Beer - Tetleys","phoneNumber":"+57 935 769 5164"},
{"id":71,"first_name":"Noble","last_name":"Mennithorp","email":"nmennithorp1y@booking.com","gender":"Male","product":"Raisin - Golden","phoneNumber":"+62 492 972 4094"},
{"id":72,"first_name":"Karlis","last_name":"Ivasechko","email":"kivasechko1z@springer.com","gender":"Male","product":"Soup - Campbells, Chix Gumbo","phoneNumber":"+55 422 794 3787"},
{"id":73,"first_name":"Aeriell","last_name":"Heck","email":"aheck20@dyndns.org","gender":"Female","product":"Wine - Chateau Bonnet","phoneNumber":"+51 284 672 5988"},
{"id":74,"first_name":"Gary","last_name":"Heathorn","email":"gheathorn21@chron.com","gender":"Male","product":"Food Colouring - Green","phoneNumber":"+48 745 172 1297"},
{"id":75,"first_name":"Eadith","last_name":"Seydlitz","email":"eseydlitz22@va.gov","gender":"Female","product":"Flour - Chickpea","phoneNumber":"+62 184 149 0121"},
{"id":76,"first_name":"Belva","last_name":"Melsom","email":"bmelsom23@zdnet.com","gender":"Female","product":"Wine - Mondavi Coastal Private","phoneNumber":"+252 122 194 2353"},
{"id":77,"first_name":"Abner","last_name":"Worham","email":"aworham24@japanpost.jp","gender":"Male","product":"Baking Powder","phoneNumber":"+30 742 767 1317"},
{"id":78,"first_name":"Olive","last_name":"Lodeke","email":"olodeke25@is.gd","gender":"Female","product":"Devonshire Cream","phoneNumber":"+855 599 458 5338"},
{"id":79,"first_name":"Fredrick","last_name":"Jensen","email":"fjensen26@europa.eu","gender":"Genderqueer","product":"Cup - 4oz Translucent","phoneNumber":"+420 708 225 9992"},
{"id":80,"first_name":"Keefer","last_name":"Collingham","email":"kcollingham27@devhub.com","gender":"Male","product":"Wine - Two Oceans Cabernet","phoneNumber":"+86 706 247 7675"},
{"id":81,"first_name":"Becca","last_name":"Haws","email":"bhaws28@storify.com","gender":"Non-binary","product":"Squash - Guords","phoneNumber":"+63 635 445 5863"},
{"id":82,"first_name":"Mayer","last_name":"Gally","email":"mgally29@ameblo.jp","gender":"Male","product":"Kirsch - Schloss","phoneNumber":"+51 242 884 4263"},
{"id":83,"first_name":"Stacy","last_name":"Jayume","email":"sjayume2a@marriott.com","gender":"Male","product":"Rum - Mount Gay Eclipes","phoneNumber":"+55 161 969 5295"},
{"id":84,"first_name":"Cad","last_name":"Brayshaw","email":"cbrayshaw2b@biblegateway.com","gender":"Male","product":"Monkfish Fresh - Skin Off","phoneNumber":"+86 900 671 2243"},
{"id":85,"first_name":"Peri","last_name":"Lemmanbie","email":"plemmanbie2c@scribd.com","gender":"Female","product":"Russian Prince","phoneNumber":"+63 905 643 1253"},
{"id":86,"first_name":"Symon","last_name":"MacRierie","email":"smacrierie2d@google.ru","gender":"Male","product":"Chevril","phoneNumber":"+86 734 577 0194"},
{"id":87,"first_name":"Mata","last_name":"Derisley","email":"mderisley2e@cargocollective.com","gender":"Male","product":"Bread Crumbs - Japanese Style","phoneNumber":"+53 272 940 9006"},
{"id":88,"first_name":"Justinian","last_name":"Hansemann","email":"jhansemann2f@sourceforge.net","gender":"Male","product":"Mushroom - Crimini","phoneNumber":"+86 204 501 0483"},
{"id":89,"first_name":"Norrie","last_name":"Battison","email":"nbattison2g@xrea.com","gender":"Male","product":"Coffee - Espresso","phoneNumber":"+62 487 886 6912"},
{"id":90,"first_name":"Juli","last_name":"Haslin","email":"jhaslin2h@cyberchimps.com","gender":"Female","product":"Grapefruit - Pink","phoneNumber":"+420 199 735 3895"},
{"id":91,"first_name":"Tyrone","last_name":"Dukes","email":"tdukes2i@rakuten.co.jp","gender":"Male","product":"Coconut - Whole","phoneNumber":"+92 742 301 1361"},
{"id":92,"first_name":"Gizela","last_name":"Stammler","email":"gstammler2j@independent.co.uk","gender":"Genderfluid","product":"Tea - Lemon Green Tea","phoneNumber":"+1 251 786 3248"},
{"id":93,"first_name":"Jacob","last_name":"Gres","email":"jgres2k@thetimes.co.uk","gender":"Genderqueer","product":"Lamb - Sausage Casings","phoneNumber":"+1 419 609 7623"},
{"id":94,"first_name":"Vera","last_name":"Pieter","email":"vpieter2l@bloomberg.com","gender":"Female","product":"Longos - Lasagna Beef","phoneNumber":"+55 650 217 1249"},
{"id":95,"first_name":"Carter","last_name":"Limer","email":"climer2m@cnn.com","gender":"Male","product":"Energy Drink - Redbull 355ml","phoneNumber":"+94 661 540 2212"},
{"id":96,"first_name":"Tabbitha","last_name":"Kitchingman","email":"tkitchingman2n@example.com","gender":"Polygender","product":"Beer - Upper Canada Lager","phoneNumber":"+81 511 220 3462"},
{"id":97,"first_name":"Licha","last_name":"Harsum","email":"lharsum2o@oracle.com","gender":"Female","product":"Dehydrated Kelp Kombo","phoneNumber":"+86 714 465 3569"},
{"id":98,"first_name":"Stacy","last_name":"Imlaw","email":"simlaw2p@economist.com","gender":"Male","product":"Milk - 2%","phoneNumber":"+358 197 738 1097"},
{"id":99,"first_name":"Rutledge","last_name":"Batthew","email":"rbatthew2q@flickr.com","gender":"Male","product":"Grapefruit - White","phoneNumber":"+63 941 641 4703"},
{"id":100,"first_name":"Leighton","last_name":"Ovett","email":"lovett2r@psu.edu","gender":"Male","product":"Cheese - Havarti, Roasted Garlic","phoneNumber":"+46 406 420 0423"}]


const table = document.getElementById('table');

const addTableDate = () => {
    orderArray.forEach( (product) => {
        const tableRow = createTableElement(product);
        table.appendChild(tableRow);
    })
}

const createTableElement = (product) => {
    let tr = document.createElement('tr');

    let id_data = createIdDate(product.id);
    let firstName_data = createFirstNameDate(product.first_name);
    let lastName_data = createLastNameDate(product.last_name);
    let email_data = createEmailDate(product.email);
    let gender_data = createGenderDate(product.gender);
    let product_data = createGenderDate(product.product);
    let phoneNumber_data = createPhoneDate(product.phone);

    tr.appendChild(id_data, firstName_data, lastName_data, email_data, gender_data, product_data, phoneNumber_data);
    return tr;
}

const createIdDate = (id) => {
    let idNode = document.createTextNode(id);
    let id_data = document.createElement('td');
    id_data.appendChild(idNode);
    return id_data
}

const createFirstNameDate = (firstName) => {
    let idNode = document.createTextNode(firstName);
    let firstName_data = document.createElement('td');
    firstName_data.appendChild(idNode);
    return firstName_data
}

const createLastNameDate = (lirstName) => {
    let idNode = document.createTextNode(lirstName);
    let lastName_data = document.createElement('td');
    lastName_data.appendChild(idNode);
    return lastName_data
}

const createEmailDate = (email) => {
    let idNode = document.createTextNode(email);
    let email_data = document.createElement('td');
    email_data.appendChild(idNode);
    return email_data;
}

const createGenderDate = (gender) => {
    let idNode = document.createTextNode(gender);
    let gender_data = document.createElement('td');
    gender_data.appendChild(idNode);
    return gender_data;
}

const createProductDate = (product) => {
    let idNode = document.createTextNode(product);
    let product_data = document.createElement('td');
    product_data.appendChild(idNode);
    return product_data;
}

const createPhoneDate = (phone) => {
    let idNode = document.createTextNode(phone);
    let phone_data = document.createElement('td');
    phone_data.appendChild(idNode);
    return phone_data;
}