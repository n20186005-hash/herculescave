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
  "ar": {
    "siteName": "مغارة هرقل طنجة — دليل الزيارة",
    "htmlTitle": "مغارة هرقل طنجة — الأوقات، التذاكر ودليل الزيارة",
    "metaDescription": "مغارة هرقل قرب طنجة: أوقات الزيارة المنشورة وفئات التذاكر الرسمية والموقع والاستعداد للرحلة. دليل مستقل غير رسمي.",
    "nav": [
      {
        "id": "visit",
        "label": "خطط لزيارتك"
      },
      {
        "id": "around",
        "label": "حول المغارة"
      },
      {
        "id": "map",
        "label": "الخريطة"
      },
      {
        "id": "faq",
        "label": "الأسئلة"
      }
    ],
    "openMapsLabel": "افتح في الخرائط",
    "locality": "طنجة",
    "heroKicker": "طنجة · رأس سبارطيل · الساحل الأطلسي",
    "heroTitle": "مغارة هرقل",
    "heroLead": "خطط لزيارة مغارة هرقل قرب طنجة: راجع فئات التذاكر والأوقات المنشورة والموقع قبل ترتيب رحلة العودة.",
    "ctaVisit": "معلومات الزيارة",
    "ctaGallery": "حول الرسم التوضيحي",
    "reviewsLabel": "مراجعة",
    "introKicker": "ما الذي يجعلها مختلفة؟",
    "introTitle": "موقع جيري محمي على الساحل الأطلسي",
    "introBody": "تضع منصة تذاكر الوزارة مغارة هرقل ضمن كتلة رأس سبارطيل على بعد نحو 14 كيلومتراً من طنجة. وتصف تجاويف جيرية مظلمة ورطبة ذات فتحة نحو المحيط. أما ارتباط المكان بهرقل فهو من الأساطير اليونانية وليس تفسيراً مثبتاً لتكوّن المغارة.",
    "factOpen": "09:00",
    "factOpenSub": "بداية ساعات الزيارة المنشورة",
    "factClose": "17:00",
    "factCloseSub": "نهاية ساعات الزيارة المنشورة",
    "factDuration": "نحو ساعة",
    "factDurationSub": "اقتراح من الدليل؛ أضف وقت النقل والانتظار",
    "galleryKicker": "توضيح طبيعة الرسم",
    "galleryTitle": "تصميم ساحلي تجريدي وليس صورة للموقع",
    "galleryNote": "هذا رسم تخطيطي أصلي، وليس صورة فوتوغرافية أو مخططاً للمغارة أو تمثيلاً للفتحة الحقيقية. لا يثبت ظروف الوصول الحالية.",
    "galleryAlts": [
      "رسم تجريدي أصلي للصخر والمحيط، وليس مشهداً حقيقياً لمغارة هرقل",
      "رسم تجريدي أصلي للصخر والمحيط، وليس مشهداً حقيقياً لمغارة هرقل",
      "رسم تجريدي أصلي للصخر والمحيط، وليس مشهداً حقيقياً لمغارة هرقل",
      "رسم تجريدي أصلي للصخر والمحيط، وليس مشهداً حقيقياً لمغارة هرقل",
      "رسم تجريدي أصلي للصخر والمحيط، وليس مشهداً حقيقياً لمغارة هرقل"
    ],
    "visitKicker": "خطط لزيارتك",
    "visitTitle": "كل الأساسيات في مكان واحد",
    "visitCards": [
      {
        "title": "الذهاب والعودة",
        "body": "تذكر الوزارة نحو 14 كيلومتراً من طنجة دون ضمان مسافة الطريق أو زمن الرحلة. راجع المسار واتفق على نقطة العودة وموعدها وسعرها قبل الانطلاق."
      },
      {
        "title": "مواقف السيارات",
        "body": "لم نتحقق من السعة والرسوم ونقطة إنزال الركاب حالياً. اتبع اللوحات واستفسر من السائق، ولا تفترض أن تذكرة الدخول تشمل موقفاً."
      },
      {
        "title": "الأرضية وإمكانية الوصول",
        "body": "يصف المصدر الرسمي المغارة بأنها مظلمة ورطبة. اختر حذاءً مناسباً. ذكر إعفاء ذوي الحركة المحدودة لا يثبت وجود مسار متصل بلا درجات؛ اسأل عن احتياجات زيارتك."
      },
      {
        "title": "الوقت المقترح",
        "body": "يقترح الدليل نحو ساعة للمغارة نفسها إضافة إلى النقل والطوابير. ليست مدة رسمية ولا ضماناً لإتاحة جميع الأجزاء."
      }
    ],
    "aroundKicker": "معالم قريبة",
    "aroundTitle": "أكمل يوم الساحل",
    "aroundNearby": [
      {
        "title": "كتلة رأس سبارطيل",
        "body": "تقع المغارة ضمن هذا المحيط الساحلي. لكل محطة إضافية شروطها ولا تدخل تلقائياً ضمن تذكرة المغارة."
      },
      {
        "title": "العودة إلى طنجة",
        "body": "اترك هامشاً للعودة ونظم أي زيارة أخرى للمدينة بشكل منفصل. لا يؤكد الدليل جداول النقل أو مواعيد المعالم الأخرى."
      }
    ],
    "aroundFoodKicker": "حول الطعام",
    "aroundFoodTitle": "استراحة بعد المغارة",
    "aroundFoodBody": "رتب الماء والطعام وفق رحلتك، وتحقق من المواعيد والأسعار لدى المكان الذي تختاره. لا نعتمد هنا مطعماً معيناً أو كشكاً موسمياً.",
    "aroundFoodNote": "الدخول والنقل والوجبات والرحلات التجارية مشتريات منفصلة.",
    "mapKicker": "الموقع",
    "mapTitle": "Q356+X8C، طنجة",
    "faqKicker": "الأسئلة الشائعة",
    "faqTitle": "قبل أن تذهب",
    "faqs": [
      [
        "ما هي ساعات الزيارة؟",
        "تنشر منصة الوزارة وقتاً من 09:00 إلى 17:00. أما لقطة خرائط Google التي راجعناها في 29 أكتوبر 2026 فتشير إلى فتح الساعة 11:00. تحقق من المنصة الرسمية قبل السفر؛ لا تضمن بيانات الخرائط أو افتراضات العطل إمكانية الدخول."
      ],
      [
        "كم تبلغ رسوم الدخول؟",
        "الفئات الرسمية: بالغ مغربي أو مقيم 30 درهماً؛ طفل مغربي أو مقيم من 7 إلى 13 سنة 10 دراهم؛ بالغ أجنبي 80 درهماً؛ طفل أجنبي من 7 إلى 13 سنة 40 درهماً. قد تشمل إعلانات الجولات النقل والخدمات وليست تعرفة الدخول. تحقق من فئتك والمبلغ في المنصة الرسمية."
      ],
      [
        "هل يمثل الرسم المغارة الحقيقية؟",
        "لا. إنه تصميم تجريدي أصلي وليس صورة توثيقية أو مخططاً. راجع المصادر الرسمية لمعرفة الموقع الحقيقي؛ لا يثبت الرسم الشكل الدقيق للفتحة أو المسارات أو المرافق."
      ],
      [
        "هل المسار بلا درجات والموقف مضمون؟",
        "لم نتحقق من هذه الترتيبات. اسأل مسؤول الموقع عن المسار والمساعدة ونقطة الإنزال التي تحتاجها، ولا تستنتج المرافق من إعفاء التذكرة."
      ]
    ],
    "footerBrand": "مغارة هرقل · طنجة",
    "footerDisclaimer": "دليل مستقل غير ربحي للتعريف السياحي والثقافي. غير رسمي ولا يرتبط بإدارة المغارة أو الجهات الحكومية.",
    "footerLegal": [
      {
        "label": "الخصوصية والشروط",
        "href": "/information/"
      }
    ]
  },
  "en": {
    "siteName": "Hercules Caves Tangier — Visitor Guide",
    "htmlTitle": "Hercules Caves Tangier — Opening Hours, Tickets & Visitor Guide",
    "metaDescription": "Hercules Caves near Tangier: official published hours, admission categories, location and return-trip planning. An independent visitor guide with clearly labelled illustrations.",
    "nav": [
      {
        "id": "visit",
        "label": "Plan your visit"
      },
      {
        "id": "around",
        "label": "Around the cave"
      },
      {
        "id": "map",
        "label": "Map"
      },
      {
        "id": "faq",
        "label": "FAQ"
      }
    ],
    "openMapsLabel": "Open in Maps",
    "locality": "Tangier",
    "heroKicker": "Tangier · Cape Spartel · Atlantic Coast",
    "heroTitle": "Hercules Caves",
    "heroLead": "Plan a visit to Hercules Caves near Tangier: check the ministry’s admission categories, published visiting hours and the location before arranging your return transport.",
    "ctaVisit": "Plan your visit",
    "ctaGallery": "About the illustration",
    "reviewsLabel": "reviews",
    "introKicker": "What makes it different?",
    "introTitle": "A protected limestone cave on the Atlantic coast",
    "introBody": "The Ministry’s ticket platform places the protected Hercules Caves on the Cape Spartel massif, about 14 km from Tangier. It describes dark, humid limestone caverns with an opening to the ocean. The association with Hercules belongs to Greek mythology, rather than a verified account of the cave’s formation.",
    "factOpen": "09:00",
    "factOpenSub": "Published opening time",
    "factClose": "17:00",
    "factCloseSub": "Published closing time",
    "factDuration": "About an hour",
    "factDurationSub": "Guide suggestion only; allow extra time for transport and queues",
    "galleryKicker": "Illustration disclosure",
    "galleryTitle": "An abstract coastal motif, not a site photograph",
    "galleryNote": "The graphic is an original schematic illustration. It is not a photograph, floor plan, view of the real opening or evidence of current access conditions.",
    "galleryAlts": [
      "Original abstract ocean-and-rock illustration; not an actual view of Hercules Caves",
      "Original abstract ocean-and-rock illustration; not an actual view of Hercules Caves",
      "Original abstract ocean-and-rock illustration; not an actual view of Hercules Caves",
      "Original abstract ocean-and-rock illustration; not an actual view of Hercules Caves",
      "Original abstract ocean-and-rock illustration; not an actual view of Hercules Caves"
    ],
    "visitKicker": "Plan your visit",
    "visitTitle": "All the essentials in one place",
    "visitCards": [
      {
        "title": "Getting there and back",
        "body": "The official platform places the caves about 14 km from Tangier; that is not a guaranteed driving distance or journey time. Check your route and agree a return pickup and price before setting out."
      },
      {
        "title": "Parking",
        "body": "Current parking capacity, charges and drop-off access have not been verified. Follow the signs and confirm arrangements with your driver; do not assume a space is included in admission."
      },
      {
        "title": "Surfaces and access",
        "body": "The official description mentions dark, humid caverns. Bring suitable footwear. A reduced-mobility ticket category does not establish a continuous step-free route: ask the operator about the access you need."
      },
      {
        "title": "How much time?",
        "body": "As a guide suggestion, allow roughly an hour for the cave itself, plus transport and any queue. This is not an official duration or a guarantee of access to every area."
      }
    ],
    "aroundKicker": "Nearby sights",
    "aroundTitle": "Complete your coast day",
    "aroundNearby": [
      {
        "title": "Cape Spartel coast",
        "body": "The cave lies on this coastal massif. Any additional stop has its own access conditions and is not included automatically in a cave ticket."
      },
      {
        "title": "Back in Tangier",
        "body": "Leave time for the return journey and choose any extra city visit separately. This guide does not confirm transport schedules or availability at other attractions."
      }
    ],
    "aroundFoodKicker": "About food",
    "aroundFoodTitle": "A break after the cave",
    "aroundFoodBody": "Plan food and drinking water around your journey. Confirm opening times and prices with the establishment you choose; the guide does not verify a particular restaurant or seasonal stall.",
    "aroundFoodNote": "Admission, transport, meals and commercial excursion packages are separate purchases.",
    "mapKicker": "Location",
    "mapTitle": "Q356+X8C, Tangier",
    "faqKicker": "Frequently asked questions",
    "faqTitle": "Before you go",
    "faqs": [
      [
        "What are the visiting hours?",
        "The ministry ticket platform publishes 09:00–17:00. The Maps snapshot checked on 29 October 2026 instead indicates an 11:00 opening. Confirm with the official ticket platform before travelling; neither a map listing nor a holiday assumption guarantees access."
      ],
      [
        "How much is admission?",
        "The official categories are Moroccan/resident adult 30 DH; Moroccan/resident child aged 7–13, 10 DH; foreign adult 80 DH; foreign child aged 7–13, 40 DH. Tour advertisements may include transport or other services and are not the admission tariff. Check your eligibility and current total on the ministry platform."
      ],
      [
        "Does the illustration show the real cave?",
        "No. It is an original abstract graphic, not a documentary photo or a plan. Use official sources to assess the actual site; the graphic cannot establish the opening’s shape, access or facilities."
      ],
      [
        "Is there a step-free route or guaranteed parking?",
        "These arrangements have not been verified. Ask the site operator about the route, assistance and drop-off point needed for your visit; do not infer facilities from a ticket exemption."
      ]
    ],
    "footerBrand": "Hercules Caves · Tangier",
    "footerDisclaimer": "Independent, non-profit tourism and cultural information guide. Unofficial and unaffiliated with cave management or government bodies.",
    "footerLegal": [
      {
        "label": "Privacy & terms",
        "href": "/en/information/"
      }
    ]
  },
  "fr": {
    "siteName": "Grottes d’Hercule Tanger — Guide de visite",
    "htmlTitle": "Grottes d’Hercule Tanger — Horaires, Tarifs et Guide de visite",
    "metaDescription": "Grottes d’Hercule près de Tanger : horaires publiés, catégories de billets officiels, localisation et préparation du retour. Guide indépendant avec illustrations identifiées.",
    "nav": [
      {
        "id": "visit",
        "label": "Planifiez votre visite"
      },
      {
        "id": "around",
        "label": "Autour de la grotte"
      },
      {
        "id": "map",
        "label": "Plan"
      },
      {
        "id": "faq",
        "label": "FAQ"
      }
    ],
    "openMapsLabel": "Ouvrir dans Maps",
    "locality": "Tanger",
    "heroKicker": "Tanger · Cap Spartel · Côte atlantique",
    "heroTitle": "Grottes d’Hercule",
    "heroLead": "Préparez la visite des grottes d’Hercule près de Tanger : vérifiez les catégories de billets, les horaires publiés et la localisation avant d’organiser le retour.",
    "ctaVisit": "Infos visite",
    "ctaGallery": "À propos du dessin",
    "reviewsLabel": "avis",
    "introKicker": "Ce qui la rend unique",
    "introTitle": "Un site calcaire protégé sur la côte atlantique",
    "introBody": "La billetterie du ministère situe les grottes d’Hercule dans le massif du cap Spartel, à environ 14 km de Tanger. Elle décrit des cavernes calcaires sombres et humides, ouvertes sur l’océan. Le récit lié à Hercule relève de la mythologie grecque, et non d’une explication démontrée de leur formation.",
    "factOpen": "09:00",
    "factOpenSub": "Début des horaires publiés",
    "factClose": "17:00",
    "factCloseSub": "Fin des horaires publiés",
    "factDuration": "Environ une heure",
    "factDurationSub": "Suggestion du guide ; ajouter trajet et attente",
    "galleryKicker": "Illustration signalée",
    "galleryTitle": "Un motif côtier abstrait, pas une photographie du site",
    "galleryNote": "Ce dessin schématique original n’est ni une photographie, ni un plan, ni une vue de l’ouverture réelle. Il ne prouve pas les conditions d’accès actuelles.",
    "galleryAlts": [
      "Illustration abstraite originale de rochers et d’océan, pas une vue réelle des grottes",
      "Illustration abstraite originale de rochers et d’océan, pas une vue réelle des grottes",
      "Illustration abstraite originale de rochers et d’océan, pas une vue réelle des grottes",
      "Illustration abstraite originale de rochers et d’océan, pas une vue réelle des grottes",
      "Illustration abstraite originale de rochers et d’océan, pas une vue réelle des grottes"
    ],
    "visitKicker": "Planifiez votre visite",
    "visitTitle": "Tout l’essentiel au même endroit",
    "visitCards": [
      {
        "title": "Aller et retour",
        "body": "Le ministère indique environ 14 km depuis Tanger, sans garantir une distance routière ou un temps de trajet. Vérifiez votre itinéraire et convenez du lieu, du prix et de l’heure du retour avant le départ."
      },
      {
        "title": "Stationnement",
        "body": "Capacité, tarifs et dépose actuels ne sont pas vérifiés. Suivez la signalisation et confirmez les modalités avec votre conducteur ; ne supposez pas qu’une place est comprise dans le billet."
      },
      {
        "title": "Sols et accès",
        "body": "La description officielle mentionne des cavernes sombres et humides. Prévoyez des chaussures adaptées. Une gratuité pour mobilité réduite ne démontre pas un parcours sans marches : demandez les conditions utiles à votre visite."
      },
      {
        "title": "Durée à prévoir",
        "body": "Le guide suggère environ une heure pour la grotte, hors transport et file d’attente. Ce n’est pas une durée officielle ni une garantie d’accès à toutes les zones."
      }
    ],
    "aroundKicker": "Sites voisins",
    "aroundTitle": "Complétez votre journée côtière",
    "aroundNearby": [
      {
        "title": "Le massif du cap Spartel",
        "body": "Les grottes se trouvent dans ce massif côtier. Chaque arrêt complémentaire a ses conditions et n’est pas automatiquement inclus dans le billet."
      },
      {
        "title": "Retour à Tanger",
        "body": "Gardez une marge pour le retour et organisez séparément toute autre visite. Le guide ne confirme ni horaires de transport ni ouverture des autres sites."
      }
    ],
    "aroundFoodKicker": "Côté restauration",
    "aroundFoodTitle": "Une pause après la grotte",
    "aroundFoodBody": "Organisez eau et repas selon votre trajet. Vérifiez horaires et prix auprès de l’établissement choisi ; aucun restaurant ou commerce saisonnier précis n’est vérifié ici.",
    "aroundFoodNote": "Entrée, transport, repas et excursions commerciales sont des achats distincts.",
    "mapKicker": "Emplacement",
    "mapTitle": "Q356+X8C, Tanger",
    "faqKicker": "Questions fréquentes",
    "faqTitle": "Avant de partir",
    "faqs": [
      [
        "Quels sont les horaires ?",
        "La billetterie du ministère publie 09:00–17:00. La fiche Maps consultée le 29 octobre 2026 indique plutôt une ouverture à 11:00. Confirmez auprès de la billetterie officielle avant de partir ; ne déduisez pas l’accès d’une fiche de carte ou d’un jour férié."
      ],
      [
        "Quel est le tarif d’entrée ?",
        "Catégories officielles : adulte marocain ou résident 30 DH ; enfant marocain ou résident de 7 à 13 ans 10 DH ; adulte étranger 80 DH ; enfant étranger de 7 à 13 ans 40 DH. Les publicités d’excursions peuvent inclure transport et services ; elles ne sont pas le tarif d’entrée. Vérifiez catégorie et montant sur la plateforme officielle."
      ],
      [
        "Le dessin représente-t-il la grotte réelle ?",
        "Non. C’est une création graphique abstraite, pas une photographie documentaire ni un plan. Consultez les sources officielles pour connaître le site réel ; le dessin ne démontre ni forme exacte, ni accès, ni équipements."
      ],
      [
        "Le parcours est-il sans marches et le parking garanti ?",
        "Ces modalités ne sont pas vérifiées. Interrogez le responsable du site sur parcours, aide et dépose nécessaires ; une exonération de billet ne prouve pas ces équipements."
      ]
    ],
    "footerBrand": "Grottes d’Hercule · Tanger",
    "footerDisclaimer": "Guide indépendant et sans but lucratif d’information touristique et culturelle. Non officiel, sans affiliation à la gestion des grottes ou aux autorités.",
    "footerLegal": [
      {
        "label": "Confidentialité et conditions",
        "href": "/fr/information/"
      }
    ]
  },
  "es": {
    "siteName": "Cuevas de Hércules Tánger — Guía de visita",
    "htmlTitle": "Cuevas de Hércules Tánger — Horarios, Entradas y Guía de visita",
    "metaDescription": "Cuevas de Hércules cerca de Tánger: horario publicado, categorías oficiales de entradas, ubicación y preparación del regreso. Guía independiente con ilustraciones identificadas.",
    "nav": [
      {
        "id": "visit",
        "label": "Planifica tu visita"
      },
      {
        "id": "around",
        "label": "Alrededor de la cueva"
      },
      {
        "id": "map",
        "label": "Mapa"
      },
      {
        "id": "faq",
        "label": "Preguntas"
      }
    ],
    "openMapsLabel": "Abrir en Maps",
    "locality": "Tánger",
    "heroKicker": "Tánger · Cabo Espartel · Costa atlántica",
    "heroTitle": "Cuevas de Hércules",
    "heroLead": "Prepará la visita a las Cuevas de Hércules cerca de Tánger: consultá categorías de entradas, horario publicado y ubicación antes de organizar el regreso.",
    "ctaVisit": "Información de visita",
    "ctaGallery": "Sobre la ilustración",
    "reviewsLabel": "reseñas",
    "introKicker": "Lo que las hace únicas",
    "introTitle": "Una cueva caliza protegida en la costa atlántica",
    "introBody": "La plataforma de entradas del ministerio sitúa las Cuevas de Hércules en el macizo del cabo Espartel, a unos 14 km de Tánger. Describe cavernas calizas oscuras y húmedas con una abertura al océano. La relación con Hércules pertenece a la mitología griega, no a una explicación demostrada de su formación.",
    "factOpen": "09:00",
    "factOpenSub": "Inicio del horario publicado",
    "factClose": "17:00",
    "factCloseSub": "Fin del horario publicado",
    "factDuration": "Alrededor de una hora",
    "factDurationSub": "Sugerencia de la guía; añadí transporte y esperas",
    "galleryKicker": "Ilustración identificada",
    "galleryTitle": "Un motivo costero abstracto, no una fotografía del lugar",
    "galleryNote": "Este esquema original no es una fotografía, un plano ni una vista de la abertura real. No demuestra las condiciones actuales de acceso.",
    "galleryAlts": [
      "Ilustración abstracta original de rocas y océano; no es una vista real de las cuevas",
      "Ilustración abstracta original de rocas y océano; no es una vista real de las cuevas",
      "Ilustración abstracta original de rocas y océano; no es una vista real de las cuevas",
      "Ilustración abstracta original de rocas y océano; no es una vista real de las cuevas",
      "Ilustración abstracta original de rocas y océano; no es una vista real de las cuevas"
    ],
    "visitKicker": "Planifica tu visita",
    "visitTitle": "Todo lo esencial en un solo lugar",
    "visitCards": [
      {
        "title": "Ida y regreso",
        "body": "El ministerio indica unos 14 km desde Tánger; no garantiza distancia por carretera ni duración del viaje. Revisá la ruta y acordá punto, precio y hora de regreso antes de salir."
      },
      {
        "title": "Estacionamiento",
        "body": "No están confirmados cupos, tarifas ni punto de descenso actuales. Seguí la señalización y consultá con tu conductor; no supongas que el boleto incluye estacionamiento."
      },
      {
        "title": "Suelo y acceso",
        "body": "La descripción oficial menciona cavernas oscuras y húmedas. Llevá calzado adecuado. La exención para movilidad reducida no demuestra una ruta sin escalones: consultá las condiciones que necesitás."
      },
      {
        "title": "Tiempo sugerido",
        "body": "Como orientación, reservá alrededor de una hora para la cueva, además del traslado y las filas. No es una duración oficial ni una garantía de acceso a todas las zonas."
      }
    ],
    "aroundKicker": "Lugares cercanos",
    "aroundTitle": "Completa tu día de costa",
    "aroundNearby": [
      {
        "title": "El macizo del cabo Espartel",
        "body": "La cueva se encuentra en este entorno costero. Cada parada adicional tiene sus propias condiciones y no queda incluida automáticamente en la entrada."
      },
      {
        "title": "Regreso a Tánger",
        "body": "Dejá margen para volver y organizá por separado cualquier visita urbana adicional. Esta guía no confirma horarios de transporte ni la apertura de otros lugares."
      }
    ],
    "aroundFoodKicker": "Sobre la comida",
    "aroundFoodTitle": "Un descanso tras la cueva",
    "aroundFoodBody": "Organizá agua y comida según el trayecto. Confirmá horarios y precios con el establecimiento elegido; aquí no se verifica un restaurante o puesto estacional concreto.",
    "aroundFoodNote": "La entrada, el transporte, las comidas y las excursiones comerciales son compras distintas.",
    "mapKicker": "Ubicación",
    "mapTitle": "Q356+X8C, Tánger",
    "faqKicker": "Preguntas frecuentes",
    "faqTitle": "Antes de ir",
    "faqs": [
      [
        "¿Cuál es el horario de visita?",
        "La plataforma del ministerio publica 09:00–17:00. La ficha de Maps consultada el 29 de octubre de 2026 indica, en cambio, apertura a las 11:00. Confirmá con la plataforma oficial antes de viajar; una ficha de mapa o una fecha festiva no garantizan el acceso."
      ],
      [
        "¿Cuánto cuesta la entrada?",
        "Categorías oficiales: adulto marroquí o residente 30 DH; niño marroquí o residente de 7 a 13 años 10 DH; adulto extranjero 80 DH; niño extranjero de 7 a 13 años 40 DH. Los anuncios de tours pueden incluir transporte y servicios; no son la tarifa de entrada. Confirmá categoría e importe en la plataforma oficial."
      ],
      [
        "¿La ilustración muestra la cueva real?",
        "No. Es un gráfico abstracto original, no una fotografía documental ni un plano. Consultá fuentes oficiales para conocer el lugar real; el dibujo no demuestra la forma exacta de la abertura, accesos o instalaciones."
      ],
      [
        "¿Hay una ruta sin escalones y estacionamiento garantizado?",
        "Estas condiciones no se han confirmado. Consultá al responsable del sitio sobre el recorrido, asistencia y punto de descenso que necesitás; no deduzcas instalaciones de una exención de entrada."
      ]
    ],
    "footerBrand": "Cuevas de Hércules · Tánger",
    "footerDisclaimer": "Guía independiente y sin fines de lucro de información turística y cultural. No oficial ni afiliada a la administración de las cuevas o al gobierno.",
    "footerLegal": [
      {
        "label": "Privacidad y condiciones",
        "href": "/es/information/"
      }
    ]
  }
};
