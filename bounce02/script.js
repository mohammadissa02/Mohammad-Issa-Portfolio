'use strict';
const translations = {
    en: {
        'name.first': 'MOHAMMAD', 'name.last': 'ISSA', 'name.lastPeriod': 'Issa', 'name.fullUpper': 'MOHAMMAD ISSA',
        'nav.about': 'About me', 'nav.skills': 'Skills', 'nav.projects': 'Projects', 'nav.hobbies': 'Hobbies', 'nav.contact': 'Contact',
        'theme.light': 'Light mode', 'theme.dark': 'Dark mode', 'theme.toLight': 'Switch to light theme', 'theme.toDark': 'Switch to dark theme',
        'hero.eyebrow': 'ABOUT ME', 'hero.lead': 'Cybersecurity |', 'hero.certified': 'CCNA certified.',
        'hero.description': 'I hold a degree in Cybersecurity from Al al-Bayt University and a CCNA certification. My main interests are networking, network security, and defensive cybersecurity. I’ve worked on hands-on labs to strengthen my technical knowledge, and I’m continuing to develop my skills through practical projects and ongoing learning.',
        'hero.viewProjects': 'View projects', 'hero.contactMe': 'Contact me', 'hero.certification': 'CURRENT STATUS', 'hero.word' : 'SEEKING OPPORTUNITIES' , 'hero.basedIn': 'BASED IN', 'common.jordan': 'Jordan',
        'profile.image': 'PROFILE IMAGE', 'profile.alt': 'Profile illustration', 'profile.focus': 'CURRENT FOCUS', 'profile.focusValue': 'Networks & defensive security', 'profile.availability': 'OPEN TO LEARNING',
        'skills.explore': 'WHAT I EXPLORE', 'skills.learning': 'THINGS I’M LEARNING', 'skills.headingMain': 'Skills & ', 'skills.headingAccent': 'tools.',
        'skills.summary': 'A few tools and topics I enjoy learning about and practising.',
        'skills.networking': 'Networking', 'skills.networkingDesc': 'Understanding how networks communicate, with a focus on routing, switching, VLANs, IPv4 addressing, subnetting, and basic network troubleshooting.',
        'skills.cybersecurity': 'Cybersecurity', 'skills.cybersecurityDesc': 'Foundational knowledge of defensive cybersecurity, including log analysis, SIEM fundamentals, and packet analysis.',
        'skills.web': 'Programming & Development', 'skills.webDesc': 'Building semantic web pages and responsive layouts with HTML, CSS, and JavaScript. Familiar with Python, Flask, and machine learning through my university project.',
        'skills.tools': 'Operating Systems', 'skills.toolsDesc': 'Working with Linux environments, navigating file systems, using command-line tools, and practising basic system operations.',
        'projects.made': 'THINGS I’VE MADE', 'projects.eyebrow': 'A FEW SMALL BUILDS', 'projects.headingMain': 'Projects ', 'projects.headingAccent': '',
        'projects.summary': 'Small projects and exercises from learning web development and working with Git.',
        'project.gitCategory': 'VERSION CONTROL', 'project.gitTitle': 'Git Foundations', 'project.gitDesc': 'Organised exercise folders, tracked work through commits, documented the repository, and pushed the required files to GitHub.', 'project.gitOpen': 'Open Git Foundations repository',
        'project.htmlCategory': 'HTML STRUCTURE', 'project.htmlTitle': 'HTML5 Fundamentals', 'project.htmlDesc': 'Built pages with semantic elements, clear heading hierarchy, links, lists, tables, images, and form controls.', 'project.htmlOpen': 'Open HTML5 Fundamentals repository',
        'project.cssCategory': 'LAYOUT & DESIGN', 'project.cssTitle': 'CSS Layout Lab', 'project.cssDesc': 'Practised Flexbox, positioning, the box model, colors, shapes, responsive layouts, and hover interactions.', 'project.cssOpen': 'Open CSS Layout Lab repository',
        'project.jsCategory': 'INTERACTION', 'project.jsTitle': 'JavaScript Basics', 'project.jsDesc': 'Worked with variables and types, console output, click events, event listeners, and simple DOM updates.', 'project.jsOpen': 'Open JavaScript Basics repository',
        'project.phishCategory': 'FEATURED · SECURITY', 'project.phishTitle': 'PhishGuard', 'project.phishDesc': 'A university project exploring phishing detection in a Flask web app. Machine-learning models assess suspicious URLs and email content, with login and report-summary features.',
        'hobbies.code': 'OFF THE CLOCK', 'hobbies.eyebrow': 'OFF THE CLOCK', 'hobbies.headingMain': 'Hobbies & Interests', 'hobbies.headingAccent': '',
        'hobbies.summary': 'A few things I enjoy and personal interests I’d like to pursue.',
        'hobbies.labTitle': 'Football', 'hobbies.labDesc': 'Enjoying the game, the competition, and the excitement of football.',
        'hobbies.networkTitle': 'Reading', 'hobbies.networkDesc': 'Enjoying reading to deepen my knowledge and understanding of important subjects.',
        'hobbies.webTitle': 'Horse Riding', 'hobbies.webDesc': 'A personal goal of mine is to become a skilled horse rider someday.',
        'contact.code': 'CONTACT', 'contact.eyebrow': 'GET IN TOUCH', 'contact.headingMain': 'Let’s talk', 'contact.headingAccent': 'technical work.',
        'contact.description': 'Have a question, an idea, or want to talk about technology? Feel free to reach out.', 'contact.emailNote': 'Remember to replace the example email before publishing.',
        'contact.email': 'My Email',
        'contact.github': 'My GitHub',
        'contact.linkedin': 'My LinkedIn',
        'form.header': 'MESSAGE FORM / 001', 'form.demo': '', 'form.name': 'Name', 'form.namePlaceholder': 'Your name', 'form.email': 'Email address', 'form.emailPlaceholder': 'you@example.com',
        'form.message': 'Message', 'form.messagePlaceholder': 'Write your message here...', 'form.submit': 'Check message', 'form.note': 'The form checks your inputs in the browser. It does not send or store messages.',
        'form.success': 'Thanks, {name}. The form passed the browser-side checks, but this demo does not send messages.',
        'footer.summary': 'Networking · Cybersecurity · Web projects', 'footer.linkedin' : 'LinkedIn ↗' ,'footer.github': 'GITHUB ↗', 'footer.email': 'EMAIL ↗', 'footer.backToTop': 'top',
        'aria.navigation': 'Main navigation', 'aria.home': 'Mohammad Issa home', 'aria.facts': 'A few details', 'aria.profile': 'Profile photo and profile details',
        'document.title': 'Mohammad Issa', 'document.description': 'Mohammad Issa — a personal portfolio about networking, cybersecurity, and small web projects.',
        'form.submit': 'Send via Email',
        'form.note': 'Submitting opens your email app with the message ready to send.',
        'form.success': 'Your email app should open with the message ready to send.',
    },
    ar: {
        'name.first': 'محمد', 'name.last': 'عيسى', 'name.lastPeriod': 'عيسى', 'name.fullUpper': 'محمد عيسى',
        'nav.about': 'نبذة عني', 'nav.skills': 'المهارات', 'nav.projects': 'المشاريع', 'nav.hobbies': 'اهتماماتي', 'nav.contact': 'تواصل',
        'theme.light': 'الوضع الفاتح', 'theme.dark': 'الوضع الداكن', 'theme.toLight': 'التبديل إلى الوضع الفاتح', 'theme.toDark': 'التبديل إلى الوضع الداكن',
        'hero.eyebrow': 'نبذة عني', 'hero.lead': ' أمن سيبراني | حاصل على شهادة CCNA', 'hero.certified': '',
        'hero.description': ' أحمل درجة البكالوريوس في الأمن السيبراني من جامعة آل البيت، وحاصل على شهادة CCNA. أهتم بمجال الشبكات وأمن الشبكات والأمن السيبراني الدفاعي. عملت على مختبرات عملية لتعزيز معرفتي التقنية، وأواصل تطوير مهاراتي من خلال المشاريع العملية والتعلّم المستمر.',
        'hero.viewProjects': 'استعرض المشاريع', 'hero.contactMe': 'تواصل معي', 'hero.certification': 'الوضع الحالي', 'hero.word' : 'يبحث عن فرص' ,'hero.basedIn': 'الموقع', 'common.jordan': 'الأردن',
        'profile.image': 'الصورة الشخصية', 'profile.alt': 'رسم توضيحي للصورة الشخصية', 'profile.focus': 'مجال التركيز الحالي', 'profile.focusValue': 'الشبكات والأمن الدفاعي', 'profile.availability': 'مستعد للتعلّم',
        'skills.explore': 'ما أستكشفه', 'skills.learning': 'مواضيع أتعلّمها', 'skills.headingMain': 'المهارات و', 'skills.headingAccent': 'الأدوات.',
        'skills.summary': 'بعض الأدوات والمواضيع التي أستمتع بتعلّمها والتدرّب عليها.',
        'skills.networking': 'الشبكات', 'skills.networkingDesc': 'فهم كيفية تواصل الشبكات، مع التركيز على التوجيه والتحويل وشبكات VLAN وعنونة IPv4 وتقسيم الشبكات الفرعية واستكشاف أخطاء الشبكة الأساسية وإصلاحها.',
        'skills.cybersecurity': 'الأمن السيبراني', 'skills.cybersecurityDesc': 'معرفة تأسيسية بالأمن السيبراني الدفاعي، بما في ذلك تحليل السجلات (log analysis)، وأساسيات أنظمة إدارة المعلومات والأحداث الأمنية (SIEM)، وتحليل الحزم (packet analysis).',
        'skills.web': 'البرمجة والتطوير', 'skills.webDesc': 'بناء صفحات ويب دلالية (Semantic Web) وتصاميم متجاوبة باستخدام HTML وCSS وJavaScript. لدي دراية بـ Python وFlask وتعلم الآلة من خلال المشروع الجامعي.',
        'skills.tools': 'أنظمة التشغيل', 'skills.toolsDesc': 'العمل في بيئات لينكس، والتنقل في أنظمة الملفات، واستخدام أدوات سطر الأوامر، وممارسة عمليات النظام الأساسية.',
        'projects.made': 'أشياء أنجزتها', 'projects.eyebrow': 'بعض المشاريع الصغيرة', 'projects.headingMain': 'المشاريع ', 'projects.headingAccent': '',
        'projects.summary': 'مشاريع وتمارين صغيرة من تعلّم تطوير الويب والعمل باستخدام Git.',
        'project.gitCategory': 'إدارة الإصدارات', 'project.gitTitle': 'أساسيات Git', 'project.gitDesc': 'تنظيم مجلدات التمارين، وتتبع العمل باستخدام commits، وتوثيق المستودع، ورفع الملفات المطلوبة إلى GitHub.', 'project.gitOpen': 'فتح مستودع أساسيات Git',
        'project.htmlCategory': 'بنية HTML', 'project.htmlTitle': 'أساسيات HTML5', 'project.htmlDesc': 'إنشاء صفحات بعناصر دلالية وتسلسل واضح للعناوين وروابط وقوائم وجداول وصور وعناصر نماذج.', 'project.htmlOpen': 'فتح مستودع أساسيات HTML5',
        'project.cssCategory': 'التنسيق والتصميم', 'project.cssTitle': 'مختبر تنسيق CSS', 'project.cssDesc': 'التدرّب على Flexbox وتحديد المواقع ونموذج الصندوق والألوان والأشكال والتصميم المتجاوب والتفاعلات عند المرور.', 'project.cssOpen': 'فتح مستودع مختبر CSS',
        'project.jsCategory': 'التفاعل', 'project.jsTitle': 'أساسيات JavaScript', 'project.jsDesc': 'التعامل مع المتغيرات والأنواع ومخرجات وحدة التحكم وأحداث النقر ومستمعات الأحداث وتحديثات DOM البسيطة.', 'project.jsOpen': 'فتح مستودع أساسيات JavaScript',
        'project.phishCategory': 'مشروع مميز · أمن سيبراني', 'project.phishTitle': 'PhishGuard', 'project.phishDesc': 'مشروع جامعي لاستكشاف كشف التصيّد عبر تطبيق ويب باستخدام Flask. تقيّم نماذج تعلّم الآلة الروابط المشبوهة ومحتوى البريد الإلكتروني، مع تسجيل الدخول وملخص التقارير.',
        'hobbies.code': 'خارج قائمة المهام', 'hobbies.eyebrow': 'خارج قائمة المهام', 'hobbies.headingMain': 'ما أحب ', 'hobbies.headingAccent': 'استكشافه.',
        'hobbies.summary': 'بعض المجالات التي أعود إليها عندما أرغب في التعلّم أو تجربة شيء جديد.',
        'hobbies.labTitle': 'كرة القدم', 'hobbies.labDesc': 'الاستمتاع باللعبة والمنافسة وحماس كرة القدم.',
        'hobbies.networkTitle': 'القراءة', 'hobbies.networkDesc': 'أستمتع بالقراءة لتعميق معرفتي وفهمي لمواضيع مهمة.',
        'hobbies.webTitle': 'ركوب الخيل', 'hobbies.webDesc': 'من أهدافي الشخصية أن أصبح فارساً ماهراً يوماً ما.',
        'contact.code': 'تواصل', 'contact.eyebrow': 'ابقَ على تواصل', 'contact.headingMain': 'لنتحدث عن', 'contact.headingAccent': 'الأمور التقنية.',
        'contact.description': 'هل لديك سؤال أو فكرة أو ترغب في الحديث عن التقنية؟ يسعدني تواصلك.', 'contact.emailNote': 'تذكّر استبدال البريد الإلكتروني التجريبي قبل نشر الموقع.',
        'contact.email': 'بريدي الإلكتروني',
        'contact.github': 'حسابي على GitHub',
        'contact.linkedin': ' حسابي على LinkedIn',
        'form.header': 'نموذج رسالة / 001', 'form.demo': '', 'form.name': 'الاسم', 'form.namePlaceholder': 'اكتب اسمك', 'form.email': 'البريد الإلكتروني', 'form.emailPlaceholder': 'you@example.com',
        'form.message': 'الرسالة', 'form.messagePlaceholder': 'اكتب رسالتك هنا...', 'form.submit': 'تحقّق من الرسالة', 'form.note': 'يتحقق النموذج من المدخلات في المتصفح فقط، ولا يرسل الرسائل أو يخزنها.',
        'form.success': 'شكرًا {name}. اجتازت الرسالة التحقق داخل المتصفح، لكن هذا النموذج التجريبي لا يرسل الرسائل.',
        'footer.summary': 'الشبكات · الأمن السيبراني · مشاريع الويب', 'footer.linkedin' : 'LinkedIn ↗' ,'footer.github': 'GITHUB ↗', 'footer.email': 'البريد ↗', 'footer.backToTop': 'فوق',
        'aria.navigation': 'التنقّل الرئيسي', 'aria.home': 'الصفحة الرئيسية لمحمد عيسى', 'aria.facts': 'بعض المعلومات', 'aria.profile': 'الصورة الشخصية ومعلومات الملف',
        'document.title': 'محمد عيسى', 'document.description': 'محمد عيسى — ملف شخصي عن الشبكات والأمن السيبراني ومشاريع الويب الصغيرة.',
        'form.submit': 'إرسال عبر البريد الإلكتروني',
        'form.note': 'سيُفتح تطبيق البريد والرسالة جاهزة، وعليك الضغط على إرسال لإتمام العملية.',
        'form.success': 'تم تجهيز الرسالة لفتحها في تطبيق البريد وإرسالها.'
    }
};

