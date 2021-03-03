import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MyTable from './MyTable'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class BootstrapCard extends React.Component {

    constructor() {
        super();
        this.state = {
            rb: [],
            offset: 0,
            count:0
        }
    }

    componentDidMount() {
        fetch(`http://localhost:5000/getCountCustomers`)
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            this.setState({ count: data[0].count });
            this.getCust();
        })
        .catch(e => {
            console.log(e);
        });

    }

    getCust = (next = 0) => {
        this.setState({ offset: next })
        fetch(`http://localhost:5000/getAllCustomers?offset=${next}`)
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                this.setState({ rb: data });
            })
            .catch(e => {
                console.log(e);
            });
    }

    searchMe = (event) => {
        const query = event.target.value;
        fetch(`http://localhost:5000/search?q=${query}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ rb: data });
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {

        const { rb, offset, count } = this.state;
        const nextOffset = offset + 15;
        const prevOffset = offset - 15;
        const prevDis = (offset<=0) ? 'disabled' : '';
        const nextDis = (offset>count-15) ? 'disabled' : '';

        return (
            <React.Fragment>
                <Form>
                    <Form.Control
                        type="search"
                        placeholder="Search Customer by Country..."
                        style={
                            { width: '500px', marginBottom: '10px' }
                        }
                        onChange={this.searchMe}
                    />
                </Form>
                <div>
                    <Button variant="primary" 
                        disabled={prevDis}
                        className = "mb-2"
                        onClick={() => this.getCust(prevOffset)}
                    >Prev</Button>
                    <Button variant="primary" 
                        disabled={nextDis}
                        className = "mb-2"
                        onClick={() => this.getCust(nextOffset)}
                    >Next</Button>
                </div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rb.map((item, i) => {
                                return <MyTable id={item.customer_id} name={item.first_name} last={item.last_name} key={i} />
                            })
                        }
                    </tbody>
                </Table>
            </React.Fragment>
        );
    }

    // return ()
    //     <div className="jumbotron m-5">
    //         <h1 className="display-4">{props.title}</h1>
    //         <p className="lead">{props.description}</p>
    //         <a className="btn btn-primary btn-lg" href={props.buttonURL} role="button">{props.buttonLabel}</a>
    //     </div>
    // );
}

export default BootstrapCard;