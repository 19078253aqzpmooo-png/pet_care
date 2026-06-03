"use client";

import { useState } from "react";

const heroSlides = [
  "/assets/store-reception-carousel.png",
  "/assets/store-bathing-carousel.png",
  "/assets/store-styling-carousel.png",
];

const services = [
  {
    icon: "洗",
    title: "基础香波洗护",
    text: "按毛发类型选择香波，包含吹干、梳毛、耳部清洁和足底护理。",
  },
  {
    icon: "剪",
    title: "精修造型",
    text: "泰迪装、圆脸修剪、局部去毛结、脚型修整，保留自然可爱的轮廓。",
  },
  {
    icon: "护",
    title: "皮毛护理",
    text: "针对干燥、打结、换毛季增加护毛乳、深层梳理和低刺激护理。",
  },
  {
    icon: "净",
    title: "除味洁净",
    text: "适合户外玩耍后、雨天返家或体味明显的宠物，清洁更彻底。",
  },
];

const prices = [
  {
    title: "小型犬基础洗护",
    text: "香波浴、吹干、耳部清洁、剪指甲、脚底毛",
    price: "¥88 起",
  },
  {
    title: "中大型犬深层洗护",
    text: "加强梳毛、除浮毛、护毛乳、清爽除味",
    price: "¥168 起",
  },
  {
    title: "猫咪低应激洗护",
    text: "预约制安静房间、低噪吹干、温和清洁",
    price: "¥158 起",
  },
  {
    title: "精修美容套餐",
    text: "含基础洗护、全身造型、局部精修和护理建议",
    price: "¥228 起",
  },
];

const processSteps = [
  {
    step: "01",
    title: "到店评估",
    text: "确认体重、毛量、皮肤状态和近期生活习惯。",
  },
  {
    step: "02",
    title: "分区清洁",
    text: "耳、爪、身体分步护理，敏感部位降低刺激。",
  },
  {
    step: "03",
    title: "吹干梳理",
    text: "低噪设备配合手工梳毛，减少拉扯和紧张。",
  },
  {
    step: "04",
    title: "交付建议",
    text: "说明护理结果，并给出居家梳毛和下次洗护建议。",
  },
];

