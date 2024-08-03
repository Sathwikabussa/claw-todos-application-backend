// routes/AuthRoutes.js
const { Router } = require("express");
const supabase = require("../controllers/config/supabaseClient");

const router = Router();

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json({ user });
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const { user, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return res.status(400).json({ error: error.message });
    res.status(200).json({ user });
});

module.exports = router;
