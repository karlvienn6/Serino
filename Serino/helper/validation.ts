
 const distance = (lat1 : number, long1 : number, lat2 : number, long2 : number)=>{
    const radiusKm = 6371;

    const latDiff = radians(lat2 - lat1);
    const longDiff = radians(long2 - long1);

    const a = Math.sin(latDiff/2) * Math.sin(latDiff/2) + Math.cos(radians(lat1)) * Math.cos(radians(lat2)) * Math.sin(longDiff/2) * Math.sin(longDiff/2)

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = radiusKm * c;

    return distance;

}

function radians(degrees:number) {
    return degrees * (Math.PI/180);
}


export default distance;