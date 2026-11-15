/* ==========================================================================
   BE MENTOR AKADEMİ ONLINE — Zenginleştirilmiş Veri Modeli (v3)
   ========================================================================== */

window.BE_DATA = {
  categories: [
    { id: 'restoratif', name: 'Restoratif', icon: 'tooth', count: 24 },
    { id: 'endodonti', name: 'Endodonti', icon: 'root', count: 18 },
    { id: 'implantoloji', name: 'İmplantoloji', icon: 'implant', count: 31 },
    { id: 'ortodonti', name: 'Ortodonti', icon: 'braces', count: 14 },
    { id: 'protetik', name: 'Protetik', icon: 'crown', count: 19 },
    { id: 'cerrahi', name: 'Cerrahi', icon: 'scalpel', count: 16 },
    { id: 'dijital', name: 'Dijital Diş Hekimliği', icon: 'screen', count: 12 },
    { id: 'all', name: 'Tüm Kategoriler', icon: 'grid', count: 134 }
  ],

  mentors: [
    {
      id: 'm4', title: 'Uzm. Dr.', name: 'Can Özkan', photo: 'assets/images/mentor-4.jpg',
      specialty: 'Ortodonti & Endodonti',
      bio: 'Şeffaf plak biyomekaniği ve mikroskop destekli endodonti üzerine klinik odaklı eğitimler veriyor.',
      courses: 5, students: '1.900+', rating: 4.9
    },
    {
      id: 'm1', title: 'Doç. Dr.', name: 'Aylin Demir', photo: 'assets/images/mentor-1.jpg',
      specialty: 'Restoratif Diş Tedavisi',
      bio: 'Estetik ön bölge kompozit restorasyonlar ve biyomimetik yaklaşım üzerine 14 yıllık klinik ve akademik deneyim. Uluslararası kongrelerde davetli konuşmacı.',
      courses: 6, students: '3.400+', rating: 4.9
    },
    {
      id: 'm2', title: 'Prof. Dr.', name: 'Emre Yılmaz', photo: 'assets/images/mentor-2.jpg',
      specialty: 'Oral İmplantoloji & Endodonti',
      bio: 'İleri implant cerrahisi, sinüs lifting ve kemik rekonstrüksiyonu alanında 25 yıllık deneyim. 120+ uluslararası yayın.',
      courses: 8, students: '4.850+', rating: 4.9
    },
    {
      id: 'm3', title: 'Dr. Dt.', name: 'Zeynep Arslan', photo: 'assets/images/mentor-3.jpg',
      specialty: 'İmplantoloji & Dijital İş Akışı',
      bio: 'Rehberli implant cerrahisi ve CAD/CAM protetik planlama uzmanı. 2.000+ dijital vaka deneyimi.',
      courses: 4, students: '2.100+', rating: 4.8
    }
  ],

  courses: [
    {
      id: 'c1', title: 'İmplantolojide İleri Cerrahi Yaklaşımlar',
      subtitle: 'Sinüs ogmentasyonu, kemik greftleme, yumuşak doku yönetimi ve komplikasyon çözümleri — canlı vaka kayıtlarıyla.',
      category: 'implantoloji', mentorId: 'm2', image: 'assets/images/course-implant.jpg',
      spotlight: true, homeSeries: false, lessons: 14, hours: '9 sa 40 dk', level: 'İleri', rating: 4.9, reviews: 318, students: 1420,
      price: 4950, oldPrice: 6800, badge: 'En Çok Satan', updated: 'Kasım 2026',
      learn: [
        'Lateral ve krestal sinüs lifting protokollerini vaka videolarıyla uygulama',
        'Yumuşak doku grefti ile estetik bölgede çıkış profili oluşturma',
        'Peri-implantitis erken teşhis ve cerrahi yönetim stratejileri',
        'CBCT üzerinden 3D dijital cerrahi rehber planlaması',
        'Komplikasyon anında karar ağaçları ve hasta iletişimi',
        'Kemik grefti seçimi: otojen, allogreft, ksenogreft karşılaştırması'
      ],
      curriculum: [
        { title: 'Bölüm 1: Preoperatif Planlama & Anatomi', lessons: [
          { id: 'c1-1', t: 'CBCT analizi ve kritik anatomik sınırlar', d: '18:20', pv: true },
          { id: 'c1-2', t: 'İmplant seçimi ve primer stabilite biyomekaniği', d: '24:16', pv: true },
          { id: 'c1-3', t: 'Flep tasarımı ve insizyon teknikleri', d: '21:05' } ] },
        { title: 'Bölüm 2: Sinüs Ogmentasyonu', lessons: [
          { id: 'c1-4', t: 'Lateral pencere sinüs lifting — canlı vaka', d: '36:40' },
          { id: 'c1-5', t: 'Schneiderian membran perforasyonu yönetimi', d: '19:50' },
          { id: 'c1-6', t: 'Krestal yaklaşım ve osteotom tekniği', d: '22:10' } ] },
        { title: 'Bölüm 3: Kemik Rekonstrüksiyonu', lessons: [
          { id: 'c1-7', t: 'GBR: membran ve pin sabitleme', d: '28:30' },
          { id: 'c1-8', t: 'Blok greft uygulamaları', d: '31:45' } ] }
      ]
    },
    {
      id: 'c2', title: 'Klinik Restoratif Serisi',
      subtitle: 'Katmanlama tekniği, renk seçimi ve doğal yüzey tekstürü ile görünmez anterior kompozitler.',
      category: 'restoratif', mentorId: 'm1', image: 'assets/images/course-restorative.jpg',
      spotlight: true, homeSeries: true, lessons: 12, hours: '7 sa 15 dk', level: 'Orta - İleri', rating: 4.9, reviews: 412, students: 2150,
      price: 3800, oldPrice: 5200, badge: 'Yeni Seri', updated: 'Kasım 2026',
      learn: [
        'Sınıf IV kırıklarda silikon indeks ile çoklu katmanlama',
        'Diastema kapatmada interproksimal çıkış profili kontrolü',
        'Biyomimetik adeziv protokoller ve rubber-dam izolasyonu',
        'Doğal mine parlaklığı için adım adım polisaj sekansı'
      ],
      curriculum: [
        { title: 'Bölüm 1: Renk, Optik ve Adeziv Protokol', lessons: [
          { id: 'c2-1', t: 'Dental fotoğrafçılık ve polarize renk analizi', d: '15:10', pv: true },
          { id: 'c2-2', t: 'Total-etch vs universal adeziv', d: '18:45', pv: true } ] },
        { title: 'Bölüm 2: Canlı Hasta Uygulamaları', lessons: [
          { id: 'c2-3', t: 'Anterior diastema kapatma — adım adım', d: '32:12' },
          { id: 'c2-4', t: 'Makro ve mikro yüzey tekstürü', d: '22:30' } ] }
      ]
    },
    {
      id: 'c3', title: 'Endodontide Klinik Karar Serisi',
      subtitle: 'Kalsifiye kanallar, kırık alet yönetimi ve modern irrigasyon aktivasyon teknikleri.',
      category: 'endodonti', mentorId: 'm2', image: 'assets/images/course-endo.jpg',
      spotlight: true, homeSeries: true, lessons: 8, hours: '5 sa 50 dk', level: 'Tüm Seviyeler', rating: 4.9, reviews: 265, students: 1680,
      price: 3450, oldPrice: 4600, badge: 'Klinik Odaklı', updated: 'Ekim 2026',
      learn: [
        'MB2 kanal lokalizasyonu ve giriş kavitesi prensipleri',
        'Kalsifiye ve eğri kanallarda güvenli glide-path',
        'Sonik ve ultrasonik irrigasyon aktivasyonu',
        'Bioseramik patlarla obturasyon teknikleri'
      ],
      curriculum: [
        { title: 'Bölüm 1: Teşhis ve Giriş Kavitesi', lessons: [
          { id: 'c3-1', t: 'CBCT ile gizli kanal anatomisi', d: '16:40', pv: true },
          { id: 'c3-2', t: 'Zorlu molar vakalarında izolasyon', d: '14:20' } ] },
        { title: 'Bölüm 2: Şekillendirme ve Obturasyon', lessons: [
          { id: 'c3-3', t: 'Kırık eğe çıkarma ve bypass', d: '28:15' },
          { id: 'c3-4', t: 'Bioseramik sealer klinik uygulaması', d: '21:08' } ] }
      ]
    },
    {
      id: 'c8', title: 'İmplantolojide Temelden Kliniğe',
      subtitle: 'İlk implantınızdan protetik yüklemeye kadar adım adım klinik rehber.',
      category: 'implantoloji', mentorId: 'm3', image: 'assets/images/course-implant.jpg',
      spotlight: false, homeSeries: true, lessons: 10, hours: '6 sa 10 dk', level: 'Başlangıç - Orta', rating: 4.9, reviews: 204, students: 1310,
      price: 3200, oldPrice: 4400, badge: 'Popüler Seri', updated: 'Ekim 2026',
      learn: ['Vaka seçimi ve risk değerlendirmesi', 'İdeal 3D implant konumu', 'Vidalı vs simante karar ağacı'],
      curriculum: [
        { title: 'Bölüm 1: Temel İmplantoloji', lessons: [
          { id: 'c8-1', t: 'Osseointegrasyon biyolojisi', d: '20:00', pv: true },
          { id: 'c8-2', t: 'Frezleme sekansı ve ısı kontrolü', d: '24:10' } ] }
      ]
    },
    {
      id: 'c4', title: 'Şeffaf Plak ile Modern Ortodonti',
      subtitle: 'Vaka seçiminden attachment tasarımına, dijital set-up ve bitirme detaylarına kadar.',
      category: 'ortodonti', mentorId: 'm4', image: 'assets/images/course-ortho.jpg',
      lessons: 10, hours: '6 sa 30 dk', level: 'Orta', rating: 4.9, reviews: 194, students: 1120,
      price: 4200, oldPrice: 5600, badge: 'Popüler', updated: 'Ekim 2026',
      learn: ['Şeffaf plak vaka seçimi ve sınırları', 'Attachment ve IPR planlaması', 'Dijital set-up okuma ve revizyon'],
      curriculum: [
        { title: 'Bölüm 1: Temel Biyomekanik', lessons: [
          { id: 'c4-1', t: 'Plak biyomekaniği ve kuvvet sistemleri', d: '20:00', pv: true },
          { id: 'c4-2', t: 'Attachment tasarım prensipleri', d: '24:10' } ] }
      ]
    },
    {
      id: 'c5', title: 'Zirkonya & Laminate Protetik Ustalık',
      subtitle: 'Preparasyon, ölçü, simantasyon ve estetik başarı için eksiksiz protetik rehber.',
      category: 'protetik', mentorId: 'm3', image: 'assets/images/course-prosthetic.jpg',
      lessons: 11, hours: '6 sa 50 dk', level: 'Orta - İleri', rating: 4.8, reviews: 142, students: 890,
      price: 3900, oldPrice: 5100, badge: 'Yeni', updated: 'Kasım 2026',
      learn: ['Minimal invaziv laminate preparasyonu', 'Zirkonya simantasyon protokolü', 'Mock-up ile hasta onayı'],
      curriculum: [
        { title: 'Bölüm 1: Preparasyon', lessons: [
          { id: 'c5-1', t: 'Laminate preparasyonunda derinlik kontrolü', d: '19:30', pv: true },
          { id: 'c5-2', t: 'Retraksiyon ve ölçü teknikleri', d: '25:45' } ] }
      ]
    },
    {
      id: 'c6', title: 'Gömülü Diş Cerrahisi & Komplikasyonlar',
      subtitle: 'Atravmatik ekstraksiyon, sinir koruma ve post-operatif hasta konforu.',
      category: 'cerrahi', mentorId: 'm2', image: 'assets/images/course-surgery.jpg',
      lessons: 7, hours: '4 sa 20 dk', level: 'Orta - İleri', rating: 4.9, reviews: 178, students: 1050,
      price: 2950, oldPrice: 3900, badge: 'Vaka Analizi', updated: 'Eylül 2026',
      learn: ['Koronektomi endikasyonları', 'Odontoseksiyon stratejileri', 'Alveolit ve kanama yönetimi'],
      curriculum: [
        { title: 'Bölüm 1: Sınıflandırma ve Plan', lessons: [
          { id: 'c6-1', t: 'Pell & Gregory analizi ve risk skoru', d: '17:15', pv: true },
          { id: 'c6-2', t: 'Horizontal gömülü molar — vaka', d: '29:00' } ] }
      ]
    },
    {
      id: 'c7', title: 'Dijital Diş Hekimliği & CAD/CAM',
      subtitle: 'Ağız içi tarayıcıdan aynı gün restorasyona: tam dijital iş akışı.',
      category: 'dijital', mentorId: 'm3', image: 'assets/images/course-digital.jpg',
      lessons: 9, hours: '5 sa 15 dk', level: 'Orta', rating: 4.8, reviews: 121, students: 760,
      price: 3600, oldPrice: 4800, badge: 'Dijital Seri', updated: 'Ekim 2026',
      learn: ['Tam ark taramada doğruluk', 'Chairside tasarım temelleri', '3D yazıcı ile rehber üretimi'],
      curriculum: [
        { title: 'Bölüm 1: İntraoral Tarama', lessons: [
          { id: 'c7-1', t: 'Tam ark taramada hata payını sıfırlama', d: '19:30', pv: true },
          { id: 'c7-2', t: 'Dijital gülüş tasarımı entegrasyonu', d: '25:45' } ] }
      ]
    }
  ],

  bundles: [
    {
      id: 'b1',
      title: 'İmplantoloji & Cerrahi Master Modülü',
      badge: '%30 Paket İndirimi',
      desc: 'Temel implantolojiden ileri sinüs cerrahisi ve gömülü diş operasyonlarına uzanan 3 tam seri.',
      courseIds: ['c8', 'c1', 'c6'],
      hours: '20 sa 10 dk',
      price: 7750,
      oldPrice: 11100
    },
    {
      id: 'b2',
      title: 'Estetik & Dijital Gülüş Tasarımı Modülü',
      badge: 'Klinik Favorisi',
      desc: 'Anterior kompozit, laminate/zirkonya protetik ve CAD/CAM iş akışını birleştiren estetik uzmanlık paketi.',
      courseIds: ['c2', 'c5', 'c7'],
      hours: '19 sa 20 dk',
      price: 7900,
      oldPrice: 11300
    },
    {
      id: 'b3',
      title: 'Endodonti & Restoratif Klinik Modülü',
      badge: 'Yeni Mezun & Klinik',
      desc: 'Kanal tedavisinde zorlu vakalardan biyomimetik koronal restorasyona eksiksiz klinik protokol.',
      courseIds: ['c3', 'c2'],
      hours: '13 sa 05 dk',
      price: 5200,
      oldPrice: 7250
    }
  ],

  testimonials: [
    { name: 'Dt. Elif Kaya', role: 'Genel Diş Hekimi · İstanbul', text: 'Restoratif serisinden sonra anterior vakalarda kendime olan güvenim tamamen değişti. Videolar inanılmaz net, her adım anlaşılır.' },
    { name: 'Dt. Mert Aydın', role: 'Özel Klinik Sahibi · İzmir', text: 'İmplant cerrahisi eğitimindeki canlı vaka kayıtları, kongrelerde göremeyeceğiniz detayları gösteriyor. Ekibimle birlikte izliyoruz.' },
    { name: 'Dt. Selin Öztürk', role: 'Uzmanlık Öğrencisi · Ankara', text: 'Mentora soru sorabilmek ve not alabilmek çok değerli. Sertifikalar da CV’mde ciddi fark yarattı.' }
  ],

  subscriptionInfo: {
    title: 'Abonelik',
    subtitle: 'Her Adımda Uzman Desteği',
    description: 'BeMentor Akademi aboneliğiyle klinik ve akademik gelişiminize öncelik verin; etkinliklerde kontenjan önceliği, yılda 10 vaka danışmanı hakkı ve tüm kurslarda %20 indirim ile her zaman bir adım önde olun.',
    email: 'info@bementorakademi.com',
    bannerTitle: 'Zor Vakaları Çözmek Artık Çok Kolay!',
    bannerSubtitle: 'BeMentor Akademi aboneliğiyle klinik ve akademik gelişiminize öncelik verin.',
    bannerPriceText: 'Aylık 59,90 ₺’ den başlayan fiyatlarla.',
    packages: [
      {
        id: 'student',
        name: 'ÖĞRENCİ PAKETİ',
        shortName: 'Öğrenci Paketi',
        price: 59.90,
        priceText: '59,90 ₺',
        periodText: '+KDV/ ay',
        features: [
          'Etkinliklerde kontenjan önceliği',
          'Yıllık 10 vaka danışma hakkı',
          'Tüm kurslarda %20 indirim'
        ]
      },
      {
        id: 'dentist',
        name: 'DİŞ HEKİMİ PAKETİ',
        shortName: 'Diş Hekimi Paketi',
        price: 79.90,
        priceText: '79,90 ₺',
        periodText: '+KDV/ ay',
        features: [
          'Etkinliklerde kontenjan önceliği',
          'Yıllık 10 vaka danışma hakkı',
          'Tüm kurslarda %20 indirim'
        ]
      }
    ]
  }
};
