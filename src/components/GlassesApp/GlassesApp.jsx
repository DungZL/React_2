import React, { useState } from 'react';
import { dataGlasses } from '../../data/dataGlasses';
import backgroundImage from '../../img/glassesImage/background.jpg';
import modelImage from '../../img/glassesImage/model.jpg';
import './GlassesApp.css';

const GlassesApp = () => {
  // Khởi tạo state kính được chọn (mặc định lấy kính đầu tiên trong danh sách)
  const [selectedGlasses, setSelectedGlasses] = useState(dataGlasses[0]);

  // Hàm xử lý khi người dùng click chọn mẫu kính
  const handleSelectGlasses = (glasses) => {
    setSelectedGlasses(glasses);
  };

  return (
    <div
      className="glasses-app-wrapper"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Lớp phủ tối mờ toàn màn hình */}
      <div className="glasses-overlay-bg">
        {/* Header ứng dụng */}
        <header className="glasses-header">
          <h1>TRY GLASSES APP ONLINE</h1>
        </header>

        {/* Nội dung chính */}
        <main className="container flex-grow-1 d-flex flex-column justify-content-between">
          {/* Khu vực hiển thị 2 người mẫu đối chiếu */}
          <div className="models-container">
            {/* Người mẫu bên trái: Đeo kính đã chọn + Bảng thông tin */}
            <div className="model-box">
              <img
                src={modelImage}
                alt="Model with Glasses"
                className="model-photo"
              />

              {/* Kính thử đè lên khuôn mặt */}
              {selectedGlasses && (
                <img
                  src={selectedGlasses.url}
                  alt={selectedGlasses.name}
                  className="glasses-on-face"
                />
              )}

              {/* Lớp phủ thông tin chi tiết kính */}
              {selectedGlasses && (
                <div className="glasses-info-box">
                  <h3 className="glasses-info-name">{selectedGlasses.name}</h3>
                  <span className="glasses-info-price">
                    ${selectedGlasses.price}
                  </span>
                  <p className="glasses-info-desc">{selectedGlasses.desc}</p>
                </div>
              )}
            </div>

            {/* Người mẫu bên phải: Người mẫu gốc chưa đeo kính để so sánh */}
            <div className="model-box">
              <img
                src={modelImage}
                alt="Original Model"
                className="model-photo"
              />
            </div>
          </div>

          {/* Danh sách chọn kính bên dưới */}
          <section className="glasses-picker-box">
            <div className="glasses-grid">
              {dataGlasses.map((glasses) => {
                const isActive = selectedGlasses?.id === glasses.id;
                return (
                  <button
                    key={glasses.id}
                    type="button"
                    className={`glass-item ${isActive ? 'active' : ''}`}
                    onClick={() => handleSelectGlasses(glasses)}
                    title={glasses.name}
                  >
                    <img
                      src={glasses.icon || glasses.url}
                      alt={glasses.name}
                    />
                  </button>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default GlassesApp;
