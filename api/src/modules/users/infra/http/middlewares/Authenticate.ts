import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '@configs/auth';

import AppError from '@shared/errors/AppError';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function Authenticate(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const tokenHeader = request.headers.authorization;

  if (!tokenHeader) {
    throw new AppError('JWT not informed', 401);
  }

  const [, token] = tokenHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded as TokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError('Invalid token', 401);
  }
}
