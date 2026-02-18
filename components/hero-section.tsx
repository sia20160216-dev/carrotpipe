"use client"

import { Phone, MessageCircle, Clock, Shield, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/plumber-fixing-pipe-in-dark-background-professiona.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">24시간 365일 긴급 출동</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-4 text-balance">
            막힌 그 배관,
            <br />
            <span className="text-primary">뚫리면 결제</span>하세요!
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            막혔으면? 뚫어야죠.
            <br />
            <span className="text-foreground font-semibold">10초면 전화 연결됩니다</span>
          </p>

          {/* Contact Box */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 max-w-xl mx-auto mb-8">
            <p className="text-muted-foreground mb-4">
              전화, 문자, 카톡으로
              <br />
              <span className="text-foreground font-semibold">1분 안에 답변을 받아보세요.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-phone hover:bg-phone/90 text-white text-lg px-8">
                <a href="tel:1668-1321">
                  <Phone className="w-5 h-5 mr-2" />
                  전화 연결
                </a>
              </Button>
              <Button asChild size="lg" className="bg-kakao hover:bg-kakao/90 text-kakao-foreground text-lg px-8">
                <a href="sms:010-5776-5882" aria-label="문자 상담">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  문자상담
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              문자상담 번호는? 👉 <span className="text-secondary font-bold">1668-1321</span>
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">1년 A/S 보장</span>
            </div>
            <div className="flex items-center gap-2">
              <Wrench className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">전문 기술진</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">30분 내 도착</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
