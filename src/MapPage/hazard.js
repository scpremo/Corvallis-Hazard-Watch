import types from "./hazardTypes.json"
export default class Hazard {
    constructor(hazard,map,haztypes){
        this.lat=hazard.latitude
        this.dateObject = hazard.created_at
        this.date=this.dateObject.toLocaleString()
        this.types = haztypes
        this.long=hazard.longitude
        //console.log(typeof(hazard.type))
        console.log("test in hazard")
        console.log(this.types)
        this.type=this.types.find(type => type.id === hazard.type)?.name || "Other";
        this.icon=hazard.icon_type
        this.text=hazard.text
        this.image=hazard.image
        this.radius=hazard.radius
        this.marker=null
        this.map=map
        this.visible=false
        this.show()
        
    }
    convertIsoToCustomFormat(isoString) {
        const dateTime = new Date(isoString);
        
        // Extract components
        const month = dateTime.getMonth() + 1; // Months are zero-based
        const day = dateTime.getDate();
        const year = dateTime.getFullYear();
        const hours = dateTime.getHours();
        const minutes = dateTime.getMinutes();
    
        // Format the components
        const customFormat = `${month}/${day}/${year}, ${hours}:${minutes}`;
    
        return customFormat;
    }
    //removes itself from map
    remove(){
        if(this.visible)
        {
            this.marker.remove()
            this.visible=false  ;
        }
    }
    //adds itself to the map
    show(){
        if(!this.visible)
        {
            if (!this.marker)
            {
                if(this.radius)
                {
                    
                    this.marker = L.circle([this.lat, this.long], {
                        color: 'red',
                        fillColor: '#f03',
                        fillOpacity: 0.5,
                        radius: this.radius
                        
                    })
                }
                else{   
                    
                    //format to create a custon icon for popups
                    if(this.icon === null) {
                        var standardIcon = L.icon({
                            iconUrl: '/assets/icons/marker-icon.png',
                            shadowUrl: '/assets/icons/marker-shadow.png',
                        
                            iconSize:     [25, 41], // size of the icon
                            shadowSize:   [41, 41], // size of the shadow
                            iconAnchor:   [12, 41], // point of the icon which will correspond to marker's location
                            shadowAnchor: [12, 41],  // the same for the shadow
                            popupAnchor:  [-3, -41] // point from which the popup should open relative to the iconAnchor
                        });
                    }
                    this.marker=L.marker([this.lat,this.long],{icon: standardIcon})
                }
            }
            this.marker.addTo(this.map);
            this.marker.bindPopup("<b>"+this.type+" reported at "+this.date+"<b>");
            this.visible=true;

        }
    }
}
// export default Hazard;

