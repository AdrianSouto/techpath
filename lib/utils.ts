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

function getAverageSalaryRange(salaryRanges: Record<string, number>): string {
    let totalSalary = 0;
    let totalCount = 0;

    for (const range in salaryRanges) {
        if (salaryRanges.hasOwnProperty(range)) {
            const [min, max] = range.split('-').map(Number);
            const average = (min + max) / 2;
            totalSalary += average * salaryRanges[range];
            totalCount += salaryRanges[range];
        }
    }

    const averageSalary = totalSalary / totalCount;
    const averageRange = `${Math.floor(averageSalary / 100) * 100}-${Math.floor(averageSalary / 100) * 100 + 99}`;

    return averageRange;
}

export const tecnoCampo: Record<string, string> = {
    "html": "web frontend",
    "css": "web frontend",
    "typescript": "web frontend",
    "react": "web frontend",
    "angular": "web frontend",
    "vue.js": "web frontend",
    "nextjs": "web frontend",
    "svelte": "web frontend",
    "ember.js": "web frontend",
    "backbone.js": "web frontend",

    "node.js": "web backend",
    "django": "web backend",
    "flask": "web backend",
    "laravel": "web backend",
    "php": "web backend",
    "java": "web backend",
    "spring boot": "web backend",
    "ruby on rails": "web backend",
    "express": "web backend",
    "nestjs": "web backend",
    "c#": "web backend",
    ".net": "web backend",

    "android": "mobile",
    "ios": "mobile",
    "flutter": "mobile",
    "react native": "mobile",
    "ionic": "mobile",
    "xamarin": "mobile",
    "cordova": "mobile",
    "kotlin": "mobile",
    "swift": "mobile",

    "mysql": "bases de datos",
    "mongodb": "bases de datos",
    "postgresql": "bases de datos",
    "sql server": "bases de datos",
    "oracle": "bases de datos",
    "sqlite": "bases de datos",
    "nosql": "bases de datos",

    "aws": "cloud",
    "azure": "cloud",
    "google cloud": "cloud",
    "firebase": "cloud",
    "heroku": "cloud",
    "digitalocean": "cloud",
    "aws lambda": "cloud",
    "azure functions": "cloud",
    "google cloud functions": "cloud",

    "git": "devops",
    "docker": "devops",
    "jenkins": "devops",
    "ci/cd": "devops",
    "kubernetes": "devops",
    "ansible": "devops",
    "terraform": "devops",
    "aws codepipeline": "devops",
    "azure devops": "devops",
    "github actions": "devops",

    "c++": "otras",
    "go": "otras",
    "rust": "otras",
    "scala": "otras"
};

export const frameworkLanguage: Record<string, string> = {
    "react": "javascript",
    "angular": "typescript",
    "vue.js": "javascript",
    "nextjs": "javascript",
    "svelte": "javascript",
    "ember.js": "javascript",
    "backbone.js": "javascript",
    "node.js": "javascript",
    "django": "python",
    "flask": "python",
    "laravel": "php",
    "spring boot": "java",
    "ruby on rails": "ruby",
    "express.js": "javascript",
    "nestjs": "typescript",
    "flutter": "dart",
    "react native": "javascript",
    "ionic": "javascript",
    "xamarin": "c#",
    "cordova": "javascript",
    ".net": "c#",
    "aws lambda": "javascript",
    "azure functions": "javascript",
    "google cloud functions": "javascript",
    "terraform": "hcl",
    "ansible": "yaml",
    "jenkins": "java",
    "github actions": "javascript"
};