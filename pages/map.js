import MapWithADirectionsRenderer from '../components/DirectionMap';
import { connect } from 'react-redux'

class GetLocation extends React.Component {
  state = {
    location: null,
    error: null
  };

  render() {
      console.log(this.props);

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

export default connect(({ meta, address }) => ({ meta: meta, address: address }))(GetLocation);
