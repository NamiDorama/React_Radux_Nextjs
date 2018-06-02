import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { connect } from 'react-redux'
import { transliterate } from 'transliteration'
import { setAddress, setMetaAsync } from '../actions'

class Index extends React.Component {
  state = {
    address: ''
  };

  componentDidMount() {
    this.props.dispatch(setMetaAsync());
  }

  changeInput = ({ target }) => {
    const address = target.value;
    this.setState({ address })
  };

  setUsersAddress = (e) => {
    e.preventDefault();
    const address = this.state.address;
    this.props.dispatch(setAddress(address));

    const href = '/map';
    const addressForUrl = `${transliterate(address).replace(/\W+/g, '_').toLowerCase()}`;
    const as = `/map/${addressForUrl}`;

    Router.push(href, as);
  };

  render() {
    const { meta } = this.props;

    return (
      meta.length > 0 &&
      <div>
        <Head>
          <title>{meta[0].company.name}</title>
          <meta name="description" content={meta[0].company.catchPhrase} />
          <meta name="keywords" content={meta[0].company.bs} />
        </Head>
        <div className="content">
          <h1>Привет, юзер!</h1>
          <form onSubmit={(e) => this.setUsersAddress(e)}>
            <p>Введите страну, город, улицу</p>
            <p>Например: Украина, г. Харьков, ул. Сумская, 18</p>
            <input
              type="text"
              placeholder="Введите страну, город, улицу"
              value={this.state.address}
              onChange={this.changeInput}
            />
            <button type="submit">
              Проложить маршрут
            </button>
          </form>
        </div>

        <style jsx>
          {`
            .content {
              margin: 20px auto;
              max-width: 1024px;
            }
            h1 {
              color: red
            }
            input {
              display: inline-block;
              padding: 5px 15px;
              margin: 10px 0;
              border: 1px solid lightgrey;
              box-shadow: 0 0 3px lightgrey;
              border-radius: 4px;
              min-width: 300px;
            }
            button {
              display: block;
              width: 200px;
              padding: 5px 15px;
              margin: 10px 0;
              border: 1px solid #757575;
              border-radius: 4px;
              background-color: white;
            }

            button:hover {
              background-color: #efefef;
              cursor: pointer;
            }
          `}
        </style>
      </div>
    )
  }
}

export default connect(({ meta }) => ({ meta: meta }))(Index);
