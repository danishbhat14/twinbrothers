import { useParams } from 'react-router-dom';
import { data } from "./Constants";
import { useEffect } from 'react';

const Packagedetails = () => {
  const { id } = useParams();

  // Find the product object with the matching id
  const product = data.find(item => item.id === parseInt(id));


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);




  return (
    <div className='mt-4'>
      <div className='flex flex-col md:flex-row justify-between'>
        {/* Image section */}
        <div className='md:w-1/2'>
          <div className=''>
            <img className='hover:cursor-zoom-in' src={product.image} alt={product.name} />
          </div>
        </div>

        {/* Details section */}
        <div className='md:w-1/2 flex flex-col pt-4 border border-red-500 p-5'>
          <h1 className='py-4 font-serif text-gray-600 text-2xl'>{product.name}</h1>
          <h1 className='py-4 font-mono text-red-500 text-2xl'>PRICING: {product.price}</h1>
          <h1 className='text-gray-600  text-2xl font-san-serif'>{product.duration}</h1><br/><br/>
          <h1 className='text-gray-600  text-2xl font-san-serif'>{product.things}</h1>
          <br/><br/>
          <p className='font-san-serif'>note :The pricing for travel services fluctuates during the booking process, which can result in either lower or higher costs depending on the situation. Factors such as demand, availability, and timing play a role in these fluctuations. During off-peak seasons or when demand is low, prices tend to be lower, allowing travelers to find more affordable options. Conversely, during peak seasons or periods of high demand, prices rise due to limited availability. External events and economic conditions can also impact pricing. To navigate these fluctuations, it is recommended to book in advance, remain flexible, and monitor prices regularly to secure the best deals and optimize travel budgets.</p>

        </div>

      </div>
      <h1 className='font-serif text-xl tracking-wider m-2 bg-pink-100'>{product.discription}</h1>

    </div>


  );
}

export default Packagedetails;
