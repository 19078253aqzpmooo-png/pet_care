import "./globals.css";

export const metadata = {
  title: "泡泡爪印宠物洗护",
  description: "为猫狗提供洗护、美容、除味、护毛和基础健康观察的一站式宠物护理门店。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
