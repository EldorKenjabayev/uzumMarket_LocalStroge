import React, { useState } from 'react';
import basket from '../NavComp/navimg/Vector.png';
import heart from '../NavComp/navimg/image.png';
import './product.css';
import 'boxicons'

export default function Product() {
  const [product, setProduct] = useState([
    {
        imgProduct:'https://images.uzum.uz/chm61dlenntd8rf9uj40/t_product_540_high.jpg#1687435076763',
        name:'Мука пшеничная Melek, первый сорт, 1 кг',
        stars:'5.0',
        credit:'600 сум/мес',
        price:'5000 сум',
        priceBacket:5000,
        BackerNewPrice: 5000,
        count: 1
    },
    {
        imgProduct:'https://images.uzum.uz/ciam7b3ltlh4bk4mau30/t_product_540_high.jpg#1687727635633',
        name:'Подсолнечное масло Щедрое лето, рафинированное, 5 л',
        stars:'5.0',
        credit:'11500 сум/мес',
        price:'96000 сум',
        priceBacket:96000,
        BackerNewPrice: 96000,
        count: 1
    },
    {
        imgProduct:'https://images.uzum.uz/ci9ertlenntd8rfc09og/t_product_540_high.jpg#1687527925550',
        name:'Шланг для полива , чудо-шланг, удлиняющийся шланг!',
        stars:'5.0',
        credit:'5400 сум/мес',
        price:'45000 сум',
        priceBacket:45000,
        BackerNewPrice: 45000,
        count: 1
    },
    {
        imgProduct:'https://images.uzum.uz/ce880a2vtie1lhbenem0/original.jpg',
        name:'Кофе в зернах Lavazza Crema e Aroma Espresso, 1 кг',
        stars:'5.0',
        credit:'30000 сум/мес',
        price:'250000 сум',
        priceBacket:25000,
        BackerNewPrice: 25000,
        count: 1
    },
    {
        imgProduct:'https://images.uzum.uz/ch9m4ph25ku4lq0ob3vg/t_product_540_high.jpg#1687527925552',
        name:'Портативный мини вентилятор 2в1 с быстрой USB зарядкой и подставкой для телефона',
        stars:'5.0',
        credit:'3960 сум/мес',
        price:'33000 сум',
        priceBacket:33000,
        BackerNewPrice: 33000,
        count: 1
    },
    {
        imgProduct:'https://images.uzum.uz/ci99c83ltlh4bk4m5j8g/t_product_540_high.jpg#1687527925554',
        name:'Рис "Лазер" Chempion Хорезм, высший сорт, 900 г',
        stars:'5.0',
        credit:'1920 сум/мес',
        price:'16000 сум',
        priceBacket:16000,
        count: 1
    },
    {
        imgProduct:'https://images.uzum.uz/cg2pqevg49devoa9ru00/t_product_540_high.jpg#1687527925556',
        name:'Сахар Chempion, 900 г',
        stars:'5.0',
        credit:'1440 сум/мес',
        price:'12000 сум',
        priceBacket:12000,
        BackerNewPrice: 12000,
        count: 1
    },
    {
        imgProduct:'https://images.uzum.uz/ci3ckn75d7kom1thkbn0/t_product_540_high.jpg#1687527925557',
        name:'Очки солнечные в винтажном стиле, солнцезащитные с УФ-защитой',
        stars:'5.0',
        credit:'3480 сум/мес',
        price:'29000 сум',
        priceBacket:29000,
        BackerNewPrice: 29000,
        count: 1
    },
    {
        imgProduct:'https://images.uzum.uz/ceimca0v1htd23ajfmag/t_product_540_high.jpg#1687527925558',
        name:'НОВОТЕРСКАЯ ЦЕЛЕБНАЯ лечебно-столовая вода газированная стекло 0,5л Элита',
        stars:'5.0',
        credit:'840 сум/мес',
        price:'7000 сум',
        priceBacket:7000,
        BackerNewPrice: 7000,
        count: 1
    },
    {
        imgProduct:'https://images.uzum.uz/ci64cpjltlh4bk4lr1ag/t_product_540_high.jpg#1687527925559',
        name:'Охладитель воздуха Roniq Oasis Max 7 л',
        stars:'5.0',
        credit:'95880 сум/мес',
        price:'799000 сум',
        priceBacket:799000,
        BackerNewPrice: 799000,
        count: 1
    },
    {
        imgProduct:'https://images.uzum.uz/chb2m916i6dim8r70h10/t_product_540_high.jpg#1687527925562',
        name:'Беспроводные сенсорные наушники TWS i14, i15, i16, i18, i12, i11 с микрофоном и кейсом',
        stars:'5.0',
        credit:'3600 сум/мес',
        price:'33000 сум',
        priceBacket:33000,
        BackerNewPrice: 33000,
        count: 1
    },
    {
        imgProduct:'https://images.uzum.uz/ci64lij6edfostih3hsg/t_product_540_high.jpg#1687527925563',
        name:'Электрический чайник двухслойный из нержавеющей стали Artel 1.8л ART-KE-204',
        stars:'5.0',
        credit:'11800 сум/мес',
        price:'99000 сум',
        priceBacket:99000,
        BackerNewPrice: 99000,
        count: 1
    },
    {
        imgProduct:'https://images.uzum.uz/ci98p2denntd8rfbv1j0/t_product_540_high.jpg#1687527925567',
        name:'Макаронные изделия Bottega del Sole, спирали, 400 г',
        stars:'5.0',
        credit:'720 сум/мес',
        price:'6000 сум',
        priceBacket:6000,
        BackerNewPrice: 6000,
        count: 1
    },
    {
        imgProduct:'https://images.uzum.uz/cdgf9abb3ho5lmuraoq0/t_product_540_high.jpg#1687527925569',
        name:'НОВОТЕРСКАЯ ЦЕЛЕБНАЯ лечебно-столовая вода газированная стекло 0,5л Элита',
        stars:'5.0',
        credit:'650 сум/мес',
        price:'7000 сум',
        priceBacket:7000,
        BackerNewPrice: 7000,
        count: 1
    },
    {
        imgProduct:'https://images.uzum.uz/cg69rafg49devoaab370/t_product_540_high.jpg#1687527925573',
        name:'Средство для очистки воды в бассейне Anavcountin-aqua, без хлора, 1 л',
        stars:'5.0',
        credit:'24000 сум/мес',
        price:'200000 сум',
        priceBacket:200000,
        BackerNewPrice: 200000,
        count: 1
    },
  ]);

  const [productArr, setProductArr] = useState(
    JSON.parse(localStorage.getItem('IzbranArr')) || []
  );
  const [BacketArr, setBacketArr] = useState(
    JSON.parse(localStorage.getItem('BacketArr')) || []
  );

  const HeardBtn = (item) => {
    const isAlreadySelected = productArr.some((selectedItem) => selectedItem.name === item.name);
    if (!isAlreadySelected) {
      setProductArr((prevArr) => [...prevArr, item]);
      localStorage.setItem('IzbranArr', JSON.stringify([...productArr, item]));
    }
  };

  const BacketBTN = (item) => {
    const isAlreadySelected2 = BacketArr.some(
      (selectedItem) => selectedItem.name === item.name
    );
    if (!isAlreadySelected2) {
      setBacketArr((prevArr) => [...prevArr, item]);
      localStorage.setItem('BacketArr', JSON.stringify([...BacketArr, item]));
    }
  };
  
  const toggleSelected = (item) => {
    const updatedArr = productArr.includes(item)
      ? productArr.filter((selectedItem) => selectedItem !== item)
      : [...productArr, item];
  
    setProductArr(updatedArr);
    localStorage.setItem('IzbranArr', JSON.stringify(updatedArr));
  };
  
  

  return (
    <div>
      <div>
        <a href="">
          <h2
            style={{
              padding: '20px 20px',
              fontSize: '40px',
              color: '#000',
            }}
          >
            Распродажа
          </h2>
        </a>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px 2%',
          flexWrap: 'wrap',
          gap: '4vh',
        }}
      >
        {product.map((item, index) => (
          <div className="BoxProduct" key={index}>
            <div className="productImg">
              <img
                src={item.imgProduct}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px',
                  overflow: 'hcountden',
                }}
              />
               <box-icon
                name="heart"
                  className={productArr.includes(item) ? 'selected-heart' : ''}
                   style={{
                    cursor: 'pointer',
                        position: 'absolute',
                           top: '8px',
                          right: '4%',}}
                        onClick={() => toggleSelected(item)}
>              </box-icon>
              
            
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
                  src="data:image/svg+xml,%3csvg wcountth='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e"
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
                  }} onClick={()=>BacketBTN(item)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
