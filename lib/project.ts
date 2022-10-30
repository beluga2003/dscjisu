import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import path from "path";

const PROJECT_PATH = path.join(process.cwd(), "projects");

export const getSlugs = (): string[] => {
    const paths = sync(`${PROJECT_PATH}/*.mdx`);

    return paths.map((path) => {
        const parts = path.split("/");
        const fileName = parts[parts.length - 1];
        // eslint-disable-next-line no-unused-vars
        const [slug, _ext] = fileName.split(".");
        return slug;
    });
};

export const getAllProjects = () => {
    const project = getSlugs()
        .map((slug) => getProjectFromSlug(slug))
        .sort((a, b) => {
            // if (a.meta.date > b.meta.date) return 1;
            // if (a.meta.date < b.meta.date) return -1;
            // sort the slugs by date
            return a.meta.date > b.meta.date ? 1 : -1;
        })
        .reverse();
    return project;
};

interface Project {
    content: string;
    meta: ProjectMeta;
}

export interface ProjectMeta {
    name: string;
    description: string;
    eventpic: string;
    eventbanner: string;
    locationUrl: string;
    date: string;
    eventLink: string;
    id: string;
    isCompleted: boolean;
    isActive: boolean;
    type: string;
    locationName: string;
    slug: string;
}

export const getProjectFromSlug = (slug: string): Project => {
    const postPath = path.join(PROJECT_PATH, `${slug}.mdx`);
    const source = fs.readFileSync(postPath);
    const { content, data } = matter(source);
    // console.log(content);

    return {
        content,
        meta: {
            slug,
            name: data.name,
            description: data.description,
            eventpic: data.eventpic,
            eventbanner: data.eventbanner,
            locationUrl: data.locationUrl,
            date: (data.date ?? new Date()).toString().slice(0, 15),
            eventLink: data.eventLink,
            id: slug,
            isCompleted: data.isCompleted,
            isActive: data.isActive,
            type: data.type,
            locationName: data.locationName,
        },
    };
};