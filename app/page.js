"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import qrImage from "../Khay_Qr.jpg";

const marqueeItems = [
  "Mỗi cú quét QR là một khoản đầu tư trực tiếp vào tương lai của sản phẩm này.",
  "Đồng hành cùng hành trình sáng tạo — Đổi lấy giá trị thực tiễn.",
  "Tối ưu trải nghiệm: Một chạm duy nhất, kết nối ngân hàng tức thì.",
  "Cảm ơn sự hiện diện của bạn. Đồng điệu tư duy là khởi đầu của mọi kiệt tác.",
];

const donationTiers = [
  { amount: 10000, label: "Tách Trà Khởi Động", emoji: "⚡", tag: "Kích Hoạt" },
  { amount: 29000, label: "Năng Lượng Sáng Tạo", emoji: "🔥", tag: "Tiếp Sức" },
  { amount: 50000, label: "Cú Hích Tinh Thần", emoji: "🚀", tag: "Tăng Tốc" },
  { amount: 100000, label: "Nhà Đồng Hành", emoji: "👑", tag: "Tiên Phong" },
  {
    amount: 200000,
    label: "Người anh em thiện lành",
    emoji: "💎",
    tag: "Chuyên Nghiệp",
  },
  {
    amount: 500000,
    label: "Bố ơi, con cảm ơn",
    emoji: "🏛️",
    tag: "Huyền Thoại",
  },
];

const decorativeIcons = ["🌸", "🕊️", "🦋", "🌷", "🪽", "🌼", "🐦", "✨"];

function formatCurrency(amount) {
  return new Intl.NumberFormat("vi-VN").format(amount) + " VNĐ";
}

export default function HomePage() {
  const [selectedAmount, setSelectedAmount] = useState(donationTiers[2].amount);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedTier = useMemo(
    () =>
      donationTiers.find((tier) => tier.amount === selectedAmount) ||
      donationTiers[0],
    [selectedAmount],
  );

  const openModal = (amount = selectedAmount) => {
    setSelectedAmount(amount);
    setIsModalOpen(true);
  };

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <div className="floating-layer" aria-hidden="true">
        {decorativeIcons.map((icon, index) => (
          <span
            key={`${icon}-${index}`}
            className={`floating-decoration floating-decoration-${index % 4}`}
            style={{
              left: `${6 + index * 11}%`,
              animationDelay: `${index * 1.2}s`,
            }}
          >
            {icon}
          </span>
        ))}
      </div>

      <section className="marquee" aria-label="Thông báo nổi bật">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`} className="marquee-item">
              {item}
            </span>
          ))}
        </div>
      </section>

      <div className="content-grid">
        <section className="hero-card card-surface">
          <div className="hero-badge">FEED SENSEI</div>
          <p className="eyebrow">Lá lành đùm lá rách</p>
          <h1>Tài trợ dự án. Nâng cao tình nghĩa anh em.</h1>
          <p className="hero-copy">
            Donate cho khầy vibecode, góp tí rau tí bún cho anh em trong nhà.
            Mình có bát cơm thì anh em mình có bát cháo __NSND School Mini__.
          </p>

          <div className="highlight-row">
            <div className="highlight-pill">Nuôi Khầy</div>
            <div className="highlight-pill">Chỗ dựa tinh thần cho ae</div>
            <div className="highlight-pill">Góp tí rau tí bún</div>
          </div>

          <div className="hero-actions">
            <button
              className="primary-button"
              type="button"
              onClick={() => openModal()}
            >
              Donate
            </button>
            <a className="secondary-button" href="#tiers">
              Một số option gợi ý
            </a>
          </div>
        </section>

        <aside className="profile-card card-surface">
          <div className="avatar-wrap">
            <div className="avatar">🧑‍💻</div>
            <span className="status-badge">active</span>
          </div>
          <h2>Fact</h2>
          <p>
            Tiền chết không mang theo được, tình nghĩa
            anh em cũng chỉ tồn tại ở trên trái đất này thôi. Nhưng mà trải nghiệm cuộc đời
            là mãi mãi, nuôi khầy để không luyến tiếc.
        
          </p>
          <div className="story-note">
            Mọi sự đóng góp đều là động lực thúc đẩy nền kinh tế
          </div>
        </aside>
      </div>

      <section className="support-grid">
        <div className="card-surface support-card" id="tiers">
          <h2>Mức gợi ý</h2>
          <div className="tier-grid">
            {donationTiers.map((tier) => {
              const isSelected = tier.amount === selectedAmount;

              return (
                <button
                  key={tier.amount}
                  type="button"
                  className={`tier-card ${isSelected ? "selected" : ""}`}
                  onClick={() => openModal(tier.amount)}
                >
                  <div className="tier-tag">{tier.tag}</div>
                  <div className="tier-emoji">{tier.emoji}</div>
                  <div className="tier-amount">
                    {formatCurrency(tier.amount)}
                  </div>
                  <div className="tier-label">{tier.label}</div>
                </button>
              );
            })}
          </div>
        </div>
        <section className="card-surface recent-card">
          <div className="recent-header">
            <h2>Tuyên ngôn Giá trị</h2>
            <span>Tinh tế · Minh bạch · Tốc độ</span>
          </div>
          <div className="empty-state">
            <div className="empty-emoji">✨</div>
            <h3>Minium donation 10.000 VND</h3>
            <p>
              Quan trọng là tấm lòng
            </p>
          </div>
        </section>
      </section>

      {isModalOpen ? (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="qr-modal"
            role="dialog"
            aria-modal="true"
            aria-label="QR donate"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              aria-label="Đóng modal"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>

            <div className="modal-orbits" aria-hidden="true">
              {decorativeIcons.map((icon, index) => (
                <span
                  key={`modal-${icon}-${index}`}
                  className={`orbit-icon orbit-icon-${index % 4}`}
                  style={{
                    left: `${8 + index * 10}%`,
                    animationDelay: `${index * 0.25}s`,
                  }}
                >
                  {icon}
                </span>
              ))}
            </div>

            <div className="qr-header">
              <span className="qr-kicker">Nuôi Khầy</span>

              <p>
                Tấm lòng:{" "}
                <strong>{formatCurrency(selectedTier.amount)}</strong>
              </p>
            </div>

            <div className="qr-stage">
              <div className="qr-glow qr-glow-a" aria-hidden="true" />
              <div className="qr-glow qr-glow-b" aria-hidden="true" />
              <div className="qr-glow qr-glow-c" aria-hidden="true" />
              <div className="qr-card-shell">
                <Image
                  src={qrImage}
                  alt="QR nuôi tôi"
                  priority
                  className="qr-image"
                />
              </div>
              <div className="qr-amount">
                {formatCurrency(selectedTier.amount)}
              </div>
              <div className="qr-subtitle">Móc điện thoại ra quét đê</div>
            </div>
          </div>
        </div>
      ) : null}

      <footer className="footer">
        <p>From cái bang with love</p>
        <p>
          Còn chần chờ chi mà không nuôi khầy đi các em
        </p>
      </footer>
    </main>
  );
}
