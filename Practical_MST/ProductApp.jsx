import './App.css'
import ProductCard from './ProductCard'

function ProductApp() {

  return (
    <div className="h-screen my-20">
      <div className="text-white font-bold text-4xl text-center my-16">
        Products Details    
      </div>
      <div className="flex justify-around items-center">
        <ProductCard
          name="Wireless Headphones" 
          price={99.99} 
          description="Noise cancelling, 20hr battery life" 
          instock={false} 
        />

        <ProductCard 
          name="Wireless Headphones" 
          price={99.99} 
          description="Noise cancelling, 20hr battery life" 
          instock={true} 
        />

        <ProductCard 
          name="Wireless Headphones" 
          price={99.99} 
          description="Noise cancelling, 20hr battery life" 
          instock={true} 
        />
      </div>
    </div>
  )
}

export default ProductApp;
