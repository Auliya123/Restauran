import React from 'react';
import mainImage from "../assets/images/aneka-makanan.jpg";

const Welcome = () => (
    <div className="container-fluid">
        <div className="row" style={{ marginBottom: 30 }}>
          <img src={mainImage} width="100%" height="10%" alt=""></img>
        </div>
        <div className="row">
          <div className="col">
            <div className="card text-white bg-success mb-3 text-center" >
              <div className="card-header"><h1>Selamat Datang di Food Paradise</h1></div>
              <div className="card-body">
                <h4 className="card-title">Cara Termudah mencari restauran dan makanan</h4>
                <p className="card-text">Anda dapat mendapatkan informasi restauran,cafe, dan kuliner dengan mudah</p>
                <p className="card-text">Mulai dengan memilih kota atau mencari nama kota.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )


export default Welcome;
