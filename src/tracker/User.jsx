import { useState } from "react";
import SubscriptionCard from "./components/SubsciptionCard";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import AddSubscription from "./components/AddSubscription";


export default function User() {
    console.log("User component rendered");
    //showModal: A boolean that controls whether the modal is visible (false = hidden, true = shown)
    const[showModal, setShowModal] = useState(false);
    const[subscriptions, setSubscriptions] = useState([]);
    //add a new sunscription to the new subscriptions handler function
    const handleAddSubscription = (subscription) =>{
        setSubscriptions([...subscriptions, subscription]);
    }

    const handleDeleteSubscription = (index) => {
        const newSubscriptions = subscriptions.filter((subscription, currentIndex) => {
            return currentIndex !== index;
        });
        setSubscriptions(newSubscriptions);
    }
    

    const handleClose = () => setShowModal(false) ;

    return (
        <>
            <Container className="p-4" style={{width: "100vw", height: "10vh", maxWidth: "70%", marginBottom: '20px'  }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px'}}>
                    <h2 style={{ margin: 0 }}>Subscriptions</h2>

                    <Button variant="primary" onClick={ () => setShowModal(true)}>+ Add a subscription</Button>

                 </div>
            </Container>

                

                {subscriptions.map((subscription,index) => (
                    <SubscriptionCard  
                    key ={index}
                    name = {subscription.name}
                    amount = {subscription.amount}
                    category= {subscription.category}
                    date = {subscription.date}
                    onDelete= { () =>handleDeleteSubscription(index)}
                    />
                    

                

                ))}
               
               <AddSubscription
                show={showModal}
                onSubmit = {handleAddSubscription}
                handleClose ={handleClose}/>


        </>
        
        
            
            
           
                
        
            

           
            
        
    );
}


