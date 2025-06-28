/// <reference path = "../astro/types.d.ts" />

type Job = {
    date: string;
    title: string;
    description: string;
}

type Skill = {
    name: string;
    iconUrl: string;
};

type Porject = {
    title: string;
    description : string;
    usedSkill: Skill[];
    urlImg: string;
    link: string;
}