import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MyTable from './MyTable'
import Table from 'react-bootstrap/Table'

class BootstrapCard extends React.Component {

    constructor() {
        super();
        this.state = {
            rb: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                this.setState({ rb: data });
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        // const robots = [
        //   {id:1, name:'One', email:'123@123.123'},
        //   {id:2, name:'Two', email:'323@323.323'},
        //   {id:3, name:'Three',  email:'523@523.523'}
        // ];

        const { rb } = this.state;

        return (
            <React.Fragment>
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