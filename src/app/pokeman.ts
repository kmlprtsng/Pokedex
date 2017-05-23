export class Pokemon {
    id: number;
    imageUrl: string;
    name: string;

    constructor(id:number, name: string, imageUrl: string){
        this.id = id;
        this.imageUrl = imageUrl;
        this.name = name;
    }
}
