import { z } from "zod";

export const OwnerSchema = z.string().max(128).optional()
  .describe("Schema/owner name. Defaults to current user.");

export const FormatSchema = z.enum(["json", "markdown"]).default("markdown")
  .describe("Output format.");

export const LimitSchema = z.number().int().min(1).max(5000).default(100)
  .describe("Maximum number of rows/items to return.");

export const OffsetSchema = z.number().int().min(0).default(0)
  .describe("Number of items to skip for pagination.");
