export interface ProjectDetail {
  id: string;
  isUpcoming?: boolean;
  title: {
    es: string;
    en: string;
  };
  category: {
    es: string;
    en: string;
  };
  summary: {
    es: string;
    en: string;
  };
  image: string;
  gallery?: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  problem: {
    es: string;
    en: string;
  };
  solution: {
    es: string;
    en: string;
  };
  architecture: {
    es: string;
    en: string;
  };
  results: {
    es: string;
    en: string;
  };
}

export const projectsData: ProjectDetail[] = [
  {
    id: "fotoluna",
    isUpcoming: false,
    title: {
      es: "Foto Luna — Estudio Fotográfico & E-commerce",
      en: "Foto Luna — Photography Studio & E-commerce"
    },
    category: {
      es: "Frontend & Pasarela de Pagos",
      en: "Frontend & Payment Gateway"
    },
    summary: {
      es: "Plataforma web comercial para estudio fotográfico con catálogo interactivo de servicios, reservas y pagos en línea integrados con el SDK de Mercado Pago.",
      en: "Commercial web platform for photography studio featuring interactive services catalog, bookings, and online payments powered by Mercado Pago SDK."
    },
    image: "/images/fotoluna.jpg",
    gallery: [
      "/images/fotoluna.jpg"
    ],
    technologies: [
      "React",
      "JavaScript",
      "Mercado Pago SDK",
      "Tailwind CSS",
      "REST APIs",
      "HTML5"
    ],
    githubUrl: "https://github.com/luksua/FotoLuna",
    liveUrl: "https://fotoluna.netlify.app",
    problem: {
      es: "El estudio fotográfico requería digitalizar la presentación de sus paquetes y sesiones, agilizando el proceso de cotización y recepción de pagos de los clientes sin fricciones manuales.",
      en: "The photography studio needed to digitize its packages and photo sessions, streamlining quotations and payment collection without manual friction."
    },
    solution: {
      es: "Desarrollo de una interfaz web moderna y visualmente cuidada con catálogo interactivo de sesiones fotográficas, selector de servicios y pasarela de cobros con Mercado Pago.",
      en: "Development of a modern, visually engaging web interface with interactive photo session catalog, service picker, and Mercado Pago checkout."
    },
    architecture: {
      es: "Arquitectura SPA reactiva con integración del SDK cliente de Mercado Pago para procesar transacciones seguras y despliegue continuo en Netlify.",
      en: "Reactive SPA architecture integrating client-side Mercado Pago SDK for secure transactions and continuous deployment on Netlify."
    },
    results: {
      es: "Plataforma web en producción disponible al público, facilitando la contratación de sesiones y agilizando pagos en línea.",
      en: "Live production website available to clients, streamlining session bookings and online payments."
    }
  },
  {
    id: "asotrauma",
    isUpcoming: false,
    title: {
      es: "Asotrauma — Gestión de Software & Blog",
      en: "Asotrauma — Software Management & Blog"
    },
    category: {
      es: "Desarrollo Web & Gestión Institucional",
      en: "Web Development & Management"
    },
    summary: {
      es: "Plataforma de gestión de software y blog institucional con módulos dinámicos, control de publicaciones, analítica y seguridad.",
      en: "Software management platform and institutional blog featuring dynamic modules, publishing control, analytics, and security."
    },
    image: "/images/intranet-platform.jpg",
    gallery: [
      "/images/intranet-platform.jpg",
      "/images/api-showcase.jpg"
    ],
    technologies: [
      "Vue.js",
      "Laravel",
      "PHP",
      "Laravel Sanctum",
      "MySQL",
      "REST APIs",
      "Tailwind CSS"
    ],
    githubUrl: "https://github.com/luksua/blog-softwares",
    liveUrl: "https://blog-software.netlify.app",
    problem: {
      es: "La institución requería centralizar las publicaciones internas, gestionar el software y medir de forma precisa la interacción de los usuarios en una plataforma segura.",
      en: "The organization needed to centralize internal publications, manage software assets, and accurately measure user engagement on a secure platform."
    },
    solution: {
      es: "Desarrollo de módulos de contenido dinámico con taxonomía organizada por categorías, editor por bloques, programación de publicaciones y dashboard de métricas.",
      en: "Engineered dynamic content modules with category taxonomy, block-based rich text editing, scheduled publishing, and interactive analytics dashboard."
    },
    architecture: {
      es: "Arquitectura desacoplada con backend en Laravel/PHP, autenticación mediante tokens con Sanctum, almacenamiento en MySQL y APIs RESTful consumidas desde un frontend reactivo.",
      en: "Decoupled architecture with Laravel/PHP backend, token authentication via Sanctum, MySQL persistence, and RESTful APIs consumed by a reactive frontend."
    },
    results: {
      es: "Reducción significativa en tiempos de gestión institucional, control de accesos por roles y despliegue activo en Netlify.",
      en: "Significant time savings in institutional publishing, role-based access control, and active deployment on Netlify."
    }
  },
  {
    id: "spring-boot-rest-api",
    isUpcoming: true,
    title: {
      es: "Microservicios REST API con Spring Boot",
      en: "REST API Microservices with Spring Boot"
    },
    category: {
      es: "Backend & Arquitectura de Software",
      en: "Backend & Software Architecture"
    },
    summary: {
      es: "Servicios backend en Java y Spring Boot con arquitectura en capas, autenticación JWT, documentación Swagger/OpenAPI y persistencia SQL.",
      en: "Java Spring Boot backend services with layered architecture, JWT authentication, Swagger documentation, and SQL persistence."
    },
    image: "/images/api-showcase.jpg",
    gallery: ["/images/api-showcase.jpg"],
    technologies: [
      "Java",
      "Spring Boot",
      "JWT",
      "Swagger",
      "MySQL",
      "Git"
    ],
    githubUrl: "https://github.com/lunasofiaor04",
    problem: {
      es: "Construcción de una arquitectura backend desacoplada que demuestre buenas prácticas de diseño de software, manejo transaccional y seguridad por tokens.",
      en: "Building a decoupled backend architecture showcasing modern software design principles, transactional integrity, and token-based security."
    },
    solution: {
      es: "Implementación de endpoints RESTful bajo capas Controller-Service-Repository, validaciones DTO y filtros de seguridad stateless.",
      en: "Implementation of RESTful endpoints under Controller-Service-Repository layers, DTO validations, and stateless security filters."
    },
    architecture: {
      es: "Clean Architecture orientada al dominio con Spring Security, JPA/Hibernate y MySQL.",
      en: "Domain-oriented Clean Architecture with Spring Security, JPA/Hibernate, and MySQL."
    },
    results: {
      es: "En fase de desarrollo y documentación técnica en GitHub.",
      en: "Currently under development and technical documentation on GitHub."
    }
  }
];
