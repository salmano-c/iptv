
export type LanguageCode = 'en' | 'fr' | 'ar' | 'es';
export type Direction = 'ltr' | 'rtl';

// Define the translation key type to ensure typesafety
export type TranslationKey = 
  | 'home'
  | 'about'
  | 'services' 
  | 'reseller'
  | 'pricing'
  | 'contact'
  | 'login'
  | 'sign_up'
  | 'copyright'
  | 'try_our_iptv'
  | 'try_now'
  | 'welcome'
  | 'subtitle'
  | 'get_started'
  | 'active_users'
  | 'movies_count'
  | 'watch_anywhere'
  | 'watch_on_any_device'
  | 'download_app'
  | 'best_experience'
  | 'channels_worldwide'
  | 'premium_experience'
  | 'unlimited_content'
  | 'select'
  | 'month'
  | 'year'
  | 'monthly'
  | 'yearly'
  | 'quarter'
  | 'basic_plan'
  | 'standard_plan'
  | 'premium_plan'
  | 'most_popular'
  | 'save'
  | 'connections_count'
  | 'free_trial_title'
  | 'free_trial_subtitle'
  | 'free_trial_button'
  | 'pricing_title'
  | 'pricing_subtitle'
  | 'movie_showcase_title'
  | 'movie_showcase_description'
  | 'all_genres'
  | 'search_placeholder'
  | 'no_results'
  | 'chat_with_us'
  | 'support_247'
  | 'support_text'
  | 'knowledge_base'
  | 'faq_section_title'
  | 'faq_section_description'
  | 'payment_methods'
  | 'secure_payment'
  | 'customer_feedback'
  | 'feedback_description'
  | 'customers_say'
  | 'share_experience'
  | 'thank_you'
  | 'feedback_submitted'
  | 'name'
  | 'email'
  | 'rating'
  | 'your_experience'
  | 'submit_feedback'
  | 'download_subtitle'
  | 'download_instructionals'
  | 'app_android'
  | 'app_ios'
  | 'app_windows'
  | 'app_mac'
  | 'app_android_tv'
  | 'app_amazon_fire'
  | 'app_providers'
  | 'chat_welcome'
  | 'chat_title'
  | 'chat_placeholder'
  | 'reseller_title'
  | 'reseller_subtitle'
  | 'reseller_competitive_pricing'
  | 'reseller_competitive_pricing_desc'
  | 'reseller_white_label'
  | 'reseller_white_label_desc'
  | 'reseller_support'
  | 'reseller_support_desc'
  | 'reseller_starter'
  | 'reseller_pro'
  | 'reseller_enterprise'
  | 'reseller_feature_credits_10'
  | 'reseller_feature_credits_25'
  | 'reseller_feature_credits_100'
  | 'reseller_feature_basic_panel'
  | 'reseller_feature_advanced_panel'
  | 'reseller_feature_premium_panel'
  | 'reseller_feature_email_support'
  | 'reseller_feature_priority_support'
  | 'reseller_feature_vip_support'
  | 'reseller_feature_white_label'
  | 'reseller_feature_custom_domain'
  | 'reseller_feature_custom_domain_included'
  | 'reseller_feature_marketing'
  | 'reseller_feature_account_manager'
  | 'reseller_feature_api_access'
  | 'reseller_credits'
  | 'reseller_get_started'
  | 'reseller_most_popular'
  | 'reseller_questions'
  | 'reseller_contact_us'
  | 'reseller_interested_in'
  | 'loading'
  | 'please_wait'
  | 'welcome_message'
  | 'power_of_entertainment'
  | 'free_trial'
  | 'channels'
  | 'movies'
  | 'installation'
  | 'faq'
  | 'channels_from_worldwide'
  | 'worldwide_channels_desc'
  | 'all_channels'
  | 'entertainment'
  | 'sports'
  | 'news'
  | 'music'
  | 'documentary'
  | 'faq_title'
  | 'faq_subtitle'
  | 'faq_q1'
  | 'faq_a1'
  | 'faq_q2'
  | 'faq_a2'
  | 'faq_q3'
  | 'faq_a3'
  | 'faq_q4'
  | 'faq_a4'
  | 'faq_q5'
  | 'faq_a5'
  | 'faq_q6'
  | 'faq_a6'
  | 'faq_q7'
  | 'faq_a7'
  | 'faq_q8'
  | 'faq_a8';

