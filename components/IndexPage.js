import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'
import { connect } from 'react-redux'
import { setAddress } from '../actions'

class Index extends React.Component {
    state = {
        address: ''
    };

    static async getInitialProps() {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();

        return {
            data: data[0]
        }
    }

    changeInput = ({ target }) => {
        const address = target.value;
        this.setState({ address })
    };

    setUsersAddress = (e) => {
        e.preventDefault();
        this.props.dispatch(setAddress(this.state.address));
        Router.push(`/map/${this.state.address}`);
    };

    render() {
        const { data } = this.props;

        return (
            this.props &&
            <div>
                <Head>
                    <title>{data.name}</title>
                    <meta name="description" content={data.username} />
                    <meta name="keywords" content={data.username} />
                </Head>
                <div className="content">
                    <h1>Привет, юзер!</h1>
                    <form onSubmit={(e) => this.setUsersAddress(e)}>
                        <p>Введите страну, город, улицу</p>
                        <p>Например: Украина, г. Харьков, ул. Гв.Широнинцев</p>
                        <input
                            type="text"
                            placeholder="Введите страну, город, улицу"
                            value={this.state.address}
                            onChange={(e) => this.changeInput(e)}
                        />
                        {/*<Link href={`/map/${this.state.address}`} >*/}
                        <button type="submit">
                            Проложить маршрут
                        </button>
                        {/*</Link>*/}
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

export default connect()(Index);
