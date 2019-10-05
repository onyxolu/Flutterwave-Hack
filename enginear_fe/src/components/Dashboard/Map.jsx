import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import CurrentLocation from './CurrentLocation.jsx';
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyAPn-T9I9lNOTF_kTD7RGCQlwAXhPLjg9o");

export class MapContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            enginearList: [],
            stores: [],
        }
      }
      compare( a, b ) {
        if ( a.location < b.location ){
          return -1;
        }
        if ( a.location > b.location ){
          return 1;
        }
        return 0;
      }

      updateState = (newState) => {
          this.setState({
            stores: newState
          })
      }

      updateEnginearList = (newEntry) => {
          this.setState({
              enginearList: this.state.enginearList.concat(newEntry)
          })
          let enginearList = this.state.enginearList
          enginearList.sort(this.compare);

          this.setState({
              enginearList: enginearList
          })
          console.log(this.state.enginearList)
      }

      getCurrentAddress() {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
              const coords = pos.coords;
              const new_stores = [{latitude: coords.latitude, longitude:coords.longitude}];
            // const new_stores = [{latitude: 6.5151, longitude:3.3886}];
              const driverDetails = [
                    {
                        name: 'Paul',
                        number: '09',
                        location: "10, Victor Bamiro Street, Ketu, Lagos State, Nigeria"
                    },
                    {
                        name: 'Yahaya',
                        number: '090909',
                        location: "No 1, Akinyemi Street, Surulere, Lagos State."
                    }
                ]

              for (let driverDetail of driverDetails) {
                Geocode.fromAddress(driverDetail.location)
                .then( (response) => {
                        const { lat, lng } = response.results[0].geometry.location;
                        new_stores.push({latitude: lat, longitude: lng})
                        this.updateState(new_stores);
                        const last_entry = this.state.stores.length-1
                        var origin1 = new this.props.google.maps.LatLng(this.state.stores[last_entry].latitude, this.state.stores[1].longitude);
                        var destinationA = new this.props.google.maps.LatLng(this.state.stores[0].latitude, this.state.stores[0].latitude);

                        var service = new this.props.google.maps.DistanceMatrixService();
                        const callback = (response, status) => {
                            if (status == 'OK') {
                                var origins = response.originAddresses;
                                var destinations = response.destinationAddresses;
                                for (var i = 0; i < origins.length; i++) {
                                var results = response.rows[i].elements;
                                    for (var j = 0; j < results.length; j++) {
                                        var element = results[j];
                                        var distance = element.distance.text;
                                        var duration = element.duration.text;
                                        var from = origins[i];
                                        var to = destinations[j];
                                    }    
                                }
                                console.log(distance, duration, from, to);
                                driverDetail.location = distance
                                this.updateEnginearList(driverDetail)
                                // const enginearList = this.state
                                // this.setState({
                                //     enginearList:
                                // })
                            }
                        }
                        service.getDistanceMatrix(
                        {
                            origins: [origin1],
                            destinations: [destinationA],
                            travelMode: 'DRIVING',
                        }, callback);
                        
                        
                    },
                    error => {
                        console.error(error);
                    });                    
                }
            })
        }
      }

      componentDidMount() {
        const data = this.getCurrentAddress();
      }

      sortEnginearList() {
        console.log('from', this.state)
      }

      displayMarkers = () => {
        return this.state.stores.map((store, index) => {
          return (
            <Marker 
                icon= { (index == 0) 
                    ? null 
                    : {
                    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                }}
                key={index} 
                id={index} 
                position={{
                    lat: store.latitude,
                    lng: store.longitude
                }}
                onClick={() => console.log("You clicked me!")} 
            />)
        })
      }

      
    render() {        
        return (
            <CurrentLocation
                zoom={12}
                centerAroundCurrentLocation
                google={this.props.google}
            >
                {/* <Marker name={'current location'} /> */}
                {this.displayMarkers()}
            </CurrentLocation>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAPn-T9I9lNOTF_kTD7RGCQlwAXhPLjg9o'
})(MapContainer);