// English translations (default)
export const enTranslations: Record<TranslationKey, string> = {
  home: "Home",
  about: "About",
  services: "Services",
  reseller: "Reseller",
  pricing: "Pricing",
  contact: "Contact",
  login: "Login",
  sign_up: "Sign Up",
  copyright: "© 2023 box IPTV. All rights reserved.",
  try_our_iptv: "Try Our IPTV Service",
  try_now: "Try Now",
  welcome: "Welcome to box IPTV",
  subtitle: "The Best IPTV Service Provider",
  get_started: "Get Started",
  active_users: "Active Users",
  movies_count: "Movies & TV Shows",
  watch_anywhere: "Watch Anywhere",
  watch_on_any_device: "Watch on Any Device",
  download_app: "Download Our App",
  best_experience: "For the Best Experience",
  channels_worldwide: "Channels Worldwide",
  premium_experience: "Premium Experience",
  unlimited_content: "Unlimited Content",
  select: "Select",
  month: "/month",
  year: "/year",
  monthly: "Monthly",
  yearly: "Yearly",
  quarter: "Quarterly",
  basic_plan: "Basic Plan",
  standard_plan: "Standard Plan",
  premium_plan: "Premium Plan",
  most_popular: "Most Popular",
  save: "Save",
  connections_count: "connection",
  free_trial_title: "Start Your Free Trial Today",
  free_trial_subtitle: "Experience our premium service with no risk. Cancel anytime.",
  free_trial_button: "Start Free Trial",
  pricing_title: "Choose Your Plan",
  pricing_subtitle: "Select the perfect plan that suits your entertainment needs.",
  movie_showcase_title: "Explore Our Movie Collection",
  movie_showcase_description: "Thousands of movies and TV shows at your fingertips, ready to stream anytime.",
  all_genres: "All Genres",
  search_placeholder: "Search movies...",
  no_results: "No results found",
  chat_with_us: "Chat with us",
  support_247: "24/7 Support",
  support_text: "Our team is here to help you 24/7",
  knowledge_base: "Knowledge Base",
  faq_section_title: "Frequently Asked Questions",
  faq_section_description: "Find answers to commonly asked questions about our services.",
  payment_methods: "Payment Methods",
  secure_payment: "Secure Payment",
  customer_feedback: "What Our Customers Say",
  feedback_description: "Don't just take our word for it. See what our customers have to say about our service.",
  customers_say: "Customer Testimonials",
  share_experience: "Share Your Experience",
  thank_you: "Thank You!",
  feedback_submitted: "Your feedback has been submitted successfully.",
  name: "Name",
  email: "Email",
  rating: "Rating",
  your_experience: "Your Experience",
  submit_feedback: "Submit Feedback",
  download_subtitle: "Available on all platforms",
  download_instructionals: "Download our apps for the best viewing experience",
  app_android: "Android App",
  app_ios: "iOS App",
  app_windows: "Windows App",
  app_mac: "macOS App",
  app_android_tv: "Android TV",
  app_amazon_fire: "Amazon Fire Stick",
  app_providers: "Supported Providers",
  chat_welcome: "Welcome to box IPTV support!",
  chat_title: "Chat Support",
  chat_placeholder: "Type your message here...",
  reseller_title: "Become a Reseller",
  reseller_subtitle: "Start your own IPTV business with our reseller program",
  reseller_competitive_pricing: "Competitive Pricing",
  reseller_competitive_pricing_desc: "Earn high profits with our competitive reseller pricing",
  reseller_white_label: "White Label Solution",
  reseller_white_label_desc: "Rebrand our service as your own",
  reseller_support: "24/7 Reseller Support",
  reseller_support_desc: "Dedicated support for all resellers",
  reseller_starter: "Starter Plan",
  reseller_pro: "Pro Plan",
  reseller_enterprise: "Enterprise Plan",
  reseller_feature_credits_10: "10 credits",
  reseller_feature_credits_25: "25 credits",
  reseller_feature_credits_100: "100 credits",
  reseller_feature_basic_panel: "Basic reseller panel",
  reseller_feature_advanced_panel: "Advanced reseller panel",
  reseller_feature_premium_panel: "Premium reseller panel",
  reseller_feature_email_support: "Email support",
  reseller_feature_priority_support: "Priority support",
  reseller_feature_vip_support: "VIP support",
  reseller_feature_white_label: "White label option",
  reseller_feature_custom_domain: "Custom domain (extra)",
  reseller_feature_custom_domain_included: "Custom domain included",
  reseller_feature_marketing: "Marketing materials",
  reseller_feature_account_manager: "Dedicated account manager",
  reseller_feature_api_access: "API access",
  reseller_credits: "credits",
  reseller_get_started: "Get Started",
  reseller_most_popular: "Most Popular",
  reseller_questions: "Have more questions about our reseller program?",
  reseller_contact_us: "Contact Us",
  reseller_interested_in: "I'm interested in",
  loading: "Loading...",
  please_wait: "Please wait",
  welcome_message: "Welcome Message",
  power_of_entertainment: "Power of Entertainment",
  free_trial: "Free Trial",
  channels: "Channels",
  movies: "Movies",
  installation: "Installation",
  faq: "FAQ",
  channels_from_worldwide: "Channels from Worldwide",
  worldwide_channels_desc: "Worldwide Channels Description",
  all_channels: "All Channels",
  entertainment: "Entertainment",
  sports: "Sports",
  news: "News",
  music: "Music",
  documentary: "Documentary",
  faq_title: "FAQ Title",
  faq_subtitle: "FAQ Subtitle",
  faq_q1: "FAQ Question 1",
  faq_a1: "FAQ Answer 1",
  faq_q2: "FAQ Question 2",
  faq_a2: "FAQ Answer 2",
  faq_q3: "FAQ Question 3",
  faq_a3: "FAQ Answer 3",
  faq_q4: "FAQ Question 4",
  faq_a4: "FAQ Answer 4",
  faq_q5: "FAQ Question 5",
  faq_a5: "FAQ Answer 5",
  faq_q6: "FAQ Question 6",
  faq_a6: "FAQ Answer 6",
  faq_q7: "FAQ Question 7",
  faq_a7: "FAQ Answer 7",
  faq_q8: "FAQ Question 8",
  faq_a8: "FAQ Answer 8",
  
};

