import { useEffect } from "react";



const UserNavigation = () => {

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position){
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
        });
    },[])

    return (
        <div>
            Using geolocation JS API in React
        </div>
    )

}

export default UserNavigation;