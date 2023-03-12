import { Router } from 'express';
import passport from 'passport';


const router = Router();
// router.get('/google' , (req, res) =>
//   res.sendStatus(200)
// );

// router.get('/google/redirect' , (req, res) =>
//   res.sendStatus(200)
// );

router.get('/google', passport.authenticate('google'), (req, res) =>
  res.sendStatus(200)
);
router.get('/google/redirect', passport.authenticate('google'), (req, res) =>
  res.sendStatus(200)
);

export default router;