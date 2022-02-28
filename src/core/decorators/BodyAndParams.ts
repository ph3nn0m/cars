import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const BodyAndParam = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
      const { params, body } = ctx.switchToHttp().getRequest();
      return { ...params, ...body };
    },
  );