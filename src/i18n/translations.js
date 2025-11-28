const translations = {
  en: {
    nav: {
      hero: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      contact: 'Contact',
      reviews: 'Reviews',
      cta: "Let's talk",
    },
    hero: {
      tagline: 'Creative developer & 3D tinkerer',
      heading: "Hi, I'm",
      highlight: 'Hamozoni',
      description:
        'I build immersive experiences that blend performant engineering with playful storytelling. From rapid prototypes to production interfaces, every interaction should feel intentional.',
      ctas: {
        primary: 'See experience',
        secondary: 'Browse projects',
        tertiary: 'Book a call',
      },
      stats: [
        { label: 'Projects shipped', value: '20+' },
        { label: 'Years crafting UI', value: '4' },
        { label: 'Avg. feedback score', value: '9.2/10' },
      ],
      current: {
        title: 'Currently building',
        description: 'A cinematic WebGL landing experience for a fintech startup.',
        stack: ['Three.js', 'React 19', 'Framer Motion'],
      },
      scrollLabel: 'Scroll',
    },
    about: {
      introLabel: 'Introduction',
      overviewTitle: 'Overview.',
      body:
        "I'm a multidisciplinary engineer who connects motion, storytelling, and code. Whether orchestrating complex React architecture or fine-tuning shader details, I obsess over the craft so that the final experience feels effortless.",
      services: [
        {
          title: 'Experience design',
          description: 'Crafting immersive journeys that balance cinematic visuals with practical UX.',
        },
        {
          title: 'Creative engineering',
          description: 'Building robust front-ends with React, TypeScript, and WebGL pipelines.',
        },
        {
          title: 'Product enablement',
          description: 'Partnering with teams to validate ideas quickly and ship measurable outcomes.',
        },
      ],
      toolbeltLabel: 'Toolbelt',
      toolbeltTitle: 'Stacks I love working with',
      principlesTitle: 'How I work',
      principles: [
        {
          title: 'Design systems thinking',
          copy: 'Documented component libraries keep experiences cohesive across platforms.',
        },
        {
          title: 'Performance obsessed',
          copy: 'I profile interactions early to keep silky 60fps animations even on low-end devices.',
        },
        {
          title: 'Transparent collaboration',
          copy: 'Asynchronous updates and clear roadmaps keep every stakeholder aligned.',
        },
      ],
      skills: ['React', 'Three.js', 'TypeScript', 'Node.js', 'Framer Motion', 'GSAP', 'WebGL', 'Figma', 'Python', 'REST & GraphQL'],
    },
    experience: {
      label: 'Experience',
      title: 'Career timeline.',
      timeline: [
        {
          period: '2024 — Present',
          title: 'Creative Front-end Lead',
          company: 'Studio Nova',
          summary:
            'Leading the experience engineering squad for fintech and health-tech launches, blending research with cinematic interfaces.',
          highlights: [
            'Scaled a reusable motion system so every product launch kept consistent choreography.',
            'Paired with product squads to turn Figma explorations into validated WebGL demos in under a week.',
          ],
          stack: ['React 19', 'Three.js', 'Design Systems'],
        },
        {
          period: '2022 — 2024',
          title: 'Senior Creative Developer',
          company: 'Orbit Labs',
          summary:
            'Owned immersive hero moments and marketing platforms for global brands with tight performance budgets.',
          highlights: [
            'Optimized shader pipelines that dropped first meaningful paint by 35%.',
            'Introduced component governance to keep codebases healthy across five microsites.',
          ],
          stack: ['WebGL', 'GSAP', 'Node.js'],
        },
        {
          period: '2019 — 2022',
          title: 'Product Engineer',
          company: 'Freelance / Indie Teams',
          summary:
            'Partnered directly with founders to prototype MVPs, validate usability, and guide teams through launch.',
          highlights: [
            'Delivered 20+ bespoke front-ends across SaaS, media, and creator platforms.',
            'Mentored junior devs on accessibility and animation tooling.',
          ],
          stack: ['React Native', 'Express', 'Storybook'],
        },
      ],
    },
    projects: {
      label: 'My work',
      title: 'Projects.',
      intro:
        'A handful of recent builds combining expressive UI, performant engineering, and thoughtful storytelling. Each began as a sketch and shipped as a measurable product improvement.',
      viewLive: 'View live',
      viewSource: 'Source',
      caseStudyLabel: 'Case Study',
      items: [
        {
          name: 'Volant Mobility',
          description:
            'Immersive landing page for an EV startup featuring scroll-driven storytelling, generative particles, and live telemetry stats from the fleet.',
          tags: ['react', 'gsap', 'threejs'],
          image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1200&q=80',
          live: 'https://example.com/volant',
          source: 'https://github.com/hamozoni/volant',
        },
        {
          name: 'Helix Hire',
          description:
            'Data-augmented hiring platform with real-time collaboration, candidate heatmaps, and AI-assisted interview notes.',
          tags: ['nextjs', 'supabase', 'tailwind'],
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
          live: 'https://example.com/helix',
          source: 'https://github.com/hamozoni/helix-hire',
        },
        {
          name: 'Atlas Trails',
          description:
            'Travel companion that renders 3D scenes for destinations with collaborative lists, day planners, and offline-ready itineraries.',
          tags: ['expo', 'graphql', 'threejs'],
          image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
          live: 'https://example.com/atlas',
          source: 'https://github.com/hamozoni/atlas-trails',
        },
      ],
    },
    reviews: {
      title: "Testimonials.",
      label: "What others say",
      items: [
        {
          name: "Sara Lee",
          role: "CFO",
          company: "Acme Co",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          testimonial: "I thought it was impossible to make a website as beautiful as our product, but Hamozoni proved me wrong."
        },
        {
          name: "Chris Brown",
          role: "COO",
          company: "DEF Corp",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          testimonial: "I've never met a web developer who truly cares about their clients' success like Hamozoni does."
        },
        {
          name: "Lisa Wang",
          role: "CTO",
          company: "456 Enterprises",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          testimonial: "After Hamozoni optimized our website, our traffic increased by 50%. We can't thank them enough!"
        }
      ]
    },
    contact: {
      label: 'Get in touch',
      title: 'Contact.',
      description: 'Tell me about the experience you have in mind. The more context you share, the faster we can create something magical.',
      info: [
        { title: 'Email me', value: 'hello@hamozoni.dev', href: 'mailto:hello@hamozoni.dev' },
        { title: 'Based in', value: 'Gaborone, Botswana' },
        { title: 'Response time', value: 'under 24 hours' },
      ],
      form: {
        nameLabel: 'Your name',
        namePlaceholder: 'Jane Doe',
        emailLabel: 'Your email',
        emailPlaceholder: 'you@email.com',
        messageLabel: 'Your message',
        messagePlaceholder: 'What should we build together?',
        button: 'Send message',
        sending: 'Sending...',
      },
    },
    footer: {
      description:
        'Crafting immersive 3D visuals and performant interfaces for teams who care about design detail and measurable outcomes.',
      availability: 'Available for select freelance and embedded product work.',
      copyright: (year) => `© ${year} Hamozoni. All rights reserved.`,
    },
  },
  pt: {
    nav: {
      hero: 'Início',
      about: 'Sobre',
      experience: 'Experiência',
      projects: 'Projetos',
      contact: 'Contato',
      cta: 'Vamos conversar',
    },
    hero: {
      tagline: 'Dev criativo e explorador 3D',
      heading: 'Olá, eu sou o',
      highlight: 'Hamozoni',
      description:
        'Crio experiências imersivas que unem engenharia performática e narrativa visual. De protótipos rápidos a interfaces em produção, cada detalhe conta.',
      ctas: {
        primary: 'Ver experiência',
        secondary: 'Explorar projetos',
        tertiary: 'Marcar uma call',
      },
      stats: [
        { label: 'Projetos entregues', value: '20+' },
        { label: 'Anos criando UI', value: '4' },
        { label: 'Nota média dos clientes', value: '9,2/10' },
      ],
      current: {
        title: 'No momento',
        description: 'Uma landing cinematográfica em WebGL para uma fintech.',
        stack: ['Three.js', 'React 19', 'Framer Motion'],
      },
      scrollLabel: 'Descer',
    },
    about: {
      introLabel: 'Introdução',
      overviewTitle: 'Visão geral.',
      body:
        'Sou um engenheiro multidisciplinar que conecta movimento, narrativa e código. Integro arquiteturas complexas em React e ajusto shaders para que cada experiência pareça natural.',
      services: [
        {
          title: 'Design de experiência',
          description: 'Criação de jornadas imersivas que equilibram visual cinematográfico e UX funcional.',
        },
        {
          title: 'Engenharia criativa',
          description: 'Desenvolvimento de front-ends robustos com React, TypeScript e pipelines WebGL.',
        },
        {
          title: 'Aceleração de produto',
          description: 'Parceria com equipes para validar ideias rápido e entregar resultados mensuráveis.',
        },
      ],
      toolbeltLabel: 'Ferramentas',
      toolbeltTitle: 'Stacks favoritas',
      principlesTitle: 'Como trabalho',
      principles: [
        {
          title: 'Pensamento em design systems',
          copy: 'Bibliotecas documentadas mantêm experiências consistentes entre plataformas.',
        },
        {
          title: 'Obsessão por performance',
          copy: 'Profile de interações desde cedo para manter 60fps até em dispositivos modestos.',
        },
        {
          title: 'Colaboração transparente',
          copy: 'Atualizações assíncronas e roteiros claros alinham todo mundo.',
        },
      ],
      skills: ['React', 'Three.js', 'TypeScript', 'Node.js', 'Framer Motion', 'GSAP', 'WebGL', 'Figma', 'Python', 'REST & GraphQL'],
    },
    experience: {
      label: 'Experiência',
      title: 'Linha do tempo.',
      timeline: [
        {
          period: '2024 — Atual',
          title: 'Líder de Front-end Criativo',
          company: 'Studio Nova',
          summary:
            'Liderança do time de experiências para lançamentos fintech e health-tech, conectando pesquisa e interfaces cinematográficas.',
          highlights: [
            'Escalei um sistema de motion reutilizável que manteve a coreografia alinhada em todos os lançamentos.',
            'Transformei explorações no Figma em demos WebGL validadas em menos de uma semana.',
          ],
          stack: ['React 19', 'Three.js', 'Design Systems'],
        },
        {
          period: '2022 — 2024',
          title: 'Desenvolvedor Criativo Sênior',
          company: 'Orbit Labs',
          summary:
            'Responsável por heros imersivos e plataformas de marketing para marcas globais com metas rígidas de performance.',
          highlights: [
            'Otimizei pipelines de shaders reduzindo o first meaningful paint em 35%.',
            'Implementei governança de componentes para manter 5 microsites saudáveis.',
          ],
          stack: ['WebGL', 'GSAP', 'Node.js'],
        },
        {
          period: '2019 — 2022',
          title: 'Engenheiro de Produto',
          company: 'Freelancer / Times indie',
          summary:
            'Parcerias diretas com founders para prototipar MVPs, validar usabilidade e conduzir lançamentos.',
          highlights: [
            'Entreguei mais de 20 front-ends sob medida para SaaS, mídia e criadores.',
            'Mentorei devs júnior em acessibilidade e ferramentas de animação.',
          ],
          stack: ['React Native', 'Express', 'Storybook'],
        },
      ],
    },
    projects: {
      label: 'Trabalhos',
      title: 'Projetos.',
      intro:
        'Alguns lançamentos recentes que combinam UI expressiva, engenharia performática e narrativa. Cada projeto nasceu em um rascunho e virou resultado real.',
      viewLive: 'Ver online',
      viewSource: 'Código',
      caseStudyLabel: 'Estudo de caso',
      items: [
        {
          name: 'Volant Mobility',
          description:
            'Landing imersiva para uma startup de veículos elétricos com storytelling por scroll, partículas generativas e telemetria em tempo real.',
          tags: ['react', 'gsap', 'threejs'],
          image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1200&q=80',
          live: 'https://example.com/volant',
          source: 'https://github.com/hamozoni/volant',
        },
        {
          name: 'Helix Hire',
          description:
            'Plataforma de recrutamento com colaboração em tempo real, mapas de calor e notas assistidas por IA.',
          tags: ['nextjs', 'supabase', 'tailwind'],
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
          live: 'https://example.com/helix',
          source: 'https://github.com/hamozoni/helix-hire',
        },
        {
          name: 'Atlas Trails',
          description:
            'Companheiro de viagem com cenas 3D dos destinos, listas colaborativas e roteiros offline.',
          tags: ['expo', 'graphql', 'threejs'],
          image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
          live: 'https://example.com/atlas',
          source: 'https://github.com/hamozoni/atlas-trails',
        },
      ],
    },
    contact: {
      label: 'Fale comigo',
      title: 'Contato.',
      description: 'Conte a experiência que você imagina. Quanto mais contexto, mais rápido criamos algo incrível.',
      info: [
        { title: 'E-mail', value: 'hello@hamozoni.dev', href: 'mailto:hello@hamozoni.dev' },
        { title: 'Base', value: 'Gaborone, Botswana' },
        { title: 'Tempo de resposta', value: 'menos de 24 horas' },
      ],
      form: {
        nameLabel: 'Seu nome',
        namePlaceholder: 'Jane Doe',
        emailLabel: 'Seu e-mail',
        emailPlaceholder: 'voce@email.com',
        messageLabel: 'Sua mensagem',
        messagePlaceholder: 'O que devemos construir?',
        button: 'Enviar mensagem',
        sending: 'Enviando...',
      },
    },
    footer: {
      description:
        'Crio visuais 3D imersivos e interfaces performáticas para equipes que valorizam detalhe e métricas.',
      availability: 'Disponível para trabalhos freelance e times dedicados selecionados.',
      copyright: (year) => `© ${year} Hamozoni. Todos os direitos reservados.`,
    },
  },
  ar: {
    nav: {
      hero: 'الرئيسية',
      about: 'نبذة',
      experience: 'الخبرات',
      projects: 'المشاريع',
      contact: 'تواصل',
      contact: 'تواصل',
      reviews: 'آراء العملاء',
      cta: 'دعنا نتحدث',
    },
    hero: {
      tagline: 'مطور إبداعي ومستكشف 3D',
      heading: 'مرحباً، أنا',
      highlight: 'حموزوني',
      description:
        'أبني تجارب غامرة تمزج بين الهندسة عالية الأداء والسرد البصري المميز. من النماذج السريعة إلى الواجهات في الإنتاج، كل تفاعل يجب أن يكون مقصوداً.',
      ctas: {
        primary: 'شاهد الخبرة',
        secondary: 'تصفح المشاريع',
        tertiary: 'احجز مكالمة',
      },
      stats: [
        { label: 'مشاريع منجزة', value: '20+' },
        { label: 'سنوات في تطوير UI', value: '4' },
        { label: 'متوسط تقييم العملاء', value: '9.2/10' },
      ],
      current: {
        title: 'أعمل حالياً على',
        description: 'تجربة هبوط سينمائية بتقنية WebGL لشركة تكنولوجيا مالية ناشئة.',
        stack: ['Three.js', 'React 19', 'Framer Motion'],
      },
      scrollLabel: 'تمرير',
    },
    about: {
      introLabel: 'مقدمة',
      overviewTitle: 'نظرة عامة.',
      body:
        'أنا مهندس متعدد التخصصات أربط الحركة والسرد والشفرة. سواء كنت أعمل على بنية React معقدة أو ضبط تفاصيل التظليل، أهتم بالحرفية حتى تبدو التجربة النهائية سلسة.',
      services: [
        {
          title: 'تصميم التجربة',
          description: 'صياغة رحلات غامرة توازن بين المرئيات السينمائية وتجربة المستخدم العملية.',
        },
        {
          title: 'الهندسة الإبداعية',
          description: 'بناء واجهات أمامية قوية باستخدام React و TypeScript وأنابيب WebGL.',
        },
        {
          title: 'تمكين المنتج',
          description: 'الشراكة مع الفرق للتحقق من الأفكار بسرعة وتقديم نتائج قابلة للقياس.',
        },
      ],
      toolbeltLabel: 'الأدوات',
      toolbeltTitle: 'التقنيات التي أحب العمل بها',
      principlesTitle: 'كيف أعمل',
      principles: [
        {
          title: 'التفكير في أنظمة التصميم',
          copy: 'مكتبات المكونات الموثقة تحافظ على تجارب متماسكة عبر المنصات.',
        },
        {
          title: 'هوس بالأداء',
          copy: 'أقيس التفاعلات مبكراً للحفاظ على 60 إطاراً في الثانية حتى على الأجهزة محدودة الموارد.',
        },
        {
          title: 'التعاون الشفاف',
          copy: 'التحديثات غير المتزامنة والخرائط الواضحة تبقي جميع أصحاب المصلحة متوافقين.',
        },
      ],
      skills: ['React', 'Three.js', 'TypeScript', 'Node.js', 'Framer Motion', 'GSAP', 'WebGL', 'Figma', 'Python', 'REST & GraphQL'],
    },
    experience: {
      label: 'الخبرات',
      title: 'الجدول الزمني المهني.',
      timeline: [
        {
          period: '2024 — الحالي',
          title: 'قائد الواجهات الأمامية الإبداعية',
          company: 'Studio Nova',
          summary:
            'قيادة فريق هندسة التجربة لإطلاق تطبيقات التكنولوجيا المالية والصحية، مع دمج البحث والواجهات السينمائية.',
          highlights: [
            'قمت بتوسيع نطاق نظام حركة قابل لإعادة الاستخدام حتى تحافظ كل عملية إطلاق منتج على تصميم حركة متسق.',
            'تعاونت مع فرق المنتج لتحويل استكشافات Figma إلى عروض WebGL موثقة في أقل من أسبوع.',
          ],
          stack: ['React 19', 'Three.js', 'أنظمة التصميم'],
        },
        {
          period: '2022 — 2024',
          title: 'مطور إبداعي أول',
          company: 'Orbit Labs',
          summary:
            'مسؤول عن لحظات البطل الغامرة ومنصات التسويق للعلامات التجارية العالمية ذات ميزانيات الأداء الصارمة.',
          highlights: [
            'قمت بتحسين خطوط أنابيب التظليل مما أدى إلى خفض أول رسم ذي معنى بنسبة 35٪.',
            'قدمت حوكمة المكونات للحفاظ على صحة قواعد التعليمات البرمجية عبر خمس مواقع صغيرة.',
          ],
          stack: ['WebGL', 'GSAP', 'Node.js'],
        },
        {
          period: '2019 — 2022',
          title: 'مهندس منتج',
          company: 'مستقل / فرق مستقلة',
          summary:
            'شراكات مباشرة مع المؤسسين لإنشاء نماذج أولية لـ MVP، والتحقق من قابلية الاستخدام، وتوجيه الفرق خلال الإطلاق.',
          highlights: [
            'قدمت أكثر من 20 واجهة أمامية مخصصة عبر منصات SaaS والوسائط والمبدعين.',
            'قمت بتوجيه المطورين المبتدئين حول إمكانية الوصول وأدوات الرسوم المتحركة.',
          ],
          stack: ['React Native', 'Express', 'Storybook'],
        },
      ],
    },
    projects: {
      label: 'أعمالي',
      title: 'المشاريع.',
      intro:
        'مجموعة من الإطلاقات الأخيرة التي تجمع بين واجهة المستخدم التعبيرية والهندسة عالية الأداء والسرد المدروس. بدأ كل مشروع كرسم تخطيطي وتم شحنه كتحسين قابل للقياس للمنتج.',
      viewLive: 'مشاهدة مباشرة',
      viewSource: 'الشفرة المصدرية',
      caseStudyLabel: 'دراسة حالة',
      items: [
        {
          name: 'Volant Mobility',
          description:
            'صفحة هبوط غامرة لشركة ناشئة للمركبات الكهربائية تتميز بسرد القصص المدفوع بالتمرير، وجزيئات توليدية، وإحصاءات القياس عن بعد المباشرة من الأسطول.',
          tags: ['react', 'gsap', 'threejs'],
          image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1200&q=80',
          live: 'https://example.com/volant',
          source: 'https://github.com/hamozoni/volant',
        },
        {
          name: 'Helix Hire',
          description:
            'منصة توظيف مدعومة بالبيانات مع التعاون في الوقت الفعلي، وخرائط حرارية للمرشحين، وملاحظات المقابلة بمساعدة الذكاء الاصطناعي.',
          tags: ['nextjs', 'supabase', 'tailwind'],
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
          live: 'https://example.com/helix',
          source: 'https://github.com/hamozoni/helix-hire',
        },
        {
          name: 'Atlas Trails',
          description:
            'رفيق سفر يعرض مشاهد ثلاثية الأبعاد للوجهات مع قوائم تعاونية، ومخططات يومية، ومسارات رحلات جاهزة دون اتصال.',
          tags: ['expo', 'graphql', 'threejs'],
          image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
          live: 'https://example.com/atlas',
          source: 'https://github.com/hamozoni/atlas-trails',
        },
      ],
    },
    reviews: {
      title: "آراء العملاء.",
      label: "ماذا يقول الآخرون",
      items: [
        {
          name: "سارة لي",
          role: "المدير المالي",
          company: "شركة أكمي",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          testimonial: "اعتقدت أنه من المستحيل إنشاء موقع ويب جميل مثل منتجنا، لكن حموزوني أثبت خطئي."
        },
        {
          name: "كريس براون",
          role: "المدير التنفيذي للعمليات",
          company: "شركة DEF",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          testimonial: "لم أقابل أبداً مطور ويب يهتم حقاً بنجاح عملائه مثل حموزوني."
        },
        {
          name: "ليسا وانغ",
          role: "المدير التقني",
          company: "مشاريع 456",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          testimonial: "بعد أن قام حموزوني بتحسين موقعنا، زادت حركة المرور بنسبة 50٪. لا يمكننا شكرهم بما فيه الكفاية!"
        }
      ]
    },
    contact: {
      label: 'تواصل معي',
      title: 'التواصل.',
      description: 'أخبرني عن التجربة التي تفكر فيها. كلما شاركت المزيد من السياق، كلما تمكنا من إنشاء شيء سحري بشكل أسرع.',
      info: [
        { title: 'راسلني', value: 'hello@hamozoni.dev', href: 'mailto:hello@hamozoni.dev' },
        { title: 'مقري في', value: 'غابورون، بوتسوانا' },
        { title: 'وقت الاستجابة', value: 'أقل من 24 ساعة' },
      ],
      form: {
        nameLabel: 'اسمك',
        namePlaceholder: 'أحمد محمد',
        emailLabel: 'بريدك الإلكتروني',
        emailPlaceholder: 'you@email.com',
        messageLabel: 'رسالتك',
        messagePlaceholder: 'ماذا يجب أن نبني معاً؟',
        button: 'إرسال الرسالة',
        sending: 'جاري الإرسال...',
      },
    },
    footer: {
      description:
        'صياغة مرئيات ثلاثية الأبعاد غامرة وواجهات عالية الأداء للفرق التي تهتم بتفاصيل التصميم والنتائج القابلة للقياس.',
      availability: 'متاح لمشاريع مستقلة مختارة وعمل منتج مضمن.',
      copyright: (year) => `© ${year} حموزوني. جميع الحقوق محفوظة.`,
    },
  },
}

export default translations
