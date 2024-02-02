let Hazard = class{
    constructor(hazard,map){
        this.lat=hazard.lat
        this.date = hazard.date
        this.long=hazard.long
        this.type=hazard.type
        this.icon=hazard.icon
        this.text=hazard.text
        this.image=hazard.image
        this.marker=null
        this.map=map
        this.visible=false
        this.show()
        
    }
    remove(){
        if(this.visible)
        {
            this.marker.remove()
            this.visible=false  ;
        }
    }
    show(){
        if(!this.visible)
        {
            if (!this.marker)
                this.marker=L.marker([this.lat,this.long])
            this.marker.addTo(this.map);
            this.marker.bindPopup("<b>"+this.type+" reported at "+this.date+"<b>");
            this.visible=true;
        }
    }
}
// export default Hazard;


