import { exec } from 'child_process';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;

    // Caminho absoluto para o script Python
    const scriptPath = path.join(process.cwd(), 'main.py');

    exec(`python ${scriptPath} "${text}"`, (error, stdout, stderr) => {
      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }
      res.status(200).json({ formattedData: stdout });
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
