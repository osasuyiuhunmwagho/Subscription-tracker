import { Card,Button } from "react-bootstrap";



function SubscriptionCard({ name, amount, date, category, onDelete, onEdit }) {
    return (
        
        <Card
        style={{
          borderRadius: '15px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          padding: '15px',
          border: 'none',
          backgroundColor: '#ffffff',
          width: '300px',
          marginBottom: '20px'
        }}
      >
        <Card.Body style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          
          <Card.Title style={{ fontWeight: 'bold', fontSize: '18px', color: '#333', marginBottom: '10px' }}>
            {name}
          </Card.Title>

          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#555' }}>
            <p1 style={{ fontSize: '14px', color: '#888' }}>{category}</p1>
            <p1 style={{ fontSize: '16px', fontWeight: '500' }}>${amount}</p1>
            
          </div>
          <div className="flex items-center justify-between">
         
              <span className="text-gray-700">Renewal date: {date}</span>
          
          </div>
          <div style={{textAlign:'right', display: 'flex', 
  justifyContent: 'flex-end',
  gap: '8px' }}>
            <Button size="sm" onClick = {onEdit}>Edit</Button>
            <Button size="sm" variant="destructive" onClick={onDelete}>Delete</Button>
          </div>
        </Card.Body>
      </Card>
      
               
          
                
        
    );
}

export default SubscriptionCard;