export interface TDataUniversity {
    id: number;
    name: string;
    city: string;
}

export interface TUniversityInfoHeader {
    image?: string,
    nameUniversity?: string,
    curtailment?: string,
    city?: string,
    rector?: string,
}

export interface TFile {
    documents?: string[]
}