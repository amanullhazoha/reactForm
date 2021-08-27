import React, { Component } from 'react';
import { Col, Container, Row } from '../farmwork/index';
import Input from './input';
import Option from './selection';
import Textarea from './textarea';

class ApplicationForm extends Component {
    state = {
        person: {
            firstName: '',
            lastName: '',
            birthDate: '',
            gender: '',
            email: '',
            phone: '',
        },
        address: {
            street1: '',
            street2: '',
            city: '',
            region: '',
            zipCode: '',
            country: '',
        },
        others: {
            illness: '',
            qualification: '',
            schools: '',
            exprience: '',
            skills: '',
        },
    };

    handelChange = (e) => {
        const { person, address, others } = this.state;

        this.setState({
            person: { ...person, [e.target.name]: e.target.value },
            address: { ...address, [e.target.name]: e.target.value },
            others: { ...others, [e.target.name]: e.target.value },
        });

        // if (
        //     // eslint-disable-next-line no-constant-condition
        //     e.target.name === 'firstName' ||
        //     ' lastName' ||
        //     'birthDate' ||
        //     'gender' ||
        //     'email' ||
        //     'phone'
        // ) {
        //     this.setState({
        //         person: { [e.target.name]: e.target.value },
        //     });
        // }
        // if (
        //     // eslint-disable-next-line no-constant-condition
        //     e.target.name === 'street1' ||
        //     'street2' ||
        //     'city' ||
        //     'region' ||
        //     'zipCode' ||
        //     'country'
        // ) {
        //     this.setState({
        //         address: { [e.target.name]: e.target.value },
        //     });
        // }
        // if (
        //     // eslint-disable-next-line no-constant-condition
        //     e.target.name === 'illness' ||
        //     'qualification' ||
        //     'schools' ||
        //     'exprience' ||
        //     'skills'
        // ) {
        //     this.setState({
        //         others: { [e.target.name]: e.target.value },
        //     });
        // }
    };

    handelSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

        // const { person, others } = this.state;
        // console.log(person, others);
    };

    render() {
        const {
            person: { firstName, lastName, birthDate, gender, email, phone },
        } = this.state;

        const {
            address: { street1, street2, city, region, zipCode, country },
        } = this.state;

        const {
            others: { illness, qualification, schools, exprience, skills },
        } = this.state;

        return (
            <section>
                <Container>
                    <Row>
                        <Col grid="col-8">
                            <form onSubmit={this.handelSubmit}>
                                <Input
                                    className="col-6"
                                    idName="first"
                                    label="Name"
                                    type="text"
                                    name="firstName"
                                    value={firstName}
                                    placeholder="First"
                                    handelChange={this.handelChange}
                                />
                                <Input
                                    className="col-6"
                                    idName="last"
                                    type="text"
                                    name="lastName"
                                    value={lastName}
                                    placeholder="Last"
                                    handelChange={this.handelChange}
                                />
                                <Input
                                    className="col-6"
                                    idName="date"
                                    label="Date of Birth"
                                    type="date"
                                    name="birthDate"
                                    value={birthDate}
                                    handelChange={this.handelChange}
                                />
                                <Option
                                    className="col-6"
                                    idName="gender"
                                    label="Gender"
                                    name="gender"
                                    option={['Select One', 'Male', 'Female', 'Other']}
                                    value={gender}
                                    handelChange={this.handelChange}
                                />
                                <Input
                                    className="col-6"
                                    idName="email"
                                    label="Email"
                                    type="email"
                                    name="email"
                                    value={email}
                                    handelChange={this.handelChange}
                                />
                                <Input
                                    className="col-6"
                                    idName="phone"
                                    label="Phone"
                                    type="number"
                                    name="phone"
                                    value={phone}
                                    placeholder="### ### ###"
                                    handelChange={this.handelChange}
                                />
                                <Input
                                    className="col-12"
                                    idName="adress"
                                    label="Address"
                                    type="text"
                                    name="street1"
                                    value={street1}
                                    placeholder="Street Address"
                                    handelChange={this.handelChange}
                                />
                                <Input
                                    className="col-12"
                                    idName="adress2"
                                    type="text"
                                    name="street2"
                                    value={street2}
                                    placeholder="Street Address Line 2"
                                    handelChange={this.handelChange}
                                />
                                <Input
                                    className="col-6"
                                    idName="city"
                                    type="text"
                                    name="city"
                                    value={city}
                                    placeholder="City"
                                    handelChange={this.handelChange}
                                />
                                <Input
                                    className="col-6"
                                    idName="region"
                                    type="text"
                                    name="region"
                                    value={region}
                                    placeholder="Region"
                                    handelChange={this.handelChange}
                                />
                                <Input
                                    className="col-6"
                                    idName="zipcode"
                                    type="text"
                                    name="zipCode"
                                    value={zipCode}
                                    placeholder="Postal / Zip Code"
                                    handelChange={this.handelChange}
                                />

                                <Option
                                    className="col-6"
                                    idName="gender"
                                    name="country"
                                    option={['Select One', 'Bangladesh', 'India', 'Nepal']}
                                    value={country}
                                    handelChange={this.handelChange}
                                />
                                <Textarea
                                    className="col-12"
                                    idName="illness"
                                    label="Do you have any illness, long term health condition 
                                or any disability that you would like to make us aware of?"
                                    name="illness"
                                    value={illness}
                                    handelChange={this.handelChange}
                                />
                                <Textarea
                                    className="col-12"
                                    idName="qualification"
                                    label="Education and Qualifications"
                                    name="qualification"
                                    value={qualification}
                                    handelChange={this.handelChange}
                                />

                                <Input
                                    className="col-12"
                                    idName="schools"
                                    label="Name of Present School or Collage"
                                    type="text"
                                    name="schools"
                                    value={schools}
                                    handelChange={this.handelChange}
                                />

                                <Textarea
                                    className="col-12"
                                    idName="exprience"
                                    label="Work and Performance Experience"
                                    name="exprience"
                                    value={exprience}
                                    handelChange={this.handelChange}
                                />

                                <Textarea
                                    className="col-12"
                                    idName="skills"
                                    label="Special Skills"
                                    name="skills"
                                    value={skills}
                                    handelChange={this.handelChange}
                                />

                                <div className="submitBtn">
                                    <button type="submit">SEND</button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default ApplicationForm;
