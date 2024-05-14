import { Continent } from './continentType';

export type Country = {
    id: number;
    code: string;
    name: string;
    emoji: string;
    continent: Continent;
}

