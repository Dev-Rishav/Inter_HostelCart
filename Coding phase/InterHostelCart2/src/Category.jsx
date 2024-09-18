import React from 'react';
import styles from './Category.module.css';

const Category = ({categories}) => 
{
  const BrowseForMore = (categoryId) => {   
  };

  return (
    <>
    <h1 className={styles['heading']}>Category</h1>
    <div className={styles['container']}>
      {categories.map((category) => (
        <div 
        data-aos="fade-up"
        data-aos-delay={category.aosDelay}
        key={category.id}  className={`${styles['category-card']} ${styles[`category-${category.id}`]}`}>
           <div className={styles['glass']}></div>
          <div className={styles['text']}>
            <h5>Explore More</h5>
            <h3>{category.name}</h3>
            <button className={styles['button']} onClick={() => BrowseForMore(category.id)}>Browse</button>
          </div>
          <div className={styles['picture']}>
            <img src={category.image} alt={category.name} className={styles['image']}/>
          </div>
        </div>
     ))}
    </div>
   </>
  );
};
export default Category;