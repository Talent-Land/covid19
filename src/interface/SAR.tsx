export namespace SAR {
    export interface ClinicalResearch {
        id: number;
        trialID: string;
        lastRefreshedDate: Date;
        publicTitle: string;
        scientificTitle: string;
        primarySponsor: string;
        registrationDate: Date;
        sourceRegister: string;
        webAddress: string;
        recruitmentStatus: string;
        enrollmentDate: Date;
        studyDesign: string;
        phase: string;
        contactFirstName: string;
        contactLastName: string;
        contactAddress: string;
        contactEmail: string;
        contactTel: string;
        contactAffilation: string;
        inclusionCriteria: string;
        exclusionCriteria: string;
        condition: string;
        intervention: string;
        primaryOutcome: string;
        resultsPostedDate: Date;
        resultsCompletedDate: Date;
        resultsUrlLink: string;
        bridgingFlag: boolean;
        bridgedType: string;
        results: boolean;
        countries: string;
        id_gender: number;
        id_studyType: number;
        inclusionAgeMin: number;
        inclusionAgeMax: number;
        inclusionAgeMinUnit: string;
        inclusionAgeMaxUnit: string;
        targetSize: number;
    }
    
    export interface Country {
        id: number;
        name: string;
        alpha2Code: string;
        alpha3Code: string;
        numericCode: number;
        synonyms: string;
    }

    export interface CountryClinicalResearch {
        id: number;
        id_country: number;
        id_clinicalResearch: number;
    }

    export interface Gender {
        id: number;
        name: string;
    }

    export interface StudyType {
        id: number;
        name: string;
    }
}