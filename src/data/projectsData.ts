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
    id: "intranet-platform",
    isUpcoming: false,
    title: {
      es: "Plataforma Intranet & Blog Institucional",
      en: "Institutional Intranet & Content Platform"
    },
    category: {
      es: "Desarrollo Web & Automatización con IA",
      en: "Web Development & AI Automation"
    },
    summary: {
      es: "Gestión de contenidos con CRUD dinámico, editor interactivo EditorJS, resúmenes automáticos con OpenAI API y control de acceso con Laravel Sanctum.",
      en: "Dynamic content platform featuring complete CRUD, EditorJS rich editing, automated OpenAI API summaries, and Laravel Sanctum auth."
    },
    image: "/images/intranet-platform.jpg",
    gallery: [
      "/images/intranet-platform.jpg",
      "/images/api-showcase.jpg"
    ],
    technologies: [
      "Laravel",
      "PHP",
      "Laravel Sanctum",
      "OpenAI API",
      "EditorJS",
      "MySQL",
      "JavaScript",
      "Tailwind CSS"
    ],
    githubUrl: "https://github.com/lunasofiaor04/intranet-platform-sena",
    liveUrl: "https://github.com/lunasofiaor04",
    problem: {
      es: "La institución requería centralizar las publicaciones internas, agilizar la redacción y síntesis de artículos largos, y medir de forma precisa la interacción de los lectores y empleados en una plataforma segura.",
      en: "The organization needed to centralize internal publications, streamline drafting and summarization of lengthy articles, and accurately track reader engagement through a secure platform."
    },
    solution: {
      es: "Desarrollo de módulos de contenido dinámico con taxonomía organizada por categorías, editor por bloques (EditorJS), integración con la API de OpenAI para generar resúmenes automáticos instantáneos, programación de publicaciones y un dashboard con gráficas y ranking de lectores.",
      en: "Engineered dynamic content modules with category taxonomy, block-based rich text editing (EditorJS), OpenAI API integration for automated TL;DR summaries, scheduled publishing, and an interactive dashboard with metrics and reader rankings."
    },
    architecture: {
      es: "Arquitectura MVC desacoplada con backend en Laravel, autenticación mediante tokens con Laravel Sanctum, almacenamiento relacional optimizado en MySQL, colas asíncronas para el procesamiento de IA y APIs RESTful para la vista interactiva.",
      en: "Decoupled MVC architecture with Laravel backend, token-based authentication via Laravel Sanctum, MySQL relational database design, queue workers for AI summarization, and RESTful APIs consumed by a reactive frontend."
    },
    results: {
      es: "Reducción del 60% en el tiempo de generación de resúmenes institucionales, aumento en la tasa de lectura gracias al ranking gamificado y control de acceso seguro y granular para autores y administradores.",
      en: "60% reduction in time spent preparing executive summaries, higher engagement rates driven by reader leaderboards, and rock-solid role-based access control."
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
    liveUrl: "https://github.com/lunasofiaor04",
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
  },
  {
    id: "ai-automation-pipeline",
    isUpcoming: true,
    title: {
      es: "Pipeline de Automatización con Python & IA",
      en: "Python & AI Automation Pipeline"
    },
    category: {
      es: "Inteligencia Artificial & Automatización",
      en: "Artificial Intelligence & Automation"
    },
    summary: {
      es: "Flujo de automatización para extracción de información y estructuración de datos asistido por modelos de lenguaje e IA generativa.",
      en: "Automation workflow for data extraction and structured processing powered by generative AI and language models."
    },
    image: "/images/intranet-platform.jpg",
    gallery: ["/images/intranet-platform.jpg"],
    technologies: [
      "Python",
      "OpenAI API",
      "FastAPI",
      "SQL",
      "Git"
    ],
    githubUrl: "https://github.com/lunasofiaor04",
    liveUrl: "https://github.com/lunasofiaor04",
    problem: {
      es: "Procesamiento manual repetitivo de reportes y documentos que requieren estructuración y extracción de entidades.",
      en: "Manual, repetitive processing of reports and documents requiring structured extraction and entity analysis."
    },
    solution: {
      es: "Scripts de automatización y microservicio en Python para orquestar la ingesta y clasificación automática con prompts optimizados.",
      en: "Automation scripts and Python microservice to orchestrate ingestion and automatic classification with prompt engineering."
    },
    architecture: {
      es: "Microservicio Python con llamadas asíncronas y validaciones Pydantic.",
      en: "Python microservice with asynchronous requests and Pydantic schema validation."
    },
    results: {
      es: "En proceso de experimentación y subida a repositorio.",
      en: "Currently in experimentation and upcoming public repository release."
    }
  }
];
