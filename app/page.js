import Image from "next/image";
import qrImage from "../src/Khay_Qr.jpg";

const marqueeItems = [
  "Nuôi dev để bớt đói, bớt bug, bớt ngủ gục trước màn hình",
  "Link donate cũ đã bị loại bỏ, giờ chỉ còn QR cục bộ",
  "Quét QR là cách nhanh nhất để tiếp máu cho dự án này",
  "Cảm ơn bạn đã ghé qua, nhìn thôi cũng thấy ấm lòng",
];

const donationTiers = [
  { amount: "10k", label: "1 ly trà đá", emoji: "🥤" },
  { amount: "29k", label: "1 tô phở", emoji: "🍜" },
  { amount: "50k", label: "Cà phê 1 tuần", emoji: "☕" },
  { amount: "100k", label: "Pizza party", emoji: "🍕" },
  { amount: "200k", label: "1 game mới", emoji: "🎮" },
  { amount: "500k", label: "VIP support", emoji: "💎" },
];

const floatingEmojis = ["🍜", "💰", "☕", "🎮", "💻", "🌙", "⭐", "🍕"];

const highlights = [
  "Deploy nhanh trên Vercel",
  "Không còn link donate hỏng",
  "QR hiển thị trực tiếp từ file Khay_Qr.jpg",
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="floating-layer" aria-hidden="true">
        {floatingEmojis.map((emoji, index) => (
          <span
            key={`${emoji}-${index}`}
            className="floating-emoji"
            style={{
              left: `${10 + index * 11}%`,
              animationDelay: `${index * 1.5}s`,
            }}
          >
            {emoji}
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
          <div className="hero-badge">Next.js + Vercel ready</div>
          <p className="eyebrow">Feed Tôi</p>
          <h1>Nuôi tôi bằng QR, không cần link donate bị lỗi nữa.</h1>
          <p className="hero-copy">
            Bản mới được dựng lại bằng Next.js để deploy nhanh trên Vercel. Các
            link donate cũ đã bị loại bỏ, thay bằng QR cục bộ từ file{" "}
            <span>Khay_Qr.jpg</span>.
          </p>

          <div className="highlight-row">
            {highlights.map((item) => (
              <div key={item} className="highlight-pill">
                {item}
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <a className="primary-button" href="#qr-section">
              Quét QR ngay
            </a>
            <a className="secondary-button" href="#tiers">
              Xem mức gợi ý
            </a>
          </div>
        </section>

        <aside className="profile-card card-surface">
          <div className="avatar-wrap">
            <div className="avatar">🧑‍💻</div>
            <span className="status-badge">đói</span>
          </div>
          <h2>Mah story</h2>
          <p>
            Xin chào, tôi là một code đớ đang loay hoay giữa bug, deadline và
            cơn đói. Nếu bạn thích dự án này, quét QR để tiếp sức cho một dev
            còn tỉnh táo.
          </p>
          <div className="story-note">
            Cơm tấm, cà phê và một chút động lực là đủ để tiếp tục debug đến 3
            giờ sáng.
          </div>
        </aside>
      </div>

      <section className="support-grid">
        <div className="card-surface support-card" id="tiers">
          <h2>Mức gợi ý</h2>
          <div className="tier-grid">
            {donationTiers.map((tier) => (
              <div key={tier.amount} className="tier-card">
                <div className="tier-emoji">{tier.emoji}</div>
                <div className="tier-amount">{tier.amount}</div>
                <div className="tier-label">{tier.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-surface qr-card" id="qr-section">
          <h2>QR nuôi tôi</h2>
          <p>
            Mở app ngân hàng hoặc ví, quét trực tiếp ảnh bên dưới. Không còn nút
            donate ngoài nên không bị lỗi chuyển hướng nữa.
          </p>
          <div className="qr-frame">
            <Image src={qrImage} alt="Khay QR" priority className="qr-image" />
          </div>
          <div className="qr-caption">Khay_Qr.jpg</div>
        </div>
      </section>

      <section className="card-surface recent-card">
        <div className="recent-header">
          <h2>Những người tốt bụng</h2>
          <span>chưa có dữ liệu</span>
        </div>
        <div className="empty-state">
          <div className="empty-emoji">😢</div>
          <h3>Chưa có ai nuôi tôi...</h3>
          <p>“Một đồng cũng là tình thương, hai đồng cũng là yêu mến.”</p>
        </div>
      </section>

      <footer className="footer">
        <p>Made with 💔 by I am</p>
        <p>
          Trang này được tối ưu để deploy nhanh trên Vercel với Next.js App
          Router.
        </p>
        <p>Link donate cũ đã bị bỏ, QR là đường duy nhất còn hoạt động.</p>
      </footer>
    </main>
  );
}