const root = document.documentElement;
const languageToggle = document.querySelector('#language-toggle');
const themeToggle = document.querySelector('#theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const themeLabel = document.querySelector('.theme-label');
const contactForm = document.querySelector('#contact-form');
const formFeedback = document.querySelector('#form-feedback');
const currentYear = document.querySelector('#current-year');

let currentLanguage = 'en';

function applyLanguage(language) {
    currentLanguage = language;

    const dictionary = translations[language];
    const isArabic = language === 'ar';

    root.lang = isArabic ? 'ar' : 'en';
    root.dir = isArabic ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;

        if (dictionary[key] !== undefined) {
            element.textContent = dictionary[key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
        const key = element.dataset.i18nPlaceholder;

        if (dictionary[key] !== undefined) {
            element.setAttribute('placeholder', dictionary[key]);
        }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
        const key = element.dataset.i18nAria;

        if (dictionary[key] !== undefined) {
            element.setAttribute('aria-label', dictionary[key]);
        }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
        const key = element.dataset.i18nAlt;

        if (dictionary[key] !== undefined) {
            element.setAttribute('alt', dictionary[key]);
        }
    });

    document.title = dictionary['document.title'];

    const description = document.querySelector('meta[name="description"]');

    if (description) {
        description.setAttribute('content', dictionary['document.description']);
    }

    languageToggle.textContent = isArabic ? 'English' : 'العربية';
    languageToggle.setAttribute('lang', isArabic ? 'en' : 'ar');
    languageToggle.setAttribute(
        'aria-label',
        isArabic ? 'Switch language to English' : 'Switch language to Arabic'
    );

    const isLightTheme = root.dataset.theme === 'light';

    themeLabel.textContent = isLightTheme
        ? dictionary['theme.dark']
        : dictionary['theme.light'];

    themeToggle.setAttribute(
        'aria-label',
        isLightTheme ? dictionary['theme.toDark'] : dictionary['theme.toLight']
    );

    if (formFeedback.textContent.trim()) {
        formFeedback.textContent = '';
    }
}

languageToggle.addEventListener('click', () => {
    applyLanguage(currentLanguage === 'en' ? 'ar' : 'en');
});

themeToggle.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    const isLightTheme = nextTheme === 'light';

    root.dataset.theme = nextTheme;

    themeToggle.setAttribute('aria-pressed', String(isLightTheme));
    themeIcon.textContent = isLightTheme ? '◑' : '◐';

    const dictionary = translations[currentLanguage];

    themeLabel.textContent = isLightTheme
        ? dictionary['theme.dark']
        : dictionary['theme.light'];

    themeToggle.setAttribute(
        'aria-label',
        isLightTheme ? dictionary['theme.toDark'] : dictionary['theme.toLight']
    );
});


contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const senderEmail = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (!name || !senderEmail || !message) {
        formFeedback.textContent = currentLanguage === 'ar'
            ? 'يرجى تعبئة جميع الحقول.'
            : 'Please fill in all fields.';

        return;
    }

    
    const recipientEmail = 'mohammadhakeem917@gmail.com';

    const subject = encodeURIComponent(
        `Portfolio message from ${name}`
    );

    const body = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${senderEmail}\n\n` +
        `Message:\n${message}`
    );

    const mailtoLink =
        `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    formFeedback.textContent =
        translations[currentLanguage]['form.success'];

    window.location.href = mailtoLink;
});

currentYear.textContent = new Date().getFullYear();

applyLanguage('en');
