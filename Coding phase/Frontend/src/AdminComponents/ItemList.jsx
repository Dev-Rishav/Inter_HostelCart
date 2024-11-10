import React from 'react';


function ItemList({ items }) {
  // console.log(items);
  
  return (
    // <div className="p-4">
      
    //   <ul className="space-y-3">
    //     {items.map((item) => (
          
    //       <li key={item.itemno} className="bg-gray-100 p-3 rounded-lg shadow-sm">
    //         <p className="font-medium">{item.itemname}</p>
    //         <p className="text-sm text-gray-500">{item.itemdescription}</p>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <section class=" p-5 md:pt-20  ">
      {items.map((item)=>(
          <article
          class=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto  group cursor-pointer transform duration-500 hover:-translate-y-1 mt-3">
          <img class="w-full max-h-[200px] object-cover md:w-52" src={item.itemphotourl} alt=""/>
          <div class="">
              <div class="p-5 pb-10">
                  <h1 class="text-2xl font-semibold text-gray-800 mt-4">
                  {item.itemname}  
                  </h1>
                  <h1 class="text-xl font-semibold text-red-500 mt-2">
                        MRP: {item.itemprice}  
                  </h1>
                  <p class="text-xl text-gray-400 mt-2 leading-relaxed">
                  {item.itemdescription}
                  </p>
              </div>
              
          </div>
      </article>
      ))}
    
</section>
  );
}

export default ItemList;