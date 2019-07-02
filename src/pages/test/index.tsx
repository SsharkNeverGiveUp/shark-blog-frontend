import React from 'react';
// import LoginModal from '@/components/LoginModal';
const list = [{ a: '1' }, { b: '2' }];

export default (): React.ReactNode => {
  return (
    <div>
      {list.map((item, index) => {
        if (index === 0) {
          return <div key={index}>{item.a}</div>;
        } else {
          return <div key={index}>{item.b}</div>;
        }
      })}
    </div>
  );
};