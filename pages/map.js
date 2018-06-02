import MapWithADirectionsRenderer from '../components/DirectionMap';
import { connect } from 'react-redux'
import Head from 'next/head'
import { setMetaAsync, getLocationAsync } from '../actions'

class GetLocation extends React.Component {
  state = {
    location: this.props.location
  };

  componentDidMount() {
    this.props.dispatch(setMetaAsync());
    this.props.dispatch(getLocationAsync(this.props.address));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.location !== prevState.location) {
      return { location: nextProps.location.results[0].geometry.location };
    }
    return null;
  }

  render() {
    const { meta } = this.props;
    const { location } = this.state;

    return (
      meta.length > 0 &&
      <div className="get-location">
        <Head>
          <title>{meta[1].company.name}</title>
          <meta name="description" content={meta[1].company.catchPhrase} />
          <meta name="keywords" content={meta[1].company.bs} />
        </Head>
        <h2>Ваш маршрут</h2>

        {Object.keys(location).length !== 0 ?

        <MapWithADirectionsRenderer
          destination={ {lat: location.lat, lng: location.lng} }
        /> :
        <div>Something was wrong. Please, try again</div>
        }
      </div>
    );
  }
}

export default connect(({ meta, address, location }) => ({ meta: meta, address: address, location: location }))(GetLocation);
