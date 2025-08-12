export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, wish } = req.body;

    // ဒီမှာ data ကို သိမ်းရမယ့် logic ထည့်ပါ
    // ဥပမာ - Google Sheets API သို့မဟုတ် Firebase အသုံးပြု

    console.log('New wish received:', { name, wish, date: new Date().toISOString() });

    // မူလအနေနဲ့ စာရင်းသိမ်းတာမရှိပဲ အောင်မြင်မှုဖြင့် ပြန်ပေးပါမယ်
    res.status(200).json({ message: 'Success' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
