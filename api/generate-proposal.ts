// api/generate-proposal.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { company, name, type, message } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `당신은 '기업여행연구소'의 전문 컨설턴트입니다. 
            다음 고객의 정보를 바탕으로 정중하고 전문적인 500자 내외의 맞춤형 여행 제안서 초안을 작성해주세요.
            고객명: ${name}, 회사명: ${company}, 문의유형: ${type}, 요청사항: ${message}`
          }]
        }]
      })
    });

    const data = await response.json();
    const aiText = data.candidates[0].content.parts[0].text;

    return res.status(200).json({ result: aiText });
  } catch (error) {
    return res.status(500).json({ error: 'AI 분석 중 오류가 발생했습니다.' });
  }
}