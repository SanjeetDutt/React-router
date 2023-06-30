class Event{
    title: string;
    date: string;
    description: string;
    image: string;
    id:string;

    constructor() {
        this.title = "";
        this.date = "";
        this.description = "";
        this.image = "";
        this.id = "";
    }

    parse(res:{id:string; date:string; description:string; image:string; title:string}){
        this.id = res.id
        this.date = res.date
        this.description = res.description
        this.image = res.image
        this.title = res.title
    }
}

export default Event