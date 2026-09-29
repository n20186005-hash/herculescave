import type { Locale } from '../i18n';

export interface Content {
  siteName: string;
  htmlTitle: string;
  metaDescription: string;
  nav: { id: string; label: string }[];
  openMapsLabel: string;
  locality: string;
  heroKicker: string;
  heroTitle: string;
  heroLead: string;
  ctaVisit: string;
  ctaGallery: string;
  reviewsLabel: string;
  introKicker: string;
  introTitle: string;
  introBody: string;
  factOpen: string;
  factOpenSub: string;
  factClose: string;
  factCloseSub: string;
  factDuration: string;
  factDurationSub: string;
  galleryKicker: string;
  galleryTitle: string;
  galleryNote: string;
  galleryAlts: string[];
  visitKicker: string;
  visitTitle: string;
  visitCards: { title: string; body: string }[];
  aroundKicker: string;
  aroundTitle: string;
  aroundNearby: { title: string; body: string }[];
  aroundFoodKicker: string;
  aroundFoodTitle: string;
  aroundFoodBody: string;
  aroundFoodNote: string;
  mapKicker: string;
  mapTitle: string;
  faqKicker: string;
  faqTitle: string;
  faqs: [string, string][];
  footerBrand: string;
  footerDisclaimer: string;
  footerLegal: { label: string; href: string }[];
}

