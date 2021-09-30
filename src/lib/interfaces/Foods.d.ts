
interface BaseFood {
    src: string;
    title: string;
    sides: string;
    description: string;
    price: number;
}

interface Meats {
    title: string;
    description: string;
}

interface Mains extends BaseFood {
    includes: string[];
    meats? : Meats[]
}

interface Foods {
    Mains: Mains[];
    Pupus: BaseFood[];
}