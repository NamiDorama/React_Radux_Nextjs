import MapWithADirectionsRenderer from '../components/DirectionMap';
import { connect } from 'react-redux'
import Head from 'next/head'
import { setMetaAsync } from '../actions'

class GetLocation extends React.Component {
  state = {
    location: this.props.location
  };

  componentDidMount() {
    this.props.dispatch(setMetaAsync());
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.location !== prevState.location) {
      return { location: nextProps.location };
    }
    return null;
  }

  render() {
    const { meta, error } = this.props;
    const { location } = this.state;

    return (
      meta.length > 0 &&
      <div className="get-location">
        <Head>
          <title>{meta[1].company.name}</title>
          <meta name="description" content={meta[1].company.catchPhrase} />
          <meta name="keywords" content={meta[1].company.bs} />
        </Head>
        <h2>Geolocation</h2>

        {error ?
          <div>
            <p>Something was wrong.</p>
            <p className="error">{error}</p>
            <p>Please, reload the page and try again</p>
          </div>
          : location.results &&
          <MapWithADirectionsRenderer
            destination={location.results[0].geometry.location}
          />
        }

        <style jsx>
          {`
            .get-location {
              margin: 20px auto;
              max-width: 1024px;
              text-align: center;
            }
            .error {
              color: red;
            }
          `}
        </style>
      </div>
    );
  }
}

export default connect(({ meta, error, location }) => ({ meta: meta, error: error, location: location }))(GetLocation);
