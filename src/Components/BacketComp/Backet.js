import React, { useEffect, useState } from 'react';
import './backet.css';
import { Link } from 'react-router-dom';

export default function Backet() {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    let basketArr = JSON.parse(localStorage.getItem('BacketArr'));
    setBasket(basketArr || []);
  }, []);

  const decreaseItemCount = (item) => {
    if (item.count > 1) {
      item.count--;
      item.priceBacket = item.BackerNewPrice * item.count;
      setBasket([...basket]);
      localStorage.setItem('BacketArr', JSON.stringify(basket));
    }
  };
  
  const increaseItemCount = (item) => {
    item.count++;
    item.priceBacket = item.BackerNewPrice * item.count;
    setBasket([...basket]);
    localStorage.setItem('BacketArr', JSON.stringify(basket));
  };
  
  const removeItem = (item) => {
    const updatedBasket = basket.filter((basketItem) => basketItem !== item);
    setBasket(updatedBasket);
    localStorage.setItem('BacketArr', JSON.stringify(updatedBasket));
  };

  const totalAmount = basket.reduce((total, item) => total + item.priceBacket, 0);

  return (
    <div>
      <h2 style={{ paddingBottom: '3vh' }}>Корзина</h2>
      <div style={{
        display:'flex',
        justifyContent:'space-between',
        paddingRight:'1vw'
      }}>
        <div style={{
          width:'65%'
        }}>
          {
            basket.length === 0 ? (
              <div style={{
                width:"100vw",
                height:'70vh',
                alignItems:'center',
                display:'flex',
                justifyContent:"center",
                flexDirection:'column',

              }}>
                <img src="https://uzum.uz/static/img/shopocat.490a4a1.png" alt="" style={{
                  width:'10%'
                }} />
                <h3>В корзине пока нет товаров</h3>
                <p>Начните с подборок на главной странице или найдите нужный товар через поиск</p> <br /><br />
                <Link to={'/'}>
                <a href="" style={{
                  border:"1px solid transparent",
                  padding:"5px 12px",
                  fontWeight:'600',
                  textAlign:'center',
                  color:'#fff',
                  backgroundColor:'#6E00FF',
                  borderRadius:'5px'
                }} > На главную</a>
                </Link>
              </div>
            ) : (
              basket.map((item, index) => (
                <div
                  key={index}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    gap: '2vw',
                    marginBottom: '3vh',
                    marginLeft: '2vw',
                    borderRadius: '15px',
                    padding: '20px 10px',
                    border: '1px solid #000',
                  }}
                >
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                    }}
                  >
                    <img
                      className="basketImg"
                      src={item.imgProduct}
                      alt=""
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      width: '80%',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '3vw',
                    }}
                  >
                    <div className="ProductName">
                      <p>{item.name}</p>
                    </div>
                    <div
                      className="BTNCount"
                      style={{
                        height: '30%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1vw',
                      }}
                    >
                      <button onClick={() => decreaseItemCount(item)}>-</button>
                      <h3>{item.count}</h3>
                      <button onClick={() => increaseItemCount(item)}>+</button>
                    </div>
                    <div className="price" style={{
                      padding:'5px 20px',
                      textAlign:'center'
                    }}>
                      <h3>{`${item.priceBacket} сум`}</h3>
                    </div>
                    <div
                      className="clear"
                      style={{
                        width: '15%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '.5vw',
                        border: '1px solid transparent',
                        padding: '5px 15px',
                        cursor: 'pointer',
                        borderRadius: '10px',
                        marginLeft: '2vh',
                        background: 'rgb(206, 206, 206)',
                      }}
                      onClick={() => removeItem(item)}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
                        alt=""
                        style={{
                          width: '18%',
                        }}
                      />
                      <p>Удалить</p>
                    </div>
                  </div>
                </div>
              ))
            )
          }
        </div>
        {basket.length > 0 && (
          <div className="TotalBacket" style={{
            width:'25%',
            height:'50vh',
            marginRight:'2vw',
            padding:"15px 20px",
            borderRadius:"15px",
            border:'1px solid transparent',
            boxShadow:".7px .7px .7px .5px #000",
            backgroundColor:'#FBFDF9'
          }}>
            <div> <br />
              <h2>Ваш заказ</h2><br />
              <p>{`Товары: ${basket.length}`}</p><br />
              <h3>{`Итого: ${totalAmount} сум`}</h3> <br /><br />
              <a href="" style={{
                fontSize:'16px',
                border:'1px solid #000',
                padding:"10px 25px",
                  fontWeight:'600',
                  textAlign:'center',
                  color:'#fff',
                  backgroundColor:'#6E00FF',
                  borderRadius:'5px',
                  marginLeft:"2vw"
              }}> Перейти к оформлению</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
