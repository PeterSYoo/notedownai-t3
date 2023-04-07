import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import * as bcrypt from "bcrypt";

export const userRouter = createTRPCRouter({
  postUser: publicProcedure
    .input(
      z.object({
        email: z.string(),
        username: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const emailExists = await ctx.prisma.user.findFirst({
          where: { email: input.email },
        });

        if (emailExists) {
          throw {
            code: "CONFLICT",
            message: "Email already exists.",
          };
        }

        const usernameExists = await ctx.prisma.user.findFirst({
          where: { username: input.username },
        });

        if (usernameExists) {
          throw {
            code: "CONFLICT",
            message: "Username already exists.",
          };
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(input.password, saltRounds);

        const newUser = await ctx.prisma.user.create({
          data: {
            email: input.email,
            username: input.username,
            password: hashedPassword,
          },
        });

        return {
          success: true,
          message: "User created successfully",
          user: newUser,
        };
      } catch (error) {
        throw {
          success: false,
          code: "USER_CREATE_FAILED",
          message: "Failed to create user",
        };
      }
    }),
});
