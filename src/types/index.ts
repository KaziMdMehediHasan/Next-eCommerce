

export type TDummyProduct = {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    [vlaue: string]: any;
};


type MetaData = {
    totalPages: number;
    page: number;
};
