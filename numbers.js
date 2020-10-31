const numbers = [
    {
        category_id: 1,
        name: "Acil Çağrı Merkezi",
        description: "Ambulans, polis, jandarma, itfaiye, orman yangını ihbarı benzeri pek çok acil durum birimine sadece 112’yi tuşlayarak, tek hat üzerinden ulaşabilirsiniz. ",
        number: "112",
        image: require("../images/numbers/112.png")
    },
    {
        category_id: 1,
        name: "İtfaiye",
        description: "Yangın ve itfai olaylarla ilgili acil yardım ihtiyacı duyduğunuzda arayabilirsiniz.",
        number: "110",
        image: require("../images/numbers/110.png")
    },
    {
        category_id: 1,
        name: "Polis İmdat",
        description: "İlgili hattı arayarak; mağduriyetinizi, şikayetlerinizi, bir suç işleneceğine dair duyduğunuz şüpheyi iletebilir, trafik kazalarını ve trafik kural ihlali ihbarlarınızı bildirebilirsiniz.",
        number: "155",
        image: require("../images/numbers/155.png")
    },
    {
        category_id: 1,
        name: "Jandarma İmdat",
        description: "Bir suç işleneceğine dair şüphelerinizi, mağduriyetinizi, işlenen bir suçla ilgili tanık olduğunuz detayları iletebilir, can güvenliğinizi tehdit eden durumlara dair şikayet ve endişelerinizi bildirerek yardım talep edebilirsiniz.",
        number: "156",
        image: require("../images/numbers/156.png")
    },
    {
        category_id: 1,
        name: "Ulusal Zehir Danışma Merkezi",
        description: "Kimyasal zehirlenmeden besin zehirlenmesine kadar oldukça geniş kapsamda hizmet veren bir birimdir.",
        number: "114",
        image: require("../images/numbers/114.png")
    },
    {
        category_id: 1,
        name: "Afet ve Acil Durum (AFAD) Çağrı Merkezi",
        description: "Başbakanlık afet ve acil durum yönetim başkanlığı.",
        number: "122",
        image: require("../images/numbers/122.jpg")
    },
    {
        category_id: 1,
        name: "Terör İhbar Hattı",
        description: "Bilgi teknolojileri ve iletişim kurumu tarafından uygulamaya alınan, doğru kullandıldığı takdirde son derece işlevsel ve vatana faydalı olacak acil çağrı hattıdır. ",
        number: "140",
        image: require("../images/numbers/140.png")
    },
    {
        category_id: 1,
        name: "Sahil Güvenlik İhbar ve Talep Hattı",
        description: "Denizlerde olabilecek herhangi bir acil durumda aranması istenen sahil güvenlik telefonunu.",
        number: "158",
        image: require("../images/numbers/158.png")
    },
    {
        category_id: 1,
        name: "Orman Yangını İhbar",
        description: "T.C.Çevre ve Orman Bakanlığı’nın Türkiye genelinde 24 saat hizmet veren ücretsiz “ORMAN YANGIN İHBAR” hattıdır.",
        number: "177",
        image: require("../images/numbers/177.png")
    },
    {
        category_id: 1,
        name: "Merkezi Hekim Randevu Sistemi (MHRS)",
        description: "MHRS (Merkezi Randevu Sistemi), Sağlık Bakanlığı’nın başlattığı kolay randevu alma sistemidir.",
        number: "182",
        image: require("../images/numbers/182.png")
    },
    {
        category_id: 1,
        name: "Sosyal Destek Hattı-Kadın ve Sosyal Hizmetler",
        description: "Çocukların ihmal ve istismarı, kadına yönelik şiddet gibi konulardaki ihbarları değerlendirmek, acil durumları ilgili kurumlara bildirmek amacıyla kurulan Alo 183 Kadın, Çocuk ve Sosyal Hizmet Danışma Hattı 24 saat boyunca hizmet veriyor.",
        number: "183",
        image: require("../images/numbers/183.png")
    },
    {
        category_id: 1,
        name: "Zabıta",
        description: "",
        number: "153",
        image: require("../images/numbers/153.png")
    },
    {
        category_id: 1,
        name: "Doğal Gaz Kaçak",
        description: "Doğalgaz dağıtım şirketlerinin 187 numaralı telefon haricinde yine 7/24 saat ulaşabildiğiniz çağrı merkezleri bulunmaktadır.",
        number: "187",
        image: require("../images/numbers/187.png")
    },
    {
        category_id: 1,
        name: "Ambulans ve Cenaze Hattı",
        description: "Alo Dogum ve Alo Cenaze'nin ortak telefon numarasi.",
        number: "188",
        image: require("../images/numbers/188.png")
    },
    {
        category_id: 1,
        name: "Karayolları Bilgi Hattı (Yolda Kalma)",
        description: "Alo 159 Türkiye’nin karayolları yol ağında bulunan Otoyollar, Devletyolları ve İlyollarında seyahat eden sürücülerin seyahat esnasında veya seyahatten önce kullanacağı yol güzergahı ile ilgili tüm soru ve sorunları hakkında bilgi ve yardım alacağı bir hattır.",
        number: "159",
        list_number: "159"
    },
    {
        category_id: 12,
        name: "T.C. Ziraat Bankası",
        number: "444 00 00",
        image: require("../images/numbers/ziraatbank.jpg")
    },
    {
        category_id: 12,
        name: "Yapı ve Kredi Bankası",
        number: "0850 222 0444",
        image: require("../images/numbers/yapikredi.png")
    },
    {
        category_id: 12,
        name: "VakıfBank",
        number: "0850 222 0724",
        image: require("../images/numbers/vakifbank.jpg")
    },
    {
        category_id: 12,
        name: "Halk Bankası",
        number: "0850 222 0400",
        image: require("../images/numbers/halkbankasi.png")
    },
    {
        category_id: 12,
        name: "Enpara",
        number: "0850 222 3663",
        image: require("../images/numbers/enpara.png")
    },
    {
        category_id: 12,
        name: "Akbank",
        number: "444 2 525",
        image: require("../images/numbers/akbank.png")
    },
    {
        category_id: 12,
        name: "QNB Finansbank",
        number: "0850 222 0900",
        image: require("../images/numbers/qnbfinansbank.jpg")
    },
    {
        category_id: 12,
        name: "Garanti Bankası",
        number: "444 0 333",
        image: require("../images/numbers/garantibankasi.jpg")
    },
    {
        category_id: 12,
        name: "TEB",
        number: "0850 200 0666",
        image: require("../images/numbers/teb.png")
    },
    {
        category_id: 12,
        name: "Denizbank",
        number: "0850 222 0800",
        image: require("../images/numbers/denizbank.jpg")
    },
    {
        category_id: 12,
        name: "Şekerbank",
        number: "0850 222 7878",
        image: require("../images/numbers/sekerbank.jpg")
    },
    {
        category_id: 12,
        name: "Citibank",
        number: "0212 319 45 00",
        image: require("../images/numbers/citibank.png")
    },
    {
        category_id: 12,
        name: "Turkish Bank",
        number: "0212 315 10 00",
        image: require("../images/numbers/turkishbank.png")
    },
    {
        category_id: 12,
        name: "Anadolubank",
        number: "0850 222 5550",
        image: require("../images/numbers/anadolubank.jpg")
    },
    {
        category_id: 12,
        name: "Alternatifbank",
        number: "444 00 55",
        image: require("../images/numbers/alternatifbank.jpg")
    },
    {
        category_id: 11,
        name: "MNG Kargo",
        number: "444 06 06",
        image: require("../images/numbers/mngkargo.png")
    },
    {
        category_id: 11,
        name: "Yurtiçi Kargo",
        number: "444 99 99",
        image: require("../images/numbers/yurticikargo.jpg")
    },
    {
        category_id: 11,
        name: "PTT Kargo",
        number: "0850 222 1 788",
        image: require("../images/numbers/pttkargo.png")
    },
    {
        category_id: 11,
        name: "Sürat Kargo",
        number: "0850 202 02 02",
        image: require("../images/numbers/suratkargo.png")
    },
    {
        category_id: 11,
        name: "Aras Kargo",
        number: "444 25 52",
        image: require("../images/numbers/araskargo.png")
    },
    {
        category_id: 11,
        name: "UPS Kargo",
        number: "0850 255 00 66",
        image: require("../images/numbers/upskargo.jpg")
    },
    {
        category_id: 11,
        name: "DHL Kargo",
        number: "444 00 40",
        image: require("../images/numbers/dhlkargo.jpg")
    },
    {
        category_id: 11,
        name: "TNT Kargo",
        number: "444 0 868 ",
        image: require("../images/numbers/tntkargo.png")
    },
    {
        category_id: 2,
        name: "Sağlık Bakanlığı İletişim Merkezi (SABIM)",
        description: "Türkiye’nin dört bir yanından 184 SABİM hattını arayan herkes; hattın Sağlık Bakanlığı tarafında sıcak bir dost sesiyle karşılaşmakta ve ilettiği her türlü soru veya sorunun, Bakanlığımızca empatik bir yaklaşımla sahiplenilerek, en hızlı şekilde çözümlendiğine tanık olmaktadır.",
        number: "184",
        image: require("../images/numbers/184.jpg")
    },
    {
        category_id: 2,
        name: "Merkezi hekim randevu sistemi (MHRS)",
        description: "MHRS (Merkezi Randevu Sistemi), Sağlık Bakanlığı’nın başlattığı kolay randevu alma sistemidir.",
        number: "182",
        image: require("../images/numbers/182.png")
    },
    {
        category_id: 2,
        name: "Uyuşturucu ile Mücadele Danışma ve Destek Hattı",
        description: "Ülkemizde son yıllarda artan uyuşturucu kullanımına karşı Bakanlığımızın koordinatörlüğünde, konuyla ilgili 8 Bakanlık (Aile ve Sosyal Politikalar, Adalet, Çalışma ve Sosyal Güvenlik, Gençlik ve Spor, İç işleri, Milli Eğitim, Gümrük ve Ticaret ve Sağlık Bakanlığı) ve TBMM Sağlık, Aile, Çalışma ve Sosyal İşler Komisyonu’nun ortak çalışmasıyla oldukça etkin bir çalışma yürütülerek “Uyuşturucu ile Mücadelede Acil Eylem Planı” hazırlanmıştır.",
        number: "191",
        image: require("../images/numbers/191.jpg")
    },
    {
        category_id: 2,
        name: "Sigarayı Bırakma Hattı",
        description: "Eğer sigarayı bırakmakta kararlıysanız hemen 171 alo sigarayı bırakma hattını arayın ve sigarayı bırakma konusunda tiyolar alın.",
        number: "171",
        image: require("../images/numbers/171.jpg")
    },
    {
        category_id: 2,
        name: "Afet ve Acil Durum (AFAD) Çağrı Merkezi",
        description: "Olası bir afet durumunda (deprem, sel baskını, heyelan, çığ, kaya düşmesi, büyük yangın vb.)  122 “ALO AFAD” acil çağrı numarasının aranması gerekir.",
        number: "122",
        image: require("../images/numbers/122.jpg")
    },
    {
        category_id: 2,
        name: "Zehir Danışma Hattı",
        description: "Merkez, ülkemizde tedavi maksatlı kullanılan ilaçlar, böcek ilaçları, tarım ilaçları, mantarlar ve çeşitli bitkilerle olan zehirlenmelerden",
        number: "114",
        image: require("../images/numbers/114.png")
    },
    {
        category_id: 2,
        name: "Kızılay",
        description: "Türk Kızılay, afet, kan, göç, sağlık, barınma, sosyal yardım, ilk yardım, eğitim, gençlik alanlarında Türkiye ve Dünya'da faaliyet gösteren bir insani yardım kuruluşudur.",
        number: "0312 430 23 00",
        image: require("../images/numbers/kizilay.png")
    },
    {
        category_id: 2,
        name: "Yeşilay Derneği",
        description: "İçki, sigara ve her türlü uyuşturucu maddelere karşı olanların kurduğu dernek",
        number: "0212 527 16 83",
        image: require("../images/numbers/yesilay.jpg")
    },
    {
        category_id: 2,
        name: "Beyaz Kod",
        description: "Sağlık çalışanına yönelik herhangi bir şiddet olayı gerçekleştiğinde kurum yöneticileri tarafından derhal “113” numaralı telefonla Beyaz Kod Birimine bildirim yapılması gerekmektedir.",
        number: "113",
        image: require("../images/numbers/113.jpg")
    },
    {
        category_id: 2,
        name: "Acil Çağrı Merkezi",
        description: "Herhangi birisi yere yığıldıysa, bayıldıysa,göğüs ağrısı varsa, zorlukla nefes alıyorsa, büyük bir kanaması varsa, 112'yi ARAYIN ",
        number: "112",
        image: require("../images/numbers/112.png")
    },
    {
        category_id: 2,
        name: "Türkiye İlaç Ve Tıbbi Cihaz Kurum",
        number: "0 312 218 30 00",
        image: require("../images/numbers/saglikbakanligi.png")
    },
    {
        category_id: 2,
        name: "TÜRKİYE HALK SAĞLIĞI KURUMU",
        number: "0 312 565 50 00",
        image: require("../images/numbers/saglikbakanligi.png")
    },
    {
        category_id: 2,
        name: "Sağlık Bakanlığı Santral Hattı",
        number: "0 312 585 1000",
        image: require("../images/numbers/saglikbakanligi.png")
    },
    {
        category_id: 10,
        name: "ADANA BÜYÜKŞEHİR",
        number: "03224585831",
        list_number: 1
    },
    {
        category_id: 10,
        name: "ADIYAMAN",
        number: "04162161020",
        list_number: 2
    },
    {
        category_id: 10,
        name: "AFYONKARAHİSAR",
        number: "02722152253",
        list_number: 3
    },
    {
        category_id: 10,
        name: "AĞRI",
        number: "04722151023",
        list_number: 4
    },
    {
        category_id: 10,
        name: "AKSARAY",
        number: "03822135492",
        list_number: 68
    },
    {
        category_id: 10,
        name: "AMASYA",
        number: "03582188000",
        list_number: 5
    },
    {
        category_id: 10,
        name: "ANKARA BÜYÜKŞEHİR",
        number: "03125052000",
        list_number: 6
    },
    {
        category_id: 10,
        name: "ANTALYA BÜYÜKŞEHİR",
        number: "02422495002",
        list_number: 7
    },
    {
        category_id: 10,
        name: "ARDAHAN",
        number: "04782113052",
        list_number: 75
    },
    {
        category_id: 10,
        name: "ARTVİN",
        number: "04662123711",
        list_number: 8
    },
    {
        category_id: 10,
        name: "AYDIN BÜYÜKŞEHİR",
        number: "02562266352",
        list_number: 9
    },
    {
        category_id: 10,
        name: "BALIKESİR BÜYÜKŞEHİR",
        number: "02662430400",
        list_number: 10
    },
    {
        category_id: 10,
        name: "BARTIN",
        number: "03782270229",
        list_number: 74
    },
    {
        category_id: 10,
        name: "BATMAN",
        number: "04882131026",
        list_number: 72
    },
    {
        category_id: 10,
        name: "BAYBURT",
        number: "04582116757",
        list_number: 69
    },
    {
        category_id: 10,
        name: "BİLECİK",
        number: "02282121168",
        list_number: 11
    },
    {
        category_id: 10,
        name: "BİNGÖL",
        number: "04262134506",
        list_number: 12
    },
    {
        category_id: 10,
        name: "BİTLİS",
        number: "04342286314",
        list_number: 13
    },
    {
        category_id: 10,
        name: "BOLU",
        number: "03742153713",
        list_number: 14
    },
    {
        category_id: 10,
        name: "BURDUR",
        number: "02482335390",
        list_number: 15
    },
    {
        category_id: 10,
        name: "BURSA BÜYÜKŞEHİR",
        number: "02242344000",
        list_number: 16
    },
    {
        category_id: 10,
        name: "ÇANAKKALE",
        number: "02862171079",
        list_number: 17
    },
    {
        category_id: 10,
        name: "ÇANKIRI",
        number: "03762121400",
        list_number: 18
    },
    {
        category_id: 10,
        name: "ÇORUM",
        number: "03642250810",
        list_number: 19
    },
    {
        category_id: 10,
        name: "DENİZLİ BÜYÜKŞEHİR",
        number: "02582650050",
        list_number: 20
    },
    {
        category_id: 10,
        name: "DİYARBAKIR BÜYÜKŞEHİR",
        number: "04122241136",
        list_number: 21
    },
    {
        category_id: 10,
        name: "DÜZCE",
        number: "03805247027",
        list_number: 81
    },
    {
        category_id: 10,
        name: "EDİRNE",
        number: "02842139140",
        list_number: 22
    },
    {
        category_id: 10,
        name: "ELAZIĞ",
        number: "04242484713",
        list_number: 23
    },
    {
        category_id: 10,
        name: "ERZİNCAN",
        number: "04462141780",
        list_number: 24
    },
    {
        category_id: 10,
        name: "ERZURUM BÜYÜKŞEHİR",
        number: "04422332388",
        list_number: 25
    },
    {
        category_id: 10,
        name: "ESKİŞEHİR BÜYÜKŞEHİR",
        number: "02222204227",
        list_number: 26
    },
    {
        category_id: 10,
        name: "GAZİANTEP BÜYÜKŞEHİR",
        number: "03422111200",
        list_number: 27
    },
    {
        category_id: 10,
        name: "GİRESUN",
        number: "04542162182",
        list_number: 28
    },
    {
        category_id: 10,
        name: "GÜMÜŞHANE",
        number: "04562137300",
        list_number: 29
    },
    {
        category_id: 10,
        name: "HAKKARİ",
        number: "04382116781",
        list_number: 30
    },
    {
        category_id: 10,
        name: "HATAY BÜYÜKŞEHİR",
        number: "03262149190",
        list_number: 31
    },
    {
        category_id: 10,
        name: "IĞDIR",
        number: "04762276496",
        list_number: 76
    },
    {
        category_id: 10,
        name: "ISPARTA",
        number: "02462116000",
        list_number: 32
    },
    {
        category_id: 10,
        name: "İSTANBUL BÜYÜKŞEHİR",
        number: "02124551300",
        list_number: 34
    },
    {
        category_id: 10,
        name: "İZMİR BÜYÜKŞEHİR",
        number: "02322931000",
        list_number: 35
    },
    {
        category_id: 10,
        name: "KAHRAMANMARAŞ BÜYÜKŞEHİR",
        number: "03442213470",
        list_number: 46
    },
    {
        category_id: 10,
        name: "KARABÜK",
        number: "03704130915",
        list_number: 78
    },
    {
        category_id: 10,
        name: "KARAMAN",
        number: "03382132125",
        list_number: 70
    },
    {
        category_id: 10,
        name: "KARS",
        number: "04742123942",
        list_number: 36
    },
    {
        category_id: 10,
        name: "KASTAMONU",
        number: "03662141048",
        list_number: 37
    },
    {
        category_id: 10,
        name: "KAYSERİ BÜYÜKŞEHİR",
        number: "03522223915",
        list_number: 38
    },
    {
        category_id: 10,
        name: "KİLİS",
        number: "03488131010",
        list_number: 79
    },
    {
        category_id: 10,
        name: "KIRIKKALE",
        number: "03182242751",
        list_number: 71
    },
    {
        category_id: 10,
        name: "KIRKLARELİ",
        number: "02882141050",
        list_number: 39
    },
    {
        category_id: 10,
        name: "KIRŞEHİR",
        number: "03862134488",
        list_number: 40
    },
    {
        category_id: 10,
        name: "KOCAELİ BÜYÜKŞEHİR",
        number: "02623181010",
        list_number: 41
    },
    {
        category_id: 10,
        name: "KONYA BÜYÜKŞEHİR",
        number: "03322211400",
        list_number: 42
    },
    {
        category_id: 10,
        name: "KÜTAHYA",
        number: "02742236036",
        list_number: 43
    },
    {
        category_id: 10,
        name: "MALATYA BÜYÜKŞEHİR",
        number: "04223771000",
        list_number: 44
    },
    {
        category_id: 10,
        name: "MANİSA BÜYÜKŞEHİR",
        number: "02362311528",
        list_number: 45
    },
    {
        category_id: 10,
        name: "MARDİN BÜYÜKŞEHİR",
        number: "04822125930",
        list_number: 47
    },
    {
        category_id: 10,
        name: "MERSİN BÜYÜKŞEHİR",
        number: "03242318880",
        list_number: 33
    },
    {
        category_id: 10,
        name: "MUĞLA BÜYÜKŞEHİR",
        number: "02522141543",
        list_number: 48
    },
    {
        category_id: 10,
        name: "MUŞ",
        number: "04362121015",
        list_number: 49
    },
    {
        category_id: 10,
        name: "NEVŞEHİR",
        number: "03842131220",
        list_number: 50
    },
    {
        category_id: 10,
        name: "NİĞDE",
        number: "03882324624",
        list_number: 51
    },
    {
        category_id: 10,
        name: "ORDU BÜYÜKŞEHİR",
        number: "04522332557",
        list_number: 52
    },
    {
        category_id: 10,
        name: "OSMANİYE",
        number: "03288141226",
        list_number: 80
    },
    {
        category_id: 10,
        name: "RİZE",
        number: "04642130190",
        list_number: 53
    },
    {
        category_id: 10,
        name: "SAKARYA BÜYÜKŞEHİR",
        number: "02642745020",
        list_number: 54
    },
    {
        category_id: 10,
        name: "SAMSUN BÜYÜKŞEHİR",
        number: "03624311011",
        list_number: 55
    },
    {
        category_id: 10,
        name: "ŞANLIURFA BÜYÜKŞEHİR",
        number: "04143131634",
        list_number: 63
    },
    {
        category_id: 10,
        name: "SİİRT",
        number: "04842231213",
        list_number: 61
    },
    {
        category_id: 10,
        name: "SİNOP",
        number: "03682611844",
        list_number: 64
    },
    {
        category_id: 10,
        name: "ŞIRNAK",
        number: "04862161005",
        list_number: 73
    },
    {
        category_id: 10,
        name: "SİVAS",
        number: "03462210110",
        list_number: 58
    },
    {
        category_id: 10,
        name: "TEKİRDAĞ BÜYÜKŞEHİR",
        number: "08504595959",
        list_number: 59
    },
    {
        category_id: 10,
        name: "TOKAT",
        number: "03562141164",
        list_number: 60
    },
    {
        category_id: 10,
        name: "TRABZON BÜYÜKŞEHİR",
        number: "04622233888",
        list_number: 61
    },
    {
        category_id: 10,
        name: "TUNCELİ",
        number: "04282121327",
        list_number: 62
    },
    {
        category_id: 10,
        name: "UŞAK",
        number: "02762151282",
        list_number: 64
    },
    {
        category_id: 10,
        name: "VAN BÜYÜKŞEHİR",
        number: "04322162008",
        list_number: 65
    },
    {
        category_id: 10,
        name: "YALOVA",
        number: "02268141185",
        list_number: 77
    },
    {
        category_id: 10,
        name: "YOZGAT",
        number: "03542121013",
        list_number: 66
    },
    {
        category_id: 10,
        name: "ZONGULDAK",
        number: "03722596700",
        list_number: 67
    },
    {
        category_id: 4,
        name: "Arıza Takip Hattı",
        number: "101",
        image: require("../images/numbers/ariza.jpg")
    },
    {
        category_id: 4,
        name: "Arıza İhbar Hattı",
        number: "102",
        image: require("../images/numbers/ariza.jpg")
    },
    {
        category_id: 4,
        name: "Telefon Arıza",
        number: "121",
        image: require("../images/numbers/telefonariza.png")
    },
    {
        category_id: 4,
        name: "Ankesör Arıza",
        number: "122",
        image: require("../images/numbers/ankesortlf.png")
    },
    {
        category_id: 4,
        name: "Teleks Arıza",
        number: "123",
        image: require("../images/numbers/teletext.png")
    },
    {
        category_id: 4,
        name: "Data Arıza",
        number: "124",
        image: require("../images/numbers/data.jpg")
    },
    {
        category_id: 4,
        name: "Kablo TV Arıza",
        number: "126",
        image: require("../images/numbers/kablotv.jpg")
    },
    {
        category_id: 4,
        name: "Su Arıza",
        number: "185",
        image: require("../images/numbers/su.jpg")
    },
    {
        category_id: 4,
        name: "Elektrik Arıza",
        number: "186",
        image: require("../images/numbers/elektirik.jpg")
    },
    {
        category_id: 4,
        name: "Doğal Gaz Kaçak",
        description: "Doğalgaz dağıtım şirketlerinin 187 numaralı telefon haricinde yine 7/24 saat ulaşabildiğiniz çağrı merkezleri bulunmaktadır.",
        number: "187",
        image: require("../images/numbers/187.png")
    },
    {
        category_id: 4,
        name: "Radyo-Tv Arıza",
        number: "125",
        image: require("../images/numbers/radyo.png")
    },
    {
        category_id: 6,
        name: "Polis İmdat",
        description: "İlgili hattı arayarak; mağduriyetinizi, şikayetlerinizi, bir suç işleneceğine dair duyduğunuz şüpheyi iletebilir, trafik kazalarını ve trafik kural ihlali ihbarlarınızı bildirebilirsiniz.",
        number: "155",
        image: require("../images/numbers/155.png")
    },
    {
        category_id: 6,
        name: "Jandarma İmdat",
        description: "Bir suç işleneceğine dair şüphelerinizi, mağduriyetinizi, işlenen bir suçla ilgili tanık olduğunuz detayları iletebilir, can güvenliğinizi tehdit eden durumlara dair şikayet ve endişelerinizi bildirerek yardım talep edebilirsiniz.",
        number: "156",
        image: require("../images/numbers/156.png")
    },
    {
        category_id: 6,
        name: "Emniyet Genel Müdürlüğü (EGM)",
        description: "Emniyet Genel Müdürlüğü, ilk kez 10 Nisan 1845 tarihinde kurulan, günümüzde Türkiye'deki tüm il ve ilçelerde örgütlenmiş iç güvenlikten sorumlu devlet teşkilatıdır.",
        number: "0 312 462 04 62 ",
        image: require("../images/numbers/egm.jpg")
    },
    {
        category_id: 6,
        name: "Milli İstihbarat Teşkilatı",
        description: "Milli İstihbarat Teşkilatı, dünyada hemen hemen her ülkede yabancı ülkeler hakkında bilgi toplayan, kendi ülkesindeki diğer devlet adamlarının ve içteki yıkıcı güçlerin faaliyetlerini takip eden teşkilata verilen isimdir.",
        number: "0312 307 3991",
        image: require("../images/numbers/mit.png")
    },
    {
        category_id: 6,
        name: "Terör İhbar Hattı",
        description: "Bilgi teknolojileri ve iletişim kurumu tarafından uygulamaya alınan, doğru kullandıldığı takdirde son derece işlevsel ve vatana faydalı olacak acil çağrı hattıdır. ",
        number: "140",
        image: require("../images/numbers/140.png")
    },
    {
        category_id: 6,
        name: "Kıyı Emniyet",
        number: "151",
        image: require("../images/numbers/kiyiemniyeti.jpg")
    },
    {
        category_id: 6,
        name: "Zabıta Çağrı Merkezi Telefonu",
        number: "153",
        image: require("../images/numbers/153.png")
    },
    {
        category_id: 6,
        name: "Sahil Güvenlik İhbar ve Talep Hattı",
        description: "Denizlerde olabilecek herhangi bir acil durumda aranması istenen sahil güvenlik telefonunu.",
        number: "158",
        image: require("../images/numbers/158.png")
    },
    {
        category_id: 9,
        name: "BİMER",
        number: "150",
        image: require("../images/numbers/bimer.png")
    },
    {
        category_id: 9,
        name: "Zabıta Çağrı Merkezi Telefonu",
        number: "153",
        image: require("../images/numbers/153.png")
    },
    {
        category_id: 9,
        name: "İnsan Ticareti Mağdurları Acil Yardım ve İhbar Hattı",
        number: "157",
        image: require("../images/numbers/157.png")
    },
    {
        category_id: 9,
        name: "Alo RTÜK",
        number: "178",
        image: require("../images/numbers/rtuk.jpg")
    },
    {
        category_id: 9,
        name: "Sigarayı Bırakma Hattı",
        description: "Eğer sigarayı bırakmakta kararlıysanız hemen 171 alo sigarayı bırakma hattını arayın ve sigarayı bırakma konusunda tiyolar alın.",
        number: "171",
        image: require("../images/numbers/171.jpg")
    },
    {
        category_id: 9,
        name: "Maliye İhbar",
        number: "189",
        image: require("../images/numbers/maliye.png")
    },
    {
        category_id: 9,
        name: "Alo Gürültü Şikayet Telefonu",
        number: "181",
        image: require("../images/numbers/gurultu.png")
    },
    {
        category_id: 8,
        name: "Türk Telekom",
        number: "0212 309 1000",
        image: require("../images/numbers/turktelekom.jpg")
    },
    {
        category_id: 8,
        name: "Vodafone",
        number: "0850 542 0 542",
        image: require("../images/numbers/vodafone.png")
    },
    {
        category_id: 8,
        name: "Turkcell",
        number: "0532 532 0000",
        image: require("../images/numbers/turkcell.png")
    },
    {
        category_id: 8,
        name: "Turknet",
        number: "0850 288 8080",
        image: require("../images/numbers/turknet.png")
    },
    {
        category_id: 8,
        name: "Kablo Net",
        number: "0850 804 4444",
        image: require("../images/numbers/kablonet.png")
    },
    {
        category_id: 8,
        name: "Millenicom",
        number: "0850 333 0 333",
        image: require("../images/numbers/millenicom.png")
    },
    {
        category_id: 8,
        name: "D-smart İnternet",
        number: "0850 266 0000",
        image: require("../images/numbers/dsmart.jpg")
    },
    {
        category_id: 8,
        name: "Digiturk İnternet",
        number: "0850 480 9671",
        image: require("../images/numbers/digiturk.png")
    },
    {
        category_id: 3,
        name: "Aile Ve Sosyal Politikalar Bakanlığı",
        description: "Alo 183 Sosyal Destek Hattı aracılığı ile aile, kadın, çocuk, engelli, yaşlı, şehit yakınları ile gaziler ve gazi yakınlarına yönelik hizmetlere ilişkin çağrılar değerlendirilerek rehberlik ve danışmanlık hizmeti sunulmaktadır.",
        number: "183",
        image: require("../images/numbers/183.png")
    },
    {
        category_id: 3,
        name: "Aile, Çalışma ve Sosyal Hizmetler Bakanlığı",
        description: "Aile, Çalışma ve Sosyal Hizmetler Bakanlığı Çağrı Merkezlerinden Alo 144 Sosyal Yardım Hattı aracılığı ile Sosyal Yardımlaşma ve Dayanışma Vakıfları tarafından yürütülen şartlı eğitim/sağlık yardımları, kömür yardımı, gıda yardımı, engelli aylığı, eşi vefat eden kadınlara yapılan yardımlar, barınma yardımı, doğum yardımı vb. yardımlar ile proje destekleri hakkında yapılan her türlü talep, öneri ve şikâyetler alınmakta, veri tabanı incelenerek arayan kişiye başvurusunun durumu hakkında bilgi verilmekte, ilgili İl/İlçe Sosyal Yardımlaşma ve Dayanışma Vakfına yönlendirme yapılmaktadır.",
        number: "144",
        image: require("../images/numbers/144.jpg")
    },
    {
        category_id: 3,
        name: "Aile İçi Şiddet Acil Yardım Hattı",
        description: "Türkiye Kadın Dernekleri Federasyonu'nun kurduğu telefon hattı",
        number: "0212 656 96 96",
        image: require("../images/numbers/aileici.jpg")
    },
    {
        category_id: 3,
        name: "KOSGEB",
        description: "Küçük ve Orta Ölçekli İşletmeleri Geliştirme ve Destekleme İdaresi Başkanlığı",
        number: "444 1 567",
        image: require("../images/numbers/kosgeb.png")
    },
    {
        category_id: 3,
        name: "Engelli ve Yaşlı Hizmetleri",
        description: "Ülkemizde, resmi ve özel bakım merkezleri tarafından ihtiyacı olan engellilere yatılı ve gündüzlü hizmetler verilmektedir.",
        number: "0312 705 70 00",
        image: require("../images/numbers/eyh.png")
    },
    {
        category_id: 3,
        name: "Kızılay",
        description: "Türk Kızılay, afet, kan, göç, sağlık, barınma, sosyal yardım, ilk yardım, eğitim, gençlik alanlarında Türkiye ve Dünya'da faaliyet gösteren bir insani yardım kuruluşudur.",
        number: "0312 430 23 00",
        image: require("../images/numbers/kizilay.png")
    },
    {
        category_id: 3,
        name: "Yeşilay Derneği",
        description: "İçki, sigara ve her türlü uyuşturucu maddelere karşı olanların kurduğu dernek",
        number: "0212 527 16 83",
        image: require("../images/numbers/yesilay.jpg")
    },
    {
        category_id: 3,
        name: "Mehmetçik Vakfı",
        description: "Türk Silahlı Kuvvetleri Mehmetçik Vakfı, ülkemizin ve milletimizin güvenliği için canlarını hiçe sayarak görev yapan erbaş ve erlerimizden şehit olan veya herhangi bir nedenle hayatını kaybedenlerin bakmakla yükümlü oldukları yakınları ile gazi ve engelli Mehmetçiklere sosyal ve ekonomik destek sağlamak amacıyla 17 Mayıs 1982 tarihinde kurulmuştur.",
        number: "0 (312) 284 19 70",
        image: require("../images/numbers/mehmetcikvakfi.jpg")
    },
    {
        category_id: 3,
        name: "DARÜLACEZE Vakfı",
        description: "Darülaceze Vakfı, 1991 yılında kurulmuş olup, öncelikli amacı, kimsesiz, bakıma muhtaç, yaşlı ve sakat insanları, sokağa terk edilmiş (0-6) yaş grubu çocukların barındığı ve o tarihte desteklenmeye ve yenilenmeye büyük gereksinim gösteren tarihi Darülaceze Başkanlığı'na destek olmaktır.",
        number: "02122101895",
        image: require("../images/numbers/dav.png")
    },
    {
        category_id: 3,
        name: "İnsan Hak Ve Hürriyetleri ve İnsani Yardım Vakfı",
        description: "İHH İnsani Yardım Vakfı savaş, afet, yoksulluk olan bölgelerle birlikte 5 kıtada 135 ülkede din, dil, ırk, millet ve mezhep ayrımı yapmaksızın faaliyet yürütür.",
        number: "0 212 631 21 21",
        image: require("../images/numbers/ihh.png")
    },
    {
        category_id: 3,
        name: "Afet ve Acil Durum (AFAD) Çağrı Merkezi",
        description: "T.C. İçişleri Bakanlığı Afet ve Acil Durum Yönetimi Başkanlığı",
        number: "0 312 258 23 23",
        image: require("../images/numbers/122.jpg")
    },
    {
        category_id: 3,
        name: "TEMA Vakfı",
        description: "Tema Vakfı, Türkiye'deki çölleşme, kuraklık, ağaçlandırma, su kirliliği gibi, çevre sorunları ile ilgili çalışmalar yapan bir sivil toplum kuruluşudur.",
        number: "0 (212) 291 90 90",
        image: require("../images/numbers/tema.jpg")
    },
    {
        category_id: 3,
        name: "Lösemili Çocuklar Vakfı (Lösev)",
        description: "Lösemili Çocuklar Sağlık ve Eğitim Vakfı, Lösemili çocuklar/gençler ve ailelerinin yaşam kalitelerini yükseltmek için kalıcı çözümler üretmeyi misyon edinen bir kuruluştur.",
        number: "0 (312) 447 06 60",
        image: require("../images/numbers/losev.png")
    },
    {
        category_id: 2,
        name: "Tüketici Danışma Hattı",
        description: "Bakanlığımız bünyesinde oluşturulan “Alo 175 Tüketici Danışma Hattı” tüketicilerimizin karşılaştıkları sorunlara ilişkin çözüm yollarının sunulduğu ve tüketici uyuşmazlıklarının çözülmesi amacıyla başvurmaları gereken ilgili makamlara yönlendirildiği “bir çağrı merkezi” olarak hizmet vermektedir.",
        number: "175",
        image: require("../images/numbers/175.jpg")
    },
    {
        category_id: 15,
        name: "11880",
        number: "118 80",
        list_number: "80"
    },
    {
        category_id: 15,
        name: "11810",
        number: "118 10",
        list_number: "10"
    },
    {
        category_id: 15,
        name: "11811",
        number: "118 11",
        list_number: "11"
    },
    {
        category_id: 15,
        name: "11838",
        number: "118 38",
        list_number: "38"
    },
    {
        category_id: 15,
        name: "11842",
        number: "118 42",
        list_number: "42"
    },
    {
        category_id: 15,
        name: "11855",
        number: "118 55",
        list_number: "55"
    },
    {
        category_id: 15,
        name: "11888",
        number: "118 88",
        list_number: "88"
    },
    {
        category_id: 15,
        name: "11881",
        number: "118 81",
        list_number: "81"
    },
    {
        category_id: 15,
        name: "11858",
        number: "118 58",
        list_number: "58"
    },
    {
        category_id: 15,
        name: "11832",
        number: "118 32",
        list_number: "32"
    },
    {
        category_id: 16,
        name: "Saka Su",
        number: "444 7 252",
        image: require("../images/numbers/sakasu.png")
    },
    {
        category_id: 16,
        name: "Hayat Su",
        number: "444 0 744",
        image: require("../images/numbers/hayatsu.jpg")
    },
    {
        category_id: 16,
        name: "Damla Su",
        number: "0 850 201 30 35",
        image: require("../images/numbers/damlasu.png")
    },
    {
        category_id: 16,
        name: "Erikli Su",
        number: "444 0 222",
        image: require("../images/numbers/eriklisu.jpg")
    },
    {
        category_id: 16,
        name: "Pınar Yaşam Su",
        number: "444 9 900",
        image: require("../images/numbers/pinar.jpg")
    },
    {
        category_id: 16,
        name: "Kuvars Su",
        number: "444 78 42",
        image: require("../images/numbers/kuvarssu.jpg")
    },
    {
        category_id: 16,
        name: "Abant Su",
        number: "444 0 743",
        image: require("../images/numbers/abant.png")
    },
    {
        category_id: 16,
        name: "Nestle Pure Life",
        number: "444 0 844",
        image: require("../images/numbers/nestle.jpg")
    },
    {
        category_id: 16,
        name: "Buzdağı Su",
        number: "444 5 434",
        image: require("../images/numbers/buzdagisu.jpg")
    },
    {
        category_id: 16,
        name: "Desni Su",
        number: "0 442 239 00 43",
        image: require("../images/numbers/desni.png")
    },
    {
        category_id: 16,
        name: "Fatsu",
        number: "0 454 286 22 62",
        image: require("../images/numbers/fatsu.png")
    },
    {
        category_id: 14,
        name: "Türk Hava Yolları (THY)",
        number: "0850 333 0849",
        image: require("../images/numbers/thy.jpg")
    },
    {
        category_id: 14,
        name: "Pegasus (flypgs)",
        number: "0888 228 1212",
        image: require("../images/numbers/pegasus.png")
    },
    {
        category_id: 14,
        name: "Anadolujet",
        number: "444 2 538",
        image: require("../images/numbers/anadolujet.png")
    },
    {
        category_id: 14,
        name: "Atlatjet",
        number: "0850 222 0000",
        image: require("../images/numbers/atlasjet.jpg")
    },
    {
        category_id: 14,
        name: "Onur Air",
        number: "0850 210 6687",
        image: require("../images/numbers/onurair.png")
    },
    {
        category_id: 14,
        name: "SunExpress",
        number: "444 0 797",
        image: require("../images/numbers/sunexpress.jpg")
    },
    {
        category_id: 14,
        name: "MNG Airlines",
        number: "(0212) 468 05 00",
        image: require("../images/numbers/mng-air.png")
    },
    {
        category_id: 14,
        name: "T.C. Devlet Demiryolları (TCDD)",
        number: "444 8 233",
        image: require("../images/numbers/tcdd.jpg")
    },
    {
        category_id: 14,
        name: "Metro Turizm",
        number: "0850 222 34 55",
        image: require("../images/numbers/metro.png")
    },
    {
        category_id: 14,
        name: "Pamukkale Turizm",
        number: "0 850 333 35 35",
        image: require("../images/numbers/pamukkale.jpg")
    },
    {
        category_id: 14,
        name: "Efetur",
        number: "0850 600 00 10",
        image: require("../images/numbers/efetur.jpeg")
    },
    {
        category_id: 14,
        name: "Kamil Koç",
        number: "0 224 2945562",
        image: require("../images/numbers/kamilkoc.png")
    },
    {
        category_id: 14,
        name: "Ulusoy Turizm",
        number: "0850 811 1 888",
        image: require("../images/numbers/ulusoy.jpg")
    },
    {
        category_id: 14,
        name: "Has Turizm",
        number: "0850 755 04 27",
        image: require("../images/numbers/hasturizm.png")
    },
    {
        category_id: 14,
        name: "Varan Turizm",
        number: "(0212) 4448999",
        image: require("../images/numbers/varan.png")
    },
    {
        category_id: 17,
        name: "Milangaz",
        number: "444 0 120",
        image: require("../images/numbers/milangaz.jpg")
    },
    {
        category_id: 17,
        name: "Aygaz",
        number: "444 4 999",
        image: require("../images/numbers/aygaz.jpg")
    },
    {
        category_id: 17,
        name: "İpragaz",
        number: "444 47 72",
        image: require("../images/numbers/ipragaz.jpg")
    },
    {
        category_id: 13,
        name: "AVİS",
        number: "0 (216) 444 28 47",
        image: require("../images/numbers/avis.jpg")
    },
    {
        category_id: 13,
        name: "Garenta",
        number: "444 5 478",
        image: require("../images/numbers/garenta.png")
    },
    {
        category_id: 13,
        name: "Budget",
        number: "444 4 722",
        image: require("../images/numbers/budget.jpg")
    },
    {
        category_id: 13,
        name: "Enterprise",
        number: "0 216 680 06 90",
        image: require("../images/numbers/enterprise.jpg")
    },
    {
        category_id: 13,
        name: "Hertz",
        number: "0 216 444 0 227",
        image: require("../images/numbers/hertz.jpg")
    },
    {
        category_id: 13,
        name: "Sixt",
        number: "0850 222 2 000",
        image: require("../images/numbers/sixt.jpeg")
    },
    {
        category_id: 13,
        name: "Europcar",
        number: "0850 377 0 377",
        image: require("../images/numbers/europcar.png")
    },
    {
        category_id: 13,
        name: "Otorento",
        number: "444 30 09",
        image: require("../images/numbers/otorento.jpg")
    },
    {
        category_id: 13,
        name: "RentGo",
        number: "444 40 61",
        image: require("../images/numbers/rentgo.png")
    },
    {
        category_id: 7,
        name: "Trafik Hizmetleri Başkanlığı",
        number: "03124620462",
        image: require("../images/numbers/trafikhizmetleri.jpg")
    },
    {
        category_id: 7,
        name: "Karayolları Genel Müdürlüğü",
        number: "0312 449 90 00",
        image: require("../images/numbers/kgm.jpg")
    },
    {
        category_id: 7,
        name: "Emniyet Genel Müdürlüğü (EGM)",
        description: "Emniyet Genel Müdürlüğü, ilk kez 10 Nisan 1845 tarihinde kurulan, günümüzde Türkiye'deki tüm il ve ilçelerde örgütlenmiş iç güvenlikten sorumlu devlet teşkilatıdır.",
        number: "0 312 462 04 62 ",
        image: require("../images/numbers/egm.jpg")
    },
    {
        category_id: 7,
        name: "Karayolları Bilgi Hattı (Alo 159)",
        number: "159",
        image: require("../images/numbers/kgm.jpg")
    },
    {
        category_id: 7,
        name: "T.C. Ulaştırma ve Altyapı Bakanlığı",
        number: "0312 203 10 00",
        image: require("../images/numbers/ulastirmabakanligi.jpg")
    },
    {
        category_id: 7,
        name: "Trafik Polisi",
        number: "154",
        image: require("../images/numbers/egm.jpg")
    },
    {
        category_id: 7,
        name: "Trafik Jandarma",
        number: "156",
        image: require("../images/numbers/trafikjandarma.png")
    },
    {
        category_id: 7,
        name: "TUVTÜRK Araç Muayene İstasyonları",
        number: "0 212 366 99 00",
        image: require("../images/numbers/tuvturk.png")
    },
    {
        category_id: 5,
        name: "Hepsiburada",
        number: "0850 252 40 00",
        image: require("../images/numbers/hepsiburada.png")
    },
    {
        category_id: 5,
        name: "N11",
        number: "0850 333 0011",
        image: require("../images/numbers/n11.png")
    },
    {
        category_id: 5,
        name: "GittiGidiyor",
        number: "0850 252 32 29",
        image: require("../images/numbers/gittigidiyor.png")
    },
    {
        category_id: 5,
        name: "Trendyol",
        number: "0212 331 0 200",
        image: require("../images/numbers/trendyol.jpg")
    },
    {
        category_id: 5,
        name: "Çiçek Sepeti",
        number: "0850 222 0079",
        image: require("../images/numbers/ciceksepeti.jpg")
    },
    {
        category_id: 5,
        name: "ePttAVM",
        number: "444 1 788",
        image: require("../images/numbers/eptt.png")
    },
    {
        category_id: 5,
        name: "D&R",
        number: "0 (850) 266 3737",
        image: require("../images/numbers/dr.png")
    },
    {
        category_id: 5,
        name: "Morhipo",
        number: "0850 222 30 90",
        image: require("../images/numbers/morhipo.png")
    },
    {
        category_id: 5,
        name: "Teknosa",
        number: "0850 222 55 99",
        image: require("../images/numbers/teknosa.png")
    },
    {
        category_id: 5,
        name: "Vatan Bilgisayar",
        number: "0850 222 56 56",
        image: require("../images/numbers/vatan.jpg")
    },
    {
        category_id: 5,
        name: "Media Markt Türkiye",
        number: "0850 222 1500",
        image: require("../images/numbers/mediamarkt.png")
    },
]

export default numbers;