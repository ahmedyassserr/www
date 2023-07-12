import CardAll from './CardAll';



const All = ({products}) => {
  

    return (
        <div className='container' >
             
            <div className='my-3 py-3 text-center m-auto  hero '>
          


                <h1>ALL PRODUCTS</h1>
            </div>
            <hr className='m-auto fs-6 w-75 h-75 py-1 '/>
            <div className="row">
            {
                products.map((products)=>{
                    return    <CardAll  products={products} />
                      
                })
            }
            </div>         


        </div>
    );
}
export default All;
