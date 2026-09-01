import { Router, Request, Response } from 'express';
import { ApiResponse, User } from '../types/index.js';

const router = Router();

// Endpoint delegates will protect during demo
router.get('/data', (req: Request, res: Response<ApiResponse<string>>) => {
  res.json({
    success: true,
    data: 'Sensitive API payload'
  });
});

router.get('/users', (req: Request, res: Response<ApiResponse<User[]>>) => {
  res.json({
    success: true,
    data: [
      { id: '1', name: 'Alice', role: 'admin' },
      { id: '2', name: 'Bob', role: 'user' }
    ]
  });
});

export default router;