// French translations
export const frTranslations: Record<TranslationKey, string> = {
  home: "Accueil",
  about: "À propos",
  services: "Services",
  reseller: "Revendeur",
  pricing: "Tarifs",
  contact: "Contact",
  login: "Connexion",
  sign_up: "S'inscrire",
  copyright: "© 2023 box IPTV. Tous droits réservés.",
  try_our_iptv: "Essayez Notre Service IPTV",
  try_now: "Essayer Maintenant",
  welcome: "Bienvenue chez box IPTV",
  subtitle: "Le Meilleur Fournisseur de Service IPTV",
  get_started: "Commencer",
  active_users: "Utilisateurs Actifs",
  movies_count: "Films et Séries TV",
  watch_anywhere: "Regardez Partout",
  watch_on_any_device: "Regardez sur N'importe Quel Appareil",
  download_app: "Téléchargez Notre Application",
  best_experience: "Pour la Meilleure Expérience",
  channels_worldwide: "Chaînes Mondiales",
  premium_experience: "Expérience Premium",
  unlimited_content: "Contenu Illimité",
  select: "Sélectionner",
  month: "/mois",
  year: "/an",
  monthly: "Mensuel",
  yearly: "Annuel",
  quarter: "Trimestriel",
  basic_plan: "Forfait Basique",
  standard_plan: "Forfait Standard",
  premium_plan: "Forfait Premium",
  most_popular: "Le Plus Populaire",
  save: "Économisez",
  connections_count: "connexion",
  free_trial_title: "Commencez Votre Essai Gratuit",
  free_trial_subtitle: "Essayez notre service premium sans risque. Annulez à tout moment.",
  free_trial_button: "Essai Gratuit",
  pricing_title: "Choisissez Votre Forfait",
  pricing_subtitle: "Sélectionnez le forfait parfait qui correspond à vos besoins de divertissement.",
  movie_showcase_title: "Explorez Notre Collection de Films",
  movie_showcase_description: "Des milliers de films et séries TV à portée de main, prêts à être visionnés à tout moment.",
  all_genres: "Tous les Genres",
  search_placeholder: "Rechercher des films...",
  no_results: "Aucun résultat trouvé",
  chat_with_us: "Chattez avec nous",
  support_247: "Support 24/7",
  support_text: "Notre équipe est là pour vous aider 24/7",
  knowledge_base: "Base de Connaissances",
  faq_section_title: "Questions Fréquemment Posées",
  faq_section_description: "Trouvez les réponses aux questions les plus fréquentes sur nos services.",
  payment_methods: "Méthodes de Paiement",
  secure_payment: "Paiement Sécurisé",
  customer_feedback: "Ce Que Disent Nos Clients",
  feedback_description: "Ne vous fiez pas seulement à notre parole. Voyez ce que nos clients disent de notre service.",
  customers_say: "Témoignages Clients",
  share_experience: "Partagez Votre Expérience",
  thank_you: "Merci !",
  feedback_submitted: "Vos commentaires ont été soumis avec succès.",
  name: "Nom",
  email: "Email",
  rating: "Évaluation",
  your_experience: "Votre Expérience",
  submit_feedback: "Soumettre",
  download_subtitle: "Disponible sur toutes les plateformes",
  download_instructionals: "Téléchargez nos applications pour la meilleure expérience de visionnage",
  app_android: "Application Android",
  app_ios: "Application iOS",
  app_windows: "Application Windows",
  app_mac: "Application macOS",
  app_android_tv: "Android TV",
  app_amazon_fire: "Amazon Fire Stick",
  app_providers: "Fournisseurs Supportés",
  chat_welcome: "Bienvenue au support box IPTV !",
  chat_title: "Support Chat",
  chat_placeholder: "Tapez votre message ici...",
  reseller_title: "Devenez Revendeur",
  reseller_subtitle: "Lancez votre propre entreprise IPTV avec notre programme de revendeur",
  reseller_competitive_pricing: "Prix Compétitifs",
  reseller_competitive_pricing_desc: "Gagnez des profits élevés avec nos prix compétitifs pour les revendeurs",
  reseller_white_label: "Solution White Label",
  reseller_white_label_desc: "Renommez notre service comme le vôtre",
  reseller_support: "Support Revendeur 24/7",
  reseller_support_desc: "Support dédié pour tous les revendeurs",
  reseller_starter: "Plan Débutant",
  reseller_pro: "Plan Pro",
  reseller_enterprise: "Plan Entreprise",
  reseller_feature_credits_10: "10 crédits",
  reseller_feature_credits_25: "25 crédits",
  reseller_feature_credits_100: "100 crédits",
  reseller_feature_basic_panel: "Panneau de revendeur basique",
  reseller_feature_advanced_panel: "Panneau de revendeur avancé",
  reseller_feature_premium_panel: "Panneau de revendeur premium",
  reseller_feature_email_support: "Support par email",
  reseller_feature_priority_support: "Support prioritaire",
  reseller_feature_vip_support: "Support VIP",
  reseller_feature_white_label: "Option white label",
  reseller_feature_custom_domain: "Domaine personnalisé (extra)",
  reseller_feature_custom_domain_included: "Domaine personnalisé inclus",
  reseller_feature_marketing: "Matériel marketing",
  reseller_feature_account_manager: "Gestionnaire de compte dédié",
  reseller_feature_api_access: "Accès API",
  reseller_credits: "crédits",
  reseller_get_started: "Commencer",
  reseller_most_popular: "Le Plus Populaire",
  reseller_questions: "Avez-vous plus de questions sur notre programme de revendeur?",
  reseller_contact_us: "Contactez-Nous",
  reseller_interested_in: "Je suis intéressé par",
  loading: "Chargement...",
  please_wait: "Veuillez patienter",
  welcome_message: "Message de bienvenue",
  power_of_entertainment: "Pouvoir du divertissement",
  free_trial: "Essai gratuit",
  channels: "Chaînes",
  movies: "Films",
  installation: "Installation",
  faq: "FAQ",
  channels_from_worldwide: "Chaînes du monde entier",
  worldwide_channels_desc: "Description des chaînes du monde entier",
  all_channels: "Toutes les chaînes",
  entertainment: "Divertissement",
  sports: "Des sports",
  news: "Nouvelles",
  music: "Musique",
  documentary: "Documentaire",
  faq_title: "Titre FAQ",
  faq_subtitle: "Sous-titre FAQ",
  faq_q1: "FAQ Question 1",
  faq_a1: "FAQ Réponse 1",
  faq_q2: "FAQ Question 2",
  faq_a2: "FAQ Réponse 2",
  faq_q3: "FAQ Question 3",
  faq_a3: "FAQ Réponse 3",
  faq_q4: "FAQ Question 4",
  faq_a4: "FAQ Réponse 4",
  faq_q5: "FAQ Question 5",
  faq_a5: "FAQ Réponse 5",
  faq_q6: "FAQ Question 6",
  faq_a6: "FAQ Réponse 6",
  faq_q7: "FAQ Question 7",
  faq_a7: "FAQ Réponse 7",
  faq_q8: "FAQ Question 8",
  faq_a8: "FAQ Réponse 8",
};

