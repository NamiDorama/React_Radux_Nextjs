import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  Marker
} from "react-google-maps";
const { compose, withProps, lifecycle } = require("recompose");

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg" +
    "&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%`, width: `70%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%`, width: `70%`, margin: `20px auto` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route({
        origin: new google.maps.LatLng(53.9040434, 27.5542313),
        destination: new google.maps.LatLng(this.props.destination.lat, this.props.destination.lng),
        travelMode: google.maps.TravelMode.DRIVING
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
            destination: this.props.destination
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new google.maps.LatLng(53.9040434, 27.5542313)}
  >
    {props.directions &&
    <React.Fragment>
      <DirectionsRenderer
        directions={props.directions}
      />
      {/*<Marker*/}
        {/*position={{ lat: 53.9040434, lng: 27.5542313 }}*/}
        {/*defaultIcon="/static/start-marker.png"*/}
      {/*/>*/}
      {/*<Marker*/}
        {/*position={{ lat: props.destination.lat, lng: props.destination.lng }}*/}
        {/*defaultIcon="/static/end-marker.png"*/}
      {/*/>*/}
    </React.Fragment>
    }
  </GoogleMap>
);

export default MapWithADirectionsRenderer;