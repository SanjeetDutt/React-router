class Event{
    title: string;
    date: Date;
    description: string;
    image: string;
    id:number;


    constructor(id:number, title: string, date: Date, description: string, image: string) {
        this.title = title;
        this.date = date;
        this.description = description;
        this.image = image;
        this.id = id
    }
}

export default Event