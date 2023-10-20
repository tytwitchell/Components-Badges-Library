import React from 'react';
import ReactDOM from 'react-dom/client';
import Badge from './components/Badge/index'
import Banner from './components/Banner/index'
import Card from './components/Card/index'
import Testimonial from './components/Testimonial/index'
import Tooltip from './components/Tooltip/index'

function App() {
  
  return (
    <>
      <h3>Tooltip</h3>
      <Tooltip>
        <Tooltip.Element />
      </Tooltip>
    
      <h3>Badge</h3>
      <Badge>
        <div className='badge-options'>
          <Badge.Text />
          <Badge.Type />
          <Badge.Dropdown>
            <Badge.Colors />
          </Badge.Dropdown>
        </div>
        <Badge.Element/>
      </Badge>
      
      <h3>Banner</h3>
      <Banner>
        <Banner.Text />
        <Banner.Element varient='success'/>
        <Banner.Element varient='warning'/>
        <Banner.Element varient='error'/>
        <Banner.Element varient='neutral'/>
      </Banner>
      
      <h3>Card</h3>
      <Card>
       <Card.Element />
      </Card>
      
      <h3>Testimonial</h3>
      <Testimonial>
        <Testimonial.Element />
      </Testimonial>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
