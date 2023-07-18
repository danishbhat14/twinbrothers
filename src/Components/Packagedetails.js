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
          <h1 className='py-4 font-serif text-gray-600 text-s'>{product.name}</h1>
          <h1 className='py-4 font-serif text-orange-600 text-s'>PRICING: {product.locations}</h1>
          <h1 className='text-gray-600  text-s font-san-serif'>{product.duration}</h1><br/><br/>
          <h1 className='text-gray-600  text-s font-san-serif'>{product.things}</h1>
          <br/>
          <hr/>
          <h2 className='text-gray-600  text-s font-san-serif'>{product.visitplaces}</h2>
          <br/>
          <hr/>
          <h1 className='text-orange-600  text-s font-serif'>{product.price}</h1>
          <br/>
          <h1 className='text-black  text-s font-serif'>{product.call}</h1>

         



          <br/><br/>

        </div>

      </div>
      <h1 className='font-serif text-s  m-2 '>{product.discription}</h1>

    </div>


  );
}

export default Packagedetails;
