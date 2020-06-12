class Space {
    constructor(id, name)
    {
        this.id = id;
        this.name = name;
        this.players = [];
    }
    
    onLand(player)
    {
        alert("You've landed on " + this.name);
    }
}

export default Space;