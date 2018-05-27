import MapWithADirectionsRenderer from '../components/DirectionMap';

export default class GetLocation extends React.Component {
  state = {
    location: null,
    error: null
  };

  render() {
    return (
      <div className="get-location">
        <h2>This is GetLocation</h2>
        <MapWithADirectionsRenderer
          destination={ {lng: 36.3483874, lat: 50.0192414} }
        />
      </div>
    );
  }
}
