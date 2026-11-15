/* ==========================================================================
   BE MENTOR AKADEMİ — Gerçek WordPress Verileri (bementorakademi.com)
   ========================================================================== */

window.BE_DATA = {
  contact: {
    phone: '0501 559 91 41',
    whatsappUrl: 'https://api.whatsapp.com/send/?phone=905015599141&text=Merhaba%20BeMentor%20Akademi%2C%20e%C4%9Fitimler%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.&type=phone_number&app_absent=0',
    email: 'info@bementorakademi.com',
    instagramUrl: 'https://www.instagram.com/abementor/',
    instagramHandle: '@abementor',
    location: 'İstanbul / Türkiye'
  },

  categories: [
    { id: 'online', name: 'Online Eğitimler', icon: 'screen', count: 8 },
    { id: 'yuzyuze', name: 'Yüz Yüze & Workshop', icon: 'scalpel', count: 7 },
    { id: 'birebir', name: 'Birebir (1’e 1)', icon: 'users', count: 2 },
    { id: 'endodonti', name: 'Endodonti', icon: 'root', count: 5 },
    { id: 'cerrahi', name: 'Cerrahi & İmplant', icon: 'implant', count: 6 },
    { id: 'protetik', name: 'Restoratif & Protetik', icon: 'crown', count: 4 },
    { id: 'pedodonti', name: 'Pedodonti & Perio', icon: 'tooth', count: 2 },
    { id: 'all', name: 'Tüm Eğitimler', icon: 'grid', count: 17 }
  ],

  mentors: [
    {
      id: 'm1',
      title: 'Doç. Dr.',
      name: 'Burçin Arıcan Alpay',
      photo: 'assets/wp/mentor-burcin.png',
      specialty: 'Kurucu Ortak · Endodonti Uzmanı',
      bio: 'Endodontik retreatment, MTA ve biyoseramik uygulamaları, apikal mikrocerrahi ve mikroskop destekli endodonti alanlarında akademik ve klinik çalışmalar yürütmektedir. BeMentor Akademi Kurucu Ortağıdır.',
      courses: 8,
      students: '1.200+',
      rating: 5.0
    },
    {
      id: 'm2',
      title: 'Doç. Dr.',
      name: 'Ezgi Yüceer Çetiner',
      photo: 'assets/wp/mentor-ezgi.png',
      specialty: 'Kurucu Ortak · Ağız, Diş ve Çene Cerrahisi Uzmanı',
      bio: 'Oral cerrahide kanama ve komplikasyon yönetimi, temporomandibular eklem (TME) rahatsızlıkları, botulinum toksin uygulamaları ve apikal cerrahi alanlarında uzmanlaşmıştır. BeMentor Akademi Kurucu Ortağıdır.',
      courses: 7,
      students: '1.150+',
      rating: 5.0
    },
    {
      id: 'm3',
      title: 'Prof. Dr.',
      name: 'Selçuk Basa',
      photo: 'assets/wp/mentor-selcuk.jpg',
      specialty: 'Ağız, Diş ve Çene Cerrahisi · BAU Diş Hekimliği Dekanı',
      bio: '1982 Ankara Üni. Diş Hekimliği ve 1986 Hacettepe Üni. Ağız, Diş ve Çene Cerrahisi uzmanlığının ardından Marmara Üniversitesi’nde Profesör, Anabilim Dalı Başkanı ve Fakülte Dekanı olarak görev yapmıştır. 2011–2013 AÇBİD Başkanı olan Prof. Dr. Selçuk Basa, 2019’dan itibaren Bahçeşehir Üniversitesi Diş Hekimliği Fakültesi Dekanıdır.',
      courses: 2,
      students: '850+',
      rating: 5.0
    },
    {
      id: 'm4',
      title: 'Dr. Öğr. Üyesi',
      name: 'Reşat Batuhan Çetiner',
      photo: 'assets/wp/c-tme360.jpg',
      specialty: 'Protetik Diş Tedavisi & TME Splint Uygulamaları',
      bio: 'Temporomandibular eklem düzensizlikleri, sentrik ilişki kayıtları, CAD/CAM ve 3D baskı ile dijital oklüzal splint tasarımı ve estetik lamina preparasyonları üzerine klinik eğitimler vermektedir.',
      courses: 3,
      students: '640+',
      rating: 4.9
    }
  ],

  courses: [
    /* ==================== A. AKTİF / YAKLAŞAN ONLINE EĞİTİMLER ==================== */
    {
      id: 'c1',
      wpId: 2637,
      title: 'Oral Cerrahide Kanama Riski ve Yönetimi',
      subtitle: 'Hangi hastalarda kanama riski artar? Antikoagülan ve antiagregan kullanan hastalarda cerrahi öncesi, sırası ve sonrasında lokal hemostaz ve kanama yönetimi protokolleri.',
      category: 'online',
      subCategory: 'cerrahi',
      formatLabel: 'Online Canlı Seminer',
      status: 'active',
      statusText: 'Kayıt Açık · Abonelere Ücretsiz',
      dateText: '16 Aralık Çarşamba 2026 • Saat: 20:00',
      locationText: 'Online (Canlı Yayın + Kayıt)',
      mentorId: 'm2',
      image: 'assets/wp/c-kanama.jpg',
      spotlight: true,
      homeSeries: true,
      lessons: 5,
      hours: 'Canlı • 20:00',
      level: 'Tüm Seviyeler',
      rating: 5.0,
      reviews: 64,
      students: 310,
      price: 490,
      oldPrice: 750,
      taxNote: '+KDV',
      freeForSubscribers: true,
      badge: 'Kayıt Açık',
      updated: '16 Aralık 2026',
      learn: [
        'Hangi hastalarda kanama riski artar? Sistemik anamnez ve risk sınıflaması',
        'Antikoagülan ve antiagregan kullanan hastalarda cerrahi öncesi dikkat edilmesi gerekenler',
        'Preoperatif konsültasyon, INR değerlendirmesi ve ilaç kesme/devam protokolleri',
        'İntraoperatif kanama ile karşılaştığımızda hangi lokal hemostaz yöntemlerini ne zaman uygulamalıyız?',
        'Postoperatif kanama senaryoları, sütür teknikleri, hemostatik ajanlar ve acil müdahale',
        'BeMentor Akademi abonelerine özel ücretsiz katılım ayrıcalığı'
      ],
      curriculum: [
        {
          title: 'Bölüm 1: Preoperatif Risk Değerlendirmesi & Farmakoloji',
          lessons: [
            { id: 'c1-1', t: 'Kanama riskini artıran sistemik hastalıklar ve ilaç grupları', d: '25:00', pv: true },
            { id: 'c1-2', t: 'Antikoagülan ve antiagregan hastalarında cerrahi planlama', d: '30:00', pv: true }
          ]
        },
        {
          title: 'Bölüm 2: Lokal Hemostaz ve Postoperatif Yönetim',
          lessons: [
            { id: 'c1-3', t: 'Lokal hemostatik ajanlar, tamponlama ve sütür protokolleri', d: '30:00' },
            { id: 'c1-4', t: 'Postoperatif kanama komplikasyonları ve klinik vaka senaryoları', d: '25:00' },
            { id: 'c1-5', t: 'Canlı soru-cevap ve interaktif vaka tartışması', d: '20:00' }
          ]
        }
      ]
    },
    {
      id: 'c2',
      wpId: 2514,
      title: 'Pedodontide Minimal İnvaziv Diş Hekimliği',
      subtitle: 'Çocuk diş hekimliğinde güncel minimal invaziv yaklaşımlar, atravmatik restoratif tedavi, selektif çürük uzaklaştırma ve klinik ipuçları. BeMentor Akademi abonelerine özel ücretsiz!',
      category: 'online',
      subCategory: 'pedodonti',
      formatLabel: 'Online Canlı Seminer',
      status: 'active',
      statusText: 'Kayıt Açık · Abonelere Ücretsiz',
      dateText: '18 Kasım Çarşamba 2026 • Saat: 20:00',
      locationText: 'Online (Canlı Yayın + Kayıt)',
      mentorId: 'm1',
      image: 'assets/wp/c-pedodonti.jpg',
      spotlight: true,
      homeSeries: true,
      lessons: 4,
      hours: 'Canlı • 20:00',
      level: 'Tüm Seviyeler',
      rating: 4.9,
      reviews: 52,
      students: 280,
      price: 490,
      oldPrice: 750,
      taxNote: '+KDV',
      freeForSubscribers: true,
      badge: 'Kayıt Açık',
      updated: '18 Kasım 2026',
      learn: [
        'Pedodontide minimal invaziv felsefe ve güncel teşhis kriterleri',
        'Selektif çürük uzaklaştırma ve vital pulpa koruma stratejileri',
        'Gümüş diamin florür (SDF), Hall tekniği ve biyoaktif materyaller',
        'Çocuk hastalarda koltuk süresini kısaltan pratik klinik protokoller'
      ],
      curriculum: [
        {
          title: 'Bölüm 1: Teorik Çerçeve ve Materyal Seçimi',
          lessons: [
            { id: 'c2-1', t: 'Minimal invaziv pedodonti prensipleri ve lezyon analizi', d: '30:00', pv: true },
            { id: 'c2-2', t: 'Hall tekniği, SDF ve biyomimetik restoratif materyaller', d: '35:00', pv: true }
          ]
        },
        {
          title: 'Bölüm 2: Klinik Vakalar ve Soru-Cevap',
          lessons: [
            { id: 'c2-3', t: 'Adım adım klinik vaka örnekleri ve takip sonuçları', d: '30:00' },
            { id: 'c2-4', t: 'Canlı soru-cevap oturumu', d: '20:00' }
          ]
        }
      ]
    },

    /* ==================== B. BİREBİR (1'E 1) EĞİTİMLER ==================== */
    {
      id: 'c3',
      wpId: 1294,
      title: '1’e 1 – Doç. Dr. Burçin Arıcan Alpay',
      subtitle: 'Sadece izlemek değil, mentoru ile birlikte deneyimlemek isteyenler için 1’e 1 kurslarımız başladı. Gerçek vakalar, gerçek sorular, gerçek çözümler… Tarihini sen seç, mentorunla birebir öğrenme deneyimini yaşa.',
      category: 'birebir',
      subCategory: 'endodonti',
      formatLabel: 'Birebir (1’e 1) Kurs',
      status: 'oneToOne',
      statusText: 'Tarihini Sen Seç · Birebir Eğitim',
      dateText: 'Kişiye Özel Planlanan Tarih • 8 Saat',
      locationText: 'İstanbul · Birebir Klinik & Uygulama',
      mentorId: 'm1',
      image: 'assets/wp/c-1e1-burcin.webp',
      spotlight: true,
      homeSeries: true,
      lessons: 6,
      hours: '8 Saat Birebir',
      level: 'Kişiye Özel',
      rating: 5.0,
      reviews: 48,
      students: 95,
      price: 1200,
      oldPrice: 1800,
      taxNote: '+KDV',
      badge: '1’e 1 Mentorluk',
      updated: 'Kişiye Özel Takvim',
      learn: [
        'İhtiyacınıza ve klinik seviyenize göre özel olarak kurgulanan 8 saatlik birebir endodonti programı',
        'Mikroskop altında giriş kavitesi, kanal şekillendirme ve retreatment uygulamaları',
        'MTA ve biyoseramik materyallerle perforasyon onarımı ve apikal plug pratiği',
        'Kendi zorlu vakalarınızın radyografileri üzerinden birebir vaka analizi ve tedavi planlaması'
      ],
      curriculum: [
        {
          title: 'Bölüm 1: Kişiye Özel Teorik & Vaka Planlaması',
          lessons: [
            { id: 'c3-1', t: 'Klinik hedeflerin belirlenmesi ve vaka analizi', d: '02:00:00', pv: true },
            { id: 'c3-2', t: 'Endodontik karar mekanizmaları ve komplikasyon protokolleri', d: '02:00:00' }
          ]
        },
        {
          title: 'Bölüm 2: Birebir Hands-On & Mikroskop Uygulaması',
          lessons: [
            { id: 'c3-3', t: 'Döner eğe sistemleri, retreatment ve kırık alet yönetimi', d: '02:00:00' },
            { id: 'c3-4', t: 'Biyoseramik obtürasyon ve apikal tıkaç birebir uygulaması', d: '02:00:00' }
          ]
        }
      ]
    },
    {
      id: 'c4',
      wpId: 1292,
      title: '1’e 1 – Doç. Dr. Ezgi Yüceer Çetiner',
      subtitle: 'Gerçek mentorla birebir çalışmaya hazır mısın? Sadece izlemek değil, mentoru ile birlikte deneyimlemek isteyenler için 1’e 1 kurslarımız başladı. Tarihini sen seç, mentorunla birebir öğrenme deneyimini yaşa.',
      category: 'birebir',
      subCategory: 'cerrahi',
      formatLabel: 'Birebir (1’e 1) Kurs',
      status: 'oneToOne',
      statusText: 'Tarihini Sen Seç · Birebir Eğitim',
      dateText: 'Kişiye Özel Planlanan Tarih • 8 Saat',
      locationText: 'İstanbul · Birebir Klinik & Uygulama',
      mentorId: 'm2',
      image: 'assets/wp/c-1e1-ezgi.webp',
      spotlight: false,
      homeSeries: true,
      lessons: 6,
      hours: '8 Saat Birebir',
      level: 'Kişiye Özel',
      rating: 5.0,
      reviews: 44,
      students: 88,
      price: 1200,
      oldPrice: 1800,
      taxNote: '+KDV',
      badge: '1’e 1 Mentorluk',
      updated: 'Kişiye Özel Takvim',
      learn: [
        'Oral cerrahi, gömülü diş operasyonları ve flep/sütür tekniklerinde 8 saat birebir eğitim',
        'TME muayenesi, oklüzal splint uyumlaması ve masseter/temporal botulinum toksin protokolleri',
        'Cerrahi komplikasyonların önlenmesi ve kanama kontrolü uygulamaları',
        'Hekimin kendi klinik vakaları üzerinden birebir cerrahi yol haritası oluşturulması'
      ],
      curriculum: [
        {
          title: 'Bölüm 1: Birebir Cerrahi & TME Planlama',
          lessons: [
            { id: 'c4-1', t: 'Radyolojik değerlendirme, CBCT okuma ve cerrahi tasarım', d: '02:00:00', pv: true },
            { id: 'c4-2', t: 'Flep dizaynı, atravmatik çekim ve sütür prensipleri', d: '02:00:00' }
          ]
        },
        {
          title: 'Bölüm 2: Uygulamalı Klinik & Fantom Pratiği',
          lessons: [
            { id: 'c4-3', t: 'Birebir cerrahi el becerisi ve komplikasyon yönetimi', d: '02:00:00' },
            { id: 'c4-4', t: 'TME splint ve botulinum toksin klinik uygulama prensipleri', d: '02:00:00' }
          ]
        }
      ]
    },

    /* ==================== C. YÜZ YÜZE WORKSHOPLAR & HANDS-ON EĞİTİMLER ==================== */
    {
      id: 'c5',
      wpId: 2350,
      title: 'TME 360 Workshop (Oklüzal Splint ve Botulinum Toksin Workshop’u)',
      subtitle: 'TME anatomisi ve biyomekaniğinden dijital oklüzal splint üretimine, canlı hasta üzerinde splint uyumlamasından bruksizmde botulinum toksin uygulamasına uzanan tam gün uygulamalı workshop.',
      category: 'yuzyuze',
      subCategory: 'cerrahi',
      formatLabel: 'Yüz Yüze Workshop · Canlı Hasta',
      status: 'past',
      statusText: 'Tamamlandı · Yeni Dönem Ön Kayıt',
      dateText: '08 Kasım Pazar 2026 • 09:30 - 18:00',
      locationText: 'Kozyatağı / Kadıköy · 8 Kişi Kontenjan',
      mentorId: 'm2',
      coMentor: 'Dr. Öğr. Üyesi Reşat Batuhan Çetiner',
      image: 'assets/wp/c-tme360.jpg',
      spotlight: true,
      homeSeries: true,
      lessons: 11,
      hours: '8 Saat Uygulamalı',
      level: 'Uygulamalı Workshop',
      rating: 5.0,
      reviews: 38,
      students: 120,
      price: 18000,
      oldPrice: 22000,
      badge: 'Canlı Hasta Uygulamalı',
      updated: 'Kasım 2026',
      learn: [
        'Temporomandibuler Eklem Anatomisi, Biyomekaniği ve TMD Sınıflaması',
        'Hasta Muayenesi: Klinik Değerlendirme, Kas ve Eklem Palpasyonu, Tanı Kriterleri',
        'Oklüzal Splintler: Endikasyonlar, Etki Mekanizmaları, Türleri ve Tasarım Prensipleri',
        'Dijital İş Akışı ile Oklüzal Splint Üretimi (CAD/CAM ve 3D Baskı Yaklaşımları)',
        'Sentrik İlişki Kavramı ve Klinik Kayıt Yöntemleri',
        'Canlı Hasta Uygulaması: Oklüzal Splintin Ağız İçi Uyumlaması ve Oklüzal Kontroller',
        'Canlı Hasta Uygulaması: TMD ve Bruksizmde Botulinum Toksin Uygulaması'
      ],
      curriculum: [
        {
          title: 'Bölüm 1: Teorik Eğitim & Dijital Splint İş Akışı',
          lessons: [
            { id: 'c5-1', t: 'Temporomandibuler Eklem Anatomisi, Biyomekaniği ve TMD Sınıflaması', d: '45:00', pv: true },
            { id: 'c5-2', t: 'Klinik Değerlendirme, Kas ve Eklem Palpasyonu, Tanı Kriterleri', d: '45:00', pv: true },
            { id: 'c5-3', t: 'Oklüzal Splint Türleri ve Dijital İş Akışı (CAD/CAM & 3D Baskı)', d: '50:00' },
            { id: 'c5-4', t: 'Sentrik İlişki Kavramı ve Klinik Kayıt Yöntemleri', d: '40:00' }
          ]
        },
        {
          title: 'Bölüm 2: Botulinum Toksin & Canlı Hasta Uygulamaları',
          lessons: [
            { id: 'c5-5', t: 'Botulinum Toksin: Etki Mekanizması, Endikasyonlar ve Klinik Protokoller', d: '45:00' },
            { id: 'c5-6', t: 'Canlı Hasta Uygulaması 1: Oklüzal Splintin Ağız İçi Uyumlaması', d: '01:30:00' },
            { id: 'c5-7', t: 'Canlı Hasta Uygulaması 2: TMD ve Bruksizmde Botulinum Toksin', d: '01:30:00' }
          ]
        }
      ]
    },
    {
      id: 'c6',
      wpId: 2511,
      title: 'Bir Şans Daha: Endodontik Retreatment',
      subtitle: 'Başarısız kanal tedavilerinin etiyolojisi, koronal söküm, güta-perka ve kırık alet bypass teknikleri, perforasyon onarımı ve fiber post sökümü üzerine teorik ve hands-on workshop.',
      category: 'yuzyuze',
      subCategory: 'endodonti',
      formatLabel: 'Yüz Yüze Hands-On Workshop',
      status: 'full',
      statusText: 'Kontenjan Dolmuştur · Ön Kayıt',
      dateText: '18 Ekim Pazar 2026 • 10:00 - 18:00',
      locationText: 'Kozyatağı / Kadıköy · 8 Kişi Kontenjan',
      mentorId: 'm1',
      image: 'assets/wp/c-retreatment-ws.jpg',
      spotlight: false,
      homeSeries: true,
      lessons: 13,
      hours: '8 Saat Hands-On',
      level: 'Orta - İleri',
      rating: 5.0,
      reviews: 62,
      students: 160,
      price: 6000,
      oldPrice: 7500,
      badge: 'Kontenjan Doldu',
      updated: 'Ekim 2026',
      learn: [
        'Retreatment karar mekanizması: Ne zaman yenileme, ne zaman cerrahi, ne zaman çekim?',
        'Koronal söküm protokolleri (post ve kor sökümü) ve ultrasonik uçların güvenli kullanımı',
        'Güta-perka, pat, gümüş kon ve taşıyıcı sistemlerin uzaklaştırılması',
        'Basamak (ledge), tıkanıklık (blokaj), transportasyon ve kırık alet bypass stratejileri',
        'Perforasyon tipleri ve biyoseramik materyallerle onarım protokolleri',
        'Hands-On: El eğeleri, döner eğe sistemleri ve çözücü ile güta-perka sökümü, kırık alet bypass ve fiber post sökümü'
      ],
      curriculum: [
        {
          title: 'Bölüm 1: Teorik Protokoller (10:00 - 13:30)',
          lessons: [
            { id: 'c6-1', t: 'Başarısız kanal tedavilerinin etiyolojisi ve karar mekanizması', d: '40:00', pv: true },
            { id: 'c6-2', t: 'Koronal söküm, güta-perka ve taşıyıcı sistemlerin uzaklaştırılması', d: '45:00', pv: true },
            { id: 'c6-3', t: 'Basamak, blokaj, kırık alet bypass ve perforasyon yönetimi', d: '50:00' },
            { id: 'c6-4', t: 'Retreatment vakalarında güncel irrigasyon ve obtürasyon', d: '35:00' }
          ]
        },
        {
          title: 'Bölüm 2: Hands-On Uygulama (14:30 - 18:00)',
          lessons: [
            { id: 'c6-5', t: 'Uygulama 1: Döner eğe sistemleri ve çözücü ile güta-perka sökümü', d: '01:10:00' },
            { id: 'c6-6', t: 'Uygulama 2: Kırık alet bypass tekniğinin deneyimlenmesi', d: '01:10:00' },
            { id: 'c6-7', t: 'Uygulama 3: Ultrasonik uçlarla güvenli fiber post sökümü', d: '01:10:00' }
          ]
        }
      ]
    },
    {
      id: 'c7',
      wpId: 2273,
      title: 'MTA ve Biyoseramikler: Klinik Protokoller ve Komplikasyon Yönetimi',
      subtitle: 'Vital pulpa tedavileri, geniş apeksli dişlerde apeksifikasyon ve rejeneratif endodonti, perforasyon onarımı ve kök rezorpsiyonlarında biyoseramik uygulamaları — Hands-On pratik ile.',
      category: 'yuzyuze',
      subCategory: 'endodonti',
      formatLabel: 'Yüz Yüze Hands-On Kurs',
      status: 'past',
      statusText: 'Tamamlandı · Yeni Dönem Ön Kayıt',
      dateText: '17 Mayıs Pazar 2026 • 10:00 - 18:00',
      locationText: 'Dentreal Market · İstanbul',
      mentorId: 'm1',
      image: 'assets/wp/c-mta.jpg',
      lessons: 8,
      hours: '8 Saat Hands-On',
      level: 'Tüm Seviyeler',
      rating: 5.0,
      reviews: 54,
      students: 145,
      price: 9500,
      oldPrice: 11500,
      badge: 'Hands-On Kurs',
      updated: 'Mayıs 2026',
      learn: [
        'Biyoseramik nedir? Kalsiyum silikat esaslı materyalleri gerçekten ne kadar tanıyoruz?',
        'Vital pulpa tedavilerinde doğru vaka seçimi ve klinik başarıyı etkileyen kritik noktalar',
        'Geniş apeksli dişlerde güncel yaklaşımlar: Apeksifikasyon mu, rejeneratif endodonti mi?',
        'Perforasyon vakalarında prognozu belirleyen faktörler ve doğru onarım stratejileri',
        'Kök rezorpsiyonlarında teşhis, sınıflama ve biyoseramiklerle yönetim protokolleri',
        'Hands-On: Çekilmiş dişler üzerinde furkasyon perforasyonu onarımı ve açık apeksli dişlerde MTA / biyoseramik apikal tıkaç (plug) uygulaması'
      ],
      curriculum: [
        {
          title: 'Bölüm 1: Kalsiyum Silikat Esaslı Materyaller & Klinik Endikasyonlar',
          lessons: [
            { id: 'c7-1', t: 'Biyoseramiklerin kimyası, sertleşme mekanizması ve sınıflaması', d: '45:00', pv: true },
            { id: 'c7-2', t: 'Vital pulpa tedavileri, apeksifikasyon ve rejeneratif endodonti', d: '50:00' },
            { id: 'c7-3', t: 'Perforasyon onarımı ve kök rezorpsiyonlarında yönetim protokolleri', d: '50:00' }
          ]
        },
        {
          title: 'Bölüm 2: Çekilmiş Dişler Üzerinde Hands-On Uygulama',
          lessons: [
            { id: 'c7-4', t: 'Furkasyon perforasyonu onarımı pratiği', d: '01:30:00' },
            { id: 'c7-5', t: 'Açık apeksli dişlerde MTA / biyoseramik apikal plug uygulaması', d: '01:30:00' }
          ]
        }
      ]
    },
    {
      id: 'c8',
      wpId: 2157,
      title: 'Porselen Lamina Venerler: Preparasyon ve Simantasyon',
      subtitle: 'Gülüş tasarımı prensipleri, mock-up teknikleri, fantom model üzerinde diş preparasyon çeşitleri, ölçü yöntemleri ve adeziv simantasyon protokolleri.',
      category: 'yuzyuze',
      subCategory: 'protetik',
      formatLabel: 'Yüz Yüze Uygulamalı Workshop',
      status: 'past',
      statusText: 'Tamamlandı · Yeni Dönem Ön Kayıt',
      dateText: '08 Mart Pazar 2026 • 09:00 - 13:00',
      locationText: 'Bahçeşehir Üniversitesi Diş Hekimliği Fakültesi',
      mentorId: 'm4',
      image: 'assets/wp/c-lamina.jpg',
      lessons: 7,
      hours: '5 Saat Uygulamalı',
      level: 'Orta - İleri',
      rating: 4.9,
      reviews: 41,
      students: 130,
      price: 4500,
      oldPrice: 6000,
      badge: 'Fantom Uygulamalı',
      updated: 'Mart 2026',
      learn: [
        'Porselen lamina venerlerde tedavi planlaması ve doğru vaka/endikasyon seçimi',
        'Gülüş tasarımı prensipleri ve silikon anahtar ile mock-up teknikleri',
        'Fantom model üzerinde minimal invaziv diş preparasyon prensipleri ve çeşitleri',
        'Hassas ölçü yöntemleri ve geçici restorasyonların hazırlanması',
        'Fantom model üzerinde adım adım adeziv simantasyon uygulaması'
      ],
      curriculum: [
        {
          title: 'Bölüm 1: Planlama, Gülüş Tasarımı ve Mock-Up',
          lessons: [
            { id: 'c8-1', t: 'Tedavi planlaması, endikasyonlar ve gülüş tasarımı', d: '45:00', pv: true },
            { id: 'c8-2', t: 'Mock-up teknikleri ve indeks üzerinden derinlik kontrolü', d: '45:00' }
          ]
        },
        {
          title: 'Bölüm 2: Fantom Model Üzerinde Preparasyon & Simantasyon',
          lessons: [
            { id: 'c8-3', t: 'Diş preparasyon prensipleri ve fantom model uygulaması', d: '01:30:00' },
            { id: 'c8-4', t: 'Ölçü, geçici restorasyonlar ve fantom üzerinde simantasyon', d: '01:30:00' }
          ]
        }
      ]
    },
    {
      id: 'c9',
      wpId: 1979,
      title: 'Subperiosteal İmplantlar – 1. Oturum: Teorik + Canlı Cerrahi',
      subtitle: 'Prof. Dr. Selçuk Basa eşliğinde ileri atrofik çenelerde subperiosteal implant cerrahisine güncel yaklaşım, 3D dijital tasarım, anatomik kriterler ve canlı cerrahi oturumu.',
      category: 'yuzyuze',
      subCategory: 'cerrahi',
      formatLabel: 'Teorik + Canlı Cerrahi',
      status: 'past',
      statusText: 'Tamamlandı · Yeni Dönem Ön Kayıt',
      dateText: '08 Şubat Pazar 2026 • 09:00 - 18:00',
      locationText: 'Bahçeşehir Üniversitesi Diş Hekimliği Fakültesi',
      mentorId: 'm3',
      image: 'assets/wp/c-subperiosteal-1.jpg',
      lessons: 6,
      hours: '9 Saat · Canlı Cerrahi',
      level: 'İleri Seviye',
      rating: 5.0,
      reviews: 76,
      students: 210,
      price: 10000,
      oldPrice: 12500,
      taxNote: 'KDV Dahil',
      badge: 'Canlı Cerrahi',
      updated: 'Şubat 2026',
      learn: [
        'İleri atrofik maksilla ve mandibulada hasta seçimi, anatomik ve radyolojik kriterler',
        'CBCT verisi üzerinden kişiye özel 3D subperiosteal implant dijital planlaması',
        'Cerrahi protokol, flep tasarımı, osteotomi ve rijit vida fiksasyonu',
        'Protetik yükleme prensipleri ve postoperatif komplikasyon yönetimi',
        'Canlı Cerrahi Oturumu: İnsizyondan implant uyumuna ve primer stabilizasyona canlı izleme ve soru-cevap'
      ],
      curriculum: [
        {
          title: '1. Bölüm (09:00 - 10:30): Subperiosteal İmplant Cerrahisine Güncel Yaklaşım',
          lessons: [
            { id: 'c9-1', t: 'Hasta seçimi, anatomik/radyolojik kriterler ve dijital planlama', d: '45:00', pv: true },
            { id: 'c9-2', t: 'Cerrahi protokol, flep tasarımı, fiksasyon ve protetik yükleme', d: '45:00', pv: true }
          ]
        },
        {
          title: '2. Bölüm (11:00 - 13:00): Canlı Cerrahi Oturumu',
          lessons: [
            { id: 'c9-3', t: 'Preoperatif değerlendirme, insizyon, flep ve implant uyumu', d: '01:00:00' },
            { id: 'c9-4', t: 'Primer stabilizasyon, yumuşak doku kapama ve canlı soru-cevap', d: '01:00:00' }
          ]
        }
      ]
    },
    {
      id: 'c10',
      wpId: 1991,
      title: 'Subperiosteal İmplantlar – 2. Oturum: Hands-On Uygulama',
      subtitle: 'Prof. Dr. Selçuk Basa ile fantom çene modelleri üzerinde kişiye özel subperiosteal implant pozisyonlandırma, vida fiksasyonu, yumuşak doku yönetimi ve sütür teknikleri.',
      category: 'yuzyuze',
      subCategory: 'cerrahi',
      formatLabel: 'Yüz Yüze Hands-On Workshop',
      status: 'full',
      statusText: 'Kontenjan Dolmuştur · Ön Kayıt',
      dateText: '08 Şubat Pazar 2026 • 14:00 - 18:00',
      locationText: 'Bahçeşehir Üniversitesi Diş Hekimliği Fakültesi',
      mentorId: 'm3',
      image: 'assets/wp/c-subperiosteal-2.jpg',
      lessons: 5,
      hours: '9 Saat · Hands-On',
      level: 'İleri Seviye',
      rating: 5.0,
      reviews: 68,
      students: 180,
      price: 15000,
      oldPrice: 18500,
      taxNote: 'KDV Dahil',
      badge: 'Hands-On Masterclass',
      updated: 'Şubat 2026',
      learn: [
        'Fantom çene modelleri üzerinde subperiosteal implantın doğru anatomik pozisyonlandırılması',
        'Osteosentez vidaları ile rijit fiksasyon ve primer stabilizasyon kontrolü',
        'Gerilimsiz yumuşak doku kapatma, periost gevşetme ve ileri sütür teknikleri',
        'Prof. Dr. Selçuk Basa eşliğinde birebir uygulama değerlendirmesi'
      ],
      curriculum: [
        {
          title: '3. Bölüm (14:00 - 18:00): Fantom Çene Modelleri Üzerinde Uygulamalı Eğitim',
          lessons: [
            { id: 'c10-1', t: 'Subperiosteal implantın pozisyonlandırılması ve adaptasyonu', d: '01:20:00', pv: true },
            { id: 'c10-2', t: 'Vida fiksasyonu ve primer stabilizasyon uygulaması', d: '01:20:00' },
            { id: 'c10-3', t: 'Yumuşak doku yönetimi ve ileri sütür teknikleri', d: '01:20:00' }
          ]
        }
      ]
    },
    {
      id: 'c11',
      wpId: 754,
      title: 'Apikal Rezeksiyon: Kanal Tedavisi, Cerrahi ve Biyomateryal Perspektifinden',
      subtitle: 'Doç. Dr. Burçin Arıcan Alpay ve Doç. Dr. Ezgi Yüceer Çetiner ile endodontik-cerrahi sınırda karar verme, retrograd kavite açımı, MTA/Biyoseramik dolgu ve fantom üzerinde apikal cerrahi.',
      category: 'yuzyuze',
      subCategory: 'endodonti',
      formatLabel: 'Yüz Yüze Hands-On Workshop',
      status: 'past',
      statusText: 'Tamamlandı · Yeni Dönem Ön Kayıt',
      dateText: '07 Aralık Pazar 2025 • 10:00 - 18:00',
      locationText: 'Dentrealacademy Eğitim Salonu - Ümraniye',
      mentorId: 'm1',
      coMentor: 'Doç. Dr. Ezgi Yüceer Çetiner',
      image: 'assets/wp/c-apikal.webp',
      lessons: 10,
      hours: '8 Saat Hands-On',
      level: 'Orta - İleri',
      rating: 5.0,
      reviews: 84,
      students: 240,
      price: 10000,
      oldPrice: 12500,
      taxNote: '+KDV',
      badge: 'İki Uzman Tek Kurs',
      updated: 'Aralık 2025',
      learn: [
        'Endodontik-cerrahi sınırda karar verme: Lezyonların radyografik ve klinik analizi',
        'Cerrahi öncesi endodontik hazırlık, flep tasarımı ve osteotomi prensipleri',
        'Kök ucu rezeksiyon açısı ve ultrasonik uçlarla retrograd kavite hazırlığı',
        'Biyomateryal seçimi (MTA, Biodentine, Biyoseramikler) ve rejeneratif greft/membran yaklaşımları',
        'Hands-On: Özel fantom modeller üzerinde flep, osteotomi, kök ucu rezeksiyonu, retrograd dolgu ve mikro-sütür'
      ],
      curriculum: [
        {
          title: 'Bölüm 1: Teorik Eğitim (10:00 - 12:30)',
          lessons: [
            { id: 'c11-1', t: 'Endodontik-cerrahi sınırda karar verme ve preoperatif hazırlık', d: '45:00', pv: true },
            { id: 'c11-2', t: 'Flep tasarımı, osteotomi, rezeksiyon açısı ve retrograd kavite', d: '50:00', pv: true },
            { id: 'c11-3', t: 'MTA, Biodentine, biyoseramikler ve greft/membran kullanımı', d: '55:00' }
          ]
        },
        {
          title: 'Bölüm 2: Özel Fantom Modeller Üzerinde Hands-On (13:30 - 17:30)',
          lessons: [
            { id: 'c11-4', t: 'Flep kaldırma, osteotomi ve kök ucu rezeksiyonu uygulaması', d: '02:00:00' },
            { id: 'c11-5', t: 'Ultrasonik retrograd kavite, biyoseramik dolgu ve mikro-sütür', d: '02:00:00' }
          ]
        }
      ]
    },

    /* ==================== D. GEÇMİŞ ONLINE EĞİTİMLER (ARŞİV & KAYITLAR) ==================== */
    {
      id: 'c12',
      wpId: 2358,
      title: 'Endodontide Komplikasyon Yönetimi',
      subtitle: 'Giriş kavitesi komplikasyonları, basamak (ledge), kanal tıkanıklıkları, apikal transportasyon, perforasyon yönetimi, kırık alet algoritmaları ve hipoklorit kazaları.',
      category: 'online',
      subCategory: 'endodonti',
      formatLabel: 'Online Eğitim · Video Kaydı',
      status: 'archive',
      statusText: 'Video Arşivi · Abonelere Açık',
      dateText: '07 Ekim Çarşamba 2026 • Saat: 20:00',
      locationText: 'Online Video Arşivi',
      mentorId: 'm1',
      image: 'assets/wp/c-endo-komp.jpg',
      lessons: 6,
      hours: '2 Saat Video Kaydı',
      level: 'Tüm Seviyeler',
      rating: 4.9,
      reviews: 72,
      students: 390,
      price: 490,
      oldPrice: 750,
      taxNote: '+KDV',
      freeForSubscribers: true,
      badge: 'Online Arşiv',
      updated: 'Ekim 2026',
      learn: [
        'Giriş kavitesi kaynaklı komplikasyonlar, basamak (ledge) oluşumu ve kanal tıkanıklıkları',
        'Apikal transportasyon, zip ve perforasyon yönetimi',
        'Kırık alet yönetimi: Ne zaman bypass, ne zaman çıkarma, ne zaman takip?',
        'Hipoklorit kazaları ve obtürasyon kaynaklı (taşkın/eksik dolum) komplikasyonlar'
      ],
      curriculum: [
        {
          title: 'Bölüm 1: İntraoperatif Endodontik Komplikasyonlar',
          lessons: [
            { id: 'c12-1', t: 'Giriş kavitesi, basamak (ledge) ve blokaj yönetimi', d: '35:00', pv: true },
            { id: 'c12-2', t: 'Kırık alet karar algoritması ve perforasyon onarımı', d: '40:00' },
            { id: 'c12-3', t: 'Hipoklorit kazaları ve obtürasyon komplikasyonları', d: '35:00' }
          ]
        }
      ]
    },
    {
      id: 'c13',
      wpId: 2292,
      title: 'Temporomandibular Eklem Hastalıklarında Klinik Yaklaşım ve Splint Uygulamaları',
      subtitle: 'TME rahatsızlıklarının ayırıcı tanısı, kas ve eklem kaynaklı ağrıların yönetimi, oklüzal splint endikasyonları ve klinik uyumlama ipuçları.',
      category: 'online',
      subCategory: 'cerrahi',
      formatLabel: 'Online Eğitim · Video Kaydı',
      status: 'archive',
      statusText: 'Video Arşivi · Abonelere Açık',
      dateText: '24 Haziran Çarşamba 2026 • Saat: 20:00',
      locationText: 'Online Video Arşivi',
      mentorId: 'm2',
      image: 'assets/wp/c-tme-online.jpg',
      lessons: 5,
      hours: '2 Saat Video Kaydı',
      level: 'Tüm Seviyeler',
      rating: 4.9,
      reviews: 61,
      students: 340,
      price: 490,
      oldPrice: 750,
      taxNote: '+KDV',
      freeForSubscribers: true,
      badge: 'Online Arşiv',
      updated: 'Haziran 2026',
      learn: [
        'TME bozukluklarında doğru anamnez ve klinik muayene sıralaması',
        'Miyofasiyal ağrı ile disk deplasmanlarının ayırıcı tanısı',
        'Stabilizasyon splinti ve anterior konumlandırma splinti seçim kriterleri',
        'Klinikte splint teslimi ve oklüzal aşındırma protokolü'
      ],
      curriculum: [
        {
          title: 'Bölüm 1: TME Tanı ve Splint Protokolleri',
          lessons: [
            { id: 'c13-1', t: 'TME muayenesi ve ayırıcı tanı algoritması', d: '40:00', pv: true },
            { id: 'c13-2', t: 'Oklüzal splint tipleri, teslimi ve hasta takibi', d: '45:00' }
          ]
        }
      ]
    },
    {
      id: 'c14',
      wpId: 2228,
      title: 'İkinci Şans Mümkün Mü? Kök Kanal Tedavisinde Retreatment',
      subtitle: 'Başarısız kanal tedavilerinde klinik karar verme, eski kanal dolgu materyallerinin güvenli sökümü ve retreatment başarısını artıran protokoller.',
      category: 'online',
      subCategory: 'endodonti',
      formatLabel: 'Online Eğitim · Video Kaydı',
      status: 'archive',
      statusText: 'Video Arşivi · Abonelere Açık',
      dateText: '20 Nisan Pazartesi 2026 • Saat: 20:00',
      locationText: 'Online Video Arşivi',
      mentorId: 'm1',
      image: 'assets/wp/c-retreatment-online.jpg',
      lessons: 5,
      hours: '2 Saat Video Kaydı',
      level: 'Tüm Seviyeler',
      rating: 5.0,
      reviews: 69,
      students: 410,
      price: 490,
      oldPrice: 750,
      taxNote: '+KDV',
      freeForSubscribers: true,
      badge: 'Online Arşiv',
      updated: 'Nisan 2026',
      learn: [
        'Post-endodontik hastalık nedenleri ve radyografik analiz',
        'Kron, post ve kor materyallerinin atravmatik uzaklaştırılması',
        'Güta-perka sökümünde döner eğe ve çözücü protokolleri',
        'Retreatment vakalarında dezenfeksiyon ve apikal sızdırmazlık'
      ],
      curriculum: [
        {
          title: 'Bölüm 1: Retreatment Teori ve Vaka Analizleri',
          lessons: [
            { id: 'c14-1', t: 'Endodontik başarısızlık nedenleri ve vaka seçimi', d: '40:00', pv: true },
            { id: 'c14-2', t: 'Adım adım söküm, dezenfeksiyon ve yeniden dolum', d: '50:00' }
          ]
        }
      ]
    },
    {
      id: 'c15',
      wpId: 2226,
      title: 'Beyazlatmada Klinik İpuçları',
      subtitle: 'Ofis ve ev tipi vital/devital beyazlatma protokolleri, hassasiyet yönetimi, renk stabilitesi ve zorlu renkleşmelerde kombine yaklaşımlar.',
      category: 'online',
      subCategory: 'protetik',
      formatLabel: 'Online Eğitim · Video Kaydı',
      status: 'archive',
      statusText: 'Video Arşivi · Abonelere Açık',
      dateText: '26 Mart Perşembe 2026 • Saat: 20:00',
      locationText: 'Online Video Arşivi',
      mentorId: 'm1',
      image: 'assets/wp/c-beyazlatma.jpg',
      lessons: 4,
      hours: '2 Saat Video Kaydı',
      level: 'Tüm Seviyeler',
      rating: 4.9,
      reviews: 55,
      students: 325,
      price: 490,
      oldPrice: 750,
      taxNote: '+KDV',
      freeForSubscribers: true,
      badge: 'Online Arşiv',
      updated: 'Mart 2026',
      learn: [
        'Renkleşme etiyolojisi ve doğru beyazlatma endikasyonu',
        'Ofis tipi ve ev tipi beyazlatmada ajan konsantrasyonu seçimi',
        'Devital (walking bleach) beyazlatmada servikal bariyer protokolü ve rezorpsiyon önleme',
        'Post-operatif hassasiyet kontrolü ve restorasyon zamanlaması'
      ],
      curriculum: [
        {
          title: 'Bölüm 1: Vital & Devital Beyazlatma Protokolleri',
          lessons: [
            { id: 'c15-1', t: 'Ofis ve ev tipi beyazlatmada klinik püf noktaları', d: '40:00', pv: true },
            { id: 'c15-2', t: 'Devital beyazlatma ve hassasiyet yönetimi', d: '40:00' }
          ]
        }
      ]
    },
    {
      id: 'c16',
      wpId: 2172,
      title: 'Klinik Pratiğinde Periodontal Uygulamalar',
      subtitle: 'Doğru periodontal teşhis, cerrahi olmayan tedavilerde maksimum başarı, lokal/sistemik antibiyotikler, gingivektomi ve kron boyu uzatma.',
      category: 'online',
      subCategory: 'pedodonti',
      formatLabel: 'Online Eğitim · Video Kaydı',
      status: 'archive',
      statusText: 'Video Arşivi · Abonelere Açık',
      dateText: '16 Şubat Pazartesi 2026 • Saat: 20:00',
      locationText: 'Online Video Arşivi',
      mentorId: 'm2',
      image: 'assets/wp/c-perio.jpg',
      lessons: 5,
      hours: '2 Saat Video Kaydı',
      level: 'Tüm Seviyeler',
      rating: 4.9,
      reviews: 49,
      students: 295,
      price: 490,
      oldPrice: 750,
      taxNote: '+KDV',
      freeForSubscribers: true,
      badge: 'Online Arşiv',
      updated: 'Şubat 2026',
      learn: [
        'Güncel sınıflamaya göre doğru periodontal teşhis ve prognostik değerlendirme',
        'Cerrahi olmayan periodontal tedavilerde maksimum klinik başarı',
        'Lokal/sistemik antibiyotikler, antiseptikler ve probiyotiklerin rasyonel kullanımı',
        'Estetik ve fonksiyonel gingivektomi ile kron boyu uzatma endikasyonları'
      ],
      curriculum: [
        {
          title: 'Bölüm 1: Periodontal Teşhis ve Klinik Uygulamalar',
          lessons: [
            { id: 'c16-1', t: 'Doğru periodontal teşhis ve cerrahi olmayan tedavi protokolleri', d: '45:00', pv: true },
            { id: 'c16-2', t: 'Gingivektomi, kron boyu uzatma ve doğru vaka seçimi', d: '45:00' }
          ]
        }
      ]
    },
    {
      id: 'c17',
      wpId: 2007,
      title: 'Restorasyon Odaklı Diş Preparasyonları',
      subtitle: 'Tam seramik, zirkonya ve adeziv restorasyonlarda biyomekanik preparasyon prensipleri, basamak tasarımı, retraksiyon ve dijital/konvansiyonel ölçü detayları.',
      category: 'online',
      subCategory: 'protetik',
      formatLabel: 'Online Eğitim · Video Kaydı',
      status: 'archive',
      statusText: 'Video Arşivi · Abonelere Açık',
      dateText: '15 Ocak Pazar 2026 • Saat: 20:00',
      locationText: 'Online Video Arşivi',
      mentorId: 'm4',
      image: 'assets/wp/c-preparasyon.webp',
      lessons: 5,
      hours: '2 Saat Video Kaydı',
      level: 'Tüm Seviyeler',
      rating: 4.9,
      reviews: 58,
      students: 350,
      price: 490,
      oldPrice: 750,
      taxNote: '+KDV',
      freeForSubscribers: true,
      badge: 'Online Arşiv',
      updated: 'Ocak 2026',
      learn: [
        'Materyal tipine göre (lityum disilikat, monolitik zirkonya) preparasyon derinliği',
        'Basamak (chamfer, shoulder) ve vertikal (BOPT/feather-edge) preparasyon seçimi',
        'Yumuşak doku yönetimi, retraksiyon kordu uygulama teknikleri ve net marjin kaydı',
        'Preparasyon sırasında yapılan yaygın hatalar ve çözüm yolları'
      ],
      curriculum: [
        {
          title: 'Bölüm 1: Protetik Preparasyon ve Marjin Yönetimi',
          lessons: [
            { id: 'c17-1', t: 'Restorasyon materyaline göre biyomekanik preparasyon prensipleri', d: '45:00', pv: true },
            { id: 'c17-2', t: 'Marjin tasarımı, retraksiyon ve ölçüde hassasiyet', d: '45:00' }
          ]
        }
      ]
    }
  ],

  /* ==================== 4 GERÇEK PLAYBOOK (Klinik Cep Rehberleri) ==================== */
  playbooks: [
    {
      id: 'pb-endo',
      title: 'Endo Playbook',
      subtitle: 'Endodonti Klinik Cep Rehberi',
      category: 'Endodonti',
      badge: '6 Görsel Slayt · Ücretsiz Rehber',
      cover: 'assets/wp/pb-endo-1.jpg',
      slides: [
        'assets/wp/pb-endo-1.jpg',
        'assets/wp/pb-endo-2.jpg',
        'assets/wp/pb-endo-3.jpg',
        'assets/wp/pb-endo-4.jpg',
        'assets/wp/pb-endo-5.jpg',
        'assets/wp/pb-endo-6.jpg'
      ]
    },
    {
      id: 'pb-perio',
      title: 'Perio Playbook',
      subtitle: 'Periodontoloji Klinik Cep Rehberi',
      category: 'Periodontoloji',
      badge: '6 Görsel Slayt · Ücretsiz Rehber',
      cover: 'assets/wp/pb-perio-1.jpg',
      slides: [
        'assets/wp/pb-perio-1.jpg',
        'assets/wp/pb-perio-2.jpg',
        'assets/wp/pb-perio-3.jpg',
        'assets/wp/pb-perio-4.jpg',
        'assets/wp/pb-perio-5.jpg',
        'assets/wp/pb-perio-6.jpg'
      ]
    },
    {
      id: 'pb-surg',
      title: 'Surgery Playbook',
      subtitle: 'Oral Cerrahi Klinik Cep Rehberi',
      category: 'Ağız, Diş ve Çene Cerrahisi',
      badge: '6 Görsel Slayt · Ücretsiz Rehber',
      cover: 'assets/wp/pb-surg-1.jpg',
      slides: [
        'assets/wp/pb-surg-1.jpg',
        'assets/wp/pb-surg-2.jpg',
        'assets/wp/pb-surg-3.jpg',
        'assets/wp/pb-surg-4.jpg',
        'assets/wp/pb-surg-5.jpg',
        'assets/wp/pb-surg-6.jpg'
      ]
    },
    {
      id: 'pb-prostho',
      title: 'Prostho Playbook',
      subtitle: 'Protetik Diş Tedavisi Klinik Rehberi',
      category: 'Protetik & Restoratif',
      badge: '6 Görsel Slayt · Ücretsiz Rehber',
      cover: 'assets/wp/pb-prostho-1.jpg',
      slides: [
        'assets/wp/pb-prostho-1.jpg',
        'assets/wp/pb-prostho-2.jpg',
        'assets/wp/pb-prostho-3.jpg',
        'assets/wp/pb-prostho-4.jpg',
        'assets/wp/pb-prostho-5.jpg',
        'assets/wp/pb-prostho-6.jpg'
      ]
    }
  ],

  bundles: [
    {
      id: 'b1',
      title: 'Online Seminer Arşiv & Canlı Katılım Paketi (8 Eğitim)',
      badge: 'Abonelere Ücretsiz / Paket Avantajı',
      desc: 'Oral Cerrahide Kanama Yönetimi, Pedodonti, Endodontide Komplikasyon, Retreatment, TME, Beyazlatma, Perio ve Preparasyon seminerlerinin tamamı.',
      courseIds: ['c1', 'c2', 'c12', 'c13', 'c14', 'c15', 'c16', 'c17'],
      hours: '16 Saat Online',
      price: 2750,
      oldPrice: 3920
    },
    {
      id: 'b2',
      title: 'Endodonti Klinik & Mikrocerrahi Uzmanlık Serisi',
      badge: 'Doç. Dr. Burçin Arıcan Alpay',
      desc: 'Endodontik Retreatment Workshop, MTA ve Biyoseramikler Hands-On Kursu ve Endodontide Komplikasyon Yönetimi.',
      courseIds: ['c6', 'c7', 'c12'],
      hours: '18 Saat Teorik + Hands-On',
      price: 12900,
      oldPrice: 15990
    },
    {
      id: 'b3',
      title: 'Subperiosteal İmplantlar Tam Gün (1. + 2. Oturum Kombine)',
      badge: 'Prof. Dr. Selçuk Basa · Kombine İndirim',
      desc: '1. Oturum (Teorik + Canlı Cerrahi) ve 2. Oturum (Fantom Çene Modelleri Üzerinde Hands-On) tam gün kombine katılım paketi.',
      courseIds: ['c9', 'c10'],
      hours: '9 Saat Tam Gün',
      price: 21500,
      oldPrice: 25000
    }
  ],

  testimonials: [
    {
      name: 'Dt. Elif Kaya',
      role: 'Diş Hekimi · Endodontik Retreatment & MTA Workshop Katılımcısı',
      text: 'Doç. Dr. Burçin Arıcan Alpay ile gerçekleştirdiğimiz Retreatment ve MTA hands-on kursundan sonra klinikte kırık alet ve perforasyon vakalarına yaklaşımım tamamen değişti.'
    },
    {
      name: 'Dt. Mert Aydın',
      role: 'Klinik Hekimi · TME 360 & Apikal Rezeksiyon Katılımcısı',
      text: 'Doç. Dr. Ezgi Yüceer Çetiner ve Dr. Batuhan Çetiner’in canlı hasta üzerinde gösterdiği oklüzal splint uyumlaması ve botulinum toksin protokolleri doğrudan kliniotikte uygulanabilir nitelikte.'
    },
    {
      name: 'Dt. Selin Öztürk',
      role: 'Diş Hekimi · Subperiosteal İmplantlar & Abonelik Üyesi',
      text: 'Prof. Dr. Selçuk Basa’nın canlı cerrahi oturumu ve fantom modeller üzerindeki birebir değerlendirmeleri paha biçilemezdi. Aylık online seminerlerin abonelere ücretsiz olması da harika.'
    }
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
          'Tüm kurslarda %20 indirim',
          'Aylık online seminerlere ücretsiz katılım & Playbook erişimi'
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
          'Tüm kurslarda %20 indirim',
          'Aylık online seminerlere ücretsiz katılım & Playbook erişimi'
        ]
      }
    ]
  }
};
