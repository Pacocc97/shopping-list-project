import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const itemRouter = router({
  addItem: publicProcedure,
});
