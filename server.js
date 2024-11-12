const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/log-ip', (req, res) => {
    const { ip } = req.body;
    console.log(`Received IP: ${ip}`);
    res.json({ message: 'IP logged successfully' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
