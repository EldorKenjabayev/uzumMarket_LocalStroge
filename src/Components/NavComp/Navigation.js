import React from 'react'
import Navlogo from './navimg/logotip.png'
import Catalog from './navimg/div.catalog-icon.png'
import './navigation.css'
import SearchIcon from './navimg/search.png'
import user from './navimg/svg.png'
import izbran from './navimg/image.png'
import basket from './navimg/Vector.png'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div>
        <div className="Navigation">
            <div className="NavLogo" style={{
                  width:'20%'
                }}>
                <Link to={'/'}>
                <img src={Navlogo} alt="" />
                </Link>
            </div>
            <div className="NavSearch"style={{
              width:'50%',
              display:'flex',
              justifyContent:'space-between'
            }}>
              <button style={{
                width:'20%'
              }}>
                <img src={Catalog} alt="" />
                <p>Каталог</p>
              </button><br />
              <div style={{
                width:'75%',
                display:'flex',
                alignItems:'center',
                border:'2px solid #e8e6e6',
                borderRadius:"5px"
              }}>
                <input type="text" placeholder='Искать товары и категории' style={{
                  width:'90%',
                  fontSize:'20px',
                  padding:'8px 10px 8px 12px',
                  border:'none'
                }}/>
                <button style={{
                  height:'100%'
                }}>
                  <img src={SearchIcon} alt="" style={{
                    width:'40%'
                  }}/>
                </button>
              </div>
            </div>
            <div className="NavBtn">
              <button>
                <img src={user} alt="" />
                <p>
                Войти
                </p>
              </button><br />
              <Link to={'izbrann'}>
              <button style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems:'center',
                cursor:'pointer'
              }}> 
                <img src={izbran} style={{
                  position:'relative',
                  top:'4px'
                }} alt="" />
                <p>Избранное</p>   
              </button> 
              </Link>
                <Link to={'Backet'}>
              <button style={{
                paddingTop:'15px'
              }}>
                <img src={basket} alt="" />
                <p>Корзина</p>
              </button>
                </Link>
            </div>
        </div>
    </div>
  )
}
