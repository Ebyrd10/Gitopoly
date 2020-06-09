class Space {
    constructor(id, name)
    {
        this.id = id;
        this.name = name;
    }
    
    onLand()
    {
        alert("You've landed on " + this.name);
    }
}