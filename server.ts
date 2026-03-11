import express from "express";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // AI Recommendation API
  app.post("/api/ai/recommend-schedule", async (req, res) => {
    try {
      const { destination, duration, purpose, budget, preferences } = req.body;
      
      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ error: "Gemini API key is not configured." });
      }

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const model = ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `
          당신은 전문 기업 여행 컨설턴트입니다. 다음 정보를 바탕으로 기업용 출장/워크샵 제안서를 작성해주세요.
          
          목적지: ${destination}
          기간: ${duration}
          목적: ${purpose}
          예산: ${budget}
          추가 선호도: ${preferences}
          
          제안서는 다음 형식을 포함해야 합니다:
          1. 제안 개요 (Executive Summary)
          2. 추천 일정 (Day-by-Day)
          3. 예상 비용 분석
          4. 기대 효과 및 차별점
          
          톤앤매너는 매우 전문적이고 신뢰감 있어야 하며, 한국어로 작성해주세요.
          마지막에는 "더 자세한 상담과 확정 견적은 상담 신청을 통해 확인하실 수 있습니다."라는 문구를 포함해주세요.
        `,
      });

      const response = await model;
      res.json({ proposal: response.text });
    } catch (error: any) {
      console.error("AI API Error:", error);
      res.status(500).json({ error: error.message || "Failed to generate proposal" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile("dist/index.html", { root: "." });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