// Arabic translations
export const arTranslations: Record<TranslationKey, string> = {
  home: "الرئيسية",
  about: "حول",
  services: "الخدمات",
  reseller: "إعادة البيع",
  pricing: "الأسعار",
  contact: "اتصل بنا",
  login: "تسجيل الدخول",
  sign_up: "إنشاء حساب",
  copyright: "© 2023 box IPTV. جميع الحقوق محفوظة.",
  try_our_iptv: "جرب خدمة IPTV لدينا",
  try_now: "جرب الآن",
  welcome: "مرحباً بكم في box IPTV",
  subtitle: "أفضل مزود خدمة IPTV",
  get_started: "ابدأ الآن",
  active_users: "المستخدمون النشطون",
  movies_count: "الأفلام والعروض التلفزيونية",
  watch_anywhere: "شاهد في أي مكان",
  watch_on_any_device: "شاهد على أي جهاز",
  download_app: "قم بتنزيل تطبيقنا",
  best_experience: "للحصول على أفضل تجربة",
  channels_worldwide: "قنوات عالمية",
  premium_experience: "تجربة متميزة",
  unlimited_content: "محتوى غير محدود",
  select: "اختر",
  month: "/شهر",
  year: "/سنة",
  monthly: "شهري",
  yearly: "سنوي",
  quarter: "ربع سنوي",
  basic_plan: "الخطة الأساسية",
  standard_plan: "الخطة القياسية",
  premium_plan: "الخطة المتميزة",
  most_popular: "الأكثر شعبية",
  save: "وفر",
  connections_count: "اتصال",
  free_trial_title: "ابدأ تجربتك المجانية اليوم",
  free_trial_subtitle: "استمتع بخدماتنا المتميزة بدون مخاطر. يمكنك الإلغاء في أي وقت.",
  free_trial_button: "ابدأ التجربة المجانية",
  pricing_title: "اختر خطتك",
  pricing_subtitle: "اختر الخطة المثالية التي تناسب احتياجات الترفيه الخاصة بك.",
  movie_showcase_title: "استكشف مجموعة أفلامنا",
  movie_showcase_description: "آلاف الأفلام والمسلسلات التلفزيونية في متناول يدك، جاهزة للمشاهدة في أي وقت.",
  all_genres: "جميع الأنواع",
  search_placeholder: "ابحث عن أفلام...",
  no_results: "لم يتم العثور على نتائج",
  chat_with_us: "تحدث معنا",
  support_247: "دعم على مدار الساعة",
  support_text: "فريقنا هنا لمساعدتك على مدار الساعة",
  knowledge_base: "قاعدة المعرفة",
  faq_section_title: "الأسئلة الشائعة",
  faq_section_description: "ابحث عن إجابات للأسئلة الشائعة حول خدماتنا.",
  payment_methods: "طرق الدفع",
  secure_payment: "دفع آمن",
  customer_feedback: "ما يقوله عملاؤنا",
  feedback_description: "لا تأخذ كلمتنا فقط. انظر ما يقوله عملاؤنا عن خدمتنا.",
  customers_say: "شهادات العملاء",
  share_experience: "شارك تجربتك",
  thank_you: "شكرًا لك!",
  feedback_submitted: "تم تقديم ملاحظاتك بنجاح.",
  name: "الاسم",
  email: "البريد الإلكتروني",
  rating: "التقييم",
  your_experience: "تجربتك",
  submit_feedback: "إرسال التعليق",
  download_subtitle: "متاح على جميع المنصات",
  download_instructionals: "قم بتنزيل تطبيقاتنا للحصول على أفضل تجربة مشاهدة",
  app_android: "تطبيق أندرويد",
  app_ios: "تطبيق iOS",
  app_windows: "تطبيق ويندوز",
  app_mac: "تطبيق macOS",
  app_android_tv: "Android TV",
  app_amazon_fire: "Amazon Fire Stick",
  app_providers: "مزودي الخدمة المدعومين",
  chat_welcome: "مرحبًا بك في دعم box IPTV !",
  chat_title: "دعم المحادثة",
  chat_placeholder: "اكتب رسالتك هنا...",
  reseller_title: "كن موزعًا",
  reseller_subtitle: "ابدأ عملك الخاص في IPTV مع برنامج الموزعين",
  reseller_competitive_pricing: "أسعار تنافسية",
  reseller_competitive_pricing_desc: "اكسب أرباحًا عالية مع أسعارنا التنافسية للموزعين",
  reseller_white_label: "حل العلامة البيضاء",
  reseller_white_label_desc: "أعد تسمية خدمتنا كخدمة خاصة بك",
  reseller_support: "دعم الموزعين 24/7",
  reseller_support_desc: "دعم مخصص لجميع الموزعين",
  reseller_starter: "الخطة المبتدئة",
  reseller_pro: "الخطة المحترفة",
  reseller_enterprise: "خطة المؤسسات",
  reseller_feature_credits_10: "10 رصيد",
  reseller_feature_credits_25: "25 رصيد",
  reseller_feature_credits_100: "100 رصيد",
  reseller_feature_basic_panel: "لوحة موزع أساسية",
  reseller_feature_advanced_panel: "لوحة موزع متقدمة",
  reseller_feature_premium_panel: "لوحة موزع مميزة",
  reseller_feature_email_support: "دعم بالبريد الإلكتروني",
  reseller_feature_priority_support: "دعم ذو أولوية",
  reseller_feature_vip_support: "دعم VIP",
  reseller_feature_white_label: "خيار العلامة البيضاء",
  reseller_feature_custom_domain: "نطاق مخصص (إضافي)",
  reseller_feature_custom_domain_included: "نطاق مخصص مضمن",
  reseller_feature_marketing: "مواد تسويقية",
  reseller_feature_account_manager: "مدير حساب مخصص",
  reseller_feature_api_access: "وصول API",
  reseller_credits: "رصيد",
  reseller_get_started: "ابدأ الآن",
  reseller_most_popular: "الأكثر شعبية",
  reseller_questions: "هل لديك المزيد من الأسئلة حول برنامج الموزعين؟",
  reseller_contact_us: "اتصل بنا",
  reseller_interested_in: "أنا مهتم بـ",
  loading: "جار التحميل...",
  please_wait: "الرجاء الانتظار",
  welcome_message: "رسالة ترحيب",
  power_of_entertainment: "قوة الترفيه",
  free_trial: "تجربة مجانية",
  channels: "القنوات",
  movies: "الأفلام",
  installation: "التثبيت",
  faq: "الأسئلة الشائعة",
  channels_from_worldwide: "قنوات من جميع أنحاء العالم",
  worldwide_channels_desc: "وصف القنوات العالمية",
  all_channels: "جميع القنوات",
  entertainment: "وسائل الترفيه",
  sports: "الرياضة",
  news: "أخبار",
  music: "موسيقى",
  documentary: "وثائقي",
  faq_title: "عنوان الأسئلة الشائعة",
  faq_subtitle: "العنوان الفرعي للأسئلة الشائعة",
  faq_q1: "سؤال وجواب 1",
  faq_a1: "الاجابة 1",
  faq_q2: "سؤال وجواب 2",
  faq_a2: "الاجابة 2",
  faq_q3: "سؤال وجواب 3",
  faq_a3: "الاجابة 3",
  faq_q4: "سؤال وجواب 4",
  faq_a4: "الاجابة 4",
  faq_q5: "سؤال وجواب 5",
  faq_a5: "الاجابة 5",
  faq_q6: "سؤال وجواب 6",
  faq_a6: "الاجابة 6",
  faq_q7: "سؤال وجواب 7",
  faq_a7: "الاجابة 7",
  faq_q8: "سؤال وجواب 8",
  faq_a8: "الاجابة 8",
};

