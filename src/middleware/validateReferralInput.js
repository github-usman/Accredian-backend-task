import { body, validationResult } from 'express-validator';

export const validateReferralInput = [
  body('referrerName').isString().withMessage('Referrer name must be a string').notEmpty().withMessage('Referrer name is required'),
  body('referrerEmail').isEmail().withMessage('Referrer email must be valid').notEmpty().withMessage('Referrer email is required'),
  body('referrerPhone').isString().withMessage('Referrer phone must be a string').notEmpty().withMessage('Referrer phone is required'),
  body('referrerLocation').isString().withMessage('Referrer location must be a string').notEmpty().withMessage('Referrer location is required'),
  body('refereeName').isString().withMessage('Referee name must be a string').notEmpty().withMessage('Referee name is required'),
  body('refereeEmail').isEmail().withMessage('Referee email must be valid').notEmpty().withMessage('Referee email is required'),
  body('refereePhone').isString().withMessage('Referee phone must be a string').notEmpty().withMessage('Referee phone is required'),
  body('refereeLocation').isString().withMessage('Referee location must be a string').notEmpty().withMessage('Referee location is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
