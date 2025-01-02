import React, { useState,useEffect } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import './AddSubscription.css';

export default function AddSubscription({ show, handleClose, onSubmit,initialValues}) {
    const [formData, setFormData] = useState({
        name: '',
        amount: '',
        category: '',
        date: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        
        if (show) {
            // This is using the OR (||) operator for default values
            //the null is when it is a "add subscription"
            setFormData(initialValues || {
                name: '',
                amount: '',
                category: '',
                date: ''
            });
        }
    }, [show, initialValues]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);

        handleClose();  // Close the modal after submission
        setFormData({ name: '', amount: '', category: '', date: '' });//set form dataa to null
    };

    return (
        <Modal 
            show={show} 
            onHide={handleClose}  
            backdrop="static"
            keyboard={false}
            centered
            className="subscription-modal"
        >
            <Modal.Header >
                <Modal.Title>{initialValues ? "Edit Subscription" : "New Subscription"}</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Subscription Name: </Form.Label>
                        <Form.Control 
                            type="text"
                            name="name"
                            placeholder="Enter a subscription name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="amount">
                        <Form.Label>Amount: </Form.Label>
                        <Form.Control 
                            type="number"
                            name="amount"
                            placeholder="Enter amount"
                            value={formData.amount}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="category">
                        <Form.Label>Category: </Form.Label>
                        <Form.Select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select category</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Utilities">Utilities</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Food">Food & Dining</option>
                            <option value="Other">Other</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="date">
                        <Form.Label>Billing Date: </Form.Label>
                        <Form.Control
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <div className="d-flex justify-content-end gap-2">
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit">
                            {initialValues ? 'Save Changes' : 'Add Subscription'}
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}