export interface TechItem {
  name: string;
  category: 'backend' | 'frontend' | 'databases' | 'tools';
  color: string; // Tailored glow & accent color
  badge?: string;
  iconType: string;
  description: {
    es: string;
    en: string;
  };
}

export const techSkills: TechItem[] = [
  // Backend
  {
    name: "PHP",
    category: "backend",
    color: "#777bb4",
    iconType: "php",
    description: {
      es: "Desarrollo de servicios backend, POO y lógica de servidor.",
      en: "Backend services, OOP, and server-side business logic."
    }
  },
  {
    name: "Laravel",
    category: "backend",
    color: "#ff2d20",
    iconType: "laravel",
    description: {
      es: "Framework PHP robusto, Eloquent ORM, Sanctum, queues y APIs REST.",
      en: "Robust PHP framework, Eloquent ORM, Sanctum, queues, and REST APIs."
    }
  },
  {
    name: "Python",
    category: "backend",
    color: "#3776ab",
    iconType: "python",
    description: {
      es: "Scripts de automatización, lógica algorítmica e integración con IA.",
      en: "Automation scripts, algorithmic logic, and AI integration."
    }
  },
  {
    name: "Java",
    category: "backend",
    color: "#ea2d2e",
    iconType: "java",
    description: {
      es: "Programación orientada a objetos, tipos seguros y concurrencia.",
      en: "Object-oriented programming, strong typing, and concurrency."
    }
  },
  {
    name: "Spring Boot",
    category: "backend",
    color: "#6db33f",
    iconType: "spring",
    description: {
      es: "Desarrollo de microservicios, inyección de dependencias y Spring Security.",
      en: "Microservices engineering, dependency injection, and Spring Security."
    }
  },

  // Frontend
  {
    name: "Vue.js",
    category: "frontend",
    color: "#42b883",
    iconType: "vue",
    description: {
      es: "Componentes reactivos, Composition API y arquitecturas dinámicas.",
      en: "Reactive components, Composition API, and dynamic frontend architectures."
    }
  },
  {
    name: "React",
    category: "frontend",
    color: "#61dafb",
    iconType: "react",
    description: {
      es: "Desarrollo basado en componentes, hooks, estado y consumo de APIs.",
      en: "Component-driven development, custom hooks, state, and API consumption."
    }
  },
  {
    name: "JavaScript",
    category: "frontend",
    color: "#f7df1e",
    iconType: "javascript",
    description: {
      es: "ES6+, manipulación del DOM, programación asíncrona y Fetch/Axios.",
      en: "Modern ES6+, DOM manipulation, asynchronous programming, and Fetch/Axios."
    }
  },
  {
    name: "TypeScript",
    category: "frontend",
    color: "#3178c6",
    iconType: "typescript",
    description: {
      es: "Tipado estático, interfaces robustas y prevención de errores.",
      en: "Static typing, strict interfaces, and compile-time safety."
    }
  },
  {
    name: "HTML5",
    category: "frontend",
    color: "#e34f26",
    iconType: "html",
    description: {
      es: "Estructura semántica, accesibilidad web (a11y) y estándares W3C.",
      en: "Semantic structuring, web accessibility (a11y), and W3C standards."
    }
  },
  {
    name: "CSS3",
    category: "frontend",
    color: "#1572b6",
    iconType: "css",
    description: {
      es: "Diseño responsive, Flexbox, CSS Grid y animaciones modernas.",
      en: "Responsive design, Flexbox, CSS Grid, and modern CSS transitions."
    }
  },

  // Databases
  {
    name: "SQL",
    category: "databases",
    color: "#00758f",
    iconType: "database",
    description: {
      es: "Consultas complejas, subconsultas, optimización de índices y vistas.",
      en: "Complex queries, subqueries, index optimization, and views."
    }
  },
  {
    name: "MySQL",
    category: "databases",
    color: "#4479a1",
    iconType: "mysql",
    description: {
      es: "Modelado relacional, claves foráneas, integridad referencial y transacciones.",
      en: "Relational modeling, foreign keys, referential integrity, and transactions."
    }
  },

  // Tools & Methodologies
  {
    name: "Git",
    category: "tools",
    color: "#f05032",
    iconType: "git",
    description: {
      es: "Control de versiones, flujos Gitflow, ramas, merges y GitHub.",
      en: "Version control, branching models, Gitflow, pull requests, and GitHub."
    }
  },
  {
    name: "Jira",
    category: "tools",
    color: "#0052cc",
    iconType: "jira",
    description: {
      es: "Gestión de historias de usuario, sprints y tableros ágiles.",
      en: "User story management, sprint planning, and agile backlog tracking."
    }
  },
  {
    name: "Swagger / OpenAPI",
    category: "tools",
    color: "#85ea2d",
    iconType: "swagger",
    description: {
      es: "Documentación interactiva, contratos de endpoints y especificación REST.",
      en: "Interactive API documentation, endpoint contracts, and OpenAPI specs."
    }
  },
  {
    name: "JWT (JSON Web Tokens)",
    category: "tools",
    color: "#fb015b",
    iconType: "jwt",
    description: {
      es: "Autenticación stateless, cifrado de payloads y protección de rutas.",
      en: "Stateless authentication, payload signing, and secure route protection."
    }
  },
  {
    name: "Cisco Packet Tracer",
    category: "tools",
    color: "#1ba0d7",
    iconType: "network",
    description: {
      es: "Simulación de topologías de red, enrutamiento, conmutación y direccionamiento IP.",
      en: "Network topology simulation, routing, switching, and IP addressing."
    }
  },
  {
    name: "Scrum",
    category: "tools",
    color: "#f59e0b",
    iconType: "scrum",
    description: {
      es: "Metodología ágil: dailies, planificación de sprint, reviews y retrospectivas.",
      en: "Agile methodology: daily standups, sprint planning, reviews, and retrospectives."
    }
  }
];
