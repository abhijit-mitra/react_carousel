import React, {useState} from 'react';
import {Carousel, MultiSelect} from './components/organisms';
import {allProducts, allCategories} from './constants';
import './App.css';

function App() {
  const [filteredList, setFilteredList] = useState(allProducts);
  const handleSelect=(selectedList)=>{
    const filteredData = allProducts.filter((eachProduct)=>(eachProduct.categoryIds.some(categoryId=>(selectedList.some((eachSelectedCategory)=>(eachSelectedCategory.id===categoryId))))));
    const updateStateData = filteredData.length===0?allProducts:filteredData;
    setFilteredList(updateStateData);
  }
  return (
    <div className="p-5">
      <div className="position-relative mb-5">
        <MultiSelect options={allCategories} displayValue='name' onSelect={handleSelect} onRemove={handleSelect}/>
      </div>
      <Carousel data={filteredList}/>
    </div>
  );
}

export default App;