// Spanish translations
export const esTranslations: Record<TranslationKey, string> = {
  home: "Inicio",
  about: "Acerca de",
  services: "Servicios",
  reseller: "Revendedor",
  pricing: "Precios",
  contact: "Contacto",
  login: "Iniciar sesión",
  sign_up: "Registrarse",
  copyright: "© 2023 box IPTV. Todos los derechos reservados.",
  try_our_iptv: "Pruebe nuestro servicio IPTV",
  try_now: "Probar ahora",
  welcome: "Bienvenido a box IPTV",
  subtitle: "El mejor proveedor de servicios IPTV",
  get_started: "Comenzar",
  active_users: "Usuarios activos",
  movies_count: "Películas y series",
  watch_anywhere: "Mira donde quieras",
  watch_on_any_device: "Mira en cualquier dispositivo",
  download_app: "Descarga nuestra aplicación",
  best_experience: "Para la mejor experiencia",
  channels_worldwide: "Canales en todo el mundo",
  premium_experience: "Experiencia premium",
  unlimited_content: "Contenido ilimitado",
  select: "Seleccionar",
  month: "/mes",
  year: "/año",
  monthly: "Mensual",
  yearly: "Anual",
  quarter: "Trimestral",
  basic_plan: "Plan Básico",
  standard_plan: "Plan Estándar",
  premium_plan: "Plan Premium",
  most_popular: "Más popular",
  save: "Ahorra",
  connections_count: "conexión",
  free_trial_title: "Comienza tu prueba gratuita hoy",
  free_trial_subtitle: "Experimenta nuestro servicio premium sin riesgo. Cancela cuando quieras.",
  free_trial_button: "Iniciar prueba gratuita",
  pricing_title: "Elige tu plan",
  pricing_subtitle: "Selecciona el plan perfecto que se adapte a tus necesidades de entretenimiento.",
  movie_showcase_title: "Explora nuestra colección de películas",
  movie_showcase_description: "Miles de películas y series a tu alcance, listas para ver en cualquier momento.",
  all_genres: "Todos los géneros",
  search_placeholder: "Buscar películas...",
  no_results: "No se encontraron resultados",
  chat_with_us: "Chatear con nosotros",
  support_247: "Soporte 24/7",
  support_text: "Nuestro equipo está aquí para ayudarte 24/7",
  knowledge_base: "Base de conocimientos",
  faq_section_title: "Preguntas frecuentes",
  faq_section_description: "Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.",
  payment_methods: "Métodos de pago",
  secure_payment: "Pago seguro",
  customer_feedback: "Lo que dicen nuestros clientes",
  feedback_description: "No solo creas en nuestra palabra. Mira lo que dicen nuestros clientes sobre nuestro servicio.",
  customers_say: "Testimonios de clientes",
  share_experience: "Comparte tu experiencia",
  thank_you: "¡Gracias!",
  feedback_submitted: "Tu comentario ha sido enviado con éxito.",
  name: "Nombre",
  email: "Correo electrónico",
  rating: "Calificación",
  your_experience: "Tu experiencia",
  submit_feedback: "Enviar comentario",
  download_subtitle: "Disponible en todas las plataformas",
  download_instructionals: "Descarga nuestras aplicaciones para la mejor experiencia de visualización",
  app_android: "Aplicación Android",
  app_ios: "Aplicación iOS",
  app_windows: "Aplicación Windows",
  app_mac: "Aplicación macOS",
  app_android_tv: "Android TV",
  app_amazon_fire: "Amazon Fire Stick",
  app_providers: "Proveedores compatibles",
  chat_welcome: "¡Bienvenido al soporte de box IPTV!",
  chat_title: "Soporte de chat",
  chat_placeholder: "Escribe tu mensaje aquí...",
  reseller_title: "Conviértete en revendedor",
  reseller_subtitle: "Inicia tu propio negocio de IPTV con nuestro programa de revendedores",
  reseller_competitive_pricing: "Precios competitivos",
  reseller_competitive_pricing_desc: "Gana altos beneficios con nuestros precios competitivos para revendedores",
  reseller_white_label: "Solución de marca blanca",
  reseller_white_label_desc: "Renombra nuestro servicio como el tuyo",
  reseller_support: "Soporte para revendedores 24/7",
  reseller_support_desc: "Soporte dedicado para todos los revendedores",
  reseller_starter: "Plan Inicial",
  reseller_pro: "Plan Pro",
  reseller_enterprise: "Plan Empresarial",
  reseller_feature_credits_10: "10 créditos",
  reseller_feature_credits_25: "25 créditos",
  reseller_feature_credits_100: "100 créditos",
  reseller_feature_basic_panel: "Panel de revendedor básico",
  reseller_feature_advanced_panel: "Panel de revendedor avanzado",
  reseller_feature_premium_panel: "Panel de revendedor premium",
  reseller_feature_email_support: "Soporte por email",
  reseller_feature_priority_support: "Soporte prioritario",
  reseller_feature_vip_support: "Soporte VIP",
  reseller_feature_white_label: "Opción de marca blanca",
  reseller_feature_custom_domain: "Dominio personalizado (extra)",
  reseller_feature_custom_domain_included: "Dominio personalizado incluido",
  reseller_feature_marketing: "Materiales de marketing",
  reseller_feature_account_manager: "Gestor de cuenta dedicado",
  reseller_feature_api_access: "Acceso a API",
  reseller_credits: "créditos",
  reseller_get_started: "Comenzar",
  reseller_most_popular: "Más Popular",
  reseller_questions: "¿Tienes más preguntas sobre nuestro programa de revendedores?",
  reseller_contact_us: "Contáctanos",
  reseller_interested_in: "Estoy interesado en",
  loading: "Cargando...",
  please_wait: "Por favor espere",
  welcome_message: "Mensaje de bienvenida",
  power_of_entertainment: "El poder del entretenimiento",
  free_trial: "Prueba gratuita",
  channels: "Canales",
  movies: "Películas",
  installation: "Instalación",
  faq: "Preguntas frecuentes",
  channels_from_worldwide: "Canales de todo el mundo",
  worldwide_channels_desc: "Descripción de canales mundiales",
  all_channels: "Todos los canales",
  entertainment: "Entretenimiento",
  sports: "Deportes",
  news: "Noticias",
  music: "Música",
  documentary: "Documentales",
  faq_title: "Título de FAQ",
  faq_subtitle: "Subtítulo de FAQ",
  faq_q1: "Pregunta FAQ 1",
  faq_a1: "Respuesta FAQ 1",
  faq_q2: "Pregunta FAQ 2",
  faq_a2: "Respuesta FAQ 2",
  faq_q3: "Pregunta FAQ 3",
  faq_a3: "Respuesta FAQ 3",
  faq_q4: "Pregunta FAQ 4",
  faq_a4: "Respuesta FAQ 4",
  faq_q5: "Pregunta FAQ 5",
  faq_a5: "Respuesta FAQ 5",
  faq_q6: "Pregunta FAQ 6",
  faq_a6: "Respuesta FAQ 6",
  faq_q7: "Pregunta FAQ 7",
  faq_a7: "Respuesta FAQ 7",
  faq_q8: "Pregunta FAQ 8",
  faq_a8: "Respuesta FAQ 8",
};

// Function to get translations based on language code
export const getTranslation = (key: TranslationKey, language: LanguageCode): string => {
  switch (language) {
    case 'fr':
      return frTranslations[key] || enTranslations[key]; // Fallback to English
    case 'ar':
      return arTranslations[key] || enTranslations[key]; // Fallback to English
    case 'es':
      return esTranslations[key] || enTranslations[key]; // Fallback to English
    case 'en':
    default:
      return enTranslations[key];
  }
};

// Function to get text direction based on language
export const getDirection = (language: LanguageCode): Direction => {
  return language === 'ar' ? 'rtl' : 'ltr';
};
