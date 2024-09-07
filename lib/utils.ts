import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type dataType = {
    Profesion?: string
    Tecnologias?: string[] | null
    Salario?: number | string | null
    Experiencia?: number | string | null
    Titulo?: string | string[] | null
    Modalidad?: string | null
    Idiomas?: string[] | string | null
    Empleador?: string | null
    Pais?: string | null
    Anuncio?: string | null
}

export function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
export const tecnoCampo: Record<string, string> = {
    "HTML": "Web Frontend",
    "CSS": "Web Frontend",
    "JavaScript": "Web Frontend",
    "TypeScript": "Web Frontend",
    "React": "Web Frontend",
    "Angular": "Web Frontend",
    "Vue.js": "Web Frontend",
    "NextJS": "Web Frontend",
    "Svelte": "Web Frontend",
    "Ember.js": "Web Frontend",
    "Backbone.js": "Web Frontend",

    "Node.js": "Web Backend",
    "Python": "Web Backend",
    "Django": "Web Backend",
    "Flask": "Web Backend",
    "Laravel": "Web Backend",
    "PHP": "Web Backend",
    "Java": "Web Backend",
    "Spring Boot": "Web Backend",
    "Ruby on Rails": "Web Backend",
    "Express.js": "Web Backend",
    "NestJS": "Web Backend",
    "C#": "Web Backend",
    ".NET": "Web Backend",

    "Android": "Mobile",
    "iOS": "Mobile",
    "Flutter": "Mobile",
    "React Native": "Mobile",
    "Ionic": "Mobile",
    "Xamarin": "Mobile",
    "Cordova": "Mobile",
    "Kotlin": "Mobile",
    "Swift": "Mobile",

    "MySQL": "Bases de Datos",
    "MongoDB": "Bases de Datos",
    "PostgreSQL": "Bases de Datos",
    "SQL Server": "Bases de Datos",
    "Oracle": "Bases de Datos",
    "SQLite": "Bases de Datos",
    "NoSQL": "Bases de Datos",

    "AWS": "Cloud",
    "Azure": "Cloud",
    "Google Cloud": "Cloud",
    "Firebase": "Cloud",
    "Heroku": "Cloud",
    "DigitalOcean": "Cloud",
    "AWS Lambda": "Cloud",
    "Azure Functions": "Cloud",
    "Google Cloud Functions": "Cloud",

    "Git": "DevOps",
    "Docker": "DevOps",
    "Jenkins": "DevOps",
    "CI/CD": "DevOps",
    "Kubernetes": "DevOps",
    "Ansible": "DevOps",
    "Terraform": "DevOps",
    "AWS CodePipeline": "DevOps",
    "Azure DevOps": "DevOps",
    "GitHub Actions": "DevOps",

    "C++": "Otras",
    "Go": "Otras",
    "Rust": "Otras",
    "Scala": "Otras"
};

export const frameworkLanguage: Record<string, string> = {
    "React": "JavaScript",
    "Angular": "TypeScript",
    "Vue.js": "JavaScript",
    "NextJS": "JavaScript",
    "Svelte": "JavaScript",
    "Ember.js": "JavaScript",
    "Backbone.js": "JavaScript",
    "Node.js": "JavaScript",
    "Django": "Python",
    "Flask": "Python",
    "Laravel": "PHP",
    "Spring Boot": "Java",
    "Ruby on Rails": "Ruby",
    "Express.js": "JavaScript",
    "NestJS": "TypeScript",
    "Flutter": "Dart",
    "React Native": "JavaScript",
    "Ionic": "JavaScript",
    "Xamarin": "C#",
    "Cordova": "JavaScript",
    "Kotlin": "Kotlin",
    "Swift": "Swift",
    ".NET": "C#",
    "AWS Lambda": "JavaScript",
    "Azure Functions": "JavaScript",
    "Google Cloud Functions": "JavaScript",
    "Terraform": "HCL",
    "Ansible": "YAML",
    "Kubernetes": "Go",
    "Docker": "Go",
    "Jenkins": "Java",
    "GitHub Actions": "JavaScript"
};