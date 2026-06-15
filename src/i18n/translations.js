export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      education: 'Education',
      experience: 'Experience',
      projects: 'Projects',
      publications: 'Publications',
      webinars: 'Webinars',
      posts: 'Posts',
      certifications: 'Certifications',
      references: 'References',
      contact: 'Contact',
    },
    hero: {
      badge: 'Open to Internship Opportunities',
      greeting: "Hi, I'm",
      name: 'Salar Mokhtari Laleh',
      title: 'M.Sc. Student · RL, Deep RL & Robotics',
      subtitle:
        "I'm a Master's student in Electrical Engineering at National Taiwan Normal University, researching Reinforcement Learning and Deep RL for humanoid robotics under the supervision of Dr. Saeed Saeedvand.",
      emailBtn: 'Email Me',
      githubBtn: 'GitHub',
      linkedinBtn: 'LinkedIn',
    },
    about: {
      title: 'About Me',
      bio: "I am a Master's student in Electrical Engineering at National Taiwan Normal University (NTNU), where I am a member of the Educational Robotics Center (ERC) Lab. Under the supervision of Dr. Saeed Saeedvand, I research Reinforcement Learning and Deep Reinforcement Learning for humanoid robotics. Before that, I completed my B.Sc. in Computer Engineering at the University of Tabriz, where I also worked on industrial AI projects such as Automated Optical Inspection. I enjoy teaching, sharing knowledge, and building intelligent systems that interact with the real world.",
      affiliation: "Currently a Master's researcher at the Educational Robotics Center (ERC) Lab — NTNU",
      ercLink: 'Visit ERC Lab',
      interestsTitle: 'Research Interests',
      interestsCols: { area: 'Area', focus: 'Focus' },
      interests: [
        { area: 'Reinforcement Learning & Deep RL', focus: 'Policy optimization, PPO, actor-critic, sim-to-real' },
        { area: 'Robotics', focus: 'Humanoid control, locomotion, manipulation' },
        { area: 'SLAM', focus: 'Localization, mapping & navigation' },
        { area: 'Machine Learning', focus: 'Supervised & deep learning models' },
        { area: 'Computer Vision', focus: 'Detection, recognition, image analysis' },
        { area: 'Large Language Models', focus: 'Transformers, transfer learning, NLP' },
      ],
      languagesTitle: 'Languages',
      languages: ['English', 'Azerbaijani', 'Turkish', 'Farsi'],
      hobbiesTitle: 'Hobbies',
      hobbies: ['🎾 Tennis', '🚴 Cycling', '📚 Reading', '🍳 Cooking'],
    },
    education: {
      title: 'Education',
      items: [
        {
          degree: 'M.Sc. in Electrical Engineering',
          school: 'National Taiwan Normal University',
          period: '2025 – Present',
          details: [
            'Supervisor: Dr. Saeed Saeedvand',
            'Thesis: RL and Deep RL on Humanoid Robotics',
            'GPA: 3.46 (first semester)',
          ],
        },
        {
          degree: 'B.Sc. in Computer Engineering',
          school: 'University of Tabriz',
          period: '2018 – 2023',
          details: ['GPA: 15.02 / 20'],
        },
      ],
    },
    experience: {
      title: 'Experience',
      researchTitle: 'Research & Industry',
      teachingTitle: 'Academic Experience — Teaching Assistant',
      lecturerLabel: 'Lecturer',
      research: [
        {
          role: 'Research Intern',
          org: 'Educational Robotics Center (ERC) — NTNU',
          location: 'Taipei, Taiwan · On-site',
          period: 'Aug 2024 – Jan 2025',
          points: [
            'Research on RL and Deep RL for humanoid robotics',
            'Hands-on work with NVIDIA Isaac Lab, Isaac Sim and PPO',
          ],
        },
        {
          role: 'Artificial Intelligence Researcher',
          org: 'Sobh Parlar Asia Industrial Co.',
          location: 'Tabriz, Iran',
          period: 'Aug 2022 – Oct 2022',
          points: [
            'AI-powered Automated Optical Inspection (AOI) of printed circuit boards using deep learning, NLP and computer vision',
            'Inspected electronic components on the front side and solder joints on the back side of the boards',
          ],
        },
      ],
      teachingOrg: 'Faculty of Electrical and Computer Engineering, University of Tabriz',
      teaching: [
        {
          course: 'Engineering Probability and Statistics',
          period: 'Sep 2023 – Dec 2023',
          lecturer: 'Dr. Seyed Amir Mortazavi',
        },
        {
          course: 'Software Engineering I',
          period: 'Sep 2023 – Dec 2023',
          lecturer: 'Dr. Leili Farzinvash',
        },
        {
          course: 'Algorithm Design',
          period: 'Feb 2023 – Jun 2023',
          lecturer: 'Dr. Pedram Salehpour',
        },
        {
          course: 'Linear Algebra and its Applications',
          period: 'Apr 2021 – Sep 2022',
          lecturer: 'Dr. Seyed Amir Mortazavi',
        },
        {
          course: 'Discrete Mathematics',
          period: 'Jan 2021 – May 2022',
          lecturer: 'Dr. Seyed Amir Mortazavi',
        },
      ],
    },
    projects: {
      title: 'Projects',
      subtitle: 'Fetched live from my GitHub profile',
      viewProfile: 'View GitHub Profile',
      readMore: 'Read more',
      showLess: 'Show less',
      exploreMore: 'Explore all on GitHub',
      loading: 'Loading repositories…',
      error: "Couldn't load repositories right now — visit my GitHub instead:",
      updated: 'Updated',
      noDesc: 'No description provided yet.',
      moreTitle: 'More Research & Course Projects',
      more: [
        'Basketball System Analysis',
        'Brain Tumor Detection',
        'American Sign Language MNIST & Gesture Recognition CNNs',
        'Fake News Detection using DistilBERT & Transfer Learning',
        'Diabetes Prediction using Deep Learning',
        'House Price Prediction with Data Preprocessing & Linear Regression',
        'Connect Four Game with AI Model',
        'E-commerce with Groceries Recommender',
      ],
    },
    publications: {
      title: 'Publications',
      typeLabel: 'Conference Paper',
      items: [
        {
          title: 'Transfer Learning-Based Face Mask Detection System',
          venue: 'The 9th Advanced Engineering Days (AED) — Mersin University',
          date: '7/9/2024',
        },
      ],
    },
    webinars: {
      title: 'Webinars & Talks',
      roleLabel: 'Lecturer',
      items: [
        {
          title: 'Python Programming Workshop',
          description: 'Comprehensive introduction to Python programming for beginners',
          date: 'July 2022',
          type: 'Online Workshop',
          participants: '30+ participants',
          tags: ['Python Basics', 'Data Structures', 'Problem Solving'],
        },
      ],
    },
    posts: {
      title: 'Posts & Insights',
      subtitle:
        'Notes and updates on my research in Reinforcement Learning, Deep RL and humanoid robotics. Follow along on LinkedIn for the latest.',
      followBtn: 'Follow on LinkedIn',
      readBtn: 'Read on LinkedIn',
      items: [
        {
          tag: 'Deep RL',
          title: 'Teaching a humanoid to walk with PPO in Isaac Sim',
          excerpt:
            'A look at how reward shaping and domain randomization help a simulated humanoid learn stable bipedal locomotion before transferring to hardware.',
          date: 'May 2026',
        },
        {
          tag: 'Sim-to-Real',
          title: 'Closing the sim-to-real gap in robot learning',
          excerpt:
            'Why policies that look perfect in simulation often stumble in the real world — and the techniques I use to make transfer more robust.',
          date: 'April 2026',
        },
        {
          tag: 'Robotics',
          title: 'What makes humanoid control genuinely hard',
          excerpt:
            'High degrees of freedom, contact dynamics and balance constraints make humanoids a uniquely challenging testbed for reinforcement learning.',
          date: 'March 2026',
        },
      ],
    },
    certifications: {
      title: 'Licenses & Certifications',
      credentialLabel: 'Credential ID',
      items: [
        {
          name: 'Linear Algebra for Machine Learning and Data Science',
          issuer: 'DeepLearning.AI',
          credential: 'G6YGAZJNJP7X',
        },
        {
          name: 'Supervised Machine Learning: Regression and Classification',
          issuer: 'DeepLearning.AI',
          credential: 'EKLUV6CQHFDL',
        },
        {
          name: 'AI For Everyone',
          issuer: 'DeepLearning.AI',
          credential: 'JLCFGQVXTRMA',
        },
        {
          name: 'C for Everyone: Programming Fundamentals',
          issuer: 'University of California, Santa Cruz',
          credential: 'QAWML3H6CKBG',
        },
        {
          name: 'Python Data Structures',
          issuer: 'University of Michigan | Coursera',
          credential: 'J9XKY7RAX8WD',
        },
        {
          name: 'Programming for Everybody (Getting Started with Python)',
          issuer: 'University of Michigan | Coursera',
          credential: 'TF288AN8XW7J',
        },
      ],
      testsTitle: 'English & GRE Tests',
      toefl: {
        name: 'TOEFL iBT',
        total: '109',
        totalLabel: 'Overall Score',
        date: 'April 2024',
        parts: [
          { label: 'Reading', score: '30' },
          { label: 'Listening', score: '29' },
          { label: 'Writing', score: '27' },
          { label: 'Speaking', score: '23' },
        ],
      },
      gre: {
        name: 'GRE General Test',
        date: 'August 2023',
        parts: [
          { label: 'Quantitative', score: '168' },
          { label: 'Verbal', score: '162' },
          { label: 'Analytical Writing', score: '4.0' },
        ],
      },
    },
    references: {
      title: 'References',
      contactBtn: 'Contact',
      items: [
        {
          name: 'Prof. Hansjoerg (Jacky) Baltes',
          role: 'Professor',
          dept: 'Department of Electrical Engineering',
          uni: 'National Taiwan Normal University',
          email: 'jacky.baltes@ntnu.edu.tw',
        },
        {
          name: 'Prof. Saeed Saeedvand',
          role: 'Assistant Professor',
          dept: 'Educational Robotics Center (ERC)',
          uni: 'National Taiwan Normal University',
          email: 'saeedvand@ntnu.edu.tw',
        },
      ],
    },
    internship: {
      title: 'Looking for an Internship',
      subtitle:
        "I'm actively seeking internship positions where I can apply and expand my expertise in AI and Robotics research.",
      areas: [
        {
          icon: '🎮',
          title: 'Reinforcement Learning',
          desc: 'Policy optimization, model-based RL, multi-agent systems',
        },
        {
          icon: '🧠',
          title: 'Deep Reinforcement Learning',
          desc: 'Deep Q-Networks, actor-critic methods, sim-to-real transfer',
        },
        {
          icon: '🤖',
          title: 'Robotics & AI',
          desc: 'Robot learning, manipulation, autonomous navigation',
        },
      ],
      cta: 'Get in Touch',
    },
    contact: {
      title: 'Get in Touch',
      subtitle:
        'Feel free to reach out for collaborations, internship opportunities, or just to say hi!',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      locationValue: 'Taipei, Taiwan',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with React',
    },
  },

  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      education: 'Eğitim',
      experience: 'Deneyim',
      projects: 'Projeler',
      publications: 'Yayınlar',
      webinars: 'Webinar',
      posts: 'Gönderiler',
      certifications: 'Sertifikalar',
      references: 'Referanslar',
      contact: 'İletişim',
    },
    hero: {
      badge: 'Staj Fırsatlarına Açığım',
      greeting: 'Merhaba, ben',
      name: 'Salar Mokhtari Laleh',
      title: 'Yüksek Lisans Öğrencisi · RL, Derin RL ve Robotik',
      subtitle:
        'National Taiwan Normal University Elektrik Mühendisliği yüksek lisans öğrencisiyim; Dr. Saeed Saeedvand danışmanlığında insansı robotlar için Pekiştirmeli Öğrenme (RL) ve Derin RL üzerine araştırma yapıyorum.',
      emailBtn: 'E-posta Gönder',
      githubBtn: 'GitHub',
      linkedinBtn: 'LinkedIn',
    },
    about: {
      title: 'Hakkımda',
      bio: "National Taiwan Normal University'de (NTNU) Elektrik Mühendisliği yüksek lisans öğrencisiyim ve Educational Robotics Center (ERC) Lab üyesiyim. Dr. Saeed Saeedvand danışmanlığında insansı robotlar için Pekiştirmeli Öğrenme (RL) ve Derin Pekiştirmeli Öğrenme üzerine araştırma yapıyorum. Öncesinde Tebriz Üniversitesi'nde Bilgisayar Mühendisliği lisansımı tamamladım ve Otomatik Optik Muayene gibi endüstriyel yapay zeka projelerinde çalıştım. Öğretmeyi, bilgi paylaşmayı ve gerçek dünyayla etkileşen akıllı sistemler geliştirmeyi seviyorum.",
      affiliation: "Şu anda Educational Robotics Center (ERC) Lab — NTNU'da yüksek lisans araştırmacısıyım",
      ercLink: 'ERC Lab’ı ziyaret et',
      interestsTitle: 'Araştırma Alanları',
      interestsCols: { area: 'Alan', focus: 'Odak' },
      interests: [
        { area: 'Pekiştirmeli Öğrenme ve Derin RL', focus: 'Politika optimizasyonu, PPO, aktör-kritik, sim-to-real' },
        { area: 'Robotik', focus: 'İnsansı kontrol, lokomosyon, manipülasyon' },
        { area: 'SLAM', focus: 'Konumlama, haritalama ve navigasyon' },
        { area: 'Makine Öğrenmesi', focus: 'Denetimli ve derin öğrenme modelleri' },
        { area: 'Bilgisayarlı Görü', focus: 'Tespit, tanıma, görüntü analizi' },
        { area: 'Büyük Dil Modelleri', focus: 'Transformer’lar, transfer öğrenme, NLP' },
      ],
      languagesTitle: 'Diller',
      languages: ['İngilizce', 'Azerice', 'Türkçe', 'Farsça'],
      hobbiesTitle: 'Hobiler',
      hobbies: ['🎾 Tenis', '🚴 Bisiklet', '📚 Kitap Okuma', '🍳 Yemek Pişirme'],
    },
    education: {
      title: 'Eğitim',
      items: [
        {
          degree: 'Elektrik Mühendisliği — Yüksek Lisans (M.Sc.)',
          school: 'National Taiwan Normal University',
          period: '2025 – Devam ediyor',
          details: [
            'Danışman: Dr. Saeed Saeedvand',
            'Tez: İnsansı Robotikte RL ve Derin RL',
            'Not Ortalaması: 3.46 (ilk dönem)',
          ],
        },
        {
          degree: 'Bilgisayar Mühendisliği — Lisans (B.Sc.)',
          school: 'Tebriz Üniversitesi',
          period: '2018 – 2023',
          details: ['Not Ortalaması: 15.02 / 20'],
        },
      ],
    },
    experience: {
      title: 'Deneyim',
      researchTitle: 'Araştırma ve Endüstri',
      teachingTitle: 'Akademik Deneyim — Öğretim Asistanlığı',
      lecturerLabel: 'Öğretim Üyesi',
      research: [
        {
          role: 'Stajyer Araştırmacı',
          org: 'Educational Robotics Center (ERC) — NTNU',
          location: 'Taipei, Tayvan · Yerinde',
          period: 'Ağu 2024 – Oca 2025',
          points: [
            'İnsansı robotlar için RL ve Derin RL araştırması',
            'NVIDIA Isaac Lab, Isaac Sim ve PPO ile uygulamalı çalışma',
          ],
        },
        {
          role: 'Yapay Zeka Araştırmacısı',
          org: 'Sobh Parlar Asia Industrial Co.',
          location: 'Tebriz, İran',
          period: 'Ağu 2022 – Eki 2022',
          points: [
            'Derin öğrenme, NLP ve bilgisayarlı görü kullanarak baskılı devre kartları için yapay zeka destekli Otomatik Optik Muayene (AOI)',
            'Kartların ön yüzündeki elektronik bileşenlerin ve arka yüzdeki lehim noktalarının denetimi',
          ],
        },
      ],
      teachingOrg: 'Elektrik ve Bilgisayar Mühendisliği Fakültesi, Tebriz Üniversitesi',
      teaching: [
        {
          course: 'Mühendislik Olasılık ve İstatistiği',
          period: 'Eyl 2023 – Ara 2023',
          lecturer: 'Dr. Seyed Amir Mortazavi',
        },
        {
          course: 'Yazılım Mühendisliği I',
          period: 'Eyl 2023 – Ara 2023',
          lecturer: 'Dr. Leili Farzinvash',
        },
        {
          course: 'Algoritma Tasarımı',
          period: 'Şub 2023 – Haz 2023',
          lecturer: 'Dr. Pedram Salehpour',
        },
        {
          course: 'Lineer Cebir ve Uygulamaları',
          period: 'Nis 2021 – Eyl 2022',
          lecturer: 'Dr. Seyed Amir Mortazavi',
        },
        {
          course: 'Ayrık Matematik',
          period: 'Oca 2021 – May 2022',
          lecturer: 'Dr. Seyed Amir Mortazavi',
        },
      ],
    },
    projects: {
      title: 'Projeler',
      subtitle: 'GitHub profilimden canlı olarak çekiliyor',
      viewProfile: 'GitHub Profilimi Gör',
      readMore: 'Daha fazla',
      showLess: 'Daha az',
      exploreMore: 'GitHub’da tümünü keşfet',
      loading: 'Depolar yükleniyor…',
      error: 'Depolar şu anda yüklenemedi — bunun yerine GitHub sayfamı ziyaret edin:',
      updated: 'Güncellendi',
      noDesc: 'Henüz açıklama eklenmemiş.',
      moreTitle: 'Diğer Araştırma ve Ders Projeleri',
      more: [
        'Basketbol Sistem Analizi',
        'Beyin Tümörü Tespiti',
        'Amerikan İşaret Dili (ASL) MNIST ve El Hareketi Tanıma CNN Modelleri',
        'DistilBERT ve Transfer Öğrenme ile Sahte Haber Tespiti',
        'Derin Öğrenme ile Diyabet Tahmini',
        'Veri Ön İşleme ve Doğrusal Regresyon ile Ev Fiyatı Tahmini',
        'Yapay Zeka Modelli Connect Four Oyunu',
        'Market Ürünü Öneri Sistemli E-ticaret',
      ],
    },
    publications: {
      title: 'Yayınlar',
      typeLabel: 'Konferans Bildirisi',
      items: [
        {
          title: 'Transfer Learning-Based Face Mask Detection System',
          venue: '9. Advanced Engineering Days (AED) — Mersin Üniversitesi',
          date: '7/9/2024',
        },
      ],
    },
    webinars: {
      title: 'Webinar ve Konuşmalar',
      roleLabel: 'Eğitmen',
      items: [
        {
          title: 'Python Programlama Atölyesi',
          description: 'Yeni başlayanlar için Python programlamaya kapsamlı bir giriş',
          date: 'Temmuz 2022',
          type: 'Çevrimiçi Atölye',
          participants: '30+ katılımcı',
          tags: ['Python Temelleri', 'Veri Yapıları', 'Problem Çözme'],
        },
      ],
    },
    posts: {
      title: 'Gönderiler ve İçerikler',
      subtitle:
        'Pekiştirmeli Öğrenme, Derin RL ve insansı robotik araştırmalarıma dair notlar ve güncellemeler. En yenileri için LinkedIn’de beni takip edin.',
      followBtn: "LinkedIn'de Takip Et",
      readBtn: "LinkedIn'de Oku",
      items: [
        {
          tag: 'Derin RL',
          title: 'Isaac Sim’de PPO ile bir insansı robota yürümeyi öğretmek',
          excerpt:
            'Ödül şekillendirme ve alan rastgeleleştirmenin, simüle edilmiş bir insansı robotun donanıma aktarılmadan önce dengeli iki ayaklı yürümeyi öğrenmesine nasıl yardımcı olduğuna bir bakış.',
          date: 'Mayıs 2026',
        },
        {
          tag: 'Sim-to-Real',
          title: 'Robot öğreniminde simülasyon-gerçek farkını kapatmak',
          excerpt:
            'Simülasyonda kusursuz görünen politikaların gerçek dünyada neden sıklıkla tökezlediği ve aktarımı daha sağlam kılmak için kullandığım teknikler.',
          date: 'Nisan 2026',
        },
        {
          tag: 'Robotik',
          title: 'İnsansı kontrolü gerçekten zor kılan nedir',
          excerpt:
            'Yüksek serbestlik dereceleri, temas dinamikleri ve denge kısıtları, insansı robotları pekiştirmeli öğrenme için benzersiz biçimde zorlu bir test ortamı yapar.',
          date: 'Mart 2026',
        },
      ],
    },
    certifications: {
      title: 'Lisanslar ve Sertifikalar',
      credentialLabel: 'Sertifika Kimliği',
      items: [
        {
          name: 'Linear Algebra for Machine Learning and Data Science',
          issuer: 'DeepLearning.AI',
          credential: 'G6YGAZJNJP7X',
        },
        {
          name: 'Supervised Machine Learning: Regression and Classification',
          issuer: 'DeepLearning.AI',
          credential: 'EKLUV6CQHFDL',
        },
        {
          name: 'AI For Everyone',
          issuer: 'DeepLearning.AI',
          credential: 'JLCFGQVXTRMA',
        },
        {
          name: 'C for Everyone: Programming Fundamentals',
          issuer: 'University of California, Santa Cruz',
          credential: 'QAWML3H6CKBG',
        },
        {
          name: 'Python Data Structures',
          issuer: 'University of Michigan | Coursera',
          credential: 'J9XKY7RAX8WD',
        },
        {
          name: 'Programming for Everybody (Getting Started with Python)',
          issuer: 'University of Michigan | Coursera',
          credential: 'TF288AN8XW7J',
        },
      ],
      testsTitle: 'İngilizce ve GRE Sınavları',
      toefl: {
        name: 'TOEFL iBT',
        total: '109',
        totalLabel: 'Genel Puan',
        date: 'Nisan 2024',
        parts: [
          { label: 'Okuma', score: '30' },
          { label: 'Dinleme', score: '29' },
          { label: 'Yazma', score: '27' },
          { label: 'Konuşma', score: '23' },
        ],
      },
      gre: {
        name: 'GRE Genel Sınavı',
        date: 'Ağustos 2023',
        parts: [
          { label: 'Sayısal', score: '168' },
          { label: 'Sözel', score: '162' },
          { label: 'Analitik Yazma', score: '4.0' },
        ],
      },
    },
    references: {
      title: 'Referanslar',
      contactBtn: 'İletişim',
      items: [
        {
          name: 'Prof. Hansjoerg (Jacky) Baltes',
          role: 'Profesör',
          dept: 'Elektrik Mühendisliği Bölümü',
          uni: 'National Taiwan Normal University',
          email: 'jacky.baltes@ntnu.edu.tw',
        },
        {
          name: 'Prof. Saeed Saeedvand',
          role: 'Yardımcı Doçent',
          dept: 'Eğitim Robotiği Merkezi (ERC)',
          uni: 'National Taiwan Normal University',
          email: 'saeedvand@ntnu.edu.tw',
        },
      ],
    },
    internship: {
      title: 'Staj Arıyorum',
      subtitle:
        'Yapay zeka ve robotik araştırmalarındaki uzmanlığımı uygulayıp geliştirebileceğim staj pozisyonlarını aktif olarak arıyorum.',
      areas: [
        {
          icon: '🎮',
          title: 'Pekiştirmeli Öğrenme',
          desc: 'Politika optimizasyonu, model tabanlı RL, çok etmenli sistemler',
        },
        {
          icon: '🧠',
          title: 'Derin Pekiştirmeli Öğrenme',
          desc: 'Derin Q-Ağları, aktör-kritik yöntemleri, simülasyondan gerçeğe aktarım',
        },
        {
          icon: '🤖',
          title: 'Robotik ve Yapay Zeka',
          desc: 'Robot öğrenmesi, manipülasyon, otonom navigasyon',
        },
      ],
      cta: 'İletişime Geç',
    },
    contact: {
      title: 'İletişime Geçin',
      subtitle:
        'İş birlikleri, staj fırsatları veya sadece merhaba demek için bana ulaşmaktan çekinmeyin!',
      emailLabel: 'E-posta',
      phoneLabel: 'Telefon',
      locationLabel: 'Konum',
      locationValue: 'Taipei, Tayvan',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
    footer: {
      rights: 'Tüm hakları saklıdır.',
      builtWith: 'React ile geliştirildi',
    },
  },
};