export const content: Record<Locale, Content> = {
  ar: {
    siteName: 'مغارة هرقل طنجة — دليل الزيارة',
    htmlTitle: 'مغارة هرقل طنجة — الأوقات، التذاكر ودليل الزيارة',
    metaDescription:
      'خطط لزيارة مغارة هرقل في طنجة: ساعات الزيارة، أسعار التذاكر، كيفية الوصول، مواقف السيارات، ونافذة المحيط على شكل إفريقيا. دليل غير رسمي.',
    nav: [
      { id: 'visit', label: 'خطط لزيارتك' },
      { id: 'around', label: 'حول المغارة' },
      { id: 'map', label: 'الخريطة' },
      { id: 'faq', label: 'الأسئلة' }
    ],
    openMapsLabel: 'افتح في الخرائط',
    locality: 'طنجة',
    heroKicker: 'طنجة · رأس سبارطيل · الساحل الأطلسي',
    heroTitle: 'مغارة هرقل',
    heroLead:
      'مدخلٌ من الحجر يفتح على الأطلسي، وتجويفات تحمل آثار اقتطاع أحجار الرحى، وحكاية ارتبطت بهرقل منذ قرون. هنا يلتقي المشهد الطبيعي بالأسطورة على حافة طنجة.',
    ctaVisit: 'معلومات الزيارة',
    ctaGallery: 'شاهد الصور',
    reviewsLabel: 'مراجعة',
    introKicker: 'ما الذي يجعلها مختلفة؟',
    introTitle: 'صخر، مدّ بحري، ونافذة تشبه إفريقيا',
    introBody:
      'تقع المغارة على بعد نحو 14 كيلومتراً غرب طنجة ضمن كتلة رأس سبارطيل. هي مغارة من الحجر الجيري، طبيعية في أصلها وتوسعت أيضاً بفعل استخراج أحجار الرحى من جدرانها. أشهر مشهد فيها هو الفتحة البحرية التي تُشَبَّه بخريطة القارة الإفريقية.',
    factOpen: '09:00',
    factOpenSub: 'بداية ساعات الزيارة المنشورة',
    factClose: '17:00',
    factCloseSub: 'نهاية ساعات الزيارة المنشورة',
    factDuration: '45–75 دقيقة',
    factDurationSub: 'مدة مريحة للمغارة وحدها',
    galleryKicker: 'مشاهد بصرية محلية',
    galleryTitle: 'ضوء الأطلسي داخل الحجر',
    galleryNote:
      'الملفات البصرية محفوظة محلياً. راجع IMAGE-SOURCES.md لمعرفة حالة الصور وروابط الصور الحقيقية المختارة للإنتاج.',
    galleryAlts: [
      'فتحة مغارة هرقل المطلة على المحيط الأطلسي',
      'داخل مغارة هرقل وإضاءة التجويفات الصخرية',
      'فتحة المغارة باتجاه المحيط',
      'الساحل الصخري خارج مغارة هرقل',
      'قاعة حجرية داخل مغارة هرقل'
    ],
    visitKicker: 'خطط لزيارتك',
    visitTitle: 'كل الأساسيات في مكان واحد',
    visitCards: [
      {
        title: 'التذاكر والرسوم',
        body: 'مغربي/مقيم بالغ: 30 د.م · طفل 7–13: 10 د.م · أجنبي بالغ: 80 د.م · طفل أجنبي 7–13: 40 د.م. توجد حالات دخول مجاني منشورة للمغاربة في أيام محددة.'
      },
      {
        title: 'أفضل وقت',
        body: 'الوصول في بداية اليوم يساعد على تجنب الزحام. ولمن يخطط أيضاً للساحل ورأس سبارطيل، يصبح الضوء المتأخر أجمل للتصوير الخارجي.'
      },
      {
        title: 'مدة الزيارة',
        body: 'خصص 45–75 دقيقة للمغارة. أضف ساعتين أو أكثر إذا كنت ستجمعها مع رأس سبارطيل أو شاطئ أشقار.'
      },
      {
        title: 'مواقف السيارات',
        body: 'تتوفر مناطق توقف وخدمات قرب الموقع. في فترات الازدحام قد تمتلئ الأماكن القريبة، لذا يُنصح بالوصول مبكراً وعدم ترك مقتنيات ظاهرة داخل السيارة.'
      },
      {
        title: 'الوصول من طنجة',
        body: 'الموقع غرب وسط طنجة باتجاه أشقار ورأس سبارطيل. السيارة أو سيارة الأجرة هي الخيار الأبسط؛ ويمكن دمج الرحلة بسهولة مع رأس سبارطيل في مسار واحد.'
      },
      {
        title: 'نصيحة عملية',
        body: 'الأرض داخل المغارة قد تكون رطبة وغير مستوية. ارتدِ حذاءً ثابتاً واحمل طبقة خفيفة لأن الجو داخل التجاويف أبرد من الخارج.'
      }
    ],
    aroundKicker: 'معالم قريبة',
    aroundTitle: 'أكمل يوم الساحل',
    aroundNearby: [
      { title: 'رأس سبارطيل', body: 'من أبرز نقاط المشاهدة غرب طنجة، ومناسب للجمع مع المغارة في نفس الرحلة.' },
      { title: 'شاطئ أشقار', body: 'ساحل رملي وصخري قريب، مناسب للمشي ومشاهدة الأطلسي بعد زيارة المغارة.' },
      { title: 'غابة الرميلات / منتزه بيرديكاريس', body: 'مساحة خضراء ومسارات مطلة على البحر إذا أردت إضافة نزهة طبيعية قبل العودة إلى المدينة.' }
    ],
    aroundFoodKicker: 'حول الطعام',
    aroundFoodTitle: 'استراحة بعد المغارة',
    aroundFoodBody:
      'في منطقة أشقار ورأس سبارطيل ستجد مقاهي ومطاعم موسمية وخيارات بحرية بسيطة. ولتنوع أكبر، عُد باتجاه طنجة حيث تتوفر مطاعم مغربية تقدم الطاجين، الكسكس، السمك المشوي والشاي بالنعناع.',
    aroundFoodNote:
      'نصيحة: لا نثبت أسماء أو ساعات مطاعم متغيرة داخل الصفحة حتى لا تصبح المعلومات قديمة بسرعة.',
    mapKicker: 'الموقع',
    mapTitle: 'Q356+X8C، طنجة',
    faqKicker: 'الأسئلة الشائعة',
    faqTitle: 'قبل أن تذهب',
    faqs: [
      [
        'ما هي ساعات الزيارة؟',
        'تعرض منصة وزارة الثقافة المغربية ساعات الزيارة من 09:00 إلى 17:00. قد تتغير الترتيبات في العطل أو بسبب الظروف الميدانية، لذلك يُفضّل التأكد قبل الانطلاق.'
      ],
      [
        'كم تبلغ رسوم الدخول؟',
        'الأسعار المنشورة: 30 درهماً للبالغ المغربي أو المقيم، 10 دراهم للطفل المغربي أو المقيم من 7 إلى 13 سنة، 80 درهماً للبالغ الأجنبي، و40 درهماً للطفل الأجنبي من 7 إلى 13 سنة.'
      ],
      [
        'كم أحتاج من الوقت للزيارة؟',
        'عادة تكفي 45 إلى 75 دقيقة للمغارة نفسها، ويمكن تمديد الرحلة عند جمعها مع رأس سبارطيل وشاطئ أشقار.'
      ],
      [
        'هل توجد مواقف سيارات؟',
        'توجد مناطق توقف وخدمات حول موقع الزيارة، لكن الإشغال يزداد في عطلات نهاية الأسبوع ومواسم الذروة. الوصول مبكراً أكثر راحة.'
      ],
      [
        'ما أفضل وقت للتصوير؟',
        'الصباح الباكر يمنح هدوءاً أكبر داخل المغارة، بينما يمنح ضوء ما بعد الظهر والساعات القريبة من الغروب مشهداً أجمل للساحل الأطلسي.'
      ]
    ],
    footerBrand: 'مغارة هرقل · طنجة',
    footerDisclaimer: 'هذا موقع إرشادي غير رسمي ولا يمثل إدارة مغارة هرقل أو أي جهة حكومية.',
    footerLegal: [
      { label: 'الخصوصية', href: '/privacy.html' },
      { label: 'الشروط', href: '/terms.html' },
      { label: 'ملفات الارتباط', href: '/cookies.html' }
    ]
  },

  en: {
    siteName: 'Hercules Caves Tangier — Visitor Guide',
    htmlTitle: 'Hercules Caves Tangier — Opening Hours, Tickets & Visitor Guide',
    metaDescription:
      'Plan your visit to Hercules Caves (Grottes d’Hercule) in Tangier: opening hours, ticket prices, how to get there, parking, and the Africa-shaped sea window. Unofficial guide.',
    nav: [
      { id: 'visit', label: 'Plan your visit' },
      { id: 'around', label: 'Around the cave' },
      { id: 'map', label: 'Map' },
      { id: 'faq', label: 'FAQ' }
    ],
    openMapsLabel: 'Open in Maps',
    locality: 'Tangier',
    heroKicker: 'Tangier · Cape Spartel · Atlantic Coast',
    heroTitle: 'Hercules Caves',
    heroLead:
      'A limestone doorway opening onto the Atlantic, walls marked by the grooves of millstone quarrying, and a legend tied to Hercules for centuries. Where natural wonder meets myth on the edge of Tangier.',
    ctaVisit: 'Plan your visit',
    ctaGallery: 'View photos',
    reviewsLabel: 'reviews',
    introKicker: 'What makes it different?',
    introTitle: 'Rock, tidal swell, and a window shaped like Africa',
    introBody:
      'The cave lies about 14 km west of Tangier within the Cape Spartel headland. It is a limestone cave, natural in origin and later enlarged by the extraction of millstones from its walls. Its most famous feature is the sea opening that resembles the map of the African continent.',
    factOpen: '09:00',
    factOpenSub: 'Published opening time',
    factClose: '17:00',
    factCloseSub: 'Published closing time',
    factDuration: '45–75 min',
    factDurationSub: 'Comfortable time for the cave alone',
    galleryKicker: 'Local visuals',
    galleryTitle: 'Atlantic light inside the stone',
    galleryNote:
      'Visuals are hosted locally. See IMAGE-SOURCES.md for image status and links to the real photos selected for production.',
    galleryAlts: [
      'Hercules Caves sea window overlooking the Atlantic',
      'Inside Hercules Caves, lit rock cavities',
      'The cave opening toward the ocean',
      'Rocky coast outside Hercules Caves',
      'A stone hall inside Hercules Caves'
    ],
    visitKicker: 'Plan your visit',
    visitTitle: 'All the essentials in one place',
    visitCards: [
      {
        title: 'Tickets & fees',
        body: 'Moroccan resident adult: 30 MAD · Child 7–13: 10 MAD · Foreign adult: 80 MAD · Foreign child 7–13: 40 MAD. Published free-entry days exist for Moroccans on specific dates.'
      },
      {
        title: 'Best time',
        body: 'Arriving early helps avoid crowds. If you also plan the coast and Cape Spartel, late light is best for outdoor photography.'
      },
      {
        title: 'Visit duration',
        body: 'Allow 45–75 minutes for the cave alone. Add two or more hours if combining with Cape Spartel or Achakar Beach.'
      },
      {
        title: 'Parking',
        body: 'Stopping areas and services are available near the site. During peak periods nearby spots fill up, so arrive early and don’t leave valuables visible in the car.'
      },
      {
        title: 'Getting from Tangier',
        body: 'The site is west of central Tangier toward Achakar and Cape Spartel. Car or taxi is simplest; combine easily with Cape Spartel in one route.'
      },
      {
        title: 'Practical tip',
        body: 'The ground inside the cave can be damp and uneven. Wear sturdy shoes and bring a light layer, as it’s cooler inside the cavities than outside.'
      }
    ],
    aroundKicker: 'Nearby sights',
    aroundTitle: 'Complete your coast day',
    aroundNearby: [
      { title: 'Cape Spartel', body: 'One of the top viewpoints west of Tangier, great to combine with the cave in one trip.' },
      { title: 'Achakar Beach', body: 'A nearby sandy and rocky coast, good for walking and watching the Atlantic after the cave.' },
      { title: 'Rmilat Forest / Perdicaris Park', body: 'Green space and sea-view trails if you want to add a nature walk before returning to the city.' }
    ],
    aroundFoodKicker: 'About food',
    aroundFoodTitle: 'A break after the cave',
    aroundFoodBody:
      'Around Achakar and Cape Spartel you’ll find seasonal cafés and simple seafood options. For more variety, head back toward Tangier where Moroccan restaurants serve tagine, couscous, grilled fish and mint tea.',
    aroundFoodNote:
      'Tip: we don’t pin changing restaurant names or hours on the page so the info doesn’t go stale quickly.',
    mapKicker: 'Location',
    mapTitle: 'Q356+X8C, Tangier',
    faqKicker: 'Frequently asked questions',
    faqTitle: 'Before you go',
    faqs: [
      [
        'What are the visiting hours?',
        'The Moroccan Ministry of Culture platform shows visiting hours from 09:00 to 17:00. Arrangements may change on holidays or due to field conditions, so it’s best to confirm before setting out.'
      ],
      [
        'What is the entry fee?',
        'Published prices: 30 MAD for a Moroccan resident adult, 10 MAD for a Moroccan resident child 7–13, 80 MAD for a foreign adult, and 40 MAD for a foreign child 7–13.'
      ],
      [
        'How much time do I need?',
        '45–75 minutes is usually enough for the cave itself; you can extend the trip when combining with Cape Spartel and Achakar Beach.'
      ],
      [
        'Is there parking?',
        'There are stopping areas and services around the visit site, but occupancy rises on weekends and peak seasons. Arriving early is more comfortable.'
      ],
      [
        'When is the best time to photograph?',
        'Early morning gives more calm inside the cave, while afternoon light and hours near sunset offer a nicer view of the Atlantic coast.'
      ]
    ],
    footerBrand: 'Hercules Caves · Tangier',
    footerDisclaimer:
      'This is an unofficial guide site and does not represent the management of Hercules Caves or any government entity.',
    footerLegal: [
      { label: 'Privacy', href: '/privacy.html' },
      { label: 'Terms', href: '/terms.html' },
      { label: 'Cookies', href: '/cookies.html' }
    ]
  },

  fr: {
    siteName: 'Grottes d’Hercule Tanger — Guide de visite',
    htmlTitle: 'Grottes d’Hercule Tanger — Horaires, Tarifs et Guide de visite',
    metaDescription:
      'Préparez votre visite des Grottes d’Hercule à Tanger : horaires, prix des billets, accès, parking et la fenêtre sur l’Atlantique en forme d’Afrique. Guide non officiel.',
    nav: [
      { id: 'visit', label: 'Planifiez votre visite' },
      { id: 'around', label: 'Autour de la grotte' },
      { id: 'map', label: 'Plan' },
      { id: 'faq', label: 'FAQ' }
    ],
    openMapsLabel: 'Ouvrir dans Maps',
    locality: 'Tanger',
    heroKicker: 'Tanger · Cap Spartel · Côte atlantique',
    heroTitle: 'Grottes d’Hercule',
    heroLead:
      'Une porte de pierre ouvrant sur l’Atlantique, des parois marquées par l’extraction des meules, et une légende liée à Hercule depuis des siècles. Ici, le spectacle naturel rencontre le mythe, à la pointe de Tanger.',
    ctaVisit: 'Infos visite',
    ctaGallery: 'Voir les photos',
    reviewsLabel: 'avis',
    introKicker: 'Ce qui la rend unique',
    introTitle: 'Rocher, marée et une fenêtre en forme d’Afrique',
    introBody:
      'La grotte se trouve à environ 14 km à l’ouest de Tanger, dans la pointe du Cap Spartel. C’est une grotte de calcaire, d’origine naturelle, élargie plus tard par l’extraction de meules dans ses parois. Sa caractéristique la plus célèbre est l’ouverture marine qui évoque la carte du continent africain.',
    factOpen: '09:00',
    factOpenSub: 'Début des horaires publiés',
    factClose: '17:00',
    factCloseSub: 'Fin des horaires publiés',
    factDuration: '45–75 min',
    factDurationSub: 'Durée confortable pour la grotte seule',
    galleryKicker: 'Visuels locaux',
    galleryTitle: 'La lumière atlantique dans la pierre',
    galleryNote:
      'Les visuels sont hébergés localement. Voir IMAGE-SOURCES.md pour l’état des images et les liens des photos réelles retenues pour la production.',
    galleryAlts: [
      'La fenêtre marine des Grottes d’Hercule sur l’Atlantique',
      'Intérieur des Grottes d’Hercule, cavités rocheuses éclairées',
      'L’ouverture de la grotte vers l’océan',
      'Côte rocheuse hors des Grottes d’Hercule',
      'Une salle de pierre à l’intérieur des Grottes d’Hercule'
    ],
    visitKicker: 'Planifiez votre visite',
    visitTitle: 'Tout l’essentiel au même endroit',
    visitCards: [
      {
        title: 'Billets et tarifs',
        body: 'Résident marocain adulte : 30 MAD · Enfant 7–13 ans : 10 MAD · Adulte étranger : 80 MAD · Enfant étranger 7–13 ans : 40 MAD. Des journées d’accès gratuit sont publiées pour les Marocains à des dates précises.'
      },
      {
        title: 'Meilleur moment',
        body: 'Arriver tôt permet d’éviter la foule. Si vous prévoyez aussi la côte et le Cap Spartel, la lumière de fin de journée est idéale pour la photo en extérieur.'
      },
      {
        title: 'Durée de la visite',
        body: 'Comptez 45 à 75 minutes pour la grotte seule. Ajoutez deux heures ou plus si vous la combinez avec le Cap Spartel ou la plage d’Achakar.'
      },
      {
        title: 'Stationnement',
        body: 'Des zones de stationnement et des services se trouvent près du site. En période de pointe, les places proches se remplissent ; arrivez tôt et ne laissez pas d’objets de valeur en vue dans la voiture.'
      },
      {
        title: 'Accès depuis Tanger',
        body: 'Le site est à l’ouest du centre de Tanger, vers Achakar et le Cap Spartel. La voiture ou le taxi est le plus simple ; vous pouvez facilement combiner avec le Cap Spartel sur un même itinéraire.'
      },
      {
        title: 'Conseil pratique',
        body: 'Le sol à l’intérieur de la grotte peut être humide et irrégulier. Portez des chaussures fermes et emportez une petite couche, car il y fait plus frais que dehors.'
      }
    ],
    aroundKicker: 'Sites voisins',
    aroundTitle: 'Complétez votre journée côtière',
    aroundNearby: [
      { title: 'Cap Spartel', body: 'L’un des meilleurs points de vue à l’ouest de Tanger, idéal à combiner avec la grotte lors d’un même trajet.' },
      { title: 'Plage d’Achakar', body: 'Une côte sablonneuse et rocheuse à proximité, parfaite pour marcher et observer l’Atlantique après la grotte.' },
      { title: 'Forêt de Rmilat / Parc Perdicaris', body: 'Un espace vert et des sentiers en bord de mer si vous souhaitez ajouter une balade nature avant de rentrer en ville.' }
    ],
    aroundFoodKicker: 'Côté restauration',
    aroundFoodTitle: 'Une pause après la grotte',
    aroundFoodBody:
      'Autour d’Achakar et du Cap Spartel, vous trouverez des cafés saisonniers et de simples options de fruits de mer. Pour plus de variété, revenez vers Tanger où les restaurants marocains servent tajine, couscous, poisson grillé et thé à la menthe.',
    aroundFoodNote:
      'Conseil : nous n’épinglons pas de noms ou d’horaires de restaurants changeants sur la page, afin que l’information ne devienne pas vite obsolète.',
    mapKicker: 'Emplacement',
    mapTitle: 'Q356+X8C, Tanger',
    faqKicker: 'Questions fréquentes',
    faqTitle: 'Avant de partir',
    faqs: [
      [
        'Quels sont les horaires de visite ?',
        'La plateforme du ministère marocain de la Culture indique des horaires de 09:00 à 17:00. Les conditions peuvent changer les jours fériés ou selon le terrain ; il est préférable de confirmer avant de partir.'
      ],
      [
        'Quel est le prix d’entrée ?',
        'Tarifs publiés : 30 MAD pour un adulte résident marocain, 10 MAD pour un enfant résident marocain de 7 à 13 ans, 80 MAD pour un adulte étranger, et 40 MAD pour un enfant étranger de 7 à 13 ans.'
      ],
      [
        'Combien de temps faut-il prévoir ?',
        '45 à 75 minutes suffisent généralement pour la grotte seule ; prolongez la sortie si vous combinez avec le Cap Spartel et la plage d’Achakar.'
      ],
      [
        'Y a-t-il un parking ?',
        'Des zones de stationnement et des services se trouvent près du site, mais l’affluence augmente les week-ends et en haute saison. Arriver tôt est plus confortable.'
      ],
      [
        'Quel est le meilleur moment pour photographier ?',
        'Le matin tôt offre plus de calme à l’intérieur de la grotte, tandis que la lumière de l’après-midi et les heures proches du coucher du soleil donnent une vue plus belle sur la côte atlantique.'
      ]
    ],
    footerBrand: 'Grottes d’Hercule · Tanger',
    footerDisclaimer:
      'Il s’agit d’un site guide non officiel qui ne représente ni la gestion des Grottes d’Hercule ni aucune entité gouvernementale.',
    footerLegal: [
      { label: 'Confidentialité', href: '/privacy.html' },
      { label: 'Conditions', href: '/terms.html' },
      { label: 'Cookies', href: '/cookies.html' }
    ]
  },

  es: {
    siteName: 'Cuevas de Hércules Tánger — Guía de visita',
    htmlTitle: 'Cuevas de Hércules Tánger — Horarios, Entradas y Guía de visita',
    metaDescription:
      'Planifica tu visita a las Cuevas de Hércules en Tánger: horarios, precios de entradas, cómo llegar, aparcamiento y la ventana atlántica con forma de África. Guía no oficial.',
    nav: [
      { id: 'visit', label: 'Planifica tu visita' },
      { id: 'around', label: 'Alrededor de la cueva' },
      { id: 'map', label: 'Mapa' },
      { id: 'faq', label: 'Preguntas' }
    ],
    openMapsLabel: 'Abrir en Maps',
    locality: 'Tánger',
    heroKicker: 'Tánger · Cabo Espartel · Costa atlántica',
    heroTitle: 'Cuevas de Hércules',
    heroLead:
      'Una puerta de piedra que se abre al Atlántico, paredes marcadas por la extracción de piedras de molino, y una leyenda vinculada a Hércules desde hace siglos. Aquí lo natural se encuentra con el mito, en el extremo de Tánger.',
    ctaVisit: 'Información de visita',
    ctaGallery: 'Ver fotos',
    reviewsLabel: 'reseñas',
    introKicker: 'Lo que las hace únicas',
    introTitle: 'Roca, marea y una ventana con forma de África',
    introBody:
      'La cueva se encuentra a unos 14 km al oeste de Tánger, dentro del cabo Espartel. Es una cueva de caliza, de origen natural, ampliada más tarde por la extracción de piedras de molino en sus paredes. Su rasgo más famoso es la apertura marina que evoca el mapa del continente africano.',
    factOpen: '09:00',
    factOpenSub: 'Inicio del horario publicado',
    factClose: '17:00',
    factCloseSub: 'Fin del horario publicado',
    factDuration: '45–75 min',
    factDurationSub: 'Tiempo cómodo solo para la cueva',
    galleryKicker: 'Imágenes locales',
    galleryTitle: 'La luz atlántica dentro de la piedra',
    galleryNote:
      'Las imágenes se alojan localmente. Consulta IMAGE-SOURCES.md para el estado de las fotos y los enlaces de las imágenes reales elegidas para producción.',
    galleryAlts: [
      'La ventana marina de las Cuevas de Hércules sobre el Atlántico',
      'Interior de las Cuevas de Hércules, cavidades rocosas iluminadas',
      'La apertura de la cueva hacia el océano',
      'Costa rocosa fuera de las Cuevas de Hércules',
      'Una sala de piedra dentro de las Cuevas de Hércules'
    ],
    visitKicker: 'Planifica tu visita',
    visitTitle: 'Todo lo esencial en un solo lugar',
    visitCards: [
      {
        title: 'Entradas y tarifas',
        body: 'Adulto residente marroquí: 30 MAD · Niño 7–13 años: 10 MAD · Adulto extranjero: 80 MAD · Niño extranjero 7–13 años: 40 MAD. Hay días de entrada gratuita publicados para marroquíes en fechas concretas.'
      },
      {
        title: 'Mejor momento',
        body: 'Llegar temprano ayuda a evitar las multitudes. Si también planeas la costa y el cabo Espartel, la luz del final del día es ideal para la foto en exteriores.'
      },
      {
        title: 'Duración de la visita',
        body: 'Cuenta con 45 a 75 minutos para la cueva sola. Añade dos horas o más si la combinas con el cabo Espartel o la playa de Achakar.'
      },
      {
        title: 'Aparcamiento',
        body: 'Hay zonas de aparcamiento y servicios cerca del sitio. En temporada alta las plazas cercanas se llenan; llega temprano y no dejes objetos de valor a la vista en el coche.'
      },
      {
        title: 'Cómo llegar desde Tánger',
        body: 'El sitio está al oeste del centro de Tánger, hacia Achakar y el cabo Espartel. El coche o el taxi son lo más sencillo; puedes combinarlo fácilmente con el cabo Espartel en una misma ruta.'
      },
      {
        title: 'Consejo práctico',
        body: 'El suelo dentro de la cueva puede estar húmedo y desnivelado. Lleva calzado firme y una prenda ligera, pues dentro de las cavidades hace más frío que fuera.'
      }
    ],
    aroundKicker: 'Lugares cercanos',
    aroundTitle: 'Completa tu día de costa',
    aroundNearby: [
      { title: 'Cabo Espartel', body: 'Uno de los mejores miradores al oeste de Tánger, ideal para combinar con la cueva en el mismo trayecto.' },
      { title: 'Playa de Achakar', body: 'Una costa arenosa y rocosa cercana, perfecta para caminar y observar el Atlántico tras la cueva.' },
      { title: 'Bosque de Rmilat / Parque Perdicaris', body: 'Zona verde y senderos junto al mar si quieres añadir un paseo natural antes de volver a la ciudad.' }
    ],
    aroundFoodKicker: 'Sobre la comida',
    aroundFoodTitle: 'Un descanso tras la cueva',
    aroundFoodBody:
      'En torno a Achakar y el cabo Espartel encontrarás cafés de temporada y opciones sencillas de marisco. Para más variedad, vuelve hacia Tánger, donde los restaurantes marroquíes sirven tajine, cuscús, pescado a la parrilla y té de menta.',
    aroundFoodNote:
      'Consejo: no fijamos en la página nombres u horarios de restaurantes cambiantes, para que la información no se quede obsoleta rápido.',
    mapKicker: 'Ubicación',
    mapTitle: 'Q356+X8C, Tánger',
    faqKicker: 'Preguntas frecuentes',
    faqTitle: 'Antes de ir',
    faqs: [
      [
        '¿Cuáles son los horarios de visita?',
        'La plataforma del Ministerio de Cultura de Marruecos indica horarios de 09:00 a 17:00. Las condiciones pueden cambiar en festivos o según el terreno; conviene confirmar antes de salir.'
      ],
      [
        '¿Cuál es el precio de entrada?',
        'Tarifas publicadas: 30 MAD para adulto residente marroquí, 10 MAD para niño residente marroquí de 7 a 13 años, 80 MAD para adulto extranjero y 40 MAD para niño extranjero de 7 a 13 años.'
      ],
      [
        '¿Cuánto tiempo se necesita?',
        '45 a 75 minutos suelen bastar para la cueva sola; alárgalo si la combinas con el cabo Espartel y la playa de Achakar.'
      ],
      [
        '¿Hay aparcamiento?',
        'Hay zonas de aparcamiento y servicios cerca del sitio, pero la ocupación sube los fines de semana y en temporada alta. Llegar temprano es más cómodo.'
      ],
      [
        '¿Cuál es el mejor momento para fotografiar?',
        'La mañana temprana da más calma dentro de la cueva, mientras que la luz de la tarde y las horas cercanas al atardecer ofrecen una vista más bella de la costa atlántica.'
      ]
    ],
    footerBrand: 'Cuevas de Hércules · Tánger',
    footerDisclaimer:
      'Este es un sitio guía no oficial que no representa la gestión de las Cuevas de Hércules ni ninguna entidad gubernamental.',
    footerLegal: [
      { label: 'Privacidad', href: '/privacy.html' },
      { label: 'Términos', href: '/terms.html' },
      { label: 'Cookies', href: '/cookies.html' }
    ]
  }
};
