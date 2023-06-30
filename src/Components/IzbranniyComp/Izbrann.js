import React, { useEffect, useState } from 'react';
import basket from '../NavComp/navimg/Vector.png';
import heart from '../NavComp/navimg/image.png';

export default function Izbrann() {
  const [Izbrann, setIzbrann] = useState([]);

  useEffect(() => {
    let arrIzbran = JSON.parse(localStorage.getItem('IzbranArr'));
    setIzbrann(arrIzbran || []); 
  }, []);

  const HeardBtn = (index) => {
    const updatedArr = [...Izbrann];
    updatedArr.splice(index, 1);  
    localStorage.setItem('IzbranArr',  JSON.stringify(updatedArr));
    setIzbrann(updatedArr);
  };

  return (
    <div
      style={{
        display: 'flex',
        padding: '10px 2%',
        flexWrap: 'wrap',
        gap: '4vh',
      }}
    >
      {Izbrann.length === 0 ? (
        <div style={{
          width:"100%",
          height:"70vh",
          display:"flex",
          justifyContent:'center',
          alignItems:'center'
        }}>
          <div style={{
             display:"flex",
             justifyContent:'center',
             alignItems:'center',
             flexDirection:"column"
          }}>
          <img src="https://uzum.uz/static/img/hearts.cf414be.png" alt="img" style={{
            width:'25%'
          }}/>
          <h2>Добавьте то, что понравилось</h2> <br />
          <h4>Нажмите на ♡ в товаре. Войдите в аккаунт и всё избранное сохранится</h4>
          </div>
        </div>
      ) : (
        Izbrann.map((item, index) => (
          <div className="BoxProduct" key={index}>
            <div className="productImg">
              <img
                src={item.imgProduct}
                alt=""
                style={{
                  width: '98.9%',
                  height: '100%',
                  borderRadius: '10px',
                  overflow: 'hidden',
                }}
              />
              <img
                src={heart}
                alt=""
                onClick={() => HeardBtn(index)}
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  top: '8px',
                  right: '4%',
                }}
              />
            </div>
            <div>
              <p
                style={{
                  fontSize: '13.8px',
                  padding: '7px 10px',
                  marginLeft: '2px',
                  fontWeight: '500',
                }}
              >
                {item.name}
              </p>
              <div
                style={{
                  display: 'flex',
                  marginLeft: '10px',
                }}
              >
                <img
                  src="data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e"
                  alt=""
                />
                <p>{item.stars}</p>
              </div>
              <p
                style={{
                  width: '50%',
                  backgroundColor: '#FFFF00',
                  padding: '2px 3px',
                  borderRadius: '5px',
                  marginLeft: '10px',
                }}
              >
                {item.credit}
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '3px 10px 10px 10px',
                }}
              >
                <p>{item.price}</p>
                <img
                  src={basket}
                  alt=""
                  style={{
                    cursor: 'pointer',
                    perspective: '1000px',
                  }}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
