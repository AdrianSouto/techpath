import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import data from "@/lib/data.json";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}





export function getAverageSalaryRange(salaryRanges: Record<string, number>): string {
    let totalSalary = 0;
    let totalCount = 0;

    for (const range in salaryRanges) {
        const count = salaryRanges[range];
        const [min, max] = range.split('-').map(Number);

        totalSalary += (min + max) / 2 * count;
        totalCount += count;
    }

    const averageSalary = totalSalary / totalCount;
    return `${Math.floor(averageSalary / 100) * 100}-${Math.floor(averageSalary / 100) * 100 + 99}`;
}

export function getAverageGeneral(array: Record<string, number>): string {
    let total = 0;
    let count = 0;

    for (const key in array) {
        if (parseFloat(key)) {
            total += parseFloat(key) * array[key];
            count += array[key];
        }
    }

    return Math.floor(total / count).toString();
}

export function getSortedSliced(profesiones: Record<string, number>, slice: number = 10): [string, number][] {
    return Object.entries(profesiones)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 10)
}

export type dataType = {
    Profesion?: string
    Tecnologias?: string[] | null
    Salario?: number | string | null
    Experiencia?: number | string | null
    "Modalidad de Trabajo"?: string | null
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
    "html": "web frontend",
    "css": "web frontend",
    "typescript": "web frontend",
    "react": "web frontend",
    "reactjs": "web frontend",
    "react.js": "web frontend",
    "angular": "web frontend",
    "vue.js": "web frontend",
    "vuejs": "web frontend",
    "vue": "web frontend",
    "nextjs": "web frontend",
    "next.js": "web frontend",
    "next": "web frontend",
    "svelte": "web frontend",
    "ember.js": "web frontend",
    "astro": "web frontend",
    "backbone.js": "web frontend",

    "node.js": "web backend",
    "django": "web backend",
    "flask": "web backend",
    "laravel": "web backend",
    "symfony": "web backend",
    "spring boot": "web backend",
    "spring": "web backend",
    "ruby on rails": "web backend",
    "ruby": "web backend",
    "express": "web backend",
    "nestjs": "web backend",
    "nest.js": "web backend",
    "nest": "web backend",
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
    "mariadb": "bases de dates",

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