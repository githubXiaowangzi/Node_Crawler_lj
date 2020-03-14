let articleUrlList = [{"name":"新希望滨江锦粼府","value":"29000","address":"萧山/萧山新城区/建设一路与通惠路交汇路东侧"},{"name":"赞成星谷","value":"28000","address":"拱墅/申花/石祥西路与学院路交叉口"},{"name":"万科大溪谷","value":"20800","address":"余杭/良渚/运溪路1100号"},{"name":"金科碧桂园博翠府","value":"30700","address":"拱墅/半山/运河新城顾扬路与郁世门街交叉口"},{"name":"同协金座","value":"30000","address":"江干/丁桥/同协路与华丰路交叉口"},{"name":"蓝城澜宸","value":"56000","address":"上城/南星/钱江路与候潮路交汇处"},{"name":"和家园雍园","value":"55000","address":"西湖/西溪/杨梅山路和家园"},{"name":"越秀招商天悦江湾","value":"40700","address":"江干/九堡/三官塘路与建华路交叉口"},{"name":"金隅中铁诺德都会森林","value":"58900","address":"江干/景芳/艮山西路与钱潮路交汇处"},{"name":"东城金茂府","value":"46812","address":"江干/城东新城/源聚路与明石路交汇处"},{"name":"碧桂园良樾","value":"20358","address":"余杭/瓶窑/精工西路碧桂园良樾"},{"name":"中粮梦栖祥云","value":"40000","address":"余杭/良渚/康良路与杜文路交叉口"},{"name":"碧桂园越溪府","value":"25000","address":"萧山/临浦/东藩路与临北路交叉口"},{"name":"世茂泰禾中央广场","value":"40000","address":"西湖/西溪/双龙街与枫树路交汇处"},{"name":"新城璟隽公馆","value":"23000","address":"萧山/萧山新城区/建设一路与通惠路交叉口向东约100米"},{"name":"鸿盛家园","value":"15000","address":"临安/临安/马溪路509号"},{"name":"天目观山月","value":"12500","address":"临安/临安/天目山景区入口向南1公里处"},{"name":"大华春山明月","value":"43142.46","address":"临安/临安/科技大道3186号"},{"name":"云水山居","value":"12600","address":"富阳/富阳/银湖区九龙大道延伸段（杭州野生动物园附近）"},{"name":"朗诗枫荟","value":"21000","address":"余杭/临平/兴国路与北沙西路交汇西南侧"},{"name":"万科古翠隐秀","value":"54000","address":"拱墅/和睦/登云路与隐秀路交叉口"},{"name":"海伦堡棠锦","value":"20972","address":"余杭/闲林/五常大道1号,中泰街道新明半岛海伦堡棠锦"},{"name":"绿城西溪云庐","value":"95000","address":"西湖/西溪/天目山路389号"},{"name":"滨江新希望新城未来海岸","value":"27000","address":"钱塘新区/大江东/新湾街道建华路与闸口路交汇处"},{"name":"开元广场","value":"24000","address":"萧山/南部卧城/市心南路开元广场"},{"name":"三湘印象森林海尚","value":"45800","address":"江干/城东新城/源聚路和白石庙路交汇处"},{"name":"中国铁建国际汇","value":"28000","address":"拱墅/拱宸桥/石祥路239号"},{"name":"金都夏宫","value":"23000","address":"余杭/临平/北沙西路156号"},{"name":"世茂天宸","value":"70000","address":"江干/华家池/艮山西路95号"},{"name":"中栋国际","value":"35000","address":"萧山/萧山新城区/风情大道与建设一路交叉口"},{"name":"杭州新天地","value":"30000","address":"下城/三塘/石祥路71-8号"},{"name":"复地壹中心","value":"24000","address":"拱墅/申花/莫干山路与育英路交叉口"},{"name":"宋都阳光国际","value":"40000","address":"江干/九堡/通盛路阳光国际"},{"name":"众安嘉润公馆","value":"45000","address":"萧山/奥体/钱江世纪城金鸡路与利一路交汇处"},{"name":"众安理想湾","value":"16500","address":"余杭/临平/新洲路与星河路交汇东南处"},{"name":"天润商业中心","value":"27000","address":"萧山/萧山市区/萧棉路与工人路交叉口"},{"name":"湖景居","value":"32950","address":"钱塘新区/金沙湖/天城东路820号"},{"name":"潮闻天下","value":"27000","address":"钱塘新区/大江东/大江东河庄街道一工段"},{"name":"信融御金台","value":"30000","address":"萧山/奥体/民和路信融御金台"},{"name":"嘉和银领时代","value":"21000","address":"余杭/星桥/星桥镇藕花洲大街嘉和银领时代"},{"name":"科尔世纪外滩","value":"40000","address":"萧山/萧山开发区/宁围镇顺坝围垦，东、南至国际水城公园"},{"name":"中港罗兰小镇","value":"21300","address":"余杭/闲林/中泰路2号"},{"name":"新湖香格里拉","value":"55812.36","address":"余杭/良渚/东西大道（良渚西南大观山果园农场腹地）"},{"name":"绿城桃源小镇","value":"25536.68","address":"余杭/闲林/天目山西路（圣地入口）"},{"name":"潮闻天下","value":"13500","address":"钱塘新区/大江东/大江东河庄街道一工段"},{"name":"大奇山郡","value":"20000","address":"桐庐/桐庐/金中路8号"},{"name":"中粮天悦大悦城","value":"30000","address":"拱墅/和睦/莫干山路与隐秀路交叉口"},{"name":"梦溪东明山居","value":"24000","address":"余杭/良渚/良渚镇西北角，安溪村用地内，临近东明山森林公园和白庐艺术馆东明山居"},{"name":"富春玫瑰园","value":"33700","address":"富阳/富阳/东洲街道江滨东大道515号"},{"name":"西溪蓝海","value":"23000","address":"余杭/未来科技城/文一西路和良睦路口交叉口向南200米"},{"name":"宋都时间国际","value":"23000","address":"江干/城东新城/德胜路与同协南路交汇处"},{"name":"南洋名都","value":"15289","address":"临安/临安/玲珑街19号"},{"name":"绿城曼陀花园","value":"18179","address":"临安/临安/锦城街道泥山湾村"},{"name":"澳海澜庭","value":"9486","address":"富阳/富阳/新登镇昌东澳海澜庭"},{"name":"绿城运河宸园","value":"130000","address":"拱墅/桥西/登云路小河路口"},{"name":"滨湖天地","value":"18100","address":"临安/临安/琴海路和海华路交叉口"},{"name":"雨润星雨华府","value":"16000","address":"临安/临安/临安环北路与临水路交叉口"},{"name":"复泰雅宸华庭","value":"13500","address":"余杭/未来科技城/雅城路农村商业银行西南50米"},{"name":"复泰雅宸华庭","value":"20000","address":"余杭/未来科技城/雅城路余杭区农村商业银行西南50米"},{"name":"万通中心","value":"28000","address":"拱墅/拱宸桥/上塘路与大关路交界处西北角"},{"name":"诺德财富中心","value":"27000","address":"萧山/钱江世纪城/市心北路1939号"},{"name":"新天地G193广场","value":"30000","address":"下城/三塘/长浜路（原东新东路）与安桥路交叉口"},{"name":"钱江浙商创投中心","value":"32000","address":"西湖/文三西路/西溪路527号"},{"name":"东海闲湖城","value":"18928","address":"余杭/闲林/天目山西路277号"},{"name":"玖玖国际财富中心","value":"38000","address":"余杭/临平/荷禹路与北沙西路交汇处。"},{"name":"蓝钻天成","value":"60000","address":"拱墅/申花/莫干山路969号"},{"name":"佳源未来府","value":"30000","address":"余杭/未来科技城/安乐路佳源未来府"},{"name":"碧桂园深蓝国际","value":"40000","address":"萧山/奥体/博奥路与利一路交汇处"},{"name":"三立钱塘ONE","value":"24000","address":"西湖/转塘/枫桦东路和梧桐路交叉口"},{"name":"金色黎明三期","value":"35000","address":"江干/笕桥/德胜路与同协路交汇处"},{"name":"众安恒隆广场","value":"20000","address":"萧山/萧山市区/山阴路与工人路交叉口"},{"name":"华元天鹅堡","value":"27000","address":"西湖/文三西路/西溪路539号"},{"name":"雅居乐国际花园","value":"22000","address":"余杭/闲林/天目山西路258号"},{"name":"金岸提香","value":"30500","address":"余杭/闲林/天目山西路中泰路口"},{"name":"复泰雅宸华庭","value":"13500","address":"余杭/未来科技城/雅城路余杭区农村商业银行西南50米"},{"name":"绿城西溪世纪广场","value":"45000","address":"西湖/西溪/余杭塘路花蒋路口"},{"name":"千岛湖嘉苑","value":"13700","address":"淳安/淳安/千岛湖镇环湖北路与清溪大道交汇处"},{"name":"钱江西溪和景","value":"28000","address":"西湖/文三西路/西溪路537号"},{"name":"富阳财富中心","value":"17500","address":"富阳/富阳/迎宾北路77号"},{"name":"富春新天地","value":"26000","address":"富阳/富阳/迎宾北路富春新天地"},{"name":"宋都时间名座","value":"23500","address":"余杭/临平/藕花洲大街与宝幢路交叉口"},{"name":"御湖公馆","value":"23000","address":"萧山/南部卧城/蜀山街道潘右路1068号"},{"name":"华策中心","value":"40000","address":"西湖/西溪/花蒋路与五常港路交汇处"},{"name":"西溪十九府","value":"21000","address":"西湖/小和山/小和山支路86号"},{"name":"鼎和金座","value":"22500","address":"余杭/临平/星光街1197号"},{"name":"公元帝景","value":"18000","address":"萧山/萧山开发区/大岩风景旅游度假村"},{"name":"未来悦","value":"37500","address":"余杭/未来科技城/文一西路与荆长大道交汇处以北500米处"},{"name":"易辰江南大院","value":"26587","address":"临安/临安/锦北街道潘山村"},{"name":"世茂钱塘天誉","value":"47059","address":"江干/火车东站/机场路与德胜东路交叉口"},{"name":"云山九里","value":"30000","address":"桐庐/桐庐/金中路8号"},{"name":"中欧城","value":"25000","address":"桐庐/桐庐/城南街道云栖路与学圣路��叉口"},{"name":"文渊狮城","value":"20000","address":"淳安/淳安/淳安千岛湖姜家镇龙川湾景区码头旁"},{"name":"浙富西溪堂","value":"32000","address":"余杭/未来科技城/龙潭路和绿汀路交叉口西北角"},{"name":"蓝色春江","value":"18000","address":"桐庐/桐庐/桐庐富春路9号"},{"name":"O纪元","value":"42000","address":"萧山/钱江世纪城/奔竞大道与市心北路交叉口"},{"name":"复地壹中心","value":"50000","address":"拱墅/申花/莫干山路与育英路交叉口"},{"name":"京港国际","value":"32500","address":"萧山/钱江世纪城/市心北路与皓月路交叉口"},{"name":"力雅广场","value":"17500","address":"桐庐/桐庐/洋塘路与富春路交叉口西北侧"},{"name":"永和之星","value":"22000","address":"萧山/萧山开发区/戚枫路与塘新线交口"},{"name":"临平新时代","value":"16000","address":"余杭/临平/南苑街道藕花洲大街东段1号"},{"name":"万融城","value":"26000","address":"拱墅/万达广场/祥富路与杨家浜路东南角"},{"name":"绿地华家池印","value":"35000","address":"江干/华家池/环城北路东2800米（艮山西路与秋涛北路交叉口）"},{"name":"富春硅谷","value":"24000","address":"富阳/富阳/九龙大道398号"},{"name":"融创金成江南府","value":"28000","address":"余杭/闲林/未来科技城天目山西路与上和路交叉口南"},{"name":"雨润星雨华府","value":"15600","address":"临安/临安/临安环北路与临水路交叉口"},{"name":"招商越秀公园1872","value":"41000","address":"江干/九堡/建华路与五号港路交叉口"},{"name":"阳光城未来悦MAX","value":"31000","address":"余杭/未来科技城/文二西路与绿汀路交叉口"},{"name":"佳源湘湖印象","value":"32063.8","address":"萧山/义桥/风情大道与南六路交叉口"},{"name":"东方世贸城","value":"17000","address":"萧山/萧山开发区/新城路2517号"},{"name":"宋都时间名座","value":"32506","address":"余杭/临平/藕花洲大街与宝幢路交叉口"},{"name":"郡西云台","value":"56000","address":"余杭/良渚/良渚文化村郡西云台山地美学馆"},{"name":"中粮天悦大悦城","value":"35000","address":"拱墅/和睦/莫干山路与隐秀路交叉口"},{"name":"中天珺府","value":"17200","address":"临安/临安/科技大道2988号"},{"name":"杭州壹号院","value":"48100","address":"滨江/奥体/飞虹路与七贾闸弄路口"},{"name":"佳源湘湖印象","value":"23000","address":"萧山/义桥/风情大道与南六路交叉口"},{"name":"融创金成十锦台","value":"20000","address":"临安/临安/锦北街道马溪路与西墅街交汇处"},{"name":"杭州中央车站广场","value":"35000","address":"江干/火车东站/东宁路与鸿泰路交叉口"},{"name":"苕溪壹号","value":"21500","address":"临安/临安/苕溪北街与临水路交叉口"},{"name":"众安学君里","value":"17000","address":"余杭/闲林/天目山西路和东西大道交汇处"},{"name":"旭辉东原吴越府","value":"26399","address":"临安/临安/���马路与福兴街交叉口"},{"name":"万固观澜府","value":"15000","address":"建德/建德/洋溪街道新安江特大桥西侧"},{"name":"星南站","value":"27500","address":"萧山/萧山新城区/商城南路999号"},{"name":"西溪永乐城","value":"22000","address":"余杭/未来科技城/文一西路与景兴路交叉口"},{"name":"万通中心","value":"70000","address":"拱墅/拱宸桥/上塘路与大关路交界处西北角"},{"name":"绿城雄凯国际","value":"37000","address":"萧山/萧山市区/萧绍路587号国泰宾馆东侧"},{"name":"汉港武林汇","value":"31000","address":"拱墅/申花/莫干山路和申花路交叉口"},{"name":"理想世纪金座","value":"26000","address":"余杭/临平/世纪大道674号"},{"name":"新城璟隽公馆","value":"32000","address":"萧山/萧山新城区/建设一路与通惠路交叉口向东约100米"},{"name":"世包国际中心","value":"43000","address":"江干/钱江新城/市民街99号"},{"name":"新西湖小镇","value":"18000","address":"余杭/闲林/杭泰路69号"},{"name":"嘉丰万悦城","value":"16000","address":"余杭/临平/东湖北路嘉丰万悦城"},{"name":"时代湘湖","value":"38000","address":"萧山/闻堰/闻堰镇湘湖路3333号"},{"name":"世茂天宸","value":"40000","address":"江干/华家池/艮山西路95号"},{"name":"绿城桃李春风","value":"26000","address":"临安/临安/文一西路以西，青山湖科技大道"},{"name":"中栋国际","value":"23000","address":"萧山/萧山新城区/风情大道与建设一路交叉口"},{"name":"上坤山语四季","value":"20962","address":"余杭/临平/临平大道与顺风路交汇处"},{"name":"糖朝","value":"35000","address":"萧山/萧山新城区/金惠路324号"},{"name":"碧桂园玖晟府","value":"17000","address":"临安/临安/流霞街与双拥路交叉口"},{"name":"天骄香槟郡","value":"9600","address":"建德/建德/更楼街道寿昌江西侧"},{"name":"成龙官山邸","value":"19016","address":"临安/临安/吴越文化公园内"},{"name":"杭钢尚堂府","value":"28000","address":"拱墅/半山/科祥街50号（石祥路拱康路口）"},{"name":"中骏柏景湾","value":"17230","address":"临安/临安/钱王大街与望湖路交汇处"},{"name":"振泽左右办公世界","value":"32000","address":"萧山/钱江世纪城/鸿宁路与皓月路交叉口"},{"name":"旭辉东原吴越府","value":"16000","address":"临安/临安/万马路与福兴街交叉口"},{"name":"临安宝龙广场","value":"17500","address":"临安/临安/西墅街和醉花路交汇处"},{"name":"城中府","value":"16700","address":"临安/临安/锦城街道城中街延伸段"},{"name":"天阳蓝光蔚蓝","value":"18500","address":"临安/临安/灵鹤路与天柱街交汇处"},{"name":"国能悦玺台","value":"17536","address":"临安/临安/灵凤路988号"},{"name":"群升万国城","value":"13500","address":"余杭/塘栖/龙船坞路119号附近"},{"name":"千岛湖雨润星雨华府","value":"13500","address":"淳安/淳安/环湖北路1888号"},{"name":"山南印","value":"40000","address":"上城/复兴/水澄路8号"},{"name":"奥体万科中心","value":"30000","address":"萧山/钱江世纪城/钱江世纪城平澜路与民祥路交叉口"},{"name":"万科桂语东方","value":"21000","address":"海宁市/海宁/人民大道与景德路交叉口北200米"},{"name":"运河万科中心","value":"28000","address":"拱墅/桥西/祥符街道萍水东街与花园岗街交叉口"},{"name":"金地玖峯汇","value":"46000","address":"江干/九堡/杭海路与九福路交汇处"},{"name":"保利融信和光尘樾","value":"25909","address":"余杭/良渚/古墩路与杜文路交汇处"},{"name":"越秀湖山悦","value":"18000","address":"临安/临安/望湖路与创业路交汇处"},{"name":"星耀中心","value":"48000","address":"滨江/滨江区政府/滨和路598号"},{"name":"金科博翠碧蓝湾","value":"40400","address":"江干/九堡/蔡家庵路杭州市公安消防局地铁消防分局南180米"},{"name":"资辉壹方汇","value":"40000","address":"拱墅/申花/莫干山路987号"},{"name":"德信杭州ONE","value":"26000","address":"余杭/勾庄/杭义路与良运街交叉口"},{"name":"金辉久尚云筑","value":"25500","address":"余杭/乔司/天万路与杭乔路交叉口"},{"name":"中梁申花百悦公馆","value":"39000","address":"拱墅/申花/莫干山路汽车北站以北"},{"name":"前湾国际社区","value":"28665","address":"萧山/萧山开发区/经十九路与纬九路交叉口"},{"name":"璞玉公馆","value":"55000","address":"江干/九堡/杭乔路与德胜东路高架交汇处"},{"name":"融创江南壹号院","value":"28300","address":"萧山/萧山开发区/竞潮路与钱农东路交叉口"},{"name":"创道国际CPARK","value":"28000","address":"拱墅/申花/塘萍路与萍水街交叉口"},{"name":"璟宸府","value":"49800","address":"江干/笕桥/秋石高架与德胜高架交叉口东"},{"name":"恒伟科技园","value":"11950","address":"临安/临安/青山湖大园路与北环北二路交叉口"},{"name":"富力湖滨悦居","value":"14000","address":"淳安/淳安/千岛湖阳光路880号"},{"name":"璟宸府","value":"40800","address":"江干/笕桥/秋石高架与德胜高架交叉口东"},{"name":"汇铂金座","value":"32000","address":"江干/九堡/新塘路与五号港之路交叉口"},{"name":"招商I-Park","value":"55000","address":"江干/九堡/新塘路与五号港之路交叉口"},{"name":"宝龙旭辉城","value":"19781","address":"临安/临安/科技大道与大园路交叉口"},{"name":"天城府天著","value":"34800","address":"江干/火车东站/石桥路与新风路交叉口"},{"name":"宋都如意春江","value":"24500","address":"富阳/富阳/首创奥特莱斯旁200米宋都如意春江"},{"name":"碧桂园中梁凤鸣公馆","value":"18019","address":"临安/临安/锦城街道钱王街和锦天路交叉口西侧约200米"},{"name":"春天学府","value":"18500","address":"临安/临安/城中街与锦天路交叉口"},{"name":"湖滨外滩","value":"19592","address":"临安/临安/滨湖新区阿里山大酒店东面"},{"name":"锦上桃源","value":"31000","address":"拱墅/半山/云锦路与丰源街交叉口"},{"name":"杭佑名座","value":"25500","address":"萧山/南部卧城/蜀山路杭佑名座"},{"name":"奥体国际村","value":"38000","address":"萧山/钱江世纪城/利丰路与市心北路交叉口"},{"name":"德信金茂佳源府","value":"25200","address":"萧山/南部卧城/风情大道与小白线交叉口往东100米"},{"name":"御东方","value":"26300","address":"江干/丁桥/长睦路与三义路交叉口"},{"name":"金地广场","value":"25000","address":"余杭/三墩/古墩路与金渡北路交叉口西北角加油站旁"},{"name":"滨江东方海岸(萧山)","value":"18000","address":"萧山/闻堰/湘湖路滨江东方海岸,三江路68号"},{"name":"中海云宸","value":"47000","address":"滨江/长河/滨康路397号"},{"name":"融信旭辉湘湖悦章","value":"25200","address":"萧山/南部卧城/风情大道和南四路交叉口往东500米"},{"name":"越秀西海岸","value":"18500","address":"临安/临安/唐塍街与星港路交叉口"},{"name":"旭辉中粮朗香郡","value":"19307.96","address":"临安/临安/天柱街与崇文路交汇处"},{"name":"新湖菲林山","value":"41000","address":"余杭/闲林/文二西路与绿汀路交叉口南侧"},{"name":"瑞城熙园","value":"40500","address":"余杭/闲林/运溪路121号"},{"name":"九龙仓雍景山","value":"13200","address":"富阳/富阳/受降镇闲祝公路向阳路交叉口,万通路58号"},{"name":"佳源优樾","value":"18500","address":"临安/临安/吴越街与临天路交界处"},{"name":"中交财富中心","value":"24000","address":"拱墅/申花/莫干山路与萍水街交汇处"},{"name":"东部之星","value":"18000","address":"钱塘新区/高教园区西/白洋街道2号大街511号"},{"name":"融创金成十锦台","value":"24866","address":"临安/临安/马溪路与西墅街交汇处"},{"name":"阳光城上林湖","value":"25500","address":"富阳/富阳/上林路1号"},{"name":"万融城","value":"24000","address":"拱墅/万达广场/祥富路与杨家浜路东南角"},{"name":"杭房揽翠","value":"45000","address":"西湖/文教/翠柏路延伸段"},{"name":"龙湖春江天越","value":"27205","address":"钱塘新区/大学城北/凌云街与千帆路交叉口"},{"name":"风荷锦庭","value":"20300","address":"萧山/义桥/义桥镇新峡路油虎线交叉口"},{"name":"绿城云栖桃花源","value":"39800","address":"富阳/富阳/云水路与云水北路交叉口"},{"name":"绿城云栖桃花源","value":"15000","address":"富阳/富阳/云水路与云水北路交叉口"},{"name":"万科大溪谷","value":"30000","address":"余杭/良渚/运溪路1100号"},{"name":"阳光城碧桂园玺园","value":"29000","address":"越城区/迪荡/二环北路阳光城碧桂园玺园"},{"name":"欣隆府","value":"14500","address":"海宁市/海宁市/隆兴路95号"},{"name":"海盐阳光城翡丽湾","value":"12000","address":"海盐县/海盐县/华丰路海盐阳光城翡丽湾"},{"name":"新城金樾","value":"13000","address":"平湖市/平湖市/新07省道与九场公路交汇处"},{"name":"荣安海上明月","value":"13500","address":"海盐县/海盐县/北荡路荣安海上明月"},{"name":"定淘汇","value":"15000","address":"海宁市/海宁市/海宁大道267号"},{"name":"融创海越府","value":"16000","address":"平湖市/平湖市/平成路融创海越府"},{"name":"金科集美嘉悦","value":"19500","address":"嘉善县/嘉善县/姚庄大道和兴学路交叉路口"},{"name":"中南漫悦湾","value":"16000","address":"平湖市/平湖市/金海洋大道东侧"},{"name":"乔克家居广场","value":"15000","address":"嘉善县/嘉善县/世纪大道乔克家居广场"},{"name":"万联花园","value":"22500","address":"嘉善县/嘉善县/世纪大道与车站南路交汇处"},{"name":"海伦堡观澜","value":"9000","address":"海宁市/海宁市/仙侠路和富江路交汇处"},{"name":"海洋花园","value":"15800","address":"平湖市/平湖市/九龙山旅游度假区"},{"name":"侨福一品高尔夫","value":"21500","address":"海宁市/海宁市/海宁市农发区聆涛路188号"},{"name":"钱江君庭","value":"25000","address":"海宁市/海宁市/海宁市盐官镇中新路77号"},{"name":"中国崇福国际皮草中心","value":"17000","address":"桐乡市/桐乡市/青阳路中国崇福国际皮草中心"},{"name":"阳光城君悦龙山","value":"10500","address":"上虞区/上虞区/百谢路与龙虎山路交叉口"},{"name":"锦瑞苑","value":"7500","address":"上虞区/上虞区/人民北路2号锦瑞苑"},{"name":"佳源广场越公馆","value":"14500","address":"越城区/镜湖/解放大道与洋江西路交叉口，奥体中心南面"},{"name":"杭钢万科紫晶首府","value":"12000","address":"诸暨市/诸暨/艮塔东路苎萝路口"},{"name":"欧洲花园","value":"12000","address":"长兴县/长兴县/太湖大道与长州路交叉口"},{"name":"西城时代翰林院","value":"9000","address":"长兴县/长兴县/五峰路251号"},{"name":"绿城华景川之江明月","value":"21500","address":"海宁市/海宁市/聆涛路和海河路交叉口"},{"name":"卧龙天香南园","value":"11000","address":"上虞区/上虞区/上虞区舜耕大道春晖大道路口"},{"name":"名门东和园","value":"15000","address":"海宁市/海宁市/文宗南路185-1"},{"name":"港汇广场","value":"12000","address":"桐乡市/桐乡市/崇德西路310号"},{"name":"金泰公馆","value":"15500","address":"海宁市/海宁市/文苑南路金泰公馆"},{"name":"绿城华景川蘭园","value":"18000","address":"海宁市/海宁市/许村镇政府北侧海宁五中南侧"},{"name":"春风十里","value":"15500","address":"南湖区/南湖区/南湖区凤桥镇十里春风板块"},{"name":"万城雅园","value":"12500","address":"海宁市/海宁市/硖斜路万城雅园"},{"name":"四季华府","value":"10000","address":"南浔区/南浔区/向阳路沈塘路交叉口"},{"name":"西塘玺樾","value":"18000","address":"嘉善县/嘉善县/宏福路西塘玺樾"},{"name":"聚东德胜府","value":"19500","address":"海宁市/海宁市/安澜路与春汇路交叉口"},{"name":"紫金公园府","value":"11500","address":"秀洲区/秀洲区/梅北路紫金公园府"},{"name":"锦城豪庭","value":"15000","address":"嘉善县/嘉善县/姚庄大道锦城豪庭"},{"name":"崇福百悦公馆","value":"12000","address":"桐乡市/桐乡市/世纪大道崇福百悦公馆"},{"name":"融创海逸长洲","value":"13500","address":"海盐县/海盐县/盐北路融创海逸长洲"},{"name":"万达新公馆","value":"15000","address":"南湖区/南湖区/广益路万达新公馆"},{"name":"世茂璀璨明樾","value":"19000","address":"越城区/城西/二环西路世茂璀璨明樾"},{"name":"环球公馆","value":"11000","address":"南湖区/南湖区/文昌路1290号"},{"name":"富力城悦界","value":"10000","address":"吴兴区/东部新城/戴山路富力城悦界"},{"name":"正荣碧桂园悦公馆","value":"12000","address":"秀洲区/秀洲区/闻川路780号"},{"name":"杭钢万科紫晶首府","value":"13000","address":"诸暨市/诸暨/艮塔东路苎萝路口"},{"name":"鸿翔仰山郡","value":"18000","address":"海宁市/海宁市/海宁市高新区长安镇越川路与汉帛路交叉口"},{"name":"佳源海棠府","value":"16500","address":"海宁市/海宁市/海棠路佳源海棠府"},{"name":"融信创世纪","value":"9000","address":"嵊州市/嵊州/官河南路融信创世纪"},{"name":"绍兴新城悦隽公馆","value":"13500","address":"越城区/袍江/越城区群贤路与越秀路交叉口"},{"name":"中天钱塘玥","value":"20000","address":"海宁市/海宁市/创智路中天钱塘玥"},{"name":"金地都会艺境","value":"15500","address":"南湖区/南湖区/新昌路金地都会艺境"},{"name":"盈都新天地","value":"15000","address":"海宁市/海宁市/海宁高新区栋梁路南侧，创智路西侧"},{"name":"华景川运河宸园","value":"11000","address":"德清县/德清县/新城路华景川运河宸园"},{"name":"卓越泓玺台","value":"17000","address":"秀洲区/秀洲区/秀园路卓越泓玺台"},{"name":"雅居乐金茂中央公园","value":"16000","address":"南湖区/南湖区/花园路雅居乐金茂中央公园"},{"name":"卓越珑府","value":"17500","address":"南湖区/南湖区/长水路卓越珑府"},{"name":"金泰时尚花苑","value":"13000","address":"海宁市/海宁市/海宁大道金泰时尚花苑"},{"name":"世茂璀璨时代","value":"17500","address":"南湖区/南湖区/南湖新区南溪东路与亚欧路交汇处"},{"name":"荣盛祥云府","value":"11500","address":"秀洲区/秀洲区/嘉兴市秀洲新区城东路与鸣羊路交汇处西北"},{"name":"东方新天地","value":"11500","address":"海宁市/海宁市/连杭经济开发区101省道与仰山路交叉口"},{"name":"融信澜庭","value":"12200","address":"海宁市/海宁市/硖斜公路融信澜庭"},{"name":"朗诗蔚蓝街区","value":"15000","address":"海宁市/海宁市/崇长公路朗诗蔚蓝街区"},{"name":"科大柳岸春风","value":"9800","address":"桐乡市/桐乡市/河山镇平安路与振兴路交汇处"},{"name":"奥克斯金宸玖和府","value":"48700","address":"萧山/萧山开发区/金城路与新城路交汇处"},{"name":"世宸名府","value":"29700","address":"萧山/萧山开发区/金城路与高新五路交叉口"},{"name":"湖境云庐","value":"44400","address":"余杭/闲林/文二西路与绿汀路交汇处"},{"name":"赞成旭辉时代悦章","value":"19400","address":"余杭/崇贤/望梅路与五洲路交叉口西北方"},{"name":"恒大林溪郡","value":"15000","address":"建德/建德/G320国道与汤家线交汇处"},{"name":"恒大林溪郡","value":"14000","address":"建德/建德/G320国道与汤家线交汇处"},{"name":"海伦堡棠锦","value":"30000","address":"余杭/闲林/五常大道1号,中泰街道新明半岛海伦堡棠锦"},{"name":"中豪湘和国际","value":"25000","address":"江干/景芳/运河东路与昙花庵路交汇处"},{"name":"湖滨外滩","value":"21201","address":"临安/临安/滨湖新区阿里山大酒店东面"},{"name":"易辰江南大院","value":"14903","address":"临安/临安/锦北街道潘山村"},{"name":"越秀西海岸","value":"28184","address":"临安/临安/唐塍街与星港路交叉口"},{"name":"中国中铁溪畔云璟府","value":"21300","address":"富阳/富阳/新桥新路与高桥南路交汇处"},{"name":"绿地亚洲公园","value":"18200","address":"临安/临安/科技大道八百里站旁"},{"name":"龙湖葛洲坝景粼天著","value":"58000","address":"江干/火车东站/明实路与天成路交叉口"},{"name":"时代滨江悦","value":"42000","address":"萧山/萧山新城区/风情大道与金城路交叉口"},{"name":"仁恒滨江园","value":"70800","address":"上城/南星/钱江路与甬江路交叉口"},{"name":"天阅运河源","value":"44900","address":"拱墅/万达广场/京杭大运河与留石快速路交叉口"},{"name":"绿城青亭","value":"28000","address":"拱墅/半山/依山路与青城路交叉口"},{"name":"和谐江和城","value":"19000","address":"建德/建德/滨江路3号"},{"name":"万科君望","value":"16800","address":"富阳/富阳/江滨东大道239号"},{"name":"祥生云湖城","value":"21000","address":"富阳/富阳/银湖街道银湖实验小学东侧"},{"name":"金茂首开国樾","value":"48600","address":"拱墅/拱宸桥/科园路与蔡马东路交叉口"},{"name":"励骏花园","value":"19000","address":"桐庐/桐庐/中杭路600号"},{"name":"春江山居","value":"13800","address":"桐庐/桐庐/富春路渡济大桥东侧"},{"name":"金马高悦府","value":"20000","address":"桐庐/桐庐/宝心路555号"},{"name":"天阳云栖梅林","value":"21500","address":"桐庐/桐庐/梅林路与云栖路交叉口"},{"name":"赞成旭辉时代悦章","value":"28300","address":"余杭/崇贤/望梅路与五洲路交叉口西北方"},{"name":"蓝城春风燕语","value":"22874","address":"临安/临安/崇文路2099号"},{"name":"泰禾野风大城小院","value":"15000","address":"富阳/富阳/九龙大道180号"},{"name":"万科西望","value":"30412","address":"临安/临安/马溪路和北排街交叉口"},{"name":"星光荟","value":"30000","address":"西湖/转塘/美院北路与博美路交汇处"},{"name":"志成广场御江月","value":"30000","address":"滨江/浦沿/东信大道688号"},{"name":"运河万科中心","value":"20000","address":"拱墅/桥西/祥符街道萍水东街与花园岗街交叉口"},{"name":"绿都金科和宁文华府","value":"36000","address":"拱墅/万达广场/莫干山路与新文路交叉口"},{"name":"中旅名门府新境","value":"34200","address":"萧山/萧山新城区/建设一路与万向路交叉口西南侧（中旅名门府东侧）"},{"name":"融创东麟府","value":"25000","address":"萧山/萧山开发区/建设四路与政通路交叉口往北200米处"},{"name":"贤辰府","value":"12500","address":"富阳/富阳/新兴西路10-15号"},{"name":"奥克斯金宸玖和府","value":"29700","address":"萧山/萧山开发区/金城路与新城路交汇处"},{"name":"德信市心府","value":"27500","address":"萧山/南部卧城/市心路汇德隆购物中心南"},{"name":"科大春风十里","value":"9500","address":"海宁市/海宁市/育才路科大春风十里"},{"name":"运河ONE","value":"38000","address":"拱墅/万达广场/石祥路与通益路交叉口"},{"name":"绿都鉴未来","value":"26800","address":"余杭/闲林/杭泰路与中泰路交汇处"},{"name":"金茂万科新都会","value":"21000","address":"富阳/富阳/金桥北路和高桥西路交汇处西南角（奥迪4S对面）"},{"name":"富力御江山小区","value":"10000","address":"建德/建德/新安江根龙街道"},{"name":"城镇依山郡","value":"15500","address":"临安/临安/临水路吴越人家西大门"},{"name":"华联钱塘公馆","value":"90000","address":"江干/钱江新城/剧院路99号"},{"name":"保亿麓语湖苑","value":"18014.49","address":"临安/临安/鹤亭大街与灵凤路交汇处"},{"name":"凤起钱潮","value":"61800","address":"江干/景芳/凤起路与钱潮路交叉口"},{"name":"新视界公寓","value":"20800","address":"富阳/富阳/金桥北路与高桥西路交汇口往东约200米"},{"name":"华侨城芳菲与城","value":"35679","address":"江干/丁桥/临丁路华侨城芳菲"},{"name":"富力中心","value":"32000","address":"余杭/未来科技城/文一西路与舒心路交叉口"},{"name":"绿城晓风印月","value":"48100","address":"滨江/滨江区政府/江陵路和滨和路交叉处东北"},{"name":"竹悦山水轩","value":"11500","address":"临安/临安/潜川镇青山殿村306县道旁"},{"name":"美的西径晓风","value":"15000","address":"临安/临安/农林大路西径晓风"},{"name":"蓝城芷园","value":"34000","address":"富阳/富阳/九龙大道与320国道交叉口"},{"name":"滨江东原拥翠府","value":"37500","address":"萧山/萧山新城区/风情大道与纬九路交叉口"},{"name":"保利迪荡湖壹号","value":"40000","address":"越城区/迪荡/迪荡湖路保利迪荡湖壹号"},{"name":"绿城天语山居","value":"16450","address":"临安/临安/白泥路绿城·天语山居"},{"name":"新城棠樾","value":"13000","address":"柯桥区//兴工路新城棠樾"},{"name":"南山郡","value":"24000","address":"越城区//解放南路南山郡"},{"name":"富力中心","value":"34500","address":"余杭/未来科技城/文一西路与舒心路交叉口"},{"name":"碧桂园十里春风","value":"19100","address":"桐庐/桐庐/城南街道城南路与金圣路交叉口东100米"},{"name":"碧桂园十里春风","value":"30000","address":"桐庐/桐庐/城南街道城南路与金圣路交叉口东侧"},{"name":"高科商业中心","value":"15000","address":"富阳/富阳/富春街道高科路397号"},{"name":"云潮府","value":"24500","address":"萧山/萧山开发区/滨江二路与香樟路交叉口往北100米"},{"name":"招商闻博花城","value":"37500","address":"萧山/萧山新城区/博奥路与建设一路交汇处"},{"name":"九龙仓天玺","value":"62000","address":"拱墅/申花/学院北路与登云路交叉口"},{"name":"富春一品","value":"9188","address":"建德/建德/子胥西路86号"},{"name":"九龙仓华发天荟","value":"54169","address":"拱墅/申花/学院北路与登云路交叉口"},{"name":"中梁御府","value":"28500","address":"余杭/闲林/沈邱路中梁御府"},{"name":"江畔铭座","value":"20000","address":"富阳/富阳/江连街江畔铭座"},{"name":"海威天地","value":"40000","address":"滨江/滨江区政府/滨和路与阡陌路交叉口"},{"name":"融创臻源锦宁里","value":"58000","address":"萧山/萧山市区/纵七路（规划）与横四路（规划）交叉口"},{"name":"德信时光之宸","value":"16100","address":"萧山/萧山开发区/华诚路与弘���路交叉口"},{"name":"宝龙旭辉城","value":"16000","address":"临安/临安/科技大道宝龙旭辉城"},{"name":"保利迪荡湖壹号","value":"28000","address":"越城区/迪荡/迪荡湖路保利迪荡湖壹号"},{"name":"天阳金地风华绮轩","value":"14499","address":"海盐县/海盐县/海盐县武原街道新桥北路与海丰路交汇处东三百米（富人区）"},{"name":"金地云栖湾","value":"14700","address":"平湖市/平湖市/嘉兴市平湖新埭镇新兴北路与新扬路交叉口东300米"},{"name":"华侨城芳菲与城","value":"41419","address":"江干/丁桥/临丁路华侨城芳菲"},{"name":"科大春风十里","value":"9500","address":"海宁市/海宁市/育才路科大春风十里"},{"name":"湖境云庐","value":"44400","address":"余杭/闲林/文二西路与绿汀路交汇处"},{"name":"华侨城芳菲与城","value":"35679","address":"江干/丁桥/临丁路华侨城芳菲"},{"name":"御清城","value":"21800","address":"余杭/临平/兴国路8号"},{"name":"赞成旭辉时代悦章","value":"19400","address":"余杭/崇贤/望梅路与五洲路交叉口西北方"},{"name":"赞成旭辉时代悦章","value":"28300","address":"余杭/崇贤/望梅路与五洲路交叉口西北方"},{"name":"众安绿城南湖明月","value":"25000","address":"余杭/未来科技城/太炎路与余彭路交叉口"},{"name":"仁恒滨江园","value":"70800","address":"上城/南星/钱江路与甬江路交叉口"},{"name":"滨江御虹府","value":"45000","address":"萧山/钱江世纪城/永晖路与飞虹路交叉口"},{"name":"中骏临栖云府","value":"26502","address":"临安/临安/钱锦大道中骏临栖云府"},{"name":"世茂钱塘天誉","value":"61700","address":"江干/火车东站/机场路与德胜东路交叉口"},{"name":"永利·天泽府","value":"17000","address":"柯桥区/杨汛桥/杨江大道永利·天泽府"},{"name":"龙湖中天春江天境","value":"20000","address":"越城区/镜湖/凤林西路龙湖中天春江天境"},{"name":"东原德信九章赋","value":"28500","address":"萧山/南部卧城/市心路与南秀路交叉口西约600米"},{"name":"联发藏珑大境","value":"30900","address":"余杭/良渚/良渚大道和良平路交叉口"},{"name":"悦湖湾花园","value":"12000","address":"淳安/淳安/秀湖路"},{"name":"北辰奥园","value":"30000","address":"萧山/南部卧城/蜀山路与向旭路交叉口"},{"name":"理想银泰城","value":"19800","address":"余杭/临平/世纪大道与迎宾路交叉口南"},{"name":"嘉裕天城","value":"19522.84","address":"萧山/萧山开发区/商贸路与坎山大道交叉口"},{"name":"奥园华景川上锦宸府","value":"32259","address":"余杭/塘栖/东湖新城兴元路与兴超路交汇处"},{"name":"城南银泰城","value":"13600","address":"萧山/萧山开发区/桥戴线与恒达路交叉口"},{"name":"观棠明月","value":"34400","address":"余杭/塘栖/文苑路观棠明月"},{"name":"阳光城翡丽海岸","value":"23600","address":"富阳/富阳/江滨东大道1号"},{"name":"中骏临栖云府","value":"18091.58","address":"临安/临安/钱锦大道中骏临栖云府"},{"name":"越秀悦映城","value":"17579","address":"临安/临安/九州街悦映城"},{"name":"滨江龙湖东潮府","value":"63000","address":"江干/城东新城/同德路滨江龙湖东潮府"},{"name":"悦融湾","value":"13700","address":"萧山/大江东/党湾文化东路（党湾镇政府东南面约50米）"},{"name":"恒大珺睿府","value":"18500","address":"越城区/城南/会稽路恒大珺睿府"},{"name":"龙湖金茂逸墅","value":"43000","address":"越城区/镜湖/官渡路龙湖金茂逸墅"},{"name":"港龙铂樾府","value":"21000","address":"上虞区/上虞区/观山路港龙铂樾府"},{"name":"中梁云都汇","value":"25000","address":"西湖/转塘/转塘街道科海路与贤家弄交汇处东北侧"},{"name":"碧桂园泷悦","value":"17000","address":"淳安/淳安/阳光路900号"},{"name":"中南棠玥湾","value":"43427","address":"江干/九堡/地铁七堡站往西400米"},{"name":"杭语蓝庭","value":"29000","address":"余杭/未来科技城/余杭区未来科技城凤新路与东西大道交叉口西侧（在建阿里菜鸟总部对面）"},{"name":"之江潮","value":"31000","address":"西湖/转塘/转塘街道洙泗路与东狮路交汇处"},{"name":"新城璟郡澜庭","value":"13000","address":"海盐县/海盐县/海盐县环城南路与武通路交叉口"},{"name":"景瑞镜溪绿汀","value":"46500","address":"余杭/闲林/绿汀路与文二路交汇处东南方"},{"name":"世茂天宸","value":"65000","address":"江干/华家池/艮山西路95号"},{"name":"国宸府","value":"44586.7","address":"萧山/南部卧城/萧山区育才路与南三路交叉口"},{"name":"龙湖葛洲坝景粼天著","value":"46500","address":"江干/火车东站/明实��与天成路交叉口"},{"name":"绿城天语山居","value":"15000","address":"临安/临安/白泥路绿城·天语山居"},{"name":"绿城卓越傲旋城","value":"40000","address":"滨江/长河/滨康路与时代大道交叉口西北角"},{"name":"碧桂园泷悦","value":"16000","address":"淳安/淳安/阳光路900号"},{"name":"远洋西溪公馆","value":"54800","address":"余杭/西溪/文一西路与荆长大道交汇处"},{"name":"中天雅境","value":"19832","address":"临安/临安/北排街中天雅境"},{"name":"嵊州恒大未来城","value":"10200","address":"嵊州市/嵊州/嵊州大道南嵊州恒大未来城"},{"name":"嵊州恒大未来城","value":"12000","address":"嵊州市/嵊州/嵊州大道南嵊州恒大未来城"},{"name":"青山湖未来之芯","value":"11000","address":"临安/临安/青山湖大园路与创业街交叉口"},{"name":"新力帝泊湾","value":"8500","address":"诸暨市/诸暨/凯翔大道新力帝泊湾"},{"name":"国宸府","value":"25599","address":"萧山/南部卧城/育才路与南三路交叉口"},{"name":"诸暨宝龙广场","value":"8700","address":"诸暨市/诸暨/艮塔西路诸暨宝龙广场"},{"name":"云集金座","value":"11500","address":"临安/临安/青山湖大园路和市地街交汇处"},{"name":"鸿翔海棠湾","value":"11500","address":"桐乡市/桐乡市/新兴路鸿翔海棠湾"},{"name":"九天泽一国际","value":"34000","address":"江干/九堡/时装街与云裳直街交汇处"},{"name":"鸿翔杨柳郡","value":"14500","address":"海宁市/海宁市/双学路鸿翔杨柳郡"},{"name":"世茂云图","value":"9500","address":"上虞区/上虞区/海东路世茂云图"},{"name":"滨江龙湖东潮府","value":"46500","address":"江干/城东新城/同德路滨江龙湖东潮府"},{"name":"港龙铂樾府","value":"18000","address":"上虞区/上虞区/观山路港龙铂樾府"},{"name":"华夏之心","value":"22000","address":"余杭/未来科技城/余杭塘路与海鸥路交叉口"},{"name":"融创森与海之城","value":"24000","address":"萧山/萧山开发区/东思线与浦南大道交叉口"},{"name":"东渡酩悦","value":"40000","address":"江干/火车东站/东宁路与鸿泰路口交叉口"},{"name":"华夏之心","value":"23000","address":"余杭/未来科技城/余杭塘路与海鸥路交叉口"},{"name":"星创新里程中心","value":"28000","address":"余杭/未来科技城/城东路新里程中心"},{"name":"苕溪学府","value":"22671","address":"临安/临安/苕溪南街与横潭路交叉口西南侧"},{"name":"随塘","value":"22500","address":"余杭/塘栖/秋石北路与圆满路交叉口"},{"name":"随塘","value":"33000","address":"余杭/塘栖/秋石北路与圆满路交叉口"},{"name":"环翼城","value":"42000","address":"江干/城东新城/鸿泰路与明月桥路交叉口"},{"name":"雍澜府","value":"20500","address":"余杭/塘栖/秋石北路和学运街交叉口"},{"name":"华策中心","value":"26000","address":"西湖/西溪/花蒋路与五常港路交汇处"},{"name":"景顺铂悦城","value":"33000","address":"西湖/留下/屏峰路景顺铂悦城"},{"name":"状元府","value":"28000","address":"临安/临安/农林大路2449号"},{"name":"世宸名府","value":"29000","address":"萧山/萧山开发区/金城路与高新五路交叉口"},{"name":"大名城华府","value":"30000","address":"萧山/萧山新城区/建设一路23号"},{"name":"国玺悦龙府","value":"38500","address":"萧山/萧山新城区/市心北路与建设一路交叉口"},{"name":"宋都如意溪湖","value":"17600","address":"临安/临安/滨湖新区城中东街与翠浪路交汇处"},{"name":"山水时代","value":"39000","address":"萧山/钱江世纪城/市心北路和奔竞大道交叉口"},{"name":"中锐招商星未来","value":"28499","address":"余杭/闲林/中泰路与康泰路口东面"},{"name":"上塘九里","value":"19800","address":"余杭/仁和/仁和大道和怡然街交叉口西侧"},{"name":"北城芳满庭","value":"20000","address":"余杭/仁和/东风路与和旺街交叉口"},{"name":"云潮府","value":"33000","address":"萧山/萧山开发区/滨江二路与香樟路交叉口往北100米"},{"name":"中天万科启宸","value":"21566","address":"临安/临安/临天路2399号"},{"name":"荣盛檀越府","value":"22000","address":"临安/临安/崇文路与蒋墅街交汇处"},{"name":"信达东莱府","value":"46500","address":"江干/城东新城/同德路与白石庙路交叉口西侧"},{"name":"北城芳满庭","value":"34000","address":"余杭/仁和/东风路北城芳满庭"},{"name":"金隅观澜商业中心","value":"15000","address":"钱塘新区/沿江南/江平路金隅观澜商业中心"},{"name":"融创城","value":"17800","address":"钱塘新区/大江东/青六路与北二路交叉口"},{"name":"杭州江山风华","value":"17800","address":"余杭/崇贤/望梅路与宏达路交汇处"},{"name":"融创森与海之城","value":"14000","address":"萧山/萧山开发区/东思线与浦南大道交叉口"},{"name":"印象苕溪城","value":"16500","address":"临安/临安/苕溪北街与万马路交汇口"},{"name":"越秀前滩名邸","value":"38400","address":"江干/九堡/蔡家庵路越秀前滩名邸"},{"name":"宝龙旭辉城","value":"16000","address":"临安/临安/科技大道宝龙旭辉城"},{"name":"蓝城芷园","value":"34000","address":"富阳/富阳/九龙大道与320国道交叉口"},{"name":"滨江东原拥翠府","value":"37500","address":"萧山/萧山新城区/风情大道与纬九路交叉口"},{"name":"滨江御虹府","value":"45000","address":"萧山/钱江世纪城/永晖路与飞虹路交叉口"},{"name":"中骏临栖云府","value":"18091.58","address":"临安/临安/钱锦大道中骏临栖云府"},{"name":"龙湖金茂逸墅","value":"43000","address":"越城区/镜湖/官渡路龙湖金茂逸墅"},{"name":"新湖金色池塘","value":"15200","address":"余杭/未来科技城/寻梨街8号"},{"name":"中骏临栖云府","value":"26502","address":"临安/临安/钱锦大道中骏临栖云府"},{"name":"越秀前滩名邸","value":"38400","address":"江干/九堡/蔡家庵路越秀前滩名邸"},{"name":"金铂湾","value":"40000","address":"滨江/滨江区政府/闻涛路金铂湾"},{"name":"钱塘大观","value":"28000","address":"滨江/浦沿/闻涛路钱塘大观"},{"name":"恒大城市之光","value":"31000","address":"滨江/彩虹城/滨文路与时代大道交叉口"},{"name":"碧桂园东旭府","value":"18156","address":"萧山/义桥/时代大道沿线，东方文化园南约1.6千米"},{"name":"润东府","value":"11500","address":"钱塘新区/大江东/佳苑路润东府"},{"name":"德信时代之心","value":"40000","address":"滨江/长河/聚才路德信时代之心"},{"name":"绿城九龙仓桂语朝阳","value":"29800","address":"萧山/萧山新城区/市心路地铁2号线朝阳站B出口北30米"},{"name":"绿城杨柳郡","value":"35377","address":"江干/九堡/九和路516号"},{"name":"绿地华家池印","value":"56000","address":"江干/华家池/环城北路东2800米（艮山西路与秋涛北路交叉口）"},{"name":"华元西溪欢乐城","value":"40000","address":"余杭/翡翠城/五常大道华元西溪欢乐城"},{"name":"东海水景城","value":"23740","address":"余杭/临平/世纪大道501号"},{"name":"碧桂园越溪府","value":"15338","address":"萧山/临浦/东藩路碧桂园越溪府"},{"name":"莱茵河畔","value":"9000","address":"长兴县/长兴县/锦绣路莱茵河畔"},{"name":"朗诗乐府","value":"42000","address":"下城/德胜东/胜景路朗诗乐府"},{"name":"保利中心","value":"29000","address":"江干/景芳/艮山西路与新塘路交叉口"},{"name":"金骏大厦","value":"28000","address":"江干/景芳/钱江新城北冀四季青街道水湘路341号"},{"name":"三花国际","value":"42000","address":"江干/城东新城/明月桥路和鸿泰路交汇处"},{"name":"万科君望","value":"24500","address":"富阳/富阳/江滨东大道239号"},{"name":"玲珑府","value":"35000","address":"滨江/西兴/西兴路399号"},{"name":"金色和庄","value":"12000","address":"钱塘新区/大江东/河庄大道金色和庄"},{"name":"滨江金茂府","value":"65981","address":"滨江/滨江区政府/滨盛路滨江金茂府"},{"name":"昆盛肖邦","value":"35000","address":"江干/九堡/九福路与九华路交叉口"},{"name":"运河公馆","value":"30000","address":"拱墅/桥西/小河路与花园岗街交汇处"},{"name":"杭州港龙城","value":"25000","address":"江干/城东新城/明月桥路与鸿泰路交叉路口"},{"name":"金隅空港公馆","value":"20000","address":"钱塘新区/沿江南/下沙经济技术开发区24号大街与19号交汇处东南角"},{"name":"天达广场","value":"14500","address":"江干/九堡/艮山东路180号天达大厦"},{"name":"中赢云际","value":"46000","address":"滨江/滨江区政府/江虹路与滨和路交汇处东北侧"},{"name":"金隅空港公馆","value":"20000","address":"钱塘新区/沿江南/下沙经济技术开发区24号大街与19号交汇处东南角"},{"name":"天达广场","value":"14500","address":"江干/九堡/艮山东路180号天达大厦"},{"name":"三花国际","value":"42000","address":"江干/城东新城/明月桥路和鸿泰路交汇处"},{"name":"宝嘉誉府","value":"40000","address":"西湖/申花/石祥西路788号"},{"name":"天阳武林邸","value":"80000","address":"拱墅/申花/莫干山路与登云路交叉口向北300米"},{"name":"和昌钱塘外滩","value":"12000","address":"海宁市/海宁市/仰山路和昌钱塘外滩"},{"name":"景瑞阳光城法兰公园","value":"18960","address":"余杭/临平/临平天荷路与荷花路交界处"},{"name":"融创微风之城","value":"11800","address":"富阳/富阳/东桥路169号"},{"name":"滨江江南名府","value":"31000","address":"萧山/萧山新城区/通惠北路与建设二路交汇处"},{"name":"雷威沁园","value":"16396","address":"临安/临安/锦北街道临水路雷威沁园"},{"name":"璞玉公馆","value":"34000","address":"江干/九堡/杭乔路与德胜东路高架交汇处"},{"name":"华瑞中心","value":"24000","address":"萧山/萧山新城区/庆丰路19号"},{"name":"憬天国际名座","value":"16850","address":"萧山/南部卧城/萧山通惠南路(南环向南一百米)"},{"name":"融创微风之城","value":"18000","address":"富阳/富阳/东桥路169号"},{"name":"奥克斯缔逸城","value":"29500","address":"西湖/良渚/古墩路奥克斯缔壹城"},{"name":"德信滨海广场","value":"13250","address":"海盐县/海盐县/枣园路德信滨海广场"},{"name":"金地宋都都会钱塘","value":"24652","address":"钱塘新区/大学城北/水云街与文淙北路交叉口"},{"name":"润东府","value":"11500","address":"钱塘新区/大江东/佳苑路润东府"},{"name":"合景天峻","value":"13500","address":"海盐县/海盐县/百尺北路与华丰路交叉口"},{"name":"滨江碧桂园翡翠江南","value":"33300","address":"萧山/钱江世纪城/利华路滨江碧桂园翡翠江南"},{"name":"滨江碧桂园卧城印象","value":"25200","address":"萧山/南部卧城/蜀山路与向旭路交叉口"},{"name":"莱茵河畔","value":"13000","address":"长兴县/长兴县/锦绣路莱茵河畔"},{"name":"大江东宝龙广场","value":"16200","address":"钱塘新区/大江东/青六路与江东大道交汇口"},{"name":"聚米喆园","value":"13500","address":"嘉善县/嘉善县/东方路88号"},{"name":"德信碧桂园印江南","value":"26318","address":"萧山/南部卧城/蜀山路与向旭路交叉"}]