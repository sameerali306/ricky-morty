import React from 'react';
import { Pagination as PaginationAnt } from 'antd';


const itemRender = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
};

function PaginationComponent() {
  return <div className="pagination-container">
  <PaginationAnt 
    total={500} 
    itemRender={itemRender} 
    className="pagination" 
  />
</div>}

export default PaginationComponent;



