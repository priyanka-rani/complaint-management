import express from 'express';
import supabase from '../supabaseClient.js';

const router = express.Router();

// POST /api/complaints
router.post('/', async (req, res) => {
  const { name, email, complaint } = req.body;

  if (!name || !email || !complaint) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const { data, error } = await supabase
    .from('complaints')
    .insert([{ name, email, complaint }]);

  if (error) return res.status(500).json({ error: error.message });

  res.status(201).json({ message: 'Complaint submitted successfully!', data });
});

// GET /api/complaints
router.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from('complaints')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return res.status(500).json({ error: error.message });

  res.json(data);
});

// PATCH /api/complaints/:id
router.patch('/:id', async (req, res) => {
  const { id } = req.params;

  // Fetch current status
  const { data: existing, error: fetchError } = await supabase
    .from('complaints')
    .select('status')
    .eq('id', id)
    .single();

  if (fetchError || !existing) {
    return res.status(404).json({ error: 'Complaint not found' });
  }

  const newStatus = existing.status === 'Pending' ? 'Resolved' : 'Pending';

  const { data, error } = await supabase
    .from('complaints')
    .update({ status: newStatus })
    .eq('id', id)
    .select();

  if (error) return res.status(500).json({ error: error.message });

  res.json(data[0]);
});

// DELETE /api/complaints/:id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from('complaints')
    .delete()
    .eq('id', id);

  if (error) return res.status(500).json({ error: error.message });

  res.status(204).send();
});

export default router;