const reviews = [
  {
    text: "家里小狗以前很怕吹风，这次护理师一直安抚，出来香香软软的，状态也很好。",
    author: "李女士 · 柯基主人",
  },
  {
    text: "猫咪洗护全程预约制，没有排队吵闹，耳朵和爪子都清理得很细。",
    author: "陈先生 · 布偶猫主人",
  },
  {
    text: "每次都会提醒皮肤状态和换毛情况，价目也清晰，没有临时乱加项目。",
    author: "周女士 · 贵宾犬主人",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function showSlide(index) {
    setCurrentSlide((index + heroSlides.length) % heroSlides.length);
  }

  return (
    <>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="泡泡爪印宠物洗护首页">
          <span className="brand-mark">爪</span>
          <span>泡泡爪印宠物洗护</span>
        </a>
        <nav className="nav" aria-label="主导航">
          <a href="#services">服务</a>
          <a href="#price">价目</a>
          <a href="#process">流程</a>
          <a href="#contact">到店</a>
        </nav>
        <a className="phone" href="tel:400-886-0520">
          预约电话
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-carousel" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <div
              className={`hero-slide${index === currentSlide ? " is-active" : ""}`}
              key={slide}
              style={{ backgroundImage: `url("${slide}")` }}
            />
          ))}
        </div>
        <div className="hero-controls" aria-label="首屏图片切换">
          <button
            className="hero-arrow"
            type="button"
            onClick={() => showSlide(currentSlide - 1)}
            aria-label="上一张图片"
          >
            &lsaquo;
          </button>
          {heroSlides.map((slide, index) => (
            <button
              className={`hero-dot${index === currentSlide ? " is-active" : ""}`}
              type="button"
              key={slide}
              onClick={() => showSlide(index)}
              aria-label={`第 ${index + 1} 张图片`}
            />
          ))}
          <button
            className="hero-arrow"
            type="button"
            onClick={() => showSlide(currentSlide + 1)}
            aria-label="下一张图片"
          >
            &rsaquo;
          </button>
        </div>
        <div className="hero-content">
          <p className="eyebrow">一宠一浴盆 · 透明护理 · 温柔手法</p>
          <h1>把洗澡这件事，变成安心的小享受。</h1>
          <p>
            泡泡爪印为猫狗提供洗护、美容、除味、护毛和基础健康观察。全程分区消毒，
            护理师会按毛量、皮肤状态和性格安排专属流程。
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#price">
              查看套餐
            </a>
            <a className="btn btn-secondary" href="#contact">
              获取路线
            </a>
          </div>
          <div className="stats" aria-label="门店亮点">
            <div className="stat">
              <strong>30min</strong>
              <span>最快基础洗护</span>
            </div>
            <div className="stat">
              <strong>4.9</strong>
              <span>顾客平均评分</span>
            </div>
            <div className="stat">
              <strong>1v1</strong>
              <span>单宠专属护理</span>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section id="services">
          <div className="section-head">
            <h2>常用洗护服务</h2>
            <p>
              从日常清洁到造型修剪，护理前先做皮肤、耳道、爪垫和毛结检查，
              减少不适，也避免过度清洁。
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="price-band" id="price">
          <div className="section-head">
            <h2>套餐价目</h2>
            <p>
              价格按体型、毛量和毛结情况微调，到店评估后再开始护理，
              所有增项都会提前确认。
            </p>
          </div>
          <div className="price-wrap">
            <div className="price-table" aria-label="服务价目表">
              {prices.map((item) => (
                <div className="row" key={item.title}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <div className="price">{item.price}</div>
                </div>
              ))}
            </div>
            <aside className="booking">
              <h2>今日可预约</h2>
              <p>建议提前 2 小时预约，护理师会根据宠物状态预留合适时段。</p>
              <ul className="booking-list">
                <li>上午 10:30 · 剩余 2 位</li>
                <li>下午 14:00 · 剩余 1 位</li>
                <li>傍晚 18:30 · 剩余 3 位</li>
              </ul>
              <a className="btn btn-primary" href="tel:400-886-0520">
                立即电话预约
              </a>
            </aside>
          </div>
        </section>

        <section id="process">
          <div className="section-head">
            <h2>护理流程</h2>
            <p>
              每一步都可见、可问、可调整。我们会把异常皮肤、耳道分泌物或毛结位置记录给你。
            </p>
          </div>
          <div className="process">
            {processSteps.map((item) => (
              <article className="step" key={item.step}>
                <strong>{item.step}</strong>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="reviews-band">
          <div className="section-head">
            <h2>顾客反馈</h2>
            <p>稳定、干净、会沟通，是我们最看重的门店体验。</p>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review" key={review.author}>
                <div className="stars" aria-label="五星评价">
                  ★★★★★
                </div>
                <p>{review.text}</p>
                <b>{review.author}</b>
              </article>
            ))}
          </div>
        </section>

        <section id="contact">
          <div className="contact">
            <div className="contact-info">
              <h2>到店信息</h2>
              <p>欢迎先电话确认时段，也可以直接带宠物到店做初步评估。</p>
              <div className="info-line">
                <strong>地址</strong>
                <span>上海市宜川路街道陕西北路 1620 号</span>
              </div>
              <div className="info-line">
                <strong>时间</strong>
                <span>周一至周日 10:00 - 20:30</span>
              </div>
              <div className="info-line">
                <strong>电话</strong>
                <span>400-886-0520</span>
              </div>
            </div>
            <div
              className="map"
              aria-label="上海市宜川路街道陕西北路 1620 号门店位置示意"
            >
              <img
                className="map-image"
                src="/assets/store-location-map-ai.png"
                alt="泡泡爪印宠物洗护位于上海市宜川路街道陕西北路 1620 号的可爱风格地图"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 泡泡爪印宠物洗护</span>
        <span>一宠一消毒 · 护理过程透明 · 会员积分可用</span>
      </footer>
    </>
  );
}
